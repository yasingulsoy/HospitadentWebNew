import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';

const Staff = () => {
  const { t } = useTranslation();

  const staffMembers = [
    {
      id: 1,
      name: t('staff.ahmet_name'),
      title: t('staff.ahmet_title'),
      image: '/assets/idari_kadro/1-dis-hekimi-ahmet-selvi.png'
    },
    {
      id: 2,
      name: t('staff.recep_name'),
      title: t('staff.recep_title'),
      image: '/assets/idari_kadro/2-recep-eskar.png'
    },
    {
      id: 3,
      name: t('staff.halit_name'),
      title: t('staff.halit_title'),
      image: '/assets/idari_kadro/3-halit-burak-altinkaya.png'
    },
    {
      id: 4,
      name: t('staff.abdullah_name'),
      title: t('staff.abdullah_title'),
      image: '/assets/idari_kadro/IDARI-ERKEK.png'
    },
    {
      id: 5,
      name: t('staff.caner_name'),
      title: t('staff.caner_title'),
      image: '/assets/idari_kadro/caner-coban.png'
    },
    {
      id: 6,
      name: t('staff.bayram_name'),
      title: t('staff.bayram_title'),
      image: '/assets/idari_kadro/bayram-sayman.png'
    },
    {
      id: 7,
      name: t('staff.zeynep_name'),
      title: t('staff.zeynep_title'),
      image: '/assets/idari_kadro/IDARI-KADIN.png'
    },
    {
      id: 8,
      name: t('staff.neslihan_name'),
      title: t('staff.neslihan_title'),
      image: '/assets/idari_kadro/neslihan-demir.png'
    },
    {
      id: 9,
      name: t('staff.tugba_name'),
      title: t('staff.tugba_title'),
      image: '/assets/idari_kadro/IDARI-KADIN.png'
    },
    {
      id: 10,
      name: t('staff.veysel_name'),
      title: t('staff.veysel_title'),
      image: '/assets/idari_kadro/IDARI-ERKEK.png'
    },
    {
      id: 11,
      name: t('staff.ercument_name'),
      title: t('staff.ercument_title'),
      image: '/assets/idari_kadro/ercument-mert.png'
    },
    {
      id: 12,
      name: t('staff.nursah_name'),
      title: t('staff.nursah_title'),
      image: '/assets/idari_kadro/IDARI-KADIN.png'
    },
    {
      id: 13,
      name: t('staff.kadriye_name'),
      title: t('staff.kadriye_title'),
      image: '/assets/idari_kadro/kadriye-soysal.png'
    },
    {
      id: 14,
      name: t('staff.sena_name'),
      title: t('staff.sena_title'),
      image: '/assets/idari_kadro/sena-keles.png'
    },
    {
      id: 15,
      name: t('staff.berra_name'),
      title: t('staff.berra_title'),
      image: '/assets/idari_kadro/berra-gorgulu.png'
    },
    {
      id: 16,
      name: t('staff.selin_name'),
      title: t('staff.selin_title'),
      image: '/assets/idari_kadro/selin-hosceylan.png'
    },
    {
      id: 17,
      name: t('staff.iclal_name'),
      title: t('staff.iclal_title'),
      image: '/assets/idari_kadro/iclal-harmanci.png'
    },
    {
      id: 18,
      name: t('staff.mehmet_name'),
      title: t('staff.mehmet_title'),
      image: '/assets/idari_kadro/mehmet-ziya-kok.png'
    },
    {
      id: 19,
      name: t('staff.muslum_name'),
      title: t('staff.muslum_title'),
      image: '/assets/idari_kadro/IDARI-ERKEK.png'
    },
    {
      id: 20,
      name: t('staff.gaye_name'),
      title: t('staff.gaye_title'),
      image: '/assets/idari_kadro/gaye-mercan.png'
    },
    {
      id: 21,
      name: t('staff.ibrahim_name'),
      title: t('staff.ibrahim_title'),
      image: '/assets/idari_kadro/IDARI-ERKEK.png'
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('staff.title')}
        description={t('staff.description')}
        keywords={t('staff.keywords')}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#004876] mb-4">
            {t('staff.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('staff.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staffMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = '/assets/idari_kadro/IDARI-ERKEK.png';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#004876] mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Staff; 