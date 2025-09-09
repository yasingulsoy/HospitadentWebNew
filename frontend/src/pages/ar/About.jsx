import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components';
import SEOHead from '../../components/SEO/SEOHead';

const About = () => {
  const { t } = useTranslation();

  // Sayfa yüklendiğinde scroll'u aktif hale getir
  useEffect(() => {
    // Sayfanın yüksekliğini zorla hesapla
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 100);
  }, []);

  return (
    <>
      <SEOHead 
        title="من نحن - Hospitadent"
        description="تعرف على Hospitadent، عيادة الأسنان الرائدة في تركيا. خبرة 20 عاماً في طب الأسنان التجميلي والزراعة."
        keywords="Hospitadent، عيادة الأسنان، طب الأسنان التجميلي، زراعة الأسنان، تركيا، اسطنبول"
        url="https://hospitadent.com/ar/men-nahnu"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hospitadent",
          "description": "أكبر منظمة للصحة السنية في تركيا",
          "url": "https://hospitadent.com",
          "foundingDate": "2004",
          "numberOfEmployees": "500+",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR",
            "addressLocality": "Istanbul"
          }
        }}
      />
      <div className="bg-white" dir="rtl">
        {/* Header */}
        <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f4f78]">
            {t('about.title', 'من نحن')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.vision.title', 'رؤيتنا')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.vision.text', 'أن نكون أقرب وأكثر العلامات التجارية ابتكارًا في صحة الفم والأسنان لمرضى العالم.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.mission.title', 'مهمتنا')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.mission.text', 'إضافة قيمة للأشخاص والمجتمع والبيئة بجودة خدمة عالية؛ إعطاء الثقة من خلال التعامل مع كل مريض من مرضانا مثل أقاربنا بطريقة أخلاقية وصادقة ومتعاطفة، الوصول إلى المزيد من الأشخاص مع نمو بدني متوازن، متابعة التطورات التكنولوجية والعلمية وتطبيقها بطريقة رائدة، جعل الناس سعداء من خلال تصميم ابتسامات جمالية مع مهندسي الابتسامة.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.values.title', 'قيمنا')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value1.title', 'نحن نقدر:')}</strong> {t('about.values.value1.text', 'نحن ندرك قيمة البشر والحياة والعالم.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value2.title', 'نحن نهتم:')}</strong> {t('about.values.value2.text', 'نحن نهتم بمرضانا مثل أقاربنا وضيوفنا الذين نستضيفهم في المنزل.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value3.title', 'نحن نعطي الثقة:')}</strong> {t('about.values.value3.text', 'كل من يتصل بنا (مرضانا، موردونا، البيئة، إلخ) متأكد من أننا نحاول أن نفعل أفضل ما لدينا والشيء الصحيح، وأننا ملتزمون بالقواعد الأخلاقية. نحن نفعل فقط ما نقول ونقول فقط ما سنفعله.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value4.title', 'نحن صادقون وقريبون:')}</strong> {t('about.values.value4.text', 'نحن نظهر صدقًا وقربًا متوازنين تجاه الجميع.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value5.title', 'نحن نشعر بالمسؤولية:')}</strong> {t('about.values.value5.text', 'نحن نشعر بالمسؤولية تجاه الناس والمجتمع والبيئة، أي الكون بأكمله.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value6.title', 'نحن مبتكرون:')}</strong> {t('about.values.value6.text', 'نحن دائمًا فضوليون وراغبون في الابتكارات والتطورات.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value7.title', 'نحن نقدر الجودة:')}</strong> {t('about.values.value7.text', 'أفضل المواد وأحدث التكنولوجيا والنظافة العالية لا غنى عنها بالنسبة لنا.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value8.title', 'نحن نتعاون:')}</strong> {t('about.values.value8.text', 'نحن نرعى مصالح مرضانا وموردينا من خلال التعاون معهم، وفي الفريق نفكر أنه إذا كان أحدنا مفقودًا، فنحن جميعًا مفقودون.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value9.title', 'نحن نريد أن نعطي السعادة:')}</strong> {t('about.values.value9.text', 'نحن نعتقد أن السعادة الحقيقية هي سعادة الآخرين ونسعى من أجلها.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.history.text1', 'تأسس Hospitadent في عام 2006، ويستمر في الخدمة بشعار "من اليوم الأول، كل أعمالنا هي الأسنان". مع 22 فرعًا تم إنشاؤها محليًا ودوليًا، والأجهزة الطبية الحديثة، والموظفين الطبيين المتميزين، والموظفين الخبراء، يرفع Hospitadent المعايير في صحة الفم والأسنان.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.branches.title', 'جودة خدمة عالية في كل فرع')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text1', 'بعد أول مركز تم افتتاحه في Bağcılar، توسع Hospitadent إلى Fatih في عام 2008، وÇamlıca في عام 2009، وPendik وMecidiyeköy في عام 2011، وافتتح أول فرع دولي له في فرانكفورت، ألمانيا في عام 2012. مجموعة المستشفيات، التي زادت عدد الفروع مع مركز جديد تم افتتاحه في Bakırköy، افتتحت فرع أنقرة، فرع Kocaeli، فرع أنطاليا، فرع Cevizlibağ في إسطنبول وأخيراً فرع Bursa في عام 2014 في Kayseri، 2015 في لاهاي، هولندا، 2018 في Şerifali، 2021 في Alanya وBodrum و2022. يستمر Hospitadent في النمو بخطوات واثقة مع العديد من الفروع في 4 دول مختلفة.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text2', 'بالإضافة إلى العدد المتزايد بسرعة من الفروع، تم إنشاء أكاديمية Hospitadent في عام 2008 للتعليم المستمر للأطباء الخبراء والموظفين التقنيين حول التطوير المهني والابتكارات التكنولوجية.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text3', 'Hospitadent هو اسم رائد يضع المعايير في قطاع الصحة مع مشاريعه المبتكرة. المستشفى، التي بدأت برنامج الولاء Dent Guard في عام 2016، أنشأت نظام علاج سني مضمون مع بطاقات مخصصة ومزايا. في قسم التصميم السني الذي تم إنشاؤه في عام 2017، بدأ تصميم الابتسامة الرقمية. Hospitadent، الذي يقدم بنية تحتية تكنولوجية متفوقة في كل من فروعه، يخدم مرضاه بنهج علاج سني فردي ودائم.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.innovations.title', 'Hospitadent، عنوان الأوائل')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.innovations.text', 'Hospitadent، التي بدأت السياحة الصحية السنية لأول مرة في تركيا في عام 2007، أصبحت العنوان المطلوب للعلاج السني من قبل المرضى من جميع أنحاء العالم. Hospitadent، التي حققت أولاً في قطاع الصحة وأنشأت قسم تجربة المريض لأول مرة في تركيا، تعطي أهمية كبيرة لتجربة المريض والرضا. مع هذا الفهم، المستشفى، التي أنشأت مفهوماً خاصاً يسمى Dental Spa في عام 2016، تهدف إلى إنهاء الخوف من أطباء الأسنان مع مفهومها VIP الذي يوفر للمرضى بيئة مريحة ودعم نفسي.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.awards.title', 'قصة نجاح توجت بالجوائز')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text1', 'رؤية Hospitadent من الدرجة العالمية، والموظفين الخبراء، والعمل المبتكر والموجه نحو رضا العملاء تم اعتماده بالجوائز. Hospitadent، التي أثبتت أنها اختيار الشعب من خلال خدمة أكثر من مليون مريض بحلول عام 2010، فازت بشهادة TEMOS الدولية للجودة في عام 2013.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text2', 'في عام 2015، تم اعتباره جديراً بجائزة مؤسسة الصحة للعام نتيجة استطلاع مجلة Ekovitrin 14 للنجوم للعام.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text3', 'أصبح Hospitadent أول مستشفى في تركيا يفوز بجائزة Stevie من خلال الفوز بجائزة الخدمة الأكثر ابتكاراً للعملاء للعام في جوائز Stevie، حيث يتم تكريم أنجح الشركات في العالم في عام 2018.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text4', 'Hospitadent، التي احتلت المرتبة الأولى في فئة خدمات العلاج السني في بحث جمعية المصدرين التركية 500 مصدر خدمة تركيا في عام 2018، أثبتت نجاحها وكفاءتها في قطاع الصحة مرة أخرى.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text5', 'Hospitadent، التي تأهلت للدخول في "برنامج دعم العلامة التجارية Turquality" الذي تم إنشاؤه في عام 2020 لغرض وضع علامة على المنتجات التركية في الخارج، وإنشاء ودعم صورة البضائع التركية، التي كانت سارية لمدة 16 عاماً، تستمر في خلق صورة إيجابية من خلال اتخاذ خطوة مهمة في وضع العلامات. كونها أول مجموعة صحية سنية تشارك في برنامج دعم العلامة التجارية Turquality، الذي يشارك فيه خمسة مستشفيات فقط في مجال الصحة، يوضح المعايير العالية وكذلك خلق صورة جودة.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text6', 'Hospitadent، التي تأهلت لتُسمى شركة "Great Place To Work® Certified" نتيجة للتقييم والتحليل الذي أجرته GPTW Turkey في الفترة الأخيرة من عام 2021، تعيش الفخر المشروع لكونها أول مجموعة سنية لديها أعلى شهادة ثقافة مؤسسية.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed">
              {t('about.conclusion', 'Hospitadent، التي تتابع باستمرار التقنيات الطبية المتطورة وتتقدم باستمرار طرق التشخيص والعلاج بأحدث التقنيات، تستمر في تقديم خدمة صحية آمنة وعالية الجودة مع موظفيها الخبراء.')}
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default About; 