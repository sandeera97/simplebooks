import type { Metadata } from "next";
import { preconnect } from "react-dom";
import { notFound } from "next/navigation";
import "@/app/home-v2.css";
import HeaderV2 from "@/components/v2/HeaderV2";
import Reveal from "@/components/v2/Reveal";
import { FooterV2 } from "@/components/v2/Sections";
import CalculatorFrame from "@/components/v2/CalculatorFrame";
import { CALCULATORS, calculatorBySlug } from "@/lib/calculators";
import { pageMetadata } from "@/lib/seo";

/**
 * One calculator: the site header, then the tools team's calculator app in a
 * frame that fills the rest of the screen, exactly as their own hub at
 * calculators.simplebooks.com shows it. See lib/calculators.ts.
 */

/* Only the calculators in lib/calculators.ts; any other slug is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return CALCULATORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`/calculators/${slug}`);
}

export default async function CalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calculator = calculatorBySlug(slug);
  if (!calculator) notFound();

  /* Their hub does the same: start connecting to the app before the frame asks. */
  preconnect(new URL(calculator.app).origin);

  return (
    <div className="sim_bk_v2">
      <div className="v2_calc_screen">
        <HeaderV2 />
        {/* Same target as PageShell's <main>, for the header's "Skip to content" link. */}
        <main className="v2_calc_main" id="main" tabIndex={-1}>
          <h1 className="v2_sr_only">{calculator.title}</h1>
          <CalculatorFrame src={calculator.app} title={calculator.title} />
        </main>
      </div>
      <FooterV2 />
      <Reveal />
    </div>
  );
}
