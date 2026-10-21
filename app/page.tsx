import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import "./home-v2.css";

import HeaderV2 from "@/components/v2/HeaderV2";
import Hero from "@/components/v2/Hero";
import Platform from "@/components/v2/Platform";
import Customers from "@/components/v2/Customers";
import GetStarted from "@/components/v2/GetStarted";
import Reveal from "@/components/v2/Reveal";
import {
  BankStrip,
  Stats,
  WhatWeDo,
  HowItWorks,
  WhySimplebooks,
  FaqMarquee,
  FooterV2,
} from "@/components/v2/Sections";

export const metadata: Metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <div className="sim_bk_v2">
      <HeaderV2 />
      <main>
        <Hero />
        <BankStrip />
        <Stats />
        <WhatWeDo />
        <Platform />
        <HowItWorks />
        <WhySimplebooks />
        <Customers />
        <FaqMarquee />
        <GetStarted />
      </main>
      <FooterV2 />
      <Reveal />
    </div>
  );
}
