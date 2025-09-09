import React, { useState } from 'react';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const Treatments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // Эстетическая стоматология
    {
      id: 'hollywood-smile',
      title: 'Голливудская улыбка',
      category: 'Эстетическая стоматология',
      description: 'Получите улыбку своей мечты с идеальным дизайном улыбки.',
      image: '/api/placeholder/300/200',
      slug: 'gollivudskaya-ulybka'
    },
    {
      id: 'smile-design',
      title: 'Дизайн улыбки',
      category: 'Эстетическая стоматология',
      description: 'Персонализированный эстетический дизайн улыбки с цифровым планированием.',
      image: '/api/placeholder/300/200',
      slug: 'dizayn-ulybki'
    },
    {
      id: 'teeth-whitening',
      title: 'Отбеливание зубов',
      category: 'Эстетическая стоматология',
      description: 'Быстрые и безопасные процедуры отбеливания зубов современными методами.',
      image: '/api/placeholder/300/200',
      slug: 'otbelivanie-zubov'
    },
    {
      id: 'pink-aesthetics',
      title: 'Розовая эстетика',
      category: 'Эстетическая стоматология',
      description: 'Идеальная улыбка с эстетикой десен.',
      image: '/api/placeholder/300/200',
      slug: 'rozovaya-estetika'
    },
    {
      id: 'laminate-veneer',
      title: 'Ламинированные виниры',
      category: 'Эстетическая стоматология',
      description: 'Эстетичные и тонкие фарфоровые виниры.',
      image: '/api/placeholder/300/200',
      slug: 'laminatnye-viniry'
    },
    {
      id: 'zirconium-crown',
      title: 'Циркониевые коронки',
      category: 'Эстетическая стоматология',
      description: 'Естественно выглядящие, долговечные и эстетичные решения зубных коронок.',
      image: '/api/placeholder/300/200',
      slug: 'tsirkonievye-koronki'
    },
    {
      id: 'porcelain-crown',
      title: 'Фарфоровые коронки',
      category: 'Эстетическая стоматология',
      description: 'Долговечные и естественно выглядящие фарфоровые зубные коронки.',
      image: '/api/placeholder/300/200',
      slug: 'farforovye-koronki'
    },
    {
      id: 'lumineers-veneer',
      title: 'Виниры Lumineers',
      category: 'Эстетическая стоматология',
      description: 'Тонкая и прозрачная система фарфоровых виниров.',
      image: '/api/placeholder/300/200',
      slug: 'viniry-lumineers'
    },
    {
      id: 'emax-crown',
      title: 'Коронки Emax',
      category: 'Эстетическая стоматология',
      description: 'Зубные коронки Emax с высокой эстетикой и долговечностью.',
      image: '/api/placeholder/300/200',
      slug: 'koronki-emax'
    },
    {
      id: 'aesthetic-filling',
      title: 'Эстетическая пломба',
      category: 'Эстетическая стоматология',
      description: 'Естественно выглядящие эстетические зубные пломбы.',
      image: '/api/placeholder/300/200',
      slug: 'esteticheskaya-plomba'
    },
    {
      id: 'bisectomy',
      title: 'Бисектомия',
      category: 'Эстетическая стоматология',
      description: 'Хирургическая процедура для эстетики десен.',
      image: '/api/placeholder/300/200',
      slug: 'bisektomiya'
    },
    {
      id: 'laser-dental-treatment',
      title: 'Лазерное лечение зубов',
      category: 'Эстетическая стоматология',
      description: 'Стоматологические процедуры с современной лазерной технологией.',
      image: '/api/placeholder/300/200',
      slug: 'lazernoe-lechenie-zubov'
    },
    {
      id: 'inlay-filling',
      title: 'Вкладка Inlay',
      category: 'Эстетическая стоматология',
      description: 'Точная и эстетичная техника пломбирования.',
      image: '/api/placeholder/300/200',
      slug: 'vkladka-inlay'
    },
    {
      id: 'onlay-filling',
      title: 'Вкладка Onlay',
      category: 'Эстетическая стоматология',
      description: 'Комплексная реставрация пломбы.',
      image: '/api/placeholder/300/200',
      slug: 'vkladka-onlay'
    },
    {
      id: 'dental-diamond',
      title: 'Зубной бриллиант',
      category: 'Эстетическая стоматология',
      description: 'Процедура установки бриллиантов на зубы.',
      image: '/api/placeholder/300/200',
      slug: 'zubnoy-brilliant'
    },
    {
      id: 'dental-tattoo',
      title: 'Зубная татуировка',
      category: 'Эстетическая стоматология',
      description: 'Декоративное нанесение татуировки на зубы.',
      image: '/api/placeholder/300/200',
      slug: 'zubnaya-tatuirovka'
    },
    {
      id: 'dental-jewelry',
      title: 'Зубные украшения',
      category: 'Эстетическая стоматология',
      description: 'Процедура установки украшений на зубы.',
      image: '/api/placeholder/300/200',
      slug: 'zubnye-ukrasheniya'
    },
    {
      id: 'bonding-treatment',
      title: 'Лечение бондингом',
      category: 'Эстетическая стоматология',
      description: 'Эстетичные процедуры бондинга для небольших дефектов зубов.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-bondingom'
    },

    // Отсутствующие зубы
    {
      id: 'dental-bridge',
      title: 'Зубной мост',
      category: 'Отсутствующие зубы',
      description: 'Фиксированный мост для отсутствующих зубов.',
      image: '/api/placeholder/300/200',
      slug: 'zubnoy-most'
    },
    {
      id: 'denture',
      title: 'Зубной протез',
      category: 'Отсутствующие зубы',
      description: 'Решения для съемных зубных протезов.',
      image: '/api/placeholder/300/200',
      slug: 'zubnoy-protez'
    },
    {
      id: 'fixed-prosthesis',
      title: 'Фиксированный протез',
      category: 'Отсутствующие зубы',
      description: 'Применение фиксированных зубных протезов.',
      image: '/api/placeholder/300/200',
      slug: 'fiksirovannyy-protez'
    },
    {
      id: 'snap-on-denture',
      title: 'Протез на защелках',
      category: 'Отсутствующие зубы',
      description: 'Система зубных протезов на защелках.',
      image: '/api/placeholder/300/200',
      slug: 'protez-na-zashchelkakh'
    },
    {
      id: 'full-mouth-treatment',
      title: 'Полное лечение полости рта',
      category: 'Отсутствующие зубы',
      description: 'Комплексное стоматологическое лечение для всей полости рта.',
      image: '/api/placeholder/300/200',
      slug: 'polnoe-lechenie-polosti-rta'
    },

    // Имплантат
    {
      id: 'dental-implant',
      title: 'Зубной имплантат',
      category: 'Имплантат',
      description: 'Современные процедуры зубных имплантатов с высоким процентом успеха.',
      image: '/api/placeholder/300/200',
      slug: 'zubnoy-implantat'
    },
    {
      id: 'all-on-4',
      title: 'All-on-4',
      category: 'Имплантат',
      description: 'Полное лечение зубов всего с 4 имплантатами.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-4'
    },
    {
      id: 'all-on-6',
      title: 'All-on-6',
      category: 'Имплантат',
      description: 'Полное лечение зубов с 6 имплантатами.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-6'
    },
    {
      id: 'zygomatic-implant',
      title: 'Скуловой имплантат',
      category: 'Имплантат',
      description: 'Процедуры скуловых имплантатов для сложных случаев.',
      image: '/api/placeholder/300/200',
      slug: 'skulovoy-implantat'
    },
    {
      id: 'basal-implant',
      title: 'Базальный имплантат',
      category: 'Имплантат',
      description: 'Процедуры базальных имплантатов для немедленной нагрузки.',
      image: '/api/placeholder/300/200',
      slug: 'bazalnyy-implantat'
    },
    {
      id: 'implant-supported-denture',
      title: 'Протез на имплантатах',
      category: 'Имплантат',
      description: 'Решения зубных протезов на имплантатах.',
      image: '/api/placeholder/300/200',
      slug: 'protez-na-implantatakh'
    },

    // Ортодонтия
    {
      id: 'orthodontics',
      title: 'Ортодонтия',
      category: 'Ортодонтия',
      description: 'Комплексные ортодонтические процедуры.',
      image: '/api/placeholder/300/200',
      slug: 'ortodontiya'
    },
    {
      id: 'invisible-braces',
      title: 'Невидимые брекеты',
      category: 'Ортодонтия',
      description: 'Современные процедуры невидимых брекетов.',
      image: '/api/placeholder/300/200',
      slug: 'nevidimye-brekety'
    },
    {
      id: 'ceramic-braces',
      title: 'Керамические брекеты',
      category: 'Ортодонтия',
      description: 'Эстетичные керамические брекеты.',
      image: '/api/placeholder/300/200',
      slug: 'keramicheskie-brekety'
    },
    {
      id: 'lingual-braces',
      title: 'Лингвальные брекеты',
      category: 'Ортодонтия',
      description: 'Внутренние брекеты для максимальной эстетики.',
      image: '/api/placeholder/300/200',
      slug: 'lingvalnye-brekety'
    },
    {
      id: 'clear-aligners',
      title: 'Прозрачные каппы',
      category: 'Ортодонтия',
      description: 'Современное лечение прозрачными каппами.',
      image: '/api/placeholder/300/200',
      slug: 'prozrachnye-kappy'
    },

    // Хирургия
    {
      id: 'wisdom-tooth-extraction',
      title: 'Удаление зуба мудрости',
      category: 'Хирургия',
      description: 'Безопасное удаление зубов мудрости.',
      image: '/api/placeholder/300/200',
      slug: 'udalenie-zuba-mudrosti'
    },
    {
      id: 'tooth-extraction',
      title: 'Удаление зуба',
      category: 'Хирургия',
      description: 'Безболезненное удаление зубов.',
      image: '/api/placeholder/300/200',
      slug: 'udalenie-zuba'
    },
    {
      id: 'sinus-lift',
      title: 'Синус-лифтинг',
      category: 'Хирургия',
      description: 'Операции синус-лифтинга для имплантационного лечения.',
      image: '/api/placeholder/300/200',
      slug: 'sinus-lifting'
    },
    {
      id: 'bone-grafting',
      title: 'Костная пластика',
      category: 'Хирургия',
      description: 'Процедуры костной пластики для имплантационного лечения.',
      image: '/api/placeholder/300/200',
      slug: 'kostnaya-plastika'
    },
    {
      id: 'gum-surgery',
      title: 'Хирургия десен',
      category: 'Хирургия',
      description: 'Хирургия десен для здоровой улыбки.',
      image: '/api/placeholder/300/200',
      slug: 'khirurgiya-desen'
    },

    // Эндодонтия
    {
      id: 'root-canal-treatment',
      title: 'Лечение корневых каналов',
      category: 'Эндодонтия',
      description: 'Современное лечение корневых каналов.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-kornevykh-kanalov'
    },
    {
      id: 'endodontic-retreatment',
      title: 'Повторное эндодонтическое лечение',
      category: 'Эндодонтия',
      description: 'Повторное эндодонтическое лечение для сложных случаев.',
      image: '/api/placeholder/300/200',
      slug: 'povtornoe-endodonticheskoe-lechenie'
    },
    {
      id: 'apicoectomy',
      title: 'Резекция верхушки корня',
      category: 'Эндодонтия',
      description: 'Резекция верхушки корня при хронических воспалениях.',
      image: '/api/placeholder/300/200',
      slug: 'rezektsiya-verkhushki-kornya'
    },

    // Пародонтология
    {
      id: 'periodontal-treatment',
      title: 'Лечение пародонтита',
      category: 'Пародонтология',
      description: 'Комплексное лечение пародонтита.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-parodontita'
    },
    {
      id: 'gum-disease-treatment',
      title: 'Лечение заболеваний десен',
      category: 'Пародонтология',
      description: 'Лечение заболеваний десен.',
      image: '/api/placeholder/300/200',
      slug: 'lechenie-zabolevaniy-desen'
    },
    {
      id: 'scaling-root-planing',
      title: 'Удаление зубного камня',
      category: 'Пародонтология',
      description: 'Профессиональное удаление зубного камня и сглаживание корней.',
      image: '/api/placeholder/300/200',
      slug: 'udalenie-zubnogo-kamnya'
    },

    // Детская стоматология
    {
      id: 'pediatric-dentistry',
      title: 'Детская стоматология',
      category: 'Детская стоматология',
      description: 'Специальное стоматологическое лечение для детей.',
      image: '/api/placeholder/300/200',
      slug: 'detskaya-stomatologiya'
    },
    {
      id: 'fissure-sealant',
      title: 'Герметизация фиссур',
      category: 'Детская стоматология',
      description: 'Герметизация фиссур для профилактики кариеса.',
      image: '/api/placeholder/300/200',
      slug: 'germetizatsiya-fissur'
    },
    {
      id: 'fluoride-treatment',
      title: 'Фтор-терапия',
      category: 'Детская стоматология',
      description: 'Фтор-терапия для крепких зубов.',
      image: '/api/placeholder/300/200',
      slug: 'ftor-terapiya'
    }
  ];

  // Функция поиска
  const filteredTreatments = allTreatments.filter(treatment =>
    treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="Наши процедуры - Hospitadent"
        description="Откройте для себя наши комплексные стоматологические процедуры: эстетическая стоматология, имплантаты, ортодонтия, хирургия и многое другое. Современные методы лечения для вашей идеальной улыбки."
        keywords="стоматологические процедуры, имплантаты, ортодонтия, эстетическая стоматология, стоматологическая хирургия, Hospitadent Россия"
        url="https://hospitadent.com/ru/nashi-protsedury"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Наши <span className="text-blue-600">процедуры</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Откройте для себя наши комплексные стоматологические процедуры с новейшими технологиями и опытными специалистами
            </p>
            
            {/* Поисковая коробка */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск процедуры или категории..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
                />
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Сетка процедур */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm && (
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600">
                Найдено <span className="font-semibold">{filteredTreatments.length}</span> процедур для "{searchTerm}"
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <div className="text-6xl text-blue-400 opacity-60 group-hover:scale-110 transition-transform duration-500">
                      🦷
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {treatment.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      ID: {treatment.slug}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
                      Показать детали
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTreatments.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Процедуры не найдены</h3>
              <p className="text-gray-600 mb-6">
                Попробуйте другие поисковые запросы или просмотрите все наши процедуры.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Показать все процедуры
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Готовы к идеальной улыбке?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Запишитесь на прием сегодня и получите консультацию от наших экспертов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tk.emsal.com.tr/hospitadent/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              📞 Записаться на прием
            </a>
            <a
              href="tel:4449922"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg"
            >
              ☎️ Позвонить
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Treatments; 