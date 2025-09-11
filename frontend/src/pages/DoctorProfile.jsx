import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from '../components';
import { useTranslation } from 'react-i18next';
import { FaUserMd, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaBriefcase, FaLanguage, FaArrowLeft } from 'react-icons/fa';

const DoctorProfile = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/doctors/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Hekim bulunamadı');
          }
          throw new Error('Hekim bilgileri getirilemedi');
        }
        
        const doctorData = await response.json();
        setDoctor(doctorData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDoctor();
    }
  }, [id]);

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
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/hekimlerimiz')}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Hekimlerimiz Sayfasına Dön
          </button>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">👨‍⚕️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Hekim Bulunamadı
          </h2>
          <p className="text-gray-600 mb-4">Aradığınız hekim bulunamadı.</p>
          <button
            onClick={() => navigate('/hekimlerimiz')}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Hekimlerimiz Sayfasına Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/hekimlerimiz')}
            className="flex items-center text-white hover:text-blue-200 mb-4 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Hekimlerimiz Sayfasına Dön
          </button>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-8 mb-6 md:mb-0">
              {doctor.image ? (
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center border-4 border-white shadow-lg">
                  <FaUserMd className="text-4xl text-blue-600" />
                </div>
              )}
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {doctor.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-2">
                {doctor.title}
              </p>
              <p className="text-lg text-blue-100 mb-4">
                {doctor.specialization}
              </p>
              
              {doctor.branch && (
                <div className="flex items-center justify-center md:justify-start text-blue-100">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{doctor.branch.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          
          {/* Biyografi */}
          {doctor.bio && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaUserMd className="mr-3 text-blue-600" />
                Biyografi
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {doctor.bio}
              </p>
            </div>
          )}

          {/* Eğitim */}
          {doctor.education && doctor.education.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaGraduationCap className="mr-3 text-blue-600" />
                Eğitim
              </h2>
              <ul className="space-y-3">
                {doctor.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deneyim */}
          {doctor.experience && doctor.experience.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaBriefcase className="mr-3 text-blue-600" />
                Deneyim
              </h2>
              <ul className="space-y-3">
                {doctor.experience.map((exp, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Diller */}
          {doctor.languages && doctor.languages.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaLanguage className="mr-3 text-blue-600" />
                Konuştuğu Diller
              </h2>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map((lang, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Şube Bilgileri */}
          {doctor.branch && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-600" />
                Çalıştığı Şube
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {doctor.branch.name}
                  </h3>
                </div>
                
                {doctor.branch.address && (
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mr-3 text-gray-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{doctor.branch.address}</span>
                  </div>
                )}
                
                {doctor.branch.phone && (
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-gray-500 flex-shrink-0" />
                    <a 
                      href={`tel:${doctor.branch.phone}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {doctor.branch.phone}
                    </a>
                  </div>
                )}
                
                {doctor.branch.email && (
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-gray-500 flex-shrink-0" />
                    <a 
                      href={`mailto:${doctor.branch.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {doctor.branch.email}
                    </a>
                  </div>
                )}
                
                {doctor.branch.workingHours && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Çalışma Saatleri:</span> {doctor.branch.workingHours}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Randevu Butonu */}
          <div className="text-center">
            <button
              onClick={() => navigate('/iletisim')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Randevu Al
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorProfile;

