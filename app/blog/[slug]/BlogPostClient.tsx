'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { BlogPost } from '@/lib/blog';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-[var(--primary-teal)] hover:text-[var(--accent-orange)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[var(--accent-orange)] bg-opacity-10 text-[var(--accent-orange)] text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>

          {post.image && (
            <div className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none
              prose-headings:font-heading
              prose-h2:text-3xl prose-h2:font-bold prose-h2:text-[var(--primary-teal)] prose-h2:mt-12 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-[var(--accent-orange)]
              prose-h3:text-2xl prose-h3:font-bold prose-h3:text-gray-800 prose-h3:mt-10 prose-h3:mb-5 prose-h3:bg-gradient-to-r prose-h3:from-teal-50 prose-h3:to-transparent prose-h3:px-4 prose-h3:py-3 prose-h3:rounded-lg prose-h3:border-l-4 prose-h3:border-[var(--primary-teal)]
              prose-h4:text-xl prose-h4:font-bold prose-h4:text-[var(--primary-teal)] prose-h4:mt-8 prose-h4:mb-4 prose-h4:flex prose-h4:items-center prose-h4:gap-2
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-a:text-[var(--primary-teal)] prose-a:font-medium prose-a:no-underline hover:prose-a:text-[var(--accent-orange)] hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold prose-strong:bg-yellow-100 prose-strong:px-1
              prose-ul:my-8 prose-ul:space-y-3 prose-ul:bg-gray-50 prose-ul:p-6 prose-ul:rounded-xl
              prose-ol:my-8 prose-ol:space-y-4 prose-ol:bg-blue-50 prose-ol:p-6 prose-ol:rounded-xl
              prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-base
              prose-li:marker:text-[var(--accent-orange)] prose-li:marker:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-[var(--accent-orange)] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
              prose-code:text-[var(--primary-teal)] prose-code:bg-teal-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:font-semibold
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:my-8 prose-pre:overflow-x-auto prose-pre:shadow-lg
              prose-table:my-10 prose-table:shadow-md prose-table:rounded-lg prose-table:overflow-hidden
              prose-th:bg-[var(--primary-teal)] prose-th:text-white prose-th:font-bold prose-th:p-4 prose-th:text-left
              prose-td:p-4 prose-td:border prose-td:border-gray-200 prose-td:bg-white
              prose-hr:my-12 prose-hr:border-2 prose-hr:border-gray-200
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Tag className="w-5 h-5 text-gray-500" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-br from-[#1C355E] to-[#2A4A7F] rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-4xl font-bold">
                    <span className="text-white">Trade</span>
                    <span className="text-[#E87722]">Link</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  Need Expert Guidance?
                </h3>
                <p className="text-white/90 text-lg">
                  Get help navigating UK customs systems with CDS integration, GVMS setup, and compliance support.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#E87722] hover:bg-[#d66a1a] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
}
