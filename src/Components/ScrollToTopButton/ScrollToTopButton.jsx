import React, { useState, useEffect } from "react";
import style from "./ScrollToTopButton.module.css";
import { throttle } from "../../utils/throttle";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const throttleScroll = throttle(handleScroll, 2000);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  return (
    <button
      className={isVisible ? style.hidden : style.visible}
      onClick={scrollToTop}
    ></button>
  );
};
