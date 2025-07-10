import { useEffect, useState } from "react";

const Hero = () => {
  const textArray = ["from Anywhere", "from Anytime", "with Any Device"];

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex >= textArray.length) {
      setCurrentIndex(0);
      return;
    }

    const currentString = textArray[currentIndex];

    if (isTyping) {
      // Typing logic
      if (charIndex < currentString.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentString[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100); // Typing speed (100ms per letter)

        return () => clearTimeout(timeout);
      } else {
        // Pause at end of string before deleting
        setTimeout(() => setIsTyping(false), 2000); // Wait 2 seconds
      }
    } else {
      // Deleting logic
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 50); // Deleting speed (faster than typing)

        return () => clearTimeout(timeout);
      } else {
        // Move to next string after deleting
        setIsTyping(true);
        setCurrentIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }
  }, [charIndex, currentIndex, isTyping, displayedText, textArray]);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-shield-alt"></i>
            <span>Trusted by 10,000+ users in Africa</span>
          </div>
          <h1 className="hero-title">
            Pay Your Bills<span>Instantly</span>
            {displayedText}
            {/* <span className="cursor">|</span> */}
          </h1>
          <p className="hero-text">
            Simple, secure, and instant payments for all your utility bills. No
            more queues, no more delays - just seamless transactions at your
            fingertips.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-secondary">
              <i className="fas fa-play"></i>
              Get Started
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-download"></i>
              Download App
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20smartphone%20displaying%20bill%20payment%20app%20interface%20with%20african%20user%20hands%20holding%20device%20clean%20white%20background%20professional%20product%20photography%20with%20soft%20lighting&width=600&height=700&seq=hero-phone&orientation=portrait"
            alt="Bill Payment App"
            className="hero-image"
          />
          <div className="hero-circle-1"></div>
          <div className="hero-circle-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
