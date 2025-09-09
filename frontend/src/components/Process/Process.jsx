import React from "react";

const gridData = [
  { title: "Anlaşmalı Kurumlar", link: "/anlasmali-kurumlar" },
  { title: "Ödüller", link: "/awards" },
  { title: "Sosyal Sorumluluk", link: "/social-responsibility" },
  { title: "Kids Planet", link: "/kids-planet" },
];

const InfoGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-blue-50 rounded-3xl overflow-hidden">
          {gridData.map((item, i) => {
            // Sadece dış köşeleri yuvarlat
            let rounded = '';
            if (i === 0) rounded = 'md:rounded-tl-3xl';
            if (i === 1) rounded = 'md:rounded-tr-3xl';
            if (i === 2) rounded = 'md:rounded-bl-3xl';
            if (i === 3) rounded = 'md:rounded-br-3xl';
            // İç borderlar
            let border = '';
            if (i === 0 || i === 1) border += ' border-b';
            if (i === 0 || i === 2) border += ' md:border-r';
            return (
              <a
                key={i}
                href={item.link}
                className={`flex items-center justify-center aspect-[3/1] md:aspect-[16/5] min-h-[80px] sm:min-h-[120px] md:min-h-[180px] lg:min-h-[220px] bg-white font-extrabold tracking-tight text-base sm:text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] select-none transition-all duration-300 hover:scale-105 hover:shadow-lg ${rounded} ${border} border-blue-100`}
                style={{ maxHeight: 260 }}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;
