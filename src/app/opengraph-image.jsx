import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { ImageResponse } from "next/og";
import { portfolioData } from "@/constants/portfolioData";

// Social share card (1200x630) used by LinkedIn, WhatsApp, X, Slack, etc. Generated at build time.
export const alt = `${portfolioData.personalInfo.name} — ${portfolioData.personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (weight) =>
  readFile(
    path.join(process.cwd(), `node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-${weight}-normal.woff`)
  );

export default async function OpengraphImage() {
  const { personalInfo, projects, experiences, certifications } = portfolioData;

  const [light, semibold, bold, photo] = await Promise.all([
    fontFile(300),
    fontFile(600),
    fontFile(700),
    // Same 4:5 portrait as the hero; Satori can't decode WebP, so hand it a PNG
    sharp(path.join(process.cwd(), "src/assets/usama_portrait.webp"))
      .resize(768, 960, { fit: "cover", position: "top" })
      .png()
      .toBuffer(),
  ]);

  const stats = [
    [projects.length, "Projects"],
    [experiences.length, "Roles"],
    [certifications.length, "Certifications"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(circle at 85% 20%, #2A1B5C 0%, #120D26 45%, #0A0A12 100%)",
          fontFamily: "Plus Jakarta Sans",
          color: "#E2E0F0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 660 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(139, 92, 246, 0.45)",
              background: "rgba(21, 19, 40, 0.9)",
              color: "#C4B5FD",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#C4B5FD" }} />
            {personalInfo.title}
          </div>

          <div style={{ display: "flex", marginTop: 34, fontSize: 84, fontWeight: 700, color: "#FFFFFF", letterSpacing: -2, lineHeight: 1 }}>
            {personalInfo.name}
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 26, fontSize: 36, fontWeight: 300, color: "#FFFFFF", lineHeight: 1.25 }}>
            <span>Building intelligent systems &amp;</span>
            <span style={{ fontWeight: 600 }}>modern full-stack products.</span>
          </div>

          <div style={{ display: "flex", gap: 48, marginTop: 46, paddingTop: 28, borderTop: "1px solid rgba(139, 92, 246, 0.3)" }}>
            {stats.map(([value, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 40, fontWeight: 700, color: "#C4B5FD" }}>{value}</span>
                <span style={{ fontSize: 20, color: "#9E98B8" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: 3,
            borderRadius: 34,
            background: "linear-gradient(160deg, #C4B5FD 0%, #8B5CF6 35%, rgba(139, 92, 246, 0.2) 70%, rgba(139, 92, 246, 0.45) 100%)",
            boxShadow: "0 30px 80px -20px rgba(139, 92, 246, 0.6)",
          }}
        >
          <img
            src={`data:image/png;base64,${photo.toString("base64")}`}
            width={384}
            height={480}
            style={{ borderRadius: 31, objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: light, weight: 300, style: "normal" },
        { name: "Plus Jakarta Sans", data: semibold, weight: 600, style: "normal" },
        { name: "Plus Jakarta Sans", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
