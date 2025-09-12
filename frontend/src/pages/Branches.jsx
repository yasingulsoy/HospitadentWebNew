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
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/branches`);
        
        if (!response.ok) {
          throw new Error('Şubeler yüklenirken hata oluştu');
        }

        const data = await response.json();
        
        // Şubeleri şehirlere göre grupla
        const groupedBranches = data.reduce((acc, branch) => {
          let city = 'Diğer Şehirler';
          
          // İstanbul şubeleri
          if (['mecidiyekoy', 'bagcilar', 'bakirkoy', 'fatih', 'camlica', 'pendik', 'serifali', 'cevizlibag', 'gokturk'].includes(branch.slug)) {
            city = 'İstanbul';
          }
          // Yurtdışı şubeleri
          else if (['almanya', 'hollanda'].includes(branch.slug)) {
            city = 'Yurtdışı';
          }
          
          if (!acc[city]) {
            acc[city] = [];
          }
          acc[city].push(branch);
          return acc;
        }, {});

        // Array'e çevir
        const branchesArray = Object.entries(groupedBranches).map(([city, cityBranches]) => ({
          city,
          branches: cityBranches
        }));

        setBranches(branchesArray);
      } catch (err) {
        console.error('Şubeler yükleme hatası:', err);
        setError('Şubeler yüklenirken hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0f4f78] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Şubeler yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hata</h1>
          <p className="text-lg text-gray-600 mb-8">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#0f4f78] text-white px-6 py-3 rounded-lg hover:bg-[#2bb3ea] transition-colors"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

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
                    image={branch.image ? `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}${branch.image}` : (branchImages[branch.name] || defaultImage)}
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