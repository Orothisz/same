"use client";
import { useEffect, useState } from "react";

export default function TypewriterText({ text, speed = 40, onDone }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      onDone && onDone();
    }
  }, [index, text, speed, onDone]);

  return (
    <p className="font-handwritten text-xl md:text-2xl text-center">
      {displayed}
    </p>
  );
}
