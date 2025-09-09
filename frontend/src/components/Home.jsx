import React, { useState, useEffect, useRef } from "react";
import { FaAward, FaSmile, FaUsers, FaBuilding, FaGlobe, FaUserMd, FaWhatsapp, FaEnvelope, FaPhone, FaRobot } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ico from "../assets/images/ico.png";
import logo from "../assets/images/logo.webp";
import SEOHead from "./SEO/SEOHead";



// Hero başlığı için spotlight efektli component (arka plan dahil)
const SpotlightTitle = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });
  const ref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Mouse hareketiyle spotlight efekti
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y, active: true });
  };
  const handleMouseLeave = () => setSpot({ ...spot, active: false });

  // Efekt renkleri
  const lightGradient = `radial-gradient(circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.7) 0%, #2bb3ea33 40%, transparent 80%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex items-center justify-center mb-3 md:mb-5"
      style={{ minHeight: '3.5em' }}
    >
      {/* Spotlight arka plan */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-200"
        style={{
          opacity: spot.active ? 1 : 0,
          background: spot.active ? lightGradient : 'none',
          zIndex: 1,
        }}
      />
      <h1
        className={`relative text-lg sm:text-2xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl transition-all duration-1000 transform text-transparent bg-clip-text bg-gradient-to-r from-[#0f4f78] via-[#2bb3ea] to-[#0f4f78] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ zIndex: 2, lineHeight: 1.25, overflow: 'visible' }}
      >
        {children}
      </h1>
    </div>
  );
};

// Animasyonlu alt başlık
const AnimatedSubtitle = ({ children, delay = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <p
      className={`text-xs sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 transform text-[#004876] font-semibold ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </p>
  );
};

// Animasyonlu buton - Şu anda kullanılmıyor
// const AnimatedButton = ({ children, delay = 600, variant = "primary" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);
//   const buttonClasses = variant === "primary"
//     ? "bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] hover:from-[#0f4f78] hover:to-[#2bb3ea] text-white"
//     : "bg-white hover:bg-gray-50 border-2 border-[#2bb3ea] text-[#2bb3ea] hover:text-[#0f4f78]";
//   return (
//     <a
//       href={variant === "primary" ? "#randevu" : "#contact"}
//       className={`${buttonClasses} font-bold py-2 px-4 md:py-3 md:px-7 rounded-full text-sm md:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto text-center inline-block transition-all duration-1000 ${
//         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//       }`}
//     >
//       {children}
//     </a>
//   );
// };

// Animasyonlu iletişim FAB butonu
const ContactFabButton = ({ delay = 800 }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{transitionDelay: `${delay}ms`}}
    >
      {/* Ana buton */}
      <button
        type="button"
        className={`group font-bold shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center text-base md:text-lg outline-none focus:ring-2 focus:ring-blue-300 px-7 py-3 md:px-7 md:py-3 w-auto h-auto
          ${open ? 'rounded-full w-14 h-14 px-0 bg-white text-[#0f4f78]' : 'bg-white hover:bg-gray-50 text-[#2bb3ea] hover:text-[#0f4f78] rounded-full'}
        `}
        style={{zIndex: 10, minWidth: open ? 56 : 120, minHeight: open ? 56 : 48, padding: open ? 0 : undefined, transition: 'all 0.4s cubic-bezier(.4,2,.6,1)'}}
        onClick={() => setOpen(o => !o)}
      >
        <span className={`transition-all duration-300 ${open ? 'opacity-0 scale-75 absolute' : 'opacity-100 scale-100'}`}>{t('home.contactButton')}</span>
        {open && (
          <img src={ico} alt="İletişim" className="w-7 h-7 object-contain transition-all duration-300" style={{zIndex: 21}} />
        )}
      </button>
      {/* Animasyonlu küçük butonlar */}
      <a
        href="https://api.whatsapp.com/send?phone=905531029922"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute top-1/2 left-full bg-blue text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500 ${open ? 'opacity-100 scale-100 pointer-events-auto translate-x-4' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
        style={{transitionDelay: open ? '80ms' : '0ms', zIndex: 19, transform: `translateY(-50%) ${open ? 'translateX(24px)' : 'translateX(0)'}`}}
        title={t('home.whatsappContact')}
      >
        <FaWhatsapp className="w-5 h-5" />
      </a>
      <a
        href="mailto:info@hospitadent.com"
        className={`absolute top-1/2 left-full bg-blue text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500 ${open ? 'opacity-100 scale-100 pointer-events-auto translate-x-20' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
        style={{transitionDelay: open ? '160ms' : '0ms', zIndex: 18, transform: `translateY(-50%) ${open ? 'translateX(72px)' : 'translateX(0)'}`}}
        title="Mail ile iletişim"
      >
        <FaEnvelope className="w-5 h-5" />
      </a>
      <a
        href="https://tk.emsal.com.tr/hospitadent/"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute top-1/2 left-full bg-blue text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500 ${open ? 'opacity-100 scale-100 pointer-events-auto translate-x-36' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
        style={{transitionDelay: open ? '240ms' : '0ms', zIndex: 17, transform: `translateY(-50%) ${open ? 'translateX(120px)' : 'translateX(0)'}`}}
        title="Telefon ile iletişim"
      >
        <FaPhone className="w-5 h-5" />
      </a>
    </div>
  );
};

// Küçük, ikonlu, animasyonlu "Biz" kartı
const BizMiniCard = ({ number, label, icon, sublabel, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(0);
  // const [animationCompleted, setAnimationCompleted] = useState(false); // Şu anda kullanılmıyor
  
  // Sayıyı parse etme fonksiyonu
  const parseNumber = (num) => {
    if (typeof num === 'string' && num.startsWith('+')) {
      return parseInt(num.replace(/\D/g, ''));
    } else if (typeof num === 'string' && num.includes('.')) {
      return parseInt(num.replace(/\D/g, ''));
    } else {
      return parseInt(num);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setDisplayNumber(0);
      // setAnimationCompleted(false); // Şu anda kullanılmıyor
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Animasyonlu sayı (count-up) - güvenilir versiyon
  useEffect(() => {
    if (!isVisible) return;
    
    const endNumber = parseNumber(number);
    if (isNaN(endNumber)) return;
    
    let current = 0;
    const duration = 1200; // ms
    const steps = 40;
    const increment = Math.ceil(endNumber / steps);
    let step = 0;
    
    const interval = setInterval(() => {
      step++;
      current += increment;
      if (current >= endNumber || step >= steps) {
        setDisplayNumber(endNumber);
        // setAnimationCompleted(true); // Şu anda kullanılmıyor
        clearInterval(interval);
      } else {
        setDisplayNumber(current);
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [isVisible, number]); // number dependency'sini geri ekledik

  // Formatlı gösterim
  const formatted = () => {
    if (displayNumber === 0 && !isVisible) return '';
    
    if (typeof number === 'string' && number.includes('.')) {
      // 3.000.000 gibi ise
      return `${displayNumber.toLocaleString('tr-TR')}${number.replace(/[0-9.]/g, '')}`;
    }
    return `${number.startsWith('+') ? '+' : ''}${displayNumber}${number.replace(/[0-9+]/g, '')}`;
  };

  return (
    <div className={`relative flex flex-col items-center justify-center rounded-xl shadow-md p-2 md:p-4 min-w-[80px] md:min-w-[110px] min-h-[70px] md:min-h-[90px] transition-all duration-700 bg-white text-[#0f4f78] group hover:shadow-2xl hover:z-20 hover:-rotate-2 hover:scale-105 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
      style={{ transitionDelay: `${delay}ms` }}>
      {/* Parıltı efekti */}
      <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 blur-xl"></div>
      <div className="mb-1 text-lg md:text-3xl text-blue-400">{icon}</div>
      <div className="font-bold text-sm md:text-lg mb-0.5 text-[#0f4f78]">{isVisible ? formatted() : ''}</div>
      <div className="text-xs md:text-sm font-semibold leading-tight text-blue-500 text-center">{label}</div>
      {sublabel && <div className="text-xs mt-0.5 text-blue-400">{sublabel}</div>}
    </div>
  );
};

const useBizData = () => {
  const { t } = useTranslation();
  return [
    { number: '+18', label: t('home.stats.years'), icon: <FaAward /> },
    { number: '+3.000.000', label: t('home.stats.patients'), icon: <FaSmile /> },
    { number: '+750', label: t('home.stats.employees'), icon: <FaUsers /> },
    { number: '+21', label: t('home.stats.branches'), icon: <FaBuilding /> },
    { number: '+4', label: t('home.stats.countries'), icon: <FaGlobe /> },
    { number: '+250', label: t('home.stats.dentists'), icon: <FaUserMd /> },
  ];
};

// RandevuFabButton: Hem mobilde hem masaüstünde tıklanınca sola doğru 3 yuvarlak buton açılır
const RandevuFabButton = ({ children, delay = 600 }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  // Hem mobilde hem masaüstünde fab buton
  return (
    <span className="relative">
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className={`font-bold shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center text-base md:text-lg outline-none focus:ring-2 focus:ring-blue-300 px-7 py-3 md:px-7 md:py-3 w-auto h-auto
            ${open ? 'rounded-full w-14 h-14 px-0 bg-white text-[#0f4f78]' : 'bg-gradient-to-r from-[#2bb3ea] to-[#0f4f78] text-white rounded-full'}
          `}
          style={{zIndex: 20, minWidth: open ? 56 : 120, minHeight: open ? 56 : 48, padding: open ? 0 : undefined, transition: 'all 0.4s cubic-bezier(.4,2,.6,1)'}}
        >
          <span className={`transition-all duration-300 ${open ? 'opacity-0 scale-75 absolute' : 'opacity-100 scale-100'}`}>{children}</span>
          {open && (
            <img src={ico} alt="Randevu" className="w-7 h-7 object-contain transition-all duration-300" style={{zIndex: 21}} />
          )}
        </button>
        {/* Sola açılan butonlar */}
        <a
          href="https://tk.emsal.com.tr/hospitadent/"
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute top-1/2 right-full bg-[#2bb3ea] text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500 ${open ? 'opacity-100 scale-100 pointer-events-auto -translate-x-4' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
          style={{transform: `translateY(-50%) ${open ? 'translateX(-56px)' : 'translateX(0)'}`, transitionDelay: open ? '80ms' : '0ms', zIndex: 19}}
          title="Telefonla Randevu"
        >
          <FaPhone className="w-5 h-5" />
        </a>
        <button
          type="button"
          onClick={openKolaytik}
          className={`absolute top-1/2 right-full bg-[#2bb3ea] text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500 ${open ? 'opacity-100 scale-100 pointer-events-auto -translate-x-20' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
          style={{transform: `translateY(-50%) ${open ? 'translateX(-104px)' : 'translateX(0)'}`, transitionDelay: open ? '160ms' : '0ms', zIndex: 18}}
          title={t('home.aiAssistantTitle')}
        >
          <FaRobot className="w-6 h-6" />
        </button>
        <a
          href="#randevu"
          className={`absolute top-1/2 right-full bg-[#2bb3ea] text-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-500 ${open ? 'opacity-100 scale-100 pointer-events-auto -translate-x-36' : 'opacity-0 scale-50 pointer-events-none translate-x-0'}`}
          style={{transform: `translateY(-50%) ${open ? 'translateX(-152px)' : 'translateX(0)'}`, transitionDelay: open ? '240ms' : '0ms', zIndex: 17}}
          title={t('home.onlineAppointmentTitle')}
        >
          <FaGlobe className="w-5 h-5" />
        </a>
      </span>
  );
};

// Hero başlığı için typewriter başlık-alt yazı - dinamik çeviri ile
const useHeroSlides = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('home.heroSlides.slide1.title'),
      subtitle: t('home.heroSlides.slide1.subtitle')
    },
    {
      title: t('home.heroSlides.slide2.title'),
      subtitle: t('home.heroSlides.slide2.subtitle')
    },
    {
      title: t('home.heroSlides.slide3.title'),
      subtitle: t('home.heroSlides.slide3.subtitle')
    },
    {
      title: t('home.heroSlides.slide4.title'),
      subtitle: t('home.heroSlides.slide4.subtitle')
    }
  ];
};

// Typewriter efektli başlık ve alt yazı hook'u
function useTypewriterSlides(slides, writeSpeed = 50, eraseSpeed = 25, pause = 15000) {
  const [index, setIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");
  const [displaySubtitle, setDisplaySubtitle] = useState("");
  const [phase, setPhase] = useState("write"); // write | pause | erase

  useEffect(() => {
    let timeout;
    const fullTitle = slides[index].title;
    const fullSubtitle = slides[index].subtitle;

    if (phase === "write") {
      if (displayTitle.length < fullTitle.length) {
        timeout = setTimeout(() => setDisplayTitle(fullTitle.slice(0, displayTitle.length + 1)), writeSpeed);
      } else if (displaySubtitle.length < fullSubtitle.length) {
        timeout = setTimeout(() => setDisplaySubtitle(fullSubtitle.slice(0, displaySubtitle.length + 1)), writeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pause"), pause);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erase"), 1000);
    } else if (phase === "erase") {
      if (displaySubtitle.length > 0) {
        timeout = setTimeout(() => setDisplaySubtitle(displaySubtitle.slice(0, -1)), eraseSpeed);
      } else if (displayTitle.length > 0) {
        timeout = setTimeout(() => setDisplayTitle(displayTitle.slice(0, -1)), eraseSpeed);
      } else {
        setIndex((prev) => (prev + 1) % slides.length);
        setPhase("write");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayTitle, displaySubtitle, phase, slides, index, writeSpeed, eraseSpeed, pause]);

  useEffect(() => {
    if (phase === "write") {
      setDisplayTitle("");
      setDisplaySubtitle("");
    }
  }, [index, phase]);

  return { displayTitle, displaySubtitle };
}

// Kolaytik açma fonksiyonu
const openKolaytik = () => {
  // Kolaytik'in kendi ikonunu bul ve tıkla
  const kolaytikIcon = document.querySelector('[data-kolaytik], .kolaytik-icon, #kolaytik-icon, [class*="kolaytik"], [id*="kolaytik"]');
  if (kolaytikIcon) {
    kolaytikIcon.click();
  } else {
    // Tüm butonları kontrol et
    const allButtons = document.querySelectorAll('button, [role="button"], .btn, [class*="button"]');
    for (const button of allButtons) {
      const buttonText = button.textContent?.toLowerCase() || '';
      const buttonTitle = button.title?.toLowerCase() || '';
      const buttonAriaLabel = button.getAttribute('aria-label')?.toLowerCase() || '';
      if (buttonText.includes('kolaytik') || 
          buttonTitle.includes('kolaytik') || 
          buttonAriaLabel.includes('kolaytik')) {
        button.click();
        break;
      }
    }
  }
};

const Hero = () => {
  const { t } = useTranslation();
  const heroSlides = useHeroSlides();
  const { displayTitle, displaySubtitle } = useTypewriterSlides(heroSlides, 50, 25, 15000);

  // Mobilde tam ekran için --vh değişkenini ayarla
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <>
      <SEOHead 
        title={t('home.title')}
        description={t('home.subtitle')}
        keywords="hospitadent ana sayfa, diş hekimi randevu, implant tedavisi, ortodonti, diş beyazlatma, zirkonyum kaplama, diş kliniği, diş hastanesi"
        url="https://hospitadent.com/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Hospitadent Ana Sayfa",
          "description": t('home.subtitle'),
          "url": "https://hospitadent.com/",
          "mainEntity": {
            "@type": "Organization",
            "name": "Hospitadent",
            "url": "https://hospitadent.com",
            "logo": "https://hospitadent.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-444-99-22",
              "contactType": "customer service",
              "availableLanguage": ["Turkish", "English", "German", "Russian", "Arabic"]
            }
          }
        }}
      />
      <section className="full-mobile-screen flex flex-col items-center justify-center bg-transparent" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
        {/* Arka Plan Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none z-0"
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            width: '100vw',
            height: 'calc(var(--vh, 1vh) * 100)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 0,
            padding: 0,
            zIndex: 0,
          }}
          src={require('../assets/videos/firat_okur.mp4')}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Ana içerik - ortalanmış */}
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto z-10 relative text-center w-full px-4">
          {/* Logo - sadece mobilde görünür */}
          <div className="mb-4 md:hidden">
            <img src={logo} alt="Hospitadent Logo" className="w-64 h-32 object-contain" />
          </div>
          <SpotlightTitle delay={200}>
            {displayTitle}
          </SpotlightTitle>
          <AnimatedSubtitle delay={400}>
            {displaySubtitle}
          </AnimatedSubtitle>
          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8 sm:mb-10 md:mb-12 items-center justify-center">
            <RandevuFabButton delay={600}>{t('home.button')}</RandevuFabButton>
            <ContactFabButton delay={800} />
          </div>
          {/* Biz kısmı - görseldeki gibi grid ve küçük kartlar, animasyonlu */}
          <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mt-4 md:mt-6 mb-8 md:mb-12">
            {useBizData().map((item, i) => (
              <BizMiniCard key={i} {...item} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;