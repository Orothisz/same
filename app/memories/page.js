import Link from "next/link";

export default function Memories() {
  const images = [
    "/images/memories/memory-01.png",
    "/images/memories/memory-02.png",
    "/images/memories/memory-03.png",
    "/images/memories/memory-04.png",
    "/images/memories/memory-05.png",
    "/images/memories/memory-06.png",
  ];

  return (
    <main style={page}>
      <header style={header}>
        <h1 style={title}>Moments</h1>
        <p style={subtitle}>Some moments don’t need explanation.</p>
      </header>

      <section style={grid}>
        {images.map((src, i) => (
          <div key={i} style={frame}>
            <img src={src} alt="" style={image} />
          </div>
        ))}
      </section>

      <footer style={footer}>
        <Link href="/valentine" style={ghost}>
          Continue
        </Link>
      </footer>
    </main>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  padding: "96px 32px",
};

const header = {
  maxWidth: 900,
  margin: "0 auto 64px",
};

const title = {
  fontSize: 42,
  marginBottom: 12,
};

const subtitle = {
  fontSize: 18,
  opacity: 0.65,
};

const grid = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: 32,
};

const frame = {
  width: "100%",
  aspectRatio: "3 / 4",
  overflow: "hidden",
  borderRadius: 16,
  backgroundColor: "#eee",
};

const image = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const footer = {
  marginTop: 96,
  textAlign: "center",
};

const ghost = {
  fontSize: 13,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  opacity: 0.5,
  textDecoration: "none",
  color: "inherit",
};
