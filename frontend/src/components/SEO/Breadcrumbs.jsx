import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = ({ customBreadcrumbs = null }) => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Generate breadcrumbs from URL path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [
      { name: t('breadcrumbs.home'), path: '/', current: pathSegments.length === 0 }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Map URL segments to readable names
      const segmentName = getSegmentName(segment, t);
      
      breadcrumbs.push({
        name: segmentName,
        path: currentPath,
        current: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  // Map URL segments to readable names
  const getSegmentName = (segment, t) => {
    const segmentMap = {
      'hakkimizda': t('breadcrumbs.about'),
      'about': t('breadcrumbs.about'),
      'tedaviler': t('breadcrumbs.treatments'),
      'treatments': t('breadcrumbs.treatments'),
      'subelerimiz': t('breadcrumbs.branches'),
      'branches': t('breadcrumbs.branches'),
      'idari-kadro': t('breadcrumbs.staff'),
      'staff': t('breadcrumbs.staff'),
      'hasta-memnuniyet-videolari': t('breadcrumbs.patientVideos'),
      'patient-satisfaction-videos': t('breadcrumbs.patientVideos'),
      'hasta-yorumlari': t('breadcrumbs.patientReviews'),
      'patient-reviews': t('breadcrumbs.patientReviews'),
      'blog': t('breadcrumbs.blog'),
      'iletisim': t('breadcrumbs.contact'),
      'contact': t('breadcrumbs.contact'),
      'akademi': t('breadcrumbs.academy'),
      'academy': t('breadcrumbs.academy'),
      'anlasmali-kurumlar': t('breadcrumbs.partnerInstitutions'),
      'partner-institutions': t('breadcrumbs.partnerInstitutions'),
      'odullerimiz': t('breadcrumbs.awards'),
      'awards': t('breadcrumbs.awards'),
      'kurumsal-kimlik': t('breadcrumbs.corporateIdentity'),
      'corporate-identity': t('breadcrumbs.corporateIdentity'),
      'hospitadent-sosyal-sorumluluk': t('breadcrumbs.socialResponsibility'),
      'social-responsibility': t('breadcrumbs.socialResponsibility'),
      'arama': t('breadcrumbs.search'),
      'search': t('breadcrumbs.search'),
      'en': 'English',
      'fr': 'Français',
      'de': 'Deutsch',
      'ru': 'Русский',
      'es': 'Español',
      'sa': 'العربية'
    };

    return segmentMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  const breadcrumbs = customBreadcrumbs || generateBreadcrumbs();

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": `https://hospitadent.com${breadcrumb.path}`
    }))
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Visual Breadcrumbs */}
      <nav className="py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg 
                    className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
                
                {breadcrumb.current ? (
                  <span 
                    className="text-[#004876] font-medium"
                    aria-current="page"
                  >
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link
                    to={breadcrumb.path}
                    className="text-gray-600 hover:text-[#2bb3ea] transition-colors duration-200"
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs; 