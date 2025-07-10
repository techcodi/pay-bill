import React from "react";

const Testimonials = ({
  testimonials,
  currentTestimonial,
  nextTestimonial,
  prevTestimonial,
  setCurrentTestimonial,
}) => {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied customers across Africa
          </p>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="testimonial-image"
            />
            <div className="testimonial-rating">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <i key={i} className="fas fa-star"></i>
                )
              )}
            </div>
            <p className="testimonial-text">
              "{testimonials[currentTestimonial].text}"
            </p>
            <h4 className="testimonial-author">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className="testimonial-location">
              {testimonials[currentTestimonial].location}
            </p>
          </div>

          <button onClick={prevTestimonial} className="testimonial-nav prev">
            <i className="fas fa-chevron-left"></i>
          </button>

          <button onClick={nextTestimonial} className="testimonial-nav next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`testimonial-dot ${
                index === currentTestimonial ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
