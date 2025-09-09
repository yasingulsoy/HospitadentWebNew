import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Footer } from '../components';
import SEOHead from '../components/SEO/SEOHead';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  const { t } = useTranslation();

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  // Blog yazıları verisi artık blogData.js'den geliyor

  return (
    <>
      <SEOHead 
        title={t('blog.pageTitle')}
        description={t('blog.pageDescription')}
        keywords={t('blog.pageKeywords')}
        url="https://hospitadent.com/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Hospitadent Blog",
          "description": t('blog.pageDescription'),
          "url": "https://hospitadent.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Hospitadent"
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-6xl mx-auto">
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#004876] mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {t('blog.by')} {post.author}
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        {t('blog.readMore')} →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-[#0f4f78] hover:to-[#2bb3ea] transition-all">
                {t('blog.loadMore')}
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blog; 