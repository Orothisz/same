"use client";

import Link from "next/link";

export default function Intro() {
  return (
    <main style={page}>
      <section style={card}>
        <span style={meta}>Time</span>

        <h1 style={title}>100 Days Together</h1>

        <p style={sub}>Since 20 October 2025</p>

        <Link href="/letter" style={cta}>
          Continue
        </Link>
      </section>
    </main>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "radial-gradient(circle at top, #fff7fb, #f2eef1)",
};

const card = {
  background: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(12px)",
  padding: "44px 52px",
  borderRadius: 28,
  textAlign: "center",
  boxShadow:
    "0 40px 80px rgba(0,0,0,0.18)",
  animation: "fadeUp 1.1s ease",
};

const meta = {
  fontSize: 12,
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  opacity: 0.6,
};

const title = {
  fontSize: 46,
  margin: "18px 0 10px",
};

const sub = {
  fontSize: 16,
  opacity: 0.7,
};

const cta = {
  marginTop: 48,
  display: "inline-block",
  padding: "12px 34px",
  borderRadius: 999,
  background:
    "linear-gradient(135deg,#ffb3c6,#ffc2a1)",
  color: "#fff",
  textDecoration: "none",
  fontSize: 14,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  boxShadow:
    "0 16px 30px rgba(255,160,180,0.45)",
};
