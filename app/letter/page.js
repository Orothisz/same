"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Letter() {
  const [opened, setOpened] = useState(false);

  // subtle ambient animation injection
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes floatDust {
        from { transform: translateY(10px); opacity: 0; }
        to { transform: translateY(-80px); opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <main className="page">
      {/* floating paper dust */}
      <div className="dust">
        {[...Array(12)].map((_, i) => (
          <span key={i} style={{ left: `${i * 8}%`, animationDelay: `${i * 1.4}s` }} />
        ))}
      </div>

      <div
        className={`card ${opened ? "open" : ""}`}
        onClick={() => !opened && setOpened(true)}
      >
        {/* FRONT */}
        {!opened && (
          <>
            <div className="ribbon" />
            <div className="wax" />
            <p className="sealText">Open me slowly</p>
          </>
        )}

        {/* INSIDE */}
        {opened && (
          <div className="inside">
            <Image
              src="/images/memories/memory-01.png"
              alt=""
              width={280}
              height={360}
              priority
              className="photo"
            />

            <p className="letter">
              lol hey so no paragraoh yet let's leave it for the actual day i love yeah so one thing
i made this since i cant you know give you actual gifts nahi toh i planend that wait
once u see the entire website ill tell then and haan okay so jab end me you get asked 
a question try to press no alright loveyouu have fun
            </p>

            <Link href="/memories" className="continue">
              Continue →
            </Link>
          </div>
        )}
      </div>

      {/* styles */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at top, #f7efe6 0%, #efe6db 45%, #e6dccf 100%);
          perspective: 1400px;
          overflow: hidden;
        }

        /* floating paper dust */
        .dust {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .dust span {
          position: absolute;
          bottom: -20px;
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          animation: floatDust 14s linear infinite;
        }

        /* card */
        .card {
          width: min(380px, 85vw);
          height: 520px;
          background: linear-gradient(180deg, #fbfaf8, #f3eee7);
          border-radius: 20px;
          box-shadow: 0 40px 90px rgba(0,0,0,0.22);
          position: relative;
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 1.6s cubic-bezier(.25,.8,.25,1);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .card.open {
          transform: rotateX(180deg);
        }

        /* ribbon */
        .ribbon {
          position: absolute;
          width: 100%;
          height: 26px;
          background:
            linear-gradient(
              90deg,
              #cfa8b8,
              #f3ccd8,
              #cfa8b8
            );
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }

        /* wax seal */
        .wax {
          position: absolute;
          bottom: 56px;
          width: 60px;
          height: 60px;
          background:
            radial-gradient(circle at top left, #e07a8d, #b14f63);
          border-radius: 50%;
          box-shadow:
            inset 0 4px 6px rgba(255,255,255,0.3),
            inset 0 -6px 10px rgba(0,0,0,0.35),
            0 10px 20px rgba(0,0,0,0.25);
        }

        .sealText {
          position: absolute;
          bottom: 26px;
          font-size: 12px;
          letter-spacing: 4px;
          opacity: 0.55;
          text-transform: uppercase;
        }

        /* inside */
        .inside {
          position: absolute;
          inset: 0;
          padding: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotateX(180deg);
          backface-visibility: hidden;
          text-align: center;
        }

        .photo {
          border-radius: 14px;
          margin-bottom: 28px;
          object-fit: cover;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .letter {
          line-height: 1.65;
          opacity: 0.75;
          margin-bottom: 36px;
          font-size: 15px;
        }

        .continue {
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.55;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .continue:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}
