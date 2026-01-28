import Confetti from "../../components/Confetti";

export default function Valentine() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url('/images/valentine/valentine-bg.png') center/cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="/images/valentine/kneeling-body.png" width={260} />
      <img
        src="/images/valentine/sameer-face.png"
        width={90}
        style={{ marginTop: -170 }}
      />
      <h1>Will you be my Valentine?</h1>
      <Confetti />
    </div>
  );
}
