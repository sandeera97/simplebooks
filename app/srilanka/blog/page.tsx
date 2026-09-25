import type { Metadata } from "next";
import HeaderV2 from "@/components/v2/HeaderV2";
import Reveal from "@/components/v2/Reveal";
import { FooterV2 } from "@/components/v2/Sections";
import BlogArchive from "./BlogArchive";
import "@/app/home-v2.css";
import "./blog-index.css";

export const metadata: Metadata = {
  title: "Blog - Sri Lanka",
  description:
    "Explore Simplebooks guides and updates on tax, business registration, payroll, and company compliance in Sri Lanka.",
  alternates: { canonical: "https://simplebooks.com/srilanka/blog" },
};

export default function BlogPage() {
  return (
    /* BlogArchive renders its own <main>, so this wraps it directly instead of
       going through PageShell (which would nest a second <main>). */
    <div className="sim_bk_v2 blog-index-page">
      <HeaderV2 />
      <BlogArchive />
      <FooterV2 />
      <Reveal />
    </div>
  );
}
