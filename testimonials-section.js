class TestimonialsSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.settings = {
      sectionTitle: 'What Our Customers Say',
      sectionSubtitle: 'Hear from real people who love our products and services.',
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
      testimonial1Name: 'Jane Doe',
      testimonial1Quote: 'This product transformed my daily routine—absolutely amazing quality!',
      testimonial1ImageUrl: 'https://via.placeholder.com/100',
      testimonial2Name: 'John Smith',
      testimonial2Quote: 'Fast shipping and incredible design. I’m a customer for life!',
      testimonial2ImageUrl: 'https://via.placeholder.com/100',
      testimonial3Name: 'Emily Johnson',
      testimonial3Quote: 'The best purchase I’ve made this year. Highly recommend!',
      testimonial3ImageUrl: 'https://via.placeholder.com/100'
    };
    this.render();
  }

  static get observedAttributes() {
    return [
      'section-title', 'section-subtitle', 'primary-color', 'secondary-color', 'accent-color', 'text-color', 'background-color',
      'title-font-size', 'subtitle-font-size', 'card-title-font-size', 'card-text-font-size',
      'title-font-family', 'subtitle-font-family', 'card-title-font-family', 'card-text-font-family',
      'testimonial1-name', 'testimonial1-quote', 'testimonial1-image-url',
      'testimonial2-name', 'testimonial2-quote', 'testimonial2-image-url',
      'testimonial3-name', 'testimonial3-quote', 'testimonial3-image-url'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.shadowRoot) {
      const key = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      this.settings[key] = newValue;
      this.updateElement(name);
    }
  }

  render() {
    const testimonials = [
      { name: this.settings.testimonial1Name, quote: this.settings.testimonial1Quote, imageUrl: this.settings.testimonial1ImageUrl },
      { name: this.settings.testimonial2Name, quote: this.settings.testimonial2Quote, imageUrl: this.settings.testimonial2ImageUrl },
      { name: this.settings.testimonial3Name, quote: this.settings.testimonial3Quote, imageUrl: this.settings.testimonial3ImageUrl }
    ].filter(testimonial => testimonial.name && testimonial.quote); // Render only if name and quote are present

    // Dynamic gradient on last two words of title
    const titleWords = this.settings.sectionTitle.split(' ');
    const regularText = titleWords.slice(0, -2).join(' ');
    const gradientText = titleWords.slice(-2).join(' ');

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
        .testimonials-section {
          padding: 6rem 1.5rem;
          position: relative;
          overflow: hidden;
          background-color: var(--background);
          color: var(--text);
          min-height: 200px;
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
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          position: relative;
          z-index: 2;
        }
        .testimonial-card {
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
        }
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-strong);
        }
        .testimonial-card::before {
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
        .testimonial-card:hover::before {
          opacity: 1;
        }
        .testimonial-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          object-fit: cover;
          border: 3px solid var(--accent);
        }
        .testimonial-name {
          font-family: ${this.settings.cardTitleFontFamily}, sans-serif;
          font-size: ${this.settings.cardTitleFontSize};
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .testimonial-quote {
          font-family: ${this.settings.cardTextFontFamily}, sans-serif;
          font-size: ${this.settings.cardTextFontSize};
          color: var(--text-light);
          line-height: 1.6;
          font-style: italic;
        }
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: 1;
        }
        .shape-1 {
          width: 300px;
          height: 300px;
          top: 15%;
          left: -50px;
          background: var(--primary);
        }
        .shape-2 {
          width: 350px;
          height: 350px;
          bottom: 10%;
          right: -70px;
          background: var(--accent);
        }
        @media (max-width: 992px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .section-title { font-size: 2.5rem; }
          .section-subtitle { font-size: 1rem; }
          .testimonials-grid { grid-template-columns: 1fr; gap: 2rem; }
          .testimonial-card { padding: 2rem; }
          .testimonial-image { width: 80px; height: 80px; }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 2rem; }
          .testimonials-section { padding: 4rem 1rem; }
          .section-header { margin-bottom: 3rem; }
          .testimonial-image { width: 60px; height: 60px; }
        }
      </style>
      <section class="testimonials-section">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">${regularText ? regularText + ' ' : ''}<span>${gradientText}</span></h2>
            <p class="section-subtitle">${this.settings.sectionSubtitle}</p>
          </div>
          <div class="testimonials-grid">
            ${testimonials.map((testimonial, index) => `
              <div class="testimonial-card">
                <img src="${testimonial.imageUrl}" alt="${testimonial.name}" class="testimonial-image">
                <h3 class="testimonial-name">${testimonial.name}</h3>
                <p class="testimonial-quote">"${testimonial.quote}"</p>
              </div>
            `).join('')}
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
        const titleWords = this.settings.sectionTitle.split(' ');
        const regularText = titleWords.slice(0, -2).join(' ');
        const gradientText = titleWords.slice(-2).join(' ');
        this.shadowRoot.querySelector('.section-title').innerHTML = `${regularText ? regularText + ' ' : ''}<span>${gradientText}</span>`;
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
        this.shadowRoot.querySelectorAll('.testimonial-name').forEach(el => el.style.fontSize = this.settings.cardTitleFontSize);
        break;
      case 'card-text-font-size':
        this.shadowRoot.querySelectorAll('.testimonial-quote').forEach(el => el.style.fontSize = this.settings.cardTextFontSize);
        break;
      case 'title-font-family':
        this.shadowRoot.querySelector('.section-title').style.fontFamily = `${this.settings.titleFontFamily}, serif`;
        break;
      case 'subtitle-font-family':
        this.shadowRoot.querySelector('.section-subtitle').style.fontFamily = `${this.settings.subtitleFontFamily}, sans-serif`;
        break;
      case 'card-title-font-family':
        this.shadowRoot.querySelectorAll('.testimonial-name').forEach(el => el.style.fontFamily = `${this.settings.cardTitleFontFamily}, sans-serif`);
        break;
      case 'card-text-font-family':
        this.shadowRoot.querySelectorAll('.testimonial-quote').forEach(el => el.style.fontFamily = `${this.settings.cardTextFontFamily}, sans-serif`);
        break;
      default:
        if (name.startsWith('testimonial')) {
          this.renderTestimonials();
        }
        break;
    }
  }

  renderTestimonials() {
    const testimonials = [
      { name: this.settings.testimonial1Name, quote: this.settings.testimonial1Quote, imageUrl: this.settings.testimonial1ImageUrl },
      { name: this.settings.testimonial2Name, quote: this.settings.testimonial2Quote, imageUrl: this.settings.testimonial2ImageUrl },
      { name: this.settings.testimonial3Name, quote: this.settings.testimonial3Quote, imageUrl: this.settings.testimonial3ImageUrl }
    ].filter(testimonial => testimonial.name && testimonial.quote);

    const grid = this.shadowRoot.querySelector('.testimonials-grid');
    if (grid) {
      grid.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card">
          <img src="${testimonial.imageUrl}" alt="${testimonial.name}" class="testimonial-image">
          <h3 class="testimonial-name">${testimonial.name}</h3>
          <p class="testimonial-quote">"${testimonial.quote}"</p>
        </div>
      `).join('');
    }
  }
}

customElements.define('testimonials-section', TestimonialsSection);
