import { letterText } from "../data/letterText";

export default function ScrollLetter() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "#f6f1e9",
        color: "#000",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "auto",
          background: "#fff",
          padding: 32,
          borderRadius: 20,
        }}
      >
        <p style={{ whiteSpace: "pre-line", fontSize: 18 }}>{letterText}</p>
      </div>
    </div>
  );
}
