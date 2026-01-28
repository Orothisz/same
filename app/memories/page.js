"use client";

import Link from "next/link";
import Image from "next/image";

export default function Memories() {
  const images = Array.from({ length: 8 }, (_, i) => 
    `/images/memories/memory-0${i + 1}.png`
  );

  return (
    <main style={page}>
      {/* Soft texture overlay */}
      <div style={texture} />

      <header style={header}>
        <h1 style={title}>Little Moments</h1>
        <p style={subtitle}>
          Some memories don’t ask to be explained.  
          They just ask to be felt.
        </p>
      </header>

      <section style={board}>
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              ...polaroid,
              transform: `rotate(${randomRotation(i)}deg)`,
            }}
          >
            <div style={photoWrap}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 90vw, 260px"
                style={photo}
              />
            </div>
          </div>
        ))}
      </section>

      <footer style={footer}>
        <Link href="/valentine" style={continueBtn}>
          Continue →
        </Link>
      </footer>
    </main>
  );
}

/* ---------- helpers ---------- */

function randomRotation(i) {
  const angles = [-4, -2, -1, 1, 2, 3, 4];
  return angles[i % angles.length];
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  padding: "120px 24px 80px",
  background:
    "linear-gradient(to bottom, #faf6f2, #f3ebe3)",
  position: "relative",
  overflowX: "hidden",
};

const texture = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "url(https://www.transparenttextures.com/patterns/paper-fibers.png)",
  opacity: 0.35,
  pointerEvents: "none",
};

const header = {
  maxWidth: 820,
  margin: "0 auto 96px",
  textAlign: "center",
};

const title = {
  fontSize: "clamp(36px, 6vw, 56px)",
  marginBottom: 16,
};

const subtitle = {
  fontSize: 18,
  opacity: 0.65,
  lineHeight: 1.6,
};

const board = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  gap: 48,
  justifyContent: "center",
};

const polaroid = {
  width: 260,
  background: "#fff",
  padding: "14px 14px 28px",
  borderRadius: 6,
  boxShadow:
    "0 25px 50px rgba(0,0,0,0.15)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
};

const photoWrap = {
  position: "relative",
  width: "100%",
  aspectRatio: "3 / 4",
  overflow: "hidden",
  borderRadius: 4,
  backgroundColor: "#ddd",
};

const photo = {
  objectFit: "cover",
};

const footer = {
  marginTop: 120,
  textAlign: "center",
};

const continueBtn = {
  fontSize: 14,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  opacity: 0.6,
  textDecoration: "none",
  color: "inherit",
  transition: "opacity 0.3s ease",
};
