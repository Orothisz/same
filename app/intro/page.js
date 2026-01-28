import Link from "next/link";

export default function Intro() {
  return (
    <main style={page}>
      <section style={content}>
        <span style={meta}>Time, measured gently</span>

        <h1 style={title}>100 Days Together</h1>

        <p style={sub}>Since 20 October 2025</p>

        <Link href="/letter" style={ghost}>
          Read
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
};

const content = {
  textAlign: "center",
};

const meta = {
  fontSize: 12,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  opacity: 0.6,
};

const title = {
  fontSize: 44,
  margin: "18px 0 10px",
};

const sub = {
  fontSize: 16,
  opacity: 0.7,
};

const ghost = {
  marginTop: 56,
  fontSize: 13,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  opacity: 0.5,
  textDecoration: "none",
  color: "inherit",
};
