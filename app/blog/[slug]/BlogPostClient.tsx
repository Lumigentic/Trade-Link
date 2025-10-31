'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Facebook, Linkedin, Twitter, Mail, Share2, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { BlogPost } from '@/lib/blog';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`,
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-[var(--primary-teal)] hover:text-[var(--accent-orange)] transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to articles
        </Link>

        {/* Title */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C355E] mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8"></div>

        {/* Meta Information & Share Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
          {/* Author & Date */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-medium">by</span>
              <span className="font-bold text-[var(--primary-teal)]">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">from</span>
              <span className="font-bold text-[var(--primary-teal)]">Trade Link</span>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm bg-gray-50 px-4 py-2 rounded">
            <span className="font-medium text-gray-600">
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }) + ' ' + new Date(post.date).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-600">Share on</span>
          <div className="flex gap-2">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" fill="currentColor" />
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" fill="currentColor" />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" fill="currentColor" />
            </a>
            <a
              href={shareLinks.email}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white hover:opacity-80 transition-opacity"
              aria-label="Share via Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-96 mb-12 bg-gray-50 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none
          prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#1C355E]
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-200
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-[var(--primary-teal)]
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
          prose-a:text-[var(--primary-teal)] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-strong:font-bold prose-strong:text-gray-900
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-gray-700 prose-li:my-2
          prose-blockquote:border-l-4 prose-blockquote:border-[var(--accent-orange)] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-8
          prose-code:text-[var(--primary-teal)] prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:my-8
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#1C355E] to-[#2A4A7F] rounded-lg text-white">
          <h3 className="text-2xl font-heading font-bold mb-3">
            Need Expert Guidance?
          </h3>
          <p className="text-white/90 mb-6">
            Get help navigating UK customs systems with CDS integration, GVMS setup, and compliance support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-orange)] hover:bg-[var(--accent-orange-dark)] text-white font-semibold rounded-lg transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
