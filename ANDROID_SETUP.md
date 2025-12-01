# 📱 Android Studio Setup & Running Your App

## ✅ Android Platform Successfully Added!

Your Ionic app is now ready for Android. The native Android project is located in:
```
c:\Users\scorevi\Documents\Hybrid Prog Exams\android
```

---

## Step 1: Install Android Studio (If Not Installed)

### Download Android Studio:
**https://developer.android.com/studio**

### Install Requirements:
1. Download and run the installer
2. Follow the setup wizard
3. Install the Android SDK
4. Install an Android emulator (recommended: Pixel 5 with Android 13)

**Installation takes about 10-15 minutes**

---

## Step 2: Open Your Project in Android Studio

### Method A: Use File Explorer
1. Open **Android Studio**
2. Click **"Open an Existing Project"**
3. Navigate to: `c:\Users\scorevi\Documents\Hybrid Prog Exams\android`
4. Click **"OK"**

### Method B: Command Line (if Android Studio is installed)
```powershell
# Set environment variable (use your actual Android Studio path)
$env:CAPACITOR_ANDROID_STUDIO_PATH = "C:\Program Files\Android\Android Studio\bin\studio64.exe"

# Then open
npx cap open android
```

### Method C: Direct Path
Manually open:
```
C:\Program Files\Android\Android Studio\bin\studio64.exe
```
Then: File → Open → Select the `android` folder

---

## Step 3: Wait for Gradle Sync

When Android Studio opens your project:
1. Wait for **Gradle sync** to complete (bottom right status bar)
2. This takes 2-5 minutes the first time
3. You'll see "Gradle sync finished" when done

**Common first-time messages (normal):**
- "Gradle project sync in progress..."
- "Indexing..."
- "Building..."

Just wait for these to complete!

---

## Step 4: Set Up Android Emulator

### Check if Emulator Exists:
1. Click **Device Manager** icon (phone with Android logo) in top toolbar
2. If you see a device listed, skip to Step 5
3. If empty, create a new emulator:

### Create New Emulator:
1. Click **Device Manager** → **Create Device**
2. Select **Pixel 5** (or any phone) → **Next**
3. Select **Android 13.0 ("Tiramisu")** → **Next**
   - If not downloaded, click **Download** and wait
4. Click **Finish**

---

## Step 5: Run Your App

### Start the Emulator:
1. In **Device Manager**, click the **▶️ Play button** next to your emulator
2. Wait for Android to boot (1-2 minutes first time)
3. You'll see the Android home screen

### Run Your App:
1. In Android Studio, click the green **▶️ Run** button (top toolbar)
2. OR press **Shift + F10**
3. Wait for build to complete (1-2 minutes)
4. Your app will launch in the emulator!

---

## Step 6: Test Your App

Once running in the emulator:
- ✅ Test adding todos
- ✅ Test editing todos
- ✅ Test marking complete
- ✅ Test deleting todos
- ✅ Verify Firebase sync works

**The app should work exactly like in the browser!**

---

## Taking Screenshots for Exam

### Built-in Screenshot Tool:
1. In the emulator, click the **camera icon** (right side toolbar)
2. OR use the keyboard shortcut
3. Screenshots save to your computer

### Alternative - Use Snipping Tool:
1. Press **Win + Shift + S**
2. Select the emulator window
3. Screenshot is copied to clipboard

---

## Updating After Code Changes

Whenever you change your code:

### 1. Rebuild:
```powershell
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams"
npm run build
```

### 2. Sync:
```powershell
npx cap sync android
```

### 3. Re-run in Android Studio:
Click the green **▶️ Run** button again

---

## Running on Physical Android Device

### Enable Developer Mode on Your Phone:
1. Go to **Settings** → **About Phone**
2. Tap **Build Number** 7 times
3. Go back → **Developer Options**
4. Enable **USB Debugging**

### Connect to Computer:
1. Plug phone into computer via USB
2. Allow USB debugging on phone
3. In Android Studio, select your device from dropdown
4. Click **Run**

---

## Troubleshooting

### "Gradle sync failed"
**Solution:**
1. File → Invalidate Caches → Invalidate and Restart
2. Wait for Android Studio to restart
3. Let Gradle sync again

### "SDK not found"
**Solution:**
1. File → Project Structure
2. SDK Location → Set to your Android SDK path
3. Usually: `C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk`

### "Emulator won't start"
**Solution:**
1. Device Manager → Delete emulator
2. Create new emulator
3. Make sure virtualization is enabled in BIOS

### "App crashes on launch"
**Solution:**
1. Check Firebase config is correct
2. Check Logcat in Android Studio for errors
3. Make sure `npm run build` completed successfully

### "Build failed"
**Solution:**
```powershell
# Clean and rebuild
cd "c:\Users\scorevi\Documents\Hybrid Prog Exams"
Remove-Item -Recurse -Force android
npm run build
npx cap add android
npx cap sync android
```

---

## Command Reference

### Build web app:
```powershell
npm run build
```

### Sync to Android:
```powershell
npx cap sync android
```

### Open in Android Studio:
```powershell
npx cap open android
# OR manually open: c:\Users\scorevi\Documents\Hybrid Prog Exams\android
```

### Update plugins:
```powershell
npx cap update android
```

---

## For Your Exam Submission

### Required Screenshots:
1. ✅ **Android Studio** with your project open
2. ✅ **Emulator** running your app
3. ✅ **App home screen** with todos
4. ✅ **Add todo** functionality
5. ✅ **Edit/Delete** operations
6. ✅ **Firebase Console** showing data sync

### In Your Video:
- Show the emulator running
- Demonstrate all CRUD operations
- Show it's actually running on Android (not browser)
- Mention it's a hybrid app using Capacitor

---

## Quick Start Summary

1. **Open Android Studio**
2. **File → Open** → Select `c:\Users\scorevi\Documents\Hybrid Prog Exams\android`
3. **Wait for Gradle sync** (2-5 minutes)
4. **Click Device Manager** → Start emulator
5. **Click Run ▶️** button
6. **Wait for build** (1-2 minutes)
7. **Test your app!**

---

## Android Studio Not Installed?

### Download & Install:
1. Go to: https://developer.android.com/studio
2. Download Android Studio
3. Run installer
4. Follow setup wizard
5. Install Android SDK and emulator
6. Takes about 15 minutes total

---

## Pro Tips

### Speed up emulator:
- Use **Cold Boot** instead of Quick Boot
- Allocate more RAM in AVD settings
- Use x86 system images (faster than ARM)

### Debugging:
- **Logcat** tab shows all logs
- Filter by "Capacitor" to see app logs
- Red errors show problems

### Live reload (advanced):
```powershell
# In one terminal
npm run dev

# Then run on emulator - changes update live!
```

---

## Status Check

Your Android setup is complete! ✅

**Files created:**
- `android/` folder with full Android project
- Native Android app configured
- Capacitor plugins installed
- Ready to run in Android Studio

**Next steps:**
1. Open Android Studio
2. Open the `android` folder
3. Run on emulator
4. Take screenshots
5. Record demo!

---

**Need help? The `android` folder is ready - just open it in Android Studio!** 🚀

**Android folder location:**
```
c:\Users\scorevi\Documents\Hybrid Prog Exams\android
```
