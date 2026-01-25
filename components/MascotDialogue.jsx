"use client";
import { useState } from "react";

const messages = [
  "Hi Sneha 🌸 Welcome to Sameha Land.",
  "Are you excited for what you're getting into?"
];

export default function MascotDialogue() {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-white/80 p-6 rounded-xl text-black max-w-sm">
      <img
        src="/images/mascot/mascot-sneha-chibi.png"
        className="w-32 mx-auto mb-4"
      />
      <p className="font-handwritten text-xl text-center">
        {messages[step]}
      </p>
      <button
        onClick={() => setStep((s) => Math.min(s + 1, messages.length - 1))}
        className="mt-4 w-full bg-pink-400 text-white py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
}
