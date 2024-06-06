import React, { MouseEventHandler } from "react";
import WorkData from "@/data/works.json";

import WorkItem from "./WorkItem";
import Eyebrow from "./EyeBrow";
import Button from "./Button";

const Works = ({
  openModal,
}: {
  openModal: MouseEventHandler<HTMLButtonElement>;
}) => {
  const data = WorkData;
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Eyebrow label="RECENT WORKS" />
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                  Some of <span className="italic">our crafts</span> made with
                  love
                </h3>
              </div>
              {data.slice(0, 1).map((node, index) => (
                <WorkItem
                  key={index}
                  image={node.image}
                  title={node.title}
                  description={node.description}
                />
              ))}
              <div className="xl:flex hidden items-start">
                <Button onClick={openModal} label="CONTACT US" size="lg" />
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {data.slice(1, 3).map((node, index) => (
                <WorkItem
                  key={index}
                  image={node.image}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
          </div>
          <div className="xl:hidden flex items-start">
            <Button onClick={openModal} label="CONTACT US" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
