# Romantic Mobile Landing Page 💖

A mobile-first, single-page romantic web experience built with plain HTML, CSS, and vanilla JavaScript in one folder. Designed and pixel-perfected for the **Samsung Galaxy S22+** (portrait viewport: **384 × 832 CSS px**, 19.5:9 aspect ratio).

---

## 📁 File Structure
```
romantic-landing/
├── couple.png     # Couple hugging & kissing cartoon illustration
├── index.html     # Semantic HTML, landing layout & romantic screens
├── style.css      # Blush-pink theme, 100dvh safe-insets layout, animations
├── script.js      # Vanilla JS navigation, haptic feedback, heart confetti bursts
└── README.md      # Testing and project guide
```

---

## 🎨 Design Highlights
- **Palette:** Blush-pink gradient (`#FDEDEE` to `#FCE4E6`), coral-pink accents (`#F0606F`), charcoal text (`#2B2B2B`), and white-pink frosted glass cards.
- **Typography:** Google Fonts *Caveat* & *Patrick Hand* for handwritten headings; *Poppins* for clean body typography, with robust offline system font fallbacks.
- **Offline Self-Contained:** 100% inline SVG graphics (no external images or CDNs required to render the graphics).
- **Couple Illustration:** Flat, cute pastel cartoon illustration featuring a bearded man with messy dark-brown hair in a black hoodie kissing the forehead of his smiling girlfriend with long wavy brown hair in a pink knit sweater.
- **Interactions:**
  - Screen 1: "Hey My Love" header, bold "Do you know you're cute? 💖" prompt, and two pill buttons (`≥ 52px` touch targets) with gentle pulse and press animations.
  - Screen 2A ("Yes, I am cute"): Celebratory heading, couple illustration, and a vibrant burst of heart confetti.
  - Screen 2B ("No, I am not cute"): Reassuring message card with the exact text: *"You're not only cute, but you're also the most beautiful girl in the world for me. You mean the world to me, baby."* alongside the couple illustration and heart burst.
  - Both screens feature floating hearts and a smooth return button to Screen 1.
- **Accessibility & Performance:** Native `100dvh`, safe-area insets, smooth CSS transitions, tactile haptic feedback (`navigator.vibrate(30)`), and full `prefers-reduced-motion` support.

---

## 📱 How to Test in Chrome DevTools (Samsung Galaxy S22+)

1. Open `index.html` in **Google Chrome**:
   - Double-click `index.html`, or
   - Right-click `index.html` → **Open with** → **Google Chrome**, or
   - Press `Ctrl + O` in Chrome and navigate to the file path.

2. Open **Developer Tools**:
   - Press `F12` (or `Ctrl + Shift + I` on Windows / `Cmd + Option + I` on Mac).

3. Toggle Device Toolbar:
   - Click the **Device Toggle** icon (phone/tablet icon in the top-left of DevTools) or press `Ctrl + Shift + M`.

4. Select or configure the **Samsung Galaxy S22+**:
   - In the top dropdown, look for **Samsung Galaxy S20+** or **Galaxy S20/S22**.
   - If **Samsung Galaxy S22+** is not in the default list:
     - Choose **Responsive** or click **Edit...** to add a custom device.
     - Set **Width:** `384` px
     - Set **Height:** `832` px
     - Set **Device pixel ratio (DPR):** `3`
     - Set orientation to **Portrait**.
     - Zoom: set to `100%` (or `Fit to window`).

5. Interact with the experience:
   - Tap **"Yes, I am cute"** or **"No, I am not cute"** to test the screen transitions, heart confetti burst, and couple illustration.
   - Tap the **"← Back"** button to return to Screen 1.
