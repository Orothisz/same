"use client";

import { useState } from "react";
import Image from "next/image";

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
            <Image
              src="/images/valentine/kneeling-body.png"
              alt=""
              width={320}
              height={480}
              priority
              style={body}
            />

            <Image
              src="/images/valentine/sameer-face.png"
              alt=""
              width={90}
              height={90}
              priority
              style={face}
            />

            <Image
              src="/images/valentine/ring-box.png"
              alt=""
              width={70}
              height={70}
              priority
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
          <Image
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZ0aGZlbjNta3VqZzlsamJzOHlrd2Vlc2VvZGczcnYxNnpzOWtoZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bpTL6wXRuMQpMIVduB/giphy.gif"
            alt="Celebration"
            width={320}
            height={320}
            priority
            style={gif}
          />
          <h2 style={finalText}>Oye hoye lol thank you sneha garg i love you sooo much this was the only option u had btw lol loveu</h2>
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
  height: "auto",
};

const face = {
  position: "absolute",
  top: "6%",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "50%",
};

const ring = {
  position: "absolute",
  bottom: "6%",
  right: "8%",
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
  height: "auto",
  borderRadius: 16,
  marginBottom: 24,
};

const finalText = {
  fontSize: "clamp(20px, 4vw, 28px)",
};
