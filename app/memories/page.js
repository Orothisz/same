"use client";

import Image from "next/image";
import Link from "next/link";

export default function Memories() {
  const images = Array.from({ length: 8 }, (_, i) =>
    `/images/memories/memory-0${i + 1}.png`
  );

  return (
    <main style={page}>
      {/* floating hearts */}
      <div style={heartsLayer}>
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} style={heart(i)} />
        ))}
      </div>

      <header style={header}>
        <h1 style={title}>Our Little Moments</h1>
        <p style={subtitle}>
          I don’t remember every day.
          <br />
          I remember how you made them feel.
        </p>
      </header>

      <section style={board}>
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              ...polaroid,
              transform: `rotate(${rotation(i)}deg)`,
            }}
          >
            {/* tape */}
            <div style={tape} />

            <div style={photoWrap}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 85vw, 260px"
                style={photo}
                priority={i < 2}
              />
            </div>
          </div>
        ))}
      </section>

      <footer style={footer}>
        <Link href="/valentine" style={continue}>
          Continue →
        </Link>
      </footer>
    </main>
  );
}

/* ---------- helpers ---------- */

function rotation(i) {
  const r = [-5, -3, -1, 2, 3, 5];
  return r[i % r.length];
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  padding: "110px 24px 90px",
  background:
    "linear-gradient(180deg, #ffe6ee 0%, #fff1f5 45%, #fff 100%)",
  position: "relative",
  overflow: "hidden",
};

/* floating hearts layer */
const heartsLayer = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
};

const heart = (i) => ({
  position: "absolute",
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  width: 12,
  height: 12,
  backgroundColor: "#ff9bb3",
  transform: "rotate(45deg)",
  opacity: 0.25,
  animation: `float ${14 + i}s linear infinite`,
  filter: "blur(0.3px)",
});

const header = {
  maxWidth: 820,
  margin: "0 auto 90px",
  textAlign: "center",
};

const title = {
  fontSize: "clamp(38px, 6vw, 56px)",
  marginBottom: 18,
};

const subtitle = {
  fontSize: 18,
  opacity: 0.65,
  lineHeight: 1.7,
};

const board = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  gap: 56,
  justifyContent: "center",
};

const polaroid = {
  width: 260,
  background: "#fff",
  padding: "16px 16px 36px",
  borderRadius: 8,
  boxShadow:
    "0 30px 60px rgba(0,0,0,0.18)",
  position: "relative",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
};

const tape = {
  position: "absolute",
  top: -12,
  left: "50%",
  transform: "translateX(-50%) rotate(-2deg)",
  width: 90,
  height: 26,
  background:
    "rgba(255, 230, 190, 0.9)",
  boxShadow:
    "0 6px 12px rgba(0,0,0,0.15)",
};

const photoWrap = {
  position: "relative",
  width: "100%",
  aspectRatio: "3 / 4",
  overflow: "hidden",
  borderRadius: 4,
  backgroundColor: "#f3f3f3",
};

const photo = {
  objectFit: "cover",
};

const footer = {
  marginTop: 120,
  textAlign: "center",
};

const continue = {
  fontSize: 14,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  opacity: 0.6,
  textDecoration: "none",
  color: "inherit",
};

/* ---------- animations ---------- */
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from {
    transform: translateY(0) rotate(45deg);
  }
  to {
    transform: translateY(-120vh) rotate(45deg);
  }
}
`;
if (typeof document !== "undefined") {
  document.head.appendChild(style);
}
