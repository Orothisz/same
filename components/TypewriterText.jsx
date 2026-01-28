"use client";
import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  speed = 55,
  onDone,
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (shown.length < text.length) {
      const t = setTimeout(() => {
        setShown(text.slice(0, shown.length + 1));
      }, speed);
      return () => clearTimeout(t);
    }
  }, [shown, text, speed]);

  useEffect(() => {
    if (shown.length === text.length && onDone) {
      const pause = setTimeout(onDone, 600); // pause AFTER typing
      return () => clearTimeout(pause);
    }
  }, [shown, text, onDone]);

  return (
    <p
      style={{
        fontSize: 20,
        lineHeight: 1.6,
        minHeight: 56, // prevents jump
      }}
    >
      {shown}
    </p>
  );
}
