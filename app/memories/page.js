"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Memories() {
  const memories = [
    "memory-01.png",
    "memory-02.png",
    "memory-03.png",
    "memory-04.png",
    "memory-05.png",
    "memory-06.png",
    "memory-07.png",
    "memory-08.png",
    "IMG_6107.png",
    "IMG_6764.jpeg",
    "IMG_6783.jpeg",
    "IMG_7416.jpeg",
    "IMG_7417.jpeg",
    "IMG_7419.jpeg",
    "IMG_7698.jpeg",
    "IMG_7699.jpeg",
  ];

  /* Inject subtle floating heart animation */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        from { transform: translateY(20px) scale(0.8); opacity: 0; }
        to { transform: translateY(-120vh) scale(1); opacity: 0.9; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <main className="page">
      {/* Floating hearts */}
      <div className="hearts">
        {[...Array(14)].map((_, i) => (
          <span key={i} style={{ left: `${i * 7}%`, animationDelay: `${i * 1.2}s` }}>
            ♥
          </span>
        ))}
      </div>

      <header className="header">
        <h1>Our Little Moments</h1>
        <p>Not Hey girl wsp take a look.</p>
      </header>

      <section className="grid">
        {memories.map((img, i) => (
          <div className="polaroid" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="photoWrap">
              <Image
                src={`/images/memories/${img}`}
                alt=""
                fill
                sizes="(max-width: 768px) 90vw, 260px"
                priority={i < 4}
                className="photo"
              />
            </div>
            <span className="caption">♥</span>
          </div>
        ))}
      </section>

      <footer className="footer">
        <Link href="/valentine" className="continue">
          Continue →
        </Link>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 120px 24px 80px;
          background:
            radial-gradient(circle at top, #ffe8f1 0%, #f9f2f6 40%, #fff 100%);
          position: relative;
          overflow: hidden;
        }

        /* Floating hearts */
        .hearts {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .hearts span {
          position: absolute;
          bottom: -20px;
          font-size: 18px;
          opacity: 0.35;
          animation: float 14s linear infinite;
        }

        /* Header */
        .header {
          max-width: 900px;
          margin: 0 auto 96px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .header h1 {
          font-size: clamp(42px, 7vw, 64px);
          font-weight: 600;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .header p {
          font-size: 18px;
          opacity: 0.65;
        }

        /* Grid */
        .grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 56px 40px;
          position: relative;
          z-index: 1;
        }

        /* Polaroid */
        .polaroid {
          background: #fff;
          padding: 16px 16px 28px;
          border-radius: 12px;
          box-shadow:
            0 30px 60px rgba(0,0,0,0.12);
          transform: translateY(20px) rotate(var(--r, -2deg));
          animation: rise 0.6s ease forwards;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .polaroid:nth-child(even) {
          --r: 2deg;
        }

        .polaroid:hover {
          transform: translateY(-8px) rotate(0deg) scale(1.04);
          box-shadow: 0 40px 80px rgba(0,0,0,0.18);
        }

        @keyframes rise {
          to {
            transform: translateY(0) rotate(var(--r, -2deg));
            opacity: 1;
          }
        }

        /* Image wrapper */
        .photoWrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 6px;
          background: #f2f2f2;
        }

        .photo {
          object-fit: cover;
        }

        /* Caption */
        .caption {
          display: block;
          text-align: center;
          margin-top: 12px;
          opacity: 0.4;
          letter-spacing: 0.3em;
        }

        /* Footer */
        .footer {
          margin-top: 120px;
          text-align: center;
        }

        .continue {
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.5;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.3s ease;
        }

        .continue:hover {
          opacity: 0.9;
        }
      `}</style>
    </main>
  );
}
