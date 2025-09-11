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
            {t('ourDoctors')}
          </h1>
          <p className="text-lg text-gray-600 text-center mt-4">
            {t('doctorsSubtitle')}
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
                {t('noDoctors')}
              </h2>
              <p className="text-lg text-gray-500">
                {t('noDoctorsMessage')}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => navigate(`/hekimlerimiz/${doctor.id}`)}
                >
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <div className="text-6xl text-gray-400">👨‍⚕️</div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      {doctor.name}
                    </h3>
                    
                    <p className="text-blue-600 font-semibold mb-2">
                      {doctor.title}
                    </p>
                    
                    <p className="text-gray-600 text-sm mb-3">
                      {doctor.specialization}
                    </p>
                    
                    {doctor.bio && (
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                        {doctor.bio}
                      </p>
                    )}
                    
                    {doctor.branch && (
                      <div className="border-t pt-3">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">{t('branch')}:</span> {doctor.branch.name}
                        </p>
                      </div>
                    )}
                    
                    {doctor.languages && doctor.languages.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-500 mb-1">
                          <span className="font-medium">{t('languages')}:</span>
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {doctor.languages.map((lang, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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