import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { siteConfig } from '@/lib/seo.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[var(--blue-gradient-start)] via-[var(--primary-teal)] to-[var(--blue-gradient-end)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Trade Link Logo"
                width={40}
                height={40}
                className="w-auto h-10"
              />
            </Link>
            <p className="text-gray-100 text-sm mb-4">
              Your trusted partner in global trade and logistics, delivering precision, care and reliability.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-100 text-sm">Client Acquisition</li>
              <li className="text-gray-100 text-sm">Door-to-Door Transport</li>
              <li className="text-gray-100 text-sm">Import Customs Clearance</li>
              <li className="text-gray-100 text-sm">Export Customs Clearance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[var(--accent-orange)]" />
                <span className="text-gray-100 text-sm">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0 text-[var(--accent-orange)]" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0 text-[var(--accent-orange)]" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-100 text-sm">
              © {currentYear} Trade Link Customs & Logistics Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-gray-100 hover:text-[var(--accent-orange)] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-100 text-sm">
                Powered by{' '}
                <a
                  href="https://lumigentic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-orange)] hover:text-white font-medium"
                >
                  Lumigentic
                </a>
              </span>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-200 text-xs">
            Certified by BIFA | Member of Chartered Institute of Export & International Trade | Member of FSB
          </div>
        </div>
      </div>
    </footer>
  );
}
