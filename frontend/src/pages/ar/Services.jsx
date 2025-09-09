import React from 'react';
import SEOHead from '../../components/SEO/SEOHead';

const Services = () => {

  return (
    <>
      <SEOHead 
        title="خدماتنا - Hospitadent"
        description="اكتشف خدماتنا الشاملة والمهنية لرعاية الأسنان في Hospitadent."
        keywords="خدمات الأسنان, زراعة الأسنان, تقويم الأسنان, تبييض الأسنان, السعودية"
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl font-bold text-blue-700" dir="rtl">
        <h1>خدماتنا لرعاية الأسنان</h1>
        <p className="text-lg mt-4 text-gray-600">
          الصفحة قيد التطوير - المحتوى والصور قريباً
        </p>
      </div>
    </>
  );
};

export default Services; 