import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      content: t('blog.post1.content'),
      author: t('blog.post1.author'),
      category: t('blog.categories.dentalHealth'),
      date: '2024-01-15'
    },
    {
      id: 2,
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      content: t('blog.post2.content'),
      author: t('blog.post2.author'),
      category: t('blog.categories.orthodontics'),
      date: '2024-01-10'
    },
    {
      id: 3,
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      content: t('blog.post3.content'),
      author: t('blog.post3.author'),
      category: t('blog.categories.implant'),
      date: '2024-01-08'
    },
    {
      id: 4,
      title: t('blog.post4.title'),
      excerpt: t('blog.post4.excerpt'),
      content: t('blog.post4.content'),
      author: t('blog.post4.author'),
      category: t('blog.categories.cosmetic'),
      date: '2024-01-05'
    },
    {
      id: 5,
      title: t('blog.post5.title'),
      excerpt: t('blog.post5.excerpt'),
      content: t('blog.post5.content'),
      author: t('blog.post5.author'),
      category: t('blog.categories.pediatric'),
      date: '2024-01-03'
    },
    {
      id: 6,
      title: t('blog.post6.title'),
      excerpt: t('blog.post6.excerpt'),
      content: t('blog.post6.content'),
      author: t('blog.post6.author'),
      category: t('blog.categories.technology'),
      date: '2024-01-01'
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('blog.pageTitle')}
        description={t('blog.pageDescription')}
        keywords={t('blog.pageKeywords')}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#004876] mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-3">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-[#004876] mb-3">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {t('blog.by')} {post.author}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    {t('blog.readMore')} →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            {t('blog.loadMore')}
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog; 