"use client";
export default function YesNoInput() {
  return (
    <input
      placeholder="Type yes..."
      className="border p-2 rounded w-full"
      onChange={(e) => {
        if (e.target.value.toLowerCase() !== "yes") {
          e.target.value = "yes";
          alert("Oops. Obviously yes 🙄");
        }
      }}
    />
  );
}
