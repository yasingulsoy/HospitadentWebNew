import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components';
import { useTranslation } from 'react-i18next';

const Doctors = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Uzmanlık alanını çeviren fonksiyon
  const translateSpecialty = (specialtyName) => {
    if (!specialtyName) return '';
    
    // Özel durumlar için çeviri
    const specialtyTranslations = {
      'Başhekim / Mesul Müdür': t('doctors.specializations.chiefPhysician'),
      'Anestezi Uzmanı': t('doctors.specializations.anesthesiologist'),
      'Ağız, Diş ve Çene Cerrahisi Uzmanı': t('doctors.specializations.oralMaxillofacialSurgeon'),
      'Diş Hastalıkları ve Tedavisi Uzmanı': t('doctors.specializations.dentalDiseasesSpecialist'),
      'Diş Hekimi': t('doctors.specializations.dentist'),
      'Endodonti Uzmanı': t('doctors.specializations.endodontist'),
      'Ortodonti Uzmanı': t('doctors.specializations.orthodontist'),
      'Pedodonti Uzmanı': t('doctors.specializations.pedodontist'),
      'Periodontoloji Uzmanı': t('doctors.specializations.periodontist'),
      'Protetik Diş Tedavisi Uzmanı': t('doctors.specializations.prosthodontist'),
      'Restoratif Diş Tedavisi Uzmanı': t('doctors.specializations.restorativeSpecialist')
    };

    return specialtyTranslations[specialtyName] || specialtyName;
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/doctors');
        
        if (!response.ok) {
          throw new Error('Hekimler getirilemedi');
        }
        
        const doctorsData = await response.json();
        setDoctors(doctorsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800">
            {t('loading')}
          </h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {t('error')}
          </h2>
          <p className="text-gray-600">{error}</p>
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
            {t('doctors.title') || 'Hekimlerimiz'}
          </h1>
          <p className="text-lg text-[#4b6475] text-center mt-4">
            {t('doctors.subtitle') || 'Alanında uzman hekimlerimiz ile tanışın.'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-6xl mx-auto">
          
          {doctors.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">
                {t('doctors.noDoctors')}
              </h2>
              <p className="text-lg text-gray-500">
                {t('doctors.noDoctorsMessage')}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => navigate(`/hekimlerimiz/${doctor.slug}`)}
                >
                  {(() => {
                    const base = 'http://localhost:5000';
                    const imageSrc = doctor.image
                      ? (doctor.image.startsWith('/uploads') ? `${base}${doctor.image}` : doctor.image)
                      : `${base}/api/doctors/${doctor.id}/image`;
                    return (
                      <img
                        src={imageSrc}
                        alt={doctor.name}
                        className="w-full h-64 object-cover"
                        onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src=''; }}
                      />
                    );
                  })()}

                  <div className="p-6">
                    <h3 className="font-bold text-xl text-[#0a3a58] mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-[#4b6475] text-sm font-semibold">
                      {translateSpecialty(doctor.specialty?.name) || ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doctors; 