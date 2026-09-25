import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero } from "@/components/v2/blocks";
import VideoGallery from "./VideoGallery";
import { videoCategories } from "./content";

export const metadata: Metadata = {
  title: "Videos - Sri Lanka",
  description:
    "The Simplebooks channel — business registration, tax, payroll, company law, bookkeeping and case studies, in English and Sinhala.",
  alternates: { canonical: "https://simplebooks.com/srilanka/videos" },
};

export default function VideosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Videos"
        title="Simplebooks channel"
        lead="Business registration, tax, payroll, company law and bookkeeping — explained in English and Sinhala."
      />

      <section className="v2_sec v2_sec_pad v2_sec_pad_tight">
        <div className="v2_wrap">
          {videoCategories.map((cat) => (
            <section key={cat.name} className="sim_bk_vid_cat v2_reveal">
              <h2 className="sim_bk_vid_cat_title">{cat.name}</h2>
              <VideoGallery videos={cat.videos} />
            </section>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
