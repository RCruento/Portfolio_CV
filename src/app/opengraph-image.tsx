import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rayan Koussa – Développeur Full-Stack Junior";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top-right URL */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            fontSize: 14,
            color: "#8a8a96",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          rayankoussa.vercel.app
        </div>

        {/* Accent bar */}
        <div style={{ width: 48, height: 3, background: "#e6432f", marginBottom: 32 }} />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f0ede8",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Rayan Koussa
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 16,
            color: "#8a8a96",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Développeur Full-Stack Junior
        </div>

        {/* Stack pills */}
        <div style={{ display: "flex", gap: 8, marginTop: 32 }}>
          {["Next.js", "React", "TypeScript", "Node.js", "Go"].map((s) => (
            <div
              key={s}
              style={{
                fontSize: 11,
                color: "#8a8a96",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 2,
                padding: "4px 10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
