import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components';

const Academy = () => {
  const { t } = useTranslation();
  
  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#004876] mb-4">
            {t('academy.title')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-2xl font-bold text-[#004876] mb-4">
              {t('academy.section1.title')}
            </h2>
            <p className="text-lg text-gray-500">
              Bu sayfa yakında içerik ile doldurulacak.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Academy; 