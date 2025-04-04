class SaleLandingPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return [
      'badge-text', 'title-text', 'subtitle-text', 'discount-text', 'countdown-days',
      'primary-color', 'secondary-color', 'accent-color', 'text-color', 'background-color',
      'title-font-size', 'subtitle-font-size', 'countdown-font-size',
      'badge-font-family', 'title-font-family', 'subtitle-font-family', 'discount-font-family'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.updateStyles();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --primary: ${this.getAttribute('primary-color') || '#ff3366'};
          --secondary: ${this.getAttribute('secondary-color') || '#5e17eb'};
          --accent: ${this.getAttribute('accent-color') || '#00c9ff'};
          --text: ${this.getAttribute('text-color') || '#2d3047'};
          --background: ${this.getAttribute('background-color') || '#f8fafc'};
          --gradient-1: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          --gradient-2: linear-gradient(45deg, var(--accent) 0%, var(--secondary) 100%);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-strong: 0 15px 50px rgba(0, 0, 0, 0.2);
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
        }
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: var(--background);
          color: var(--text);
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
          font-family: ${this.getAttribute('badge-font-family') || 'Montserrat'};
        }
        .hero-title {
          font-family: ${this.getAttribute('title-font-family') || 'Playfair Display'};
          font-size: ${this.getAttribute('title-font-size') || '3.5rem'};
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background-image: var(--gradient-1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-subtitle {
          font-family: ${this.getAttribute('subtitle-font-family') || 'Montserrat'};
          font-size: ${this.getAttribute('subtitle-font-size') || '1.25rem'};
          font-weight: 400;
          line-height: 1.6;
          color: #6b7280;
          margin-bottom: 2rem;
          max-width: 700px;
        }
        .countdown-container {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .countdown-value {
          font-size: ${this.getAttribute('countdown-font-size') || '2.5rem'};
          font-weight: 700;
          color: var(--text);
          width: 5rem;
          height: 5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        .countdown-label {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #6b7280;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
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
          font-family: ${this.getAttribute('discount-font-family') || 'Montserrat'};
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
      </style>
      <section class="hero-section">
        <div class="webgl-background" id="webgl-background"></div>
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="hero-content">
          <div class="sale-badge">${this.getAttribute('badge-text') || 'Limited Time Offer'}</div>
          <h1 class="hero-title">${this.getAttribute('title-text') || 'Exclusive Spring Sale <br>Up To 70% Off'}</h1>
          <p class="hero-subtitle">${this.getAttribute('subtitle-text') || 'Don\'t miss out on our biggest sale of the season.'}</p>
          <div class="countdown-container">
            <div class="countdown-item">
              <div class="countdown-value" id="days">00</div>
              <div class="countdown-label">Days</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-value" id="hours">00</div>
              <div class="countdown-label">Hours</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-value" id="minutes">00</div>
              <div class="countdown-label">Minutes</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-value" id="seconds">00</div>
              <div class="countdown-label">Seconds</div>
            </div>
          </div>
          <div class="cta-buttons">
            <a href="#products" class="btn btn-primary">Shop Now</a>
            <a href="#learn-more" class="btn btn-secondary">Learn More</a>
          </div>
          <div class="discount-pill">${this.getAttribute('discount-text') || '-70%'}</div>
        </div>
      </section>
    `;

    this.loadScripts();
    this.initCountdown();
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
      script.onload = () => {
        if (src.includes('three.min.js')) this.initWebGLBackground();
        if (src.includes('gsap.min.js')) this.initAnimations();
      };
      this.shadowRoot.appendChild(script);
    });
  }

  initWebGLBackground() {
    const container = this.shadowRoot.getElementById('webgl-background');
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
      color: this.getAttribute('secondary-color') || '#5e17eb',
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
    const countdownDays = parseInt(this.getAttribute('countdown-days')) || 7;
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + countdownDays);

    const daysEl = this.shadowRoot.getElementById('days');
    const hoursEl = this.shadowRoot.getElementById('hours');
    const minutesEl = this.shadowRoot.getElementById('minutes');
    const secondsEl = this.shadowRoot.getElementById('seconds');

    const updateCountdown = () => {
      const currentDate = new Date();
      const totalSeconds = (endDate - currentDate) / 1000;

      if (totalSeconds <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      daysEl.innerText = String(days).padStart(2, '0');
      hoursEl.innerText = String(hours).padStart(2, '0');
      minutesEl.innerText = String(minutes).padStart(2, '0');
      secondsEl.innerText = String(seconds).padStart(2, '0');
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  }

  initAnimations() {
    gsap.to(this.shadowRoot.querySelector('.hero-content'), { opacity: 1, y: 0, duration: 1 });
    gsap.to(this.shadowRoot.querySelector('.sale-badge'), { opacity: 1, y: 0, duration: 0.8, delay: 0.3 });
    gsap.to(this.shadowRoot.querySelector('.hero-title'), { opacity: 1, y: 0, duration: 0.8, delay: 0.5 });
    gsap.to(this.shadowRoot.querySelector('.hero-subtitle'), { opacity: 1, y: 0, duration: 0.8, delay: 0.7 });
    gsap.to(this.shadowRoot.querySelector('.countdown-container'), { opacity: 1, y: 0, duration: 0.8, delay: 0.9 });
    gsap.to(this.shadowRoot.querySelector('.cta-buttons'), { opacity: 1, y: 0, duration: 0.8, delay: 1.1 });
    gsap.to(this.shadowRoot.querySelector('.discount-pill'), { scale: 1, duration: 0.8, delay: 1.3, ease: 'back.out(1.7)' });
  }

  updateStyles() {
    this.render();
  }
}

customElements.define('sale-landing-page', SaleLandingPage);
