'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Ship, Globe, CheckCircle, ArrowRight, Users } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="w-16 h-16" />,
      title: 'Market Entry',
      headline: 'Enter New Markets with Confidence.',
      subheadline: 'Strategic research and local insight to help you launch successfully in Spain, Poland, and the UK.',
      description: "Expanding your business internationally doesn't have to be a gamble. With Trade Link, you gain access to in-depth market intelligence, competitive benchmarking, and hands-on local support that ensure your expansion is smart, compliant, and profitable.",
      features: [
        'Detailed market analysis and feasibility reports',
        'Competitor mapping and pricing insights',
        'Regulatory and legal compliance guidance',
        'Distributor and partner identification',
        'Localization strategy and cultural adaptation',
      ],
      whyItMatters: "We help you avoid costly mistakes and seize high-impact opportunities — turning complexity into clarity, and plans into performance.",
      cta: "Start Your Market Entry Journey"
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: 'Trader Connection',
      headline: 'Building Stronger Trade Relationships Across Europe.',
      subheadline: 'Connecting exporters, importers, and distributors for seamless cross-border partnerships.',
      description: "Trade Link specializes in connecting the right businesses between Spain, Poland, and the UK — accelerating growth through trusted relationships. We understand the challenges of international collaboration, so we bridge not only markets but also cultures and expectations.",
      features: [
        'Tailored B2B matchmaking',
        'Partner vetting and background checks',
        'Negotiation and deal facilitation',
        'Ongoing relationship management',
      ],
      whyItMatters: "Finding the right trade partner can define your success. We leverage our network, local knowledge, and credibility to ensure your partnerships are built on trust and mutual benefit.",
      cta: "Find Your Ideal Trade Partner"
    },
    {
      icon: <Ship className="w-16 h-16" />,
      title: 'Transport & Customs',
      headline: 'Moving Your Goods Smoothly, Every Time.',
      subheadline: 'Reliable transport and customs clearance between Spain, Poland, and the UK.',
      description: "From pickup to delivery, we make cross-border logistics effortless. Trade Link manages transport operations, customs documentation, and compliance checks — ensuring your shipments arrive safely, on time, and without unexpected delays.",
      features: [
        'Road transport between Spain, Poland, and the UK',
        'Customs declarations and clearance support',
        'Import/export documentation management',
        'Real-time shipment tracking and reporting',
      ],
      whyItMatters: "In international trade, time and accuracy are everything. Our logistics experts simplify the complex so your business can move faster, safer, and smarter.",
      cta: "Request a Transport Quote"
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--blue-gradient-start)] to-[var(--primary-teal)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-[var(--accent-orange)]">Services</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              From research and market entry to transport and customs clearance — we handle every part of your trade journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-[var(--primary-teal)] mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {service.headline}
                  </h2>
                  <p className="text-lg text-[var(--primary-teal)] font-medium mb-6">
                    {service.subheadline}
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                    Our {service.title} Solutions Include:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[var(--accent-orange)] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="primary" size="lg">
                    {service.cta} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] rounded-2xl p-12 text-white">
                    <h3 className="font-heading text-2xl font-bold mb-6">Why It Matters</h3>
                    <p className="text-lg leading-relaxed">
                      {service.whyItMatters}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--blue-gradient-start)] to-[var(--primary-teal)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Connecting Markets.</span>
              <br />
              <span className="text-[var(--accent-orange)]">Moving Opportunities.</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We handle every part of your trade journey, from research to delivery.
            </p>
            <p className="text-lg text-white/80 mb-10">
              Ready to start?
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
