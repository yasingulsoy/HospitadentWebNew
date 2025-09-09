import React from "react";

const ProcessItems = ({ item: { img, title, desc } }) => {
  return (
    <div className="bg-primary py-5 px-2 rounded text-center shadow-lg">
      <img
        src={img}
        className="max-h-[250px] max-w-[250px] mb-3 mx-auto"
        alt={title}
      />
      <h3 className="text-xl font-bold leading-10 text-white py-2 font-[Montserrat] capitalize">
        {title}
      </h3>
      <p className="leading-8 text-white">{desc}</p>
    </div>
  );
};

export default ProcessItems;
