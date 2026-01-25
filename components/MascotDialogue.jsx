"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { useRouter } from "next/navigation";

const dialogue = [
  "Hi Sneha 🌸 Welcome to Sameha Land.",
  "This is a tiny world built just for you.",
  "Are you excited for what you're getting into?"
];

export default function MascotDialogue() {
  const [step, setStep] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-sm w-full"
    >
      {/* Mascot */}
      <motion.img
        src="/images/mascot/mascot-sneha-chibi.png"
        className="w-32 mx-auto mb-4"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      {/* Dialogue */}
      <TypewriterText
        text={dialogue[step]}
        onDone={() => {
          if (step === dialogue.length - 1) setShowInput(true);
        }}
      />

      {/* Continue button */}
      {!showInput && step < dialogue.length - 1 && (
        <button
          onClick={() => setStep(step + 1)}
          className="mt-6 w-full bg-pink-400 hover:bg-pink-500 text-white py-2 rounded-xl transition"
        >
          Continue
        </button>
      )}

      {/* Yes Input */}
      {showInput && (
        <input
          autoFocus
          placeholder="Type yes..."
          className="mt-6 w-full p-2 text-center rounded-lg border border-pink-300"
          onChange={(e) => {
            if (e.target.value.toLowerCase() !== "yes") {
              e.target.value = "yes";
              alert("Oops. Obviously yes 🙄");
            } else {
              setTimeout(() => {
                router.push("/intro");
              }, 800);
            }
          }}
        />
      )}
    </motion.div>
  );
}
