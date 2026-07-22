import React, { useRef } from 'react';
import '../Styles/Reviews.css';

const Reviews = () => {
  const scrollRef = useRef(null);

  const reviewsData = [
    {
      id: 1,
      name: "ALEX MERCER",
      tag: "SHARP FADE & BEARD SHAPE",
      rating: "★★★★★",
      text: "The precision here is unmatched. It's rare to find a space that understands modern textures so perfectly. The gold-standard treatment started the second I sat down.",
      date: "2 DAYS AGO"
    },
    {
      id: 2,
      name: "AMARA LYNNE",
      tag: "PIXIE RESTRUCTURE & TONE",
      rating: "★★★★★",
      text: "Finally, a luxury salon that doesn't gender hair lengths. They gave me the sharpest structural crop I've ever had. Absolute perfectionists.",
      date: "1 WEEK AGO"
    },
    {
      id: 3,
      name: "JORDAN KALE",
      tag: "CREATIVE CURL STYLING",
      rating: "★★★★★",
      text: "Dealing with 4C hair means I am always skeptical of new places, but they handled my curls with immense care and expertise. The hot towel finish is unreal.",
      date: "2 WEEKS AGO"
    },
    {
      id: 4,
      name: "ELENA ROSTOVA",
      tag: "BALAYAGE & SHAG CUT",
      rating: "★★★★★",
      text: "The blend on my highlights is so seamless it looks entirely natural. The atmosphere is elevated without feeling unapproachable.",
      date: "3 WEEKS AGO"
    },
    {
      id: 5,
      name: "MARCUS VANCE",
      tag: "EXECUTIVE CUT & SCALP CARE",
      rating: "★★★★★",
      text: "More than just a haircut—it’s a full reset. The attention to detail and scalp treatment left me feeling like a new person. Worth every penny.",
      date: "1 MONTH AGO"
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
    
      const scrollAmount = 380; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-glow-left"></div>
      <div className="reviews-glow-right"></div>

      <div className="reviews-container">
        
        <div className="reviews-header">
          <span className="reviews-badge">THE VERDICT</span>
          <h2 className="reviews-title">VOICES FROM <span className="gold-text">THE CHAIR</span></h2>
          <p className="reviews-subtitle">
            Read real, unfiltered impressions from the individuals who trust us with their aesthetic identity.
          </p>
        </div>

       
        <div className="reviews-carousel-wrapper">
          <button 
            className="scroll-btn prev-btn" 
            onClick={() => handleScroll('left')}
            aria-label="Previous Review"
          >
            &#10094;
          </button>

          <div className="reviews-slider" ref={scrollRef}>
            {reviewsData.map((review) => (
              <div key={review.id} className="review-card">
                <div className="card-top-row">
                  <div className="rating-stars">{review.rating}</div>
                  <span className="review-date">{review.date}</span>
                </div>
                
                <p className="review-text">"{review.text}"</p>
                
                <div className="card-divider"></div>
                
                <div className="client-info">
                  <h3 className="client-name">{review.name}</h3>
                  <span className="client-tag">{review.tag}</span>
                </div>

                <span className="card-border-glow"></span>
              </div>
            ))}
          </div>

          <button 
            className="scroll-btn next-btn" 
            onClick={() => handleScroll('right')}
            aria-label="Next Review"
          >
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
};

export default Reviews;