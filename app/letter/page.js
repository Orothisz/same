"use client";

import { useState } from "react";
import Link from "next/link";
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
        onClick={() => !opened && setOpened(true)}
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
            <Image
              src="/images/memories/memory-01.png"
              alt=""
              width={280}
              height={360}
              priority
              style={photo}
            />

            <p style={letter}>
              Some things aren’t written to be read quickly.
              <br /><br />
              They’re meant to be opened slowly.
              <br /><br />
              This is one of them.
            </p>

            {/* Continue */}
            <Link href="/memories" style={continueBtn}>
              Continue →
            </Link>
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
  background: "linear-gradient(180deg, #f6f1ea, #efe7dc)",
  perspective: "1200px",
};

const card = {
  width: "min(380px, 85vw)",
  height: "520px",
  background: "#fbfaf8",
  borderRadius: 18,
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
  letterSpacing: 4,
  opacity: 0.55,
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

const photo = {
  borderRadius: 12,
  marginBottom: 28,
  objectFit: "cover",
};

const letter = {
  textAlign: "center",
  lineHeight: 1.6,
  opacity: 0.75,
  marginBottom: 28,
};

const continueBtn = {
  textDecoration: "none",
  fontSize: 14,
  letterSpacing: 2,
  textTransform: "uppercase",
  opacity: 0.6,
  transition: "opacity 0.3s ease",
};
