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
        title="À Propos"
        description="Informations détaillées sur Hospitadent. Plus de 20 ans d'expérience, vision, mission et valeurs. La plus grande organisation de santé dentaire de Turquie."
        keywords="à propos hospitadent, histoire clinique dentaire, vision mission, valeurs, expérience"
        url="https://hospitadent.com/fr/a-propos"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hospitadent",
          "description": "La plus grande organisation de santé dentaire de Turquie",
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
            {t('about.title', 'À Propos')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.vision.title', 'NOTRE VISION')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.vision.text', 'Être la marque de santé bucco-dentaire la plus proche et la plus innovante des patients du monde.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.mission.title', 'NOTRE MISSION')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.mission.text', 'Ajouter de la valeur aux personnes, à la société et à l\'environnement avec une qualité de service élevée ; donner confiance en traitant chacun de nos patients comme nos propres proches de manière éthique, sincère et empathique, atteindre plus de personnes avec une croissance physique équilibrée, suivre les développements technologiques et scientifiques et les appliquer de manière pionnière, rendre les gens heureux en concevant des sourires esthétiques avec des architectes du sourire.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.values.title', 'NOS VALEURS')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value1.title', 'Nous Valorisons :')}</strong> {t('about.values.value1.text', 'Nous sommes conscients de la valeur des êtres humains, de la vie et du monde.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value2.title', 'Nous Prenons Soin :')}</strong> {t('about.values.value2.text', 'Nous prenons soin de nos patients comme de nos proches et invités que nous accueillons à la maison.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value3.title', 'Nous Donnons Confiance :')}</strong> {t('about.values.value3.text', 'Tous ceux qui entrent en contact avec nous (nos patients, fournisseurs, environnement, etc.) sont sûrs que nous essayons de faire de notre mieux et la bonne chose, et que nous sommes liés par des règles éthiques. Nous ne faisons que ce que nous disons et ne disons que ce que nous ferons.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value4.title', 'Nous Sommes Sincères et Proches :')}</strong> {t('about.values.value4.text', 'Nous montrons une sincérité et une proximité équilibrées envers tous.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value5.title', 'Nous Nous Sentons Responsables :')}</strong> {t('about.values.value5.text', 'Nous nous sentons responsables envers les personnes, la société, l\'environnement, c\'est-à-dire tout l\'univers.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value6.title', 'Nous Sommes Innovants :')}</strong> {t('about.values.value6.text', 'Nous sommes toujours curieux et désireux d\'innovations et de développements.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value7.title', 'Nous Valorisons la Qualité :')}</strong> {t('about.values.value7.text', 'Les meilleurs matériaux, la technologie la plus récente et une hygiène élevée sont indispensables pour nous.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value8.title', 'Nous Collaborons :')}</strong> {t('about.values.value8.text', 'Nous veillons aux intérêts de nos patients et fournisseurs en collaborant avec eux, et dans l\'équipe, nous pensons que si l\'un de nous manque, nous sommes tous manquants.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value9.title', 'Nous Voulons Donner du Bonheur :')}</strong> {t('about.values.value9.text', 'Nous pensons que le vrai bonheur est le bonheur des autres et nous nous efforçons pour cela.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.history.text1', 'Fondé en 2006, Hospitadent continue de servir avec le slogan "Dès le premier jour, tout notre métier est les dents". Avec ses 22 succursales établies nationalement et internationalement, ses appareils médicaux modernes, son personnel médical distingué et son personnel expert, Hospitadent élève les standards en santé bucco-dentaire.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.branches.title', 'Haute Qualité de Service dans Chaque Succursale')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text1', 'Suite au premier centre ouvert à Bağcılar, Hospitadent, qui s\'est étendu à Fatih en 2008, Çamlıca en 2009, Pendik et Mecidiyeköy en 2011, a ouvert sa première succursale internationale à Francfort, Allemagne en 2012. Le groupe hospitalier, qui a augmenté le nombre de succursales avec un nouveau centre ouvert à Bakırköy, a ouvert la succursale d\'Ankara, la succursale de Kocaeli, la succursale d\'Antalya, la succursale de Cevizlibağ à Istanbul et enfin la succursale de Bursa en 2014 à Kayseri, 2015 à La Haye, Pays-Bas, 2018 à Şerifali, 2021 à Alanya et Bodrum et 2022. Hospitadent continue de croître avec des pas confiants avec de nombreuses succursales dans 4 pays différents.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text2', 'En plus du nombre rapidement croissant de succursales, l\'Académie Hospitadent a été établie en 2008 pour l\'éducation continue des médecins experts et du personnel technique sur le développement professionnel et les innovations technologiques.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text3', 'Hospitadent est un nom pionnier qui établit des standards dans le secteur de la santé avec ses projets innovants. L\'hôpital, qui a commencé le programme de fidélité Dent Guard en 2016, a créé un système de traitement dentaire garanti avec des cartes personnalisées et des avantages. Dans le département de Design Dentaire établi en 2017, la conception de sourire numérique a été commencée. Hospitadent, qui offre une infrastructure technologique supérieure dans chacune de ses succursales, sert ses patients avec une approche de traitement dentaire individuelle et durable.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.innovations.title', 'Hospitadent, Adresse des Premiers')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.innovations.text', 'Hospitadent, qui a commencé le tourisme de santé dentaire pour la première fois en Turquie en 2007, est devenu l\'adresse recherchée pour le traitement dentaire par les patients du monde entier. Hospitadent, qui a réalisé une première dans le secteur de la santé et établi le Département d\'Expérience Patient pour la première fois en Turquie, attache une grande importance à l\'expérience et à la satisfaction des patients. Avec cette compréhension, l\'hôpital, qui a créé un concept spécial appelé Dental Spa en 2016, vise à mettre fin à la peur des dentistes avec son concept VIP qui fournit aux patients un environnement relaxant et un soutien psychologique.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.awards.title', 'Histoire de Succès Couronnée de Prix')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text1', 'La vision de classe mondiale d\'Hospitadent, son personnel expert, son travail innovant et axé sur la satisfaction client ont été certifiés par des prix. Hospitadent, qui a prouvé qu\'il était le choix du peuple en servant plus d\'un million de patients d\'ici 2010, a remporté le Certificat de Qualité Internationale TEMOS en 2013.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text2', 'En 2015, il a été jugé digne du prix de l\'Institution de Santé de l\'Année à la suite de l\'Enquête des Étoiles de l\'Année 14e du Magazine Ekovitrin.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text3', 'Hospitadent est devenu le premier hôpital de Turquie à remporter un prix Stevie en remportant le Prix du Service Client le Plus Innovant de l\'Année aux Stevie Awards, où les entreprises les plus performantes du monde sont récompensées en 2018.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text4', 'Hospitadent, qui s\'est classé premier dans la catégorie Services de Traitement Dentaire dans la recherche des 500 Exportateurs de Services de Turquie de l\'Assemblée des Exportateurs de Turquie en 2018, a prouvé son succès et sa compétence dans le secteur de la santé une fois de plus.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text5', 'Hospitadent, qui a qualifié pour entrer dans le "Programme de Soutien de Marque Turquality" créé en 2020 dans le but de marquer les produits turcs à l\'étranger, d\'établir et de soutenir l\'image des marchandises turques, qui est en vigueur depuis 16 ans, continue de créer une image positive en prenant une étape importante dans le marquage. Être le premier groupe de santé dentaire à participer au programme de soutien de marque Turquality, dans lequel seulement cinq hôpitaux sont impliqués dans le domaine de la santé, démontre des standards élevés ainsi que créer une image de qualité.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text6', 'Hospitadent, qui a qualifié pour être appelé une entreprise "Great Place To Work® Certified" à la suite de l\'évaluation et de l\'analyse menées par GPTW Turquie dans la dernière période de 2021, vit la fierté légitime d\'être le premier groupe dentaire à avoir le certificat de culture d\'entreprise le plus élevé.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed">
              {t('about.conclusion', 'Hospitadent, qui suit continuellement les technologies médicales en développement et fait progresser continuellement les méthodes de diagnostic et de traitement avec les technologies les plus actuelles, continue de fournir un service de santé sûr et de qualité avec son personnel expert.')}
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