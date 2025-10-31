'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';

interface BlogPageClientProps {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--blue-gradient-start)] via-[var(--primary-teal)] to-[var(--primary-teal-dark)] text-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[var(--accent-orange)]/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-[var(--accent-orange)] font-bold text-sm">
                📚 Knowledge Hub
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Blog & <span className="text-[var(--accent-orange)]">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with our latest articles on international trade, customs regulations, and logistics best practices
            </p>
          </motion.div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 34.7C840 32 960 32 1080 37.3C1200 43 1320 53 1380 58.7L1440 64V80H0V0Z" fill="white" fillOpacity="1"/>
          </svg>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1500px' }}>
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-card-premium hover:shadow-card-premium-hover transition-all duration-500 border border-gray-100"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Section */}
                <div className="h-56 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-[var(--primary-teal)] to-[var(--blue-gradient-end)] flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">TL</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-orange)]/5 text-[var(--accent-orange)] text-sm font-bold rounded-full border border-[var(--accent-orange)]/20">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-4 h-4 mr-1.5 text-[var(--primary-teal)]" />
                      {new Date(post.date).toLocaleDateString('en-GB')}
                    </div>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary-teal)] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Button href={`/blog/${post.slug}`} variant="outline" size="sm">
                      Read More <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
