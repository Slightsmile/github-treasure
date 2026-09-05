import { ImageResponse } from "next/og";
import { getStats } from "@/lib/projects";

export const runtime = "nodejs";
export const alt = "GitHub Treasures — Discover Underrated GitHub Projects & Hidden Gems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const stats = getStats();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.08), transparent 40%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            color: "#a1a1aa",
            marginBottom: 24,
            letterSpacing: -0.5,
          }}
        >
          GitHub Treasures
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 700,
            color: "#fafafa",
            textAlign: "center",
            letterSpacing: -2,
            padding: "0 80px",
            lineHeight: 1.15,
          }}
        >
          Discover Underrated GitHub Projects
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 28,
          }}
        >
          {stats.totalProjects}+ hidden open-source gems, curated
        </div>
      </div>
    ),
    { ...size }
  );
}
