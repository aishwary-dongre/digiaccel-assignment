# Deployment Guide

## Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Build for Production**
```bash
npm run build
```

## Deploy to Netlify (Recommended)

### Method 1: Netlify CLI (Fastest)

1. **Install Netlify CLI globally**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Initialize and deploy**
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

4. **Follow the prompts:**
   - Choose "Create & configure a new site"
   - Select your team
   - Enter site name (optional)
   - Set publish directory to: `dist`

5. **Your site is live!** 🎉
   - You'll receive a URL like: `https://your-site-name.netlify.app`

### Method 2: Netlify Drag & Drop

1. **Build your project**
```bash
npm run build
```

2. **Go to Netlify**
   - Visit [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site will be deployed instantly!

### Method 3: GitHub Integration (Best for Continuous Deployment)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/todo-app.git
git push -u origin main
```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Automatic Deployments**
   - Every push to main branch will trigger a new deployment
   - Preview deployments for pull requests

## Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel --prod
```

3. **Or use GitHub integration:**
   - Go to [Vercel](https://vercel.com)
   - Import your Git repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

## Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://yourusername.github.io/todo-app"
```

3. **Update vite.config.ts**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/todo-app/', // Your repo name
})
```

4. **Deploy**
```bash
npm run deploy
```

## Environment Variables

If you plan to add backend API:

1. **Create `.env` file**
```env
VITE_API_URL=https://your-api.com
```

2. **Access in code**
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. **Add to Netlify/Vercel**
   - Go to Site Settings → Environment Variables
   - Add `VITE_API_URL` and its value

## Custom Domain

### For Netlify:
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration steps

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records

## Performance Optimization

The build is already optimized with:
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Gzip compression

## Monitoring

### Check Build Logs
```bash
# Netlify
netlify logs

# Vercel
vercel logs
```

### Analytics
- Add Netlify Analytics in Site Settings
- Or integrate Google Analytics

## Troubleshooting

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Not Working (404 on refresh)
- Ensure `netlify.toml` is present
- Check redirects configuration

### Assets Not Loading
- Verify `base` path in vite.config.ts
- Check asset paths are relative

## Testing Production Build Locally

```bash
npm run build
npm run preview
```

This starts a local server with the production build.

## Deployment Checklist

- [ ] All dependencies installed
- [ ] Build completes without errors
- [ ] Test production build locally
- [ ] Environment variables configured
- [ ] Custom domain set up (if needed)
- [ ] SSL certificate active
- [ ] Test on mobile devices
- [ ] Check all routes work
- [ ] Verify data persistence

## Support

For deployment issues:
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com)

---

🚀 **Your To-Do App is ready for the world!**
