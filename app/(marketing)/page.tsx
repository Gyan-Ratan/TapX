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
import { Icon3dCubeSphere, IconMoodConfuzedFilled, IconReceiptFilled } from "@tabler/icons-react";
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
          <IconReceiptFilled className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Choose Your Style</Heading>
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
            Uncompromising Security
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
