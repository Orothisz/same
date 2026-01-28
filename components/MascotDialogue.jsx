"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TypewriterText from "./TypewriterText";

export default function MascotDialogue() {
  const router = useRouter();

  const dialogue = [
    "Hi Sneha 🌸 Welcome to Samhya Land.",
    "This is a world built slowly, softly, and only for you.",
    "No rushing. No noise.",
    "So tell me… are you excited for what you're getting into?"
  ];

  const [step, setStep] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [answer, setAnswer] = useState("");

  function next() {
    if (step < dialogue.length - 1) {
      setStep(step + 1);
    } else {
      setShowInput(true);
    }
  }

  function submit(e) {
    if (e.key === "Enter") {
      if (answer.trim().toLowerCase() === "yes") {
        router.push("/intro");
      } else {
        setAnswer("yes");
      }
    }
  }

  return (
    <div style={card}>
      <img
        src="/images/mascot/mascot-sneha-chibi.png"
        alt="Mascot"
        style={mascot}
      />

      <TypewriterText key={step} text={dialogue[step]} speed={55} />

      {!showInput && (
        <button onClick={next} style={button}>
          Continue
        </button>
      )}

      {showInput && (
        <input
          autoFocus
          value={answer}
          placeholder="type yes and press enter"
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={submit}
          style={input}
        />
      )}
    </div>
  );
}

/* ---------- Styles ---------- */

const card = {
  background: "rgba(255,255,255,0.96)",
  padding: "30px 28px",
  borderRadius: 26,
  width: 360,
  maxWidth: "90vw",
  textAlign: "center",
  boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
};

const mascot = {
  width: 120,
  marginBottom: 16,
};

const button = {
  marginTop: 20,
  padding: "10px 26px",
  borderRadius: 20,
  border: "none",
  background: "linear-gradient(135deg,#ffafbd,#ffc3a0)",
  color: "#fff",
  fontSize: 16,
  cursor: "pointer",
};

const input = {
  marginTop: 18,
  padding: 12,
  width: "100%",
  borderRadius: 14,
  border: "1px solid #ccc",
  textAlign: "center",
  fontSize: 15,
};
