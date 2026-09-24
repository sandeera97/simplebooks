import HeaderV2 from "@/components/v2/HeaderV2";
import Reveal from "@/components/v2/Reveal";
import { FooterV2 } from "@/components/v2/Sections";

/**
 * Wraps an inner page in the 2026 design: the .sim_bk_v2 scope (which carries
 * the font and tokens), the shared header and footer, and the scroll-reveal
 * observer. Pages import the stylesheet themselves so it ships as one chunk.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="sim_bk_v2">
      <HeaderV2 />
      <main>{children}</main>
      <FooterV2 />
      <Reveal />
    </div>
  );
}
