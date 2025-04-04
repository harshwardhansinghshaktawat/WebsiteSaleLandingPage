class ProductFeaturesSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.settings = {
      sectionTitle: 'Why Our Products <br>Stand Out',
      sectionSubtitle: 'Discover the exceptional quality and value that sets our products apart. Each item is crafted with premium materials and innovative design for an unparalleled experience.',
      primaryColor: '#ff3366',
      secondaryColor: '#5e17eb',
      accentColor: '#00c9ff',
      textColor: '#2d3047',
      backgroundColor: '#f8fafc',
      titleFontSize: '3rem',
      subtitleFontSize: '1.2rem',
      cardTitleFontSize: '1.5rem',
      cardTextFontSize: '1rem',
      titleFontFamily: 'Playfair Display',
      subtitleFontFamily: 'Montserrat',
      cardTitleFontFamily: 'Montserrat',
      cardTextFontFamily: 'Montserrat',
      mainCtaText: 'Shop Now While Supplies Last',
      mainCtaLink: '#shop-now',
      mainCtaTarget: '_self',
      cardTitles: 'Premium Quality,Innovative Design,Exclusive Offer,Customer Satisfaction,Fast Shipping,30-Day Guarantee',
      cardDescriptions: 'Crafted with the finest materials and meticulous attention to detail, our products are built to last and exceed your expectations.,Our cutting-edge designs combine aesthetics with functionality, creating products that are both beautiful and practical for everyday use.,Take advantage of our limited-time pricing that makes luxury accessible. Experience premium quality at an unprecedented value.,Join thousands of satisfied customers who have made our products a part of their lives. Your satisfaction is our top priority.,Enjoy quick and reliable delivery of your purchase. We ensure your products reach you promptly and in perfect condition.,Shop with confidence knowing that all our products come with a 30-day money-back guarantee for your peace of mind.',
      cardLinks: '#quality,#design,#exclusive,#satisfaction,#shipping,#guarantee',
      cardLinkTargets: '_self,_self,_self,_self,_self,_self',
      cardIcons: 'https://assets6.lottiefiles.com/packages/lf20_fo0ta0sy.json,https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json,https://assets1.lottiefiles.com/packages/lf20_kxvke5qf.json,https://assets5.lottiefiles.com/packages/lf20_nc3vxahm.json,https://assets3.lottiefiles.com/packages/lf20_urbk83vw.json,https://assets10.lottiefiles.com/packages/lf20_ybfz1vfm.json'
    };
    this.loadScripts().then(() => {
      this.render();
      this.loadLottieAnimations();
      this.initScrollAnimations();
    }).catch(err => console.error('Script loading failed:', err));
  }

  static get observedAttributes() {
    return [
      'section-title', 'section-subtitle', 'primary-color', 'secondary-color', 'accent-color', 'text-color', 'background-color',
      'title-font-size', 'subtitle-font-size', 'card-title-font-size', 'card-text-font-size',
      'title-font-family', 'subtitle-font-family', 'card-title-font-family', 'card-text-font-family',
      'main-cta-text', 'main-cta-link', 'main-cta-target', 'card-titles', 'card-descriptions', 'card-links', 'card-link-targets', 'card-icons'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.shadowRoot) {
      const key = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      if (['cardTitles', 'cardDescriptions', 'cardLinks', 'cardLinkTargets', 'cardIcons'].includes(key)) {
        this.settings[key] = newValue ? newValue.split(',') : this.settings[key].split(',');
      } else {
        this.settings[key] = newValue;
      }
      this.updateElement(name);
    }
  }

  render() {
    const cardTitlesArray = this.settings.cardTitles.split(',');
    const cardDescriptionsArray = this.settings.cardDescriptions.split(',');
    const cardLinksArray = this.settings.cardLinks.split(',');
    const cardLinkTargetsArray = this.settings.cardLinkTargets.split(',');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --primary: ${this.settings.primaryColor};
          --primary-dark: #e61e4d;
          --secondary: ${this.settings.secondaryColor};
          --accent: ${this.settings.accentColor};
          --text: ${this.settings.textColor};
          --text-light: #6b7280;
          --background: ${this.settings.backgroundColor};
          --white: #ffffff;
          --black: #111111;
          --gradient-1: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          --gradient-2: linear-gradient(45deg, var(--accent) 0%, var(--secondary) 100%);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-strong: 0 15px 50px rgba(0, 0, 0, 0.2);
          display: block;
          width: 100%;
          font-family: 'Montserrat', sans-serif;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .features-section {
          padding: 6rem 1.5rem;
          position: relative;
          overflow: hidden;
          background-color: var(--background);
          color: var(--text);
        }
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          z-index: 2;
        }
        .section-title {
          font-family: ${this.settings.titleFontFamily}, serif;
          font-size: ${this.settings.titleFontSize};
          font-weight: 900;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
        }
        .section-title span {
          background-image: var(--gradient-1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .section-subtitle {
          font-family: ${this.settings.subtitleFontFamily}, sans-serif;
          font-size: ${this.settings.subtitleFontSize};
          color: var(--text-light);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(30px);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          position: relative;
          z-index: 2;
        }
        .feature-card {
          background-color: var(--white);
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: var(--shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(50px);
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-strong);
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: var(--gradient-1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .feature-card:hover::before {
          opacity: 1;
        }
        .feature-icon-container {
          width: 120px;
          height: 120px;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .feature-title {
          font-family: ${this.settings.cardTitleFontFamily}, sans-serif;
          font-size: ${this.settings.cardTitleFontSize};
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .feature-description {
          font-family: ${this.settings.cardTextFontFamily}, sans-serif;
          color: var(--text-light);
          font-size: ${this.settings.cardTextFontSize};
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .feature-cta {
          margin-top: auto;
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }
        .feature-cta:hover {
          color: var(--secondary);
        }
        .feature-cta svg {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }
        .feature-cta:hover svg {
          transform: translateX(5px);
        }
        .cta-container {
          margin-top: 5rem;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          position: relative;
          z-index: 2;
        }
        .main-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem 3rem;
          background: var(--gradient-1);
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          text-decoration: none;
          border-radius: 0.5rem;
          box-shadow: 0 10px 20px rgba(255, 51, 102, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .main-cta:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 51, 102, 0.4);
        }
        .main-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: skewX(-30deg);
          transition: left 0.6s ease;
        }
        .main-cta:hover::before {
          left: 100%;
        }
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: 1;
        }
        .shape-3 {
          width: 400px;
          height: 400px;
          top: 10%;
          right: -100px;
          background: var(--accent);
        }
        .shape-4 {
          width: 350px;
          height: 350px;
          bottom: 20%;
          left: -100px;
          background: var(--primary);
        }
        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .section-title { font-size: 2.5rem; }
          .section-subtitle { font-size: 1rem; }
          .features-grid { grid-template-columns: 1fr; gap: 2rem; }
          .feature-card { padding: 2rem; }
          .feature-icon-container { width: 100px; height: 100px; }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 2rem; }
          .features-section { padding: 4rem 1rem; }
          .section-header { margin-bottom: 3rem; }
          .feature-icon-container { width: 80px; height: 80px; }
        }
        .reveal {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
      </style>
      <section class="features-section">
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">${this.settings.sectionTitle.replace('<br>', ' ')} <span>Stand Out</span></h2>
            <p class="section-subtitle">${this.settings.sectionSubtitle}</p>
          </div>
          <div class="features-grid">
            ${cardTitlesArray.map((title, index) => `
              <div class="feature-card" data-delay="${index * 0.1 + 0.1}">
                <div class="feature-icon-container" id="feature-icon-${index + 1}"></div>
                <h3 class="feature-title">${title}</h3>
                <p class="feature-description">${cardDescriptionsArray[index]}</p>
                <a href="${cardLinksArray[index]}" target="${cardLinkTargetsArray[index]}" class="feature-cta">
                  Learn more
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            `).join('')}
          </div>
          <div class="cta-container">
            <a href="${this.settings.mainCtaLink}" target="${this.settings.mainCtaTarget}" class="main-cta">${this.settings.mainCtaText}</a>
          </div>
        </div>
      </section>
    `;
  }

  updateElement(name) {
    const rootStyle = this.shadowRoot.querySelector('style');
    if (rootStyle) {
      rootStyle.textContent = rootStyle.textContent.replace(
        /:host\s*{[^}]*}/,
        `:host {
          --primary: ${this.settings.primaryColor};
          --primary-dark: #e61e4d;
          --secondary: ${this.settings.secondaryColor};
          --accent: ${this.settings.accentColor};
          --text: ${this.settings.textColor};
          --text-light: #6b7280;
          --background: ${this.settings.backgroundColor};
          --white: #ffffff;
          --black: #111111;
          --gradient-1: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          --gradient-2: linear-gradient(45deg, var(--accent) 0%, var(--secondary) 100%);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-strong: 0 15px 50px rgba(0, 0, 0, 0.2);
          display: block;
          width: 100%;
          font-family: 'Montserrat', sans-serif;
        }`
      );
    }

    switch (name) {
      case 'section-title':
        this.shadowRoot.querySelector('.section-title').innerHTML = `${this.settings.sectionTitle.replace('<br>', ' ')} <span>Stand Out</span>`;
        break;
      case 'section-subtitle':
        this.shadowRoot.querySelector('.section-subtitle').textContent = this.settings.sectionSubtitle;
        break;
      case 'title-font-size':
        this.shadowRoot.querySelector('.section-title').style.fontSize = this.settings.titleFontSize;
        break;
      case 'subtitle-font-size':
        this.shadowRoot.querySelector('.section-subtitle').style.fontSize = this.settings.subtitleFontSize;
        break;
      case 'card-title-font-size':
        this.shadowRoot.querySelectorAll('.feature-title').forEach(el => el.style.fontSize = this.settings.cardTitleFontSize);
        break;
      case 'card-text-font-size':
        this.shadowRoot.querySelectorAll('.feature-description').forEach(el => el.style.fontSize = this.settings.cardTextFontSize);
        break;
      case 'title-font-family':
        this.shadowRoot.querySelector('.section-title').style.fontFamily = `${this.settings.titleFontFamily}, serif`;
        break;
      case 'subtitle-font-family':
        this.shadowRoot.querySelector('.section-subtitle').style.fontFamily = `${this.settings.subtitleFontFamily}, sans-serif`;
        break;
      case 'card-title-font-family':
        this.shadowRoot.querySelectorAll('.feature-title').forEach(el => el.style.fontFamily = `${this.settings.cardTitleFontFamily}, sans-serif`);
        break;
      case 'card-text-font-family':
        this.shadowRoot.querySelectorAll('.feature-description').forEach(el => el.style.fontFamily = `${this.settings.cardTextFontFamily}, sans-serif`);
        break;
      case 'main-cta-text':
        this.shadowRoot.querySelector('.main-cta').textContent = this.settings.mainCtaText;
        break;
      case 'main-cta-link':
        this.shadowRoot.querySelector('.main-cta').href = this.settings.mainCtaLink;
        break;
      case 'main-cta-target':
        this.shadowRoot.querySelector('.main-cta').target = this.settings.mainCtaTarget;
        break;
      case 'card-titles':
      case 'card-descriptions':
      case 'card-links':
      case 'card-link-targets':
      case 'card-icons':
        this.renderCards();
        this.loadLottieAnimations();
        this.initScrollAnimations();
        break;
    }
  }

  renderCards() {
    const cardTitlesArray = this.settings.cardTitles.split(',');
    const cardDescriptionsArray = this.settings.cardDescriptions.split(',');
    const cardLinksArray = this.settings.cardLinks.split(',');
    const cardLinkTargetsArray = this.settings.cardLinkTargets.split(',');

    const grid = this.shadowRoot.querySelector('.features-grid');
    if (grid) {
      grid.innerHTML = cardTitlesArray.map((title, index) => `
        <div class="feature-card" data-delay="${index * 0.1 + 0.1}">
          <div class="feature-icon-container" id="feature-icon-${index + 1}"></div>
          <h3 class="feature-title">${title}</h3>
          <p class="feature-description">${cardDescriptionsArray[index]}</p>
          <a href="${cardLinksArray[index]}" target="${cardLinkTargetsArray[index]}" class="feature-cta">
            Learn more
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      `).join('');
    }
  }

  loadScripts() {
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.6/lottie.min.js'
    ];

    return Promise.all(
      scripts.map(src => {
        return new Promise((resolve, reject) => {
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      })
    );
  }

  loadLottieAnimations() {
    if (!window.lottie) return;
    const cardIconsArray = this.settings.cardIcons.split(',');
    cardIconsArray.forEach((path, index) => {
      const container = this.shadowRoot.getElementById(`feature-icon-${index + 1}`);
      if (container) {
        lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path
        });
      }
    });
  }

  initScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.shadowRoot.querySelector('.section-title'), {
      scrollTrigger: {
        trigger: this.shadowRoot.querySelector('.section-title'),
        start: 'top 80%',
        toggleClass: 'reveal'
      }
    });

    gsap.to(this.shadowRoot.querySelector('.section-subtitle'), {
      scrollTrigger: {
        trigger: this.shadowRoot.querySelector('.section-subtitle'),
        start: 'top 80%',
        toggleClass: 'reveal'
      }
    });

    const featureCards = this.shadowRoot.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      const delay = card.getAttribute('data-delay');
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          onEnter: () => {
            setTimeout(() => card.classList.add('reveal'), delay * 1000);
          }
        }
      });
    });

    gsap.to(this.shadowRoot.querySelector('.cta-container'), {
      scrollTrigger: {
        trigger: this.shadowRoot.querySelector('.cta-container'),
        start: 'top 85%',
        toggleClass: 'reveal'
      }
    });
  }
}

customElements.define('product-features-section', ProductFeaturesSection);
