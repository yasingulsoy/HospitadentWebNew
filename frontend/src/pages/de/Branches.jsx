import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';

const Branches = () => {
  const { t } = useTranslation();

  const branches = [
    { id: 'mecidiyekoy', name: 'Mecidiyeköy', address: 'Mecidiyeköy Mahallesi' },
    { id: 'bagcilar', name: 'Bağcılar', address: 'Bağcılar Mahallesi' },
    { id: 'bakirkoy', name: 'Bakırköy', address: 'Bakırköy Mahallesi' },
    { id: 'fatih', name: 'Fatih', address: 'Fatih Mahallesi' },
    { id: 'camlica', name: 'Çamlıca', address: 'Çamlıca Mahallesi' },
    { id: 'pendik', name: 'Pendik', address: 'Pendik Mahallesi' },
    { id: 'serifali', name: 'Şerifali', address: 'Şerifali Mahallesi' },
    { id: 'cevizlibag', name: 'Cevizlibağ', address: 'Cevizlibağ Mahallesi' },
    { id: 'gokturk', name: 'Göktürk', address: 'Göktürk Mahallesi' },
    { id: 'kayseri', name: 'Kayseri', address: 'Kayseri Mahallesi' },
    { id: 'bodrum', name: 'Bodrum', address: 'Bodrum Mahallesi' },
    { id: 'alanya', name: 'Alanya', address: 'Alanya Mahallesi' },
    { id: 'antalya', name: 'Antalya', address: 'Antalya Mahallesi' },
    { id: 'ankara', name: 'Ankara', address: 'Ankara Mahallesi' },
    { id: 'denizli', name: 'Denizli', address: 'Denizli Mahallesi' },
    { id: 'kocaeli', name: 'Kocaeli', address: 'Kocaeli Mahallesi' },
    { id: 'bursa', name: 'Bursa', address: 'Bursa Mahallesi' },
    { id: 'almanya', name: 'Deutschland', address: 'Deutsche Niederlassung' },
    { id: 'hollanda', name: 'Niederlande', address: 'Niederländische Niederlassung' }
  ];

  return (
    <>
      <SEOHead 
        title={t('branches.title')}
        description={t('branches.description')}
        keywords={t('branches.keywords')}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#004876] mb-4">
            {t('branches.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('branches.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <div key={branch.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#004876] mb-2">
                {branch.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {branch.address}
              </p>
              <Link
                to={`/de/filialen/${branch.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                {t('branches.viewDetails')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Branches; 