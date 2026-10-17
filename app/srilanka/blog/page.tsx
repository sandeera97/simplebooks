import type { Metadata } from "next";
import HeaderV2 from "@/components/v2/HeaderV2";
import Reveal from "@/components/v2/Reveal";
import { FooterV2 } from "@/components/v2/Sections";
import BlogArchive from "./BlogArchive";
import { LEGACY_POSTS, type ArchivePost } from "./posts";
import { getArticles, articleToArchivePost } from "@/lib/cms";
import "@/app/home-v2.css";
import "./blog-index.css";

export const metadata: Metadata = {
  title: "Blog - Sri Lanka",
  description:
    "Explore Simplebooks guides and updates on tax, business registration, payroll, and company compliance in Sri Lanka.",
  alternates: { canonical: "https://simplebooks.com/srilanka/blog" },
};

/* CMS posts are fetched per request (cached 60s in lib/cms.ts) so a newly
   published article appears without a redeploy. */
export const revalidate = 60;

export default async function BlogPage() {
  const fromCms = (await getArticles()).map(articleToArchivePost);

  /* The two originals keep their hand-built pages, so they are appended rather
     than replaced. CMS posts lead, newest first. */
  const posts: ArchivePost[] = [...fromCms, ...LEGACY_POSTS];

  return (
    /* BlogArchive renders its own <main>, so this wraps it directly instead of
       going through PageShell (which would nest a second <main>). */
    <div className="sim_bk_v2 blog-index-page">
      <HeaderV2 />
      <BlogArchive posts={posts} />
      <FooterV2 />
      <Reveal />
    </div>
  );
}
