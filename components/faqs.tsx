"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { Heading } from "./heading";

const questions = [
  {
    id: 1,
    title: "How to Sign Up?",
    description:
      [
        "1. Download TAPxCard app from App Store or Play Store",
        "2. Open the app and click 'Get Started'",
        "3. Enter your email and verify it",
        "4. Complete KYC verification with required documents",
        "5. Set up your security preferences",
        "6. Your account is ready to use!"
      ].map((step, idx) => (
        <div key={idx} className="flex items-start mb-2">
          <span className="font-semibold text-secondary mr-2">{idx + 1}.</span>
          <span>{step.replace(/^\d+\.\s/, "")}</span>
        </div>
      )),
  },
  {
    id: 2,
    title: "How to Add Money",
    description: [
      "1. Log in to your TAPxCard account",
      "2. Go to 'Wallet' section",
      "3. Click on 'Add Money'",
      "4. Choose your preferred payment method",
      "5. Enter amount and confirm",
      "6. Funds will be instantly added to your wallet"
    ].map((step, idx) => (
      <div key={idx} className="flex items-start mb-2">
        <span className="font-semibold text-secondary mr-2">{idx + 1}.</span>
        <span>{step.replace(/^\d+\.\s/, "")}</span>
      </div>
    )),
  },
  {
    id: 3,
    title: "How to Buy Card",
    description: [
      "1. Access the 'Cards' section in the app",
      "2. Select 'Order New Card'",
      "3. Choose between physical or virtual card",
      "4. Review card features and fees",
      "5. Confirm your shipping address (for physical cards)",
      "6. Complete the payment and wait for confirmation"
    ].map((step, idx) => (
      <div key={idx} className="flex items-start mb-2">
        <span className="font-semibold text-secondary mr-2">{idx + 1}.</span>
        <span>{step.replace(/^\d+\.\s/, "")}</span>
      </div>
    )),
  },
  {
    id: 4,
    title: "How to Make Payments",
    description: [
      "1. Open the TAPxCard app",
      "2. Select 'Pay' from the home screen",
      "3. Choose payment method (scan QR, tap to pay, or manual entry)",
      "4. Enter or confirm payment amount",
      "5. Review transaction details",
      "6. Confirm payment with your preferred security method"
    ].map((step, idx) => (
      <div key={idx} className="flex items-start mb-2">
        <span className="font-semibold text-secondary mr-2">{idx + 1}.</span>
        <span>{step.replace(/^\d+\.\s/, "")}</span>
      </div>
    )),
  },
  {
    id: 5,
    title: "How to Use Virtual Card",
    description: [
      "1. Go to 'Virtual Cards' in the app",
      "2. Select your active virtual card",
      "3. View card details (number, CVV, expiry)",
      "4. Use these details for online purchases",
      "5. Enable/disable card for extra security",
      "6. Track all transactions in real-time"
    ].map((step, idx) => (
      <div key={idx} className="flex items-start mb-2">
        <span className="font-semibold text-secondary mr-2">{idx + 1}.</span>
        <span>{step.replace(/^\d+\.\s/, "")}</span>
      </div>
    )),
  },
  
];

export const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto pt-20 px-8">
      <Heading className="pt-4">Frequently asked questions</Heading>
      <div className="grid  gap-10 pt-20">
        {questions.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
