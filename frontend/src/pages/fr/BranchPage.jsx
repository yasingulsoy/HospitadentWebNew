import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';

const BranchPage = () => {
  const { branchId } = useParams();
  const { t } = useTranslation();

  const branchData = {
    mecidiyekoy: {
      name: 'Mecidiyeköy',
      address: 'Mecidiyeköy Mahallesi, İstanbul',
      phone: '+90 212 XXX XX XX',
      email: 'mecidiyekoy@hospitadent.com'
    },
    bagcilar: {
      name: 'Bağcılar',
      address: 'Bağcılar Mahallesi, İstanbul',
      phone: '+90 212 XXX XX XX',
      email: 'bagcilar@hospitadent.com'
    },
    bakirkoy: {
      name: 'Bakırköy',
      address: 'Bakırköy Mahallesi, İstanbul',
      phone: '+90 212 XXX XX XX',
      email: 'bakirkoy@hospitadent.com'
    },
    fatih: {
      name: 'Fatih',
      address: 'Fatih Mahallesi, İstanbul',
      phone: '+90 212 XXX XX XX',
      email: 'fatih@hospitadent.com'
    },
    camlica: {
      name: 'Çamlıca',
      address: 'Çamlıca Mahallesi, İstanbul',
      phone: '+90 216 XXX XX XX',
      email: 'camlica@hospitadent.com'
    },
    pendik: {
      name: 'Pendik',
      address: 'Pendik Mahallesi, İstanbul',
      phone: '+90 216 XXX XX XX',
      email: 'pendik@hospitadent.com'
    },
    serifali: {
      name: 'Şerifali',
      address: 'Şerifali Mahallesi, İstanbul',
      phone: '+90 216 XXX XX XX',
      email: 'serifali@hospitadent.com'
    },
    cevizlibag: {
      name: 'Cevizlibağ',
      address: 'Cevizlibağ Mahallesi, İstanbul',
      phone: '+90 212 XXX XX XX',
      email: 'cevizlibag@hospitadent.com'
    },
    gokturk: {
      name: 'Göktürk',
      address: 'Göktürk Mahallesi, İstanbul',
      phone: '+90 212 XXX XX XX',
      email: 'gokturk@hospitadent.com'
    },
    kayseri: {
      name: 'Kayseri',
      address: 'Kayseri Merkez',
      phone: '+90 352 XXX XX XX',
      email: 'kayseri@hospitadent.com'
    },
    bodrum: {
      name: 'Bodrum',
      address: 'Bodrum Merkez, Muğla',
      phone: '+90 252 XXX XX XX',
      email: 'bodrum@hospitadent.com'
    },
    alanya: {
      name: 'Alanya',
      address: 'Alanya Merkez, Antalya',
      phone: '+90 242 XXX XX XX',
      email: 'alanya@hospitadent.com'
    },
    antalya: {
      name: 'Antalya',
      address: 'Antalya Merkez',
      phone: '+90 242 XXX XX XX',
      email: 'antalya@hospitadent.com'
    },
    ankara: {
      name: 'Ankara',
      address: 'Ankara Merkez',
      phone: '+90 312 XXX XX XX',
      email: 'ankara@hospitadent.com'
    },
    denizli: {
      name: 'Denizli',
      address: 'Denizli Merkez',
      phone: '+90 258 XXX XX XX',
      email: 'denizli@hospitadent.com'
    },
    kocaeli: {
      name: 'Kocaeli',
      address: 'Kocaeli Merkez',
      phone: '+90 262 XXX XX XX',
      email: 'kocaeli@hospitadent.com'
    },
    bursa: {
      name: 'Bursa',
      address: 'Bursa Merkez',
      phone: '+90 224 XXX XX XX',
      email: 'bursa@hospitadent.com'
    },
    almanya: {
      name: 'Allemagne',
      address: 'Branche Allemagne',
      phone: '+49 XXX XXX XX XX',
      email: 'germany@hospitadent.com'
    },
    hollanda: {
      name: 'Pays-Bas',
      address: 'Branche Pays-Bas',
      phone: '+31 XXX XXX XX XX',
      email: 'netherlands@hospitadent.com'
    }
  };

  const branch = branchData[branchId];

  if (!branch) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#004876] mb-4">
            {t('branchPage.notFound')}
          </h1>
          <Link to="/fr/succursales" className="text-blue-600 hover:underline">
            {t('branchPage.backToBranches')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${branch.name} - ${t('branchPage.title')}`}
        description={`${t('branchPage.description')} ${branch.name}`}
        keywords={`${branch.name}, ${t('branchPage.keywords')}`}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/fr/succursales" className="text-blue-600 hover:underline">
              ← {t('branchPage.backToBranches')}
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-[#004876] mb-6">
              {branch.name} {t('branchPage.branch')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  {t('branchPage.contactInfo')}
                </h2>
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-700">{t('branchPage.address')}:</strong>
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  <div>
                    <strong className="text-gray-700">{t('branchPage.phone')}:</strong>
                    <p className="text-gray-600">{branch.phone}</p>
                  </div>
                  <div>
                    <strong className="text-gray-700">{t('branchPage.email')}:</strong>
                    <p className="text-gray-600">{branch.email}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  {t('branchPage.services')}
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• {t('branchPage.service1')}</li>
                  <li>• {t('branchPage.service2')}</li>
                  <li>• {t('branchPage.service3')}</li>
                  <li>• {t('branchPage.service4')}</li>
                  <li>• {t('branchPage.service5')}</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {t('branchPage.workingHours')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-700">{t('branchPage.weekdays')}:</strong>
                  <p className="text-gray-600">09:00 - 18:00</p>
                </div>
                <div>
                  <strong className="text-gray-700">{t('branchPage.saturday')}:</strong>
                  <p className="text-gray-600">09:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BranchPage; 