'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import ParticleBackground from '@/components/ParticleBackground';
import { Ship, Package, Globe, CheckCircle, ArrowRight, Award, Shield, Clock, Users } from 'lucide-react';

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
    {
      icon: <Award className="w-6 h-6" />,
      text: 'Decades of experience in international logistics, freight and customs',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: 'BIFA certified and fully compliant with all regulatory requirements',
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: 'Member of Chartered Institute of Export & International Trade',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: 'Personalised service tailored to your specific business needs',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: 'Extensive global network spanning 50+ countries worldwide',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: 'Proven track record with 100% client satisfaction rate',
    },
  ];

  const testimonials = [
    {
      quote: "Trade Link helped us launch in Europe – they handled everything from transport to customs clearance, and we were live in under three months.",
      author: "Client A",
      company: "Manufacturing Company",
      metrics: {
        timeframe: "3 months",
        achievement: "European market entry",
      },
    },
    {
      quote: "Their door-to-door service saved us hours of coordination and gave us full visibility on shipment status.",
      author: "Client B",
      company: "Retail Business",
      metrics: {
        savings: "50+ hours/month",
        improvement: "Real-time tracking",
      },
    },
    {
      quote: "The customs clearance expertise at Trade Link saved us from costly delays and compliance issues. Highly professional team.",
      author: "Client C",
      company: "E-commerce Platform",
      metrics: {
        result: "Zero delays",
        compliance: "100% compliant",
      },
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--blue-gradient-start)] via-[var(--primary-teal)] to-[var(--blue-gradient-end)] text-white overflow-hidden">
        {/* Particle Network Background */}
        <ParticleBackground />

        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-30 z-[2]">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-[3]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <motion.div {...fadeInUp}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Your Trusted Partner in<br className="hidden sm:block" />
              <span className="text-[var(--accent-orange)]">Global Trade & Logistics</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto px-4">
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--primary-teal)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--accent-orange)]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--primary-teal)]/30"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-teal)]/5 to-[var(--accent-orange)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] text-white mb-6 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Button href="/services" variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
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
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Trade Link?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                At Trade Link, we combine decades of experience in international logistics, freight and customs to provide end-to-end trade solutions. Based in Hull (UK), we support businesses of all sizes in navigating the complexities of cross-border shipping and customs.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="text-[var(--accent-orange)] mr-2 sm:mr-3 flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
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
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] p-4 sm:p-6 md:p-8 rounded-2xl text-white">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4" />
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">20+</h3>
                <p className="text-gray-100 text-xs sm:text-sm md:text-base">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-dark)] p-4 sm:p-6 md:p-8 rounded-2xl text-white mt-4 sm:mt-6 md:mt-8">
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4" />
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">50+</h3>
                <p className="text-gray-100 text-xs sm:text-sm md:text-base">Countries Served</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--blue-gradient-start)] to-[var(--primary-teal)] p-4 sm:p-6 md:p-8 rounded-2xl text-white">
                <Ship className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4" />
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">1000+</h3>
                <p className="text-gray-100 text-xs sm:text-sm md:text-base">Shipments Handled</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--primary-teal-dark)] to-[var(--blue-gradient-end)] p-4 sm:p-6 md:p-8 rounded-2xl text-white mt-4 sm:mt-6 md:mt-8">
                <Package className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4" />
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</h3>
                <p className="text-gray-100 text-xs sm:text-sm md:text-base">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials & Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses worldwide for reliable global trade solutions that deliver measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const gradients = [
                'from-[var(--primary-teal)] to-[var(--blue-gradient-end)]',
                'from-[var(--accent-orange)] to-[var(--accent-orange-dark)]',
                'from-[var(--blue-gradient-start)] to-[var(--primary-teal)]',
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-5`}></div>

                  <div className="relative bg-white p-6 sm:p-8">
                    {/* Quote Icon */}
                    <div className={`inline-block p-2 sm:p-3 rounded-lg bg-gradient-to-br ${gradients[index]} mb-4`}>
                      <div className="text-white text-2xl sm:text-3xl font-bold leading-none">"</div>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>

                    {/* Metrics with Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                      {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                        <div key={idx} className={`bg-gradient-to-br ${gradients[index]} p-3 sm:p-4 rounded-xl text-center`}>
                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{value}</p>
                          <p className="text-[10px] sm:text-xs text-white/90 capitalize font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        </div>
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md`}>
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="font-bold text-sm sm:text-base text-gray-900">{testimonial.author}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Expand Your Global Reach?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch today and find out how we can help your business thrive internationally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
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
