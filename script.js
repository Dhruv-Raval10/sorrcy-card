/**
 * ============================================================================
 * ROMANTIC MOBILE LANDING PAGE - JAVASCRIPT
 * Optimized for Samsung Galaxy S22+
 * Vanilla JavaScript (Zero External Dependencies)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- DOM Elements ---
  const screen1 = document.getElementById('screen-1');
  const screen2a = document.getElementById('screen-2a');
  const screen2b = document.getElementById('screen-2b');
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');
  const backButtons = document.querySelectorAll('.btn-back');
  const confettiLayer = document.getElementById('confetti-layer');
  const bgHeartsLayer = document.getElementById('bg-hearts');

  // --- State & Timers ---
  let risingHeartsInterval = null;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Romantic color palette for heart particles
  const HEART_COLORS = [
    '#F0606F', // Main coral-pink
    '#FF7E93', // Vibrant candy pink
    '#FFA8B8', // Soft pastel blush
    '#FFD1DC', // Warm cotton pink
    '#FF6B8B', // Rosy pink
    '#FFD7A8', // Subtle warm glow
  ];

  /**
   * Safe Haptic Vibration feedback (30ms)
   */
  function triggerHapticFeedback() {
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(30);
      } catch (err) {
        // Ignored if user hasn't interacted or unsupported
      }
    }
  }

  /**
   * Helper to create an SVG heart string
   */
  function createSvgHeart(color, size = 20) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;
  }

  /**
   * Generate Ambient Background Hearts on Load
   */
  function initAmbientHearts() {
    if (!bgHeartsLayer || isReducedMotion.matches) return;

    const heartCount = 14;
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.className = 'ambient-heart';

      const size = Math.floor(Math.random() * 16) + 14; // 14px to 30px
      const left = Math.random() * 92 + 4; // 4% to 96%
      const duration = (Math.random() * 8 + 11).toFixed(1); // 11s to 19s
      const delay = (Math.random() * 12).toFixed(1); // 0s to 12s
      const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];

      heart.style.left = `${left}%`;
      heart.style.animationDuration = `${duration}s`;
      heart.style.animationDelay = `-${delay}s`; // Negative delay so they are pre-populated
      heart.innerHTML = createSvgHeart(color, size);

      bgHeartsLayer.appendChild(heart);
    }
  }

  /**
   * Trigger Confetti Heart Burst Animation
   */
  function triggerHeartBurst() {
    if (!confettiLayer || isReducedMotion.matches) return;

    // Clear any existing burst particles
    confettiLayer.innerHTML = '';

    const particleCount = 34;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'heart-burst-particle';

      // Random radial trajectory
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.floor(Math.random() * 140) + 70; // 70px to 210px
      const targetX = Math.cos(angle) * distance;
      const targetY = Math.sin(angle) * distance - 40; // bias upward
      const rot = Math.floor(Math.random() * 400) - 200; // -200deg to +200deg
      const scale = (Math.random() * 0.7 + 0.8).toFixed(2);
      const size = Math.floor(Math.random() * 12) + 16;
      const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];

      particle.style.setProperty('--target-x', `${targetX}px`);
      particle.style.setProperty('--target-y', `${targetY}px`);
      particle.style.setProperty('--rot', `${rot}deg`);
      particle.style.setProperty('--scale', scale);

      particle.innerHTML = createSvgHeart(color, size);
      fragment.appendChild(particle);
    }

    confettiLayer.appendChild(fragment);

    // Clean up particles from DOM after animation completes
    setTimeout(() => {
      confettiLayer.innerHTML = '';
    }, 2000);
  }

  /**
   * Start Rising Hearts on Screen 2 (Celebration)
   */
  function startRisingHearts() {
    if (risingHeartsInterval || isReducedMotion.matches) return;

    risingHeartsInterval = setInterval(() => {
      if (!confettiLayer) return;

      const heart = document.createElement('div');
      heart.className = 'rising-heart';

      const left = Math.random() * 88 + 6; // 6% to 94%
      const size = Math.floor(Math.random() * 14) + 16;
      const duration = (Math.random() * 2 + 3.8).toFixed(1);
      const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];

      heart.style.left = `${left}%`;
      heart.style.animationDuration = `${duration}s`;
      heart.innerHTML = createSvgHeart(color, size);

      confettiLayer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, parseFloat(duration) * 1000 + 100);
    }, 550);
  }

  /**
   * Stop Rising Hearts Stream
   */
  function stopRisingHearts() {
    if (risingHeartsInterval) {
      clearInterval(risingHeartsInterval);
      risingHeartsInterval = null;
    }
  }

  /**
   * Smooth Screen Transition Handler
   * @param {HTMLElement} fromScreen
   * @param {HTMLElement} toScreen
   */
  function switchScreen(fromScreen, toScreen) {
    if (!fromScreen || !toScreen || fromScreen === toScreen) return;

    // Trigger leaving transition on current screen
    fromScreen.classList.remove('screen--active');
    fromScreen.classList.add('screen--leaving');

    setTimeout(() => {
      fromScreen.hidden = true;
      fromScreen.classList.remove('screen--leaving');

      // Activate target screen
      toScreen.hidden = false;
      // Force layout reflow for animation trigger
      void toScreen.offsetWidth;
      toScreen.classList.add('screen--active');

      // Focus first actionable element for accessibility
      const focusTarget = toScreen.querySelector('button, [tabindex="0"]');
      if (focusTarget) {
        focusTarget.focus({ preventScroll: true });
      }
    }, 280);
  }

  /**
   * Button Click Handler with Pop Effect
   */
  function handleButtonClick(button, targetScreen) {
    triggerHapticFeedback();

    // Visual button press bounce
    button.classList.add('btn--pressed');
    setTimeout(() => {
      button.classList.remove('btn--pressed');
    }, 180);

    // Transition to selected screen
    switchScreen(screen1, targetScreen);

    // Trigger celebratory effects
    setTimeout(() => {
      triggerHeartBurst();
      startRisingHearts();
    }, 300);
  }

  // --- Event Listeners ---

  // "Yes, I am cute" Button
  if (btnYes) {
    btnYes.addEventListener('click', () => {
      handleButtonClick(btnYes, screen2a);
    });
  }

  // "No, I am not cute" Button
  if (btnNo) {
    btnNo.addEventListener('click', () => {
      handleButtonClick(btnNo, screen2b);
    });
  }

  // Back Buttons (return to Screen 1)
  backButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      triggerHapticFeedback();
      stopRisingHearts();

      const activeScreen = document.querySelector('.screen--active');
      if (activeScreen && activeScreen !== screen1) {
        switchScreen(activeScreen, screen1);
      }
    });
  });

  // Keyboard navigation support (Esc returns to Screen 1)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeScreen = document.querySelector('.screen--active');
      if (activeScreen && activeScreen !== screen1) {
        stopRisingHearts();
        switchScreen(activeScreen, screen1);
      }
    }
  });

  // Initialize background ambient hearts
  initAmbientHearts();
});
