import React from 'react';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const HastaMemnuniyetVideolari = () => {
  // 't' değişkenini kaldırdım

  return (
    <>
      <SEOHead 
        title="Patient Satisfaction Videos - Hospitadent"
        description="Watch testimonials from our satisfied patients and learn about their treatment experiences."
        keywords="patient satisfaction, dental testimonials, hospitadent reviews, dental treatment experiences"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Patient Satisfaction Videos
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
                    title="Patient Reviews - Christopher Marik - Implant and Zirconium Coating" 
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
                    Implant and Zirconium Coating Treatment
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
                    title="Patient Reviews - Austria - Christine Marik - Implant and Zirconium Coating" 
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
                    Austria - Implant and Zirconium Coating Treatment
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
                    title="France - İlknur B. | Hollywood Smile - Patient Reviews" 
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
                    France - Hollywood Smile Treatment
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
                    title="Patient Reviews - Netherlands - İsmihan Demirkıran - Implant" 
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
                    Netherlands - Implant Treatment
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
                    title="Hospitadent - Patient Interviews" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Interviews
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Opinions of Our Valuable Patient from France | HOSPİTADENT" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient from France
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Opinions of Our Valuable Patient from France
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
                    title="Experiences of Our Valuable Patient Abdulghani Azim from Morocco Regarding Implant Treatment" 
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
                    Morocco - Implant Treatment Experiences
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Post-Treatment Opinions of Our Valuable Patient from France | HOSPİTADENT" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient from France
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Post-Treatment Opinions of Our Valuable Patient from France
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
                    title="Patient Reviews - USA | Kemal BOZKURT" 
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
                    USA - Patient Reviews
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
            </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
              </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
            </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
                  </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Hospitadent Testimonials" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004876] mb-2">
                    Patient Testimonials
              </h3>
                  <p className="text-[#004876] text-sm">
                    Hospitadent Patient Experiences
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
                    title="Necdet Çırağ - Germany" 
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
                    Germany - Patient Experience
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
                    title="Hospitadent Bodrum Promotional Film" 
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
                    Promotional Film
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
                More Happiness Experiences
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