import Link from "next/link";

export default function Intro() {
  return (
    <main className="page">
      {/* ambient gradient glow */}
      <div className="glow" />

      <section className="card">
        <span className="meta">Time, measured gently</span>

        <h1 className="title">100 Days Together</h1>

        <p className="sub">Since 20 October 2025</p>

        <Link href="/letter" className="cta">
          Enter →
        </Link>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at top, #faf5f0 0%, #f2e9df 45%, #e8dccf 100%);
          position: relative;
          overflow: hidden;
        }

        /* subtle ambient glow */
        .glow {
          position: absolute;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(255,182,193,0.35), transparent 70%);
          filter: blur(80px);
          animation: breathe 10s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.6; }
        }

        /* card */
        .card {
          background: linear-gradient(180deg, #ffffff, #f9f6f2);
          padding: 72px 64px;
          border-radius: 28px;
          box-shadow:
            0 40px 90px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(255,255,255,0.6);
          text-align: center;
          z-index: 1;
          animation: fadeUp 1.2s cubic-bezier(.25,.8,.25,1);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .meta {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          opacity: 0.55;
        }

        .title {
          font-size: clamp(36px, 5vw, 48px);
          margin: 20px 0 14px;
          font-weight: 500;
        }

        .sub {
          font-size: 16px;
          opacity: 0.65;
        }

        .cta {
          display: inline-block;
          margin-top: 56px;
          padding: 14px 42px;
          border-radius: 999px;
          background: linear-gradient(180deg, #ff9db2, #ff6f91);
          color: white;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 14px 28px rgba(255,111,145,0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(255,111,145,0.45);
        }

        .cta:active {
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
