# 🚀 Complete Setup & Submission Guide

This guide will walk you through everything you need to complete your exam.

---

## 📋 Prerequisites Checklist

Before you start, make sure you have:
- [ ] Node.js installed (v18+) - Download from [nodejs.org](https://nodejs.org/)
- [ ] Git installed (optional)
- [ ] A code editor (VS Code recommended)
- [ ] A Firebase account (free) - Sign up at [firebase.google.com](https://firebase.google.com/)
- [ ] Android Studio OR Xcode installed

---

## ⚡ Quick Setup (5 Minutes)

### Step 1: Install Dependencies
```powershell
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams"
npm install
```

### Step 2: Set Up Firebase
1. Follow the detailed instructions in `FIREBASE_SETUP.md`
2. Create a Firebase project
3. Enable Firestore
4. Copy your config to `src/firebase/config.ts`

### Step 3: Run the App
```powershell
npm run dev
```
Open `http://localhost:3000` in your browser.

### Step 4: Test CRUD Operations
- Click + to add a todo
- Check the checkbox to mark complete
- Click edit icon to modify
- Swipe left to delete
- Check Firebase Console to see real-time updates

---

## 📱 Mobile Deployment

### Android Setup

1. **Build the web app first:**
```powershell
npm run build
```

2. **Add Android platform:**
```powershell
npx cap add android
```

3. **Sync files:**
```powershell
npx cap sync
```

4. **Open in Android Studio:**
```powershell
npx cap open android
```

5. **Run the app:**
   - In Android Studio, click the green ▶️ play button
   - Select an emulator or connected device
   - Wait for the app to build and launch

### iOS Setup (Mac only)

1. **Build the web app first:**
```powershell
npm run build
```

2. **Add iOS platform:**
```bash
npx cap add ios
```

3. **Sync files:**
```bash
npx cap sync
```

4. **Open in Xcode:**
```bash
npx cap open ios
```

5. **Run the app:**
   - In Xcode, select a simulator
   - Click the ▶️ play button

---

## 🌐 Vercel Deployment

### Option 1: Vercel CLI
```powershell
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel
```

Follow the prompts:
- Set up and deploy: Yes
- Which scope: Your account
- Link to existing project: No
- Project name: ionic-todo-app (or your choice)
- Directory: ./ (just press Enter)
- Override settings: No

### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your git repository OR upload files
5. Vercel will auto-detect Vite
6. Click "Deploy"

Your app will be live at: `https://your-project.vercel.app`

---

## 📸 Taking Screenshots

### Required Screenshots:

1. **App Screenshots:**
   - Home screen with todos
   - Add todo modal (open)
   - Edit todo modal (open)
   - Completed todos tab
   - About page

2. **CRUD Operation Screenshots:**
   - Before/after creating a todo
   - Before/after updating a todo
   - Before/after deleting a todo
   - Checkbox toggle (marking complete)

3. **Firebase Screenshots:**
   - Firestore database overview
   - Todos collection with documents
   - Single document showing all fields
   - Real-time update (optional but impressive)

4. **Mobile Screenshots:**
   - App running in Android Studio emulator
   - OR App running in iOS Simulator
   - Build output in terminal

### How to Take Screenshots:

**Windows:**
- Press `Win + Shift + S` for snipping tool
- Or press `PrtScn` to capture entire screen

**Mac:**
- Press `Cmd + Shift + 4` to select area
- Press `Cmd + Shift + 3` for full screen

**Android Studio:**
- Use the camera icon in the emulator toolbar
- Or click "Take Screenshot" in Device File Explorer

---

## 🎥 Recording Your Video

### Video Requirements:
- **Length:** Maximum 2 minutes
- **Format:** MP4 (recommended)
- **Content:** Show all CRUD operations and Firebase updates
- **File name:** `LastName_FirstName_IonicExam.mp4`

### Recording Tools:

**Windows:**
- Xbox Game Bar: `Win + G`
- OBS Studio (free): [obsproject.com](https://obsproject.com/)
- Screen Recorder (built-in): `Win + Alt + R`

**Mac:**
- QuickTime Player (built-in)
- Press `Cmd + Shift + 5` for screen recording

### Video Script (2 minutes):

**0:00-0:10** - Show app running, navigate between tabs
**0:10-0:25** - Create a new todo, show it in Firebase Console
**0:25-0:40** - Edit the todo, show update in Firebase
**0:40-0:55** - Mark todo as complete, switch to completed tab
**0:55-1:10** - Delete a todo, show removal from Firebase
**1:10-1:30** - Pull to refresh, demonstrate navigation
**1:30-2:00** - Quick tour of About page, final thoughts

### Video Compression:

Your video might be too large for Canvas. Compress it using:

**HandBrake (Free):**
1. Download from [handbrake.fr](https://handbrake.fr/)
2. Open your video
3. Select "Fast 1080p30" preset
4. Click "Start Encode"

**Online Tool:**
- [clipchamp.com](https://clipchamp.com/) (free)
- Upload video, export at lower quality

Target: Under 100MB for Canvas upload

---

## 📄 Creating Your PDF

Use `DOCUMENTATION_TEMPLATE.md` as your guide.

### PDF Creation Tools:

**Option 1: Microsoft Word**
1. Create a new document
2. Follow the template structure
3. Insert screenshots
4. File → Save As → PDF

**Option 2: Google Docs**
1. Create a new document
2. Follow the template
3. Insert images
4. File → Download → PDF

**Option 3: Markdown to PDF**
1. Use VS Code with "Markdown PDF" extension
2. Edit DOCUMENTATION_TEMPLATE.md
3. Right-click → "Markdown PDF: Export (pdf)"

### PDF Content Checklist:
- [ ] Your name and date
- [ ] App description
- [ ] Screenshots of all pages
- [ ] CRUD operation screenshots
- [ ] Firebase Console screenshots
- [ ] Mobile deployment screenshots
- [ ] Feature list
- [ ] Technology stack
- [ ] Database structure
- [ ] Challenges and solutions
- [ ] What you learned

---

## 📤 Submission Checklist

### Canvas Submission:
- [ ] PDF uploaded (includes all screenshots and documentation)
- [ ] Video uploaded (compressed, under 100MB)
- [ ] Video is under 2 minutes
- [ ] File names are correct

### Google Drive Submission:
- [ ] Go to: https://drive.google.com/drive/folders/183IoQXf97FN_j12rraJ575Pp-sAvC3RG
- [ ] Upload video with name: `LastName_FirstName_IonicExam.mp4`
- [ ] Verify upload completed

---

## 🐛 Common Issues & Solutions

### Issue: npm install fails
**Solution:**
```powershell
# Clear cache and retry
npm cache clean --force
Remove-Item -Recurse -Force node_modules
npm install
```

### Issue: Firebase connection error
**Solution:**
- Double-check your Firebase config in `src/firebase/config.ts`
- Make sure Firestore is enabled in Firebase Console
- Check Firestore rules (should be in test mode)

### Issue: Build fails
**Solution:**
```powershell
# Clean and rebuild
Remove-Item -Recurse -Force dist
npm run build
```

### Issue: Capacitor sync fails
**Solution:**
```powershell
# Make sure you've built first
npm run build
npx cap sync
```

### Issue: Android Studio won't open
**Solution:**
- Make sure Android Studio is installed
- Check that JAVA_HOME is set
- Try opening manually: File → Open → select android folder

### Issue: App crashes on mobile
**Solution:**
- Check Chrome DevTools for errors (inspect webview)
- Make sure Firebase config is correct
- Rebuild and sync: `npm run build && npx cap sync`

---

## 💡 Tips for Success

### Before You Submit:
1. **Test everything twice** - Make sure all CRUD operations work
2. **Clear your browser cache** - Test with fresh data
3. **Check Firebase Console** - Verify data is syncing
4. **Test on mobile** - Make sure it runs on emulator
5. **Review your video** - Watch it before uploading
6. **Check file sizes** - Compress if needed
7. **Proofread PDF** - Check for typos and formatting

### During Recording:
- Close unnecessary tabs and applications
- Prepare what you'll say beforehand
- Do a practice run
- Speak clearly and not too fast
- Show Firebase Console alongside the app
- Zoom in if needed for clarity

### PDF Best Practices:
- Use clear, high-resolution screenshots
- Add captions to images
- Use bullet points for clarity
- Keep it concise but complete
- Number your pages
- Include a table of contents (optional but nice)

---

## 📚 Additional Resources

### Documentation:
- Ionic Docs: [ionicframework.com/docs](https://ionicframework.com/docs)
- Firebase Docs: [firebase.google.com/docs](https://firebase.google.com/docs)
- React Docs: [react.dev](https://react.dev)

### Getting Help:
- Read `README.md` for general info
- Read `FIREBASE_SETUP.md` for Firebase help
- Check browser console for errors (F12)
- Check terminal for build errors

---

## ✅ Final Checklist

Before you consider yourself done:

### Functionality:
- [ ] Can create todos
- [ ] Can view todos in list
- [ ] Can edit todos
- [ ] Can mark todos complete/incomplete
- [ ] Can delete todos
- [ ] All changes sync with Firebase
- [ ] Pull-to-refresh works
- [ ] Tab navigation works
- [ ] App runs on web browser
- [ ] App runs on mobile emulator

### Documentation:
- [ ] All screenshots taken
- [ ] PDF document completed
- [ ] Video recorded and compressed
- [ ] Filenames are correct

### Submission:
- [ ] PDF uploaded to Canvas
- [ ] Video uploaded to Canvas
- [ ] Video uploaded to Google Drive
- [ ] All files under size limits
- [ ] Verified uploads succeeded

---

## 🎉 You're Ready!

You now have a complete, functional hybrid mobile app with:
- ✅ Clean Ionic UI
- ✅ Tab-based navigation
- ✅ Full CRUD functionality
- ✅ Firebase Firestore integration
- ✅ Mobile deployment capability
- ✅ Web deployment on Vercel

**Good luck with your exam! You've got this! 💪**

---

## Need Help?

If you encounter issues:
1. Check the error message carefully
2. Search the error in Google
3. Check the relevant documentation file
4. Review the code in similar components
5. Ask for help with specific error messages

Remember: The teaching staff can help, but they need:
- What you were trying to do
- What error message you got
- What you've already tried

---

**Last Updated:** December 2025
