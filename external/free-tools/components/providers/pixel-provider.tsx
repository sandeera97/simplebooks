"use client";
import { useEffect } from "react";
import { initPixel } from "@/hooks/analytics";

export default function PixelProvider() {
  useEffect(() => {
    initPixel();
  }, []);
  return null;
}
