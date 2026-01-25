export default function PhotoCard({ index }) {
  return (
    <img
      src={`/images/memories/memory-0${index}.jpg`}
      className="rounded-xl shadow-lg hover:scale-105 transition"
    />
  );
}
