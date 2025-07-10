import React from "react";

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2 className="cta-title">Ready to Simplify Your Bill Payments?</h2>
        <p className="cta-text">
          Join thousands of users who have made the switch to hassle-free bill
          payments
        </p>
        <button className="btn btn-secondary">
          <i className="fas fa-rocket"></i>
          Start Paying Bills Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
