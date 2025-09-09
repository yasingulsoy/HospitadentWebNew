import React, { useState } from 'react';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const FrTreatments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // Dentisterie Esthétique
    {
      id: 'hollywood-smile',
      title: 'Hollywood Smile',
      category: 'Dentisterie Esthétique',
      description: 'Obtenez votre sourire de rêve avec un design parfait.',
      image: '/api/placeholder/300/200',
      slug: 'hollywood-smile'
    },
    {
      id: 'smile-design',
      title: 'Design du Sourire',
      category: 'Dentisterie Esthétique',
      description: 'Design de sourire esthétique personnalisé avec planification numérique.',
      image: '/api/placeholder/300/200',
      slug: 'smile-design'
    },
    {
      id: 'teeth-whitening',
      title: 'Blanchiment des Dents',
      category: 'Dentisterie Esthétique',
      description: 'Applications de blanchiment rapides et sûres avec des méthodes modernes.',
      image: '/api/placeholder/300/200',
      slug: 'teeth-whitening'
    },
    {
      id: 'pink-aesthetics',
      title: 'Esthétique Rose',
      category: 'Dentisterie Esthétique',
      description: 'Sourire parfait avec l\'esthétique des gencives.',
      image: '/api/placeholder/300/200',
      slug: 'pink-aesthetics'
    },
    {
      id: 'laminate-veneer',
      title: 'Facette Laminate',
      category: 'Dentisterie Esthétique',
      description: 'Facettes en porcelaine esthétiques et fines.',
      image: '/api/placeholder/300/200',
      slug: 'laminate-veneer'
    },
    {
      id: 'zirconium-crown',
      title: 'Couronne Zircone',
      category: 'Dentisterie Esthétique',
      description: 'Solutions de couronne dentaire naturelles, durables et esthétiques.',
      image: '/api/placeholder/300/200',
      slug: 'zirconium-crown'
    },
    {
      id: 'porcelain-crown',
      title: 'Couronne Porcelaine',
      category: 'Dentisterie Esthétique',
      description: 'Couronnes dentaires en porcelaine durables et naturelles.',
      image: '/api/placeholder/300/200',
      slug: 'porcelain-crown'
    },
    {
      id: 'lumineers-veneer',
      title: 'Facette Lumineers',
      category: 'Dentisterie Esthétique',
      description: 'Système de facette en porcelaine fine et transparente.',
      image: '/api/placeholder/300/200',
      slug: 'lumineers-veneer'
    },
    {
      id: 'emax-crown',
      title: 'Couronne Emax',
      category: 'Dentisterie Esthétique',
      description: 'Couronnes dentaires Emax avec haute esthétique et durabilité.',
      image: '/api/placeholder/300/200',
      slug: 'emax-crown'
    },
    {
      id: 'aesthetic-filling',
      title: 'Obturation Esthétique',
      category: 'Dentisterie Esthétique',
      description: 'Obturations dentaires esthétiques naturelles.',
      image: '/api/placeholder/300/200',
      slug: 'aesthetic-filling'
    },
    {
      id: 'bisectomy',
      title: 'Bisectomie',
      category: 'Dentisterie Esthétique',
      description: 'Procédure chirurgicale pour l\'esthétique des gencives.',
      image: '/api/placeholder/300/200',
      slug: 'bisectomy'
    },
    {
      id: 'laser-dental-treatment',
      title: 'Traitement Dentaire Laser',
      category: 'Dentisterie Esthétique',
      description: 'Traitements dentaires avec technologie laser moderne.',
      image: '/api/placeholder/300/200',
      slug: 'laser-dental-treatment'
    },
    {
      id: 'inlay-filling',
      title: 'Obturation Inlay',
      category: 'Dentisterie Esthétique',
      description: 'Technique d\'obturation précise et esthétique.',
      image: '/api/placeholder/300/200',
      slug: 'inlay-filling'
    },
    {
      id: 'onlay-filling',
      title: 'Obturation Onlay',
      category: 'Dentisterie Esthétique',
      description: 'Restauration d\'obturation complète.',
      image: '/api/placeholder/300/200',
      slug: 'onlay-filling'
    },
    {
      id: 'dental-diamond',
      title: 'Diamant Dentaire',
      category: 'Dentisterie Esthétique',
      description: 'Application de diamant sur les dents.',
      image: '/api/placeholder/300/200',
      slug: 'dental-diamond'
    },
    {
      id: 'dental-tattoo',
      title: 'Tatouage Dentaire',
      category: 'Dentisterie Esthétique',
      description: 'Application de tatouage décoratif sur les dents.',
      image: '/api/placeholder/300/200',
      slug: 'dental-tattoo'
    },
    {
      id: 'dental-jewelry',
      title: 'Bijou Dentaire',
      category: 'Dentisterie Esthétique',
      description: 'Application de bijoux sur les dents.',
      image: '/api/placeholder/300/200',
      slug: 'dental-jewelry'
    },
    {
      id: 'bonding-treatment',
      title: 'Traitement Bonding',
      category: 'Dentisterie Esthétique',
      description: 'Applications de bonding esthétiques pour les petits défauts dentaires.',
      image: '/api/placeholder/300/200',
      slug: 'bonding-treatment'
    },

    // Dents Manquantes
    {
      id: 'dental-bridge',
      title: 'Bridge Dentaire',
      category: 'Dents Manquantes',
      description: 'Prothèse bridge fixe pour les dents manquantes.',
      image: '/api/placeholder/300/200',
      slug: 'dental-bridge'
    },
    {
      id: 'denture',
      title: 'Prothèse Dentaire',
      category: 'Dents Manquantes',
      description: 'Solutions de prothèse dentaire amovible.',
      image: '/api/placeholder/300/200',
      slug: 'denture'
    },
    {
      id: 'fixed-prosthesis',
      title: 'Prothèse Fixe',
      category: 'Dents Manquantes',
      description: 'Applications de prothèse dentaire fixe.',
      image: '/api/placeholder/300/200',
      slug: 'fixed-prosthesis'
    },
    {
      id: 'snap-on-denture',
      title: 'Prothèse à Clip',
      category: 'Dents Manquantes',
      description: 'Système de prothèse dentaire à clip.',
      image: '/api/placeholder/300/200',
      slug: 'snap-on-denture'
    },
    {
      id: 'full-mouth-treatment',
      title: 'Traitement Dentaire Complet',
      category: 'Dents Manquantes',
      description: 'Traitement dentaire complet pour toute la bouche.',
      image: '/api/placeholder/300/200',
      slug: 'full-mouth-treatment'
    },

    // Implant
    {
      id: 'single-tooth-implant',
      title: 'Implant Dent Unique',
      category: 'Implant',
      description: 'Traitement d\'implant pour une dent unique.',
      image: '/api/placeholder/300/200',
      slug: 'single-tooth-implant'
    },
    {
      id: 'full-mouth-implant',
      title: 'Implant Bouche Complète',
      category: 'Implant',
      description: 'Traitement d\'implant pour toute la bouche.',
      image: '/api/placeholder/300/200',
      slug: 'full-mouth-implant'
    },
    {
      id: 'multiple-tooth-implant',
      title: 'Implant Dents Multiples',
      category: 'Implant',
      description: 'Traitement d\'implant pour plusieurs dents.',
      image: '/api/placeholder/300/200',
      slug: 'multiple-tooth-implant'
    },
    {
      id: 'one-day-implant',
      title: 'Implant en Un Jour',
      category: 'Implant',
      description: 'Traitement d\'implant en un jour.',
      image: '/api/placeholder/300/200',
      slug: 'one-day-implant'
    },
    {
      id: 'all-on-four',
      title: 'All on Four',
      category: 'Implant',
      description: 'Technique d\'implant All on Four.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-four'
    },
    {
      id: 'all-on-six',
      title: 'All on Six',
      category: 'Implant',
      description: 'Technique d\'implant All on Six.',
      image: '/api/placeholder/300/200',
      slug: 'all-on-six'
    },
    {
      id: 'box-technique',
      title: 'Technique Box',
      category: 'Implant',
      description: 'Technique d\'implant Box.',
      image: '/api/placeholder/300/200',
      slug: 'box-technique'
    },

    // Traitements Dentaires Généraux
    {
      id: 'dental-examination',
      title: 'Examen Dentaire',
      category: 'Traitements Dentaires Généraux',
      description: 'Examen dentaire complet.',
      image: '/api/placeholder/300/200',
      slug: 'dental-examination'
    },
    {
      id: 'crown-veneer',
      title: 'Facette Couronne',
      category: 'Traitements Dentaires Généraux',
      description: 'Qu\'est-ce qu\'une facette couronne et comment est-elle fabriquée.',
      image: '/api/placeholder/300/200',
      slug: 'crown-veneer'
    },
    {
      id: 'dental-filling',
      title: 'Obturation Dentaire',
      category: 'Traitements Dentaires Généraux',
      description: 'Comment l\'obturation dentaire est-elle effectuée et quels sont ses types.',
      image: '/api/placeholder/300/200',
      slug: 'dental-filling'
    },
    {
      id: 'root-canal-treatment',
      title: 'Traitement Canal Radiculaire',
      category: 'Traitements Dentaires Généraux',
      description: 'Comment le traitement canal radiculaire est-il effectué et fait-il mal.',
      image: '/api/placeholder/300/200',
      slug: 'root-canal-treatment'
    },
    {
      id: 'tooth-extraction',
      title: 'Extraction Dentaire',
      category: 'Traitements Dentaires Généraux',
      description: 'Qu\'est-ce que l\'extraction dentaire et comment est-elle effectuée.',
      image: '/api/placeholder/300/200',
      slug: 'tooth-extraction'
    },
    {
      id: 'impacted-tooth-extraction',
      title: 'Extraction Dent Incluse',
      category: 'Traitements Dentaires Généraux',
      description: 'Qu\'est-ce que l\'extraction de dent incluse.',
      image: '/api/placeholder/300/200',
      slug: 'impacted-tooth-extraction'
    },
    {
      id: 'wisdom-tooth-extraction',
      title: 'Extraction Dent de Sagesse',
      category: 'Traitements Dentaires Généraux',
      description: 'Extraction des dents de sagesse.',
      image: '/api/placeholder/300/200',
      slug: 'wisdom-tooth-extraction'
    },
    {
      id: 'broken-tooth-treatment',
      title: 'Traitement Dent Cassée',
      category: 'Traitements Dentaires Généraux',
      description: 'Qu\'est-ce que le traitement de dent cassée.',
      image: '/api/placeholder/300/200',
      slug: 'broken-tooth-treatment'
    },

    // Traitements Dentaires Préventifs
    {
      id: 'bad-breath',
      title: 'Mauvaise Haleine',
      category: 'Traitements Dentaires Préventifs',
      description: 'Qu\'est-ce que la mauvaise haleine et comment est-elle traitée.',
      image: '/api/placeholder/300/200',
      slug: 'bad-breath'
    },
    {
      id: 'tooth-sensitivity',
      title: 'Sensibilité Dentaire',
      category: 'Traitements Dentaires Préventifs',
      description: 'Qu\'est-ce que la sensibilité dentaire et comment est-elle traitée.',
      image: '/api/placeholder/300/200',
      slug: 'tooth-sensitivity'
    },
    {
      id: 'teeth-grinding',
      title: 'Grincement des Dents',
      category: 'Traitements Dentaires Préventifs',
      description: 'Qu\'est-ce que le grincement des dents et comment est-il traité.',
      image: '/api/placeholder/300/200',
      slug: 'teeth-grinding'
    },
    {
      id: 'teeth-grinding-treatment',
      title: 'Traitement Grincement des Dents',
      category: 'Traitements Dentaires Préventifs',
      description: 'Qu\'est-ce que le traitement du grincement des dents et comment est-il effectué.',
      image: '/api/placeholder/300/200',
      slug: 'teeth-grinding-treatment'
    },
    {
      id: 'snoring-treatment',
      title: 'Traitement Ronflement',
      category: 'Traitements Dentaires Préventifs',
      description: 'Qu\'est-ce que le traitement du ronflement et comment est-il appliqué.',
      image: '/api/placeholder/300/200',
      slug: 'snoring-treatment'
    },

    // Orthodontie
    {
      id: 'braces-treatment',
      title: 'Traitement Appareil Dentaire',
      category: 'Orthodontie',
      description: 'Qu\'est-ce que le traitement d\'appareil dentaire et comment est-il appliqué.',
      image: '/api/placeholder/300/200',
      slug: 'braces-treatment'
    },
    {
      id: 'clear-bracket-treatment',
      title: 'Traitement Bracket Transparent',
      category: 'Orthodontie',
      description: 'Traitement orthodontique avec bracket transparent.',
      image: '/api/placeholder/300/200',
      slug: 'clear-bracket-treatment'
    },
    {
      id: 'invisalign-treatment',
      title: 'Traitement Invisalign',
      category: 'Orthodontie',
      description: 'Traitement Invisalign avec aligneurs transparents.',
      image: '/api/placeholder/300/200',
      slug: 'invisalign-treatment'
    },
    {
      id: 'invisible-braces-treatment',
      title: 'Traitement Appareil Invisible',
      category: 'Orthodontie',
      description: 'Traitement orthodontique invisible.',
      image: '/api/placeholder/300/200',
      slug: 'invisible-braces-treatment'
    },

    // Pédodontie
    {
      id: 'fluoride-application',
      title: 'Application Fluor',
      category: 'Pédodontie',
      description: 'Application de fluor pour protéger les dents.',
      image: '/api/placeholder/300/200',
      slug: 'fluoride-application'
    },
    {
      id: 'fissure-sealant',
      title: 'Scellement Fissure',
      category: 'Pédodontie',
      description: 'Protection des fissures dentaires.',
      image: '/api/placeholder/300/200',
      slug: 'fissure-sealant'
    },
    {
      id: 'pediatric-orthodontic-treatment',
      title: 'Traitement Orthodontique Pédiatrique',
      category: 'Pédodontie',
      description: 'Qu\'est-ce que le traitement orthodontique pédiatrique.',
      image: '/api/placeholder/300/200',
      slug: 'pediatric-orthodontic-treatment'
    },
    {
      id: 'baby-bottle-tooth-decay',
      title: 'Carie Biberon',
      category: 'Pédodontie',
      description: 'Qu\'est-ce que la carie du biberon.',
      image: '/api/placeholder/300/200',
      slug: 'baby-bottle-tooth-decay'
    },
    {
      id: 'space-maintainer-treatment',
      title: 'Traitement Mainteneur d\'Espace',
      category: 'Pédodontie',
      description: 'Qu\'est-ce que le traitement mainteneur d\'espace.',
      image: '/api/placeholder/300/200',
      slug: 'space-maintainer-treatment'
    },

    // Parodontologie
    {
      id: 'gum-treatment',
      title: 'Traitement Gencive',
      category: 'Parodontologie',
      description: 'Traitement des maladies des gencives.',
      image: '/api/placeholder/300/200',
      slug: 'gum-treatment'
    },
    {
      id: 'curettage-treatment',
      title: 'Traitement Curettage',
      category: 'Parodontologie',
      description: 'Qu\'est-ce que le traitement de curettage.',
      image: '/api/placeholder/300/200',
      slug: 'curettage-treatment'
    },
    {
      id: 'flap-treatment',
      title: 'Traitement Lambeau',
      category: 'Parodontologie',
      description: 'Traitement chirurgical pour les gencives.',
      image: '/api/placeholder/300/200',
      slug: 'flap-treatment'
    },
    {
      id: 'gingivitis',
      title: 'Gingivite',
      category: 'Parodontologie',
      description: 'Inflammation des gencives et gingivite.',
      image: '/api/placeholder/300/200',
      slug: 'gingivitis'
    },
    {
      id: 'dental-calculus-cleaning',
      title: 'Nettoyage Tartre',
      category: 'Parodontologie',
      description: 'Qu\'est-ce que le nettoyage du tartre et comment est-il effectué.',
      image: '/api/placeholder/300/200',
      slug: 'dental-calculus-cleaning'
    },

    // Traitements Dentaires Spéciaux
    {
      id: 'digital-dentistry',
      title: 'Dentisterie Numérique',
      category: 'Traitements Dentaires Spéciaux',
      description: 'Dentisterie numérique et design dentaire.',
      image: '/api/placeholder/300/200',
      slug: 'digital-dentistry'
    },
    {
      id: 'needle-free-anesthesia',
      title: 'Anesthésie Sans Aiguille',
      category: 'Traitements Dentaires Spéciaux',
      description: 'Application d\'anesthésie sans aiguille.',
      image: '/api/placeholder/300/200',
      slug: 'needle-free-anesthesia'
    },
    {
      id: 'sedation-and-general-anesthesia',
      title: 'Sédation et Anesthésie Générale',
      category: 'Traitements Dentaires Spéciaux',
      description: 'Sédation et anesthésie générale pour les traitements.',
      image: '/api/placeholder/300/200',
      slug: 'sedation-and-general-anesthesia'
    },
    {
      id: 'rubber-dam-application',
      title: 'Application Digue',
      category: 'Traitements Dentaires Spéciaux',
      description: 'Application de digue pour l\'isolation.',
      image: '/api/placeholder/300/200',
      slug: 'rubber-dam-application'
    },
    {
      id: 'jaw-tumor',
      title: 'Tumeur Mâchoire',
      category: 'Traitements Dentaires Spéciaux',
      description: 'Traitement de tumeur de la mâchoire.',
      image: '/api/placeholder/300/200',
      slug: 'jaw-tumor'
    },
    {
      id: 'jaw-fracture-treatment',
      title: 'Traitement Fracture Mâchoire',
      category: 'Traitements Dentaires Spéciaux',
      description: 'Traitement chirurgical pour les fractures de la mâchoire.',
      image: '/api/placeholder/300/200',
      slug: 'jaw-fracture-treatment'
    },
    {
      id: 'dental-spa',
      title: 'Spa Dentaire',
      category: 'Traitements Dentaires Spéciaux',
      description: 'Services de spa dentaire relaxants.',
      image: '/api/placeholder/300/200',
      slug: 'dental-spa'
    },
    {
      id: '10x10-examination',
      title: 'Examen 10 X 10',
      category: 'Traitements Dentaires Spéciaux',
      description: 'Examen dentaire complet 10x10.',
      image: '/api/placeholder/300/200',
      slug: '10x10-examination'
    }
  ];

  // Filtrage de recherche
  const filteredTreatments = allTreatments.filter(treatment =>
    treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="Nos Traitements - Hospitadent"
        description="Tous les traitements dentaires et services offerts par Hospitadent. Dentisterie esthétique, implants, orthodontie et plus encore."
        keywords="traitements dentaires, dentisterie esthétique, implants, orthodontie, pédodontie, parodontologie, hospitadent"
        url="https://hospitadent.com/fr/traitements"
      />
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 treatments-page">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              Nos Traitements
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-7xl mx-auto">
            
            {/* Section de Recherche */}
            <div className="mb-12">
              <div className="max-w-lg mx-auto">
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                  <div className="flex-1 px-6 py-4">
                    <input
                      type="text"
                      placeholder="Recherche"
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

            {/* Grille des Cartes de Traitement */}
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
                  
                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Catégorie */}
                    <div className="mb-2 -mt-1">
                      <span className="inline-block bg-blue-100 text-[#004876] text-xs font-semibold px-0.5 py-0 rounded-full">
                        {treatment.category}
                      </span>
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-xl font-bold text-[#0f4f78] mb-3 group-hover:text-[#2bb3ea] transition-colors duration-300 line-clamp-2">
                      {treatment.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#0f4f78]/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {treatment.description}
                    </p>
                    
                    {/* Bouton Détail */}
                    <a 
                      href={`/fr/traitement/${treatment.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group mt-auto"
                    >
                      Voir les Détails
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              
            </div>

            {/* Aucun Résultat Trouvé */}
            {filteredTreatments.length === 0 && searchTerm && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#004876] mb-2">
                  Aucun Résultat de Recherche Trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Aucun résultat trouvé pour "{searchTerm}". Vous pouvez essayer différents mots-clés.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Afficher Tous les Traitements
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Déterminons le Traitement le Plus Adapté pour Vous
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  Prenez rendez-vous pour une consultation gratuite avec nos dentistes experts
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
                    href="/fr/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0f4f78] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Nous Contacter
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

export default FrTreatments; 