"use client";
import MascotDialogue from "./MascotDialogue";

export default function MapScene() {
  return (
    <div style={page}>
      {/* Background */}
      <div style={sky} />

      {/* Map layer */}
      <div style={map}>
        <Land x="15%" y="30%" size={280} />
        <Land x="60%" y="55%" size={320} />
        <Land x="38%" y="40%" size={220} />
      </div>

      {/* Dialogue */}
      <div style={focus}>
        <MascotDialogue />
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Land({ x, y, size }) {
  return (
    <div
      style={{
        ...land,
        left: x,
        top: y,
        width: size,
        height: size * 0.65,
      }}
    />
  );
}

/* ---------- Styles ---------- */

const page = {
  position: "relative",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: "#f7efe5",
};

const sky = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to bottom, #fef6e4 0%, #f3d2c1 100%)",
};

const map = {
  position: "absolute",
  inset: 0,
};

const land = {
  position: "absolute",
  background:
    "radial-gradient(ellipse at center, #cdb4db 0%, #ffc8dd 55%, #ffd6a5 75%)",
  borderRadius: "50%",
  filter: "blur(10px)",
  opacity: 0.75,
};

const focus = {
  position: "relative",
  zIndex: 2,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
