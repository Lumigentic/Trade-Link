import { createClient } from '@supabase/supabase-js';

// Supabase client configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Contact form will not work.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for contact submissions
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  status?: 'new' | 'read' | 'replied' | 'closed';
  created_at?: string;
  updated_at?: string;
  ip_address?: string;
  user_agent?: string;
}

// Helper function to create a contact submission
export async function createContactSubmission(data: ContactSubmission) {
  const { data: submission, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: data.name,
        email: data.email,
        company: data.company || null,
        phone: data.phone || null,
        message: data.message,
        status: 'new',
        ip_address: data.ip_address || null,
        user_agent: data.user_agent || null,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error creating contact submission:', error);
    throw error;
  }

  return submission;
}

// Helper function to get all contact submissions (for admin panel)
export async function getContactSubmissions(limit = 50) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching contact submissions:', error);
    throw error;
  }

  return data;
}

// Helper function to update submission status
export async function updateSubmissionStatus(
  id: string,
  status: 'new' | 'read' | 'replied' | 'closed'
) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating submission status:', error);
    throw error;
  }

  return data;
}
