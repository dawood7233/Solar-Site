import React, { useState, useEffect } from "react";
import Arrow from "../assets/images/Arrow.png";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <div
        onClick={scrollTop}
        className="fixed bottom-5 right-5 cursor-pointer z-50"
      >
        <img
          src={Arrow}
          alt="Go to top"
          className="w-12 h-12 bg-black rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-bounce"
        />
      </div>
    )
  );
};

export default ScrollUp;
