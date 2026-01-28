"use client";

import Image from "next/image";
import Link from "next/link";

/* ---------- ALL UPLOADED IMAGES ---------- */
/* ADD EVERYTHING YOU UPLOADED HERE */

const memories = [
  // original memories
  "memory-01.png",
  "memory-02.png",
  "memory-03.png",
  "memory-04.png",
  "memory-05.png",
  "memory-06.png",
  "memory-07.png",
  "memory-08.png",

  // camera uploads
  "IMG_6107.png",
  "IMG_6764.jpeg",
  "IMG_6783.jpeg",
  "IMG_7416.jpeg",
  "IMG_7417.jpeg",
  "IMG_7419.jpeg",
  "IMG_7698.jpeg",
  "IMG_7699.jpeg",

  // long random filename upload
  "90b6e9ca-3398-41e9-be7d-165e318b0b10.jpeg",
];

/* ---------- PAGE ---------- */

export default function Memories() {
  return (
    <main className="page">
      <div className="hearts" />

      <header className="header">
        <h1>Our Little Moments</h1>
        <p>
          Not everything needs words.
          <br />
          Some moments just stay.
        </p>
      </header>

      <section className="grid">
        {memories.map((img, i) => (
          <div
            key={img}
            className="polaroid"
            style={{
              transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + (i % 3))}deg)`,
            }}
          >
            <Image
              src={`/images/memories/${img}`}
              alt=""
              fill
              sizes="(max-width: 768px) 80vw, 260px"
              priority={i < 3}
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

      {/* ---------- STYLES ---------- */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(180deg, #fde1ea, #fff);
          padding: 120px 24px 80px;
          position: relative;
          overflow-x: hidden;
        }

        .header {
          text-align: center;
          margin-bottom: 90px;
        }

        .header h1 {
          font-size: clamp(32px, 5vw, 46px);
          margin-bottom: 12px;
        }

        .header p {
          opacity: 0.7;
          line-height: 1.6;
        }

        .grid {
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 64px 48px;
        }

        .polaroid {
          background: #fff;
          padding: 14px 14px 42px;
          border-radius: 6px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.14);
          position: relative;
          transition: transform 0.45s ease, box-shadow 0.45s ease;
        }

        .polaroid:hover {
          transform: rotate(0deg) scale(1.05);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          z-index: 3;
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
          margin-top: 130px;
          text-align: center;
        }

        .continue {
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.55;
          text-decoration: none;
          color: inherit;
        }

        /* floating hearts */
        .hearts::before,
        .hearts::after {
          content: "♥";
          position: fixed;
          bottom: -10%;
          font-size: 20px;
          color: rgba(255, 90, 140, 0.25);
          animation: floatUp 14s linear infinite;
          pointer-events: none;
        }

        .hearts::after {
          left: 70%;
          font-size: 16px;
          animation-duration: 20s;
        }

        @keyframes floatUp {
          from {
            transform: translateY(0) translateX(0);
          }
          to {
            transform: translateY(-140vh) translateX(-60px);
          }
        }
      `}</style>
    </main>
  );
}
