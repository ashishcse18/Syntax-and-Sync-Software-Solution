# SyntaxSyncWebsite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Contact form notifications

The contact form uses the Vercel serverless function in `api/contact.js`. Configure these values in the Vercel project under **Settings > Environment Variables**, then redeploy:

- `RESEND_API_KEY`: Resend API key.
- `CONTACT_FROM_EMAIL`: Sender address from a domain verified in Resend.
- `CONTACT_TO_EMAIL` (optional): Notification recipient; defaults to `ashishcse18@gmail.com`.
- `WHATSAPP_ACCESS_TOKEN`: Meta WhatsApp Cloud API access token.
- `WHATSAPP_PHONE_NUMBER_ID`: Meta WhatsApp Cloud API phone number ID for the sending business number.
- `CONTACT_WHATSAPP_TO` (optional): Destination number in international format without `+`; defaults to `918169057877`.
- `WHATSAPP_TEMPLATE_NAME`: Name of an approved WhatsApp message template.
- `WHATSAPP_TEMPLATE_LANGUAGE` (optional): Template language code; defaults to `en_US`.
- `WHATSAPP_API_VERSION`: A currently supported Meta Graph API version for your WhatsApp app.

Create and get approval for a WhatsApp utility template with one body variable, for example: `New website inquiry received: {{1}}`. The function supplies the lead's name, email, phone, company, requested service, and message as that variable. Meta requires an approved template for business-initiated WhatsApp messages.

The form reports success only after both notifications are accepted by their providers. If either delivery fails, it shows which channel failed and keeps the submitted form available to retry. Provider credentials are used only by the serverless function and must never be added to frontend code or committed to the repository.

The Angular development server alone does not run Vercel functions. To test the complete form locally, link the project to Vercel, configure local environment values in the ignored `.env.local` file, and run `npx vercel dev`.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
