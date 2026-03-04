import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {

    // scroll reveal logic
    const elements = document.querySelectorAll(".scroll-reveal");
    
    // reveal animation logic 
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
