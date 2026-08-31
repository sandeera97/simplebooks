"use client";

import { useState } from "react";
import type { Video } from "./content";

/**
 * Mirrors the live gallery: one large player at the top with a grid of
 * thumbnails below it. Nothing loads from YouTube until a thumbnail is
 * clicked — only the poster images — which keeps the page fast with 115
 * videos on it.
 */
export default function VideoGallery({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<Video>(videos[0]);
  const [playing, setPlaying] = useState(false);

  function pick(v: Video) {
    setActive(v);
    setPlaying(true);
  }

  return (
    <>
      <div className="sim_bk_vid_stage">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
            title={active.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${active.title}`}>
            <img
              src={`https://i.ytimg.com/vi/${active.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
            />
            <span className="sim_bk_vid_play" aria-hidden="true" />
          </button>
        )}
      </div>
      <p className="sim_bk_vid_stage_title">{active.title}</p>

      <ul className="sim_bk_vid_grid">
        {videos.map((v) => (
          <li key={v.id}>
            <button
              type="button"
              onClick={() => pick(v)}
              className={v.id === active.id ? "is_active" : undefined}
            >
              <span className="sim_bk_vid_thumb">
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                  alt=""
                  loading="lazy"
                />
                <span className="sim_bk_vid_play sim_bk_vid_play_sm" aria-hidden="true" />
              </span>
              <span className="sim_bk_vid_title">{v.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
