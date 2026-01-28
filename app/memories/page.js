import Link from "next/link";
import Image from "next/image";

export default function Memories() {
  const images = [
    "/images/memories/memory-01.png",
    "/images/memories/memory-02.png",
    "/images/memories/memory-03.png",
    "/images/memories/memory-04.png",
    "/images/memories/memory-05.png",
    "/images/memories/memory-06.png",
    "/images/memories/memory-07.png",
    "/images/memories/memory-08.png",
  ];

  return (
    <main style={page}>
      {/* Header */}
      <header style={header}>
        <span style={eyebrow}>A quiet collection</span>
        <h1 style={title}>Moments</h1>
        <p style={subtitle}>Some moments don’t need explanation.</p>
      </header>

      {/* Memory wall */}
      <section style={wall}>
        {images.map((src, i) => (
          <div key={i} style={frame}>
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 90vw, 320px"
              priority={i < 2}
              style={image}
            />
          </div>
        ))}
      </section>

      {/* Continue */}
      <footer style={footer}>
        <Link href="/valentine" style={ghost}>
          Continue →
        </Link>
      </footer>
    </main>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  padding: "120px 32px 140px",
  background:
    "linear-gradient(180deg, #f7f2ea 0%, #f2ebe1 100%)",
};

const header = {
  maxWidth: 720,
  margin: "0 auto 96px",
  textAlign: "center",
};

const eyebrow = {
  display: "block",
  fontSize: 12,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  opacity: 0.55,
  marginBottom: 12,
};

const title = {
  fontSize: "clamp(36px, 5vw, 56px)",
  marginBottom: 16,
};

const subtitle = {
  fontSize: 18,
  opacity: 0.65,
};

const wall = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: 48,
};

const frame = {
  position: "relative",
  width: "100%",
  aspectRatio: "3 / 4",
  backgroundColor: "#ffffff",
  borderRadius: 18,
  padding: 14,
  boxShadow:
    "0 20px 40px rgba(0,0,0,0.12)",
  transition:
    "transform 0.6s cubic-bezier(.25,.8,.25,1), box-shadow 0.6s ease",
};

const image = {
  objectFit: "cover",
  borderRadius: 12,
};

const footer = {
  marginTop: 120,
  textAlign: "center",
};

const ghost = {
  fontSize: 13,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  opacity: 0.55,
  textDecoration: "none",
  color: "inherit",
};
