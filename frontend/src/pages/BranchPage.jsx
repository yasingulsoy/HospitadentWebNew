import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../components';
import { useTranslation } from 'react-i18next';

const BranchPage = () => {
  const { branchId } = useParams();
  const { t } = useTranslation();
  const [branch, setBranch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBranch = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/branches/${branchId}`);
        
        if (!response.ok) {
          throw new Error('Şube bulunamadı');
        }
        
        const branchData = await response.json();
        setBranch(branchData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (branchId) {
      fetchBranch();
    }
  }, [branchId]);

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
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

  if (!branch) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏥</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {t('branchNotFound')}
          </h2>
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
            Hospitadent {branch.name} Şubesi
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          
          {/* Şube Bilgileri */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('branchInfo')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">{t('address')}</h3>
                <p className="text-gray-600">{branch.address}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">{t('phone')}</h3>
                <p className="text-gray-600">{branch.phone}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">{t('email')}</h3>
                <p className="text-gray-600">{branch.email}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">{t('city')}</h3>
                <p className="text-gray-600">{branch.city}, {branch.district}</p>
              </div>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          {branch.workingHours && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('workingHours')}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(branch.workingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-medium text-gray-700">
                      {t(`days.${day}`)}
                    </span>
                    <span className="text-gray-600">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hekimler */}
          {branch.doctors && branch.doctors.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {t('ourDoctors')}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branch.doctors.map((doctor) => (
                  <div key={doctor.id} className="bg-white rounded-lg p-4 shadow-sm">
                    {doctor.image && (
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {doctor.name}
                    </h3>
                    
                    <p className="text-blue-600 font-medium mb-2">
                      {doctor.title}
                    </p>
                    
                    <p className="text-gray-600 text-sm mb-3">
                      {doctor.specialization}
                    </p>
                    
                    {doctor.bio && (
                      <p className="text-gray-500 text-sm line-clamp-3">
                        {doctor.bio}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Açıklama */}
          {branch.description && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('aboutBranch')}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600">
                  {branch.description}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BranchPage; 