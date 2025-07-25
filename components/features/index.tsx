import React from "react";
import { GradientContainer } from "../gradient-container";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { FeatureIconContainer } from "./feature-icon-container";
import { FaGlobe, FaChartLine } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./card";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonFive } from "./skeletons/fifth";
import { SkeletonSix } from "./skeletons/sixth";
import { SkeletonSeven } from "./skeletons/seventh";

export const Features = () => {
  return (
    <GradientContainer className="">
      <Container className="py-20 max-w-5xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <FaGlobe className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Global Payment Revolution</Heading>
        <Subheading>
        Experience borderless spending with premium cards accepted worldwide
        </Subheading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 pt-10">
          <Card className="lg:col-span-2">
            <CardTitle>Supports 60+ Tokens</CardTitle>
            <CardDescription>
            Supports all the Crypto Currencies and Payment Methods Where Visa and Mastercard are Application
            </CardDescription>
            <CardSkeletonContainer>
              <SkeletonOne />
            </CardSkeletonContainer>
          </Card>
          <Card className="hidden md:block">
            <CardSkeletonContainer className="max-w-[16rem] mx-auto">
              <SkeletonTwo />
            </CardSkeletonContainer>
            <CardTitle>Analytics for Expense</CardTitle>
            <CardDescription>
            Check analytics, track and get detailed insights into your expenses.
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer>
              <SkeletonThree />
            </CardSkeletonContainer>
            <CardTitle>Set Spending Limit</CardTitle>
            <CardDescription>
            Stick to your sources with virtual card limits. Shut the fraud out and never go out of funds.
            </CardDescription>
          </Card>
          <Card className="hidden md:block">
            <CardSkeletonContainer
              showGradient={false}
              className="max-w-[16rem] mx-auto"
            >
              <SkeletonFour />
            </CardSkeletonContainer>
            <CardTitle>Easy Expense Management</CardTitle>
            <CardDescription>
            Seamlessly connect Proactiv with Zapier, Slack, and all major integration platforms for effortless expense management.
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer>
              <SkeletonFive />
            </CardSkeletonContainer>
            <CardTitle>Trusted and Secure</CardTitle>
            <CardDescription>
            Your financial security is our top priority. TAPxCard implements multiple layers of protection to keep your assets safe.
            </CardDescription>
          </Card>
          <Card className="hidden md:block">
            <CardSkeletonContainer className="max-w-[16rem] mx-auto">
              <SkeletonSix />
            </CardSkeletonContainer>
            <CardTitle>24/7 Support</CardTitle>
            <CardDescription>
            Our dedicated support team is here to help you with any questions or issues you may have.
            <a
              href="https://t.me/TapXcard_bot"
              className="text-cyan-500 underline hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded transition-colors"
              aria-label="Contact Support via Email"
            >
              Contact Support
            </a>
            </CardDescription>
          </Card>
          <Card className="lg:col-span-2">
            <CardTitle>Easy KYC, Live in 180+ Countries</CardTitle>
            <CardDescription>
            Get verified in minutes with our seamless KYC process, and start using your card in 180+ countries.
            </CardDescription>
            <CardSkeletonContainer>
              <SkeletonSeven />
            </CardSkeletonContainer>
          </Card>
          
        </div>
      </Container>
    </GradientContainer>
  );
};
