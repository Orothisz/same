import DateCounter from "../../components/DateCounter";

export default function Intro() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(#fde68a, #fbcfe8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#000",
      }}
    >
      <DateCounter />
    </div>
  );
}
