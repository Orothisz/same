"use client";
import MascotDialogue from "./MascotDialogue";

export default function MapScene() {
  return (
    <div className="scene">
      {/* Ambient background layers */}
      <div className="bg bg-a" />
      <div className="bg bg-b" />

      {/* Floating light orbs */}
      <Orb top="18%" left="12%" size={260} delay="0s" />
      <Orb top="65%" left="72%" size={320} delay="2s" />
      <Orb top="38%" left="46%" size={220} delay="4s" />

      {/* Soft vignette */}
      <div className="vignette" />

      {/* Center content */}
      <div className="center">
        <MascotDialogue />
      </div>

      {/* Grain overlay */}
      <div className="grain" />

      <style jsx>{`
        .scene {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #f6efe8;
        }

        /* background gradients */
        .bg {
          position: absolute;
          inset: 0;
          background-size: 300% 300%;
          animation: drift 22s ease infinite;
        }

        .bg-a {
          background-image: radial-gradient(
              circle at 20% 30%,
              rgba(255, 204, 220, 0.45),
              transparent 55%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(190, 210, 255, 0.35),
              transparent 60%
            );
        }

        .bg-b {
          background-image: linear-gradient(
            120deg,
            #fdfbfb,
            #f7efe7,
            #f1e3f3
          );
          opacity: 0.8;
          animation-direction: reverse;
        }

        @keyframes drift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* center */
        .center {
          position: relative;
          z-index: 3;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
        }

        /* vignette */
        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0) 55%,
            rgba(0, 0, 0, 0.08) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* film grain */
        .grain {
          position: absolute;
          inset: 0;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.18;
          z-index: 4;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

/* ---------- ORB COMPONENT ---------- */

function Orb({ top, left, size, delay }) {
  return (
    <>
      <div
        className="orb"
        style={{
          top,
          left,
          width: size,
          height: size,
          animationDelay: delay,
        }}
      />

      <style jsx>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0)
          );
          filter: blur(28px);
          opacity: 0.6;
          animation: float 14s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes float {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translateY(-28px) scale(1.08);
            opacity: 0.75;
          }
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.55;
          }
        }
      `}</style>
    </>
  );
}
