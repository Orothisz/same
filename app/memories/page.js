"use client";

import Image from "next/image";
import Link from "next/link";

/* ---------- DATA ---------- */

const memories = [
  "memory-01.png",
  "memory-02.png",
  "memory-03.png",
  "memory-04.png",
  "memory-05.png",
  "memory-06.png",
  "memory-07.png",
  "memory-08.png",
];

/* ---------- PAGE ---------- */

export default function Memories() {
  return (
    <main className="page">
      {/* floating hearts */}
      <div className="hearts" />

      <header className="header">
        <h1>Our Little Moments</h1>
        <p>
          Not everything needs words.  
          Some moments just stay.
        </p>
      </header>

      <section className="grid">
        {memories.map((img, i) => (
          <div
            key={img}
            className="polaroid"
            style={{
              transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (3 + i % 3)}deg)`,
            }}
          >
            <Image
              src={`/images/memories/${img}`}
              alt=""
              fill
              sizes="(max-width: 768px) 80vw, 280px"
              priority={i < 2}
              className="photo"
            />
            <span className="caption">♥</span>
          </div>
        ))}
      </section>

      <footer className="footer">
        <Link href="/valentine" className="continue">
          Continue →
        </Link>
      </footer>

      {/* styles */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            linear-gradient(180deg, #fde2ea, #fff);
          padding: 120px 24px 80px;
          position: relative;
          overflow-x: hidden;
        }

        .header {
          text-align: center;
          margin-bottom: 80px;
        }

        .header h1 {
          font-size: clamp(32px, 5vw, 48px);
          margin-bottom: 12px;
        }

        .header p {
          opacity: 0.7;
          max-width: 420px;
          margin: 0 auto;
        }

        .grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 64px 48px;
        }

        .polaroid {
          background: #fff;
          padding: 14px 14px 40px;
          border-radius: 6px;
          box-shadow:
            0 20px 40px rgba(0,0,0,0.12);
          position: relative;
          transition: transform 0.4s ease;
        }

        .polaroid:hover {
          transform: rotate(0deg) scale(1.04);
          z-index: 2;
        }

        .photo {
          object-fit: cover;
          border-radius: 4px;
        }

        .caption {
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          text-align: center;
          opacity: 0.3;
        }

        .footer {
          margin-top: 120px;
          text-align: center;
        }

        .continue {
          letter-spacing: 0.2em;
          font-size: 12px;
          text-transform: uppercase;
          opacity: 0.6;
          text-decoration: none;
          color: inherit;
        }

        /* hearts */
        .hearts::before,
        .hearts::after {
          content: "♥";
          position: absolute;
          font-size: 24px;
          color: rgba(255, 90, 140, 0.25);
          animation: float 12s linear infinite;
        }

        .hearts::after {
          left: 70%;
          animation-duration: 18s;
          font-size: 18px;
        }

        @keyframes float {
          from {
            bottom: -10%;
            transform: translateX(0);
          }
          to {
            bottom: 110%;
            transform: translateX(-60px);
          }
        }
      `}</style>
    </main>
  );
}
