import React, { useState } from 'react';
import '../Styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Do I need to wash my hair before my appointment?",
      answer: "No, you don't have to! All our premium cuts and styling packages include a complimentary, relaxing hair wash with customized organic shampoos and a hot towel treatment."
    },
    {
      question: "What is your cancellation and late policy?",
      answer: "We value both our stylists' and your time. You can cancel or reschedule up to 24 hours before your appointment without any fee. Late arrivals of more than 15 minutes may need to be rescheduled to ensure our next client isn't delayed."
    },
    {
      question: "How do you price your cuts if it's a unisex salon?",
      answer: "We price strictly by style complexity, techniques used, and hair length—never by gender. Whether you are a boy, girl, or non-binary, a basic skin fade is priced the same, and a complex texture restructure is priced the same."
    },
    {
      question: "Do you specialize in textured, curly, or colored hair?",
      answer: "Absolutely. Our team is trained extensively in all hair typologies, including 3A-4C curls, straight, wavy, and chemically treated hair. Every styling session begins with a structural hair and scalp analysis."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-glow-center"></div>
      
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">COMMON INQUIRIES</span>
          <h2 className="faq-title">
            GOT <span className="rose-gradient-text">QUESTIONS?</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about locking in your spot, our policies, and how we craft the experience.
          </p>
        </div>


        <div className="faq-accordion">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{item.question}</h3>
                  <span className="faq-icon-toggle">
                    <span className="icon-line line-horizontal"></span>
                    <span className="icon-line line-vertical"></span>
                  </span>
                </div>
                
               
                <div className="faq-answer-container">
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;