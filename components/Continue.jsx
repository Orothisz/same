"use client";
import { useRouter } from "next/navigation";

export default function Continue({ to, label = "Continue" }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to)}
      style={{
        marginTop: 48,
        padding: "10px 22px",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,0.15)",
        background: "transparent",
        fontSize: 14,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
