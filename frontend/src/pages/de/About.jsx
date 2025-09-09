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
        title="Über Uns"
        description="Detaillierte Informationen über Hospitadent. Über 20 Jahre Erfahrung, Vision, Mission und Werte. Die größte zahnmedizinische Gesundheitsorganisation der Türkei."
        keywords="über hospitadent, zahnklinik geschichte, vision mission, werte, erfahrung"
        url="https://hospitadent.com/de/uber-uns"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hospitadent",
          "description": "Die größte zahnmedizinische Gesundheitsorganisation der Türkei",
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
            {t('about.title', 'Über Uns')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.vision.title', 'UNSERE VISION')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.vision.text', 'Die nächste und innovativste Marke für Mund- und Zahngesundheit für die Patienten der Welt zu sein.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.mission.title', 'UNSERE MISSION')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.mission.text', 'Menschen, Gesellschaft und Umwelt mit hoher Servicequalität einen Mehrwert zu bieten; Vertrauen zu geben, indem wir jeden unserer Patienten wie unsere eigenen Angehörigen auf ethische, aufrichtige und einfühlsame Weise behandeln, mehr Menschen mit ausgewogenem physischem Wachstum zu erreichen, technologische und wissenschaftliche Entwicklungen zu verfolgen und sie in pionierhafter Weise anzuwenden, Menschen glücklich zu machen, indem wir ästhetische Lächeln mit Lächeln-Architekten gestalten.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.values.title', 'UNSERE WERTE')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value1.title', 'Wir Schätzen:')}</strong> {t('about.values.value1.text', 'Wir sind uns des Wertes von Menschen, Leben und der Welt bewusst.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value2.title', 'Wir Kümmern Uns:')}</strong> {t('about.values.value2.text', 'Wir kümmern uns um unsere Patienten wie um unsere Angehörigen und Gäste, die wir zu Hause beherbergen.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value3.title', 'Wir Geben Vertrauen:')}</strong> {t('about.values.value3.text', 'Jeder, der mit uns in Kontakt kommt (unsere Patienten, Lieferanten, Umwelt, etc.), ist sicher, dass wir versuchen, unser Bestes und das Richtige zu tun, und dass wir an ethische Regeln gebunden sind. Wir tun nur das, was wir sagen, und sagen nur das, was wir tun werden.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value4.title', 'Wir Sind Aufrichtig und Nah:')}</strong> {t('about.values.value4.text', 'Wir zeigen ausgewogene Aufrichtigkeit und Nähe zu allen.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value5.title', 'Wir Fühlen Uns Verantwortlich:')}</strong> {t('about.values.value5.text', 'Wir fühlen uns verantwortlich gegenüber Menschen, Gesellschaft, Umwelt, also dem gesamten Universum.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value6.title', 'Wir Sind Innovativ:')}</strong> {t('about.values.value6.text', 'Wir sind immer neugierig und bereit für Innovationen und Entwicklungen.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value7.title', 'Wir Schätzen Qualität:')}</strong> {t('about.values.value7.text', 'Die besten Materialien, die neueste Technologie und hohe Hygiene sind für uns unverzichtbar.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value8.title', 'Wir Arbeiten Zusammen:')}</strong> {t('about.values.value8.text', 'Wir achten auf die Interessen unserer Patienten und Lieferanten, indem wir mit ihnen zusammenarbeiten, und im Team denken wir, dass wenn einer von uns fehlt, wir alle fehlen.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value9.title', 'Wir Möchten Glück Geben:')}</strong> {t('about.values.value9.text', 'Wir denken, dass wahres Glück das Glück anderer ist und streben danach.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.history.text1', 'Hospitadent, das 2006 gegründet wurde, setzt seinen Dienst mit dem Slogan "Vom ersten Tag an ist unser gesamtes Geschäft Zähne" fort. Mit seinen 22 national und international etablierten Filialen, modernen medizinischen Geräten, angesehenem Ärztepersonal und Fachpersonal hebt Hospitadent die Standards in der Mund- und Zahngesundheit an.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.branches.title', 'Hohe Servicequalität in Jeder Filiale')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text1', 'Nach dem ersten in Bağcılar eröffneten Zentrum eröffnete Hospitadent, das sich 2008 nach Fatih, 2009 nach Çamlıca, 2011 nach Pendik und Mecidiyeköy ausdehnte, 2012 seine erste internationale Filiale in Frankfurt, Deutschland. Die Krankenhausgruppe, die die Anzahl der Filialen mit einem neuen in Bakırköy eröffneten Zentrum erhöhte, eröffnete 2014 in Kayseri, 2015 in Den Haag, Niederlande, 2018 in Şerifali, 2021 in Alanya und Bodrum und 2022 die Ankara-Filiale, die Kocaeli-Filiale, die Antalya-Filiale, die Cevizlibağ-Filiale in Istanbul und schließlich die Bursa-Filiale. Hospitadent wächst mit selbstbewussten Schritten mit vielen Filialen in 4 verschiedenen Ländern weiter.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text2', 'Zusätzlich zur rasch wachsenden Anzahl von Filialen wurde 2008 die Hospitadent Akademie für die kontinuierliche Ausbildung von Fachärzten und technischem Personal in beruflicher Entwicklung und technologischen Innovationen gegründet.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text3', 'Hospitadent ist ein Pioniername, der mit seinen innovativen Projekten Standards im Gesundheitssektor setzt. Das Krankenhaus, das 2016 das Dent Guard Treueprogramm startete, schuf ein garantiertes Zahnersatzsystem mit personalisierten Karten und Vorteilen. In der 2017 gegründeten Dental Design Abteilung wurde mit dem digitalen Lächeln-Design begonnen. Hospitadent, das in jeder seiner Filialen überlegene technologische Infrastruktur bietet, dient seinen Patienten mit einem individuellen und langlebigen Zahnersatzansatz.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.innovations.title', 'Hospitadent, Adresse der Ersten')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.innovations.text', 'Hospitadent, das 2007 als erstes in der Türkei mit dem Dental-Gesundheitstourismus begann, ist die gesuchte Adresse für Zahnersatz von Patienten aus der ganzen Welt geworden. Hospitadent, das eine Premiere im Gesundheitssektor erreichte und erstmals in der Türkei die Patientenerfahrungsabteilung gründete, legt großen Wert auf Patientenerfahrung und -zufriedenheit. Mit diesem Verständnis zielt das Krankenhaus, das 2016 ein spezielles Konzept namens Dental Spa schuf, darauf ab, die Angst vor Zahnärzten mit seinem VIP-Konzept zu beenden, das Patienten eine entspannende Umgebung und psychologische Unterstützung bietet.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.awards.title', 'Erfolgsgeschichte Gekrönt mit Auszeichnungen')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text1', 'Hospitadents weltklasse Vision, Fachpersonal, innovative und kundenorientierte Arbeit wurden mit Auszeichnungen zertifiziert. Hospitadent, das bewies, dass es die Wahl des Volkes war, indem es bis 2010 mehr als 1 Million Patienten diente, gewann 2013 das TEMOS International Quality Certificate.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text2', '2015 wurde es als Ergebnis der Ekovitrin Magazine 14. Stars of the Year Survey als würdig für die Auszeichnung als Gesundheitsinstitution des Jahres erachtet.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text3', 'Hospitadent wurde das erste Krankenhaus in der Türkei, das einen Stevie Award gewann, indem es den Most Innovative Customer Service Award des Jahres bei den Stevie Awards gewann, wo die erfolgreichsten Unternehmen der Welt 2018 ausgezeichnet werden.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text4', 'Hospitadent, das in der Türkei Exporters Assembly\'s Turkey\'s 500 Service Exporters Forschung 2018 in der Kategorie Dental Treatment Services den ersten Platz belegte, bewies seinen Erfolg und seine Kompetenz im Gesundheitssektor einmal mehr.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text5', 'Hospitadent, das sich qualifizierte, in das "Turquality Brand Support Program" einzutreten, das 2020 zum Zweck der Markierung türkischer Produkte im Ausland, der Etablierung und Unterstützung des türkischen Warenimages, das seit 16 Jahren in Kraft ist, geschaffen wurde, setzt fort, ein positives Image zu schaffen, indem es einen wichtigen Schritt in der Markierung macht. Das erste Dental-Gesundheitsgruppe zu sein, die am Turquality Markenunterstützungsprogramm teilnimmt, an dem nur fünf Krankenhäuser im Gesundheitsbereich beteiligt sind, demonstriert hohe Standards sowie die Schaffung eines Qualitätsimages.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text6', 'Hospitadent, das sich qualifizierte, als "Great Place To Work® Certified" Unternehmen bezeichnet zu werden als Ergebnis der Bewertung und Analyse, die von GPTW Türkei in der letzten Periode von 2021 durchgeführt wurde, erlebt den berechtigten Stolz, die erste Dental-Gruppe zu sein, die das beste Unternehmenskulturzertifikat hat.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed">
              {t('about.conclusion', 'Hospitadent, das kontinuierlich sich entwickelnde medizinische Technologien verfolgt und kontinuierlich Diagnose- und Behandlungsmethoden mit den aktuellsten Technologien vorantreibt, setzt fort, sichere und qualitativ hochwertige Gesundheitsdienstleistungen mit seinem Fachpersonal zu erbringen.')}
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