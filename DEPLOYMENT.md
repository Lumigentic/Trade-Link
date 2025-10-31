# Trade Link - Production Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the platform created by the Next.js team and provides the best integration.

#### Steps:

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your repository
   - Configure project:
     - Framework Preset: **Next.js**
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Environment Variables** (if needed)
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add any required variables (see `.env.example`)

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at: `https://your-project.vercel.app`

5. **Custom Domain** (Optional)
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Auto-deployment**: Every push to `main` branch will automatically deploy!

---

### Option 2: Netlify

1. **Push code to Git repository**
2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Deploy and configure custom domain**

---

### Option 3: Self-Hosted (VPS/Cloud)

For deployment on your own server (DigitalOcean, AWS, etc.)

#### Requirements:
- Node.js 18.x or higher
- PM2 or similar process manager
- Nginx (recommended for reverse proxy)

#### Steps:

1. **On your server, clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Trade-Link
   ```

2. **Install dependencies:**
   ```bash
   npm install --production
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Start with PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "trade-link" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Setup SSL with Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## 🔧 Pre-Deployment Checklist

- [x] Build passes: `npm run build` ✅
- [x] All dependencies installed
- [x] Environment variables configured
- [x] Images optimized
- [x] Meta tags and SEO configured
- [x] Mobile responsive tested
- [x] Cross-browser tested
- [x] Language switcher working (EN/PL)
- [x] WhatsApp button with correct number
- [x] Contact form tested
- [x] Blog posts loading correctly

---

## 📊 Production Build Info

- **Build Time**: ~10-15 seconds
- **Pages Generated**: 11 static pages
- **Bundle Size**: Optimized with Turbopack
- **Image Optimization**: AVIF & WebP formats
- **Performance**:
  - React Strict Mode enabled
  - Console logs removed in production
  - Package imports optimized (lucide-react, framer-motion)

---

## 🌍 Multi-Language Support

The site supports English and Polish:
- Language switcher in navbar
- Choice saved in localStorage
- Default: English
- All content translated in `/lib/i18n.ts`

---

## 📱 Contact Integration

- **WhatsApp**: +44 7429 980548
- Messages automatically formatted based on language
- Tooltip appears after 3 seconds
- Auto-hides after 5 seconds

---

## 🎨 Performance Optimizations

### Already Implemented:
- Image optimization (AVIF/WebP)
- Code splitting
- Tree shaking
- Minification
- Gzip compression
- Static generation where possible
- Optimized package imports

### Monitoring:
After deployment, monitor:
- Core Web Vitals
- Page load times
- API response times
- Error rates

Use tools like:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🔄 Updates & Maintenance

### To update the site:

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Commit and push:
   ```bash
   git add .
   git commit -m "Your update description"
   git push origin main
   ```

**Vercel/Netlify**: Automatic deployment on push
**Self-hosted**: Pull changes and rebuild:
```bash
git pull origin main
npm install
npm run build
pm2 restart trade-link
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images Not Loading
- Check image paths are correct
- Ensure images are in `/public` directory
- Verify image optimization settings in `next.config.ts`

### Styles Not Applied
- Check Tailwind CSS configuration
- Ensure `globals.css` is imported in `layout.tsx`
- Clear browser cache

### Language Switcher Not Working
- Check localStorage is enabled in browser
- Verify LanguageContext is wrapping the app in `layout.tsx`
- Check browser console for errors

---

## 📞 Support

For deployment issues or questions:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Review [Vercel Documentation](https://vercel.com/docs)
- Check GitHub Issues

---

## 🎉 Post-Deployment

After successful deployment:

1. **Test all features:**
   - Navigation
   - Language switcher
   - WhatsApp button
   - Contact form
   - Blog pages
   - All links

2. **Setup Analytics** (Optional):
   - Google Analytics
   - Vercel Analytics
   - Plausible Analytics

3. **Monitor Performance:**
   - Check Core Web Vitals
   - Review error logs
   - Monitor uptime

4. **Setup Backups:**
   - Regular Git commits
   - Database backups (if applicable)
   - Configuration backups

---

**Your site is ready for production! 🚀**

Live URL will be:
- Vercel: `https://trade-link.vercel.app` (or custom domain)
- Custom: `https://yourdomain.com`
