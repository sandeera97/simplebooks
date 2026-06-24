"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="sim_bk_chat">
      {showBubble && (
        <div className="sim_bk_chat_bubble">
          <button
            className="sim_bk_chat_close"
            onClick={() => setShowBubble(false)}
            aria-label="Close message"
          >
            ✕
          </button>
          Hello! I&apos;m from the Simplebooks team, and I&apos;m here to assist you wit...
        </div>
      )}
      <button className="sim_bk_chat_btn" aria-label="Open chat">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1v-7" />
          <path d="M21 12v-1a9 9 0 0 0-18 0v1" />
          <rect x="3" y="12" width="3" height="7" rx="1.5" />
          <rect x="18" y="12" width="3" height="7" rx="1.5" />
        </svg>
      </button>
    </div>
  );
}
