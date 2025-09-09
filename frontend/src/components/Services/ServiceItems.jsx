import React from "react";

const ServiceItems = ({item:{title,desc}}) => {
  return (
    <div className="text-center bg-white p-4 md:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-full w-full flex flex-col justify-center items-center aspect-[3/2] md:aspect-[4/2] transform hover:scale-105">
      <h3 className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] drop-shadow-lg tracking-tight uppercase transition-all duration-300 text-center">
        {title}
      </h3>
      <p className="leading-5 md:leading-7 text-[#0f4f78] text-xs md:text-base min-h-[40px] md:min-h-[56px] mt-2 md:mt-4 text-center">
        {desc}
      </p>
    </div>
  );
};

export default ServiceItems;
