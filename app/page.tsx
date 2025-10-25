'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Ship, Package, Globe, CheckCircle, ArrowRight, Award } from 'lucide-react';

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Client Acquisition for Overseas Products',
      description: "We leverage our network and market-knowledge to find the right clients for you overseas, helping you grow your reach.",
    },
    {
      icon: <Ship className="w-12 h-12" />,
      title: 'Door-to-Door Transport Solutions',
      description: "From pick-up to delivery, we manage the logistics so you don't have to. Your cargo arrives safely, on time, and ready for the next step.",
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Import & Export Customs Clearance',
      description: "Our experienced team handles import and export clearance, ensuring compliance, avoiding delays and minimising cost.",
    },
  ];

  const features = [
    'Decades of experience in international logistics',
    'BIFA certified and fully compliant',
    'Member of Chartered Institute of Export & International Trade',
    'Personalised service tailored to your needs',
  ];

  const testimonials = [
    {
      quote: "Trade Link helped us launch in Europe – they handled everything from transport to customs clearance, and we were live in under three months.",
      author: "Client A",
      company: "Manufacturing Company",
    },
    {
      quote: "Their door-to-door service saved us hours of coordination and gave us full visibility on shipment status.",
      author: "Client B",
      company: "Retail Business",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--blue-gradient-start)] via-[var(--primary-teal)] to-[var(--blue-gradient-end)] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Your Trusted Partner in<br />
              <span className="text-[var(--accent-orange)]">Global Trade & Logistics</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Whether you're expanding into overseas markets, streamlining transport operations or ensuring seamless customs clearance, we deliver precision, care and reliability every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive trade and logistics solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[var(--primary-teal)] mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Button href="/services" variant="outline" size="sm">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-[var(--primary-teal)]">Trade Link</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Trade Link, we combine decades of experience in international logistics, freight and customs to provide end-to-end trade solutions. Based in Hull (UK), we support businesses of all sizes in navigating the complexities of cross-border shipping and customs.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-[var(--accent-orange)] mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/about" variant="primary" size="lg">
                  Learn More About Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] p-8 rounded-2xl text-white">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="font-heading text-3xl font-bold mb-2">20+</h3>
                <p className="text-gray-100">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-dark)] p-8 rounded-2xl text-white mt-8">
                <Globe className="w-12 h-12 mb-4" />
                <h3 className="font-heading text-3xl font-bold mb-2">50+</h3>
                <p className="text-gray-100">Countries Served</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--blue-gradient-start)] to-[var(--primary-teal)] p-8 rounded-2xl text-white">
                <Ship className="w-12 h-12 mb-4" />
                <h3 className="font-heading text-3xl font-bold mb-2">1000+</h3>
                <p className="text-gray-100">Shipments Handled</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--primary-teal-dark)] to-[var(--blue-gradient-end)] p-8 rounded-2xl text-white mt-8">
                <Package className="w-12 h-12 mb-4" />
                <h3 className="font-heading text-3xl font-bold mb-2">100%</h3>
                <p className="text-gray-100">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses worldwide for reliable global trade solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-[var(--accent-orange)] text-5xl mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--blue-gradient-start)] to-[var(--blue-gradient-end)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Expand Your Global Reach?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Get in touch today and find out how we can help your business thrive internationally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
