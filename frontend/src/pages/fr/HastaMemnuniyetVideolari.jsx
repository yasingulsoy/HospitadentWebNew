import React from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const HastaMemnuniyetVideolari = () => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title="Vidéos de Satisfaction des Patients - Hospitadent"
        description="Regardez les témoignages de nos patients satisfaits et découvrez leurs expériences de traitement."
        keywords="satisfaction patient, témoignages dentaires, avis hospitadent, expériences traitement dentaire"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Vidéos de Satisfaction des Patients
          </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Video 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/qofrrtPGg4Y" 
                    title="Avis Patients - Christopher Marik - Implant et Revêtement Zircone" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Christopher Marik
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Traitement Implant et Revêtement Zircone
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/xGXq5IDvka0" 
                    title="Avis Patients - Autriche - Christine Marik - Implant et Revêtement Zircone" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Christine Marik
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Autriche - Traitement Implant et Revêtement Zircone
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/EBfMoRDf6hg" 
                    title="France - İlknur B. | Hollywood Smile - Avis Patients" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    İlknur B.
                  </h3>
                  <p className="text-[#004876] text-sm">
                    France - Traitement Hollywood Smile
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 4 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/Ytnw8cVQnOM" 
                    title="Avis Patients - Pays-Bas - İsmihan Demirkıran - Implant" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    İsmihan Demirkıran
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Pays-Bas - Traitement Implant
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 5 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/QMhaYqip2_k" 
                    title="Hospitadent - Interviews de Patients" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Interviews de Patients
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 6 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/Q3D0j9iFD3A" 
                    title="Avis de Notre Précieux Patient de France | HOSPİTADENT" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient de France
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Avis de Notre Précieux Patient de France
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 7 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/ps_-kehkKIU" 
                    title="Expériences de Notre Précieux Patient Abdulghani Azim du Maroc Concernant le Traitement Implant" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Abdulghani Azim
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Maroc - Expériences de Traitement Implant
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 8 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/RR00RJyt8jY" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 9 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/V3O27h1dDaE" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 10 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/-7dQ51XkWcc" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 11 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/WubqzUxaZ6Q" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 12 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/c7ybBtyI1us" 
                    title="Avis Post-Traitement de Notre Précieux Patient de France | HOSPİTADENT" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient de France
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Avis Post-Traitement de Notre Précieux Patient de France
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 13 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/dfCuy76IOn4" 
                    title="Avis Patients - USA | Kemal BOZKURT" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
              </div>
              <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Kemal BOZKURT
                </h3>
                  <p className="text-[#004876] text-sm">
                    USA - Avis Patients
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 14 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/8c_7TtYPcEo" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
            </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
        </div>

              {/* Video 15 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/y1reMbcFHXQ" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 16 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/i3yFyP-hGlA" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
              </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 17 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/RFybGIKygRQ" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
            </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 18 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/zzOrPGK1niE" 
                    title="Témoignages Hospitadent" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Témoignages Patients
              </h3>
                  <p className="text-[#004876] text-sm">
                    Expériences de Patients Hospitadent
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 19 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/RgzOgizzRKY" 
                    title="Necdet Çırağ - Allemagne" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
            </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Necdet Çırağ
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Allemagne - Expérience Patient
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

              {/* Video 20 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="256" 
                    src="https://www.youtube.com/embed/B4Q8Tr7E0pk" 
                    title="Film Promotionnel Hospitadent Bodrum" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Hospitadent Bodrum
              </h3>
                  <p className="text-[#004876] text-sm">
                    Film Promotionnel
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#004876">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <a 
                href="https://www.youtube.com/c/HospitadentTV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block"
              >
                Plus d'Expériences de Bonheur
              </a>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HastaMemnuniyetVideolari; 