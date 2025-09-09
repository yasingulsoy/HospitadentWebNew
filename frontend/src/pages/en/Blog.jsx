import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const Blog = () => {
  const { t } = useTranslation();

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  // Blog yazıları verisi
  const blogPosts = [
    {
      id: 1,
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      content: t('blog.post1.content'),
      author: t('blog.post1.author'),
      date: '2024-01-15',
      category: t('blog.categories.dentalHealth'),
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      content: t('blog.post2.content'),
      author: t('blog.post2.author'),
      date: '2024-01-10',
      category: t('blog.categories.orthodontics'),
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      content: t('blog.post3.content'),
      author: t('blog.post3.author'),
      date: '2024-01-05',
      category: t('blog.categories.implant'),
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: t('blog.post4.title'),
      excerpt: t('blog.post4.excerpt'),
      content: t('blog.post4.content'),
      author: t('blog.post4.author'),
      date: '2023-12-28',
      category: t('blog.categories.cosmetic'),
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: t('blog.post5.title'),
      excerpt: t('blog.post5.excerpt'),
      content: t('blog.post5.content'),
      author: t('blog.post5.author'),
      date: '2023-12-20',
      category: t('blog.categories.pediatric'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: t('blog.post6.title'),
      excerpt: t('blog.post6.excerpt'),
      content: t('blog.post6.content'),
      author: t('blog.post6.author'),
      date: '2023-12-15',
      category: t('blog.categories.technology'),
      image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=250&fit=crop'
    }
  ];

  return (
    <>
      <SEOHead 
        title={t('blog.pageTitle')}
        description={t('blog.pageDescription')}
        keywords={t('blog.pageKeywords')}
        url="https://hospitadent.com/en/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Hospitadent Blog",
          "description": t('blog.pageDescription'),
          "url": "https://hospitadent.com/en/blog",
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
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        {t('blog.readMore')} →
                      </button>
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