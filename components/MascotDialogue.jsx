"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TypewriterText from "./TypewriterText";

export default function MascotDialogue() {
  const router = useRouter();

  const dialogue = [
    "Hi Sneha 🌸 Welcome to Sameha Land.",
    "This is a small world built slowly, softly, and only for you.",
    "Before we go any further…",
    "Are you excited for what you’re getting into?"
  ];

  const [step, setStep] = useState(0);
  const [showInput, setShowInput] = useState(false);

  function handleNext() {
    if (step < dialogue.length - 1) {
      setStep(step + 1);
    } else {
      setShowInput(true);
    }
  }

  return (
    <div style={wrapper}>
      {/* Mascot */}
      <img
        src="/images/mascot/mascot-sneha-chibi.png"
        alt="Sneha mascot"
        style={mascot}
      />

      {/* Dialogue */}
      <TypewriterText
        key={step}
        text={dialogue[step]}
        speed={55}
      />

      {/* Continue button */}
      {!showInput && (
        <button onClick={handleNext} style={button}>
          Continue
        </button>
      )}

      {/* Forced Yes input */}
      {showInput && (
        <input
          autoFocus
          placeholder="Type yes…"
          style={input}
          onChange={(e) => {
            if (e.target.value.toLowerCase() !== "yes") {
              e.target.value = "yes";
              alert("Nice try. You know the answer 🙂");
            } else {
              setTimeout(() => {
                router.push("/intro");
              }, 700);
            }
          }}
        />
      )}
    </div>
  );
}

/* ---------- Styles ---------- */

const wrapper = {
  background: "rgba(255, 255, 255, 0.95)",
  padding: "28px 26px",
  borderRadius: 28,
  width: 360,
  maxWidth: "90vw",
  textAlign: "center",
  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
};

const mascot = {
  width: 110,
  marginBottom: 16,
};

const button = {
  marginTop: 18,
  padding: "10px 22px",
  borderRadius: 16,
  border: "none",
  backgroundColor: "#f4a7bb",
  color: "#fff",
  fontSize: 16,
  cursor: "pointer",
};

const input = {
  marginTop: 18,
  padding: 12,
  width: "100%",
  textAlign: "center",
  borderRadius: 14,
  border: "1px solid #ccc",
  fontSize: 15,
};
