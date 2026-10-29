import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import HeaderV2 from "@/components/v2/HeaderV2";
import Reveal from "@/components/v2/Reveal";
import { FooterV2 } from "@/components/v2/Sections";
import BlogArchive from "./BlogArchive";
import { LEGACY_POSTS, type ArchivePost } from "./posts";
import { getArticles, articleToArchivePost } from "@/lib/cms";
import { getPostIndex } from "@/lib/blogPosts";
import "@/app/home-v2.css";
import "./blog-index.css";

export const metadata: Metadata = pageMetadata("/srilanka/blog");

/* CMS posts are fetched per request (cached 60s in lib/cms.ts) so a newly
   published article appears without a redeploy. */
export const revalidate = 60;

export default async function BlogPage() {
  const fromCms = (await getArticles()).map(articleToArchivePost);

  /* The 93 posts brought across from the live WordPress site. They keep their
     live URLs, which is why the href is /srilanka/<route> and not /blog/. */
  const migrated: ArchivePost[] = getPostIndex().map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    href: `/srilanka/${post.route}`,
    image: post.image ?? undefined,
    category: post.category,
    date: post.date,
  }));

  /* Three sources, one list. Anything without a date is a CMS post, which is
     newer than the archive by definition, so it sorts to the top. */
  /* Annotated before sorting, otherwise the comparator sees the union of three
     element types rather than ArchivePost. Anything without a date is a CMS
     post, which is newer than the archive by definition, so it sorts first. */
  const all: ArchivePost[] = [...fromCms, ...migrated, ...LEGACY_POSTS];
  const posts = all.sort((a, b) => (b.date ?? "9999").localeCompare(a.date ?? "9999"));

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
