"use client";
import MascotDialogue from "./MascotDialogue";

export default function MapScene() {
  return (
    <div style={scene}>
      <div style={animatedGradient} />
      <Orb top="20%" left="15%" size={220} />
      <Orb top="60%" left="70%" size={260} />
      <Orb top="40%" left="45%" size={180} />

      <div style={center}>
        <MascotDialogue />
      </div>
    </div>
  );
}

function Orb({ top, left, size }) {
  return (
    <div
      style={{
        ...orb,
        top,
        left,
        width: size,
        height: size,
      }}
    />
  );
}

/* ---------- Styles ---------- */

const scene = {
  position: "relative",
  minHeight: "100vh",
  overflow: "hidden",
};

const animatedGradient = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(120deg, #fdfbfb, #ebedee, #fbc2eb, #a6c1ee)",
  backgroundSize: "400% 400%",
  animation: "gradientMove 18s ease infinite",
};

const orb = {
  position: "absolute",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,255,255,0))",
  filter: "blur(25px)",
  animation: "float 12s ease-in-out infinite",
};

const center = {
  position: "relative",
  zIndex: 2,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
