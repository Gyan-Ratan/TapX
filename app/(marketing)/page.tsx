import { AmbientColor } from "@/components/ambient-color";
import { AnimatedSvg } from "@/components/animated-svg";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";
import { Heading } from "@/components/heading";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing-grid";
import { Subheading } from "@/components/subheading";
import { Tools } from "@/components/tools";
import { Icon3dCubeSphere, IconMoodConfuzedFilled, IconCreditCard } from "@tabler/icons-react";
import { FeaturesSectionDemo } from "@/components/featuress";
import { LogosWithBlurFlip } from "@/components/brandcloud";
import { DownloadCTA } from "@/components/download-cta";
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Hero />
      <Features />
      <Tools />
      
      <div className="pb-10 sm:pb-10 pt-10 sm:pt-20">
      
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconCreditCard className="h-6 w-6 text-cyan-500" />
          {/* here i want to change the icon to  a choose your style icon like some credit card icon */}
        </FeatureIconContainer>
        <Heading className="pt-4">Choose Your <span
            className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent"
            style={{ WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >Style</span></Heading>
        <Subheading>
          Select between our virtual and physical cards to find the perfect solution for your business needs.
        </Subheading>
        <PricingGrid />
        

        <div className="mt-20">
          <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
            <Icon3dCubeSphere className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
          {/* make a Google Play and App Store CTA */}

          <Heading className="pt-4" id="security">
          <span
            className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent"
            style={{ WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >Uncompromising </span> Security
          </Heading>
          <Subheading>
            Your financial security is our top priority. TAPxCard implements multiple layers of protection to keep your assets safe.
          </Subheading>
          <FeaturesSectionDemo />
        </div>
      </div>
      <DownloadCTA />
      <FAQs />
      <LogosWithBlurFlip />
      <CTA />
    </div>
  );
}
