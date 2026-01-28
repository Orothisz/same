"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TypewriterText from "./TypewriterText";

export default function MascotDialogue() {
  const router = useRouter();

  const dialogue = [
    "Hi Sneha  Welcome to Sameha(lols) Land.",
    "Oye when u get asked a question at the end of this thing try to type something other than yes",
    "So whatsup",
    "Anyways",
    "Continue?"
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
    <div className="shell">
      <div className="card">
        <img
          src="/images/mascot/mascot-sneha-chibi.png"
          alt="Mascot"
          className="mascot"
        />

        <div className="text">
          <TypewriterText key={step} text={dialogue[step]} speed={48} />
        </div>

        {!showInput && (
          <button onClick={next} className="continue">
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
            className="input"
          />
        )}
      </div>

      <style jsx>{`
        .shell {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 1.2s ease;
        }

        .card {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(14px);
          border-radius: 28px;
          padding: 36px 34px 32px;
          width: 380px;
          max-width: 90vw;
          text-align: center;
          box-shadow:
            0 40px 80px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          animation: floatCard 6s ease-in-out infinite;
        }

        .mascot {
          width: 120px;
          margin: 0 auto 18px;
          filter: drop-shadow(0 12px 20px rgba(0,0,0,0.15));
          animation: breathe 4.5s ease-in-out infinite;
        }

        .text {
          font-size: 16px;
          line-height: 1.55;
          color: #2b2b2b;
          min-height: 78px;
          margin-bottom: 8px;
        }

        .continue {
          margin-top: 22px;
          padding: 12px 34px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #ffb3c6, #ffc2a1);
          color: white;
          font-size: 16px;
          letter-spacing: 0.02em;
          cursor: pointer;
          box-shadow: 0 16px 30px rgba(255, 160, 180, 0.45);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .continue:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 40px rgba(255, 160, 180, 0.6);
        }

        .input {
          margin-top: 18px;
          padding: 14px;
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          text-align: center;
          font-size: 15px;
          background: rgba(255, 255, 255, 0.9);
          outline: none;
          transition: border 0.25s ease, box-shadow 0.25s ease;
        }

        .input:focus {
          border-color: #ffafbd;
          box-shadow: 0 0 0 4px rgba(255, 175, 189, 0.25);
        }

        @keyframes floatCard {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes breathe {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
