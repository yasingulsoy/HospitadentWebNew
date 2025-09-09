import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import { FaSearch, FaMapMarkerAlt, FaUserMd, FaTooth, FaPhone } from 'react-icons/fa';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState('all');
  
  const { results, loading } = useSearch(query);

  const filteredResults = activeTab === 'all' 
    ? results 
    : results.filter(item => item.type === activeTab);

  const getTabCount = (type) => {
    return results.filter(item => type === 'all' ? true : item.type === type).length;
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'service': return 'Hizmetler';
      case 'treatment': return 'Tedaviler';
      case 'page': return 'Sayfalar';
      case 'branch': return 'Şubeler';
      case 'contact': return 'İletişim';
      default: return 'Tümü';
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case 'service': return <FaTooth className="text-blue-600" />;
      case 'treatment': return <FaUserMd className="text-green-600" />;
      case 'page': return <FaMapMarkerAlt className="text-purple-600" />;
      case 'branch': return <FaMapMarkerAlt className="text-red-600" />;
      case 'contact': return <FaPhone className="text-blue-600" />;
      default: return <FaSearch className="text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-[#004876]">Arama Sonuçları</h1>
              <p className="text-gray-600 mt-1">
                "{query}" için {results.length} sonuç bulundu
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tablar */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['all', 'service', 'treatment', 'page', 'branch', 'contact'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {getTypeLabel(type)} ({getTabCount(type)})
            </button>
          ))}
        </div>

        {/* Sonuçlar */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Aranıyor...</span>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="text-center py-12">
            <FaSearch className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-[#004876]">Sonuç bulunamadı</h3>
            <p className="mt-1 text-sm text-gray-500">
              "{query}" için sonuç bulunamadı. Farklı anahtar kelimeler deneyin.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResults.map((item, index) => (
              <Link
                key={`${item.type}-${index}`}
                to={item.path}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                      {getIcon(item.type)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[#004876] mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Sayfalama veya daha fazla sonuç */}
        {filteredResults.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {filteredResults.length} sonuçtan {Math.min(filteredResults.length, 12)} tanesi gösteriliyor
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults; 