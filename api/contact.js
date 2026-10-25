const requirements = new Set([
  'Enterprise Software Development',
  'Custom Web Applications',
  'Java Spring Boot & Microservices',
  'Angular Frontend Development',
  'Cloud & DevOps Engineering',
  'AI & Automation Integration',
  'HRMS & Recruitment Platforms',
  'IT Consulting & Architecture Review',
]);

function respond(res, status, body) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json(body);
}

function readString(value, maxLength) {
  return typeof value === 'string' && value.length <= maxLength
    ? value.trim()
    : null;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

function getConfiguration() {
  const config = {
    resendApiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.CONTACT_FROM_EMAIL,
    toEmail: process.env.CONTACT_TO_EMAIL || 'ashishcse18@gmail.com',
    whatsappAccessToken: process.env.WHATSAPP_ACCESS_TOKEN,
    whatsappPhoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
    whatsappTo: (process.env.CONTACT_WHATSAPP_TO || '918169057877').replace(
      /\D/g,
      '',
    ),
    whatsappTemplateName: process.env.WHATSAPP_TEMPLATE_NAME,
    whatsappTemplateLanguage:
      process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en_US',
    whatsappApiVersion: process.env.WHATSAPP_API_VERSION,
  };

  const missing = Object.entries({
    RESEND_API_KEY: config.resendApiKey,
    CONTACT_FROM_EMAIL: config.fromEmail,
    WHATSAPP_ACCESS_TOKEN: config.whatsappAccessToken,
    WHATSAPP_PHONE_NUMBER_ID: config.whatsappPhoneNumberId,
    WHATSAPP_TEMPLATE_NAME: config.whatsappTemplateName,
    WHATSAPP_API_VERSION: config.whatsappApiVersion,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (
    config.fromEmail &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.fromEmail)
  ) {
    missing.push('a valid CONTACT_FROM_EMAIL');
  }
  if (
    config.whatsappTo.length < 8 ||
    config.whatsappTo.length > 15 ||
    !/^\d+$/.test(config.whatsappTo)
  ) {
    missing.push('a valid CONTACT_WHATSAPP_TO');
  }
  if (
    config.whatsappApiVersion &&
    !/^v\d+\.\d+$/.test(config.whatsappApiVersion)
  ) {
    missing.push('a valid WHATSAPP_API_VERSION');
  }

  return { config, missing };
}

async function sendEmail(config, inquiry) {
  const details = [
    ['Name', inquiry.name],
    ['Email', inquiry.email],
    ['Phone', inquiry.phone || 'Not provided'],
    ['Company', inquiry.company || 'Not provided'],
    ['Requirement', inquiry.requirement],
    ['Message', inquiry.message],
  ];
  const text = details.map(([label, value]) => `${label}: ${value}`).join('\n\n');
  const html = details
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replace(/\n/g, '<br>')}</p>`,
    )
    .join('');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    signal: AbortSignal.timeout(10000),
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Syntax & Sync Website <${config.fromEmail}>`,
      to: [config.toEmail],
      reply_to: inquiry.email,
      subject: `Website inquiry: ${inquiry.requirement}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    console.error('Resend rejected contact notification', {
      status: response.status,
    });
    throw new Error('Email delivery failed');
  }
}

async function sendWhatsApp(config, inquiry) {
  const summary = [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || 'Not provided'}`,
    `Company: ${inquiry.company || 'Not provided'}`,
    `Requirement: ${inquiry.requirement}`,
    `Message: ${inquiry.message}`,
  ]
    .join('\n')
    .slice(0, 1024);
  const response = await fetch(
    `https://graph.facebook.com/${config.whatsappApiVersion}/${config.whatsappPhoneNumberId}/messages`,
    {
      method: 'POST',
      signal: AbortSignal.timeout(10000),
      headers: {
        Authorization: `Bearer ${config.whatsappAccessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: config.whatsappTo,
        type: 'template',
        template: {
          name: config.whatsappTemplateName,
          language: { code: config.whatsappTemplateLanguage },
          components: [
            {
              type: 'body',
              parameters: [{ type: 'text', text: summary }],
            },
          ],
        },
      }),
    },
  );

  if (!response.ok) {
    console.error('Meta rejected WhatsApp contact notification', {
      status: response.status,
    });
    throw new Error('WhatsApp delivery failed');
  }
}

module.exports = async function contact(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return respond(res, 405, { message: 'Method not allowed.' });
  }

  if (Number(req.headers['content-length']) > 16000) {
    return respond(res, 413, { message: 'The inquiry is too large.' });
  }

  if (
    typeof req.headers['content-type'] !== 'string' ||
    !req.headers['content-type'].toLowerCase().includes('application/json')
  ) {
    return respond(res, 415, { message: 'A JSON request body is required.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return respond(res, 400, { message: 'The request body is invalid.' });
    }
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return respond(res, 400, { message: 'The request body is invalid.' });
  }
  if (typeof body.website === 'string' && body.website.trim()) {
    return respond(res, 400, { message: 'The request could not be accepted.' });
  }

  const inquiry = {
    name: readString(body.name, 100),
    email: readString(body.email, 254),
    phone: readString(body.phone || '', 32),
    company: readString(body.company || '', 120),
    requirement: readString(body.requirement, 100),
    message: readString(body.message, 5000),
  };
  if (
    !inquiry.name ||
    inquiry.name.length < 2 ||
    !inquiry.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) ||
    inquiry.phone === null ||
    inquiry.company === null ||
    !inquiry.requirement ||
    !requirements.has(inquiry.requirement) ||
    !inquiry.message ||
    inquiry.message.length < 10
  ) {
    return respond(res, 400, { message: 'Please check the inquiry details and try again.' });
  }

  const { config, missing } = getConfiguration();
  if (missing.length) {
    console.error('Contact notifications are not configured', { missing });
    return respond(res, 503, {
      message: 'Contact notifications are not configured yet. Please email us directly.',
      sent: { email: false, whatsapp: false },
    });
  }

  const results = await Promise.allSettled([
    sendEmail(config, inquiry),
    sendWhatsApp(config, inquiry),
  ]);
  const sent = {
    email: results[0].status === 'fulfilled',
    whatsapp: results[1].status === 'fulfilled',
  };

  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      console.error(
        `${index === 0 ? 'Email' : 'WhatsApp'} contact notification failed`,
        result.reason instanceof Error ? result.reason.message : 'Unknown error',
      );
    }
  });

  if (sent.email && sent.whatsapp) {
    return respond(res, 200, {
      message: 'Your inquiry was sent by email and WhatsApp.',
      sent,
    });
  }

  return respond(res, 502, {
    message: `Notification delivery incomplete. Email: ${sent.email ? 'sent' : 'failed'}; WhatsApp: ${sent.whatsapp ? 'sent' : 'failed'}. Please try again or contact us directly.`,
    sent,
  });
};
