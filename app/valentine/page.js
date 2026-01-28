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
          {/* Proposal visual */}
          <div style={proposal}>
            <img
              src="/images/valentine/kneeling-body.png"
              alt=""
              style={body}
            />

            <img
              src="/images/valentine/sameer-face.png"
              alt=""
              style={face}
            />

            <img
              src="/images/valentine/ring-box.png"
              alt=""
              style={ring}
            />
          </div>

          {/* Text */}
          <h1 style={title}>Will you be my Valentine?</h1>
          <p style={subtitle}>Choose wisely.</p>

          {/* Buttons */}
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
            alt="Celebration"
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

const proposal = {
  position: "relative",
  width: "min(320px, 80vw)",
  marginBottom: 32,
};

const body = {
  width: "100%",
};

const face = {
  position: "absolute",
  top: "6%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "28%",
  borderRadius: "50%",
};

const ring = {
  position: "absolute",
  bottom: "6%",
  right: "8%",
  width: "22%",
};

const title = {
  fontSize: "clamp(28px, 5vw, 44px)",
  marginBottom: 8,
  textAlign: "center",
};

const subtitle = {
  opacity: 0.7,
  marginBottom: 40,
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
