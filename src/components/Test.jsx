import React, { useEffect, useState } from "react";
// import "./carousel.css";

const cards = [9, 10, 1, 2, 3];

export default function Test() {
  const [activeIndex, setActiveIndex] = useState(2);

  // 🔁 AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 800);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // 👉 NEXT
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  // 👉 PREVIOUS
  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  // 🔁 INFINITE POSITION CALCULATION (KEY PART)
  const getPosition = (index) => {
    const diff = index - activeIndex;
    const half = Math.floor(cards.length / 2);

    if (diff > half) return diff - cards.length;
    if (diff < -half) return diff + cards.length;

    return diff;
  };

  return (
    <div className="carousel-wrapper">
      {/* <button className="arrow left" onClick={prevSlide}>
        ←
      </button> */}

      <div className="carousel">
        {cards.map((card, index) => {
          const position = getPosition(index);
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className="card"
              style={{
                transform: `
                  translateX(${position * 500}px)
                  scale(${isActive ? 1.2 : 0.9})
                `,
                opacity: isActive ? 1 : 0.4,
                // filter: isActive ? "blur(0)" : "blur(3px)",
                zIndex: isActive ? 10 : 1,
              }}
            >
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
