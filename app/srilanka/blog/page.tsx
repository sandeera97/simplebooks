import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogArchive from "./BlogArchive";
import "./blog-index.css";

export const metadata: Metadata = {
  title: "Blog - Sri Lanka",
  description:
    "Explore Simplebooks guides and updates on tax, business registration, payroll, and company compliance in Sri Lanka.",
  alternates: { canonical: "https://simplebooks.com/srilanka/blog" },
};

export default function BlogPage() {
  return (
    <div className="blog-index-page">
      <Header />
      <BlogArchive />
      <Footer />
    </div>
  );
}
