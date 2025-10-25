'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { Award, Users, Globe, Target, ArrowRight, Package, Factory, ShoppingBag, Shirt, Zap, Truck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[var(--blue-gradient-start)] to-[var(--primary-teal)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-[var(--accent-orange)]">Trade Link</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Your trusted partner in global trade and logistics since decades
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Trade Link, we combine decades of experience in international logistics, freight and customs to provide end-to-end trade solutions.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Based in Hull (UK), we are proud to support businesses of all sizes in navigating the complexities of cross-border shipping and customs.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to make global trade seamless, efficient and reliable for you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] p-6 rounded-2xl text-white">
                <Award className="w-10 h-10 mb-3" />
                <h3 className="font-heading text-2xl font-bold mb-1">BIFA</h3>
                <p className="text-sm text-gray-100">Certified Member</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-dark)] p-6 rounded-2xl text-white mt-8">
                <Globe className="w-10 h-10 mb-3" />
                <h3 className="font-heading text-2xl font-bold mb-1">50+</h3>
                <p className="text-sm text-gray-100">Countries</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--blue-gradient-start)] to-[var(--primary-teal)] p-6 rounded-2xl text-white">
                <Users className="w-10 h-10 mb-3" />
                <h3 className="font-heading text-2xl font-bold mb-1">Expert</h3>
                <p className="text-sm text-gray-100">Team</p>
              </div>
              <div className="bg-gradient-to-br from-[var(--primary-teal-dark)] to-[var(--blue-gradient-end)] p-6 rounded-2xl text-white mt-8">
                <Target className="w-10 h-10 mb-3" />
                <h3 className="font-heading text-2xl font-bold mb-1">100%</h3>
                <p className="text-sm text-gray-100">Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">Expertise</h3>
              <p className="text-gray-600">
                Years of experience in international trade, customs and logistics
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Dependable service you can count on, every time
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">Personal Service</h3>
              <p className="text-gray-600">
                Tailored solutions designed specifically for your business
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience working across diverse sectors, providing tailored logistics solutions for each industry's unique requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] p-8 rounded-2xl text-white hover:shadow-xl transition-shadow"
            >
              <Package className="w-12 h-12 mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">E-commerce & Retail</h3>
              <p className="text-gray-100">
                Fast, reliable shipping solutions for online businesses and retail operations worldwide
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-orange-dark)] p-8 rounded-2xl text-white hover:shadow-xl transition-shadow"
            >
              <Factory className="w-12 h-12 mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-100">
                Efficient supply chain management for raw materials, components, and finished goods
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[var(--blue-gradient-start)] to-[var(--primary-teal)] p-8 rounded-2xl text-white hover:shadow-xl transition-shadow"
            >
              <ShoppingBag className="w-12 h-12 mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">Consumer Goods</h3>
              <p className="text-gray-100">
                Specialized handling for consumer products with flexible delivery options
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[var(--primary-teal-dark)] to-[var(--blue-gradient-end)] p-8 rounded-2xl text-white hover:shadow-xl transition-shadow"
            >
              <Shirt className="w-12 h-12 mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">Fashion & Textiles</h3>
              <p className="text-gray-100">
                Time-sensitive logistics for seasonal collections and fashion-forward brands
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-[var(--accent-orange-dark)] to-[var(--accent-orange)] p-8 rounded-2xl text-white hover:shadow-xl transition-shadow"
            >
              <Zap className="w-12 h-12 mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">Electronics & Technology</h3>
              <p className="text-gray-100">
                Secure, compliant shipping for high-value electronics and tech equipment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-[var(--primary-teal)] to-[var(--primary-teal-dark)] p-8 rounded-2xl text-white hover:shadow-xl transition-shadow"
            >
              <Truck className="w-12 h-12 mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">Industrial Equipment</h3>
              <p className="text-gray-100">
                Heavy cargo expertise for machinery, tools, and industrial components
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss how we can support your international trade needs
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
