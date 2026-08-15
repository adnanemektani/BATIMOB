import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { PageMeta } from "@/components/page-meta";
import { Hero } from "@/components/sections/hero";
import { CompanyIntro } from "@/components/sections/intro";
import { Services } from "@/components/sections/services";
import { FeaturedProject } from "@/components/sections/featured-project";
import { WhyChooseUs } from "@/components/sections/why";
import { Stats } from "@/components/sections/stats";
import { Certifications } from "@/components/sections/certifications";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestNews } from "@/components/sections/latest-news";
import { CtaBand } from "@/components/sections/cta-band";
import { getFeaturedProject, getNews } from "@/lib/sanity";

export const metadata: Metadata = buildMetadata(translations.fr, "home");

export default async function HomePage() {
  const [featured, news] = await Promise.all([
    getFeaturedProject(),
    getNews(),
  ]);

  return (
    <>
      <PageMeta page="home" />
      <Hero />
      <CompanyIntro />
      <Services />
      <FeaturedProject project={featured} />
      <WhyChooseUs />
      <Stats />
      <Certifications />
      <Partners />
      <Testimonials />
      <LatestNews news={news} />
      <CtaBand />
    </>
  );
}