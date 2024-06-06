import React from "react";

const EyeBrow = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-row items-center opacity-80">
      <hr className="w-16 text-primary-600"></hr>
      <p className="text-body-sm font-semibold tracking-widest text-primary-600 pl-4">
        {label}
      </p>
    </div>
  );
};

export default EyeBrow;
