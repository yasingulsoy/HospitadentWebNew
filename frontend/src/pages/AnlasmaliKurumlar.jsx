import React, { useEffect } from 'react';
import { Footer } from '../components';

const getLogos = () => {
  // Klasördeki tüm logoları alfabetik sırayla ve dinamik logoyu en sona ekle
  const logos = [
    '10.jpg','100.jpg','101.jpg','102.jpg','103.jpg','104.jpg','105.jpg','106.jpg','107.jpg','108.jpg','109.jpg','11.jpg','110.jpg','111.jpg','112.jpg','113.jpg','114.jpg','115.jpg','116.jpg','117.jpg','118.jpg','119.jpg','12.jpg','120.jpg','121.jpg','122.jpg','123.jpg','124.jpg','125.jpg','126.jpg','127.jpg','128.jpg','129.jpg','13.jpg','130.jpg','131.jpg','132.jpg','133.jpg','134.jpg','135.jpg','136.jpg','137.jpg','138.jpg','139.jpg','14.jpg','140.jpg','143.jpg','144.jpg','145.jpg','146.jpg','147.jpg','148.jpg','149.jpg','15.jpg','150.jpg','151.jpg','152.jpg','153.jpg','154.jpg','155.jpg','156.jpg','157.jpg','158.jpg','159.jpg','16.jpg','160.jpg','161.jpg','162.jpg','163.jpg','164.jpg','165.jpg','166.jpg','167.jpg','168.jpg','169.jpg','17.jpg','170.jpg','171.jpg','172.jpg','173.jpg','175.jpg','176.jpg','177.jpg','178.jpg','18.jpg','19.jpg','2.jpg','20.jpg','200.jpg','201.jpg','202.jpg','203.jpg','204.jpg','205.jpg','206.jpg','207.jpg','208.jpg','209.jpg','21.jpg','210.jpg','211.jpg','212.jpg','213.jpg','214.jpg','215.jpg','216.jpg','218.jpg','219.jpg','22.jpg','220.jpg','221.jpg','222.jpg','223.jpg','224.jpg','225.jpg','226.jpg','227.jpg','228.jpg','229.jpg','23.jpg','230.jpg','231.jpg','232.jpg','233.jpg','234.jpg','235.jpg','236.jpg','237.jpg','238.jpg','239.jpg','24.jpg','240.jpg','241.jpg','242.jpg','243.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','3.jpg','30.jpg','31.jpg','32.jpg','33.jpg','35.jpg','36.jpg','37.jpg','39.jpg','4.jpg','41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg','5.jpg','50.jpg','51.jpg','52.jpg','53.jpg','54.jpg','55.jpg','56.jpg','57.jpg','58.jpg','59.jpg','6.jpg','60.jpg','61.jpg','62.jpg','63.jpg','64.jpg','65.jpg','66.jpg','67.jpg','68.jpg','69.jpg','7.jpg','70.jpg','71.jpg','72.jpg','73.jpg','74.jpg','75.jpg','76.jpg','77.jpg','78.jpg','79.jpg','8.jpg','80.jpg','81.jpg','82.jpg','83.jpg','85.jpg','86.jpg','87.jpg','88.jpg','89.jpg','9.jpg','90.jpg','91.jpg','92.jpg','93.jpg','94.jpg','95.jpg','96.jpg','97.jpg','98.jpg','99.jpg','cocacola.jpg','Untitled-1-1.png','ziraat.jpg'
  ].map(name => `/assets/Anlaşmalı Kurumlar/${name}`);
  // Dinamik logo en sonda
  logos.push('/assets/Anlaşmalı Kurumlar/dinamik-logo-1-jpg.webp');
  return logos;
};

const AnlasmaliKurumlar = () => {
  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  const logos = getLogos();
  // 7'li gruplara böl
  const rows = [];
  for (let i = 0; i < logos.length; i += 7) {
    rows.push(logos.slice(i, i + 7));
  }

  // Eksik veya kullanılmayan logoları tespit et (sadece geliştirme için)
  // Not: Bu kod prod'da çalışmaz, sadece geliştirme sırasında konsolda görebilirsin
  // fetch ile dosya var mı yok mu kontrolü yapılabilir, burada örnek olarak sadece yolları yazdırıyoruz
  // logos.forEach(src => fetch(src).then(r => { if (!r.ok) console.log('Eksik logo:', src) }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
            Anlaşmalı Kurumlar
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 pb-32">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 items-center justify-center">
          {logos.map((logo, idx) => (
            <img
              key={logo}
              src={logo}
              alt={`Kurum ${idx + 1}`}
              className="h-28 w-auto object-contain max-w-[220px] bg-white rounded-lg shadow-sm p-2 mx-auto"
              loading="lazy"
              onError={e => e.target.style.display = 'none'}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnlasmaliKurumlar; 