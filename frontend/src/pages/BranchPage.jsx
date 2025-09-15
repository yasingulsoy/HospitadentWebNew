import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from '../components';
import { FaMapMarkerAlt, FaPhone, FaClock, FaArrowLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BranchPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [branch, setBranch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBranch = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/branches/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('Şube bulunamadı');
          } else {
            setError('Şube bilgileri yüklenirken hata oluştu');
          }
          return;
        }

        const data = await response.json();
        setBranch(data);
      } catch (err) {
        console.error('Şube yükleme hatası:', err);
        setError('Şube bilgileri yüklenirken hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBranch();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0f4f78] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Şube bilgileri yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error || !branch) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Şube Bulunamadı</h1>
          <p className="text-lg text-gray-600 mb-8">{error || 'Aradığınız şube bulunamadı.'}</p>
          <button
            onClick={() => navigate('/subelerimiz')}
            className="bg-[#0f4f78] text-white px-6 py-3 rounded-lg hover:bg-[#2bb3ea] transition-colors"
          >
            Şubelerimize Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-16">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/subelerimiz')}
            className="flex items-center text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Şubelerimize Dön
          </button>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {branch.name} Şubesi
            </h1>
            {branch.address && (
              <p className="text-xl md:text-2xl text-gray-100 mb-8">
                {branch.address}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Branch Image */}
      {branch.image && (
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}${branch.image}`}
                alt={`${branch.name} şubesi`}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {branch.address && (
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <FaMapMarkerAlt className="text-4xl text-[#0f4f78] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Adres</h3>
                  <p className="text-gray-600">{branch.address}</p>
                  {branch.mapUrl && (
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#0f4f78] hover:text-[#2bb3ea] transition-colors"
                    >
                      Haritada Görüntüle
                    </a>
                  )}
                </div>
              )}
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <FaPhone className="text-4xl text-[#0f4f78] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Telefon</h3>
                <p className="text-gray-600">
                  {branch.phone || '444 99 22'}
                </p>
                <a
                  href={`tel:${branch.phone || '4449922'}`}
                  className="inline-block mt-3 text-[#0f4f78] hover:text-[#2bb3ea] transition-colors"
                >
                  Hemen Ara
                </a>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <FaClock className="text-4xl text-[#0f4f78] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-600">Pazartesi - Cumartesi</p>
                <p className="text-gray-600">09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      {branch.doctors && branch.doctors.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f4f78] mb-12">
                {branch.name} Şubesi Hekimlerimiz
              </h2>
              
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="pb-12"
              >
                {branch.doctors.map((doctor) => (
                  <SwiperSlide key={doctor.id}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative h-64">
                        {doctor.image ? (
                          <img
                            src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}${doctor.image}`}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#0f4f78] to-[#2bb3ea] flex items-center justify-center">
                            <span className="text-6xl text-white font-bold">
                              {doctor.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {doctor.name}
                        </h3>
                        
                        {doctor.specialty && (
                          <p className="text-[#0f4f78] font-semibold mb-3">
                            {doctor.specialty.name}
                          </p>
                        )}
                        
                        {doctor.summary && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {doctor.summary}
                          </p>
                        )}
                        
                        {doctor.phone && (
                          <a
                            href={`tel:${doctor.phone}`}
                            className="inline-flex items-center text-[#0f4f78] hover:text-[#2bb3ea] transition-colors"
                          >
                            <FaPhone className="mr-2" />
                            {doctor.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-16 bg-[#0f4f78] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Randevu Alın
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            {branch.name} şubemizde uzman hekimlerimizle randevu almak için hemen arayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${branch.phone || '4449922'}`}
              className="bg-white text-[#0f4f78] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <FaPhone className="inline mr-2" />
              {branch.phone || '444 99 22'}
            </a>
            <a
              href={branch.mapUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0f4f78] transition-colors"
            >
              <FaMapMarkerAlt className="inline mr-2" />
              Konumu Görüntüle
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BranchPage;