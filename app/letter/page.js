"use client";

import { useState } from "react";
import Image from "next/image";

export default function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <main style={page}>
      <div
        style={{
          ...card,
          transform: opened ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
        onClick={() => setOpened(true)}
      >
        {/* Front */}
        {!opened && (
          <>
            <div style={ribbon} />
            <p style={seal}>Open Me</p>
          </>
        )}

        {/* Inside */}
        {opened && (
          <div style={inside}>
            <div style={photoFrame}>
              <Image
                src="/images/memories/memory-01.png"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 70vw, 280px"
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZWVlIi8+"
              />
            </div>

            <p style={letter}>
              Some things aren’t written to be read quickly.
              <br /><br />
              They’re meant to be opened slowly.
              <br /><br />
              This is one of them.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f6f1ea",
  perspective: "1200px",
};

const card = {
  width: "min(380px, 85vw)",
  height: 520,
  background: "#fbfaf8",
  borderRadius: 14,
  boxShadow: "0 40px 80px rgba(0,0,0,0.18)",
  position: "relative",
  cursor: "pointer",
  transformStyle: "preserve-3d",
  transition: "transform 1.4s cubic-bezier(.25,.8,.25,1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ribbon = {
  position: "absolute",
  width: "100%",
  height: 24,
  background:
    "linear-gradient(90deg, #d9b8c4, #f0cbd7, #d9b8c4)",
  top: "50%",
  transform: "translateY(-50%)",
  boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
};

const seal = {
  position: "absolute",
  bottom: 48,
  letterSpacing: 3,
  opacity: 0.5,
};

const inside = {
  position: "absolute",
  inset: 0,
  padding: 32,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transform: "rotateX(180deg)",
  backfaceVisibility: "hidden",
};

const photoFrame = {
  position: "relative",
  width: 280,
  aspectRatio: "3 / 4",
  borderRadius: 8,
  overflow: "hidden",
  marginBottom: 28,
  background: "#eee",
};

const letter = {
  textAlign: "center",
  lineHeight: 1.6,
  opacity: 0.8,
};
