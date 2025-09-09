import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import CountryFlag from "react-country-flag";
import { Link as RouterLink } from "react-router-dom";
import logo from '../../assets/images/logo.webp';

const MobileNavLinks = ({ item, handleNav }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  if (item.submenu) {
    return (
      <li className="w-full">
        <button
          className="flex justify-between items-center w-full px-3 py-3 text-left text-white hover:text-blue-300 focus:outline-none border-b border-white/10"
          onClick={() => setOpen(!open)}
        >
          <span className="font-bold text-base">{t(item.name)}</span>
          <svg className={`ml-2 w-5 h-5 transform transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
        {open && (
          <ul className="pl-3 border-l border-white/20 bg-white/5">
            {item.submenu.map((sub, idx) => (
              <MobileNavLinks item={sub} key={idx} handleNav={handleNav} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  if (item.external) {
    return (
      <li className="w-full">
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-3 text-white hover:text-blue-300 border-b border-white/10 font-bold text-base"
          onClick={handleNav}
        >
          {t(item.name)}
        </a>
      </li>
    );
  }

  // Eğer path boşsa veya # ile başlıyorsa scroll link, değilse router link
  if (!item.path || item.path === '' || item.path.startsWith('#')) {
    return (
      <li className="w-full">
        <a
          href={`#${item.path || 'home'}`}
          className="block px-3 py-3 text-white hover:text-blue-300 border-b border-white/10 font-bold text-base"
          onClick={handleNav}
        >
          {t(item.name)}
        </a>
      </li>
    );
  }

  // Sayfa yönlendirmesi için RouterLink kullan
  return (
    <li className="w-full">
              <RouterLink
          to={item.path}
          className="block px-3 py-3 text-white hover:text-blue-300 border-b border-white/10 font-bold text-base"
          onClick={handleNav}
        >
        {t(item.name)}
      </RouterLink>
    </li>
  );
};

const ResponsiveMenu = ({ navLinksData, nav, handleNav, selectedLang, setSelectedLang }) => {
  const { t, i18n } = useTranslation();
  const [showLang, setShowLang] = useState(false);
  // Arama için ek state'ler
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const menuRef = useRef(null);
  
  // Dil listesi - useMemo ile optimize edilmiş
  const languages = useMemo(() => [
    { code: 'tr', name: 'Türkçe', flag: 'TR' },
    { code: 'en', name: 'English', flag: 'GB' },
    { code: 'fr', name: 'Français', flag: 'FR' },
    { code: 'de', name: 'Deutsch', flag: 'DE' },
    { code: 'ru', name: 'Русский', flag: 'RU' },
    { code: 'es', name: 'Español', flag: 'ES' },
    { code: 'ar', name: 'العربية', flag: 'SA' },
  ], []);
  
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
  }, [languages]);

  // Typewriter animasyon verileri - dinamik çeviri ile
  // const useTypewriterWords = () => {
  //   const { t } = useTranslation();
  //   return t('home.typewriterWords', { returnObjects: true }).slice(0, 5);
  // };
  
  // function useTypewriter(words, speed = 90, pause = 1200) {
  //   const [index, setIndex] = useState(0);
  //   const [subIndex, setSubIndex] = useState(0);
  //   const [deleting, setDeleting] = useState(false);
  //   const [blink, setBlink] = useState(true);
  //   
  //   useEffect(() => {
  //     if (subIndex === words[index].length + 1 && !deleting) {
  //       setTimeout(() => setDeleting(true), pause);
  //       return;
  //     }
  //     if (subIndex === 0 && deleting) {
  //       setDeleting(false);
  //       setIndex((prev) => (prev + 1) % words.length);
  //       return;
  //     }
  //     const timeout = setTimeout(() => {
  //       setSubIndex((prev) => prev + (deleting ? -1 : 1));
  //     }, deleting ? speed / 2 : speed);
  //     return () => clearTimeout(timeout);
  //   }, [subIndex, index, deleting, words, speed, pause]);
  //   
  //   useEffect(() => {
  //     const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
  //     return () => clearInterval(blinkInterval);
  //   }, []);
  //   
  //   return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
  // }

  // navLinksData'dan düz başlık listesi çıkar
  function flattenLinks(links) {
    let arr = [];
    links.forEach(l => {
      arr.push({ name: l.name, path: l.path });
      if (l.submenu) arr = arr.concat(flattenLinks(l.submenu));
    });
    return arr;
  }
  const allLinks = flattenLinks(navLinksData);

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
      window.location.href = `/search?q=${encodeURIComponent(searchValue.trim())}`;
      setSearchOpen(false);
      setSearchValue("");
    }
  }

  // Menü açıkken body scroll'u engelle
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [nav]);



  // Menü dışına tıklayınca kapat
  useEffect(() => {
    if (!nav) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        handleNav();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [nav, handleNav]);

  // Dil dropdown'ının dışına tıklandığında kapanması
  useEffect(() => {
    if (!showLang) return;
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown-mobile')) {
        setShowLang(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLang]);

  return (
    <div
      ref={menuRef}
      className={`flex flex-col justify-start items-center md:hidden w-full fixed top-0 left-0 duration-500 h-screen bg-[rgba(15,79,120,0.98)] z-50 ${nav ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Kapatma butonu */}
      <button 
        onClick={handleNav} 
        className="fixed top-2 right-2 text-white text-2xl hover:text-blue-300 transition-colors z-50 bg-[#0f4f78] w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
        aria-label="Menüyü kapat"
      >
        &times;
      </button>
      
      {/* Logo ve başlık */}
      <div className="w-full flex flex-col items-center pt-6 pb-3 px-4 bg-white/10 backdrop-blur-sm">
        <a 
          href={currentLanguage.code === 'tr' ? '/' : `/${currentLanguage.code}`} 
          className="flex flex-col items-center" 
          onClick={handleNav}
        >
          <img src={logo} alt="Hospitadent Logo" className="h-10 w-auto mb-2" />
        </a>
      </div>
      
      {/* Menü içeriği */}
      <div className="w-full flex-1 flex flex-col items-center gap-1 pt-2 pb-3 px-4 overflow-y-auto">
        {/* Anasayfa seçeneği */}
        <RouterLink
          to={currentLanguage.code === 'tr' ? '/' : `/${currentLanguage.code}`}
          className="block w-full px-3 py-3 text-white hover:text-blue-300 border-b border-white/10 font-bold text-lg text-left"
          onClick={handleNav}
        >
          {t('navbar.home')}
        </RouterLink>
        
        {/* İletişim İkonları ve Arama - Yukarı taşındı */}
        <div className="w-full flex justify-center gap-3 py-3 border-b border-white/10">
          <a href="tel:4449922" className="flex items-center gap-2 text-white hover:text-blue-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 01-.45 2.45l-.9.9a16.06 16.06 0 006.36 6.36l.9-.9a2 2 0 012.45-.45l2.2 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" />
            </svg>
            <span>444 99 22</span>
          </a>
          <a href="mailto:info@hospitadent.com" className="flex items-center gap-2 text-white hover:text-blue-300 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Mail</span>
          </a>
          <button
            className="rounded bg-white/20 text-white hover:bg-white/30 transition p-2"
            onClick={() => setSearchOpen((v) => !v)}
            tabIndex={0}
            aria-label="Arama"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </button>
        </div>
        
        {/* Arama input'u */}
        {searchOpen && (
          <div className="w-full px-3 pb-3">
            <div className="relative w-full">
              <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={handleSearchKey}
                className="w-full px-3 py-2 rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white bg-white/10 placeholder-white/70 text-base"
                placeholder={t('navbar.searchPlaceholder')}
              />
              {searchResults.length > 0 && (
                <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 w-full max-h-40 overflow-auto">
                  {searchResults.map((res, i) => (
                    <li key={res.path}>
                      <a
                        href={`/${res.path}`}
                        className="block px-3 py-2 hover:bg-primary hover:text-white text-blue text-sm"
                        onClick={() => { setSearchOpen(false); setSearchValue(""); handleNav(); }}
                      >
                        {t(res.name)}
                      </a>
                    </li>
                  ))}
                  <li className="border-t border-gray-200">
                    <button
                      onClick={() => {
                        window.location.href = `/search?q=${encodeURIComponent(searchValue.trim())}`;
                        setSearchOpen(false);
                        setSearchValue("");
                        handleNav();
                      }}
                      className="block w-full px-3 py-2 hover:bg-primary hover:text-white text-blue text-sm text-left"
                    >
                      {t('navbar.viewAllResults')} ({searchResults.length})
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
        

        
        {/* Menü linkleri */}
        <ul className="w-full flex-1 flex flex-col gap-0 overflow-y-auto pb-6">
          {navLinksData.map((item, idx) => (
            <MobileNavLinks item={item} key={idx} handleNav={handleNav} />
          ))}
        </ul>
        
        {/* Sosyal medya ve iletişim */}
        <div className="flex flex-col items-center gap-3 mt-3 mb-3">
          <div className="flex gap-3">
            <a href="https://www.facebook.com/hospitadent" target="_blank" rel="noopener noreferrer" className="bg-[#2bb3ea] rounded-full flex items-center justify-center text-white hover:bg-[#0f4f78] transition w-9 h-9 hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="https://x.com/Hospitadent" target="_blank" rel="noopener noreferrer" className="bg-[#2bb3ea] rounded-full flex items-center justify-center text-white hover:bg-[#0f4f78] transition w-9 h-9 hover:scale-110">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/c/HospitadentTV" target="_blank" rel="noopener noreferrer" className="bg-[#2bb3ea] rounded-full flex items-center justify-center text-white hover:bg-[#0f4f78] transition w-9 h-9 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-[#2bb3ea] rounded-full flex items-center justify-center text-white hover:bg-[#0f4f78] transition w-9 h-9 hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-[#2bb3ea] rounded-full flex items-center justify-center text-white hover:bg-[#0f4f78] transition w-9 h-9 hover:scale-110">
              <FaLinkedinIn />
            </a>
            <a href="https://api.whatsapp.com/send?phone=905531029922" target="_blank" rel="noopener noreferrer" className="bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition w-9 h-9 hover:scale-110">
              <FaWhatsapp />
            </a>
          </div>
          <div className="flex flex-col items-center gap-1 text-white text-base">
            <a href="tel:4449922" className="flex items-center gap-1 hover:text-blue-300 transition"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 01-.45 2.45l-.9.9a16.06 16.06 0 006.36 6.36l.9-.9a2 2 0 012.45-.45l2.2 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" /></svg> 444 99 22</a>
            <a href="mailto:info@hospitadent.com" className="flex items-center gap-1 hover:text-blue-300 transition"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg> info@hospitadent.com</a>
          </div>
          
          {/* Dil seçimi - Mobilde daha görünür */}
          <div className="relative w-full max-w-xs language-dropdown-mobile">
            <button
              className="flex items-center justify-center rounded bg-white/20 text-white font-bold hover:bg-white/30 transition gap-2 px-4 py-3 text-base w-full"
              onClick={() => setShowLang(!showLang)}
            >
              <CountryFlag countryCode={currentLanguage.flag} svg className="w-6 h-6 rounded" />
              <span className="text-lg">{currentLanguage.name}</span>
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showLang && (
              <ul className="absolute left-0 right-0 mt-2 bg-[#0f4f78] text-white rounded shadow-xl z-50 w-full">
                {languages.map((lang, idx) => (
                  <li key={lang.code}>
                    <button
                      className={`flex items-center w-full text-left px-4 py-3 text-base ${lang.code === currentLanguage.code ? 'bg-white text-[#0f4f78] font-bold cursor-default' : 'hover:bg-[#2bb3ea]'}`}
                      onClick={() => { 
                        if(lang.code !== currentLanguage.code) { 
                          // Önce i18n dilini değiştir
                          i18n.changeLanguage(lang.code);
                          
                          // Mevcut path'i al
                          const currentPath = window.location.pathname;
                          
                          // Path'i dil koduna göre güncelle
                          let newPath;
                          if (lang.code === 'tr') {
                            // Türkçe için /tr prefix'ini kaldır
                            newPath = currentPath.replace(/^\/(en|fr|de|ru|es|ar)/, '');
                            if (newPath === '') newPath = '/';
                          } else {
                            // Diğer diller için /dil prefix'ini ekle
                            if (currentPath.startsWith('/')) {
                              newPath = `/${lang.code}${currentPath}`;
                            } else {
                              newPath = `/${lang.code}/${currentPath}`;
                            }
                          }
                          
                          // Sayfayı yönlendir
                          window.location.href = newPath;
                        } 
                      }}
                      disabled={lang.code === currentLanguage.code}
                    >
                      <CountryFlag countryCode={lang.flag} svg className="w-6 h-6 rounded" />
                      <span className="ml-3 text-lg">{lang.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
