import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const EnTreatments = () => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // Cosmetic Dentistry
    {
      id: 'hollywood-smile',
      title: 'Hollywood Smile',
      category: 'Cosmetic Dentistry',
      description: 'Achieve your dream smile with perfect smile design.',
      image: '/api/placeholder/300/200',
      slug: 'hollywood-smile'
    },
    {
      id: 'smile-design',
      title: 'Smile Design',
      category: 'Cosmetic Dentistry',
      description: 'Personalized aesthetic smile design with digital planning.',
      image: '/api/placeholder/300/200',
      slug: 'smile-design'
    },
    {
      id: 'teeth-whitening',
      title: 'Teeth Whitening',
      category: 'Cosmetic Dentistry',
      description: 'Fast and safe teeth whitening applications with modern methods.',
      image: '/api/placeholder/300/200',
      slug: 'teeth-whitening'
    },
    {
      id: 'pink-aesthetics',
      title: 'Pink Aesthetics',
      category: 'Cosmetic Dentistry',
      description: 'Perfect smile with gum aesthetics.',
      image: '/api/placeholder/300/200',
      slug: 'pink-aesthetics'
    },
    {
      id: 'laminate-veneer',
      title: 'Laminate Veneer',
      category: 'Cosmetic Dentistry',
      description: 'Aesthetic and thin porcelain veneers.',
      image: '/api/placeholder/300/200',
      slug: 'laminate-veneer'
    },
    {
      id: 'zirconium-crown',
      title: 'Zirconium Crown',
      category: 'Cosmetic Dentistry',
      description: 'Natural-looking, durable and aesthetic dental crown solutions.',
      image: '/api/placeholder/300/200',
      slug: 'zirconium-crown'
    },
    {
      id: 'porcelain-crown',
      title: 'Porcelain Crown',
      category: 'Cosmetic Dentistry',
      description: 'Durable and natural-looking porcelain dental crowns.',
      image: '/api/placeholder/300/200',
      slug: 'porcelain-crown'
    },
    {
      id: 'lumineers-veneer',
      title: 'Lumineers Veneer',
      category: 'Cosmetic Dentistry',
      description: 'Thin and transparent porcelain veneer system.',
      image: '/api/placeholder/300/200',
      slug: 'lumineers-veneer'
    },
    {
      id: 'emax-crown',
      title: 'Emax Crown',
      category: 'Cosmetic Dentistry',
      description: 'Emax dental crowns with high aesthetics and durability.',
      image: '/api/placeholder/300/200',
      slug: 'emax-crown'
    },
    {
      id: 'aesthetic-filling',
      title: 'Aesthetic Filling',
      category: 'Cosmetic Dentistry',
      description: 'Natural-looking aesthetic dental fillings.',
      image: '/api/placeholder/300/200',
      slug: 'aesthetic-filling'
    },
    {
      id: 'bisectomy',
      title: 'Bisectomy',
      category: 'Cosmetic Dentistry',
      description: 'Surgical procedure for gum aesthetics.',
      image: '/api/placeholder/300/200',
      slug: 'bisectomy'
    },
    {
      id: 'laser-dental-treatment',
      title: 'Laser Dental Treatment',
      category: 'Cosmetic Dentistry',
      description: 'Dental treatments with modern laser technology.',
      image: '/api/placeholder/300/200',
      slug: 'laser-dental-treatment'
    },
    {
      id: 'inlay-filling',
      title: 'Inlay Filling',
      category: 'Cosmetic Dentistry',
      description: 'Precise and aesthetic filling technique.',
      image: '/api/placeholder/300/200',
      slug: 'inlay-filling'
    },
    {
      id: 'onlay-filling',
      title: 'Onlay Filling',
      category: 'Cosmetic Dentistry',
      description: 'Comprehensive filling restoration.',
      image: '/api/placeholder/300/200',
      slug: 'onlay-filling'
    },
    {
      id: 'dental-diamond',
      title: 'Dental Diamond',
      category: 'Cosmetic Dentistry',
      description: 'Diamond application to teeth.',
      image: '/api/placeholder/300/200',
      slug: 'dental-diamond'
    },
    {
      id: 'dental-tattoo',
      title: 'Dental Tattoo',
      category: 'Cosmetic Dentistry',
      description: 'Decorative tattoo application to teeth.',
      image: '/api/placeholder/300/200',
      slug: 'dental-tattoo'
    },
    {
      id: 'dental-jewelry',
      title: 'Dental Jewelry',
      category: 'Cosmetic Dentistry',
      description: 'Jewelry application to teeth.',
      image: '/api/placeholder/300/200',
      slug: 'dental-jewelry'
    },
    {
      id: 'bonding-treatment',
      title: 'Bonding Treatment',
      category: 'Cosmetic Dentistry',
      description: 'Aesthetic bonding applications for small defects in teeth.',
      image: '/api/placeholder/300/200',
      slug: 'bonding-treatment'
    },

    // Missing Teeth
    {
      id: 'dental-bridge',
      title: 'Dental Bridge',
      category: 'Missing Teeth',
      description: 'Fixed bridge prosthesis for missing teeth.',
      image: '/api/placeholder/300/200',
      slug: 'dental-bridge'
    },
    {
      id: 'denture',
      title: 'Denture (Dental Prosthesis)',
      category: 'Missing Teeth',
      description: 'Removable dental prosthesis solutions.',
      image: '/api/placeholder/300/200',
      slug: 'denture'
    },
    {
      id: 'fixed-prosthesis',
      title: 'Fixed Prosthesis',
      category: 'Missing Teeth',
      description: 'Fixed dental prosthesis applications.',
      image: '/api/placeholder/300/200',
      slug: 'fixed-prosthesis'
    },
    {
      id: 'snap-on-denture',
      title: 'Snap-on Denture',
      category: 'Missing Teeth',
      description: 'Snap-on dental prosthesis system.',
      image: '/api/placeholder/300/200',
      slug: 'snap-on-denture'
    },
    {
      id: 'full-mouth-treatment',
      title: 'Full Mouth Dental Treatment',
      category: 'Missing Teeth',
      description: 'Comprehensive dental treatment for entire mouth.',
      image: '/api/placeholder/300/200',
      slug: 'full-mouth-treatment'
    },

    // Implant
    {
      id: 'single-tooth-implant',
      title: 'Single Tooth Implant',
      category: 'Implant',
      description: 'Implant treatment for a single tooth.',
      image: '/api/placeholder/300/200',
      slug: 'single-tooth-implant'
    },
    {
      id: 'full-mouth-implant',
      title: 'Full Mouth Implant',
      category: 'Implant',
      description: 'Implant treatment for entire mouth.',
      image: '/api/placeholder/300/200',
      slug: 'full-mouth-implant'
    },
    {
      id: 'multiple-tooth-implant',
      title: 'Multiple Tooth Implant',
      category: 'Implant',
      description: 'Implant treatment for multiple teeth.',
      image: '/api/placeholder/300/200',
      slug: 'multiple-tooth-implant'
    },
    {
      id: 'one-day-implant',
      title: 'One Day Implant',
      category: 'Implant',
      description: 'Implant treatment in one day.',
      image: '/api/placeholder/300/200',
      slug: 'one-day-implant'
    },
    {
      id: 'all-on-four',
      title: 'All on Four',
      category: 'Implant',
      description: 'All on Four implant technique.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-four'
    },
    {
      id: 'all-on-six',
      title: 'All on Six',
      category: 'Implant',
      description: 'All on Six implant technique.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-six'
    },
    {
      id: 'box-technique',
      title: 'Box Technique',
      category: 'Implant',
      description: 'Box implant technique.',
      image: '/api/placeholder/300/200',
      slug: 'box-technique'
    },

    // General Dental Treatments
    {
      id: 'dental-examination',
      title: 'Dental Examination',
      category: 'General Dental Treatments',
      description: 'Comprehensive dental examination.',
      image: '/api/placeholder/300/200',
      slug: 'dental-examination'
    },
    {
      id: 'crown-veneer',
      title: 'Crown Veneer',
      category: 'General Dental Treatments',
      description: 'What is crown veneer and how is it made.',
      image: '/api/placeholder/300/200',
      slug: 'crown-veneer'
    },
    {
      id: 'dental-filling',
      title: 'Dental Filling',
      category: 'General Dental Treatments',
      description: 'How dental filling is done and what are its types.',
      image: '/api/placeholder/300/200',
      slug: 'dental-filling'
    },
    {
      id: 'root-canal-treatment',
      title: 'Root Canal Treatment',
      category: 'General Dental Treatments',
      description: 'How root canal treatment is done and does it hurt.',
      image: '/api/placeholder/300/200',
      slug: 'root-canal-treatment'
    },
    {
      id: 'tooth-extraction',
      title: 'Tooth Extraction',
      category: 'General Dental Treatments',
      description: 'What is tooth extraction and how is it done.',
      image: '/api/placeholder/300/200',
      slug: 'tooth-extraction'
    },
    {
      id: 'impacted-tooth-extraction',
      title: 'Impacted Tooth Extraction',
      category: 'General Dental Treatments',
      description: 'What is impacted tooth extraction.',
      image: '/api/placeholder/300/200',
      slug: 'impacted-tooth-extraction'
    },
    {
      id: 'wisdom-tooth-extraction',
      title: 'Wisdom Tooth Extraction',
      category: 'General Dental Treatments',
      description: 'Wisdom tooth extraction.',
      image: '/api/placeholder/300/200',
      slug: 'wisdom-tooth-extraction'
    },
    {
      id: 'broken-tooth-treatment',
      title: 'Broken Tooth Treatment',
      category: 'General Dental Treatments',
      description: 'What is broken tooth treatment.',
      image: '/api/placeholder/300/200',
      slug: 'broken-tooth-treatment'
    },

    // Preventive Dental Treatments
    {
      id: 'bad-breath',
      title: 'Bad Breath',
      category: 'Preventive Dental Treatments',
      description: 'What is bad breath and how is it treated.',
      image: '/api/placeholder/300/200',
      slug: 'bad-breath'
    },
    {
      id: 'tooth-sensitivity',
      title: 'Tooth Sensitivity',
      category: 'Preventive Dental Treatments',
      description: 'What is tooth sensitivity and how is it treated.',
      image: '/api/placeholder/300/200',
      slug: 'tooth-sensitivity'
    },
    {
      id: 'teeth-grinding',
      title: 'Teeth Grinding',
      category: 'Preventive Dental Treatments',
      description: 'What is teeth grinding and how is it treated.',
      image: '/api/placeholder/300/200',
      slug: 'teeth-grinding'
    },
    {
      id: 'teeth-grinding-treatment',
      title: 'Teeth Grinding Treatment',
      category: 'Preventive Dental Treatments',
      description: 'What is teeth grinding treatment and how is it done.',
      image: '/api/placeholder/300/200',
      slug: 'teeth-grinding-treatment'
    },
    {
      id: 'snoring-treatment',
      title: 'Snoring Treatment',
      category: 'Preventive Dental Treatments',
      description: 'What is snoring treatment and how is it applied.',
      image: '/api/placeholder/300/200',
      slug: 'snoring-treatment'
    },

    // Orthodontics
    {
      id: 'braces-treatment',
      title: 'Braces Treatment',
      category: 'Orthodontics',
      description: 'What is braces treatment and how is it applied.',
      image: '/api/placeholder/300/200',
      slug: 'braces-treatment'
    },
    {
      id: 'clear-bracket-treatment',
      title: 'Clear Bracket Treatment',
      category: 'Orthodontics',
      description: 'Clear bracket orthodontic treatment.',
      image: '/api/placeholder/300/200',
      slug: 'clear-bracket-treatment'
    },
    {
      id: 'invisalign-treatment',
      title: 'Invisalign Treatment',
      category: 'Orthodontics',
      description: 'Invisalign treatment with clear aligners.',
      image: '/api/placeholder/300/200',
      slug: 'invisalign-treatment'
    },
    {
      id: 'invisible-braces-treatment',
      title: 'Invisible Braces Treatment',
      category: 'Orthodontics',
      description: 'Invisible orthodontic treatment.',
      image: '/api/placeholder/300/200',
      slug: 'invisible-braces-treatment'
    },

    // Pediatric Dentistry
    {
      id: 'fluoride-application',
      title: 'Fluoride Application',
      category: 'Pediatric Dentistry',
      description: 'Fluoride application to protect teeth.',
      image: '/api/placeholder/300/200',
      slug: 'fluoride-application'
    },
    {
      id: 'fissure-sealant',
      title: 'Fissure Sealant',
      category: 'Pediatric Dentistry',
      description: 'Protection of tooth fissures.',
      image: '/api/placeholder/300/200',
      slug: 'fissure-sealant'
    },
    {
      id: 'pediatric-orthodontic-treatment',
      title: 'Pediatric Orthodontic Treatment',
      category: 'Pediatric Dentistry',
      description: 'What is pediatric orthodontic treatment.',
      image: '/api/placeholder/300/200',
      slug: 'pediatric-orthodontic-treatment'
    },
    {
      id: 'baby-bottle-tooth-decay',
      title: 'Baby Bottle Tooth Decay',
      category: 'Pediatric Dentistry',
      description: 'What is baby bottle tooth decay.',
      image: '/api/placeholder/300/200',
      slug: 'baby-bottle-tooth-decay'
    },
    {
      id: 'space-maintainer-treatment',
      title: 'Space Maintainer Treatment',
      category: 'Pediatric Dentistry',
      description: 'What is space maintainer treatment.',
      image: '/api/placeholder/300/200',
      slug: 'space-maintainer-treatment'
    },

    // Periodontology
    {
      id: 'gum-treatment',
      title: 'Gum Treatment',
      category: 'Periodontology',
      description: 'Treatment of gum diseases.',
      image: '/api/placeholder/300/200',
      slug: 'gum-treatment'
    },
    {
      id: 'curettage-treatment',
      title: 'Curettage Treatment',
      category: 'Periodontology',
      description: 'What is curettage treatment.',
      image: '/api/placeholder/300/200',
      slug: 'curettage-treatment'
    },
    {
      id: 'flap-treatment',
      title: 'Flap Treatment',
      category: 'Periodontology',
      description: 'Surgical treatment for gums.',
      image: '/api/placeholder/300/200',
      slug: 'flap-treatment'
    },
    {
      id: 'gingivitis',
      title: 'Gingivitis',
      category: 'Periodontology',
      description: 'Gum inflammation and gingivitis.',
      image: '/api/placeholder/300/200',
      slug: 'gingivitis'
    },
    {
      id: 'dental-calculus-cleaning',
      title: 'Dental Calculus Cleaning',
      category: 'Periodontology',
      description: 'What is dental calculus cleaning and how is it done.',
      image: '/api/placeholder/300/200',
      slug: 'dental-calculus-cleaning'
    },

    // Special Dental Treatments
    {
      id: 'digital-dentistry',
      title: 'Digital Dentistry',
      category: 'Special Dental Treatments',
      description: 'Digital dentistry and dental design.',
      image: '/api/placeholder/300/200',
      slug: 'digital-dentistry'
    },
    {
      id: 'needle-free-anesthesia',
      title: 'Needle-Free Anesthesia',
      category: 'Special Dental Treatments',
      description: 'Needle-free anesthesia application.',
      image: '/api/placeholder/300/200',
      slug: 'needle-free-anesthesia'
    },
    {
      id: 'sedation-and-general-anesthesia',
      title: 'Sedation and General Anesthesia',
      category: 'Special Dental Treatments',
      description: 'Sedation and general anesthesia for treatments.',
      image: '/api/placeholder/300/200',
      slug: 'sedation-and-general-anesthesia'
    },
    {
      id: 'rubber-dam-application',
      title: 'Rubber Dam Application',
      category: 'Special Dental Treatments',
      description: 'Rubber dam application for isolation.',
      image: '/api/placeholder/300/200',
      slug: 'rubber-dam-application'
    },
    {
      id: 'jaw-tumor',
      title: 'Jaw Tumor',
      category: 'Special Dental Treatments',
      description: 'Jaw tumor treatment.',
      image: '/api/placeholder/300/200',
      slug: 'jaw-tumor'
    },
    {
      id: 'jaw-fracture-treatment',
      title: 'Jaw Fracture Treatment',
      category: 'Special Dental Treatments',
      description: 'Surgical treatment for jaw fractures.',
      image: '/api/placeholder/300/200',
      slug: 'jaw-fracture-treatment'
    },
    {
      id: 'dental-spa',
      title: 'Dental Spa',
      category: 'Special Dental Treatments',
      description: 'Relaxing dental spa services.',
      image: '/api/placeholder/300/200',
      slug: 'dental-spa'
    },
    {
      id: '10x10-examination',
      title: '10 X 10 Examination',
      category: 'Special Dental Treatments',
      description: 'Comprehensive 10x10 dental examination.',
      image: '/api/placeholder/300/200',
      slug: '10x10-examination'
    }
  ];

  // Search filtering
  const filteredTreatments = allTreatments.filter(treatment =>
    treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="Our Treatments - Hospitadent"
        description="All dental treatments and services offered by Hospitadent. Cosmetic dentistry, implants, orthodontics and more."
        keywords="dental treatments, cosmetic dentistry, implants, orthodontics, pedodontics, periodontology, hospitadent"
        url="https://hospitadent.com/en/treatments"
      />
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 treatments-page">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Our Treatments
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-7xl mx-auto">
            
            {/* Search Section */}
            <div className="mb-12">
              <div className="max-w-lg mx-auto">
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                  <div className="flex-1 px-6 py-4">
                    <input
                      type="text"
                      placeholder="Search"
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

            {/* Treatment Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              
              {filteredTreatments.map((treatment) => (
                <div key={treatment.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#004876]/20 group flex flex-col h-full">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f4f78]/20 to-[#2bb3ea]/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-[#004876]/30">
                        🦷
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category */}
                    <div className="mb-2 -mt-1">
                      <span className="inline-block bg-blue-100 text-[#004876] text-xs font-semibold px-0.5 py-0 rounded-full">
                        {treatment.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0f4f78] mb-3 group-hover:text-[#2bb3ea] transition-colors duration-300 line-clamp-2">
                      {treatment.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#0f4f78]/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {treatment.description}
                    </p>
                    
                    {/* Detail Button */}
                    <a 
                      href={`/en/treatment/${treatment.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group mt-auto"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              
            </div>

            {/* No Results Found */}
            {filteredTreatments.length === 0 && searchTerm && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#004876] mb-2">
                  No Search Results Found
                </h3>
                <p className="text-gray-600 mb-6">
                  No results found for "{searchTerm}". You can try different keywords.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Show All Treatments
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Let's Determine the Most Suitable Treatment for You
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Book an appointment for free consultation with our expert dentists
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
                    href="/en/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0f4f78] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Us
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

export default EnTreatments; 