import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from '../components';
import { useTranslation } from 'react-i18next';
import { FaUserMd, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaCertificate, FaLanguage, FaArrowLeft } from 'react-icons/fa';

const DoctorProfile = () => {
  const { t } = useTranslation();
  const { idOrSlug } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/doctors/${idOrSlug}`);
        
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

    if (idOrSlug) {
      fetchDoctor();
    }
  }, [idOrSlug]);

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
            Hekimlerimiz
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
            Hekimlerimiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#004876] to-[#0a5e8f] text-white py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={() => navigate('/hekimlerimiz')}
            className="flex items-center text-white hover:text-blue-200 mb-6 transition-colors bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20"
          >
            <FaArrowLeft className="mr-2" />
            Hekimlerimiz
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Sol: Profil Fotoğrafı */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                {(() => {
                  const base = 'http://localhost:5000';
                  const img = doctor.image ? (doctor.image.startsWith('/uploads') ? `${base}${doctor.image}` : doctor.image) : `${base}/api/doctors/${doctor.id}/image`;
                  return (
                    <img
                      src={img}
                      alt={doctor.name}
                      className="w-48 h-48 rounded-full object-cover border-6 border-white shadow-2xl"
                      onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.replaceWith(document.createElement('div')); }}
                    />
                  );
                })()}
                {/* Online Status Indicator */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>
            
            {/* Orta: Ana Bilgiler */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {doctor.name}
                </h1>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4">
                  <p className="text-2xl lg:text-3xl text-white font-semibold">
                    {doctor.specialty?.name || 'Diş Hekimi'}
                  </p>
                </div>
              </div>
              
              {/* İletişim Bilgileri */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {doctor.phone && (
                  <div className="flex items-center justify-center lg:justify-start bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                    <FaPhone className="mr-3 text-2xl" />
                    <a 
                      href={`tel:${doctor.phone}`}
                      className="text-xl font-medium hover:text-blue-200 transition-colors"
                    >
                      {doctor.phone}
                    </a>
                  </div>
                )}
                
                {doctor.branches && doctor.branches.length > 0 && (
                  <div className="flex items-center justify-center lg:justify-start bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                    <FaMapMarkerAlt className="mr-3 text-2xl" />
                    <span className="text-xl font-medium">{doctor.branches[0].name}</span>
                  </div>
                )}
              </div>
              
              {/* Randevu Butonu */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate('/iletisim')}
                  className="bg-[#2bb3ea] hover:bg-[#0f4f78] text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all transform hover:scale-105 text-lg"
                >
                  Randevu Al
                </button>
                <button
                  onClick={() => window.open(`https://api.whatsapp.com/send?phone=905531029922`, '_blank')}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all transform hover:scale-105 text-lg flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sol Kolon - Ana Bilgiler */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Özet */}
            {doctor.summary && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-[#004876] mb-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#004876] to-[#2bb3ea] rounded-xl flex items-center justify-center mr-4">
                    <FaUserMd className="text-white text-xl" />
                  </div>
                  Özet
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {doctor.summary}
                </p>
              </div>
            )}

            {/* Biyografi */}
            {doctor.bio && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-[#004876] mb-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#004876] to-[#2bb3ea] rounded-xl flex items-center justify-center mr-4">
                    <FaUserMd className="text-white text-xl" />
                  </div>
                  Biyografi
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {doctor.bio}
                </p>
              </div>
            )}

            {/* Eğitim ve Sertifikalar - Yan Yana */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Eğitim */}
              {doctor.education && doctor.education.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h2 className="text-2xl font-bold text-[#004876] mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#004876] to-[#2bb3ea] rounded-lg flex items-center justify-center mr-3">
                      <FaGraduationCap className="text-white" />
                    </div>
                    Eğitim
                  </h2>
                  <ul className="space-y-4">
                    {doctor.education.map((edu, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-3 h-3 bg-gradient-to-r from-[#2bb3ea] to-[#004876] rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-lg leading-relaxed">{edu}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Diller - Eğitim kartının altına eklendi */}
                  {doctor.languages && doctor.languages.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h3 className="text-xl font-bold text-[#004876] mb-4 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#004876] to-[#2bb3ea] rounded-lg flex items-center justify-center mr-3">
                          <FaLanguage className="text-white text-sm" />
                        </div>
                        Konuştuğu Diller
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((lang, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-[#e6f0f6] to-[#f0f8ff] text-[#004876] rounded-full font-semibold text-base border border-[#2bb3ea]/20 hover:shadow-lg transition-all hover:scale-105"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Sertifikalar */}
              {doctor.experience && doctor.experience.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <h2 className="text-2xl font-bold text-[#004876] mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#004876] to-[#2bb3ea] rounded-lg flex items-center justify-center mr-3">
                      <FaCertificate className="text-white" />
                    </div>
                    Sertifikalar
                  </h2>
                  <ul className="space-y-4">
                    {doctor.experience.map((exp, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-3 h-3 bg-gradient-to-r from-[#2bb3ea] to-[#004876] rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 text-lg leading-relaxed">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sağ Kolon - Şube Bilgileri ve İstatistikler */}
          <div className="space-y-8">
            
            {/* Şube Bilgileri */}
            {doctor.branches && doctor.branches.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 sticky top-8">
                <h2 className="text-2xl font-bold text-[#004876] mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#004876] to-[#2bb3ea] rounded-lg flex items-center justify-center mr-3">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  Çalıştığı Şube
                </h2>
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="font-bold text-[#004876] text-xl mb-2">
                      {doctor.branches[0].name}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#2bb3ea] to-[#004876] mx-auto rounded-full"></div>
                  </div>
                  
                  {doctor.branches[0].address && (
                    <div className="flex items-start bg-gray-50 rounded-xl p-4">
                      <FaMapMarkerAlt className="mr-3 text-[#2bb3ea] mt-1 flex-shrink-0 text-lg" />
                      <span className="text-gray-700 text-lg leading-relaxed">{doctor.branches[0].address}</span>
                    </div>
                  )}
                  
                  {doctor.branches[0].phone && (
                    <div className="flex items-center bg-gray-50 rounded-xl p-4">
                      <FaPhone className="mr-3 text-[#2bb3ea] flex-shrink-0 text-lg" />
                      <a 
                        href={`tel:${doctor.branches[0].phone}`}
                        className="text-[#004876] hover:text-[#2bb3ea] transition-colors text-lg font-semibold"
                      >
                        {doctor.branches[0].phone}
                      </a>
                    </div>
                  )}
                  
                  {doctor.branches[0].email && (
                    <div className="flex items-center bg-gray-50 rounded-xl p-4">
                      <FaEnvelope className="mr-3 text-[#2bb3ea] flex-shrink-0 text-lg" />
                      <a 
                        href={`mailto:${doctor.branches[0].email}`}
                        className="text-[#004876] hover:text-[#2bb3ea] transition-colors text-lg font-semibold"
                      >
                        {doctor.branches[0].email}
                      </a>
                    </div>
                  )}
                  
                  {doctor.branches[0].workingHours && (
                    <div className="bg-gradient-to-r from-[#e6f0f6] to-[#f0f8ff] rounded-xl p-4 border border-[#2bb3ea]/20">
                      <p className="text-[#004876] font-semibold text-lg">
                        <span className="block text-sm text-gray-600 mb-1">Çalışma Saatleri</span>
                        {doctor.branches[0].workingHours}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* İstatistik Kartları */}

            {/* Hızlı İletişim */}
            <div className="bg-gradient-to-r from-[#004876] to-[#0a5e8f] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Hızlı İletişim</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/iletisim')}
                  className="w-full bg-[#2bb3ea] hover:bg-white hover:text-[#004876] text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105"
                >
                  Randevu Al
                </button>
                <button
                  onClick={() => window.open(`https://api.whatsapp.com/send?phone=905531029922`, '_blank')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorProfile;

