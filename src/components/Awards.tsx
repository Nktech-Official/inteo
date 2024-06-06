import React from "react";

import AwardItem, { AwardItemProp } from "./AwardItem";
import AwardsData from "@/data/awards.json";

const Awards = () => {
  const data: AwardItemProp[] = AwardsData;
  return (
    <div className="bg-neutral-900">
      <div className="container mx-auto">
        <div className="flex flex-row md:items-center items-start self-auto gap-5 py-6">
          <div className="flex flex-row items-center self-auto md:gap-5 gap-2">
            <p className="font-display text-display-xs italic text-white opacity-50 vertical-rl -rotate-180">
              Awards
            </p>
            <hr className="md:w-16 w-6  text-white opacity-50"></hr>
          </div>
          <div className="lg:flex lg:flex-row grid md:grid-cols-2 grid-cols-1 grow xl:gap-16  md:gap-x-10 md:gap-y-8 gap-6">
            {data.map((node, index) => (
              <AwardItem
                key={index}
                logo={node.logo}
                title={node.title}
                year={node.year}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Awards;
