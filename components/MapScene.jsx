"use client";
import MascotDialogue from "./MascotDialogue";

export default function MapScene() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/map/world-map-ghibli.png')" }}
    >
      <MascotDialogue />
    </div>
  );
}
