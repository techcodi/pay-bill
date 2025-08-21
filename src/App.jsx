import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Security from "./components/Security";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Adebayo Johnson",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "This platform has made paying my bills so much easier. No more long queues at the bank!",
      image:
        "https://readdy.ai/api/search-image?query=professional%20african%20man%20smiling%20confidently%20wearing%20business%20shirt%20against%20clean%20white%20background%20modern%20portrait%20photography&width=80&height=80&seq=testimonial1&orientation=squarish",
    },
    {
      name: "Fatima Ahmed",
      location: "Abuja, Nigeria",
      rating: 5,
      text: "Fast, secure, and reliable. I can pay all my utility bills from anywhere in seconds.",
      image:
        "https://readdy.ai/api/search-image?query=professional%20african%20woman%20smiling%20warmly%20wearing%20elegant%20blouse%20against%20clean%20white%20background%20modern%20portrait%20photography&width=80&height=80&seq=testimonial2&orientation=squarish",
    },
    {
      name: "Kwame Asante",
      location: "Accra, Ghana",
      rating: 5,
      text: "The best bill payment service in Africa. Simple interface and instant transactions.",
      image:
        "https://readdy.ai/api/search-image?query=professional%20african%20man%20with%20friendly%20smile%20wearing%20casual%20shirt%20against%20clean%20white%20background%20modern%20portrait%20photography&width=80&height=80&seq=testimonial3&orientation=squarish",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="app">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <Services />
      <HowItWorks />
      <Security />
      <Testimonials
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        nextTestimonial={nextTestimonial}
        prevTestimonial={prevTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
