"use client";
import MascotDialogue from "./MascotDialogue";

export default function MapScene() {
  return (
    <div style={container}>
      {/* Soft background gradient */}
      <div style={gradient} />

      {/* Floating “islands” */}
      <div style={{ ...island, top: "20%", left: "10%" }} />
      <div style={{ ...island, top: "55%", left: "65%", transform: "scale(1.2)" }} />
      <div style={{ ...island, top: "35%", left: "40%", transform: "scale(0.8)" }} />

      {/* Center content */}
      <div style={content}>
        <MascotDialogue />
      </div>
    </div>
  );
}

const container = {
  position: "relative",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: "#f7efe5",
};

const gradient = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 30% 20%, #fde2e4, transparent 50%), radial-gradient(circle at 70% 60%, #e2ece9, transparent 55%)",
};

const island = {
  position: "absolute",
  width: 260,
  height: 180,
  background:
    "radial-gradient(ellipse at center, #cdb4db 0%, #ffc8dd 60%, transparent 70%)",
  filter: "blur(12px)",
  opacity: 0.6,
  borderRadius: "50%",
};

const content = {
  position: "relative",
  zIndex: 2,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
