import React, { useState } from 'react';
import '../Styles/Reviews.css';

const Reviews = () => {
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
    }
  ];

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

        
        <div className="reviews-grid">
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

      </div>
    </section>
  );
};

export default Reviews;