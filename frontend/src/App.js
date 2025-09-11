import React from "react";
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Navbar, Home, About, Services, Process, Contact, Footer, InstagramFeed } from './components';
import GoogleReviews from './components/client/GoogleReviews';
import GoogleAnalytics from './components/Analytics/GoogleAnalytics';
import Breadcrumbs from './components/SEO/Breadcrumbs';

// Tüm sayfaları doğrudan import et (hızlı yükleme için)
import AboutPage from './pages/About';
import BranchPage from './pages/BranchPage';
import Branches from './pages/Branches';
import Staff from './pages/Staff';
import SearchResults from './pages/SearchResults';
import HastaMemnuniyetVideolari from './pages/HastaMemnuniyetVideolari';
import HastaYorumlari from './pages/HastaYorumlari';
import HospitadentSosyalSorumluluk from './pages/HospitadentSosyalSorumluluk';
import AnlasmaliKurumlar from './pages/AnlasmaliKurumlar';
import Academy from './pages/Academy';
import Awards from './pages/Awards';
import CorporateIdentity from './pages/CorporateIdentity';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminPanel from './pages/AdminPanel';
import Treatments from './pages/Treatments';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';

// Dil sayfaları - İngilizce
import EnAbout from './pages/en/About';
import EnServices from './pages/en/Services';
import EnStaff from './pages/en/Staff';
import EnBranches from './pages/en/Branches';
import EnBranchPage from './pages/en/BranchPage';
import EnSearchResults from './pages/en/SearchResults';
import EnHastaMemnuniyetVideolari from './pages/en/HastaMemnuniyetVideolari';
import EnHastaYorumlari from './pages/en/HastaYorumlari';
import EnTreatments from './pages/en/Treatments';
import EnAcademy from './pages/en/Academy';
import EnBlog from './pages/en/Blog';
import EnAwards from './pages/en/Awards';

// Dil sayfaları - Fransızca
import FrAbout from './pages/fr/About';
import FrServices from './pages/fr/Services';
import FrStaff from './pages/fr/Staff';
import FrBranches from './pages/fr/Branches';
import FrBranchPage from './pages/fr/BranchPage';
import FrSearchResults from './pages/fr/SearchResults';
import FrHastaMemnuniyetVideolari from './pages/fr/HastaMemnuniyetVideolari';
import FrHastaYorumlari from './pages/fr/HastaYorumlari';
import FrTreatments from './pages/fr/Treatments';
import FrAcademy from './pages/fr/Academy';
import FrBlog from './pages/fr/Blog';

// Dil sayfaları - Almanca
import DeAbout from './pages/de/About';
import DeServices from './pages/de/Services';
import DeAwards from './pages/de/Awards';
import DeTreatments from './pages/de/Treatments';

// Dil sayfaları - Rusça
import RuAbout from './pages/ru/About';
import RuServices from './pages/ru/Services';
import RuAwards from './pages/ru/Awards';
import RuTreatments from './pages/ru/Treatments';

// Dil sayfaları - İspanyolca
import EsAbout from './pages/es/About';
import EsServices from './pages/es/Services';
import EsAwards from './pages/es/Awards';
import EsTreatments from './pages/es/Treatments';

// Dil sayfaları - Arapça
import ArAbout from './pages/ar/About';
import ArServices from './pages/ar/Services';
import ArAwards from './pages/ar/Awards';
import ArTreatments from './pages/ar/Treatments';

function App() {
  // Admin route'unda mıyız kontrolü
  const isAdminRoute = typeof window !== 'undefined' && window.location.pathname.startsWith('/admin');
  return (
    <HelmetProvider>
      <Toaster position="top-right" />
      {!isAdminRoute && <GoogleAnalytics />}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <Breadcrumbs />}
      <Routes>
        {/* Ana Sayfa - Türkçe */}
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <InstagramFeed />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Türkçe Sayfalar */}
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/idari-kadro" element={<Staff />} />
        <Route path="/subelerimiz" element={<Branches />} />
        <Route path="/subelerimiz/:branchId" element={<BranchPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/akademi" element={<Academy />} />
        <Route path="/odullerimiz" element={<Awards />} />
        <Route path="/kurumsal-kimlik" element={<CorporateIdentity />} />
        <Route path="/hasta-memnuniyet-videolari" element={<HastaMemnuniyetVideolari />} />
        <Route path="/hasta-yorumlari" element={<HastaYorumlari />} />
        <Route path="/tedavilerimiz" element={<Treatments />} />
        <Route path="/hekimlerimiz" element={<Doctors />} />
        <Route path="/hekimlerimiz/:id" element={<DoctorProfile />} />
        <Route path="/hospitadent-sosyal-sorumluluk" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/anlasmali-kurumlar" element={<AnlasmaliKurumlar />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/iletisim" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Admin Panel */}
        <Route path="/admin" element={<AdminPanel />} />
        
        {/* İngilizce Sayfalar */}
        <Route path="/en" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <InstagramFeed />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/en/about-us" element={<EnAbout />} />
        <Route path="/en/services" element={<EnServices />} />
        <Route path="/en/administrative-staff" element={<EnStaff />} />
        <Route path="/en/branches" element={<EnBranches />} />
        <Route path="/en/branches/:branchId" element={<EnBranchPage />} />
        <Route path="/en/blog" element={<EnBlog />} />
        <Route path="/en/blog/:slug" element={<BlogPost />} />
        <Route path="/en/academy" element={<EnAcademy />} />
        <Route path="/en/awards" element={<EnAwards />} />
        <Route path="/en/corporate-identity" element={<CorporateIdentity />} />
        <Route path="/en/patient-satisfaction-videos" element={<EnHastaMemnuniyetVideolari />} />
        <Route path="/en/patient-reviews" element={<EnHastaYorumlari />} />
        <Route path="/en/treatments" element={<EnTreatments />} />
        <Route path="/en/doctors" element={<Doctors />} />
        <Route path="/en/doctors/:id" element={<DoctorProfile />} />
        <Route path="/en/hospitadent-social-responsibility" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/en/partner-institutions" element={<AnlasmaliKurumlar />} />
        <Route path="/en/search" element={<EnSearchResults />} />
        <Route path="/en/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Fransızca Sayfalar */}
        <Route path="/fr" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <InstagramFeed />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/fr/a-propos" element={<FrAbout />} />
        <Route path="/fr/services" element={<FrServices />} />
        <Route path="/fr/equipe-administrative" element={<FrStaff />} />
        <Route path="/fr/succursales" element={<FrBranches />} />
        <Route path="/fr/succursales/:branchId" element={<FrBranchPage />} />
        <Route path="/fr/blog" element={<FrBlog />} />
        <Route path="/fr/blog/:slug" element={<BlogPost />} />
        <Route path="/fr/academie" element={<FrAcademy />} />
        <Route path="/fr/recompenses" element={<Awards />} />
        <Route path="/fr/identite-corporative" element={<CorporateIdentity />} />
        <Route path="/fr/videos-satisfaction-patients" element={<FrHastaMemnuniyetVideolari />} />
        <Route path="/fr/avis-patients" element={<FrHastaYorumlari />} />
        <Route path="/fr/traitements" element={<FrTreatments />} />
        <Route path="/fr/medecins" element={<Doctors />} />
        <Route path="/fr/medecins/:id" element={<DoctorProfile />} />
        <Route path="/fr/responsabilite-sociale-hospitadent" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/fr/institutions-partenaires" element={<AnlasmaliKurumlar />} />
        <Route path="/fr/recherche" element={<FrSearchResults />} />
        <Route path="/fr/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Almanca Sayfalar */}
        <Route path="/de" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <InstagramFeed />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/de/uber-uns" element={<DeAbout />} />
        <Route path="/de/services" element={<DeServices />} />
        <Route path="/de/verwaltungspersonal" element={<Staff />} />
        <Route path="/de/filialen" element={<Branches />} />
        <Route path="/de/filialen/:branchId" element={<BranchPage />} />
        <Route path="/de/blog" element={<Blog />} />
        <Route path="/de/blog/:slug" element={<BlogPost />} />
        <Route path="/de/akademie" element={<Academy />} />
        <Route path="/de/auszeichnungen" element={<DeAwards />} />
        <Route path="/de/corporate-identity" element={<CorporateIdentity />} />
        <Route path="/de/patientenzufriedenheit-videos" element={<HastaMemnuniyetVideolari />} />
        <Route path="/de/patientenbewertungen" element={<HastaYorumlari />} />
        <Route path="/de/unsere-behandlungen" element={<DeTreatments />} />
        <Route path="/de/aerzte" element={<Doctors />} />
        <Route path="/de/aerzte/:id" element={<DoctorProfile />} />
        <Route path="/de/hospitadent-soziale-verantwortung" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/de/partnerinstitutionen" element={<AnlasmaliKurumlar />} />
        <Route path="/de/suche" element={<SearchResults />} />
        <Route path="/de/kontakt" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Rusça Sayfalar */}
        <Route path="/ru" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <InstagramFeed />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/ru/o-nas" element={<RuAbout />} />
        <Route path="/ru/services" element={<RuServices />} />
        <Route path="/ru/administrativnyj-personal" element={<Staff />} />
        <Route path="/ru/filialy" element={<Branches />} />
        <Route path="/ru/filialy/:branchId" element={<BranchPage />} />
        <Route path="/ru/blog" element={<Blog />} />
        <Route path="/ru/blog/:slug" element={<BlogPost />} />
        <Route path="/ru/akademiya" element={<Academy />} />
        <Route path="/ru/nagrady" element={<RuAwards />} />
        <Route path="/ru/korporativnaya-identichnost" element={<CorporateIdentity />} />
        <Route path="/ru/video-udovletvorennosti-patsientov" element={<HastaMemnuniyetVideolari />} />
        <Route path="/ru/otzyvy-patsientov" element={<HastaYorumlari />} />
        <Route path="/ru/наши-процедуры" element={<RuTreatments />} />
        <Route path="/ru/vrachi" element={<Doctors />} />
        <Route path="/ru/vrachi/:id" element={<DoctorProfile />} />
        <Route path="/ru/sotsialnaya-otvetstvennost-hospitadent" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/ru/partnerstkie-uchrezhdeniya" element={<AnlasmaliKurumlar />} />
        <Route path="/ru/poisk" element={<SearchResults />} />
        <Route path="/ru/kontakty" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        
        {/* İspanyolca Sayfalar */}
        <Route path="/es" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/es/sobre-nosotros" element={<EsAbout />} />
        <Route path="/es/services" element={<EsServices />} />
        <Route path="/es/personal-administrativo" element={<Staff />} />
        <Route path="/es/sucursales" element={<Branches />} />
        <Route path="/es/sucursales/:branchId" element={<BranchPage />} />
        <Route path="/es/blog" element={<Blog />} />
        <Route path="/es/blog/:slug" element={<BlogPost />} />
        <Route path="/es/academia" element={<Academy />} />
        <Route path="/es/premios" element={<EsAwards />} />
        <Route path="/es/identidad-corporativa" element={<CorporateIdentity />} />
        <Route path="/es/videos-satisfaccion-pacientes" element={<HastaMemnuniyetVideolari />} />
        <Route path="/es/resenas-pacientes" element={<HastaYorumlari />} />
        <Route path="/es/nuestros-tratamientos" element={<EsTreatments />} />
        <Route path="/es/medicos" element={<Doctors />} />
        <Route path="/es/medicos/:id" element={<DoctorProfile />} />
        <Route path="/es/responsabilidad-social-hospitadent" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/es/instituciones-socias" element={<AnlasmaliKurumlar />} />
        <Route path="/es/busqueda" element={<SearchResults />} />
        <Route path="/es/contacto" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Arapça Sayfalar */}
        <Route path="/ar" element={
          <>
            <Home />
            <About />
            <Services />
            <Process />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/ar/men-nahnu" element={<ArAbout />} />
        <Route path="/ar/services" element={<ArServices />} />
        <Route path="/ar/al-muwazafun-al-idariyun" element={<Staff />} />
        <Route path="/ar/al-furu" element={<Branches />} />
        <Route path="/ar/al-furu/:branchId" element={<BranchPage />} />
        <Route path="/ar/al-mudawwana" element={<Blog />} />
        <Route path="/ar/al-mudawwana/:slug" element={<BlogPost />} />
        <Route path="/ar/al-akadimiyya" element={<Academy />} />
        <Route path="/ar/al-jawaiz" element={<ArAwards />} />
        <Route path="/ar/al-hawiyya-al-sharikiyya" element={<CorporateIdentity />} />
        <Route path="/ar/fidiyu-ridha-al-mardha" element={<HastaMemnuniyetVideolari />} />
        <Route path="/ar/ara-al-mardha" element={<HastaYorumlari />} />
        <Route path="/ar/elajatuna" element={<ArTreatments />} />
        <Route path="/ar/atibba" element={<Doctors />} />
        <Route path="/ar/atibba/:id" element={<DoctorProfile />} />
        <Route path="/ar/al-masuliyya-al-ijtimaiyya-hospitadent" element={<HospitadentSosyalSorumluluk />} />
        <Route path="/ar/al-muassasat-al-sharika" element={<AnlasmaliKurumlar />} />
        <Route path="/ar/al-bahth" element={<SearchResults />} />
        <Route path="/ar/altwasul" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
