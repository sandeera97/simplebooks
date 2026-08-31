import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import VideoGallery from "./VideoGallery";
import { videoCategories } from "./content";

export const metadata: Metadata = {
  title: "Videos - Sri Lanka",
  description:
    "The Simplebooks channel — business registration, tax, payroll, company law, bookkeeping and case studies, in English and Sinhala.",
};

export default function VideosPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#eef0fb", padding: "70px 0 64px" }}>
          <div className="sim_bk_container" style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: 44,
                lineHeight: 1.15,
                fontWeight: 800,
                margin: 0,
                letterSpacing: "-1px",
                color: "#14143d",
              }}
            >
              Simplebooks Channel
            </h1>
          </div>
        </section>

        <section style={{ padding: "60px 0 80px" }}>
          <div className="sim_bk_container">
            {videoCategories.map((cat) => (
              <section key={cat.name} className="sim_bk_vid_cat">
                <h2 className="sim_bk_vid_cat_title">{cat.name}</h2>
                <VideoGallery videos={cat.videos} />
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
