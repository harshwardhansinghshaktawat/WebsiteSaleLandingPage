class TestimonialsSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.settings = {
      sectionTitle: 'What Our Customers Say',
      sectionSubtitle: 'Hear from real people who love our products and services.',
      sectionBadge: 'Customer Stories',
      primaryColor: '#ff3366',
      secondaryColor: '#5e17eb',
      accentColor: '#00c9ff',
      textColor: '#2d3047',
      backgroundColor: '#f8fafc',
      starColor: '#fbbf24',
      titleFontSize: '2.8rem',
      subtitleFontSize: '1.1rem',
      cardTitleFontSize: '1.1rem',
      cardTextFontSize: '1.1rem',
      titleFontFamily: 'Playfair Display',
      subtitleFontFamily: 'Montserrat',
      cardTitleFontFamily: 'Montserrat',
      cardTextFontFamily: 'Montserrat',
      visibleTestimonials: '3',
      metric1Value: '25k+',
      metric1Label: 'Happy Customers Worldwide',
      metric2Value: '4.9',
      metric2Label: 'Average Customer Rating',
      metric3Value: '98%',
      metric3Label: 'Customer Satisfaction Rate',
      brandsTitle: 'As Featured In',
      brand1Url: 'https://via.placeholder.com/120/30',
      brand2Url: 'https://via.placeholder.com/120/30',
      brand3Url: 'https://via.placeholder.com/120/30',
      brand4Url: 'https://via.placeholder.com/120/30',
      brand5Url: 'https://via.placeholder.com/120/30',
      ctaTitle: "Don't Miss This Limited-Time Offer!",
      ctaText: 'Join thousands of satisfied customers and take advantage of our biggest sale of the year. Premium products at unbeatable prices, available for a limited time only.',
      ctaButtonText: 'Shop Now and Save 70%',
      ctaButtonLink: '#shop-now',
      testimonial1Name: 'Sarah Johnson',
      testimonial1Title: 'Marketing Director',
      testimonial1Quote: 'I was skeptical about the noise-cancelling claims, but these headphones exceeded my expectations. Crystal clear sound and the battery life is impressive. Best purchase I’ve made this year, especially at this discounted price!',
      testimonial1ImageUrl: 'https://via.placeholder.com/100',
      testimonial1ProductName: 'Premium Wireless Headphones',
      testimonial1ProductImageUrl: 'https://via.placeholder.com/100',
      testimonial2Name: 'Michael Chen',
      testimonial2Title: 'Fitness Instructor',
      testimonial2Quote: 'This smart watch has completely changed my fitness routine. The tracking is accurate, and the battery lasts way longer than advertised. The app integration is seamless, and the discount made it a no-brainer purchase.',
      testimonial2ImageUrl: 'https://via.placeholder.com/100',
      testimonial2ProductName: 'Advanced Fitness Tracking Smart Watch',
      testimonial2ProductImageUrl: 'https://via.placeholder.com/100',
      testimonial3Name: 'Emily Rodriguez',
      testimonial3Title: 'Travel Blogger',
      testimonial3Quote: 'I’ve owned many portable speakers, but this one takes the cake. The sound quality is phenomenal for its size, and being waterproof means I can take it anywhere. Customer service was excellent when I had questions about setup.',
      testimonial3ImageUrl: 'https://via.placeholder.com/100',
      testimonial3ProductName: 'Waterproof Portable Bluetooth Speaker',
      testimonial3ProductImageUrl: 'https://via.placeholder.com/100',
      testimonial4Name: 'David Parker',
      testimonial4Title: 'Software Engineer',
      testimonial4Quote: 'The smart home hub was incredibly easy to set up and now controls everything in my apartment. The voice recognition is spot on and works from across the room. The sale price made this premium product actually affordable.',
      testimonial4ImageUrl: 'https://via.placeholder.com/100',
      testimonial4ProductName: 'Voice-Controlled Smart Home Hub',
      testimonial4ProductImageUrl: 'https://via.placeholder.com/100',
      testimonial5Name: 'Jane Doe',
      testimonial5Title: 'Marketing Manager',
      testimonial5Quote: 'This product transformed my daily routine—absolutely amazing quality!',
      testimonial5ImageUrl: 'https://via.placeholder.com/100',
      testimonial5ProductName: 'Premium Product',
      testimonial5ProductImageUrl: 'https://via.placeholder.com/100',
      testimonial6Name: 'John Smith',
      testimonial6Title: 'Freelancer',
      testimonial6Quote: 'Fast shipping and incredible design. I’m a customer for life!',
      testimonial6ImageUrl: 'https://via.placeholder.com/100',
      testimonial6ProductName: 'Innovative Gadget',
      testimonial6ProductImageUrl: 'https://via.placeholder.com/100',
      testimonial7Name: 'Lisa Anderson',
      testimonial7Title: 'Student',
      testimonial7Quote: 'Affordable luxury that I can’t get enough of!',
      testimonial7ImageUrl: 'https://via.placeholder.com/100',
      testimonial7ProductName: 'Luxury Item',
      testimonial7ProductImageUrl: 'https://via.placeholder.com/100',
      testimonial8Name: 'Robert Taylor',
      testimonial8Title: 'Consultant',
      testimonial8Quote: 'The guarantee gave me peace of mind—great experience!',
      testimonial8ImageUrl: 'https://via.placeholder.com/100',
      testimonial8ProductName: 'Reliable Device',
      testimonial8ProductImageUrl: 'https://via.placeholder.com/100'
    };
    this.render();
  }

  static get observedAttributes() {
    return [
      'section-title', 'section-subtitle', 'section-badge', 'primary-color', 'secondary-color', 'accent-color', 'text-color', 'background-color', 'star-color',
      'title-font-size', 'subtitle-font-size', 'card-title-font-size', 'card-text-font-size',
      'title-font-family', 'subtitle-font-family', 'card-title-font-family', 'card-text-font-family',
      'visible-testimonials', 'metric1-value', 'metric1-label', 'metric2-value', 'metric2-label', 'metric3-value', 'metric3-label',
      'brands-title', 'brand1-url', 'brand2-url', 'brand3-url', 'brand4-url', 'brand5-url',
      'cta-title', 'cta-text', 'cta-button-text', 'cta-button-link',
      'testimonial1-name', 'testimonial1-title', 'testimonial1-quote', 'testimonial1-image-url', 'testimonial1-product-name', 'testimonial1-product-image-url',
      'testimonial2-name', 'testimonial2-title', 'testimonial2-quote', 'testimonial2-image-url', 'testimonial2-product-name', 'testimonial2-product-image-url',
      'testimonial3-name', 'testimonial3-title', 'testimonial3-quote', 'testimonial3-image-url', 'testimonial3-product-name', 'testimonial3-product-image-url',
      'testimonial4-name', 'testimonial4-title', 'testimonial4-quote', 'testimonial4-image-url', 'testimonial4-product-name', 'testimonial4-product-image-url',
      'testimonial5-name', 'testimonial5-title', 'testimonial5-quote', 'testimonial5-image-url', 'testimonial5-product-name', 'testimonial5-product-image-url',
      'testimonial6-name', 'testimonial6-title', 'testimonial6-quote', 'testimonial6-image-url', 'testimonial6-product-name', 'testimonial6-product-image-url',
      'testimonial7-name', 'testimonial7-title', 'testimonial7-quote', 'testimonial7-image-url', 'testimonial7-product-name', 'testimonial7-product-image-url',
      'testimonial8-name', 'testimonial8-title', 'testimonial8-quote', 'testimonial8-image-url', 'testimonial8-product-name', 'testimonial8-product-image-url'
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
      { name: this.settings.testimonial1Name, title: this.settings.testimonial1Title, quote: this.settings.testimonial1Quote, imageUrl: this.settings.testimonial1ImageUrl, productName: this.settings.testimonial1ProductName, productImageUrl: this.settings.testimonial1ProductImageUrl },
      { name: this.settings.testimonial2Name, title: this.settings.testimonial2Title, quote: this.settings.testimonial2Quote, imageUrl: this.settings.testimonial2ImageUrl, productName: this.settings.testimonial2ProductName, productImageUrl: this.settings.testimonial2ProductImageUrl },
      { name: this.settings.testimonial3Name, title: this.settings.testimonial3Title, quote: this.settings.testimonial3Quote, imageUrl: this.settings.testimonial3ImageUrl, productName: this.settings.testimonial3ProductName, productImageUrl: this.settings.testimonial3ProductImageUrl },
      { name: this.settings.testimonial4Name, title: this.settings.testimonial4Title, quote: this.settings.testimonial4Quote, imageUrl: this.settings.testimonial4ImageUrl, productName: this.settings.testimonial4ProductName, productImageUrl: this.settings.testimonial4ProductImageUrl },
      { name: this.settings.testimonial5Name, title: this.settings.testimonial5Title, quote: this.settings.testimonial5Quote, imageUrl: this.settings.testimonial5ImageUrl, productName: this.settings.testimonial5ProductName, productImageUrl: this.settings.testimonial5ProductImageUrl },
      { name: this.settings.testimonial6Name, title: this.settings.testimonial6Title, quote: this.settings.testimonial6Quote, imageUrl: this.settings.testimonial6ImageUrl, productName: this.settings.testimonial6ProductName, productImageUrl: this.settings.testimonial6ProductImageUrl },
      { name: this.settings.testimonial7Name, title: this.settings.testimonial7Title, quote: this.settings.testimonial7Quote, imageUrl: this.settings.testimonial7ImageUrl, productName: this.settings.testimonial7ProductName, productImageUrl: this.settings.testimonial7ProductImageUrl },
      { name: this.settings.testimonial8Name, title: this.settings.testimonial8Title, quote: this.settings.testimonial8Quote, imageUrl: this.settings.testimonial8ImageUrl, productName: this.settings.testimonial8ProductName, productImageUrl: this.settings.testimonial8ProductImageUrl }
    ].filter(testimonial => testimonial.name && testimonial.quote);

    const visibleCount = Math.min(parseInt(this.settings.visibleTestimonials) || 8, 8);
    const visibleTestimonials = testimonials.slice(0, visibleCount);

    const titleWords = this.settings.sectionTitle.split(' ');
    const regularText = titleWords.slice(0, -1).join(' ');
    const highlightedText = titleWords.slice(-1)[0] || '';

    this.shadowRoot.innerHTML = `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css">
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
          --gray-light: #f1f5f9;
          --gray: #e2e8f0;
          --star: ${this.settings.starColor};
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
          background-color: var(--white);
        }
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          z-index: 2;
        }
        .section-badge {
          display: inline-block;
          background: var(--primary);
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
          color: var(--primary);
        }
        .section-subtitle {
          font-family: ${this.settings.subtitleFontFamily}, sans-serif;
          font-size: ${this.settings.subtitleFontSize};
          color: var(--text-light);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(30px);
        }
        .social-proof-metrics {
          display: flex;
          justify-content: center;
          margin: 3rem auto;
          gap: 3rem;
          opacity: 0;
          transform: translateY(30px);
        }
        .metric-item {
          text-align: center;
          max-width: 180px;
        }
        .metric-value {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background-image: var(--gradient-1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .metric-label {
          font-size: 1rem;
          color: var(--text-light);
          line-height: 1.4;
        }
        .testimonials-container {
          position: relative;
          margin-top: 4rem;
          opacity: 0;
          transform: translateY(50px);
        }
        .testimonials-slider {
          overflow: visible;
          padding: 3rem 0;
        }
        .swiper-slide {
          height: auto;
        }
        .testimonial-card {
          background-color: var(--white);
          border-radius: 1.25rem;
          overflow: hidden;
          padding: 2.5rem;
          box-shadow: var(--shadow);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid var(--gray);
          height: 100%;
        }
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-strong);
        }
        .quote-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 3rem;
          color: var(--gray);
          font-family: 'Georgia', serif;
          line-height: 1;
        }
        .testimonial-rating {
          display: flex;
          margin-bottom: 1.25rem;
        }
        .testimonial-star {
          color: var(--star);
          margin-right: 0.15rem;
        }
        .testimonial-text {
          font-family: ${this.settings.cardTextFontFamily}, sans-serif;
          font-size: ${this.settings.cardTextFontSize};
          line-height: 1.7;
          margin-bottom: 2rem;
          color: var(--text);
          position: relative;
        }
        .testimonial-text::before {
          content: '';
          position: absolute;
          top: -1rem;
          left: 0;
          width: 3rem;
          height: 3px;
          background: var(--primary);
        }
        .testimonial-author {
          display: flex;
          align-items: center;
        }
        .author-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 1rem;
          border: 3px solid var(--white);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .author-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .author-info {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-family: ${this.settings.cardTitleFontFamily}, sans-serif;
          font-weight: 700;
          font-size: ${this.settings.cardTitleFontSize};
          margin-bottom: 0.25rem;
        }
        .author-title {
          color: var(--text-light);
          font-size: 0.875rem;
        }
        .testimonial-product {
          display: flex;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--gray);
        }
        .product-thumbnail {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          overflow: hidden;
          margin-right: 1rem;
          background-color: var(--gray-light);
        }
        .product-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-info {
          display: flex;
          flex-direction: column;
        }
        .product-name {
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }
        .verified-purchase {
          display: flex;
          align-items: center;
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .verified-purchase svg {
          margin-right: 0.3rem;
        }
        .swiper-button-next,
        .swiper-button-prev {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          box-shadow: var(--shadow);
          color: var(--text);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: var(--primary);
          color: white;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 1.25rem;
          font-weight: bold;
        }
        .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: var(--gray);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: var(--primary);
          width: 30px;
          border-radius: 5px;
        }
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: 1;
        }
        .shape-5 {
          width: 400px;
          height: 400px;
          top: 50%;
          right: -200px;
          background: var(--secondary);
        }
        .shape-6 {
          width: 300px;
          height: 300px;
          bottom: -150px;
          left: -100px;
          background: var(--primary);
        }
        .brands-container {
          margin-top: 5rem;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
        }
        .brands-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 2rem;
        }
        .brands-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 3rem;
        }
        .brand-logo {
          height: 30px;
          opacity: 0.7;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .brand-logo:hover {
          opacity: 1;
          transform: scale(1.05);
        }
        .cta-banner {
          margin-top: 5rem;
          padding: 3rem;
          background: var(--gradient-1);
          border-radius: 1.5rem;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }
        .cta-title {
          font-family: ${this.settings.titleFontFamily}, serif;
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
        }
        .cta-text {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem 3rem;
          background: white;
          color: var(--text);
          font-weight: 700;
          font-size: 1.125rem;
          text-decoration: none;
          border-radius: 0.5rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .cta-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.7s ease;
        }
        .cta-btn:hover::before {
          left: 100%;
        }
        .cta-circles {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          z-index: 0;
        }
        .cta-circle1 {
          top: -100px;
          left: -50px;
        }
        .cta-circle2 {
          bottom: -100px;
          right: -50px;
          width: 300px;
          height: 300px;
        }
        .reveal {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        @media (max-width: 992px) {
          .testimonials-section { padding: 5rem 1.25rem; }
          .section-title { font-size: 2.5rem; }
          .social-proof-metrics { gap: 2rem; }
          .metric-value { font-size: 2.5rem; }
          .cta-banner { padding: 2.5rem; }
          .cta-title { font-size: 2rem; }
        }
        @media (max-width: 768px) {
          .testimonials-section { padding: 4rem 1rem; }
          .section-title { font-size: 2.2rem; }
          .section-subtitle { font-size: 1rem; }
          .social-proof-metrics { flex-wrap: wrap; gap: 1.5rem; }
          .metric-item { width: calc(50% - 1.5rem); max-width: none; }
          .metric-value { font-size: 2.2rem; }
          .brands-logos { gap: 2rem; }
          .cta-title { font-size: 1.8rem; }
          .cta-text { font-size: 1rem; }
          .cta-btn { padding: 1rem 2.5rem; font-size: 1rem; }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 1.8rem; }
          .testimonial-card { padding: 2rem; }
          .social-proof-metrics { flex-direction: column; align-items: center; }
          .metric-item { width: 100%; }
          .cta-banner { padding: 2rem 1.5rem; }
          .brands-logos { gap: 1.5rem; }
          .brand-logo { height: 25px; }
        }
      </style>
      <section class="testimonials-section" id="testimonials">
        <div class="shape shape-5"></div>
        <div class="shape shape-6"></div>
        <div class="section-container">
          <div class="section-header">
            <div class="section-badge">${this.settings.sectionBadge}</div>
            <h2 class="section-title">${regularText} <span>${highlightedText}</span></h2>
            <p class="section-subtitle">${this.settings.sectionSubtitle}</p>
          </div>
          <div class="social-proof-metrics">
            <div class="metric-item">
              <div class="metric-value">${this.settings.metric1Value}</div>
              <div class="metric-label">${this.settings.metric1Label}</div>
            </div>
            <div class="metric-item">
              <div class="metric-value">${this.settings.metric2Value}</div>
              <div class="metric-label">${this.settings.metric2Label}</div>
            </div>
            <div class="metric-item">
              <div class="metric-value">${this.settings.metric3Value}</div>
              <div class="metric-label">${this.settings.metric3Label}</div>
            </div>
          </div>
          <div class="testimonials-container">
            <div class="swiper testimonials-slider">
              <div class="swiper-wrapper">
                ${visibleTestimonials.map(testimonial => `
                  <div class="swiper-slide">
                    <div class="testimonial-card">
                      <div class="quote-icon">"</div>
                      <div class="testimonial-rating">
                        <span class="testimonial-star">★</span>
                        <span class="testimonial-star">★</span>
                        <span class="testimonial-star">★</span>
                        <span class="testimonial-star">★</span>
                        <span class="testimonial-star">★</span>
                      </div>
                      <p class="testimonial-text">${testimonial.quote}</p>
                      <div class="testimonial-author">
                        <div class="author-image">
                          <img src="${testimonial.imageUrl}" alt="${testimonial.name}">
                        </div>
                        <div class="author-info">
                          <h4 class="author-name">${testimonial.name}</h4>
                          <p class="author-title">${testimonial.title}</p>
                        </div>
                      </div>
                      <div class="testimonial-product">
                        <div class="product-thumbnail">
                          <img src="${testimonial.productImageUrl}" alt="${testimonial.productName}">
                        </div>
                        <div class="product-info">
                          <p class="product-name">${testimonial.productName}</p>
                          <div class="verified-purchase">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Verified Purchase
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="brands-container">
            <h3 class="brands-title">${this.settings.brandsTitle}</h3>
            <div class="brands-logos">
              <img class="brand-logo" src="${this.settings.brand1Url}" alt="Brand 1">
              <img class="brand-logo" src="${this.settings.brand2Url}" alt="Brand 2">
              <img class="brand-logo" src="${this.settings.brand3Url}" alt="Brand 3">
              <img class="brand-logo" src="${this.settings.brand4Url}" alt="Brand 4">
              <img class="brand-logo" src="${this.settings.brand5Url}" alt="Brand 5">
            </div>
          </div>
          <div class="cta-banner">
            <div class="cta-circle1 cta-circles"></div>
            <div class="cta-circle2 cta-circles"></div>
            <h2 class="cta-title">${this.settings.ctaTitle}</h2>
            <p class="cta-text">${this.settings.ctaText}</p>
            <a href="${this.settings.ctaButtonLink}" class="cta-btn">${this.settings.ctaButtonText}</a>
          </div>
        </div>
      </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js"></script>
      <script>
        const initSlider = () => {
          new Swiper(this.shadowRoot.querySelector('.testimonials-slider'), {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: {
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }
          });
        };
        const initAnimations = () => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);
          ['.section-badge', '.section-title', '.section-subtitle', '.social-proof-metrics', 
           '.testimonials-container', '.brands-container', '.cta-banner'].forEach(selector => {
            gsap.to(this.shadowRoot.querySelector(selector), {
              scrollTrigger: {
                trigger: this.shadowRoot.querySelector(selector),
                start: 'top 80%',
                toggleClass: 'reveal'
              }
            });
          });
          const metrics = this.shadowRoot.querySelectorAll('.metric-value');
          metrics.forEach(metric => {
            const targetValue = metric.textContent;
            const isPercentage = targetValue.includes('%');
            const isPlus = targetValue.includes('+');
            const isDecimal = targetValue.includes('.');
            let numValue = isDecimal ? parseFloat(targetValue) : parseInt(targetValue.replace(/[^0-9]/g, ''));
            let startValue = 0;
            const duration = 2000;
            const animate = (currentTime, startTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress = 1 - (1 - progress) * (1 - progress);
              if (isDecimal) {
                metric.textContent = (easedProgress * numValue).toFixed(1);
              } else {
                let current = Math.floor(easedProgress * numValue);
                metric.textContent = current + (isPlus ? '+' : '') + (isPercentage ? '%' : '');
              }
              if (progress < 1) requestAnimationFrame(time => animate(time, startTime));
              else metric.textContent = targetValue;
            };
            ScrollTrigger.create({
              trigger: metric,
              start: 'top 80%',
              onEnter: () => requestAnimationFrame(time => animate(time, performance.now()))
            });
          });
        };
        initSlider();
        if (window.gsap && window.ScrollTrigger) initAnimations();
        else setTimeout(() => initAnimations(), 500);
      </script>
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
          --gray-light: #f1f5f9;
          --gray: #e2e8f0;
          --star: ${this.settings.starColor};
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
        const regularText = titleWords.slice(0, -1).join(' ');
        const highlightedText = titleWords.slice(-1)[0] || '';
        this.shadowRoot.querySelector('.section-title').innerHTML = `${regularText} <span>${highlightedText}</span>`;
        break;
      case 'section-subtitle':
        this.shadowRoot.querySelector('.section-subtitle').textContent = this.settings.sectionSubtitle;
        break;
      case 'section-badge':
        this.shadowRoot.querySelector('.section-badge').textContent = this.settings.sectionBadge;
        break;
      case 'title-font-size':
        this.shadowRoot.querySelector('.section-title').style.fontSize = this.settings.titleFontSize;
        break;
      case 'subtitle-font-size':
        this.shadowRoot.querySelector('.section-subtitle').style.fontSize = this.settings.subtitleFontSize;
        break;
      case 'card-title-font-size':
        this.shadowRoot.querySelectorAll('.author-name').forEach(el => el.style.fontSize = this.settings.cardTitleFontSize);
        break;
      case 'card-text-font-size':
        this.shadowRoot.querySelectorAll('.testimonial-text').forEach(el => el.style.fontSize = this.settings.cardTextFontSize);
        break;
      case 'title-font-family':
        this.shadowRoot.querySelector('.section-title').style.fontFamily = `${this.settings.titleFontFamily}, serif`;
        this.shadowRoot.querySelector('.cta-title').style.fontFamily = `${this.settings.titleFontFamily}, serif`;
        break;
      case 'subtitle-font-family':
        this.shadowRoot.querySelector('.section-subtitle').style.fontFamily = `${this.settings.subtitleFontFamily}, sans-serif`;
        break;
      case 'card-title-font-family':
        this.shadowRoot.querySelectorAll('.author-name').forEach(el => el.style.fontFamily = `${this.settings.cardTitleFontFamily}, sans-serif`);
        break;
      case 'card-text-font-family':
        this.shadowRoot.querySelectorAll('.testimonial-text').forEach(el => el.style.fontFamily = `${this.settings.cardTextFontFamily}, sans-serif`);
        break;
      case 'metric1-value':
        this.shadowRoot.querySelectorAll('.metric-value')[0].textContent = this.settings.metric1Value;
        break;
      case 'metric1-label':
        this.shadowRoot.querySelectorAll('.metric-label')[0].textContent = this.settings.metric1Label;
        break;
      case 'metric2-value':
        this.shadowRoot.querySelectorAll('.metric-value')[1].textContent = this.settings.metric2Value;
        break;
      case 'metric2-label':
        this.shadowRoot.querySelectorAll('.metric-label')[1].textContent = this.settings.metric2Label;
        break;
      case 'metric3-value':
        this.shadowRoot.querySelectorAll('.metric-value')[2].textContent = this.settings.metric3Value;
        break;
      case 'metric3-label':
        this.shadowRoot.querySelectorAll('.metric-label')[2].textContent = this.settings.metric3Label;
        break;
      case 'brands-title':
        this.shadowRoot.querySelector('.brands-title').textContent = this.settings.brandsTitle;
        break;
      case 'brand1-url':
        this.shadowRoot.querySelectorAll('.brand-logo')[0].src = this.settings.brand1Url;
        break;
      case 'brand2-url':
        this.shadowRoot.querySelectorAll('.brand-logo')[1].src = this.settings.brand2Url;
        break;
      case 'brand3-url':
        this.shadowRoot.querySelectorAll('.brand-logo')[2].src = this.settings.brand3Url;
        break;
      case 'brand4-url':
        this.shadowRoot.querySelectorAll('.brand-logo')[3].src = this.settings.brand4Url;
        break;
      case 'brand5-url':
        this.shadowRoot.querySelectorAll('.brand-logo')[4].src = this.settings.brand5Url;
        break;
      case 'cta-title':
        this.shadowRoot.querySelector('.cta-title').textContent = this.settings.ctaTitle;
        break;
      case 'cta-text':
        this.shadowRoot.querySelector('.cta-text').textContent = this.settings.ctaText;
        break;
      case 'cta-button-text':
        this.shadowRoot.querySelector('.cta-btn').textContent = this.settings.ctaButtonText;
        break;
      case 'cta-button-link':
        this.shadowRoot.querySelector('.cta-btn').href = this.settings.ctaButtonLink;
        break;
      default:
        if (name.startsWith('testimonial') || name === 'visible-testimonials') {
          this.renderTestimonials();
        }
        break;
    }
  }

  renderTestimonials() {
    const testimonials = [
      { name: this.settings.testimonial1Name, title: this.settings.testimonial1Title, quote: this.settings.testimonial1Quote, imageUrl: this.settings.testimonial1ImageUrl, productName: this.settings.testimonial1ProductName, productImageUrl: this.settings.testimonial1ProductImageUrl },
      { name: this.settings.testimonial2Name, title: this.settings.testimonial2Title, quote: this.settings.testimonial2Quote, imageUrl: this.settings.testimonial2ImageUrl, productName: this.settings.testimonial2ProductName, productImageUrl: this.settings.testimonial2ProductImageUrl },
      { name: this.settings.testimonial3Name, title: this.settings.testimonial3Title, quote: this.settings.testimonial3Quote, imageUrl: this.settings.testimonial3ImageUrl, productName: this.settings.testimonial3ProductName, productImageUrl: this.settings.testimonial3ProductImageUrl },
      { name: this.settings.testimonial4Name, title: this.settings.testimonial4Title, quote: this.settings.testimonial4Quote, imageUrl: this.settings.testimonial4ImageUrl, productName: this.settings.testimonial4ProductName, productImageUrl: this.settings.testimonial4ProductImageUrl },
      { name: this.settings.testimonial5Name, title: this.settings.testimonial5Title, quote: this.settings.testimonial5Quote, imageUrl: this.settings.testimonial5ImageUrl, productName: this.settings.testimonial5ProductName, productImageUrl: this.settings.testimonial5ProductImageUrl },
      { name: this.settings.testimonial6Name, title: this.settings.testimonial6Title, quote: this.settings.testimonial6Quote, imageUrl: this.settings.testimonial6ImageUrl, productName: this.settings.testimonial6ProductName, productImageUrl: this.settings.testimonial6ProductImageUrl },
      { name: this.settings.testimonial7Name, title: this.settings.testimonial7Title, quote: this.settings.testimonial7Quote, imageUrl: this.settings.testimonial7ImageUrl, productName: this.settings.testimonial7ProductName, productImageUrl: this.settings.testimonial7ProductImageUrl },
      { name: this.settings.testimonial8Name, title: this.settings.testimonial8Title, quote: this.settings.testimonial8Quote, imageUrl: this.settings.testimonial8ImageUrl, productName: this.settings.testimonial8ProductName, productImageUrl: this.settings.testimonial8ProductImageUrl }
    ].filter(testimonial => testimonial.name && testimonial.quote);

    const visibleCount = Math.min(parseInt(this.settings.visibleTestimonials) || 8, 8);
    const visibleTestimonials = testimonials.slice(0, visibleCount);

    const slider = this.shadowRoot.querySelector('.swiper-wrapper');
    if (slider) {
      slider.innerHTML = visibleTestimonials.map(testimonial => `
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="quote-icon">"</div>
            <div class="testimonial-rating">
              <span class="testimonial-star">★</span>
              <span class="testimonial-star">★</span>
              <span class="testimonial-star">★</span>
              <span class="testimonial-star">★</span>
              <span class="testimonial-star">★</span>
            </div>
            <p class="testimonial-text">${testimonial.quote}</p>
            <div class="testimonial-author">
              <div class="author-image">
                <img src="${testimonial.imageUrl}" alt="${testimonial.name}">
              </div>
              <div class="author-info">
                <h4 class="author-name">${testimonial.name}</h4>
                <p class="author-title">${testimonial.title}</p>
              </div>
            </div>
            <div class="testimonial-product">
              <div class="product-thumbnail">
                <img src="${testimonial.productImageUrl}" alt="${testimonial.productName}">
              </div>
              <div class="product-info">
                <p class="product-name">${testimonial.productName}</p>
                <div class="verified-purchase">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Verified Purchase
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

customElements.define('testimonials-section', TestimonialsSection);
