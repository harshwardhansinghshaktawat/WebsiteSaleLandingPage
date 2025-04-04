class SaleLandingPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.settings = {
      badgeText: 'Limited Time Offer',
      titleText: 'Exclusive Spring Sale <br>Up To 70% Off',
      subtitleText: 'Don\'t miss out on our biggest sale of the season.',
      discountText: '-70%',
      countdownTime: '07:00:00:00', // Default: 7 days
      primaryColor: '#ff3366',
      secondaryColor: '#5e17eb',
      accentColor: '#00c9ff',
      textColor: '#2d3047',
      backgroundColor: '#f8fafc',
      titleFontSize: '3.5rem',
      subtitleFontSize: '1.25rem',
      countdownFontSize: '2.5rem',
      badgeFontFamily: 'Montserrat',
      titleFontFamily: 'Playfair Display',
      subtitleFontFamily: 'Montserrat',
      discountFontFamily: 'Montserrat',
      shopNowLink: '#products',
      learnMoreLink: '#learn-more',
      shopNowTarget: '_self',
      learnMoreTarget: '_self'
    };
    this.render();
  }

  static get observedAttributes() {
    return [
      'badge-text', 'title-text', 'subtitle-text', 'discount-text', 'countdown-time',
      'primary-color', 'secondary-color', 'accent-color', 'text-color', 'background-color',
      'title-font-size', 'subtitle-font-size', 'countdown-font-size',
      'badge-font-family', 'title-font-family', 'subtitle-font-family', 'discount-font-family',
      'shop-now-link', 'learn-more-link', 'shop-now-target', 'learn-more-target'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.shadowRoot) {
      const key = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      this.settings[key] = newValue || this.settings[key];
      this.updateElement(name);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --primary: ${this.settings.primaryColor};
          --secondary: ${this.settings.secondaryColor};
          --accent: ${this.settings.accentColor};
          --text: ${this.settings.textColor};
          --background: ${this.settings.backgroundColor};
          --gradient-1: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          --gradient-2: linear-gradient(45deg, var(--accent) 0%, var(--secondary) 100%);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-strong: 0 15px 50px rgba(0, 0, 0, 0.2);
          display: block;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
        }
        .hero-section {
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--background);
          color: var(--text);
          overflow: hidden;
        }
        .webgl-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          width: 90%;
          padding: 3rem;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-strong);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .sale-badge {
          background: var(--gradient-1);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          font-family: ${this.settings.badgeFontFamily};
        }
        .hero-title {
          font-family: ${this.settings.titleFontFamily};
          font-size: ${this.settings.titleFontSize};
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background-image: var(--gradient-1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-subtitle {
          font-family: ${this.settings.subtitleFontFamily};
          font-size: ${this.settings.subtitleFontSize};
          font-weight: 400;
          line-height: 1.6;
          color: #6b7280;
          margin-bottom: 2rem;
          max-width: 700px;
        }
        .countdown-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          justify-content: center;
          font-size: ${this.settings.countdownFontSize};
          font-weight: 700;
          color: var(--text);
        }
        .countdown-value {
          background-color: #ffffff;
          border-radius: 0.75rem;
          box-shadow: var(--shadow);
          padding: 0.5rem 1rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }
        .btn {
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 2px solid #6b7280;
        }
        .discount-pill {
          position: absolute;
          top: -2rem;
          right: -2rem;
          background: var(--secondary);
          color: white;
          font-size: 1.25rem;
          font-weight: 800;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          box-shadow: var(--shadow);
          font-family: ${this.settings.discountFontFamily};
        }
        .shape {
          position: absolute;
          border-radius: 50%;
          background: var(--gradient-2);
          filter: blur(80px);
          opacity: 0.3;
          z-index: 0;
        }
        .shape-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          left: -200px;
        }
        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: -150px;
          right: -100px;
          background: var(--gradient-1);
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-content { padding: 2rem; }
          .countdown-container { font-size: 1.75rem; }
          .cta-buttons { flex-direction: column; }
          .discount-pill { width: 80px; height: 80px; font-size: 1rem; top: -1rem; right: -1rem; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 2rem; }
          .hero-subtitle { font-size: 1rem; }
          .countdown-container { font-size: 1.5rem; }
        }
      </style>
      <section class="hero-section">
        <div class="webgl-background" id="webgl-background"></div>
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="hero-content">
          <div class="sale-badge">${this.settings.badgeText}</div>
          <h1 class="hero-title">${this.settings.titleText}</h1>
          <p class="hero-subtitle">${this.settings.subtitleText}</p>
          <div class="countdown-container">
            <div class="countdown-value" id="countdown">00:00:00:00</div>
          </div>
          <div class="cta-buttons">
            <a href="${this.settings.shopNowLink}" target="${this.settings.shopNowTarget}" class="btn btn-primary">Shop Now</a>
            <a href="${this.settings.learnMoreLink}" target="${this.settings.learnMoreTarget}" class="btn btn-secondary">Learn More</a>
          </div>
          <div class="discount-pill">${this.settings.discountText}</div>
        </div>
      </section>
    `;

    this.loadScripts();
    this.initCountdown();
    this.initAnimations();
  }

  updateElement(name) {
    const rootStyle = this.shadowRoot.querySelector('style');
    if (rootStyle) {
      rootStyle.textContent = rootStyle.textContent.replace(
        /:host\s*{[^}]*}/,
        `:host {
          --primary: ${this.settings.primaryColor};
          --secondary: ${this.settings.secondaryColor};
          --accent: ${this.settings.accentColor};
          --text: ${this.settings.textColor};
          --background: ${this.settings.backgroundColor};
          --gradient-1: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          --gradient-2: linear-gradient(45deg, var(--accent) 0%, var(--secondary) 100%);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-strong: 0 15px 50px rgba(0, 0, 0, 0.2);
          display: block;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }`
      );
    }

    switch (name) {
      case 'badge-text':
        this.shadowRoot.querySelector('.sale-badge').textContent = this.settings.badgeText;
        break;
      case 'title-text':
        this.shadowRoot.querySelector('.hero-title').innerHTML = this.settings.titleText;
        break;
      case 'subtitle-text':
        this.shadowRoot.querySelector('.hero-subtitle').textContent = this.settings.subtitleText;
        break;
      case 'discount-text':
        this.shadowRoot.querySelector('.discount-pill').textContent = this.settings.discountText;
        break;
      case 'countdown-time':
        this.initCountdown();
        break;
      case 'title-font-size':
        this.shadowRoot.querySelector('.hero-title').style.fontSize = this.settings.titleFontSize;
        break;
      case 'subtitle-font-size':
        this.shadowRoot.querySelector('.hero-subtitle').style.fontSize = this.settings.subtitleFontSize;
        break;
      case 'countdown-font-size':
        this.shadowRoot.querySelector('.countdown-container').style.fontSize = this.settings.countdownFontSize;
        break;
      case 'badge-font-family':
        this.shadowRoot.querySelector('.sale-badge').style.fontFamily = this.settings.badgeFontFamily;
        break;
      case 'title-font-family':
        this.shadowRoot.querySelector('.hero-title').style.fontFamily = this.settings.titleFontFamily;
        break;
      case 'subtitle-font-family':
        this.shadowRoot.querySelector('.hero-subtitle').style.fontFamily = this.settings.subtitleFontFamily;
        break;
      case 'discount-font-family':
        this.shadowRoot.querySelector('.discount-pill').style.fontFamily = this.settings.discountFontFamily;
        break;
      case 'shop-now-link':
        this.shadowRoot.querySelector('.btn-primary').href = this.settings.shopNowLink;
        break;
      case 'learn-more-link':
        this.shadowRoot.querySelector('.btn-secondary').href = this.settings.learnMoreLink;
        break;
      case 'shop-now-target':
        this.shadowRoot.querySelector('.btn-primary').target = this.settings.shopNowTarget;
        break;
      case 'learn-more-target':
        this.shadowRoot.querySelector('.btn-secondary').target = this.settings.learnMoreTarget;
        break;
    }
  }

  loadScripts() {
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js'
    ];
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => {
        if (src.includes('three.min.js')) this.initWebGLBackground();
      };
      this.shadowRoot.appendChild(script);
    });
  }

  initWebGLBackground() {
    const container = this.shadowRoot.getElementById('webgl-background');
    if (!window.THREE || !container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
      scaleArray[i / 3] = Math.random();
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: this.settings.secondaryColor,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();
  }

  initCountdown() {
    const countdownEl = this.shadowRoot.getElementById('countdown');
    if (!countdownEl) return;

    let endDate = sessionStorage.getItem('countdownEndDate');
    const storedCountdownTime = sessionStorage.getItem('lastCountdownTime');
    const currentCountdownTime = this.settings.countdownTime;

    // If no end date exists or the countdown time has changed, reset the end date
    if (!endDate || storedCountdownTime !== currentCountdownTime) {
      const now = new Date(); // Browser's local time
      const [days, hours, minutes, seconds] = currentCountdownTime.split(':').map(Number);
      const totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;

      endDate = new Date(now.getTime() + totalSeconds * 1000);
      sessionStorage.setItem('countdownEndDate', endDate.toISOString());
      sessionStorage.setItem('lastCountdownTime', currentCountdownTime);
    } else {
      endDate = new Date(endDate); // Use stored end date
    }

    const updateCountdown = () => {
      const currentDate = new Date(); // Browser's local time
      const totalSeconds = (endDate - currentDate) / 1000;

      if (totalSeconds <= 0) {
        clearInterval(this.countdownInterval);
        countdownEl.innerText = '00:00:00:00';
        return;
      }

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      countdownEl.innerText = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    updateCountdown();
    clearInterval(this.countdownInterval); // Clear any existing interval
    this.countdownInterval = setInterval(updateCountdown, 1000);
  }

  initAnimations() {
    const gsap = this.shadowRoot.host.ownerDocument.defaultView.gsap;
    if (!gsap) return;

    gsap.to(this.shadowRoot.querySelector('.hero-content'), { opacity: 1, y: 0, duration: 1 });
    gsap.to(this.shadowRoot.querySelector('.sale-badge'), { opacity: 1, y: 0, duration: 0.8, delay: 0.3 });
    gsap.to(this.shadowRoot.querySelector('.hero-title'), { opacity: 1, y: 0, duration: 0.8, delay: 0.5 });
    gsap.to(this.shadowRoot.querySelector('.hero-subtitle'), { opacity: 1, y: 0, duration: 0.8, delay: 0.7 });
    gsap.to(this.shadowRoot.querySelector('.countdown-container'), { opacity: 1, y: 0, duration: 0.8, delay: 0.9 });
    gsap.to(this.shadowRoot.querySelector('.cta-buttons'), { opacity: 1, y: 0, duration: 0.8, delay: 1.1 });
    gsap.to(this.shadowRoot.querySelector('.discount-pill'), { scale: 1, duration: 0.8, delay: 1.3, ease: 'back.out(1.7)' });
  }

  disconnectedCallback() {
    clearInterval(this.countdownInterval);
  }
}

customElements.define('sale-landing-page', SaleLandingPage);
