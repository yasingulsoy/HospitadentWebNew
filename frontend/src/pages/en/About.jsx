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
        title="About Us"
        description="Detailed information about Hospitadent. 20+ years of experience, vision, mission and values. Turkey's largest dental health organization."
        keywords="about hospitadent, dental clinic history, vision mission, values, experience"
        url="https://hospitadent.com/en/about-us"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hospitadent",
          "description": "Turkey's largest dental health organization",
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
            {t('about.title', 'About Us')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.vision.title', 'OUR VISION')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.vision.text', 'To be the closest and most innovative oral and dental health brand to the world\'s patients.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.mission.title', 'OUR MISSION')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.mission.text', 'To add value to people, society and the environment with high service quality; to give confidence by treating each of our patients like our own relatives in an ethical, sincere and empathetic manner, to reach more people with balanced physical growth, to follow technological and scientific developments and apply them in a pioneering manner, to make people happy by designing aesthetic smiles with smile architects.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.values.title', 'OUR VALUES')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value1.title', 'We Value:')}</strong> {t('about.values.value1.text', 'We are aware of the value of human beings, life and the world.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value2.title', 'We Care:')}</strong> {t('about.values.value2.text', 'We care for our patients like our relatives and guests we host at home.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value3.title', 'We Give Trust:')}</strong> {t('about.values.value3.text', 'Everyone who comes into contact with us (our patients, suppliers, environment, etc.) is sure that we try to do our best and the right thing, and that we are bound by ethical rules. We only do what we say and only say what we will do.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value4.title', 'We Are Sincere and Close:')}</strong> {t('about.values.value4.text', 'We show balanced sincerity and closeness to everyone.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value5.title', 'We Feel Responsible:')}</strong> {t('about.values.value5.text', 'We feel responsible towards people, society, the environment, that is, the entire universe.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value6.title', 'We Are Innovative:')}</strong> {t('about.values.value6.text', 'We are always curious and willing about innovations and developments.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value7.title', 'We Value Quality:')}</strong> {t('about.values.value7.text', 'The best materials, the newest technology and high hygiene are indispensable for us.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value8.title', 'We Collaborate:')}</strong> {t('about.values.value8.text', 'We look after the interests of our patients and suppliers by collaborating with them, and in the team, we think that if one of us is missing, we are all missing.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value9.title', 'We Want to Give Happiness:')}</strong> {t('about.values.value9.text', 'We think that true happiness is the happiness of others and strive for it.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.history.text1', 'Founded in 2006, Hospitadent continues to serve with the slogan "From day one, all our business is teeth". With its 22 branches established domestically and internationally, modern medical devices, distinguished physician staff and expert personnel, Hospitadent raises standards in oral and dental health.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.branches.title', 'High Service Quality in Every Branch')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text1', 'Following the first center opened in Bağcılar, Hospitadent, which expanded to Fatih in 2008, Çamlıca in 2009, Pendik and Mecidiyeköy in 2011, opened its first international branch in Frankfurt, Germany in 2012. The hospital group, which increased the number of branches with a new center opened in Bakırköy, opened Ankara branch, Kocaeli branch, Antalya branch, Cevizlibağ branch in Istanbul and finally Bursa branch in 2014 in Kayseri, 2015 in The Hague, Netherlands, 2018 in Şerifali, 2021 in Alanya and Bodrum and 2022. Hospitadent continues to grow with confident steps with many branches in 4 different countries.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text2', 'In addition to the rapidly increasing number of branches, Hospitadent Academy was established in 2008 for the continuous education of expert physicians and technical personnel on professional development and technological innovations.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text3', 'Hospitadent is a pioneering name that sets standards in the health sector with its innovative projects. The hospital, which started the Dent Guard loyalty program in 2016, created a guaranteed dental treatment system with personalized cards and advantages. In the Dental Design department established in 2017, digital smile design was started. Hospitadent, which offers superior technological infrastructure in each of its branches, serves its patients with an individual and long-lasting dental treatment approach.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.innovations.title', 'Hospitadent, Address of Firsts')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.innovations.text', 'Hospitadent, which started dental health tourism for the first time in Turkey in 2007, has become the sought-after address for dental treatment by patients from all over the world. Hospitadent, which achieved a first in the health sector and established the Patient Experience Department for the first time in Turkey, attaches great importance to patient experience and satisfaction. With this understanding, the hospital, which created a special concept called Dental Spa in 2016, aims to end the fear of dentists with its VIP concept that provides patients with a relaxing environment and psychological support.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.awards.title', 'Success Story Crowned with Awards')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text1', 'Hospitadent\'s world-standard vision, expert personnel, innovative and customer satisfaction-oriented work were certified with awards. Hospitadent, which proved that it was the people\'s choice by serving more than 1 million patients by 2010, won the TEMOS International Quality Certificate in 2013.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text2', 'In 2015, it was deemed worthy of the Health Institution of the Year award as a result of the Ekovitrin Magazine 14th Stars of the Year Survey.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text3', 'Hospitadent became the first hospital in Turkey to win a Stevie Award by winning the Most Innovative Customer Service Award of the Year at the Stevie Awards, where the world\'s most successful companies are awarded in 2018.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text4', 'Hospitadent, which ranked first in the Dental Treatment Services category in the Turkey Exporters Assembly\'s Turkey\'s 500 Service Exporters research in 2018, proved its success and competence in the health sector once again.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text5', 'Hospitadent, which qualified to enter the "Turquality Brand Support Program" created in 2020 for the purpose of branding Turkish products abroad, establishing and supporting the Turkish goods image, which has been in force for 16 years, continues to create a positive image by taking an important step in branding. Being the first dental health group to participate in the Turquality brand support program, in which only five hospitals are involved in the health field, demonstrates high standards as well as creating a quality image.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text6', 'Hospitadent, which qualified to be called a "Great Place To Work® Certified" company as a result of the evaluation and analysis conducted by GPTW Turkey in the last period of 2021, is experiencing the rightful pride of being the first dental group to have the best corporate culture certificate.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed">
              {t('about.conclusion', 'Hospitadent, which continuously follows developing medical technologies and continuously advances diagnosis and treatment methods with the most current technologies, continues to provide safe and quality health service with its expert staff.')}
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