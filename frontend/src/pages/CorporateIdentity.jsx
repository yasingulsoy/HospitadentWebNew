import React, { useEffect } from 'react';
import { Footer } from '../components';
import kurumsalKimlikPDF from '../assets/documents/hospitadent-kurumsal-kimlik.pdf';

const CorporateIdentity = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
            Kurumsal Kimlik
          </h1>
          <p className="text-lg text-gray-600 text-center mt-6 max-w-3xl mx-auto">
            Hospitadent'in resmi marka kılavuzu ve kurumsal kimlik standartları
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 pb-32">
        <div className="max-w-6xl mx-auto">
          
          {/* PDF Görüntüleyici */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Hospitadent Kurumsal Kimlik Kılavuzu
              </h2>
              <p className="text-blue-100">
                Marka standartları, logo kullanımı, renk paleti ve tasarım kuralları
              </p>
            </div>
            
            {/* PDF Viewer */}
            <div className="h-[600px] md:h-[800px]">
              <iframe
                src={`${kurumsalKimlikPDF}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title="Hospitadent Kurumsal Kimlik Kılavuzu"
              />
            </div>
          </div>

          {/* İndirme ve Bilgi Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* İndirme Kartı */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <div className="text-5xl mb-4">📄</div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-4">
                  PDF İndir
                </h3>
                <p className="text-gray-600 mb-6">
                  Kurumsal kimlik kılavuzunu bilgisayarınıza indirin
                </p>
                <a
                  href={kurumsalKimlikPDF}
                  download="hospitadent-kurumsal-kimlik.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF İndir
                </a>
              </div>
            </div>

            {/* Bilgi Kartı */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-4">
                  Kurumsal Kimlik
                </h3>
                <p className="text-gray-600 mb-6">
                  Marka tutarlılığı ve profesyonel görünüm için kurumsal kimlik standartları
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#0f4f78] rounded-full mr-3"></div>
                    Logo kullanım kuralları
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#2bb3ea] rounded-full mr-3"></div>
                    Renk paleti standartları
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#0f4f78] rounded-full mr-3"></div>
                    Tipografi kuralları
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#2bb3ea] rounded-full mr-3"></div>
                    Tasarım uygulamaları
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Bilgisi */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Kurumsal kimlik hakkında detaylı bilgi için
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:4449922" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                📞 444 99 22
              </a>
              <a 
                href="mailto:info@hospitadent.com" 
                className="inline-flex items-center px-6 py-3 border-2 border-[#0f4f78] text-[#0f4f78] font-semibold rounded-full hover:bg-[#0f4f78] hover:text-white transition-all duration-300"
              >
                ✉️ info@hospitadent.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CorporateIdentity; 