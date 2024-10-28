import { Metadata } from "next";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Feature from "@/components/Features";
import Integration from "@/components/Integration";

//import Brands from "@/components/Brands";
//import About from "@/components/About";
//import FeaturesTab from "@/components/FeaturesTab";
//import FunFact from "@/components/FunFact";
//import CTA from "@/components/CTA";
//import FAQ from "@/components/FAQ";
//import Pricing from "@/components/Pricing";
//import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Katana Studio",
  description: "Your Partner in Digital Journey",
  metadataBase: new URL("https://katana.studio"),
  // other metadata
  openGraph: {
    title: "Katana Studio",
    description: "Your Partner in Digital Journey",
    type: "website",
    url: "https://katana.studio",
    images: "/assets/images/logo/logo-light.svg",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Integration />
      <Contact />
      <Blog />

      {/*<Brands />*/}
      {/*<About />*/}
      {/*<FeaturesTab />*/}
      {/*<FunFact />*/}
      {/*<CTA />*/}
      {/*<FAQ />*/}
      {/*<Testimonial />*/}
      {/*<Pricing />*/}
    </main>
  );
}
