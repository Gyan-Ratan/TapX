import React from "react";
import Image from "next/image";

export const SkeletonThree = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Image
        src="/images/spendingLimit.png"
        alt="Spending Limit Feature"
        width={700}
        height={700}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
};
