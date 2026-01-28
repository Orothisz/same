import Link from "next/link";

export default function Memories() {
  return (
    <main style={page}>
      <p style={text}>Some moments don’t need explanation.</p>

      <Link href="/valentine" style={ghost}>
        Continue
      </Link>
    </main>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const text = {
  fontSize: 22,
  marginBottom: 48,
};

const ghost = {
  fontSize: 13,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  opacity: 0.5,
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
};
