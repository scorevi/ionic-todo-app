# 🚀 Deploy to Vercel - Step by Step Guide

## Method 1: Vercel CLI (Fastest - 2 minutes)

### Step 1: Install Vercel CLI
```powershell
npm install -g vercel
```

### Step 2: Login to Vercel
```powershell
vercel login
```
- Choose your preferred login method (GitHub, GitLab, Bitbucket, or Email)
- Follow the authentication prompts

### Step 3: Deploy Your App
```powershell
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams"
vercel
```

### Step 4: Answer the Prompts
```
? Set up and deploy "~\Documents\Hybrid Prog Exams"? [Y/n] Y
? Which scope do you want to deploy to? (Use arrow keys)
  > Your Personal Account
? Link to existing project? [y/N] N
? What's your project's name? ionic-todo-app
? In which directory is your code located? ./
? Want to override the settings? [y/N] N
```

### Step 5: Deploy!
Vercel will automatically:
- Detect it's a Vite project
- Run `npm run build`
- Deploy to production
- Give you a live URL!

**Your app will be live at:** `https://ionic-todo-app-[random].vercel.app`

---

## Method 2: Vercel Dashboard (No CLI needed)

### Step 1: Create Vercel Account
Go to: **https://vercel.com/signup**
- Sign up with GitHub (recommended)

### Step 2: Create GitHub Repository (Optional but Recommended)

#### Initialize Git:
```powershell
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams"
git init
git add .
git commit -m "Initial commit - Ionic React Todo App"
```

#### Create GitHub Repo:
1. Go to https://github.com/new
2. Name: `ionic-todo-app`
3. Don't initialize with README
4. Click "Create repository"

#### Push to GitHub:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/ionic-todo-app.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy from Vercel Dashboard
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `ionic-todo-app` repository
4. Vercel auto-detects Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**

### Step 4: Wait for Deployment
- Takes about 1-2 minutes
- You'll get a live URL!

---

## Method 3: Drag & Drop (Quick Test)

### Step 1: Build Your App
```powershell
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams"
npm run build
```

### Step 2: Go to Vercel
1. Go to https://vercel.com
2. Login/Sign up
3. Click "Add New" → "Project"
4. Scroll down to "Deploy without Git"
5. **Drag the `dist` folder** from your project into the upload area

### Step 3: Deploy
- Vercel uploads the files
- Your app goes live instantly!

**Note:** This method won't auto-update when you make changes.

---

## PWA Features Already Configured ✅

Your app is already PWA-ready with:

### 1. Manifest File
Located at: `public/manifest.json`
```json
{
  "short_name": "Todo App",
  "name": "Ionic React Todo App",
  "icons": [...],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#3880ff",
  "background_color": "#ffffff"
}
```

### 2. Meta Tags
In `index.html`:
- Viewport configuration
- Theme color
- Apple mobile web app capable
- Manifest link

### 3. Vercel Configuration
Your `vercel.json` is already set up:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Recommended: Method 1 (CLI)

This is the fastest and easiest:

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams"
vercel

# Answer prompts (mostly just press Enter)
# Get your live URL!
```

---

## After Deployment - Testing

### Test Your Live App:
1. Visit your Vercel URL
2. Test all CRUD operations
3. Test on mobile device
4. Add to home screen (PWA test)

### Install as PWA:
#### On Mobile (Android):
1. Open your Vercel URL in Chrome
2. Tap the menu (⋮)
3. Tap "Add to Home Screen"
4. App installs like a native app!

#### On Desktop:
1. Open your Vercel URL in Chrome
2. Click the install icon (⊕) in the address bar
3. Click "Install"

---

## Environment Variables (Important!)

Your Firebase config is in the code, which is fine for this exam project. For production, you'd want to use environment variables:

### Create `.env` file:
```env
VITE_FIREBASE_API_KEY=AIzaSyDU-84Mpw59EvVwgK-pi4YAHDV2n83Eeoo
VITE_FIREBASE_AUTH_DOMAIN=hybridprog-finals.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=hybridprog-finals
VITE_FIREBASE_STORAGE_BUCKET=hybridprog-finals.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=181267474102
VITE_FIREBASE_APP_ID=1:181267474102:web:9f6b555d0861ef9ba62817
```

### Add to Vercel Dashboard:
1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add each variable
4. Redeploy

**For this exam, the current setup is fine!**

---

## Updating Your Deployment

### After making changes:

#### With CLI:
```powershell
vercel --prod
```

#### With GitHub Integration:
```powershell
git add .
git commit -m "Update app"
git push
# Vercel auto-deploys!
```

---

## Custom Domain (Optional)

### Add a Custom Domain:
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add your domain
5. Update DNS settings
6. Done!

**For exam, the free Vercel URL is perfect!**

---

## Troubleshooting

### Build Fails on Vercel:
- Check that `package.json` has correct scripts
- Verify `vercel.json` is in root directory
- Check build logs in Vercel dashboard

### App Works Locally but Not on Vercel:
- Firebase rules must allow public access
- Check browser console on live site
- Verify Firebase config is correct

### "Command not found: vercel":
```powershell
# Reinstall globally
npm install -g vercel

# Or use npx
npx vercel
```

---

## Quick Deploy Command

Just run this:
```powershell
# One command to rule them all!
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams" ; vercel --prod
```

Or if you don't have Vercel CLI:
```powershell
# Install and deploy
npm install -g vercel ; cd "c:\Users\scorevi\Documents\Hybrid Prog Exams" ; vercel
```

---

## For Your Exam Submission

### Include in your PDF:
1. **Screenshot of Vercel Dashboard** showing successful deployment
2. **Your live URL** from Vercel
3. **Screenshot of the app running** on the live URL
4. **PWA installation screenshot** (optional but impressive!)

### In your video:
- Show the live Vercel URL
- Demonstrate it works online
- Show CRUD operations on the live site
- Bonus: Show installing as PWA on mobile!

---

## 🎯 Start Now!

### Choose your method and run:

**Option A - CLI (Recommended):**
```powershell
npm install -g vercel
vercel
```

**Option B - GitHub + Vercel:**
1. Push to GitHub
2. Import in Vercel Dashboard
3. Deploy!

**Option C - Quick Test:**
```powershell
npm run build
# Then drag dist folder to vercel.com
```

---

**Your app is ready to deploy! Pick a method and go for it! 🚀**

**Estimated time: 2-5 minutes**
