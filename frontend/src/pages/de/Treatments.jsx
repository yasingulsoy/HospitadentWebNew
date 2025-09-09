import React, { useState } from 'react';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const Treatments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // Ästhetische Zahnheilkunde
    {
      id: 'hollywood-smile',
      title: 'Hollywood Smile',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Erreichen Sie Ihr Traumlächeln mit perfektem Lächeldesign.',
      image: '/api/placeholder/300/200',
      slug: 'hollywood-smile'
    },
    {
      id: 'smile-design',
      title: 'Lächeldesign',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Personalisierte ästhetische Lächeldesign mit digitaler Planung.',
      image: '/api/placeholder/300/200',
      slug: 'laecheldesign'
    },
    {
      id: 'teeth-whitening',
      title: 'Zahnaufhellung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Schnelle und sichere Zahnaufhellungsanwendungen mit modernen Methoden.',
      image: '/api/placeholder/300/200',
      slug: 'zahnaufhellung'
    },
    {
      id: 'pink-aesthetics',
      title: 'Pink-Ästhetik',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Perfektes Lächeln mit Zahnfleischästhetik.',
      image: '/api/placeholder/300/200',
      slug: 'pink-aesthetik'
    },
    {
      id: 'laminate-veneer',
      title: 'Laminat-Veneers',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Ästhetische und dünne Porzellan-Veneers.',
      image: '/api/placeholder/300/200',
      slug: 'laminat-veneers'
    },
    {
      id: 'zirconium-crown',
      title: 'Zirkon-Kronen',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Natürlich aussehende, langlebige und ästhetische Zahnkronenlösungen.',
      image: '/api/placeholder/300/200',
      slug: 'zirkon-kronen'
    },
    {
      id: 'porcelain-crown',
      title: 'Porzellan-Kronen',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Langlebige und natürlich aussehende Porzellanzahnkronen.',
      image: '/api/placeholder/300/200',
      slug: 'porzellan-kronen'
    },
    {
      id: 'lumineers-veneer',
      title: 'Lumineers-Veneers',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Dünnes und transparentes Porzellan-Veneer-System.',
      image: '/api/placeholder/300/200',
      slug: 'lumineers-veneers'
    },
    {
      id: 'emax-crown',
      title: 'Emax-Kronen',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Emax-Zahnkronen mit hoher Ästhetik und Langlebigkeit.',
      image: '/api/placeholder/300/200',
      slug: 'emax-kronen'
    },
    {
      id: 'aesthetic-filling',
      title: 'Ästhetische Füllung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Natürlich aussehende ästhetische Zahnfüllungen.',
      image: '/api/placeholder/300/200',
      slug: 'aesthetische-fuellung'
    },
    {
      id: 'bisectomy',
      title: 'Bisektomie',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Chirurgischer Eingriff für Zahnfleischästhetik.',
      image: '/api/placeholder/300/200',
      slug: 'bisektomie'
    },
    {
      id: 'laser-dental-treatment',
      title: 'Laser-Zahnbehandlung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Zahnbehandlungen mit moderner Lasertechnologie.',
      image: '/api/placeholder/300/200',
      slug: 'laser-zahnbehandlung'
    },
    {
      id: 'inlay-filling',
      title: 'Inlay-Füllung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Präzise und ästhetische Füllungstechnik.',
      image: '/api/placeholder/300/200',
      slug: 'inlay-fuellung'
    },
    {
      id: 'onlay-filling',
      title: 'Onlay-Füllung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Umfassende Füllungsrestauration.',
      image: '/api/placeholder/300/200',
      slug: 'onlay-fuellung'
    },
    {
      id: 'dental-diamond',
      title: 'Zahndiamant',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Verfahren zum Einsetzen von Diamanten auf Zähnen.',
      image: '/api/placeholder/300/200',
      slug: 'zahndiamant'
    },
    {
      id: 'dental-tattoo',
      title: 'Zahntattoo',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Dekorative Tattoo-Anwendung auf Zähnen.',
      image: '/api/placeholder/300/200',
      slug: 'zahntattoo'
    },
    {
      id: 'dental-jewelry',
      title: 'Zahnschmuck',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Verfahren zum Einsetzen von Schmuck auf Zähnen.',
      image: '/api/placeholder/300/200',
      slug: 'zahnschmuck'
    },
    {
      id: 'bonding-treatment',
      title: 'Bonding-Behandlung',
      category: 'Ästhetische Zahnheilkunde',
      description: 'Ästhetische Bonding-Anwendungen für kleine Zahndefekte.',
      image: '/api/placeholder/300/200',
      slug: 'bonding-behandlung'
    },

    // Fehlende Zähne
    {
      id: 'dental-bridge',
      title: 'Zahnbrücke',
      category: 'Fehlende Zähne',
      description: 'Feste Brücke für fehlende Zähne.',
      image: '/api/placeholder/300/200',
      slug: 'zahnbruecke'
    },
    {
      id: 'denture',
      title: 'Zahnprothese',
      category: 'Fehlende Zähne',
      description: 'Lösungen für herausnehmbare Zahnprothesen.',
      image: '/api/placeholder/300/200',
      slug: 'zahnprothese'
    },
    {
      id: 'fixed-prosthesis',
      title: 'Feste Prothese',
      category: 'Fehlende Zähne',
      description: 'Anwendungen für feste Zahnprothesen.',
      image: '/api/placeholder/300/200',
      slug: 'feste-prothese'
    },
    {
      id: 'snap-on-denture',
      title: 'Klick-Prothese',
      category: 'Fehlende Zähne',
      description: 'Klick-Zahnprothesensystem.',
      image: '/api/placeholder/300/200',
      slug: 'klick-prothese'
    },
    {
      id: 'full-mouth-treatment',
      title: 'Vollmund-Zahnbehandlung',
      category: 'Fehlende Zähne',
      description: 'Umfassende Zahnbehandlung für den gesamten Mund.',
      image: '/api/placeholder/300/200',
      slug: 'vollmund-zahnbehandlung'
    },

    // Implantat
    {
      id: 'dental-implant',
      title: 'Zahnimplantat',
      category: 'Implantat',
      description: 'Moderne Zahnimplantat-Anwendungen mit hoher Erfolgsrate.',
      image: '/api/placeholder/300/200',
      slug: 'zahnimplantat'
    },
    {
      id: 'all-on-4',
      title: 'All-on-4',
      category: 'Implantat',
      description: 'Vollständige Zahnbehandlung mit nur 4 Implantaten.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-4'
    },
    {
      id: 'all-on-6',
      title: 'All-on-6',
      category: 'Implantat',
      description: 'Vollständige Zahnbehandlung mit 6 Implantaten.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-6'
    },
    {
      id: 'zygomatic-implant',
      title: 'Jochbein-Implantat',
      category: 'Implantat',
      description: 'Jochbein-Implantat-Anwendungen für schwierige Fälle.',
      image: '/api/placeholder/300/200',
      slug: 'jochbein-implantat'
    },
    {
      id: 'basal-implant',
      title: 'Basal-Implantat',
      category: 'Implantat',
      description: 'Basal-Implantat-Anwendungen für sofortige Belastung.',
      image: '/api/placeholder/300/200',
      slug: 'basal-implantat'
    },
    {
      id: 'implant-supported-denture',
      title: 'Implantat-gestützte Prothese',
      category: 'Implantat',
      description: 'Implantat-gestützte Zahnprothesenlösungen.',
      image: '/api/placeholder/300/200',
      slug: 'implantat-gestuetzte-prothese'
    },

    // Kieferorthopädie
    {
      id: 'orthodontics',
      title: 'Kieferorthopädie',
      category: 'Kieferorthopädie',
      description: 'Umfassende Kieferorthopädie-Behandlungen.',
      image: '/api/placeholder/300/200',
      slug: 'kieferorthopaedie'
    },
    {
      id: 'invisible-braces',
      title: 'Unsichtbare Zahnspangen',
      category: 'Kieferorthopädie',
      description: 'Moderne unsichtbare Zahnspangen-Behandlungen.',
      image: '/api/placeholder/300/200',
      slug: 'unsichtbare-zahnspangen'
    },
    {
      id: 'ceramic-braces',
      title: 'Keramik-Zahnspangen',
      category: 'Kieferorthopädie',
      description: 'Ästhetische Keramik-Zahnspangen.',
      image: '/api/placeholder/300/200',
      slug: 'keramik-zahnspangen'
    },
    {
      id: 'lingual-braces',
      title: 'Lingual-Zahnspangen',
      category: 'Kieferorthopädie',
      description: 'Innenliegende Zahnspangen für maximale Ästhetik.',
      image: '/api/placeholder/300/200',
      slug: 'lingual-zahnspangen'
    },
    {
      id: 'clear-aligners',
      title: 'Durchsichtige Schienen',
      category: 'Kieferorthopädie',
      description: 'Moderne durchsichtige Schienen-Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'durchsichtige-schienen'
    },

    // Chirurgie
    {
      id: 'wisdom-tooth-extraction',
      title: 'Weisheitszahn-Extraktion',
      category: 'Chirurgie',
      description: 'Sichere Weisheitszahn-Extraktion.',
      image: '/api/placeholder/300/200',
      slug: 'weisheitszahn-extraktion'
    },
    {
      id: 'tooth-extraction',
      title: 'Zahnextraktion',
      category: 'Chirurgie',
      description: 'Schmerzfreie Zahnextraktion.',
      image: '/api/placeholder/300/200',
      slug: 'zahnextraktion'
    },
    {
      id: 'sinus-lift',
      title: 'Sinuslift',
      category: 'Chirurgie',
      description: 'Sinuslift-Operationen für Implantat-Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'sinuslift'
    },
    {
      id: 'bone-grafting',
      title: 'Knochenaufbau',
      category: 'Chirurgie',
      description: 'Knochenaufbau-Verfahren für Implantat-Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'knochenaufbau'
    },
    {
      id: 'gum-surgery',
      title: 'Zahnfleisch-Chirurgie',
      category: 'Chirurgie',
      description: 'Zahnfleisch-Chirurgie für gesundes Lächeln.',
      image: '/api/placeholder/300/200',
      slug: 'zahnfleisch-chirurgie'
    },

    // Endodontie
    {
      id: 'root-canal-treatment',
      title: 'Wurzelkanal-Behandlung',
      category: 'Endodontie',
      description: 'Moderne Wurzelkanal-Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'wurzelkanal-behandlung'
    },
    {
      id: 'endodontic-retreatment',
      title: 'Endodontische Nachbehandlung',
      category: 'Endodontie',
      description: 'Endodontische Nachbehandlung für schwierige Fälle.',
      image: '/api/placeholder/300/200',
      slug: 'endodontische-nachbehandlung'
    },
    {
      id: 'apicoectomy',
      title: 'Wurzelspitzenresektion',
      category: 'Endodontie',
      description: 'Wurzelspitzenresektion für chronische Entzündungen.',
      image: '/api/placeholder/300/200',
      slug: 'wurzelspitzenresektion'
    },

    // Parodontologie
    {
      id: 'periodontal-treatment',
      title: 'Parodontitis-Behandlung',
      category: 'Parodontologie',
      description: 'Umfassende Parodontitis-Behandlung.',
      image: '/api/placeholder/300/200',
      slug: 'parodontitis-behandlung'
    },
    {
      id: 'gum-disease-treatment',
      title: 'Zahnfleischerkrankung-Behandlung',
      category: 'Parodontologie',
      description: 'Behandlung von Zahnfleischerkrankungen.',
      image: '/api/placeholder/300/200',
      slug: 'zahnfleischerkrankung-behandlung'
    },
    {
      id: 'scaling-root-planing',
      title: 'Zahnsteinentfernung',
      category: 'Parodontologie',
      description: 'Professionelle Zahnsteinentfernung und Wurzelglättung.',
      image: '/api/placeholder/300/200',
      slug: 'zahnsteinentfernung'
    },

    // Kinderzahnheilkunde
    {
      id: 'pediatric-dentistry',
      title: 'Kinderzahnheilkunde',
      category: 'Kinderzahnheilkunde',
      description: 'Spezielle Zahnbehandlung für Kinder.',
      image: '/api/placeholder/300/200',
      slug: 'kinderzahnheilkunde'
    },
    {
      id: 'fissure-sealant',
      title: 'Fissurenversiegelung',
      category: 'Kinderzahnheilkunde',
      description: 'Fissurenversiegelung zur Kariesprävention.',
      image: '/api/placeholder/300/200',
      slug: 'fissurenversiegelung'
    },
    {
      id: 'fluoride-treatment',
      title: 'Fluorid-Behandlung',
      category: 'Kinderzahnheilkunde',
      description: 'Fluorid-Behandlung für starke Zähne.',
      image: '/api/placeholder/300/200',
      slug: 'fluorid-behandlung'
    }
  ];

  // Arama fonksiyonu
  const filteredTreatments = allTreatments.filter(treatment =>
    treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="Unsere Behandlungen - Hospitadent"
        description="Entdecken Sie unsere umfassenden Zahnbehandlungen: Ästhetische Zahnheilkunde, Implantate, Kieferorthopädie, Chirurgie und mehr. Moderne Behandlungsmethoden für Ihr perfektes Lächeln."
        keywords="Zahnbehandlungen, Implantate, Kieferorthopädie, ästhetische Zahnheilkunde, Zahnchirurgie, Hospitadent Deutschland"
        url="https://hospitadent.com/de/unsere-behandlungen"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Unsere <span className="text-blue-600">Behandlungen</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Entdecken Sie unsere umfassenden Zahnbehandlungen mit modernster Technologie und erfahrenen Spezialisten
            </p>
            
            {/* Arama Kutusu */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Behandlung oder Kategorie suchen..."
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

      {/* Behandlungen Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm && (
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600">
                <span className="font-semibold">{filteredTreatments.length}</span> Behandlung{filteredTreatments.length !== 1 ? 'en' : ''} gefunden für "{searchTerm}"
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
                      Details anzeigen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTreatments.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Keine Behandlungen gefunden</h3>
              <p className="text-gray-600 mb-6">
                Versuchen Sie es mit anderen Suchbegriffen oder schauen Sie sich alle unsere Behandlungen an.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Alle Behandlungen anzeigen
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bereit für Ihr perfektes Lächeln?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Vereinbaren Sie noch heute einen Termin und lassen Sie sich von unseren Experten beraten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tk.emsal.com.tr/hospitadent/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              📞 Termin vereinbaren
            </a>
            <a
              href="tel:4449922"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg"
            >
              ☎️ Anrufen
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