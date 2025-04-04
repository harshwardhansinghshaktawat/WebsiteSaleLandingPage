class SaleLandingPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.initializeDOM();
    this.loadScripts();
  }

  static get observedAttributes() {
    return [
      'badge-text', 'title-text', 'subtitle-text', 'discount-text', 'countdown-days',
      'primary-color', 'secondary-color', 'accent-color', 'text-color', 'background-color',
      'title-font-size', 'subtitle-font-size', 'countdown-font-size',
      'badge-font-family', 'title-font-family', 'subtitle-font-family', 'discount-font-family'
    ];
  }

  initializeDOM() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --primary: ${this.getAttribute('primary-color') || '#ff3366'};
          --primary-dark: #e61e4d;
          --secondary: ${this.getAttribute('secondary-color') || '#5e17eb'};
          --accent: ${this.getAttribute('accent-color') || '#00c9ff'};
          --text: ${this.getAttribute('text-color') || '#2d3047'};
          --text-light: #6b7280;
          --background: ${this.getAttribute('background-color') || '#f8fafc'};
          --white: #ffffff;
          --black: #111111;
          --gradient-1: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          --gradient-2: linear-gradient(45deg, var(--accent) 0%, var(--secondary) 100%);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-strong: 0 15px 50px rgba(0, 0, 0, 0.2);
          display: block;
          width: 100%;
          height: 100vh;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .hero-section {
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: ${this.getAttribute('badge-font-family') || 'Montserrat'}, sans-serif;
          color: var(--text);
          background-color: var(--background);
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
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transform: translateY(50px);
          opacity: 0;
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
          transform: translateY(20px);
          opacity: 0;
          font-family: ${this.getAttribute('badge-font-family') || 'Montserrat'};
        }
        
        .hero-title {
          font-family: ${this.getAttribute('title-font-family') || 'Playfair Display'}, serif;
          font-size: ${this.getAttribute('title-font-size') || '3.5rem'};
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background-image: var(--gradient-1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transform: translateY(20px);
          opacity: 0;
        }
        
        .hero-subtitle {
          font-family: ${this.getAttribute('subtitle-font-family') || 'Montserrat'};
          font-size: ${this.getAttribute('subtitle-font-size') || '1.25rem'};
          font-weight: 400;
          line-height: 1.6;
          color: var(--text-light);
          margin-bottom: 2rem;
          max-width: 700px;
          transform: translateY(20px);
          opacity: 0;
        }
        
        .countdown-container {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          transform: translateY(20px);
          opacity: 0;
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
          background-color: var(--white);
          border-radius: 0.75rem;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .countdown-value::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--gradient-1);
        }
        
        .countdown-label {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-light);
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          transform: translateY(20px);
          opacity: 0;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
          box-shadow: 0 10px 20px rgba(255, 51, 102, 0.3);
        }
        
        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 51, 102, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 2px solid var(--text-light);
        }
        
        .btn-secondary:hover {
          background: var(--text);
          color: white;
          border-color: var(--text);
          transform: translateY(-3px);
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
          box-shadow: 0 10px 30px rgba(94, 23, 235, 0.4);
          animation: pulse 2s infinite;
          transform: scale(0);
          font-family: ${this.getAttribute('discount-font-family') || 'Montserrat'};
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(94, 23, 235, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 15px 40px rgba(94, 23, 235, 0.5);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(94, 23, 235, 0.4);
          }
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
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-content {
            padding: 2rem;
          }
          
          .countdown-container {
            gap: 0.75rem;
          }
          
          .countdown-value {
            font-size: 1.75rem;
            width: 4rem;
            height: 4rem;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
          
          .discount-pill {
            width: 80px;
            height: 80px;
            font-size: 1rem;
            top: -1rem;
            right: -1rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .countdown-container {
            gap: 0.5rem;
          }
          
          .countdown-value {
            font-size: 1.5rem;
            width: 3.5rem;
            height: 3.5rem;
          }
          
          .countdown-label {
            font-size: 0.75rem;
          }
        }
      </style>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
      <section class="hero-section">
        <div class="webgl-background" id="webgl-background"></div>
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="hero-content">
          <div class="sale-badge">${this.getAttribute('badge-text') || 'Limited Time Offer'}</div>
          <h1 class="hero-title">${this.getAttribute('title-text') || 'Exclusive Spring Sale <br>Up To 70% Off'}</h1>
          <p class="hero-subtitle">${this.getAttribute('subtitle-text') || 'Don\'t miss out on our biggest sale of the season. Premium quality products at unbeatable prices, available for a limited time only.'}</p>
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
  }

  connectedCallback() {
    this.initCountdown();
    this.initAnimations(); // Animations will run after scripts are loaded
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue || !this.shadowRoot) return;

    const rootStyle = this.shadowRoot.querySelector('style');
    if (rootStyle) {
      rootStyle.textContent = rootStyle.textContent.replace(
        /:host\s*{[^}]*}/,
        `:host {
          --primary: ${this.getAttribute('primary-color') || '#ff3366'};
          --primary-dark: #e61e4d;
          --secondary: ${this.getAttribute('secondary-color') || '#5e17eb'};
          --accent: ${this.getAttribute('accent-color') || '#00c9ff'};
          --text: ${this.getAttribute('text-color') || '#2d3047'};
          --text-light: #6b7280;
          --background: ${this.getAttribute('background-color') || '#f8fafc'};
          --white: #ffffff;
          --black: #111111;
          --gradient-1: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          --gradient-2: linear-gradient(45deg, var(--accent) 0%, var(--secondary) 100%);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-strong: 0 15px 50px rgba(0, 0, 0, 0.2);
          display: block;
          width: 100%;
          height: 100vh;
        }`
      );
    }

    switch (name) {
      case 'badge-text':
        this.shadowRoot.querySelector('.sale-badge').textContent = newValue || 'Limited Time Offer';
        break;
      case 'title-text':
        this.shadowRoot.querySelector('.hero-title').innerHTML = newValue || 'Exclusive Spring Sale <br>Up To 70% Off';
        break;
      case 'subtitle-text':
        this.shadowRoot.querySelector('.hero-subtitle').textContent = newValue || 'Don\'t miss out on our biggest sale of the season. Premium quality products at unbeatable prices, available for a limited time only.';
        break;
      case 'discount-text':
        this.shadowRoot.querySelector('.discount-pill').textContent = newValue || '-70%';
        break;
      case 'countdown-days':
        this.initCountdown(); // Re-initialize countdown with new duration
        break;
      case 'title-font-size':
        this.shadowRoot.querySelector('.hero-title').style.fontSize = newValue || '3.5rem';
        break;
      case 'subtitle-font-size':
        this.shadowRoot.querySelector('.hero-subtitle').style.fontSize = newValue || '1.25rem';
        break;
      case 'countdown-font-size':
        this.shadowRoot.querySelectorAll('.countdown-value').forEach(el => {
          el.style.fontSize = newValue || '2.5rem';
        });
        break;
      case 'badge-font-family':
        this.shadowRoot.querySelector('.sale-badge').style.fontFamily = newValue || 'Montserrat';
        break;
      case 'title-font-family':
        this.shadowRoot.querySelector('.hero-title').style.fontFamily = newValue || 'Playfair Display';
        break;
      case 'subtitle-font-family':
        this.shadowRoot.querySelector('.hero-subtitle').style.fontFamily = newValue || 'Montserrat';
        break;
      case 'discount-font-family':
        this.shadowRoot.querySelector('.discount-pill').style.fontFamily = newValue || 'Montserrat';
        break;
      case 'background-color':
        this.shadowRoot.querySelector('.hero-section').style.backgroundColor = newValue || '#f8fafc';
        break;
    }
  }

  loadScripts() {
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js'
    ];
    let loadedCount = 0;
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        loadedCount++;
        if (src.includes('three.min.js')) this.initWebGLBackground();
        if (loadedCount === scripts.length) this.initAnimations();
      };
      this.shadowRoot.appendChild(script);
    });
  }

  initWebGLBackground() {
    const container = this.shadowRoot.getElementById('webgl-background');
    if (!container || !window.THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += mouseY * 0.0005;
      particlesMesh.rotation.y += mouseX * 0.0005;
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

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    const updateCountdown = () => {
      const currentDate = new Date();
      const totalSeconds = (endDate - currentDate) / 1000;

      if (totalSeconds <= 0) {
        clearInterval(interval);
        daysEl.innerText = '00';
        hoursEl.innerText = '00';
        minutesEl.innerText = '00';
        secondsEl.innerText = '00';
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
    const gsap = this.shadowRoot.host.ownerDocument.defaultView.gsap;
    if (!gsap) return;

    gsap.registerPlugin(this.shadowRoot.host.ownerDocument.defaultView.ScrollTrigger);

    gsap.to(this.shadowRoot.querySelector('.hero-content'), {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.to(this.shadowRoot.querySelector('.sale-badge'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.to(this.shadowRoot.querySelector('.hero-title'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power3.out'
    });

    gsap.to(this.shadowRoot.querySelector('.hero-subtitle'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.7,
      ease: 'power3.out'
    });

    gsap.to(this.shadowRoot.querySelector('.countdown-container'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.9,
      ease: 'power3.out'
    });

    gsap.to(this.shadowRoot.querySelector('.cta-buttons'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 1.1,
      ease: 'power3.out'
    });

    gsap.to(this.shadowRoot.querySelector('.discount-pill'), {
      scale: 1,
      duration: 0.8,
      delay: 1.3,
      ease: 'back.out(1.7)'
    });
  }
}

customElements.define('sale-landing-page', SaleLandingPage);
