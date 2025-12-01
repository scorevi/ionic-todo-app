# Step-by-Step Commands - Copy & Paste

## ⚡ Quick Start (Run these commands in order)

### 1. Navigate to project folder
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams"

### 2. Install dependencies
npm install

### 3. Configure Firebase
# Open src/firebase/config.ts and add your Firebase credentials
# See FIREBASE_SETUP.md for detailed instructions

### 4. Start development server
npm run dev

### 5. Open browser
# Navigate to: http://localhost:3000

---

## 🔥 Firebase Setup Commands

# No CLI commands needed - use Firebase Console:
# 1. Go to https://console.firebase.google.com/
# 2. Create new project
# 3. Enable Firestore Database
# 4. Copy config to src/firebase/config.ts

---

## 📱 Android Deployment Commands

### First time setup:
npm run build
npx cap add android
npx cap sync
npx cap open android

### After making changes:
npm run build
npx cap sync
npx cap open android

---

## 🍎 iOS Deployment Commands (Mac only)

### First time setup:
npm run build
npx cap add ios
npx cap sync
npx cap open ios

### After making changes:
npm run build
npx cap sync
npx cap open ios

---

## 🌐 Vercel Deployment Commands

### Option 1: Using Vercel CLI
npm install -g vercel
vercel

### Option 2: Using Vercel Dashboard
# 1. Go to https://vercel.com
# 2. Sign in with GitHub
# 3. Import your project
# 4. Click Deploy

---

## 🔧 Troubleshooting Commands

### Clear cache and reinstall:
npm cache clean --force
Remove-Item -Recurse -Force node_modules
npm install

### Clean build:
Remove-Item -Recurse -Force dist
npm run build

### Re-sync Capacitor:
npm run build
npx cap sync

### Update Capacitor:
npm install @capacitor/core@latest @capacitor/cli@latest
npx cap sync

---

## 📊 Useful Commands

### Check Node version:
node --version

### Check npm version:
npm --version

### List installed packages:
npm list --depth=0

### Check for outdated packages:
npm outdated

### Run production build:
npm run build

### Preview production build:
npm run preview

---

## 🎥 Video Recording (Windows)

### Using Xbox Game Bar:
# 1. Press Win + G
# 2. Click record button
# 3. Press Win + Alt + R to stop

### Using PowerShell to check video size:
Get-Item "path\to\video.mp4" | Select-Object Length

---

## 📤 File Compression

### Check file size:
Get-Item "LastName_FirstName_IonicExam.mp4" | Select-Object @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB, 2)}}

---

## ✅ Testing Commands

### Test web version:
npm run dev
# Open http://localhost:3000
# Test all CRUD operations

### Test production build:
npm run build
npm run preview
# Open http://localhost:4173

---

## 🔍 Debugging Commands

### View detailed npm logs:
npm run dev --verbose

### Check TypeScript errors:
npx tsc --noEmit

### Check for port conflicts:
netstat -ano | findstr :3000

---

## 📦 Build for Different Platforms

### Web build only:
npm run build

### Android build:
npm run build
npx cap sync android

### iOS build:
npm run build
npx cap sync ios

---

## 🆘 Emergency Reset

### If everything breaks, start fresh:
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force dist
Remove-Item -Recurse -Force android
Remove-Item -Recurse -Force ios
npm install
npm run build
npx cap add android
npx cap sync

---

## 📝 Git Commands (Optional)

### Initialize repository:
git init
git add .
git commit -m "Initial commit - Ionic Todo App"

### Create GitHub repository:
# 1. Go to github.com
# 2. Create new repository
# 3. Follow instructions to push existing repository

### Push to GitHub:
git remote add origin https://github.com/yourusername/ionic-todo-app.git
git branch -M main
git push -u origin main

---

## 🎯 Pre-Submission Checklist Commands

### 1. Verify build works:
npm run build

### 2. Test development server:
npm run dev

### 3. Sync to mobile:
npx cap sync

### 4. Check for errors:
npm run build 2>&1 | Select-String "error"

---

## 📊 Project Statistics

### Count lines of code:
Get-ChildItem -Recurse -Include *.ts,*.tsx,*.css | Get-Content | Measure-Object -Line

### List all TypeScript files:
Get-ChildItem -Recurse -Filter *.tsx

### Check project size:
Get-ChildItem -Recurse | Measure-Object -Property Length -Sum | Select-Object @{Name="Size(MB)";Expression={[math]::Round($_.Sum/1MB, 2)}}

---

**Save this file for quick reference! 🚀**
