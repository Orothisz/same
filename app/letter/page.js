"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { letterText } from "../../data/letterText";

export default function Letter() {
  const [endReached, setEndReached] = useState(false);

  useEffect(() => {
    function onScroll() {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 120;

      if (nearBottom) setEndReached(true);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={page}>
      <article style={letter}>
        <p style={{ whiteSpace: "pre-line" }}>{letterText}</p>
      </article>

      {endReached && (
        <footer style={footer}>
          <Link href="/memories" style={ghost}>
            Continue
          </Link>
        </footer>
      )}
    </main>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  padding: "120px 24px",
};

const letter = {
  maxWidth: 720,
  margin: "0 auto",
  fontSize: 18,
  lineHeight: 1.75,
};

const footer = {
  marginTop: 120,
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
