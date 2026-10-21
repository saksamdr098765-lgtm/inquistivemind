import { ImageResponse } from "next/og";
import { getCourse } from "@/app/data/courses";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);

  const title = course?.title || "Inquisitive Mind Academy";
  const level = course?.level || "All Levels";
  const subtitle = course?.heroSubtitle || "Master languages and academics with expert tutors.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(251, 191, 36, 0.35) 0%, transparent 55%), radial-gradient(circle at 10% 90%, rgba(254, 240, 138, 0.45) 0%, transparent 50%)",
          color: "#0f172a",
          fontFamily: "system-ui, sans-serif",
          border: "12px solid #fef08a",
        }}
      >
        {/* Brand Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#facc15",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0f172a",
                fontSize: "24px",
                fontWeight: "900",
                boxShadow: "0 4px 12px rgba(234, 179, 8, 0.3)",
              }}
            >
              IMA
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "20px", fontWeight: "900", letterSpacing: "1px", color: "#0f172a" }}>
                INQUISITIVE MIND ACADEMY
              </span>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "3px", color: "#ca8a04" }}>
                LANGUAGE & ACADEMIC EXCELLENCE • CHANDIGARH
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "8px 22px",
              backgroundColor: "#fef08a",
              border: "1.5px solid #facc15",
              borderRadius: "999px",
              color: "#854d0e",
              fontSize: "15px",
              fontWeight: "800",
              letterSpacing: "0.5px",
            }}
          >
            {level}
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "900",
              lineHeight: 1.15,
              color: "#0f172a",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#475569",
              lineHeight: 1.4,
              maxHeight: "68px",
              overflow: "hidden",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #fef3c7",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", fontSize: "16px", color: "#334155", fontWeight: "600" }}>
            <span>✓ Certified Mentors</span>
            <span>✓ Live Interactive Batches</span>
            <span>✓ Free Trial Demo</span>
          </div>

          <div
            style={{
              padding: "12px 28px",
              backgroundColor: "#facc15",
              borderRadius: "999px",
              color: "#0f172a",
              fontSize: "15px",
              fontWeight: "800",
              boxShadow: "0 4px 14px rgba(250, 204, 21, 0.4)",
            }}
          >
            Book Free Trial Class →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
