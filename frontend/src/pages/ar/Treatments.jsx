import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const Treatments = () => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const allTreatments = [
    // طب الأسنان التجميلي
    {
      id: 'hollywood-smile',
      title: 'ابتسامة هوليوود',
      category: 'طب الأسنان التجميلي',
      description: 'احصل على ابتسامة أحلامك مع تصميم مثالي للابتسامة.',
      image: '/api/placeholder/300/200',
      slug: 'ibtisama-hollywood'
    },
    {
      id: 'smile-design',
      title: 'تصميم الابتسامة',
      category: 'طب الأسنان التجميلي',
      description: 'تصميم ابتسامة تجميلي مخصص مع تخطيط رقمي.',
      image: '/api/placeholder/300/200',
      slug: 'tasmeem-al-ibtisama'
    },
    {
      id: 'teeth-whitening',
      title: 'تبييض الأسنان',
      category: 'طب الأسنان التجميلي',
      description: 'تطبيقات تبييض الأسنان السريعة والآمنة بطرق حديثة.',
      image: '/api/placeholder/300/200',
      slug: 'tabyeed-al-asnan'
    },
    {
      id: 'pink-aesthetics',
      title: 'الجمالية الوردية',
      category: 'طب الأسنان التجميلي',
      description: 'ابتسامة مثالية مع جمالية اللثة.',
      image: '/api/placeholder/300/200',
      slug: 'al-jamaliya-al-wardiya'
    },
    {
      id: 'laminate-veneer',
      title: 'الفينير المطبق',
      category: 'طب الأسنان التجميلي',
      description: 'فينير خزفي تجميلي ورفيع.',
      image: '/api/placeholder/300/200',
      slug: 'al-fineer-al-mutbaq'
    },
    {
      id: 'zirconium-crown',
      title: 'تاج الزركونيوم',
      category: 'طب الأسنان التجميلي',
      description: 'حلول تاج الأسنان الطبيعية والمتينة والتجميلية.',
      image: '/api/placeholder/300/200',
      slug: 'taaj-al-zirconium'
    },
    {
      id: 'porcelain-crown',
      title: 'تاج الخزف',
      category: 'طب الأسنان التجميلي',
      description: 'تاج الأسنان الخزفي المتين والطبيعي المظهر.',
      image: '/api/placeholder/300/200',
      slug: 'taaj-al-khazaf'
    },
    {
      id: 'lumineers-veneer',
      title: 'فينير لومينيرز',
      category: 'طب الأسنان التجميلي',
      description: 'نظام فينير خزفي رفيع وشفاف.',
      image: '/api/placeholder/300/200',
      slug: 'fineer-lumineers'
    },
    {
      id: 'emax-crown',
      title: 'تاج إيماكس',
      category: 'طب الأسنان التجميلي',
      description: 'تاج الأسنان إيماكس مع جمالية عالية ومتانة.',
      image: '/api/placeholder/300/200',
      slug: 'taaj-emax'
    },
    {
      id: 'aesthetic-filling',
      title: 'الحشوة التجميلية',
      category: 'طب الأسنان التجميلي',
      description: 'حشوات الأسنان التجميلية الطبيعية المظهر.',
      image: '/api/placeholder/300/200',
      slug: 'al-hashwa-al-tajmeeliya'
    },
    {
      id: 'bisectomy',
      title: 'استئصال الخد',
      category: 'طب الأسنان التجميلي',
      description: 'إجراء جراحي لجمالية اللثة.',
      image: '/api/placeholder/300/200',
      slug: 'isteezaal-al-khad'
    },
    {
      id: 'laser-dental-treatment',
      title: 'علاج الأسنان بالليزر',
      category: 'طب الأسنان التجميلي',
      description: 'علاجات الأسنان بتقنية الليزر الحديثة.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-asnan-bil-lazer'
    },
    {
      id: 'inlay-filling',
      title: 'الحشوة الداخلية',
      category: 'طب الأسنان التجميلي',
      description: 'تقنية حشو دقيقة وتجميلية.',
      image: '/api/placeholder/300/200',
      slug: 'al-hashwa-al-daakhiliya'
    },
    {
      id: 'onlay-filling',
      title: 'الحشوة الخارجية',
      category: 'طب الأسنان التجميلي',
      description: 'ترميم حشو شامل.',
      image: '/api/placeholder/300/200',
      slug: 'al-hashwa-al-khaarijiya'
    },
    {
      id: 'dental-diamond',
      title: 'الماس السني',
      category: 'طب الأسنان التجميلي',
      description: 'إجراء وضع الماس على الأسنان.',
      image: '/api/placeholder/300/200',
      slug: 'al-maas-al-sinni'
    },
    {
      id: 'dental-tattoo',
      title: 'الوشم السني',
      category: 'طب الأسنان التجميلي',
      description: 'تطبيق وشم زخرفي على الأسنان.',
      image: '/api/placeholder/300/200',
      slug: 'al-washm-al-sinni'
    },
    {
      id: 'dental-jewelry',
      title: 'المجوهرات السنية',
      category: 'طب الأسنان التجميلي',
      description: 'إجراء وضع المجوهرات على الأسنان.',
      image: '/api/placeholder/300/200',
      slug: 'al-mujawharaat-al-sinniya'
    },
    {
      id: 'bonding-treatment',
      title: 'علاج الربط',
      category: 'طب الأسنان التجميلي',
      description: 'تطبيقات ربط تجميلية للعيوب الصغيرة في الأسنان.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-rabat'
    },

    // الأسنان المفقودة
    {
      id: 'dental-bridge',
      title: 'جسر الأسنان',
      category: 'الأسنان المفقودة',
      description: 'جسر ثابت للأسنان المفقودة.',
      image: '/api/placeholder/300/200',
      slug: 'jisr-al-asnan'
    },
    {
      id: 'denture',
      title: 'طقم الأسنان',
      category: 'الأسنان المفقودة',
      description: 'حلول أطقم الأسنان القابلة للإزالة.',
      image: '/api/placeholder/300/200',
      slug: 'taqam-al-asnan'
    },
    {
      id: 'fixed-prosthesis',
      title: 'الطقم الثابت',
      category: 'الأسنان المفقودة',
      description: 'تطبيقات أطقم الأسنان الثابتة.',
      image: '/api/placeholder/300/200',
      slug: 'al-taqam-al-thaabit'
    },
    {
      id: 'snap-on-denture',
      title: 'طقم القفل',
      category: 'الأسنان المفقودة',
      description: 'نظام طقم الأسنان بالقفل.',
      image: '/api/placeholder/300/200',
      slug: 'taqam-al-qifl'
    },
    {
      id: 'full-mouth-treatment',
      title: 'علاج الفم الكامل',
      category: 'الأسنان المفقودة',
      description: 'علاج الأسنان الشامل للفم بأكمله.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-fam-al-kaamil'
    },

    // الزراعة
    {
      id: 'single-tooth-implant',
      title: 'زراعة السن الواحد',
      category: 'الزراعة',
      description: 'علاج الزراعة لسن واحد.',
      image: '/api/placeholder/300/200',
      slug: 'ziraaat-al-sin-al-waahid',
    },
    {
      id: 'full-mouth-implant',
      title: 'زراعة الفم الكامل',
      category: 'الزراعة',
      description: 'علاج الزراعة للفم بأكمله.',
      image: '/api/placeholder/300/200',
      slug: 'ziraaat-al-fam-al-kaamil',
    },
    {
      id: 'multiple-tooth-implant',
      title: 'زراعة الأسنان المتعددة',
      category: 'الزراعة',
      description: 'علاج الزراعة لعدة أسنان.',
      image: '/api/placeholder/300/200',
      slug: 'ziraaat-al-asnan-al-mutaaddida',
    },
    {
      id: 'one-day-implant',
      title: 'الزراعة في يوم واحد',
      category: 'الزراعة',
      description: 'علاج الزراعة في يوم واحد.',
      image: '/api/placeholder/300/200',
      slug: 'al-ziraaat-fee-yawm-waahid',
    },
    {
      id: 'all-on-four',
      title: 'أول أون فور',
      category: 'الزراعة',
      description: 'تقنية الزراعة أول أون فور.',
      image: '/api/placeholder/300/200',
      slug: 'awal-oon-for',
    },
    {
      id: 'all-on-six',
      title: 'أول أون سكس',
      category: 'الزراعة',
      description: 'تقنية الزراعة أول أون سكس.',
      image: '/api/placeholder/300/200',
      slug: 'awal-oon-siks',
    },
    {
      id: 'box-technique',
      title: 'تقنية الصندوق',
      category: 'الزراعة',
      description: 'تقنية الزراعة الصندوق.',
      image: '/api/placeholder/300/200',
      slug: 'taqneetat-al-sandooq',
    },

    // علاجات الأسنان العامة
    {
      id: 'dental-examination',
      title: 'فحص الأسنان',
      category: 'علاجات الأسنان العامة',
      description: 'فحص الأسنان الشامل.',
      image: '/api/placeholder/300/200',
      slug: 'fahs-al-asnan',
    },
    {
      id: 'crown-veneer',
      title: 'تاج السن',
      category: 'علاجات الأسنان العامة',
      description: 'ما هو تاج السن وكيف يتم صنعه.',
      image: '/api/placeholder/300/200',
      slug: 'taaj-al-sin',
    },
    {
      id: 'dental-filling',
      title: 'حشو السن',
      category: 'علاجات الأسنان العامة',
      description: 'كيف يتم حشو السن وما هي أنواعه.',
      image: '/api/placeholder/300/200',
      slug: 'hashw-al-sin',
    },
    {
      id: 'root-canal-treatment',
      title: 'علاج قناة الجذر',
      category: 'علاجات الأسنان العامة',
      description: 'كيف يتم علاج قناة الجذر وهل يؤلم.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-qanaat-al-jadhr',
    },
    {
      id: 'tooth-extraction',
      title: 'خلع السن',
      category: 'علاجات الأسنان العامة',
      description: 'ما هو خلع السن وكيف يتم.',
      image: '/api/placeholder/300/200',
      slug: 'khalaat-al-sin',
    },
    {
      id: 'impacted-tooth-extraction',
      title: 'خلع السن المطمور',
      category: 'علاجات الأسنان العامة',
      description: 'ما هو خلع الأسنان المطمورة.',
      image: '/api/placeholder/300/200',
      slug: 'khalaat-al-sin-al-matmoor',
    },
    {
      id: 'wisdom-tooth-extraction',
      title: 'خلع ضرس العقل',
      category: 'علاجات الأسنان العامة',
      description: 'خلع أضراس العقل.',
      image: '/api/placeholder/300/200',
      slug: 'khalaat-dirs-al-aql',
    },
    {
      id: 'broken-tooth-treatment',
      title: 'علاج السن المكسور',
      category: 'علاجات الأسنان العامة',
      description: 'ما هو علاج السن المكسور.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-sin-al-maksour',
    },

    // علاجات الأسنان الوقائية
    {
      id: 'bad-breath',
      title: 'رائحة الفم الكريهة',
      category: 'علاجات الأسنان الوقائية',
      description: 'ما هي رائحة الفم الكريهة وكيف يتم علاجها.',
      image: '/api/placeholder/300/200',
      slug: 'raaiaha-al-fam-al-kareeha',
    },
    {
      id: 'tooth-sensitivity',
      title: 'حساسية الأسنان',
      category: 'علاجات الأسنان الوقائية',
      description: 'ما هي حساسية الأسنان وكيف يتم علاجها.',
      image: '/api/placeholder/300/200',
      slug: 'hassaasiyat-al-asnan',
    },
    {
      id: 'teeth-grinding',
      title: 'طحن الأسنان',
      category: 'علاجات الأسنان الوقائية',
      description: 'ما هو طحن الأسنان وكيف يتم علاجها.',
      image: '/api/placeholder/300/200',
      slug: 'tahn-al-asnan',
    },
    {
      id: 'teeth-grinding-treatment',
      title: 'علاج طحن الأسنان',
      category: 'علاجات الأسنان الوقائية',
      description: 'ما هو علاج طحن الأسنان وكيف يتم.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-tahn-al-asnan',
    },
    {
      id: 'snoring-treatment',
      title: 'علاج الشخير',
      category: 'علاجات الأسنان الوقائية',
      description: 'ما هو علاج الشخير وكيف يتم تطبيقه.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-shakheer',
    },

    // تقويم الأسنان
    {
      id: 'braces-treatment',
      title: 'علاج التقويم',
      category: 'تقويم الأسنان',
      description: 'ما هو علاج التقويم وكيف يتم تطبيقه.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-taqweem',
    },
    {
      id: 'clear-bracket-treatment',
      title: 'علاج التقويم الشفاف',
      category: 'تقويم الأسنان',
      description: 'علاج تقويم الأسنان بالتقويم الشفاف.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-taqweem-al-shafaf',
    },
    {
      id: 'invisalign-treatment',
      title: 'علاج إنفزلاين',
      category: 'تقويم الأسنان',
      description: 'علاج إنفزلاين بالتقويم الشفاف.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-invisalign',
    },
    {
      id: 'invisible-braces-treatment',
      title: 'علاج التقويم الخفي',
      category: 'تقويم الأسنان',
      description: 'علاج تقويم الأسنان الخفي.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-taqweem-al-khafee',
    },

    // طب أسنان الأطفال
    {
      id: 'fluoride-application',
      title: 'تطبيق الفلورايد',
      category: 'طب أسنان الأطفال',
      description: 'تطبيق الفلورايد لحماية الأسنان.',
      image: '/api/placeholder/300/200',
      slug: 'tatbeeq-al-fluoride',
    },
    {
      id: 'fissure-sealant',
      title: 'سداد الشقوق',
      category: 'طب أسنان الأطفال',
      description: 'حماية شقوق الأسنان.',
      image: '/api/placeholder/300/200',
      slug: 'sidaad-al-shuqooq',
    },
    {
      id: 'pediatric-orthodontic-treatment',
      title: 'علاج تقويم الأسنان للأطفال',
      category: 'طب أسنان الأطفال',
      description: 'ما هو علاج تقويم الأسنان للأطفال.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-taqweem-al-asnan-lil-atfaal',
    },
    {
      id: 'baby-bottle-tooth-decay',
      title: 'تسوس زجاجة الرضاعة',
      category: 'طب أسنان الأطفال',
      description: 'ما هو تسوس زجاجة الرضاعة.',
      image: '/api/placeholder/300/200',
      slug: 'tasawus-zujaajat-al-radaat',
    },
    {
      id: 'space-maintainer-treatment',
      title: 'علاج الحافظ المسافات',
      category: 'طب أسنان الأطفال',
      description: 'ما هو علاج الحافظ المسافات.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-haafiz-al-masaafaat',
    },

    // أمراض اللثة
    {
      id: 'gum-treatment',
      title: 'علاج اللثة',
      category: 'أمراض اللثة',
      description: 'علاج أمراض اللثة.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-litha',
    },
    {
      id: 'curettage-treatment',
      title: 'علاج الكشط',
      category: 'أمراض اللثة',
      description: 'ما هو علاج الكشط.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-kasht',
    },
    {
      id: 'flap-treatment',
      title: 'علاج اللوحة',
      category: 'أمراض اللثة',
      description: 'العلاج الجراحي للثة.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-al-lawha',
    },
    {
      id: 'gingivitis',
      title: 'التهاب اللثة',
      category: 'أمراض اللثة',
      description: 'التهاب اللثة والتهاب اللثة.',
      image: '/api/placeholder/300/200',
      slug: 'iltihaab-al-litha',
    },
    {
      id: 'dental-calculus-cleaning',
      title: 'تنظيف الجير',
      category: 'أمراض اللثة',
      description: 'ما هو تنظيف الجير وكيف يتم.',
      image: '/api/placeholder/300/200',
      slug: 'tanzeef-al-jeer',
    },

    // علاجات الأسنان الخاصة
    {
      id: 'digital-dentistry',
      title: 'طب الأسنان الرقمي',
      category: 'علاجات الأسنان الخاصة',
      description: 'طب الأسنان الرقمي وتصميم الأسنان.',
      image: '/api/placeholder/300/200',
      slug: 'tibb-al-asnan-al-raqamee',
    },
    {
      id: 'needle-free-anesthesia',
      title: 'التخدير بدون إبرة',
      category: 'علاجات الأسنان الخاصة',
      description: 'تطبيق التخدير بدون إبرة.',
      image: '/api/placeholder/300/200',
      slug: 'al-takhdeer-bidoon-ibra',
    },
    {
      id: 'sedation-and-general-anesthesia',
      title: 'التخدير والتنويم',
      category: 'علاجات الأسنان الخاصة',
      description: 'التخدير والتنويم للعلاجات.',
      image: '/api/placeholder/300/200',
      slug: 'al-takhdeer-wal-tanweem',
    },
    {
      id: 'rubber-dam-application',
      title: 'تطبيق السد المطاطي',
      category: 'علاجات الأسنان الخاصة',
      description: 'تطبيق السد المطاطي للعزل.',
      image: '/api/placeholder/300/200',
      slug: 'tatbeeq-al-sadd-al-mataaee',
    },
    {
      id: 'jaw-tumor',
      title: 'ورم الفك',
      category: 'علاجات الأسنان الخاصة',
      description: 'علاج أورام الفك.',
      image: '/api/placeholder/300/200',
      slug: 'waram-al-fakk',
    },
    {
      id: 'jaw-fracture-treatment',
      title: 'علاج كسر الفك',
      category: 'علاجات الأسنان الخاصة',
      description: 'العلاج الجراحي لكسور الفك.',
      image: '/api/placeholder/300/200',
      slug: 'ealaaj-kasr-al-fakk',
    },
    {
      id: 'dental-spa',
      title: 'سبا الأسنان',
      category: 'علاجات الأسنان الخاصة',
      description: 'خدمات سبا الأسنان المريحة.',
      image: '/api/placeholder/300/200',
      slug: 'spa-al-asnan',
    },
    {
      id: '10x10-examination',
      title: 'الفحص 10 × 10',
      category: 'علاجات الأسنان الخاصة',
      description: 'فحص الأسنان الشامل 10×10.',
      image: '/api/placeholder/300/200',
      slug: 'al-fahs-10x10',
    }
  ];

  // Arama filtreleme
  const filteredTreatments = allTreatments.filter(treatment =>
    treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="علاجاتنا - Hospitadent"
        description="جميع علاجات الأسنان والخدمات المقدمة من Hospitadent. طب الأسنان التجميلي، الزراعة، تقويم الأسنان والمزيد."
        keywords="علاجات الأسنان، طب الأسنان التجميلي، الزراعة، تقويم الأسنان، طب أسنان الأطفال، أمراض اللثة، hospitadent"
        url="https://hospitadent.com/ar/elajatuna"
      />
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 treatments-page" dir="rtl">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent">
              علاجاتنا
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 pb-32">
          <div className="max-w-7xl mx-auto">
            
            {/* Arama Bölümü */}
            <div className="mb-12">
              <div className="max-w-lg mx-auto">
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                  <div className="flex-1 px-6 py-4">
                    <input
                      type="text"
                      placeholder="البحث"
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

            {/* Tedavi Kartları Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              
              {filteredTreatments.map((treatment) => (
                <div key={treatment.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#004876]/20 group flex flex-col h-full">
                  {/* Resim */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f4f78]/20 to-[#2bb3ea]/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-[#004876]/30">
                        🦷
                      </div>
                    </div>
                  </div>
                  
                  {/* İçerik */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Kategori */}
                    <div className="mb-2 -mt-1">
                      <span className="inline-block bg-blue-100 text-[#004876] text-xs font-semibold px-0.5 py-0 rounded-full">
                        {treatment.category}
                      </span>
                    </div>
                    
                    {/* Başlık */}
                    <h3 className="text-xl font-bold text-[#0f4f78] mb-3 group-hover:text-[#2bb3ea] transition-colors duration-300 line-clamp-2">
                      {treatment.title}
                    </h3>
                    
                    {/* Açıklama */}
                    <p className="text-[#0f4f78]/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {treatment.description}
                    </p>
                    
                    {/* Detay Butonu */}
                    <a 
                      href={`/ealaaj/${treatment.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group mt-auto"
                    >
                      عرض التفاصيل
                      <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              
            </div>

            {/* Sonuç Bulunamadı */}
            {filteredTreatments.length === 0 && searchTerm && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#004876] mb-2">
                  لم يتم العثور على نتائج
                </h3>
                <p className="text-gray-600 mb-6">
                  لم يتم العثور على نتائج لـ "{searchTerm}". يمكنك تجربة كلمات مفتاحية مختلفة.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  عرض جميع العلاجات
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  دعنا نحدد أفضل علاج لك
                </h2>
                <p className="text-xl mb-6 opacity-90">
                  احجز استشارة مجانية مع أطباء الأسنان الخبراء لدينا
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:4449922"
                    className="bg-white text-[#0f4f78] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    444 99 22
                  </a>
                  <a 
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0f4f78] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    اتصل بنا
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

export default Treatments; 