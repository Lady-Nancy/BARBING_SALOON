import React, { useState } from 'react';
import '../Styles/BookNow.css';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'cuts',
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const availableTimes = ['09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectTime = (timeSlot) => {
    setFormData((prev) => ({ ...prev, time: timeSlot }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.time || !formData.date) {
      alert("Please select both a date and a time slot.");
      return;
    }
    
    setSubmitted(true);
  };

  return (
    <section className="booking-section">
      <div className="booking-glow-left"></div>
      <div className="booking-glow-right"></div>

      <div className="booking-container">
        {submitted ? (
         
          <div className="booking-success">
            <div className="success-icon-ring">
              <span className="success-icon">✦</span>
            </div>
            <h2 className="success-title">YOU'RE ON THE LIST</h2>
            <div className="success-divider"></div>
            <p className="success-message">
              Your chair is locked in, <strong>{formData.name}</strong>. We've sent a luxury confirmation ticket containing details for your appointment on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> straight to your device.
            </p>
            <button className="btn-reset" onClick={() => setSubmitted(false)}>BOOK ANOTHER CHAIR</button>
          </div>
        ) : (
          
          <div className="booking-grid">
            
           
            <div className="booking-visual-panel">
              <span className="booking-badge">RESERVE A SEAT</span>
              <h2 className="booking-title">PICK YOUR <span className="rose-text">TIMELINE</span></h2>
              <p className="panel-instruction">Select your preferred date and runtime window below.</p>

              <div className="interactive-selectors">
            
                <div className="input-group group-date">
                  <label htmlFor="date" className="custom-label">SELECT DATE</label>
                  <input 
                    type="date" 
                    id="date"
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                    className="booking-date-input"
                    required 
                  />
                </div>

                
                <div className="time-slots-wrapper">
                  <label className="custom-label">AVAILABLE TIME SLOTS</label>
                  <div className="time-slots-grid">
                    {availableTimes.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        className={`time-chip ${formData.time === slot ? 'selected' : ''}`}
                        onClick={() => selectTime(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

           
            <div className="booking-form-panel">
              <form onSubmit={handleSubmit} className="booking-glass-form">
                <div className="input-field">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="YOUR FULL NAME"
                    required 
                  />
                  <span className="focus-border-line"></span>
                </div>

                <div className="input-field">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="PHONE NUMBER"
                    required 
                  />
                  <span className="focus-border-line"></span>
                </div>

                <div className="input-field select-field">
                  <label htmlFor="service" className="select-label">SELECT CATEGORY</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="cuts">SHARP CUTS & FADES</option>
                    <option value="styling">CREATIVE STYLING</option>
                    <option value="treatments">TREAT & RESTORE</option>
                  </select>
                  <span className="select-arrow">▼</span>
                </div>

                <button type="submit" className="booking-submit-btn">
                  <span>CONFIRM APPOINTMENT</span>
                </button>
              </form>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default BookNow;