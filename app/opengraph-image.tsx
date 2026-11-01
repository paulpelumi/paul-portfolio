import { ImageResponse } from "next/og";

export const alt = "Pelumi Paul, Software Engineer and Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#101C2C",
          color: "#F7F9FC",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: "54px",
              height: "54px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              background: "#3978C6",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            P
          </div>
          <span style={{ fontSize: "22px", color: "#CFD9E7" }}>NIGERIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "28px", color: "#8DB9EC" }}>
            SOFTWARE ENGINEER / FULL-STACK DEVELOPER
          </div>
          <div style={{ fontSize: "68px", fontWeight: 700, lineHeight: 1.05 }}>
            Pelumi Paul
          </div>
          <div style={{ fontSize: "27px", color: "#CFD9E7" }}>
            Building intelligent digital solutions that solve real-world problems.
          </div>
        </div>
        <div style={{ width: "100%", height: "2px", background: "#3978C6" }} />
      </div>
    ),
    { ...size },
  );
}