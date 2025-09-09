import React from 'react';
import { Footer } from '../components';

const images = [
  {
    file: "Dişinize göre bilgiler.. 🦷👩🏻_⚕️.jpg",
    alt: "Dişinize göre bilgiler sosyal içerik görseli"
  },
  {
    file: "‘’Ortodonti Tedavisinde Dikkat Edilmesi Gerekenler’’ 🦷.jpg",
    alt: "Ortodonti tedavisinde dikkat edilmesi gerekenler sosyal içerik görseli"
  },
  {
    file: "Süper Kahramanlara Süper Diş Bakımı!.jpg",
    alt: "Süper kahramanlara süper diş bakımı sosyal içerik görseli"
  },
  {
    file: "Neden düzenli diş muayenesi olmalıyız 🦷Düzenli muayeneleriniz için-📲 444 99 22.jpg",
    alt: "Neden düzenli diş muayenesi olmalıyız sosyal içerik görseli"
  },
  {
    file: "Dişe dokunur gerçekler!.jpg",
    alt: "Dişe dokunur gerçekler sosyal içerik görseli"
  },
  {
    file: "Lazer Diş Beyazlatma Tedavi Süreci….jpg",
    alt: "Lazer diş beyazlatma tedavi süreci sosyal içerik görseli"
  },
];

const HospitadentSosyalSorumluluk = () => {
  return (
    <>
      <div className="min-h-[60vh] py-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f4f78] mb-12">Sosyal İçeriklerimiz</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col items-center justify-center p-4 hover:shadow-2xl transition-all duration-300">
                <div className="w-full aspect-[4/5] flex items-center justify-center bg-blue-50 rounded-2xl">
                  <img
                    src={`/assets/insta/${img.file}`}
                    alt={img.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm text-[#0f4f78] font-semibold block mb-2">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HospitadentSosyalSorumluluk; 