import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components';
import SEOHead from '../components/SEO/SEOHead';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  // Blog yazısını bul
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Yazısı Bulunamadı</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            ← Blog'a Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, diş hekimliği, hospitadent, ${post.title}`}
        url={`https://hospitadent.com/blog/${post.slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "author": {
            "@type": "Organization",
            "name": post.author
          },
          "datePublished": post.date,
          "publisher": {
            "@type": "Organization",
            "name": "Hospitadent"
          },
          "url": `https://hospitadent.com/blog/${post.slug}`
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
                ← Blog'a Geri Dön
              </Link>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#004876] mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{t('blog.by')} {post.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {post.content}
                  </p>
                </div>
                
                {/* Related Posts */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-[#004876] mb-6">
                    Benzer Yazılar
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts
                      .filter(p => p.id !== post.id && p.category === post.category)
                      .slice(0, 2)
                      .map((relatedPost) => (
                        <Link 
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.slug}`}
                          className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                        >
                          <h4 className="font-semibold text-[#004876] mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost; 