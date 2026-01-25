export default function DateCounter() {
  const start = new Date("2025-10-20");
  const today = new Date();
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));

  return (
    <>
      <h1 className="text-3xl font-cinematic">
        {diff} Days Together 💖
      </h1>
      <p>Since 20 October 2025</p>
    </>
  );
}
