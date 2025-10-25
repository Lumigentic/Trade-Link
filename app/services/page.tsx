'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Ship, Package, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="w-16 h-16" />,
      title: 'Client Acquisition for Overseas Products',
      description: "Looking to take your product into international markets? We'll leverage our network and market-knowledge to find the right clients for you overseas, helping you grow your reach.",
      features: [
        'Market research and analysis',
        'Client identification and vetting',
        'Relationship building',
        'Contract negotiation support',
      ],
    },
    {
      icon: <Ship className="w-16 h-16" />,
      title: 'Door-to-Door Transport Solutions',
      description: "From pick-up to delivery, we manage the logistics so you don't have to. Whether it's full container loads, groupage or specialised freight, we ensure your cargo arrives safely, on time, and ready for the next step.",
      features: [
        'Full container loads (FCL)',
        'Less than container loads (LCL/Groupage)',
        'Specialised freight handling',
        'Real-time tracking',
      ],
    },
    {
      icon: <Package className="w-16 h-16" />,
      title: 'Import & Export Customs Clearance',
      description: "Customs rules can be a minefield. Our experienced team handles import and export clearance, ensuring compliance, avoiding delays and minimising cost. From documentation to duty and VAT advice – we've got you covered.",
      features: [
        'Documentation preparation',
        'Duty and VAT optimization',
        'Compliance management',
        'Fast-track clearance',
      ],
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
              Comprehensive trade and logistics solutions designed to help your business succeed in global markets
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
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[var(--accent-orange)] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="primary" size="lg">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] rounded-2xl p-12 text-white">
                    <h3 className="font-heading text-2xl font-bold mb-6">Why Choose This Service?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Expert team with years of experience</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Competitive pricing and transparent costs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>24/7 customer support</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--accent-orange)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Proven track record of success</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss how our services can help your business grow
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
