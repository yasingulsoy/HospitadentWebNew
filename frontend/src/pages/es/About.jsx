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
        title="Sobre Nosotros"
        description="Información detallada sobre Hospitadent. Más de 20 años de experiencia, visión, misión y valores. La organización de salud dental más grande de Turquía."
        keywords="sobre hospitadent, historia clínica dental, visión misión, valores, experiencia"
        url="https://hospitadent.com/es/sobre-nosotros"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hospitadent",
          "description": "La organización de salud dental más grande de Turquía",
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
            {t('about.title', 'Sobre Nosotros')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.vision.title', 'NUESTRA VISIÓN')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.vision.text', 'Ser la marca de salud bucal y dental más cercana e innovadora para los pacientes del mundo.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.mission.title', 'NUESTRA MISIÓN')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.mission.text', 'Agregar valor a las personas, la sociedad y el medio ambiente con alta calidad de servicio; dar confianza tratando a cada uno de nuestros pacientes como nuestros propios familiares de manera ética, sincera y empática, llegar a más personas con crecimiento físico equilibrado, seguir los desarrollos tecnológicos y científicos y aplicarlos de manera pionera, hacer felices a las personas diseñando sonrisas estéticas con arquitectos de sonrisas.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.values.title', 'NUESTROS VALORES')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value1.title', 'Valoramos:')}</strong> {t('about.values.value1.text', 'Somos conscientes del valor de los seres humanos, la vida y el mundo.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value2.title', 'Nos Preocupamos:')}</strong> {t('about.values.value2.text', 'Nos preocupamos por nuestros pacientes como nuestros familiares e invitados que acogemos en casa.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value3.title', 'Damos Confianza:')}</strong> {t('about.values.value3.text', 'Todos los que entran en contacto con nosotros (nuestros pacientes, proveedores, medio ambiente, etc.) están seguros de que intentamos hacer lo mejor y lo correcto, y que estamos sujetos a reglas éticas. Solo hacemos lo que decimos y solo decimos lo que haremos.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value4.title', 'Somos Sinceros y Cercanos:')}</strong> {t('about.values.value4.text', 'Mostramos sinceridad y cercanía equilibradas hacia todos.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value5.title', 'Nos Sentimos Responsables:')}</strong> {t('about.values.value5.text', 'Nos sentimos responsables hacia las personas, la sociedad, el medio ambiente, es decir, todo el universo.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value6.title', 'Somos Innovadores:')}</strong> {t('about.values.value6.text', 'Siempre somos curiosos y deseosos de innovaciones y desarrollos.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value7.title', 'Valoramos la Calidad:')}</strong> {t('about.values.value7.text', 'Los mejores materiales, la tecnología más nueva y la alta higiene son indispensables para nosotros.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value8.title', 'Colaboramos:')}</strong> {t('about.values.value8.text', 'Velamos por los intereses de nuestros pacientes y proveedores colaborando con ellos, y en el equipo pensamos que si uno de nosotros falta, todos faltamos.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value9.title', 'Queremos Dar Felicidad:')}</strong> {t('about.values.value9.text', 'Pensamos que la verdadera felicidad es la felicidad de los demás y nos esforzamos por ello.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.history.text1', 'Fundado en 2006, Hospitadent continúa sirviendo con el lema "Desde el primer día, todo nuestro negocio son los dientes". Con sus 22 sucursales establecidas nacional e internacionalmente, dispositivos médicos modernos, personal médico distinguido y personal experto, Hospitadent eleva los estándares en salud bucal y dental.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.branches.title', 'Alta Calidad de Servicio en Cada Sucursal')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text1', 'Siguiendo el primer centro abierto en Bağcılar, Hospitadent, que se expandió a Fatih en 2008, Çamlıca en 2009, Pendik y Mecidiyeköy en 2011, abrió su primera sucursal internacional en Frankfurt, Alemania en 2012. El grupo hospitalario, que aumentó el número de sucursales con un nuevo centro abierto en Bakırköy, abrió la sucursal de Ankara, la sucursal de Kocaeli, la sucursal de Antalya, la sucursal de Cevizlibağ en Estambul y finalmente la sucursal de Bursa en 2014 en Kayseri, 2015 en La Haya, Países Bajos, 2018 en Şerifali, 2021 en Alanya y Bodrum y 2022. Hospitadent continúa creciendo con pasos confiados con muchas sucursales en 4 países diferentes.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text2', 'Además del número rápidamente creciente de sucursales, la Academia Hospitadent fue establecida en 2008 para la educación continua de médicos expertos y personal técnico sobre desarrollo profesional e innovaciones tecnológicas.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text3', 'Hospitadent es un nombre pionero que establece estándares en el sector de la salud con sus proyectos innovadores. El hospital, que comenzó el programa de lealtad Dent Guard en 2016, creó un sistema de tratamiento dental garantizado con tarjetas personalizadas y ventajas. En el departamento de Diseño Dental establecido en 2017, se comenzó el diseño de sonrisa digital. Hospitadent, que ofrece infraestructura tecnológica superior en cada una de sus sucursales, sirve a sus pacientes con un enfoque de tratamiento dental individual y duradero.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.innovations.title', 'Hospitadent, Dirección de los Primeros')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.innovations.text', 'Hospitadent, que comenzó el turismo de salud dental por primera vez en Turquía en 2007, se ha convertido en la dirección buscada para el tratamiento dental por pacientes de todo el mundo. Hospitadent, que logró una primera en el sector de la salud y estableció el Departamento de Experiencia del Paciente por primera vez en Turquía, da gran importancia a la experiencia y satisfacción del paciente. Con esta comprensión, el hospital, que creó un concepto especial llamado Dental Spa en 2016, apunta a terminar con el miedo a los dentistas con su concepto VIP que proporciona a los pacientes un ambiente relajante y apoyo psicológico.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.awards.title', 'Historia de Éxito Coronada con Premios')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text1', 'La visión de clase mundial de Hospitadent, su personal experto, su trabajo innovador y orientado a la satisfacción del cliente fueron certificados con premios. Hospitadent, que demostró que era la elección del pueblo sirviendo a más de 1 millón de pacientes para 2010, ganó el Certificado de Calidad Internacional TEMOS en 2013.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text2', 'En 2015, fue considerado digno del premio Institución de Salud del Año como resultado de la Encuesta de Estrellas del Año 14 de la Revista Ekovitrin.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text3', 'Hospitadent se convirtió en el primer hospital en Turquía en ganar un Premio Stevie al ganar el Premio al Servicio al Cliente Más Innovador del Año en los Premios Stevie, donde las empresas más exitosas del mundo son premiadas en 2018.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text4', 'Hospitadent, que ocupó el primer lugar en la categoría de Servicios de Tratamiento Dental en la investigación de los 500 Exportadores de Servicios de Turquía de la Asamblea de Exportadores de Turquía en 2018, demostró su éxito y competencia en el sector de la salud una vez más.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text5', 'Hospitadent, que calificó para entrar en el "Programa de Apoyo a Marcas Turquality" creado en 2020 con el propósito de marcar productos turcos en el extranjero, establecer y apoyar la imagen de bienes turcos, que ha estado en vigor durante 16 años, continúa creando una imagen positiva al dar un paso importante en el marcado. Ser el primer grupo de salud dental en participar en el programa de apoyo a marcas Turquality, en el que solo cinco hospitales están involucrados en el campo de la salud, demuestra altos estándares así como crear una imagen de calidad.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text6', 'Hospitadent, que calificó para ser llamado una empresa "Great Place To Work® Certified" como resultado de la evaluación y análisis realizado por GPTW Turquía en el último período de 2021, experimenta el orgullo legítimo de ser el primer grupo dental en tener el certificado de cultura corporativa más alto.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed">
              {t('about.conclusion', 'Hospitadent, que continuamente sigue las tecnologías médicas en desarrollo y continuamente avanza los métodos de diagnóstico y tratamiento con las tecnologías más actuales, continúa proporcionando servicio de salud seguro y de calidad con su personal experto.')}
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