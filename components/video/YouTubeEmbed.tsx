"use client";

import { useState } from "react";

/* Lazy YouTube embed ("facade" pattern): renders the poster image + play button
   and only loads the real YouTube iframe after a click. Keeps page weight —
   and PageSpeed — unaffected by videos that most visitors never play. */
export default function YouTubeEmbed({
  id,
  title,
  caption,
  style,
}: {
  id: string;
  title: string;
  caption?: string;
  style?: React.CSSProperties;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: 12,
        overflow: "hidden",
        background: "#2c3245",
        ...style,
      }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            padding: 0,
            border: 0,
            cursor: "pointer",
            background: "transparent",
            display: "block",
          }}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* top title bar */}
          <span
            style={{
              position: "absolute", top: 0, left: 0, right: 0,
              padding: "16px 18px", textAlign: "left",
              fontSize: 15, fontWeight: 700, color: "#fff",
              background: "linear-gradient(180deg, rgba(20,20,45,0.72), transparent)",
            }}
          >
            {title}
          </span>
          {/* play button */}
          <span
            style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
              width: 68, height: 48, borderRadius: 12, background: "#ff0000",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            }}
          >
            <span
              style={{
                width: 0, height: 0,
                borderTop: "11px solid transparent",
                borderBottom: "11px solid transparent",
                borderLeft: "18px solid #fff",
                marginLeft: 4,
              }}
            />
          </span>
          {/* bottom caption */}
          {caption && (
            <span
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "12px 16px", textAlign: "left",
                fontSize: 13, lineHeight: 1.4, color: "#eef",
                background: "rgba(20,20,45,0.82)",
              }}
            >
              {caption}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
