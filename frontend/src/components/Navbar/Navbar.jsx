import React, { useState, useEffect, useMemo } from "react";
import NavLinks from "./NavLinks";
import { navLinksData } from "../../data/data";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from '../../assets/images/logo.webp';
import CountryFlag from 'react-country-flag';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getUrlForLanguage } from '../../utils/urlMapping';

const languages = [
  { code: 'tr', name: 'Türkçe', flag: 'TR' },
  { code: 'en', name: 'English', flag: 'GB' },
  { code: 'fr', name: 'Français', flag: 'FR' },
  { code: 'de', name: 'Deutsch', flag: 'DE' },
  { code: 'ru', name: 'Русский', flag: 'RU' },
  { code: 'es', name: 'Español', flag: 'ES' },
  { code: 'ar', name: 'العربية', flag: 'SA' },
];

// Typewriter animasyon verileri - dinamik çeviri ile
const useTypewriterWords = () => {
  const { t, i18n } = useTranslation();
  return React.useMemo(() => t('home.typewriterWords', { returnObjects: true }), [t]);
};

function useTypewriter(words, speed = 60, pause = 800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
}

const Navbar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = React.useRef(null);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  // Mevcut dili URL'den algıla - useMemo ile optimize edilmiş
  const currentLanguage = useMemo(() => {
    const path = window.location.pathname;
    
    // /en, /fr, /de gibi dil kodlarını kontrol et
    if (path.startsWith('/en')) {
      return languages.find(lang => lang.code === 'en') || languages[0];
    } else if (path.startsWith('/fr')) {
      return languages.find(lang => lang.code === 'fr') || languages[0];
    } else if (path.startsWith('/de')) {
      return languages.find(lang => lang.code === 'de') || languages[0];
    } else if (path.startsWith('/ru')) {
      return languages.find(lang => lang.code === 'ru') || languages[0];
    } else if (path.startsWith('/es')) {
      return languages.find(lang => lang.code === 'es') || languages[0];
    } else if (path.startsWith('/ar')) {
      return languages.find(lang => lang.code === 'ar') || languages[0];
    } else {
      return languages.find(lang => lang.code === 'tr') || languages[0];
    }
  }, []);
  
  const [selectedLang, setSelectedLang] = useState(currentLanguage);
  


  const handleNav = () => {
    setNav(!nav);
  };

  // Typewriter animasyon verileri - dinamik çeviri ile
  const typewriterWords = useTypewriterWords();
  const typewriterText = useTypewriter(typewriterWords);

  // navLinksData'dan düz başlık listesi çıkar
  function flattenLinks(links) {
    let arr = [];
    links.forEach(l => {
      arr.push({ name: l.name, path: l.path });
      if (l.submenu) arr = arr.concat(flattenLinks(l.submenu));
    });
    return arr;
  }
  // navLinksData fonksiyonunu mevcut dil ile çağır
  const links = navLinksData(i18n.language);
  const allLinks = flattenLinks(links);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (searchValue) {
      setSearchResults(
        allLinks.filter(l => t(l.name).toLowerCase().includes(searchValue.toLowerCase()))
      );
      } else {
      setSearchResults([]);
    }
  }, [searchValue, allLinks, t]);

  function handleSearchKey(e) {
    if (e.key === "Enter" && searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchOpen(false);
      setSearchValue("");
    }
  }

  // Dil değişince i18n dilini de değiştir
  const handleLangChange = (lang) => {
    // Eğer aynı dil seçilmişse hiçbir şey yapma
    if (lang.code === currentLanguage.code) {
      setLangOpen(false);
      return;
    }

    // Önce i18n dilini değiştir
    i18n.changeLanguage(lang.code);
    
    // Mevcut path'i al
    const currentPath = window.location.pathname;
    
    // Yeni URL'yi oluştur
    const newPath = getUrlForLanguage(currentPath, lang.code);
    
    // Sayfayı yönlendir
    window.location.href = newPath;
  };

  // Dil dropdown'ının dışına tıklandığında kapanması
  useEffect(() => {
    if (!langOpen) return;
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown')) {
        setLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langOpen]);

  return (
    <>
      {/* Mobilde hamburger menü butonu */}
      <button className="md:hidden flex items-center justify-center text-white text-2xl fixed top-2 left-2 z-[60] bg-[#0f4f78] w-10 h-10 rounded-full shadow-lg hover:bg-[#2bb3ea] transition-colors duration-300" onClick={handleNav}>
        <FaBars />
      </button>

      {/* Mobilde üst beyaz bar */}
      <div className="w-full bg-white md:hidden pt-2">
        <div className="flex items-center justify-between px-3 py-1">
          {/* Sol: Boş alan (hamburger menü butonu için) */}
          <div className="w-10"></div>
          
          {/* Orta: Telefon, Mail ve Arama */}
          <div className="flex items-center gap-3">
            <a href="tel:4449922" className="flex items-center gap-2 text-[#0f4f78] hover:text-[#2bb3ea] transition text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 01-.45 2.45l-.9.9a16.06 16.06 0 006.36 6.36l.9-.9a2 2 0 012.45-.45l2.2 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" />
              </svg>
              <span>444 99 22</span>
            </a>
            <a href="mailto:info@hospitadent.com" className="flex items-center gap-2 text-[#0f4f78] hover:text-[#2bb3ea] transition text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Mail</span>
            </a>
            <button
              className="rounded bg-gray-200 text-[#0f4f78] hover:bg-gray-300 transition p-2"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
            {searchOpen && (
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onKeyDown={handleSearchKey}
                  className="px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-[#0f4f78] text-sm min-w-[200px]"
                  placeholder={t('navbar.searchPlaceholder')}
                />
                {searchResults.length > 0 && (
                  <ul className="absolute left-0 top-full mt-1 bg-white rounded shadow-lg z-50 w-full max-h-40 overflow-auto">
                    {searchResults.map((res, i) => (
                      <li key={res.path}>
                        <a
                          href={`/${res.path}`}
                          className="block px-3 py-2 hover:bg-primary hover:text-white text-[#0f4f78] text-sm"
                          onClick={() => { setSearchOpen(false); setSearchValue(""); }}
                        >
                          {t(res.name)}
                        </a>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => {
                          navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
                          setSearchOpen(false);
                          setSearchValue("");
                        }}
                        className="block w-full px-3 py-2 hover:bg-primary hover:text-white text-[#0f4f78] text-sm text-left"
                      >
                        {t('navbar.viewAllResults')} ({searchResults.length})
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
          
          {/* Sağ: Boş alan (denge için) */}
          <div className="w-10"></div>
        </div>
      </div>

      {/* Ana Navbar */}
      <header className="sticky top-0 z-30 bg-white shadow-md w-full hidden md:block">
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-2 sm:px-4 py-2 gap-2">
          {/* Sol: Logo */}
          <div className="flex items-center flex-shrink-0 w-auto h-[clamp(2.2rem,5vw,3.5rem)] -mt-7">
            <a 
              href={currentLanguage.code === 'tr' ? '/' : `/${currentLanguage.code}`} 
              className="block select-none h-[clamp(2rem,4vw,3.2rem)]" 
              style={{marginBottom: '0px'}}
            >
              <img src={logo} alt="Logo" className="h-full w-auto mx-auto" />
            </a>
          </div>
          {/* Mobilde hamburger */}
          {/* Orta: Menü + arama + typewriter */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <ul className="flex items-center gap-0.5 text-[clamp(0.85rem,1.5vw,1.1rem)] mb-1">
              {links.map((item, index) => (
                <li key={index} className="text-blue font-bold tracking-wide hover:text-primary transition-colors duration-200 cursor-pointer whitespace-nowrap text-[clamp(0.9rem,2vw,1.3rem)]">
                  <NavLinks item={item} handleNav={handleNav} />
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-4">
              {/* Arama */}
              <div className="flex items-center gap-2">
                <button
                  className="rounded bg-gray-200 text-blue hover:bg-gray-300 transition p-2"
                  onClick={() => setSearchOpen((v) => !v)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </button>
                {/* Typewriter sadece webde (md ve üstü) */}
                <div className="hidden md:flex items-center relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchValue}
                      onChange={e => setSearchValue(e.target.value)}
                      onKeyDown={handleSearchKey}
                    className="px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary text-blue text-sm min-w-[200px] shadow-md focus:shadow-lg transition-shadow duration-200"
                    placeholder={searchValue ? '' : typewriterText}
                    style={{paddingLeft: '0.5rem', border: 'none', boxShadow: '0 2px 8px 0 rgba(15,79,120,0.07)'}}
                  />
                  </div>
                {/* Eski typewriter ve input yapısı kaldırıldı */}
              </div>

            </div>
          </div>
          {/* Sağ: Dil seçici ve sosyal medya */}
          <div className="flex flex-col items-end gap-2 min-w-[120px]">
            <div className="relative language-dropdown">
              <button
                className="flex items-center rounded bg-gray-200 text-blue font-bold hover:bg-gray-300 transition gap-1 px-3 py-1 text-[clamp(0.95rem,1.7vw,1.15rem)] min-w-[110px] md:min-w-[130px] lg:min-w-[150px] h-10 md:h-11 lg:h-12"
                style={{fontSize: 'clamp(0.95rem,1.1vw,1.15rem)', padding: '0.5rem 1.2rem'}}
                onClick={() => setLangOpen(!langOpen)}
              >
                <CountryFlag countryCode={currentLanguage.flag} svg className="w-5 h-5 md:w-6 md:h-6 rounded" />
                <span className="whitespace-nowrap">{currentLanguage.name}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {langOpen && (
                <ul className="absolute right-0 top-full mt-1 bg-primary text-white rounded shadow-xl z-50 min-w-[8rem] md:min-w-[10rem] lg:min-w-[12rem] text-base md:text-lg py-2">
                  {languages.map((lang, idx) => (
                    <li key={lang.code}>
                      <button
                        className={`flex items-center w-full text-left px-4 py-2 md:px-5 md:py-2.5 text-base md:text-lg ${lang.code === currentLanguage.code ? 'bg-white text-primary font-bold cursor-default' : 'hover:bg-blue-900'}`}
                        onClick={() => handleLangChange(lang)}
                        disabled={lang.code === currentLanguage.code}
                      >
                        <CountryFlag countryCode={lang.flag} svg className="w-5 h-5 md:w-6 md:h-6 rounded" />
                        <span className="ml-2 whitespace-nowrap">{lang.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Sosyal medya ikonları */}
            <div className="hidden sm:flex items-center gap-2 mt-1">
              <a href="https://www.facebook.com/hospitadent" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaFacebookF className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://x.com/Hospitadent" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaXTwitter className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://www.youtube.com/c/HospitadentTV" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://www.linkedin.com/company/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=905531029922" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110">
                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobil Menü */}
      <ResponsiveMenu
        navLinksData={links}
        nav={nav}
        handleNav={handleNav}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
      />
    </>
  );
}

export default Navbar;