import HeaderHero from "./headerhero";
import Cta1 from "./cta1";
import HeaderSection from "./headersection";
import Ctaneweffect from "./ctaneweffect";
import Ctalineseffect from "./ctalineseffect";
import Rayseffect from "./rayseffect";
import Wavylineseffect from "./wavylineseffect";
import PricingTable from "./pricingtable";
import Cta2 from "./cta2";
import FeatureList from "./featurelist";
import Footer from "./footer";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "this is a test from home page",
};

export default function HomePage() {
  return (
    <>
      <HeaderHero />
      <Cta1 />
      <HeaderSection />
      <Ctaneweffect />
      <Ctalineseffect />
      <Rayseffect />
      <Wavylineseffect />
      <PricingTable />
      <Cta2 />
      <FeatureList />
      <Footer />
    </>
  );
}
