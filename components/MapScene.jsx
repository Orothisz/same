"use client";
import MascotDialogue from "./MascotDialogue";

export default function MapScene() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/map/world-map-ghibli.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(0,0,0,0.55))",
        }}
      />
      <MascotDialogue />
    </div>
  );
}
