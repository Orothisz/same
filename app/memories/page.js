import { useRouter } from "next/navigation";

export default function Memories() {
  const router = useRouter();

  return (
    <main style={page}>
      <p style={text}>Some moments don’t need explanation.</p>

      <button style={ghost} onClick={() => router.push("/valentine")}>
        Continue
      </button>
    </main>
  );
}

/* ---------- styles ---------- */

const page = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const text = {
  fontSize: 22,
  marginBottom: 48,
};

const ghost = {
  background: "none",
  border: "none",
  fontSize: 13,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  opacity: 0.5,
  cursor: "pointer",
};
