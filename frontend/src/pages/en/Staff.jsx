import React, { useEffect } from 'react';
import { Footer } from '../../components';
import { useTranslation } from 'react-i18next';

const Staff = () => {
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f4f78]">
            {t('staff.title')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Ahmet SELVİ */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/1-dis-hekimi-ahmet-selvi.png" 
                    alt={t('staff.ahmet_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.ahmet_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.ahmet_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.ahmet_title')}
                </p>
              </div>
            </div>

            {/* Card 2 - Recep EŞKAR */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/2-recep-eskar.png" 
                    alt={t('staff.recep_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.recep_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.recep_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.recep_title')}
                </p>
              </div>
            </div>

            {/* Card 3 - Halit Burak ALTINKAYA */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/3-halit-burak-altinkaya.png" 
                    alt={t('staff.halit_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.halit_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.halit_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.halit_title')}
                </p>
              </div>
            </div>

            {/* Card 4 - Abdullah DEMİRCAN */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/IDARI-ERKEK.png" 
                    alt={t('staff.abdullah_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.abdullah_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.abdullah_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.abdullah_title')}
                </p>
              </div>
            </div>

            {/* Card 5 - Caner ÇOBAN */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/caner-coban.png" 
                    alt={t('staff.caner_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.caner_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.caner_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.caner_title')}
                </p>
              </div>
            </div>

            {/* Card 6 - Bayram SAYMAN */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/bayram-sayman.png" 
                    alt={t('staff.bayram_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.bayram_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.bayram_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.bayram_title')}
                </p>
              </div>
            </div>

            {/* Card 7 - Zeynep Aydın SOYDANER */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/IDARI-KADIN.png" 
                    alt={t('staff.zeynep_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.zeynep_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.zeynep_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.zeynep_title')}
                </p>
              </div>
            </div>

            {/* Card 8 - Neslihan DEMİR */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/neslihan-demir.png" 
                    alt={t('staff.neslihan_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.neslihan_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.neslihan_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.neslihan_title')}
                </p>
              </div>
            </div>

            {/* Card 9 - Tuğba KAVALCI */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/IDARI-KADIN.png" 
                    alt={t('staff.tugba_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.tugba_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.tugba_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.tugba_title')}
                </p>
              </div>
            </div>

            {/* Card 10 - Veysel YILMAZ */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/IDARI-ERKEK.png" 
                    alt={t('staff.veysel_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.veysel_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.veysel_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.veysel_title')}
                </p>
              </div>
            </div>

            {/* Card 11 - Ercüment MERT */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/ercument-mert.png" 
                    alt={t('staff.ercument_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.ercument_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.ercument_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.ercument_title')}
                </p>
              </div>
            </div>

            {/* Card 12 - Nurşah IŞIK */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/IDARI-KADIN.png" 
                    alt={t('staff.nursah_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.nursah_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.nursah_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.nursah_title')}
                </p>
              </div>
            </div>

            {/* Card 13 - Kadriye SOYSAL */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/kadriye-soysal.png" 
                    alt={t('staff.kadriye_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.kadriye_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.kadriye_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.kadriye_title')}
                </p>
              </div>
            </div>

            {/* Card 14 - Sena KELEŞ */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/sena-keles.png" 
                    alt={t('staff.sena_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.sena_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.sena_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.sena_title')}
                </p>
              </div>
            </div>

            {/* Card 15 - Berra Sinanoğlu GÖRGÜLÜ */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/berra-gorgulu.png" 
                    alt={t('staff.berra_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.berra_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.berra_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.berra_title')}
                </p>
              </div>
            </div>

            {/* Card 16 - Selin HOŞCEYLAN */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/selin-hosceylan.png" 
                    alt={t('staff.selin_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.selin_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.selin_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.selin_title')}
                </p>
              </div>
            </div>

            {/* Card 17 - İclal HARMANCI */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/iclal-harmanci.png" 
                    alt={t('staff.iclal_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.iclal_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.iclal_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.iclal_title')}
                </p>
              </div>
            </div>

            {/* Card 18 - Mehmet Ziya KÖK */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/mehmet-ziya-kok.png" 
                    alt={t('staff.mehmet_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.mehmet_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.mehmet_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.mehmet_title')}
                </p>
              </div>
            </div>

            {/* Card 19 - Müslüm YENİKAN */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/IDARI-ERKEK.png" 
                    alt={t('staff.muslum_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.muslum_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.muslum_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.muslum_title')}
                </p>
              </div>
            </div>

            {/* Card 20 - Gaye MERCAN */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/gaye-mercan.png" 
                    alt={t('staff.gaye_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.gaye_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.gaye_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.gaye_title')}
                </p>
              </div>
            </div>

            {/* Card 21 - İbrahim YÜCEL */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/assets/idari_kadro/IDARI-ERKEK.png" 
                    alt={t('staff.ibrahim_name')} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-500 text-sm">
                    {t('staff.ibrahim_name')}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4f78] mb-3">
                  {t('staff.ibrahim_name')}
                </h3>
                <p className="text-sm text-[#0f4f78] font-semibold bg-gray-100 px-4 py-2 rounded-full">
                  {t('staff.ibrahim_title')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Staff; 