// Footer Icons
import {
  faPhone,
  faLocation,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
// İletişim linki için dil koduna göre path belirle
function getContactPath(lang) {
  switch (lang) {
    case 'en': return '/en/contact';
    case 'fr': return '/fr/contact';
    case 'de': return '/de/kontakt';
    case 'es': return '/es/contacto';
    case 'ru': return '/ru/kontakty';
    case 'ar': return '/ar/altwasul';
    default: return '/iletisim';
  }
}

// Hekimler linki için dil koduna göre path belirle
function getDoctorsPath(lang) {
  switch (lang) {
    case 'en': return '/en/doctors';
    case 'fr': return '/fr/medecins';
    case 'de': return '/de/aerzte';
    case 'es': return '/es/medicos';
    case 'ru': return '/ru/vrachi';
    case 'ar': return '/ar/atibba';
    default: return '/hekimlerimiz';
  }
}

// navLinksData fonksiyon olarak güncellendi
export const navLinksData = (lang = 'tr') => [
  {
    name: 'navbar.corporate',
    path: '',
    submenu: [
      { name: 'navbar.about', path: typeof window !== 'undefined' && window.location.pathname.startsWith('/ar') ? 'men-nahnu' : 'hakkimizda' },
      { name: 'navbar.administrativeStaff', path: 'idari-kadro' },
      { name: 'navbar.patientSatisfactionVideos', path: 'hasta-memnuniyet-videolari' },
      { name: 'navbar.patientReviews', path: 'hasta-yorumlari' },
      { name: 'navbar.contractedInstitutions', path: 'anlasmali-kurumlar' },
      { name: 'navbar.hrJobApplicationForm', path: 'https://hospitadent.ulakbel.com/WebBasvuru/isbasvuru#/', external: true },
      { name: 'navbar.franchisePartnershipApplication', path: 'https://hospitadent.ulakbel.com/WebBasvuru/franchise-ortaklik-basvurusu', external: true },
      { name: 'navbar.adverseEventNotificationForm', path: 'https://panel.kolaytik.com/team/hospitadent/istenmeyen-olay-bildirim-formu-', external: true },
      { name: 'navbar.hospitadentAcademy', path: 'akademi' },
      { name: 'navbar.hospitadentSocialResponsibility', path: 'hospitadent-sosyal-sorumluluk' },
      { name: 'navbar.ourAwards', path: 'odullerimiz' },
      { name: 'navbar.corporateIdentity', path: 'kurumsal-kimlik' },
    ]
  },
  {
    name: 'navbar.ourBranches',
    path: 'subelerimiz',
    submenu: [
      {
        name: 'navbar.istanbul',
        path: '',
        submenu: [
          { name: 'navbar.mecidiyekoy', path: 'subelerimiz/mecidiyekoy' },
          { name: 'navbar.bagcilar', path: 'subelerimiz/bagcilar' },
          { name: 'navbar.bakirkoy', path: 'subelerimiz/bakirkoy' },
          { name: 'navbar.fatih', path: 'subelerimiz/fatih' },
          { name: 'navbar.camlica', path: 'subelerimiz/camlica' },
          { name: 'navbar.pendik', path: 'subelerimiz/pendik' },
          { name: 'navbar.serifali', path: 'subelerimiz/serifali' },
          { name: 'navbar.cevizlibag', path: 'subelerimiz/cevizlibag' },
          { name: 'navbar.gokturk', path: 'subelerimiz/gokturk' },
        ]
      },
      { name: 'navbar.kayseri', path: 'subelerimiz/kayseri' },
      { name: 'navbar.bodrum', path: 'subelerimiz/bodrum' },
      { name: 'navbar.alanya', path: 'subelerimiz/alanya' },
      { name: 'navbar.antalya', path: 'subelerimiz/antalya' },
      { name: 'navbar.ankara', path: 'subelerimiz/ankara' },
      { name: 'navbar.denizli', path: 'subelerimiz/denizli' },
      { name: 'navbar.kocaeli', path: 'subelerimiz/kocaeli' },
      { name: 'navbar.bursa', path: 'subelerimiz/bursa' },
      { name: 'navbar.germany', path: 'subelerimiz/almanya' },
      { name: 'navbar.netherlands', path: 'subelerimiz/hollanda' },
    ]
  },
  {
    name: 'navbar.ourTreatments',
    path: 'tedavilerimiz',
    submenu: [
      {
        name: 'navbar.cosmeticDentistry',
        path: '',
        submenu: [
          { name: 'navbar.hollywoodSmile', path: 'hollywood-smile' },
          { name: 'navbar.smileDesign', path: 'gulus-tasarimi' },
          { name: 'navbar.teethWhitening', path: 'dis-beyazlatma' },
          { name: 'navbar.pinkAesthetics', path: 'pembe-estetik' },
          { name: 'navbar.laminateVeneer', path: 'lamine-kaplama' },
          { name: 'navbar.zirconiumCrown', path: 'zirkonyum-kaplama' },
          { name: 'navbar.porcelainCrown', path: 'porselen-kaplama' },
          { name: 'navbar.lumineersVeneer', path: 'lumineers-kaplama' },
          { name: 'navbar.emaxCrown', path: 'emax-kaplama' },
          { name: 'navbar.aestheticFilling', path: 'estetik-dolgu' },
          { name: 'navbar.bisectomy', path: 'bisektomi' },
          { name: 'navbar.laserDentalTreatment', path: 'lazerli-tedavi' },
          { name: 'navbar.inlayFilling', path: 'inley-dolgu' },
          { name: 'navbar.onlayFilling', path: 'onley-dolgu' },
          { name: 'navbar.dentalDiamond', path: 'dis-pirlantasi' },
          { name: 'navbar.dentalTattoo', path: 'dis-dovmesi' },
          { name: 'navbar.dentalJewelry', path: 'dis-mucevheri' },
          { name: 'navbar.bondingTreatment', path: 'bonding' },
        ]
      },
      {
        name: 'navbar.missingTeeth',
        path: '',
        submenu: [
          { name: 'navbar.dentalBridge', path: 'kopru-dis' },
          { name: 'navbar.denture', path: 'takma-dis' },
          { name: 'navbar.fixedProsthesis', path: 'sabit-protez' },
          { name: 'navbar.snapOnDenture', path: 'citcitli-protez' },
          { name: 'navbar.fullMouthTreatment', path: 'full-agiz-tedavisi' },
        ]
      },
      {
        name: 'navbar.implant',
        path: '',
        submenu: [
          { name: 'navbar.singleToothImplant', path: 'tek-dis-implant' },
          { name: 'navbar.fullMouthImplant', path: 'full-agiz-implant' },
          { name: 'navbar.multipleToothImplant', path: 'coklu-dis-implant' },
          { name: 'navbar.oneDayImplant', path: '1-gunde-implant' },
          { name: 'navbar.allOnFour', path: 'all-on-four' },
          { name: 'navbar.allOnSix', path: 'all-on-six' },
          { name: 'navbar.boxTechnique', path: 'box-teknik' },
        ]
      },
      {
        name: 'navbar.generalDentalTreatments',
        path: '',
        submenu: [
          { name: 'navbar.dentalExamination', path: 'dis-muayenesi' },
          { name: 'navbar.crownVeneer', path: 'kuron-kaplama' },
          { name: 'navbar.dentalFilling', path: 'dis-dolgusu' },
          { name: 'navbar.rootCanalTreatment', path: 'kanal-tedavisi' },
          { name: 'navbar.toothExtraction', path: 'dis-cekimi' },
          { name: 'navbar.impactedToothExtraction', path: 'gomulu-dis-cekimi' },
          { name: 'navbar.wisdomToothExtraction', path: '20lik-dis-cekimi' },
          { name: 'navbar.brokenToothTreatment', path: 'kirik-dis-tedavisi' },
        ]
      },
      {
        name: 'navbar.preventiveDentalTreatments',
        path: '',
        submenu: [
          { name: 'navbar.badBreath', path: 'agiz-kokusu' },
          { name: 'navbar.toothSensitivity', path: 'dis-hassasiyeti' },
          { name: 'navbar.teethGrinding', path: 'dis-sikma' },
          { name: 'navbar.teethGrindingTreatment', path: 'dis-gicirdatma-tedavisi' },
          { name: 'navbar.snoringTreatment', path: 'horlama-tedavisi' },
        ]
      },
      {
        name: 'navbar.orthodontics',
        path: '',
        submenu: [
          { name: 'navbar.bracesTreatment', path: 'dis-teli-tedavisi' },
          { name: 'navbar.clearBracketTreatment', path: 'seffaf-braketli-tedavi' },
          { name: 'navbar.invisalignTreatment', path: 'invisalign-tedavisi' },
          { name: 'navbar.invisibleBracesTreatment', path: 'gorunmez-tel-tedavisi' },
        ]
      },
      {
        name: 'navbar.pedodontics',
        path: '',
        submenu: [
          { name: 'navbar.fluorideApplication', path: 'fluorid-uygulamasi' },
          { name: 'navbar.fissureSealant', path: 'fissur-ortucu' },
          { name: 'navbar.pediatricOrthodonticTreatment', path: 'cocuk-ortodonti-tedavisi' },
          { name: 'navbar.babyBottleToothDecay', path: 'biberon-curugu' },
          { name: 'navbar.spaceMaintainerTreatment', path: 'yer-tutucu-tedavisi' },
        ]
      },
      {
        name: 'navbar.periodontology',
        path: '',
        submenu: [
          { name: 'navbar.gumTreatment', path: 'dis-eti-tedavisi' },
          { name: 'navbar.curettageTreatment', path: 'kuretaj-tedavisi' },
          { name: 'navbar.flapTreatment', path: 'flap-tedavisi' },
          { name: 'navbar.gingivitis', path: 'dis-eti-iltihabi' },
          { name: 'navbar.dentalCalculusCleaning', path: 'dis-tasi-temizligi' },
        ]
      },
      {
        name: 'navbar.specialDentalTreatments',
        path: '',
        submenu: [
          { name: 'navbar.digitalDentistry', path: 'dijital-dis-hekimligi' },
          { name: 'navbar.needleFreeAnesthesia', path: 'ignesiz-anestezi' },
          { name: 'navbar.sedationAndGeneralAnesthesia', path: 'sedasyon-ve-genel-anestezi' },
          { name: 'navbar.rubberDamApplication', path: 'rubber-dam-uygulamasi' },
          { name: 'navbar.jawTumor', path: 'cene-tumoru' },
          { name: 'navbar.jawFractureTreatment', path: 'cene-kirigi-tedavisi' },
          { name: 'navbar.dentalSpa', path: 'dental-spa' },
          { name: 'navbar.tenByTenExamination', path: '10x10-muayene' },
        ]
      },
    ]
  },
  { name: 'navbar.ourDoctors', path: getDoctorsPath(lang) },
  { name: 'navbar.blog', path: 'blog' },
  { name: 'navbar.contact', path: getContactPath(lang) },
];

// ServicesData
export const servicesData = [
  { title: 'Gülüş Tasarımı', desc: '' },
  { title: 'Diş Beyazlatma', desc: '' },
  { title: 'Zirkonyum Kaplama', desc: '' },
  { title: 'İmplant', desc: '' },
  { title: 'Ortodonti', desc: '' },
  { title: 'Çocuk Diş Hekimliği', desc: '' },
  { title: 'Kanal Tedavisi', desc: '' },
  { title: 'Diş Eti Tedavisi', desc: '' },
  { title: 'Protez Diş', desc: '' },
  { title: 'Diş Çekimi', desc: '' },
  { title: 'Diş Taşı Temizliği', desc: '' },
  { title: 'Lamine Kaplama', desc: '' },
  { title: 'Porselen Kaplama', desc: '' },
  { title: 'Emax Kaplama', desc: '' },
  { title: 'Bonding', desc: '' },
  { title: 'Diş Dolgusu', desc: '' },
  { title: 'Pedodonti', desc: '' },
  { title: 'Periodontoloji', desc: '' },
  { title: 'Endodonti', desc: '' },
  { title: 'Cerrahi Diş Tedavileri', desc: '' },
  { title: 'Diş Sıkma Tedavisi', desc: '' },
  { title: 'Diş Röntgeni', desc: '' },
  { title: 'Ağız Kokusu Tedavisi', desc: '' },
  { title: 'Diş Protezi Onarımı', desc: '' },
  // Tedaviler menüsündeki diğer başlıklar da eklenebilir
];

// footerData
export const footerData = [
  {
    icon: faPhone,
    title: 'Phone Number',
    Firstsubtitle: '+123-456-7890',
    Secondsubtitle: '+111-222-3333'
  },
  {
    icon: faLocation,
    title: 'Our Address',
    Firstsubtitle: 'Shiraz, Iran - 1234',

  },
  {
    icon: faClock,
    title: 'Opening Hours',
    Firstsubtitle: '10:00am to 10:00pm',
  },
  {
    icon: faEnvelope,
    title: 'Email Address',
    Firstsubtitle: 'yasingulsoy02@gmail.com',
    Secondsubtitle: 'yasingulsoy02@gmail.com'
  },
]