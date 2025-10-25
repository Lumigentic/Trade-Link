'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-100">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Trade Link Customs & Logistics Ltd ("we", "us", or "our") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your personal information.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Contact information (name, email, phone number)</li>
              <li>Company information</li>
              <li>Communication preferences</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries</li>
              <li>Send service-related communications</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
              We comply with GDPR and UK data protection regulations.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              We use cookies to improve your browsing experience. You can control cookie settings
              in your browser preferences.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              For privacy-related questions, please contact us at:<br />
              Email: enquiries@trade-link.co.uk<br />
              Address: 29 Newland Ave, Hull HU5 3BE, UK
            </p>

            <p className="text-sm text-gray-600 mt-12">
              <strong>Note to Agata:</strong> This is a basic privacy policy template.
              Please review and update with specific legal requirements and company policies.
              Consider consulting with a legal professional for compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
