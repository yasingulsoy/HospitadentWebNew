import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';
import { instagramPosts, formatInstagramPost } from '../../data/instagramPosts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const InstagramFeed = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadInstagramPosts = () => {
      try {
        setLoading(true);
        const formattedPosts = instagramPosts.map(formatInstagramPost);
        setPosts(formattedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadInstagramPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2bb3ea] mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('instagram.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">{t('instagram.error')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="px-2">
        {/* Başlık */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-center text-[#0f4f78]">
            {t('instagram.title')}
          </h2>
        </div>

        {/* Swiper ile sonsuz ve otomatik kaydırmalı Instagram Gönderileri */}
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={6}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: 24 }}
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id} style={{ height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <InstagramPostCard post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// Instagram Gönderi Kartı - Modern Tasarım
const InstagramPostCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex-shrink-0 w-80 h-80 md:w-96 md:h-96 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-white flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => post.permalink && window.open(post.permalink, '_blank')}
    >
      {/* Görsel kutusu */}
      <div className="w-full h-full flex items-center justify-center bg-blue-50">
        <img
          src={post.mediaUrl}
          alt={post.caption}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Hover Overlay ve Instagram ikonu */}
      <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center z-20`}>
        <div className={`transform transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <FaInstagram className="text-white text-4xl drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed; 