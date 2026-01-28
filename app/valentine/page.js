export default function Valentine() {
  return (
    <main style={page}>
      <h1 style={title}>Will you be my Valentine?</h1>
      <p style={sub}>There was never another ending.</p>
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

const title = {
  fontSize: 38,
  marginBottom: 18,
};

const sub = {
  opacity: 0.6,
};
