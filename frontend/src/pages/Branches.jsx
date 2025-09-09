import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// Şube görselleri eşleşmesi
const branchImages = {
  'Mecidiyeköy': '/assets/sube_resimleri/mecidiyekoy.png',
  'Bağcılar': '/assets/sube_resimleri/bagcilar.png',
  'Bakırköy': '/assets/sube_resimleri/bakirkoy.png',
  'Fatih': '/assets/sube_resimleri/fatih.png',
  'Çamlıca': '/assets/sube_resimleri/camlica.png',
  'Pendik': '/assets/sube_resimleri/pendik.png',
  'Şerifali': '/assets/sube_resimleri/serifali.png',
  'Cevizlibağ': '/assets/sube_resimleri/cevizlibag.png',
  'Göktürk': '/assets/sube_resimleri/gokturk.webp',
  'Kayseri': '/assets/sube_resimleri/kayseri.png',
  'Bodrum': '/assets/sube_resimleri/bodrum.png',
  'Alanya': '/assets/sube_resimleri/alanya.png',
  'Antalya': '/assets/sube_resimleri/antalya.png',
  'Ankara': '/assets/sube_resimleri/cayyolu.png',
  'Denizli': '/assets/sube_resimleri/kocaeli.jpg', // varsayılan/resim yoksa başka bir görsel
  'Kocaeli': '/assets/sube_resimleri/kocaeli.jpg',
  'Bursa': '/assets/sube_resimleri/nilufer.webp',
  'Almanya': '/assets/sube_resimleri/frankfurt.webp',
  'Hollanda': '/assets/sube_resimleri/deen-hag.png',
};
const defaultImage = '/assets/sube_resimleri/bagcilar.png';

const BranchCard = ({ branch, image }) => {
  const [flipped, setFlipped] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setFlipped(true), 500); // 0.5 saniye sonra dönsün
  };
  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setFlipped(false);
  };

  const phoneNumber = '4449922'; // Anasayfadaki telefon numarası
  const mapUrl = branch.mapUrl;

  return (
    <div
      className="perspective"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative w-full h-56 transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Ön Yüz */}
        <Link
          to={`/subelerimiz/${branch.slug}`}
          className="block bg-gradient-to-br from-[#0f4f78] to-[#2bb3ea] rounded-3xl shadow-xl p-6 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
          style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}
        >
          <div className="relative w-full flex items-center justify-center h-full" style={{ minHeight: '160px' }}>
            <img
              src={image}
              alt={`${branch.name} şubesi görseli`}
              className="w-full max-h-48 object-contain transition-all duration-300 opacity-10 group-hover:opacity-100"
              loading="lazy"
              decoding="async"
              width="320"
              height="180"
              onError={e => { e.target.src = defaultImage; }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg text-center leading-tight transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 select-none">
                {branch.name}
              </span>
            </div>
          </div>
        </Link>
        {/* Arka Yüz */}
        <div
          className="absolute inset-0 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center gap-6 [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-row items-center justify-center gap-8">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex flex-col items-center group"
            >
              <FaMapMarkerAlt className="text-4xl text-[#0f4f78] mb-2 group-hover:text-[#2bb3ea] transition-colors" />
              <span className="text-sm font-semibold text-[#0f4f78]">Konum</span>
            </a>
            <a
              href={`tel:${phoneNumber}`}
              onClick={e => e.stopPropagation()}
              className="flex flex-col items-center group"
            >
              <FaPhone className="text-4xl text-[#0f4f78] mb-2 group-hover:text-[#2bb3ea] transition-colors" />
              <span className="text-sm font-semibold text-[#0f4f78]">Telefon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Branches = () => {
  // Şube verileri
  const branches = [
    {
      city: 'İstanbul',
      branches: [
        { name: 'Mecidiyeköy', slug: 'mecidiyekoy', address: 'Mecidiyeköy Mahallesi', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Mecidiyek%C3%B6y+Di%C5%9F+Hastanesi/@41.0659603,28.9950881,17z/data=!3m1!4b1!4m5!3m4!1s0x14ab7521dea3407:0x14f4d925be85dce7!8m2!3d41.0659603!4d28.9972768?shorturl=1' },
        { name: 'Bağcılar', slug: 'bagcilar', address: 'Bağcılar Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Ba%C4%9Fc%C4%B1lar+Di%C5%9F+Hastanesi/@41.0450571,28.8281354,17z/data=!3m1!4b1!4m6!3m5!1s0x14caa5174b05851d:0x8a2ef0d5d52511d0!8m2!3d41.0450531!4d28.8307103!16s%2Fg%2F1tczmpkn?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D' },
        { name: 'Bakırköy', slug: 'bakirkoy', address: 'Bakırköy Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Bak%C4%B1rk%C3%B6y+Di%C5%9F+Hastanesi/@40.9955222,28.8671339,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb503d60594d:0x21aba3056dc48001!8m2!3d40.9955182!4d28.8697088!16s%2Fg%2F11_tb71wz?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D' },
        { name: 'Fatih', slug: 'fatih', address: 'Fatih Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Fatih+Di%C5%9F+Hastanesi/@41.0191732,28.9440271,17z/data=!3m1!4b1!4m5!3m4!1s0x14cabac32cd64d25:0xeacf065d53dc5b4b!8m2!3d41.0191732!4d28.9462158?shorturl=1' },
        { name: 'Çamlıca', slug: 'camlica', address: 'Çamlıca Mahallesi', mapUrl: 'https://www.google.com/maps/place/Hospitadent+%C3%87aml%C4%B1ca+Di%C5%9F+Hastanesi/@41.0227881,29.0717873,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac91bf232062f:0xdec1183a9c72a92d!8m2!3d41.0227841!4d29.0743622!16s%2Fg%2F11fst1lh55?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D' },
        { name: 'Pendik', slug: 'pendik', address: 'Pendik Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Pendik+Di%C5%9F+Hastanesi/@40.8817795,29.2350368,17z/data=!3m1!4b1!4m6!3m5!1s0x14cadd84741c798b:0x158719bd9d7985c0!8m2!3d40.8817755!4d29.2376117!16s%2Fg%2F11j32ygp9l?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D' },
        { name: 'Şerifali', slug: 'serifali', address: 'Şerifali Mahallesi', mapUrl: 'https://www.google.com/maps/place/Hospitadent+%C5%9Eerifali+Di%C5%9F+Hastanesi/@41.0021235,28.5323988,10z/data=!4m10!1m2!2m1!1sHospitadent!3m6!1s0x14cac1fce603516d:0xc0411c2d0a014a18!8m2!3d41.0021235!4d29.142141!15sCgtIb3NwaXRhZGVudCIDiAEBkgEIaG9zcGl0YWQ!16s%2Fg%2F11c5w7n2l2?entry=ttu' },
        { name: 'Cevizlibağ', slug: 'cevizlibag', address: 'Cevizlibağ Mahallesi', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Cevizliba%C4%9F+Poliklini%C4%9Fi/@41.0125325,28.907552,17z/data=!3m1!4b1!4m5!3m4!1s0x14caba3019e35db5:0x44e86294cf703bb!8m2!3d41.0125325!4d28.9097407?shorturl=1' },
        { name: 'Göktürk', slug: 'gokturk', address: 'Göktürk Mahallesi', mapUrl: 'https://www.google.com/maps/place/Hospitadent+%C5%9Eube+G%C3%B6kt%C3%BCrk/@41.0021235,28.5323988,10z/data=!4m10!1m2!2m1!1sHospitadent!3m6!1s0x14cab5bc421651b0:0x68ba43a225d122d!8m2!3d41.0021235!4d28.8769931!15sCgtIb3NwaXRhZGVudCIDiAEBkgEIaG9zcGl0YWQ!16s%2Fg%2F11c5w7n2l2?entry=ttu' },
      ]
    },
    {
      city: 'Diğer Şehirler',
      branches: [
        { name: 'Kayseri', slug: 'kayseri', address: 'Kayseri Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Kayseri+Di%C5%9F+Klinik/@38.7342685,35.4871309,17z/data=!3m1!4b1!4m5!3m4!1s0x152f1b0f0c5f3e7b:0x7bb13f1d1c9a77bb!8m2!3d38.7342685!4d35.4893196?entry=ttu' },
        { name: 'Bodrum', slug: 'bodrum', address: 'Bodrum Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Bodrum+Di%C5%9F+Klinik/@37.1026883,27.3109493,17z/data=!3m1!4b1!4m5!3m4!1s0x14bede4d5836c03:0x5bb7e7166ae713f!8m2!3d37.1026883!4d27.3131531?entry=ttu' },
        { name: 'Alanya', slug: 'alanya', address: 'Alanya Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Alanya+Di%C5%9F+Klinik/@36.543159,32.003457,17z/data=!3m1!4b1!4m5!3m4!1s0x14ddc5a7e2f1f0c5:0x7e3f3c7d9?entry=ttu' },
        { name: 'Antalya', slug: 'antalya', address: 'Antalya Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Antalya+Di%C5%9F+Klinik/@36.8814596,30.7157624,17z/data=!3m1!4b1!4m5!3m4!1s0x14c391b2e2a6ab79:0x1b1d1a9c3a7b3e7b!8m2!3d36.8814596!4d30.7179511?entry=ttu' },
        { name: 'Ankara', slug: 'ankara', address: 'Ankara Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Ankara+Di%C5%9F+Klinik/@39.925533,32.836495,17z/data=!3m1!4b1!4m5!3m4!1s0x14d34f5a8a344359:0x929dafc3fcae72f!8m2!3d39.925533!4d32.8386837?entry=ttu' },
        { name: 'Kocaeli', slug: 'kocaeli', address: 'Kocaeli Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Kocaeli+Di%C5%9F+Klinik/@40.7686802,29.9217657,17z/data=!3m1!4b1!4m5!3m4!1s0x14cad16b31c5d0b7:0x5b1c0a7d6b1a5b0b!8m2!3d40.7686802!4d29.9239544?entry=ttu' },
        { name: 'Bursa', slug: 'bursa', address: 'Bursa Merkez', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Bursa+Di%C5%9F+Klinik/@40.2167447,28.976507,17z/data=!3m1!4b1!4m5!3m4!1s0x14ca158e3a844359:0x929dafc3fcae72f!8m2!3d40.2167447!4d28.9790957?entry=ttu' },
      ]
    },
    {
      city: 'Yurtdışı',
      branches: [
        { name: 'Almanya', slug: 'almanya', address: 'Frankfurt', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Frankfurt+Main/@50.108568,8.670287,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5b75c6848100f:0x2a583b218157045!8m2!3d50.108568!4d8.672475?entry=ttu' },
        { name: 'Hollanda', slug: 'hollanda', address: 'Den Haag', mapUrl: 'https://www.google.com/maps/place/Hospitadent+Den+Haag/@52.0674547,4.2937522,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5b75c6848100f:0x2a583b218157045!8m2!3d52.0674547!4d4.2963271!16s%2Fg%2F11flfw7h46?entry=ttu' },
      ]
    }
  ];

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#004876]">
            Şubelerimiz
          </h1>
          {/* Açıklama satırı kaldırıldı */}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-6xl mx-auto">
          {branches.map((cityGroup, cityIndex) => (
            <div key={cityIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-[#004876] mb-6 text-center">
                {cityGroup.city}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityGroup.branches.map((branch, branchIndex) => (
                  <BranchCard
                    key={branchIndex}
                    branch={branch}
                    image={branchImages[branch.name] || defaultImage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Branches;

/* Ekstra CSS (global veya module):
.perspective { perspective: 1200px; }
.rotate-y-180 { transform: rotateY(180deg); }
*/ 