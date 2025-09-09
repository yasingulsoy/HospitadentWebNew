import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {

  const services = [
    {
      title: "Dental Implants",
      description: "Advanced implant solutions for natural-looking, permanent teeth replacement",
      icon: "🦷",
      features: ["Single tooth implants", "Full arch restoration", "All-on-4 technique", "Immediate loading"]
    },
    {
      title: "Orthodontics",
      description: "Comprehensive orthodontic treatments for perfect smile alignment",
      icon: "😁",
      features: ["Traditional braces", "Clear aligners", "Ceramic braces", "Lingual braces"]
    },
    {
      title: "Aesthetic Dentistry",
      description: "Transform your smile with advanced cosmetic dental procedures",
      icon: "✨",
      features: ["Teeth whitening", "Porcelain veneers", "Dental bonding", "Smile makeover"]
    },
    {
      title: "Endodontics",
      description: "Root canal treatments with advanced technology and minimal discomfort",
      icon: "🔬",
      features: ["Root canal therapy", "Apicoectomy", "Pulp capping", "Retreatment"]
    },
    {
      title: "Periodontics",
      description: "Comprehensive gum health treatments and periodontal care",
      icon: "🦷",
      features: ["Gum disease treatment", "Gum grafting", "Crown lengthening", "Dental cleaning"]
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment",
      icon: "👶",
      features: ["Child-friendly care", "Preventive treatments", "Early orthodontics", "Dental education"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dental Services - Hospitadent</title>
        <meta name="description" content="Comprehensive dental services including implants, orthodontics, aesthetic dentistry, and more. Expert care with advanced technology." />
        <meta property="og:title" content="Dental Services - Hospitadent" />
        <meta property="og:description" content="Comprehensive dental services including implants, orthodontics, aesthetic dentistry, and more. Expert care with advanced technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hospitadent.com/en/services" />
        <link rel="canonical" href="https://hospitadent.com/en/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#004876] to-[#2bb3ea] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Our Dental Services</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive dental care with cutting-edge technology and expert professionals
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-[#004876] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-[#004876] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#004876] mb-4">Advanced Technology</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We use the latest dental technology to ensure precise, comfortable, and effective treatments
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#004876] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004876] mb-2">3D Digital Scanning</h3>
                <p className="text-gray-700">Precise digital impressions for accurate treatment planning</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#004876] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004876] mb-2">Laser Dentistry</h3>
                <p className="text-gray-700">Minimally invasive treatments with advanced laser technology</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#004876] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004876] mb-2">CAD/CAM Technology</h3>
                <p className="text-gray-700">Same-day crowns and restorations with computer-aided design</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#004876] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your consultation today and discover how our expert team can help you achieve the smile you've always wanted.
            </p>
            <button className="bg-white text-[#004876] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              Book Consultation
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services; 