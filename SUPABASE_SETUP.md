# 🚀 Supabase Setup Guide for Trade-Link

## What is Supabase?
Supabase is a database that will store all contact form submissions from your website. It's like a digital filing cabinet where all customer inquiries are saved forever!

## Why Supabase?
✅ **Never lose a customer inquiry** - Everything is saved in database
✅ **View all submissions** - See history of all contact requests
✅ **Free forever** - 50,000 requests/month (more than enough!)
✅ **Export data** - Download as Excel/CSV anytime
✅ **Add features later** - Can build admin dashboard

---

## Step 1: Create Supabase Account

1. Go to: **https://supabase.com/**
2. Click **"Start your project"**
3. Sign up with GitHub or email
4. Verify your email

---

## Step 2: Create New Project

1. Click **"New Project"**
2. Fill in details:
   - **Organization**: Create new → "Trade-Link" or "Lumigentic"
   - **Project Name**: `trade-link` or `trade-link-website`
   - **Database Password**: Create strong password (SAVE THIS!)
     - Example: `TradeLink2025!Secure`
   - **Region**: **West EU (Ireland)** ← Closest to UK
3. Click **"Create new project"**
4. ⏰ Wait ~2 minutes for setup

---

## Step 3: Run SQL to Create Table

1. In Supabase dashboard, click **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Copy **ALL** content from `supabase-schema.sql` file
4. Paste into SQL editor
5. Click **"Run"** (or press Ctrl/Cmd + Enter)
6. You should see: ✅ "Success. No rows returned"

This creates the `contact_submissions` table!

---

## Step 4: Get API Credentials

1. Click **Settings** → **API** (left sidebar)
2. Copy these 2 values:

### Project URL
```
Example: https://abcdefghijklmnop.supabase.co
```

### anon public key
```
Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYm...
(This is a LONG key, ~300 characters)
```

---

## Step 5: Add to Vercel

1. Go to: **https://vercel.com/lumigentic/trade-link**
2. Click **Settings** → **Environment Variables**
3. Add **2 variables**:

### Variable 1:
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: [paste your Project URL here]
```

### Variable 2:
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [paste your anon public key here]
```

4. Click **"Save"** for each variable

---

## Step 6: Test It! 🎉

1. Website will auto-redeploy (wait ~2 minutes)
2. Go to: **https://trade-link.vercel.app/contact**
3. Fill in the contact form
4. Click "Send Message"
5. Check Supabase:
   - Go to **Table Editor** → **contact_submissions**
   - You should see your test message! ✅

---

## How to View Submissions

### Option 1: Supabase Dashboard (Easy)
1. Login to Supabase
2. Click **Table Editor** → **contact_submissions**
3. See all submissions with:
   - Name, Email, Company, Phone
   - Full message
   - Date/Time submitted
   - Status (new/read/replied/closed)

### Option 2: Export Data
1. In Table Editor, click **"Export"**
2. Download as CSV/Excel
3. Open in Excel/Google Sheets

---

## Database Structure

Your `contact_submissions` table has these columns:

| Column      | Type     | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Unique ID for each submission        |
| name        | Text     | Customer's name                      |
| email       | Text     | Customer's email                     |
| company     | Text     | Customer's company (optional)        |
| phone       | Text     | Customer's phone (optional)          |
| message     | Text     | Customer's message                   |
| status      | Text     | new / read / replied / closed        |
| created_at  | DateTime | When submitted                       |
| updated_at  | DateTime | Last modified                        |
| ip_address  | Text     | Customer's IP (for security)         |
| user_agent  | Text     | Browser info                         |

---

## Future Enhancements (Optional)

Once basic setup works, you can add:

1. **Email Notifications** - Get email when someone submits form
2. **Admin Dashboard** - Custom page to manage submissions
3. **Auto-replies** - Send automatic "We received your message" email
4. **Analytics** - Track how many inquiries per day/week/month
5. **CRM Integration** - Connect to your existing customer management system

---

## Troubleshooting

### Problem: Form says "Email service not configured"
**Solution**: Check that environment variables are added in Vercel

### Problem: "Failed to submit message"
**Solution**:
1. Check Supabase project is running (not paused)
2. Verify SQL schema was run successfully
3. Check Table Editor shows `contact_submissions` table

### Problem: Can't see submissions in Supabase
**Solution**:
1. Make sure you're in correct project
2. Click **Table Editor** → **contact_submissions**
3. Try refreshing the page

---

## Support

If you need help:
1. Check Supabase docs: https://supabase.com/docs
2. Contact me (Claude) - I can help troubleshoot!

---

## Summary Checklist

- [ ] Create Supabase account
- [ ] Create new project
- [ ] Run SQL schema
- [ ] Copy Project URL and anon key
- [ ] Add environment variables to Vercel
- [ ] Test contact form
- [ ] Verify submission appears in Supabase

**Once complete, your contact form will be fully functional!** 🎉
