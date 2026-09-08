import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent {
  industries = [
    { name: 'Education', desc: 'AI Learning Management Systems, online exam engines, and faculty portals.', icon: '🎓' },
    { name: 'Healthcare', desc: 'Patient management, HIPAA-compliant data systems, and tele-health portals.', icon: '🏥' },
    { name: 'HR & Recruitment', desc: 'Bulk recruitment automation, WhatsApp schedulers, and template document generators.', icon: '💼' },
    { name: 'Manufacturing', desc: 'ERP systems, supply chain automation, and IoT hardware integration dashboards.', icon: '🏭' },
    { name: 'Retail', desc: 'Point of sale systems, multi-location inventory, and customer loyalty platforms.', icon: '🛍️' },
    { name: 'Real Estate', desc: 'Property portals, CRM lead automation, virtual tours, and lease agreements.', icon: '🏢' },
    { name: 'Finance', desc: 'Secure payment gateway integrations, compliance reporting, and transaction ledgers.', icon: '💳' },
    { name: 'Logistics', desc: 'Fleet tracking, route optimization, automated dispatching, and warehouse management.', icon: '🚛' },
    { name: 'E-Commerce', desc: 'High-throughput shopping carts, dynamic catalogs, and Meta messaging integration.', icon: '🛒' }
  ];
}
