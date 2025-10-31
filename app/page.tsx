'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import ParticleBackground from '@/components/ParticleBackground';
import { Ship, Package, Globe, CheckCircle, ArrowRight, Award, Shield, Users } from 'lucide-react';

export default function HomePage() {

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Market Research & Entry',
      description: "Open new doors with confidence. We provide actionable market intelligence, competitive analysis, and local entry strategies tailored to your product and sector.",
      details: ['Market feasibility studies', 'Partner and distributor research', 'Localization and compliance support']
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Trader Connections',
      description: "We bring businesses together. Trade Link connects exporters, importers, and distributors across Spain, Poland, and the UK.",
      details: ['B2B introductions and matchmaking', 'Trade facilitation and negotiations', 'Local partner vetting']
    },
    {
      icon: <Ship className="w-12 h-12" />,
      title: 'Transport & Customs Clearance',
      description: "Move goods effortlessly across borders. Our transport and customs experts make sure your cargo reaches its destination smoothly and compliantly.",
      details: ['Road transport between UK, Poland, and Spain', 'Customs documentation and clearance', 'Real-time shipment updates']
    },
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: 'One partner for research, connection, and logistics',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: 'Local experts in three major European trade markets',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: 'End-to-end transparency and reliability',
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: 'Proven results for SMEs and exporters alike',
    },
  ];

  const testimonials = [
    {
      quote: "Trade Link helped us launch in Europe – they handled everything from transport to customs clearance, and we were live in under three months.",
      author: "Client A",
      company: "Manufacturing Company",
      metrics: {
        timeframe: "3 months",
        achievement: "Market entry",
      },
    },
    {
      quote: "Their door-to-door service saved us hours of coordination and gave us full visibility on shipment status.",
      author: "Client B",
      company: "Retail Business",
      metrics: {
        savings: "50+ hours",
        improvement: "Real-time",
      },
    },
    {
      quote: "The customs clearance expertise at Trade Link saved us from costly delays and compliance issues. Highly professional team.",
      author: "Client C",
      company: "E-commerce Platform",
      metrics: {
        result: "Zero delays",
        compliance: "100%",
      },
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--blue-gradient-start)] via-[var(--blue-gradient-mid)] to-[var(--blue-gradient-end)] text-white overflow-hidden gradient-animated">
        {/* Particle Network Background */}
        <ParticleBackground />

        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-20 z-[2]">
          <div className="absolute top-20 -left-10 w-96 h-96 bg-[var(--accent-purple)]/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-10 w-96 h-96 bg-[var(--accent-orange)]/40 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-[var(--accent-pink)]/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-[3]"></div>

        {/* Radial Gradient Spotlight */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30 z-[3]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connecting Markets.
              <br className="hidden sm:block" />
              <span className="text-[var(--accent-orange)]">
                Moving Opportunities.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Trade Link helps businesses expand, connect, and move goods seamlessly between Spain, Poland, and the United Kingdom - from research and market entry to transport and customs clearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Start Your Expansion <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* Intro/About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering Cross-Border Growth
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
              At Trade Link, we're more than just a logistics or consulting firm - we're your bridge to international success. With deep expertise in the Spanish, Polish, and UK markets, we help companies enter new territories, find trusted partners, and deliver goods with zero hassle.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Whether you're a manufacturer, importer, or distributor, Trade Link is your single point of contact for research, connections, and compliant transport solutions that drive growth.
            </p>
          </motion.div>
        </div>
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
              From market research to final delivery — we handle it all
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
                className="group relative bg-white p-8 rounded-3xl shadow-card-premium hover:shadow-card-premium-hover transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Border on Hover */}
                <div className="absolute inset-0 border-2 border-[var(--primary-teal)] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon with Glow Effect */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex p-5 rounded-2xl bg-[var(--primary-teal)] text-white mb-6 shadow-lg group-hover:shadow-2xl group-hover:glow-teal transition-all duration-500"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary-teal)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Premium Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button href="/services" variant="outline" size="sm">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--accent-orange)]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                Why Choose Trade Link
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                We simplify international expansion by combining market research, partner connections, and reliable transport under one roof. With expertise in Spain, Poland, and the UK, we help businesses grow across borders with confidence.
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

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-[var(--primary-teal)] p-6 sm:p-8 rounded-3xl text-white shadow-card-premium hover:shadow-card-premium-hover transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 mb-4 drop-shadow-lg" />
                  </motion.div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-2 drop-shadow-md">20+</h3>
                  <p className="text-white/90 text-sm sm:text-base font-medium">Years Experience</p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-[var(--accent-orange)] p-6 sm:p-8 rounded-3xl text-white shadow-card-premium hover:shadow-card-premium-hover transition-all duration-500 mt-6 sm:mt-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe className="w-10 h-10 sm:w-12 sm:h-12 mb-4 drop-shadow-lg" />
                  </motion.div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-2 drop-shadow-md">50+</h3>
                  <p className="text-white/90 text-sm sm:text-base font-medium">Countries Served</p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-[var(--primary-teal)] p-6 sm:p-8 rounded-3xl text-white shadow-card-premium hover:shadow-card-premium-hover transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Ship className="w-10 h-10 sm:w-12 sm:h-12 mb-4 drop-shadow-lg" />
                  </motion.div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-2 drop-shadow-md">1000+</h3>
                  <p className="text-white/90 text-sm sm:text-base font-medium">Shipments Handled</p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-[var(--primary-teal-dark)] p-6 sm:p-8 rounded-3xl text-white shadow-card-premium hover:shadow-card-premium-hover transition-all duration-500 mt-6 sm:mt-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Package className="w-10 h-10 sm:w-12 sm:h-12 mb-4 drop-shadow-lg" />
                  </motion.div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold mb-2 drop-shadow-md">100%</h3>
                  <p className="text-white/90 text-sm sm:text-base font-medium">Client Satisfaction</p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </motion.div>
            </div>
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
              const colors = [
                'bg-[var(--primary-teal)]',
                'bg-[var(--accent-orange)]',
                'bg-[var(--primary-teal-dark)]',
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.4 } }}
                  className="group relative overflow-hidden rounded-3xl shadow-card-premium hover:shadow-card-premium-hover transition-all duration-500"
                >
                  {/* Border on Hover */}
                  <div className="absolute inset-0 border-2 border-[var(--primary-teal)] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-white p-8 sm:p-10">
                    {/* Quote Icon with Animation */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`inline-block p-3 sm:p-4 rounded-2xl ${colors[index]} mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                    >
                      <div className="text-white text-3xl sm:text-4xl font-bold leading-none drop-shadow-md">"</div>
                    </motion.div>

                    <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed italic">
                      {testimonial.quote}
                    </p>

                    {/* Metrics with Premium Cards */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                      {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className={`relative ${colors[index]} p-3 sm:p-4 rounded-2xl text-center shadow-lg overflow-hidden group/metric`}
                        >
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            <p className="text-lg sm:text-xl font-bold text-white mb-0.5 drop-shadow-md leading-tight">{value}</p>
                            <p className="text-[10px] sm:text-xs text-white/95 capitalize font-medium leading-tight">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Author Info with Enhanced Design */}
                    <div className="flex items-center pt-6 border-t border-gray-100">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 sm:w-16 sm:h-16 ${colors[index]} rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg`}
                      >
                        {testimonial.author.charAt(0)}
                      </motion.div>
                      <div className="ml-4 sm:ml-5">
                        <p className="font-bold text-base sm:text-lg text-gray-900">{testimonial.author}</p>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">{testimonial.company}</p>
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
      <section className="relative py-32 overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-gradient-start)] via-[var(--primary-teal)] to-[var(--accent-orange)] gradient-animated"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--accent-purple)]/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--accent-pink)]/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon Animation */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse-glow"></div>
                <div className="relative bg-white/20 backdrop-blur-sm p-6 rounded-full">
                  <Globe className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
            >
              Ready to expand your
              <br />
              <span className="text-[var(--accent-orange-light)]">
                business across Europe?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            >
              Let's make it happen together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href="/contact" variant="secondary" size="lg">
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/90"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">BIFA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">50+ Countries</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="1"/>
          </svg>
        </div>
      </section>
    </div>
  );
}
