import React from "react";

const Services = () => {
  const services = [
    {
      icon: "fas fa-bolt",
      name: "Electricity",
      description:
        "Pay your electricity bills from all major providers instantly",
    },
    {
      icon: "fas fa-wifi",
      name: "Internet",
      description: "Top up your internet data and broadband subscriptions",
    },
    {
      icon: "fas fa-tv",
      name: "Cable TV",
      description: "Renew your cable TV and streaming service subscriptions",
    },
    {
      icon: "fas fa-tint",
      name: "Water",
      description: "Pay water bills and utility services with ease",
    },
    {
      icon: "fas fa-mobile-alt",
      name: "Airtime",
      description: "Recharge airtime for all network providers",
    },
    {
      icon: "fas fa-credit-card",
      name: "Banking",
      description: "Transfer funds and pay banking service fees",
    },
  ];

  return (
    <section className="section services-container" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">All Your Bills in One Place</h2>
          <p className="section-subtitle">
            From electricity to internet, we support all major service providers
            across Africa
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
