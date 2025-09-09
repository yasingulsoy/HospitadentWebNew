import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ServiceItems from './ServiceItems'
import { servicesData } from '../../data/data'

const Services = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section name='services' className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="px-2">
        {/* Başlık */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-center text-[#0f4f78]">
            {t('services.title')}
          </h2>
        </div>

        {/* Yatay Kaydırılabilir Hizmetler */}
        <div className="relative w-full">
          {/* Sol Kaydırma Butonu */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          {/* Sağ Kaydırma Butonu */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Kaydırılabilir Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-2 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {servicesData.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-80 md:w-96 md:h-96">
                <ServiceItems item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services