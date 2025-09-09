import React, { useState } from 'react';
import { Footer } from '../components';
import SEOHead from '../components/SEO/SEOHead';

const Treatments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // Kozmetik Diş Hekimliği
    {
      id: 'hollywood-smile',
      title: 'Hollywood Smile',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Mükemmel gülüş tasarımı ile hayalinizdeki gülümsemeye kavuşun.',
      image: '/api/placeholder/300/200',
      slug: 'hollywood-smile'
    },
    {
      id: 'smile-design',
      title: 'Gülüş Tasarımı',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Dijital planlama ile kişiye özel estetik gülüş tasarımı.',
      image: '/api/placeholder/300/200',
      slug: 'gulus-tasarimi'
    },
    {
      id: 'teeth-whitening',
      title: 'Diş Beyazlatma',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Modern yöntemlerle hızlı ve güvenli diş beyazlatma uygulamaları.',
      image: '/api/placeholder/300/200',
      slug: 'dis-beyazlatma'
    },
    {
      id: 'pink-aesthetics',
      title: 'Pembe Estetik',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Diş eti estetiği ile mükemmel gülümseme.',
      image: '/api/placeholder/300/200',
      slug: 'pembe-estetik'
    },
    {
      id: 'laminate-veneer',
      title: 'Lamine Kaplama',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Estetik ve ince yaprak porselen kaplamalar.',
      image: '/api/placeholder/300/200',
      slug: 'lamine-kaplama'
    },
    {
      id: 'zirconium-crown',
      title: 'Zirkonyum Kaplama',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Doğal görünümlü, dayanıklı ve estetik diş kaplama çözümleri.',
      image: '/api/placeholder/300/200',
      slug: 'zirkonyum-kaplama'
    },
    {
      id: 'porcelain-crown',
      title: 'Porselen Kaplama',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Dayanıklı ve doğal görünümlü porselen diş kaplamaları.',
      image: '/api/placeholder/300/200',
      slug: 'porselen-kaplama'
    },
    {
      id: 'lumineers-veneer',
      title: 'Lumineers Kaplama',
      category: 'Kozmetik Diş Hekimliği',
      description: 'İnce ve şeffaf porselen kaplama sistemi.',
      image: '/api/placeholder/300/200',
      slug: 'lumineers-kaplama'
    },
    {
      id: 'emax-crown',
      title: 'Emax Kaplama',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Yüksek estetik ve dayanıklılığa sahip Emax diş kaplamaları.',
      image: '/api/placeholder/300/200',
      slug: 'emax-kaplama'
    },
    {
      id: 'aesthetic-filling',
      title: 'Estetik Dolgu',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Doğal görünümlü estetik diş dolguları.',
      image: '/api/placeholder/300/200',
      slug: 'estetik-dolgu'
    },
    {
      id: 'bisectomy',
      title: 'Bisektomi',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Diş eti estetiği için cerrahi işlem.',
      image: '/api/placeholder/300/200',
      slug: 'bisektomi'
    },
    {
      id: 'laser-dental-treatment',
      title: 'Lazerli Diş Tedavisi',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Modern lazer teknolojisi ile diş tedavileri.',
      image: '/api/placeholder/300/200',
      slug: 'lazerli-tedavi'
    },
    {
      id: 'inlay-filling',
      title: 'Inley Dolgu',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Hassas ve estetik dolgu tekniği.',
      image: '/api/placeholder/300/200',
      slug: 'inley-dolgu'
    },
    {
      id: 'onlay-filling',
      title: 'Onley Dolgu',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Kapsamlı dolgu restorasyonu.',
      image: '/api/placeholder/300/200',
      slug: 'onley-dolgu'
    },
    {
      id: 'dental-diamond',
      title: 'Diş Pırlantası',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Dişlere pırlanta takma işlemi.',
      image: '/api/placeholder/300/200',
      slug: 'dis-pirlantasi'
    },
    {
      id: 'dental-tattoo',
      title: 'Diş Dövmesi',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Dişlere dekoratif dövme uygulaması.',
      image: '/api/placeholder/300/200',
      slug: 'dis-dovmesi'
    },
    {
      id: 'dental-jewelry',
      title: 'Diş Mücevheri',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Dişlere mücevher takma işlemi.',
      image: '/api/placeholder/300/200',
      slug: 'dis-mucevheri'
    },
    {
      id: 'bonding-treatment',
      title: 'Bonding Tedavisi',
      category: 'Kozmetik Diş Hekimliği',
      description: 'Dişlerdeki küçük kusurlar için estetik bonding uygulamaları.',
      image: '/api/placeholder/300/200',
      slug: 'bonding'
    },

    // Eksik Diş
    {
      id: 'dental-bridge',
      title: 'Köprü Diş',
      category: 'Eksik Diş',
      description: 'Eksik dişler için sabit köprü protezi.',
      image: '/api/placeholder/300/200',
      slug: 'kopru-dis'
    },
    {
      id: 'denture',
      title: 'Takma Diş (Diş Protezi)',
      category: 'Eksik Diş',
      description: 'Hareketli diş protezi çözümleri.',
      image: '/api/placeholder/300/200',
      slug: 'takma-dis'
    },
    {
      id: 'fixed-prosthesis',
      title: 'Sabit Protez',
      category: 'Eksik Diş',
      description: 'Sabit diş protezi uygulamaları.',
      image: '/api/placeholder/300/200',
      slug: 'sabit-protez'
    },
    {
      id: 'snap-on-denture',
      title: 'Çıtçıtlı Protez',
      category: 'Eksik Diş',
      description: 'Çıtçıtlı diş protezi sistemi.',
      image: '/api/placeholder/300/200',
      slug: 'citcitli-protez'
    },
    {
      id: 'full-mouth-treatment',
      title: 'Full Ağız Diş Tedavisi',
      category: 'Eksik Diş',
      description: 'Tüm ağız için kapsamlı diş tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'full-agiz-tedavisi'
    },

    // İmplant
    {
      id: 'single-tooth-implant',
      title: 'Tek Diş İmplant Tedavisi',
      category: 'İmplant',
      description: 'Tek diş eksikliği için implant tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'tek-dis-implant'
    },
    {
      id: 'full-mouth-implant',
      title: 'Full Ağız İmplant Tedavisi',
      category: 'İmplant',
      description: 'Tüm ağız için implant tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'full-agiz-implant'
    },
    {
      id: 'multiple-tooth-implant',
      title: 'Çoklu Diş İmplant Tedavisi',
      category: 'İmplant',
      description: 'Birden fazla diş eksikliği için implant tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'coklu-dis-implant'
    },
    {
      id: 'one-day-implant',
      title: '1 Günde İmplant',
      category: 'İmplant',
      description: 'Hızlı implant tedavisi - 1 günde tamamlanır.',
      image: '/api/placeholder/300/200',
      slug: '1-gunde-implant'
    },
    {
      id: 'all-on-four',
      title: 'All on Four',
      category: 'İmplant',
      description: '4 implant ile tam ağız rehabilitasyonu.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-four'
    },
    {
      id: 'all-on-six',
      title: 'All on Six',
      category: 'İmplant',
      description: '6 implant ile tam ağız rehabilitasyonu.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-six'
    },
    {
      id: 'box-technique',
      title: 'Box Teknik',
      category: 'İmplant',
      description: 'Özel implant yerleştirme tekniği.',
      image: '/api/placeholder/300/200',
      slug: 'box-teknik'
    },

    // Genel Diş Tedavileri
    {
      id: 'dental-examination',
      title: 'Diş Muayenesi',
      category: 'Genel Diş Tedavileri',
      description: 'Kapsamlı diş ve ağız sağlığı muayenesi.',
      image: '/api/placeholder/300/200',
      slug: 'dis-muayenesi'
    },
    {
      id: 'crown-veneer',
      title: 'Kuron Kaplama',
      category: 'Genel Diş Tedavileri',
      description: 'Diş kuronu kaplama tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'kuron-kaplama'
    },
    {
      id: 'dental-filling',
      title: 'Diş Dolgusu',
      category: 'Genel Diş Tedavileri',
      description: 'Estetik ve dayanıklı diş dolgusu çözümleri.',
      image: '/api/placeholder/300/200',
      slug: 'dis-dolgusu'
    },
    {
      id: 'root-canal-treatment',
      title: 'Kanal Tedavisi',
      category: 'Genel Diş Tedavileri',
      description: 'Ağrısız ve hızlı kanal tedavisi ile dişlerinizi kurtarın.',
      image: '/api/placeholder/300/200',
      slug: 'kanal-tedavisi'
    },
    {
      id: 'tooth-extraction',
      title: 'Diş Çekimi',
      category: 'Genel Diş Tedavileri',
      description: 'Cerrahi ve klasik yöntemlerle ağrısız diş çekimi.',
      image: '/api/placeholder/300/200',
      slug: 'dis-cekimi'
    },
    {
      id: 'impacted-tooth-extraction',
      title: 'Gömülü Diş Çekimi',
      category: 'Genel Diş Tedavileri',
      description: 'Gömülü dişlerin cerrahi çekimi.',
      image: '/api/placeholder/300/200',
      slug: 'gomulu-dis-cekimi'
    },
    {
      id: 'wisdom-tooth-extraction',
      title: '20\'lik Diş Çekimi',
      category: 'Genel Diş Tedavileri',
      description: 'Yirmilik diş çekimi işlemi.',
      image: '/api/placeholder/300/200',
      slug: '20lik-dis-cekimi'
    },
    {
      id: 'broken-tooth-treatment',
      title: 'Kırık Diş Tedavisi',
      category: 'Genel Diş Tedavileri',
      description: 'Kırık dişlerin tedavi ve restorasyonu.',
      image: '/api/placeholder/300/200',
      slug: 'kirik-dis-tedavisi'
    },

    // Koruyucu Diş Tedavileri
    {
      id: 'bad-breath-treatment',
      title: 'Ağız Kokusu Tedavisi',
      category: 'Koruyucu Diş Tedavileri',
      description: 'Ağız kokusunun nedenlerinin tespiti ve tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'agiz-kokusu-tedavisi'
    },
    {
      id: 'tooth-sensitivity-treatment',
      title: 'Diş Hassasiyeti Tedavisi',
      category: 'Koruyucu Diş Tedavileri',
      description: 'Diş hassasiyeti için koruyucu tedaviler.',
      image: '/api/placeholder/300/200',
      slug: 'dis-hassasiyeti-tedavisi'
    },
    {
      id: 'bruxism-treatment',
      title: 'Diş Sıkma (Bruksizm) Tedavisi',
      category: 'Koruyucu Diş Tedavileri',
      description: 'Bruksizm (diş sıkma) için gece plağı ve tedavi.',
      image: '/api/placeholder/300/200',
      slug: 'dis-sikma-tedavisi'
    },
    {
      id: 'teeth-grinding-treatment',
      title: 'Diş Gıcırdatma Tedavisi',
      category: 'Koruyucu Diş Tedavileri',
      description: 'Diş gıcırdatma için koruyucu tedaviler.',
      image: '/api/placeholder/300/200',
      slug: 'dis-gicirdatma-tedavisi'
    },
    {
      id: 'snoring-treatment',
      title: 'Horlama Tedavisi',
      category: 'Koruyucu Diş Tedavileri',
      description: 'Horlama için diş hekimliği tedavileri.',
      image: '/api/placeholder/300/200',
      slug: 'horlama-tedavisi'
    },

    // Ortodonti
    {
      id: 'braces-treatment',
      title: 'Diş Teli Tedavisi',
      category: 'Ortodonti',
      description: 'Çocuk ve yetişkinler için klasik diş teli tedavileri.',
      image: '/api/placeholder/300/200',
      slug: 'dis-teli-tedavisi'
    },
    {
      id: 'clear-bracket-treatment',
      title: 'Şeffaf Braketli Tedavi',
      category: 'Ortodonti',
      description: 'Görünmez braketler ile ortodontik tedavi.',
      image: '/api/placeholder/300/200',
      slug: 'seffaf-braketli-tedavi'
    },
    {
      id: 'invisalign-treatment',
      title: 'Invisalign (Şeffaf Plak) Tedavisi',
      category: 'Ortodonti',
      description: 'Çıkarılabilir şeffaf plaklar ile ortodontik tedavi.',
      image: '/api/placeholder/300/200',
      slug: 'invisalign-tedavisi'
    },
    {
      id: 'invisible-braces-treatment',
      title: 'Görünmez Tel Tedavisi',
      category: 'Ortodonti',
      description: 'Lingual (dil tarafı) braketler ile görünmez tedavi.',
      image: '/api/placeholder/300/200',
      slug: 'gorunmez-tel-tedavisi'
    },

    // Pedodonti
    {
      id: 'fluoride-application',
      title: 'Fluorid Uygulaması',
      category: 'Pedodonti / Çocuk Diş Hekimliği',
      description: 'Çocuklar için koruyucu fluorid uygulaması.',
      image: '/api/placeholder/300/200',
      slug: 'fluorid-uygulamasi'
    },
    {
      id: 'fissure-sealant',
      title: 'Fissür Örtücü',
      category: 'Pedodonti / Çocuk Diş Hekimliği',
      description: 'Diş çürüklerini önlemek için fissür örtücü.',
      image: '/api/placeholder/300/200',
      slug: 'fissur-ortucu'
    },
    {
      id: 'pediatric-orthodontic-treatment',
      title: 'Çocuk Ortodonti Tedavisi',
      category: 'Pedodonti / Çocuk Diş Hekimliği',
      description: 'Çocuklar için erken ortodontik tedavi.',
      image: '/api/placeholder/300/200',
      slug: 'cocuk-ortodonti-tedavisi'
    },
    {
      id: 'baby-bottle-tooth-decay',
      title: 'Biberon Çürüğü Tedavisi',
      category: 'Pedodonti / Çocuk Diş Hekimliği',
      description: 'Biberon çürüğü tedavi ve korunma yöntemleri.',
      image: '/api/placeholder/300/200',
      slug: 'biberon-curugu-tedavisi'
    },
    {
      id: 'space-maintainer-treatment',
      title: 'Yer Tutucu Tedavisi',
      category: 'Pedodonti / Çocuk Diş Hekimliği',
      description: 'Erken diş kaybı sonrası yer tutucu uygulaması.',
      image: '/api/placeholder/300/200',
      slug: 'yer-tutucu-tedavisi'
    },

    // Periodontoloji
    {
      id: 'gum-treatment',
      title: 'Diş Eti Tedavisi',
      category: 'Periodontoloji',
      description: 'Diş eti hastalıklarının teşhis ve tedavisinde uzman yaklaşım.',
      image: '/api/placeholder/300/200',
      slug: 'dis-eti-tedavisi'
    },
    {
      id: 'curettage-treatment',
      title: 'Küretaj Tedavisi',
      category: 'Periodontoloji',
      description: 'Diş eti küretaj işlemi.',
      image: '/api/placeholder/300/200',
      slug: 'kuretaj-tedavisi'
    },
    {
      id: 'flap-treatment',
      title: 'Flap Tedavisi',
      category: 'Periodontoloji',
      description: 'Diş eti flap cerrahi tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'flap-tedavisi'
    },
    {
      id: 'gingivitis',
      title: 'Diş Eti İltihabı | Gingivitis',
      category: 'Periodontoloji',
      description: 'Diş eti iltihabı tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'dis-eti-iltihabi'
    },
    {
      id: 'dental-calculus-cleaning',
      title: 'Diş Taşı Temizliği',
      category: 'Periodontoloji',
      description: 'Diş taşı ve plak temizliği ile sağlıklı diş etleri.',
      image: '/api/placeholder/300/200',
      slug: 'dis-tasi-temizligi'
    },

    // Özel Diş Tedavileri
    {
      id: 'digital-dentistry',
      title: 'Dijital Diş Hekimliği ve Diş Tasarımı',
      category: 'Özel Diş Tedavileri',
      description: 'Modern dijital teknoloji ile diş tasarımı.',
      image: '/api/placeholder/300/200',
      slug: 'dijital-dis-hekimligi'
    },
    {
      id: 'needle-free-anesthesia',
      title: 'İğnesiz Anestezi Uygulaması',
      category: 'Özel Diş Tedavileri',
      description: 'Ağrısız iğnesiz anestezi uygulaması.',
      image: '/api/placeholder/300/200',
      slug: 'ignesiz-anestezi'
    },
    {
      id: 'sedation-anesthesia',
      title: 'Sedasyon ve Genel Anestezi',
      category: 'Özel Diş Tedavileri',
      description: 'Sedasyon ve genel anestezi ile tedavi.',
      image: '/api/placeholder/300/200',
      slug: 'sedasyon-anestezi'
    },
    {
      id: 'rubber-dam-application',
      title: 'Rubber Dam Uygulaması',
      category: 'Özel Diş Tedavileri',
      description: 'Rubber dam ile izole tedavi.',
      image: '/api/placeholder/300/200',
      slug: 'rubber-dam-uygulamasi'
    },
    {
      id: 'jaw-tumor',
      title: 'Çene Tümörü',
      category: 'Özel Diş Tedavileri',
      description: 'Çene tümörü tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'cene-tumoru'
    },
    {
      id: 'jaw-fracture-treatment',
      title: 'Çene Kırığı Tedavisi',
      category: 'Özel Diş Tedavileri',
      description: 'Çene kırığı cerrahi tedavisi.',
      image: '/api/placeholder/300/200',
      slug: 'cene-kirigi-tedavisi'
    },
    {
      id: 'dental-spa',
      title: 'Dental Spa',
      category: 'Özel Diş Tedavileri',
      description: 'Rahatlatıcı dental spa hizmetleri.',
      image: '/api/placeholder/300/200',
      slug: 'dental-spa'
    },
    {
      id: '10x10-examination',
      title: '10 X 10 Muayene',
      category: 'Özel Diş Tedavileri',
      description: 'Kapsamlı 10x10 diş muayenesi.',
      image: '/api/placeholder/300/200',
      slug: '10x10-muayene'
    }
  ];

  // Arama filtreleme
  const filteredTreatments = allTreatments.filter(treatment =>
    treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="Tedavilerimiz - Hospitadent"
        description="Hospitadent'te sunulan tüm diş tedavileri ve hizmetler. Kozmetik diş hekimliği, implant, ortodonti ve daha fazlası."
        keywords="diş tedavileri, kozmetik diş hekimliği, implant, ortodonti, pedodonti, periodontoloji, hospitadent"
        url="https://hospitadent.com/tedavilerimiz"
      />
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 treatments-page">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Tedavilerimiz
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-7xl mx-auto">
            
            {/* Arama Bölümü */}
            <div className="mb-12">
              <div className="max-w-lg mx-auto">
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                  <div className="flex-1 px-6 py-4">
                    <input
                      type="text"
                      placeholder="Arama"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full text-lg text-gray-800 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                  <button className="text-[#0f4f78] px-6 py-4 hover:text-[#2bb3ea] transition-all duration-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Tedavi Kartları Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              
              {filteredTreatments.map((treatment) => (
                <div key={treatment.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#004876]/20 group flex flex-col h-full">
                  {/* Resim */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f4f78]/20 to-[#2bb3ea]/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-[#004876]/30">
                        🦷
                      </div>
                    </div>
                  </div>
                  
                  {/* İçerik */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Kategori */}
                    <div className="mb-2 -mt-1">
                      <span className="inline-block bg-blue-100 text-[#004876] text-xs font-semibold px-0.5 py-0 rounded-full">
                        {treatment.category}
                      </span>
                    </div>
                    
                    {/* Başlık */}
                    <h3 className="text-xl font-bold text-[#0f4f78] mb-3 group-hover:text-[#2bb3ea] transition-colors duration-300 line-clamp-2">
                      {treatment.title}
                    </h3>
                    
                    {/* Açıklama */}
                    <p className="text-[#0f4f78]/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {treatment.description}
                    </p>
                    
                    {/* Detay Butonu */}
                    <a 
                      href={`/tedavi/${treatment.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group mt-auto"
                    >
                      Detayları Görüntüle
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              
            </div>

            {/* Sonuç Bulunamadı */}
            {filteredTreatments.length === 0 && searchTerm && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#004876] mb-2">
                  Arama Sonucu Bulunamadı
                </h3>
                <p className="text-gray-600 mb-6">
                  "{searchTerm}" için sonuç bulunamadı. Farklı anahtar kelimeler deneyebilirsiniz.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Tüm Tedavileri Göster
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Size En Uygun Tedaviyi Belirleyelim
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Uzman diş hekimlerimizle ücretsiz muayene için randevu alın
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:4449922"
                    className="bg-white text-[#0f4f78] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    444 99 22
                  </a>
                  <a 
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0f4f78] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    İletişime Geç
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Treatments; 