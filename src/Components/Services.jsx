import React from 'react';
import '../Styles/Services.css';

const Services = () => {
  const serviceCategories = [
    {
      id: 'cuts',
      title: 'SHARP CUTS & FADES',
      subtitle: 'Precision Grooming',
      description: 'From classic tapers and skin fades to modern textured crops. Tailored sharp lines designed for everyone.',
      price: 'From $35',
      features: ['Skin Fades / Tapers', 'Line-ups & Beard Sculpting', 'Scissors Cuts', 'Hot Towel Finish'],
      tag: 'POPULAR'
    },
    {
      id: 'styling',
      title: 'CREATIVE STYLING',
      subtitle: 'Edgy & Textured Art',
      description: 'Expressive pixie cuts, custom buzz designs, split dyes, and blowouts crafted to turn heads.',
      price: 'From $45',
      features: ['Avant-garde Pixies', 'Hair Tattoo / Graphic Lines', 'Blowouts & Silk Presses', 'Textured Shags'],
      tag: 'TRENDING'
    },
    {
      id: 'treatments',
      title: 'TREAT & RESTORE',
      subtitle: 'Premium Hair Therapy',
      description: 'Pamper your scalp and restore hair health with professional-grade steam therapy and deep conditioning.',
      price: 'From $25',
      features: ['Scalp Detox Massage', 'Hydration Steam Therapy', 'Keratin Smoothing', 'Color Protection Treatment'],
      tag: 'LUXURY'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-glow-top"></div>
      <div className="services-glow-bottom"></div>
      
      <div className="services-container">
       
        <div className="services-header">
          <span className="services-badge">THE MENU</span>
          <h2 className="services-title">
            OUR <span className="rose-gradient-text">CRAFT</span>
          </h2>
          <p className="services-subtitle">
            Premium unisex services designed for both girls and boys. No labels, just exceptional styling and razor-sharp execution.
          </p>
        </div>

        
        <div className="services-grid">
          {serviceCategories.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-inner">
                
                <div className="card-glow-line"></div>
                

                <div className="card-header">
                  <span className="card-tag-badge">{service.tag}</span>
                  <p className="card-sub-title">{service.subtitle}</p>
                  <h3 className="card-main-title">{service.title}</h3>
                </div>

             
                <p className="card-desc">{service.description}</p>

             
                <ul className="card-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="gold-bullet">✦</span> {feature}
                    </li>
                  ))}
                </ul>

               
                <div className="card-footer">
                  <div className="price-tag">
                    <span className="price-label">ESTIMATED</span>
                    <span className="price-value">{service.price}</span>
                  </div>
                  <a href="/booking" className="card-book-btn">
                    <span>BOOK</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <p className="services-footer-note">
          *All hair services include a complimentary wash and premium styling consult.
        </p>
      </div>
    </section>
  );
};

export default Services;