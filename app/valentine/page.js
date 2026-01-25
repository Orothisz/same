import Confetti from "@/components/Confetti";

export default function Valentine() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center">
      <img src="/images/valentine/kneeling-body.png" className="w-64" />
      <img src="/images/valentine/sameer-face.png" className="w-24 -mt-52" />
      <h1 className="text-4xl mt-6 font-cinematic">
        Will you be my Valentine?
      </h1>
      <Confetti />
    </div>
  );
}
