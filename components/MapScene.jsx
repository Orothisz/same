"use client";
import { motion } from "framer-motion";
import MascotDialogue from "./MascotDialogue";

export default function MapScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/map/world-map-ghibli.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40" />
      <MascotDialogue />
    </motion.div>
  );
}
