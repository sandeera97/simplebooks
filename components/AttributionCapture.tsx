"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";

/**
 * Records ad parameters on arrival. Mounted once in the root layout so it runs
 * on every page, including the ones ads point at directly.
 *
 * Keyed on the pathname rather than the search params: usePathname is static,
 * while useSearchParams would opt every page in the app out of prerendering.
 * The query string is read straight off window.location instead, which is what
 * we need anyway — an ad click is always a fresh page load.
 */
export default function AttributionCapture() {
  const pathname = usePathname();

  useEffect(() => {
    captureAttribution();
  }, [pathname]);

  return null;
}
