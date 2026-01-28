"use client";

import { useState } from "react";

export default function Valentine() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });

  function dodgeNo() {
    const top = Math.random() * 70 + 10;
    const left = Math.random() * 70 + 10;
    setNoPos({ top: `${top}%`, left: `${left}%` });
  }

  return (
    <main style={page}>
      {!accepted && (
        <>
          <h1 style={title}>Will you be my Valentine?</h1>
          <p style={subtitle}>Be honest. Or try to.</p>

          <div style={buttons}>
            <button style={yesBtn} onClick={() => setAccepted(true)}>
              Yes
            </button>

            <button
              style={{ ...noBtn, top: noPos.top, left: noPos.left }}
              onMouseEnter={dodgeNo}
              onClick={dodgeNo}
            >
              No
            </button>
          </div>
        </>
      )}

      {accepted && (
        <div style={celebrate}>
          <img
            src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif"
            alt="Happy"
            style={gif}
          />
          <h2 style={finalText}>Best decision you’ve ever made 💖</h2>
        </div>
      )}
    </main>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  backgroundImage: "url(/images/valentine/valentine-bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
};

const title = {
  fontSize: "clamp(28px, 5vw, 44px)",
  marginBottom: 12,
  textAlign: "center",
};

const subtitle = {
  opacity: 0.7,
  marginBottom: 48,
};

const buttons = {
  position: "relative",
  width: "100%",
  maxWidth: 420,
  height: 200,
};

const yesBtn = {
  padding: "14px 36px",
  fontSize: 18,
  borderRadius: 999,
  border: "none",
  backgroundColor: "#ff5c8a",
  color: "white",
  cursor: "pointer",
};

const noBtn = {
  position: "absolute",
  padding: "12px 32px",
  fontSize: 16,
  borderRadius: 999,
  border: "1px solid #ccc",
  background: "white",
  cursor: "pointer",
};

const celebrate = {
  textAlign: "center",
};

const gif = {
  width: "min(320px, 80vw)",
  borderRadius: 16,
  marginBottom: 24,
};

const finalText = {
  fontSize: "clamp(20px, 4vw, 28px)",
};
