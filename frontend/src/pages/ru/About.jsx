import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const About = () => {
  const { t } = useTranslation();

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    // Sayfanın yüksekliğini zorla hesapla
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (
    <>
      <SEOHead 
        title="О Нас"
        description="Подробная информация о Hospitadent. Более 20 лет опыта, видение, миссия и ценности. Крупнейшая организация стоматологического здоровья в Турции."
        keywords="о hospitadent, история стоматологической клиники, видение миссия, ценности, опыт"
        url="https://hospitadent.com/ru/o-nas"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hospitadent",
          "description": "Крупнейшая организация стоматологического здоровья в Турции",
          "url": "https://hospitadent.com",
          "foundingDate": "2004",
          "numberOfEmployees": "500+",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR",
            "addressLocality": "Istanbul"
          }
        }}
      />
      <div className="bg-white">
        {/* Header */}
        <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f4f78]">
            {t('about.title', 'О Нас')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.vision.title', 'НАШЕ ВИДЕНИЕ')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.vision.text', 'Быть самой близкой и инновационной маркой здоровья полости рта и зубов для пациентов мира.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.mission.title', 'НАША МИССИЯ')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.mission.text', 'Добавлять ценность людям, обществу и окружающей среде с высоким качеством обслуживания; давать уверенность, обращаясь с каждым из наших пациентов как с нашими собственными родственниками этично, искренне и с сочувствием, достигать большего количества людей с сбалансированным физическим ростом, следовать технологическим и научным разработкам и применять их пионерским образом, делать людей счастливыми, проектируя эстетические улыбки с архитекторами улыбок.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.values.title', 'НАШИ ЦЕННОСТИ')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value1.title', 'Мы Ценим:')}</strong> {t('about.values.value1.text', 'Мы осознаем ценность людей, жизни и мира.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value2.title', 'Мы Заботимся:')}</strong> {t('about.values.value2.text', 'Мы заботимся о наших пациентах как о наших родственниках и гостях, которых мы принимаем дома.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value3.title', 'Мы Даем Доверие:')}</strong> {t('about.values.value3.text', 'Все, кто вступает в контакт с нами (наши пациенты, поставщики, окружающая среда и т.д.), уверены, что мы пытаемся сделать наше лучшее и правильное дело, и что мы связаны этическими правилами. Мы делаем только то, что говорим, и говорим только то, что будем делать.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value4.title', 'Мы Искренние и Близкие:')}</strong> {t('about.values.value4.text', 'Мы показываем сбалансированную искренность и близость ко всем.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value5.title', 'Мы Чувствуем Ответственность:')}</strong> {t('about.values.value5.text', 'Мы чувствуем ответственность перед людьми, обществом, окружающей средой, то есть всей вселенной.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value6.title', 'Мы Инновационные:')}</strong> {t('about.values.value6.text', 'Мы всегда любопытны и готовы к инновациям и разработкам.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value7.title', 'Мы Ценим Качество:')}</strong> {t('about.values.value7.text', 'Лучшие материалы, новейшие технологии и высокая гигиена для нас незаменимы.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value8.title', 'Мы Сотрудничаем:')}</strong> {t('about.values.value8.text', 'Мы заботимся об интересах наших пациентов и поставщиков, сотрудничая с ними, и в команде мы думаем, что если один из нас отсутствует, мы все отсутствуем.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value9.title', 'Мы Хотим Дать Счастье:')}</strong> {t('about.values.value9.text', 'Мы думаем, что истинное счастье - это счастье других и стремимся к этому.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.history.text1', 'Основанный в 2006 году, Hospitadent продолжает служить с лозунгом "С первого дня весь наш бизнес - зубы". С 22 филиалами, созданными внутри страны и за рубежом, современным медицинским оборудованием, отличительным медицинским персоналом и экспертным персоналом, Hospitadent поднимает стандарты в здоровье полости рта и зубов.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.branches.title', 'Высокое Качество Обслуживания в Каждом Филиале')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text1', 'После первого центра, открытого в Багджыларе, Hospitadent, который расширился до Фатиха в 2008 году, Чамлыджа в 2009 году, Пендика и Меджидиекёя в 2011 году, открыл свой первый международный филиал во Франкфурте, Германия в 2012 году. Группа больниц, которая увеличила количество филиалов с новым центром, открытым в Бакыркёе, открыла филиал Анкары, филиал Коджаэли, филиал Антальи, филиал Джевизлибага в Стамбуле и наконец филиал Бурсы в 2014 году в Кайсери, 2015 году в Гааге, Нидерланды, 2018 году в Шерифали, 2021 году в Алании и Бодруме и 2022 году. Hospitadent продолжает расти уверенными шагами со многими филиалами в 4 разных странах.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text2', 'В дополнение к быстро растущему количеству филиалов, Академия Hospitadent была основана в 2008 году для непрерывного образования экспертных врачей и технического персонала по профессиональному развитию и технологическим инновациям.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text3', 'Hospitadent - это пионерское имя, которое устанавливает стандарты в секторе здравоохранения со своими инновационными проектами. Больница, которая начала программу лояльности Dent Guard в 2016 году, создала гарантированную систему стоматологического лечения с персонализированными картами и преимуществами. В отделе Dental Design, основанном в 2017 году, было начато цифровое проектирование улыбки. Hospitadent, который предлагает превосходную технологическую инфраструктуру в каждом из своих филиалов, служит своим пациентам с индивидуальным и долговечным подходом к стоматологическому лечению.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.innovations.title', 'Hospitadent, Адрес Первых')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.innovations.text', 'Hospitadent, который первым в Турции начал стоматологический туризм здоровья в 2007 году, стал искомым адресом для стоматологического лечения пациентами со всего мира. Hospitadent, который достиг первого в секторе здравоохранения и впервые в Турции основал отдел опыта пациентов, придает большое значение опыту и удовлетворению пациентов. С этим пониманием больница, которая создала специальную концепцию под названием Dental Spa в 2016 году, стремится положить конец страху перед стоматологами со своей VIP-концепцией, которая предоставляет пациентам расслабляющую среду и психологическую поддержку.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.awards.title', 'История Успеха, Увенчанная Наградами')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text1', 'Видение мирового класса Hospitadent, экспертный персонал, инновационная и ориентированная на удовлетворение клиентов работа были сертифицированы наградами. Hospitadent, который доказал, что был выбором народа, обслужив более 1 миллиона пациентов к 2010 году, выиграл TEMOS International Quality Certificate в 2013 году.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text2', 'В 2015 году он был признан достойным награды Учреждение Здравоохранения Года в результате опроса Ekovitrin Magazine 14-й Звезды Года.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text3', 'Hospitadent стал первой больницей в Турции, которая выиграла премию Stevie, выиграв Most Innovative Customer Service Award года на Stevie Awards, где самые успешные компании мира награждаются в 2018 году.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text4', 'Hospitadent, который занял первое место в категории Стоматологические Услуги Лечения в исследовании Turkey Exporters Assembly\'s Turkey\'s 500 Service Exporters в 2018 году, еще раз доказал свой успех и компетентность в секторе здравоохранения.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text5', 'Hospitadent, который квалифицировался для входа в "Turquality Brand Support Program", созданный в 2020 году с целью маркировки турецких продуктов за рубежом, установления и поддержки имиджа турецких товаров, который действует в течение 16 лет, продолжает создавать позитивный имидж, делая важный шаг в маркировке. Быть первой стоматологической группой здоровья, участвующей в программе поддержки бренда Turquality, в которой участвуют только пять больниц в области здравоохранения, демонстрирует высокие стандарты, а также создание качественного имиджа.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text6', 'Hospitadent, который квалифицировался, чтобы быть названным компанией "Great Place To Work® Certified" в результате оценки и анализа, проведенного GPTW Turkey в последний период 2021 года, испытывает законную гордость быть первой стоматологической группой, имеющей самый высокий сертификат корпоративной культуры.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed">
              {t('about.conclusion', 'Hospitadent, который непрерывно следует развивающимся медицинским технологиям и непрерывно продвигает методы диагностики и лечения с самыми современными технологиями, продолжает предоставлять безопасные и качественные услуги здравоохранения со своим экспертным персоналом.')}
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default About; 