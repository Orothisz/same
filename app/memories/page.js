import PhotoCard from "../../components/PhotoCard";

export default function Memories() {
  return (
    <div className="min-h-screen p-10 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#111]">
      {[...Array(6)].map((_, i) => (
        <PhotoCard key={i} index={i + 1} />
      ))}
    </div>
  );
}
