import PhotoCard from "../../components/PhotoCard";

export default function Memories() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 32,
        background: "#0e0e14",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 16,
      }}
    >
      {[...Array(6)].map((_, i) => (
        <PhotoCard key={i} index={i + 1} />
      ))}
    </div>
  );
}
