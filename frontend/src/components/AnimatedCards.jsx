import React, { useRef, useEffect } from "react";

const defaultImages = [
  "https://picsum.photos/id/41/800/800",
  "https://picsum.photos/id/42/800/800",
  "https://picsum.photos/id/33/800/800",
  "https://picsum.photos/id/24/800/800",
  "https://picsum.photos/id/25/800/800",
  "https://picsum.photos/id/26/800/800",
  "https://picsum.photos/id/27/800/800",
  "https://picsum.photos/id/28/800/800",
  "https://picsum.photos/id/29/800/800",
  "https://picsum.photos/id/22/800/800",
];

const AnimatedCards = ({ images = defaultImages, infinite = true }) => {
  const containerRef = useRef(null);

  // Sonsuz scroll için kartları çoğalt
  const renderImages = infinite
    ? Array(4).fill(images).flat().map((img, idx) => ({ img, idx }))
    : images.map((img, idx) => ({ img, idx }));

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".card");
    cards.forEach(card => card.classList.add("is-active"));
    const handleEnter = (event) => {
      const card = event.target.closest(".card");
      if (card) {
        cards.forEach(c => c.classList.remove("is-active"));
        card.classList.add("is-active");
      }
    };
    const handleLeave = (event) => {
      const card = event.target.closest(".card");
      if (card) {
        cards.forEach(c => c.classList.add("is-active"));
      }
    };
    containerRef.current.addEventListener("mouseenter", handleEnter, true);
    containerRef.current.addEventListener("mouseleave", handleLeave, true);
    return () => {
      containerRef.current.removeEventListener("mouseenter", handleEnter, true);
      containerRef.current.removeEventListener("mouseleave", handleLeave, true);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="container flex-nowrap overflow-x-auto scrollbar-hide"
      style={{ minWidth: "100vw" }}
    >
      {renderImages.map(({ img, idx }) => (
        <div className="card" key={idx}>
          <div className="card__inner">
            <picture>
              <img src={img} alt="Klinik görseli" draggable="false" />
            </picture>
          </div>
        </div>
      ))}
      <style>{`
        .container {
          display: flex;
          flex: 1;
          max-width: 1440px;
          padding: 0 3rem;
          margin: 0 auto;
          overflow: auto;
          align-items: flex-start;
          justify-content: center;
        }
        .flex-nowrap {
          flex-wrap: nowrap !important;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .card {
          flex: 1 1 1%;
          position: relative;
          opacity: 0.2;
          transition: flex 600ms cubic-bezier(0.25, 1, 0.5, 1), opacity 250ms ease;
        }
        .card:hover {
          flex-basis: 30%;
        }
        .card__inner {
          margin: 0.25rem;
          background: #fff;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .card picture {
          width: 100%;
          height: 0;
          padding-bottom: 600px;
          overflow: hidden;
          position: relative;
        }
        .card picture img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .card.is-active, .card:hover {
          opacity: 1;
        }
        .card:nth-child(2), .card:nth-child(5), .card:nth-child(9) {
          margin-top: 0;
        }
        .card:nth-child(2), .card:nth-child(4), .card:nth-child(6), .card:nth-child(8), .card:nth-child(10) {
          margin-top: 2.5%;
        }
        .card:nth-child(3), .card:nth-child(7) {
          margin-top: 5%;
        }
        @media (max-width: 900px) {
          .container {
            padding: 0 1rem;
          }
          .card picture {
            padding-bottom: 300px;
          }
        }
        @media (max-width: 600px) {
          .container {
            flex-direction: column;
            align-items: center;
            padding: 0;
          }
          .card {
            flex-basis: 100% !important;
            margin-top: 0 !important;
            margin-bottom: 1rem;
            opacity: 1 !important;
          }
          .card picture {
            padding-bottom: 60vw;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCards; 