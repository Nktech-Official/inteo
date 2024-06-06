import Image from "next/image";
import React from "react";

export interface AwardItemProp {
  logo: string;
  title: string;
  year: string;
}
const AwardItem: React.FC<AwardItemProp> = ({ logo, title, year }) => {
  return (
    <div className="flex flex-row gap-3 items-center grow">
      <Image src={logo} width={80} height={80} alt={title} />
      <div className="flex flex-col">
        <p className="text-body-sm font-normal text-neutral-300">{title}</p>
        <p className="text-body-sm font-normal text-neutral-300">{year}</p>
      </div>
    </div>
  );
};

export default AwardItem;
