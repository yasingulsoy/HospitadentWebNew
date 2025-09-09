import React from 'react';
import { getHomePageReviews } from '../../data/reviewsData';
import GoogleReviewItems from './GoogleReviewItems';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const GoogleReviews = () => {
  const reviewsData = getHomePageReviews();
  
  return (
    <section name="reviews" className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-none px-0 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4">
            Hasta Yorumları
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Hastalarımızın deneyimlerini ve memnuniyetlerini keşfedin
          </p>
        </div>
        
        {/* Swiper ile otomatik ve elle kaydırılabilen Google yorumları */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          grabCursor={true}
          navigation={{
            nextEl: '.reviews-next',
            prevEl: '.reviews-prev',
          }}
          style={{paddingBottom: 24}}
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index} style={{minWidth: 320, maxWidth: 380, width: '100%', height: 340, display: 'flex', flexDirection: 'column'}}>
              <GoogleReviewItems review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Modern Ok Butonları */}
        <button className="reviews-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl border border-gray-100 hover:bg-gray-50 hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full flex items-center justify-center text-gray-500 text-2xl group" aria-label="Önceki">
          <svg className="w-7 h-7 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="reviews-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl border border-gray-100 hover:bg-gray-50 hover:scale-110 transition-all duration-300 w-14 h-14 rounded-full flex items-center justify-center text-gray-500 text-2xl group" aria-label="Sonraki">
          <svg className="w-7 h-7 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default GoogleReviews; 