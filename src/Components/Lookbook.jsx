import React, { useState } from 'react';
import '../Styles/Lookbook.css';
import { Link } from 'react-router-dom';

const Lookbook = () => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'trim/tatoo',
      title: 'Sleek Textured Pixie',
      artist: 'By Sarah',
      imgUrl: 'https://www.barberstake.com/wp-content/uploads/2025/03/Edgy-Freestyle-From-Sides-To-Back.jpg'
    },
    {
      id: 2,
      category: 'cuts',
      title: 'Mid Skin Fade & Crop',
      artist: 'By Alex',
      imgUrl: 'https://i.pinimg.com/474x/9f/81/b8/9f81b859a37b29aeffb49381c6431ccd.jpg'
    },
    {
      id: 3,
      category: 'trim/tatoo',
      title: 'Sharp Undercut Bob',
      artist: 'By Sarah',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNyi8HCGDxSkU6xcQNgZyesTMidCayGb-sTxK7UZTDNDcfQHQfQG7c737&s=10'
    },
    {
      id: 4,
      category: 'cuts',
      title: 'Classic Pompadour Taper',
      artist: 'By Marcus',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0gKBqtYJz4QM44eyfI-4wx-XMCAc2D72eurgS4gLXkUmiE3_7RmqntaG&s=10'
    },
    {
      id: 5,
      category: 'designs',
      title: 'Abstract Hair Tattoo',
      artist: 'By Alex',
      imgUrl: 'https://i.pinimg.com/236x/00/7b/bc/007bbca3b0e5752e9617c30764dde39c.jpg'
    },
    {
      id: 6,
      category: 'designs',
      title: 'Geometric Line-Up',
      artist: 'By Marcus',
      imgUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="lookbook-section">
      <div className="lookbook-radial-glow"></div>
      
      <div className="lookbook-container">
       
        <div className="lookbook-header">
          <span className="lookbook-badge">THE LOOKBOOK</span>
          <h2 className="lookbook-title">
            VISUAL <span className="rose-gradient-text">IDENTITY</span>
          </h2>
          <p className="lookbook-subtitle">
            Explore premium cuts, textures, and lines executed flawlessly across all aesthetics.
          </p>
        </div>

       
        <div className="lookbook-filters">
          {['all', 'cuts', 'trim/tatoo', 'designs'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

     
        <div className="lookbook-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="lookbook-card">
              <div className="image-wrapper">
                <img src={item.imgUrl} alt={item.title} className="lookbook-img" />
                
               
                <div className="hover-overlay-bg"></div>
                <div className="hover-border-box"></div>
                
                <div className="lookbook-card-content">
                  <span className="style-artist">{item.artist}</span>
                  <h4 className="style-title">{item.title}</h4>
                  <div className="style-divider"></div>
                  <Link to="/booknow" className="style-action-btn">BOOK THIS LOOK</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;