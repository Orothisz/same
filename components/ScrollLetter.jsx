import { letterText } from "../data/letterText";

export default function ScrollLetter() {
  return (
    <div className="min-h-screen p-10 bg-[#f6f1e9] text-black">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <p className="font-handwritten text-xl whitespace-pre-line">
          {letterText}
        </p>
      </div>
    </div>
  );
}
