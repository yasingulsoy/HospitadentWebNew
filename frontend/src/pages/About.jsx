import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components';
import SEOHead from '../components/SEO/SEOHead';

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
        title="Hakkımızda"
        description="Hospitadent hakkında detaylı bilgi. 20+ yıllık deneyim, vizyon, misyon ve değerlerimiz. Türkiye'nin en büyük diş sağlığı kuruluşu."
        keywords="hospitadent hakkında, diş kliniği tarihçe, vizyon misyon, değerler, deneyim"
        url="https://hospitadent.com/hakkimizda"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hospitadent",
          "description": "Türkiye'nin en büyük diş sağlığı kuruluşu",
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
      <div className="bg-white">
        {/* Header */}
        <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f4f78]">
            {t('about.title', 'Hakkımızda')}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            
            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.vision.title', 'VİZYONUMUZ')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.vision.text', 'Dünyanın hastasına en yakın ve en yenilikçi ağız ve diş sağlığı markası olmak.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.mission.title', 'MİSYONUMUZ')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.mission.text', 'Yüksek hizmet kalitesiyle insanlara, topluma ve çevreye değer katmak; etik, samimi ve empatik bir şekilde her hastamıza kendi yakınımız gibi davranarak güven vermek, dengeli bir fiziksel büyümeyle daha fazla insana ulaşmak, teknolojik ve bilimsel gelişmeleri takip ederek öncül şekilde uygulamak, gülüş mimarları ile estetik gülüşler tasarlayarak insanları mutlu etmek.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.values.title', 'DEĞERLERİMİZ')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value1.title', 'Değer Veririz:')}</strong> {t('about.values.value1.text', 'İnsanın, yaşamın ve dünyanın değerinin farkındayız.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value2.title', 'İlgi Gösteririz:')}</strong> {t('about.values.value2.text', 'Hastalarımız ile evimizde ağırladığımız yakınlarımız, misafirlerimiz gibi ilgileniriz.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value3.title', 'Güven Veririz:')}</strong> {t('about.values.value3.text', 'Bizimle temas eden herkes (hastalarımız, tedarikçilerimiz, çevremiz vs.) elimizden gelenin en iyisini ve doğrusunu yapmaya çalıştığımızdan, etik kurallara bağlı olduğumuzdan emindir. Sadece söylediğimizi yapar ve sadece yapacağımızı söyleriz.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value4.title', 'Samimi ve Yakınız:')}</strong> {t('about.values.value4.text', 'Herkese karşı dengeli bir samimiyet ve yakınlık gösteririz.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value5.title', 'Sorumluluk Duyarız:')}</strong> {t('about.values.value5.text', 'İnsanlara, topluma, çevreye yani tüm evrene karşı sorumluluk duyarız.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value6.title', 'Yenilikçiyiz:')}</strong> {t('about.values.value6.text', 'Yenilik ve gelişimlere daima meraklı ve istekliyiz.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value7.title', 'Kaliteyi Önemseriz:')}</strong> {t('about.values.value7.text', 'En iyi malzeme, en yeni teknoloji ve yüksek hijyen olmazsa olmazımızdır.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value8.title', 'İş birliği Yaparız:')}</strong> {t('about.values.value8.text', 'Hastalarımızın ve tedarikçilerimizin menfaatlerini onlarla karşılıklı iş birliği yaparak gözetir, ekip içinde de birimiz eksik olursa hepimiz eksik oluruz diye düşünürüz.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                <strong>{t('about.values.value9.title', 'Mutluluk Vermek İsteriz:')}</strong> {t('about.values.value9.text', 'Gerçek mutluluk başkalarının mutluluğudur diye düşünür ve bunun için çabalarız.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.history.text1', '2006 yılında kurulan Hospitadent, "İlk günden beri, bütün işimiz diş" sloganıyla hizmet vermeye devam ediyor. Yurt içi ve yurt dışında yapılanan 22 şubesi, modern tıbbi cihazları, seçkin hekim kadrosu ve uzman personeliyle Hospitadent, ağız ve diş sağlığında standartları yükseltiyor.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.branches.title', 'Her Şubede Yüksek Hizmet Kalitesi')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text1', 'Bağcılar\'da açılan ilk merkezin ardından 2008\'de Fatih\'te, 2009\'da Çamlıca\'da, 2011\'de Pendik ve Mecidiyeköy\'de şubeleşen Hospitadent, 2012\'de Almanya Frankfurt\'ta ilk yurt dışı şubesinin açılışını yaptı. Ardından Bakırköy\'de açılan yeni bir merkez ile şube sayısını artıran hastane grubu, 2014\'te Kayseri\'de, 2015\'te Hollanda Den Haag\'da, 2018\'de Şerifali\'de, 2021\'de Alanya ve Bodrum\'da ve 2022 yılında ise Ankara şubesini, Kocaeli şubesini, Antalya şubesini, İstanbul\'da Cevizlibağ şubesini ve en son olarak Bursa şubesini hizmete açtı. Hospitadent 4 farklı ülkede birçok şubesiyle emin adımlarla büyümeye devam ediyor.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text2', 'Sayıları hızla artan şubelere ek olarak 2008 yılında uzman hekimlerle teknik personelin mesleki gelişimi ve teknolojik yenilikler konusunda sürekli eğitimi için Hospitadent Akademi kuruldu.')}
            </p>

            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.branches.text3', 'Hospitadent, yenilikçi projeleriyle sağlık sektöründe standartları belirleyen öncü bir isim konumunda. 2016 yılında Dent Guard isimli sadakat programını başlatan hastane, kişiye özel kart ve avantajlarla garantili diş tedavi sistemini oluşturdu. 2017 yılında kurulan Dental Design departmanında ise dijital gülüş tasarımına başlandı. Her şubesinde üstün teknolojik altyapı sunan Hospitadent, bireysel ve uzun ömürlü diş tedavisi yaklaşımıyla hastalarına hizmet ediyor.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.innovations.title', 'İlklerin Adresi Hospitadent')}
            </h2>
            <p className="text-lg text-[#0f4f78] leading-relaxed mb-8">
              {t('about.innovations.text', '2007 yılında Türkiye\'de ilk kez dental sağlık turizmine başlayan Hospitadent, dünyanın dört bir yanında hastalar tarafından diş tedavisinde aranan adres haline geldi. Sağlık sektöründe bir ilki gerçekleştiren ve Türkiye\'de ilk kez Hasta Deneyimi Departmanı\'nı kuran Hospitadent, hasta deneyimine ve memnuniyetine çok önem veriyor. Bu anlayışla 2016 yılında Dental Spa adında özel bir konsept oluşturan hastane, hastalara dinlenme ortamı ve psikolojik destek sunan VIP konseptiyle diş hekimi korkusuna son vermeyi hedefliyor.')}
            </p>

            <h2 className="text-3xl font-bold text-[#0f4f78] mb-6">
              {t('about.awards.title', 'Ödüllerle Taçlanan Başarı Hikayesi')}
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text1', 'Hospitadent\'in dünya standartlarındaki vizyonu, uzman personeli, yenilikçi ve müşteri memnuniyeti odaklı çalışmaları ödüllerle tescillendi. 2010 yılına kadar 1 milyonu aşkın hastaya hizmet vererek halkın da tercihi olduğunu ispatlayan Hospitadent, 2013 yılında TEMOS Uluslararası Kalite Sertifikası\'na hak kazandı.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text2', '2015 yılında Ekovitrin Dergisi 14. Yılın Starları Anketi sonucunda Yılın Sağlık Kuruluşu ödülüne layık görüldü.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text3', 'Hospitadent, 2018\'de dünyanın en başarılı şirketlerinin ödüllendirildiği Stevie Awards\'ta Yılın En Yenilikçi Müşteri Hizmetleri Ödülü\'nü alarak Türkiye\'de Stevie Awards kazanan ilk hastane oldu.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text4', '2018 yılında Türkiye İhracatçılar Meclisi\'nin Türkiye\'nin 500 Hizmet İhracatçısı araştırmasında Diş Tedavi Hizmetleri kategorisinde birinci olan Hospitadent sağlık sektöründeki başarısını ve yetkinliğini bir kere daha ispatladı.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text5', '2020 yılında 16 yıldır yürürlükte olan Türk ürünlerinin yurtdışında markalaşması, Türk malı imajının yerleştirilmesi ve desteklenmesi amacıyla oluşturulan "Turquality Marka Destek Programı"na girmeye hak kazanan Hospitadent, markalaşma yolunda önemli bir adım atarak olumlu bir imaj oluşturmaya devam ediyor. Sağlık alanında sadece beş hastanenin yer aldığı Turquality marka destek programına katılan ilk dental sağlık grubu olmak, kaliteli bir imaj yaratmanın yanı sıra yüksek standartları da ortaya koymaktadır.')}
              </p>
              <p className="text-lg text-[#0f4f78] leading-relaxed">
                {t('about.awards.text6', '2021 yılının son döneminde GPTW Türkiye tarafından yapılan değerlendirme ve analiz sonucu "Great Place To Work® Certified" şirketi olarak anılmaya hak kazanan Hospitadent, en iyi kurum kültürü sertifikasına sahip ilk dental grup olmanın da haklı gururunu yaşıyor.')}
              </p>
            </div>

            <p className="text-lg text-[#0f4f78] leading-relaxed">
              {t('about.conclusion', 'Gelişen medikal teknolojileri sürekli takip eden, tanı ve tedavi yöntemlerini en güncel teknolojilerle sürekli ileriye taşıyan Hospitadent, uzman kadrosuyla güvenli ve kaliteli sağlık hizmeti vermeye devam ediyor.')}
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