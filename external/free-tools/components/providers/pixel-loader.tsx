"use client";

import dynamic from "next/dynamic";

const PixelProvider = dynamic(() => import("./pixel-provider"), {
  ssr: false,
});

export default function PixelLoader() {
  return <PixelProvider />;
}
