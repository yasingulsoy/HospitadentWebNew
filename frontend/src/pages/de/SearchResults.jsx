import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    // Simüle edilmiş arama sonuçları
    const mockResults = [
      {
        id: 1,
        title: 'Zahnimplantat-Behandlung',
        excerpt: 'Professionelle Zahnimplantat-Behandlung mit modernster Technologie...',
        url: '/de/services',
        category: 'Dienstleistungen'
      },
      {
        id: 2,
        title: 'Über Hospitadent',
        excerpt: 'Erfahren Sie unsere Geschichte, Mission und Werte...',
        url: '/de/uber-uns',
        category: 'Über uns'
      },
      {
        id: 3,
        title: 'Unsere Filialen',
        excerpt: 'Finden Sie die Hospitadent-Filiale in Ihrer Nähe...',
        url: '/de/filialen',
        category: 'Filialen'
      }
    ];

    // Arama sorgusuna göre filtreleme
    const filteredResults = mockResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    setTimeout(() => {
      setResults(filteredResults);
      setLoading(false);
    }, 500);
  }, [query]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{t('searchResults.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={t('searchResults.title')}
        description={t('searchResults.description')}
        keywords={t('searchResults.keywords')}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#004876] mb-4">
              {t('searchResults.title')}
            </h1>
            {query && (
              <p className="text-lg text-gray-600">
                {t('searchResults.query')}: <span className="font-semibold">"{query}"</span>
              </p>
            )}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                {t('searchResults.noResults')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('searchResults.noResultsDesc')}
              </p>
              <div className="space-y-2">
                <p className="text-gray-500">{t('searchResults.suggestions')}:</p>
                <ul className="text-gray-600">
                  <li>• {t('searchResults.suggestion1')}</li>
                  <li>• {t('searchResults.suggestion2')}</li>
                  <li>• {t('searchResults.suggestion3')}</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-gray-600">
                {t('searchResults.found')} <span className="font-semibold">{results.length}</span> {t('searchResults.results')}
              </p>
              
              {results.map((result) => (
                <div key={result.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-[#004876] mb-2">
                        <a href={result.url} className="hover:text-blue-600 transition-colors">
                          {result.title}
                        </a>
                      </h2>
                      <p className="text-gray-600 mb-3">
                        {result.excerpt}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {result.category}
                        </span>
                        <a 
                          href={result.url}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          {t('searchResults.readMore')} →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults; 