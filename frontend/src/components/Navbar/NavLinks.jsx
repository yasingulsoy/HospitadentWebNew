import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { getUrlForLanguage } from '../../utils/urlMapping';

const NavLinks = ({ item, handleNav, depth = 0 }) => {
  const [dropdown, setDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  // Eğer submenu varsa ve en az bir alt eleman varsa açılır menü göster
  if (item.submenu && Array.isArray(item.submenu) && item.submenu.length > 0) {
    const isRoot = depth === 0;
    
    // Eğer path de varsa hem tıklama hem hover çalışmalı
    if (item.path && item.path !== '' && !item.path.startsWith('#')) {
      const currentLanguage = i18n.language;
      // İletişim path'leri için doğrudan kullan
      const contactPaths = [
        '/en/contact', '/fr/contact', '/de/kontakt', '/es/contacto', '/ru/kontakty', '/ar/altwasul', '/iletisim'
      ];
      const correctPath = contactPaths.includes(item.path) ? item.path : getUrlForLanguage(item.path, currentLanguage);
      return (
        <li
          className={`relative group cursor-pointer text-blue-600 text-lg font-bold tracking-wide hover:text-blue-500 transition-colors duration-200`}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <RouterLink
            to={correctPath}
            onClick={handleNav}
            className={`flex items-center gap-1 py-3 px-4 ${!isRoot ? 'justify-between w-full' : ''}`}
          >
            {t(item.name)}
            {item.submenu && item.submenu.some(sub => sub.submenu) && (
              <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${dropdown && !isRoot ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            )}
          </RouterLink>
          <ul
            className={`absolute ${isRoot ? 'left-0 top-full' : 'left-full top-0'} min-w-[220px] bg-white shadow-xl rounded-lg py-2 z-30 transition-all duration-300 ${dropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
          >
            {item.submenu.map((sub, idx) => (
              <NavLinks item={sub} key={idx} handleNav={handleNav} depth={depth + 1} />
            ))}
          </ul>
        </li>
      );
    }
    
    // Sadece submenu varsa (path yoksa)
    return (
      <li
        className={`relative group cursor-pointer text-blue-600 text-lg font-bold tracking-wide hover:text-blue-500 transition-colors duration-200`}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <span className={`flex items-center gap-1 py-3 px-4 ${!isRoot ? 'justify-between w-full' : ''}`}>
          {t(item.name)}
          {item.submenu && item.submenu.some(sub => sub.submenu) && (
            <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${dropdown && !isRoot ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          )}
        </span>
        <ul
          className={`absolute ${isRoot ? 'left-0 top-full' : 'left-full top-0'} min-w-[220px] bg-white shadow-xl rounded-lg py-2 z-30 transition-all duration-300 ${dropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
        >
          {item.submenu.map((sub, idx) => (
            <NavLinks item={sub} key={idx} handleNav={handleNav} depth={depth + 1} />
          ))}
        </ul>
      </li>
    );
  }

  // Eğer external link ise <a> ile aç
  if (item.external) {
    return (
      <li className="cursor-pointer text-blue-600 text-lg font-bold tracking-wide hover:text-blue-500 hover:bg-blue-50 transition-colors duration-200">
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3"
        >
          {t(item.name)}
        </a>
      </li>
    );
  }

  // Normal menü (alt menüsü olmayanlar)
  // Eğer path boşsa veya # ile başlıyorsa scroll link, değilse router link
  if (!item.path || item.path === '' || item.path.startsWith('#')) {
    return (
      <li className="cursor-pointer text-blue-600 text-lg font-bold tracking-wide hover:text-blue-500 hover:bg-blue-50 transition-colors duration-200">
        <ScrollLink
          to={item.path || 'home'}
          offset={-40}
          smooth={true}
          duration={500}
          onClick={handleNav}
          className="block px-4 py-3"
        >
          {t(item.name)}
        </ScrollLink>
      </li>
    );
  }

  // Sayfa yönlendirmesi için RouterLink kullan
  // Mevcut dile göre doğru URL'yi oluştur
  const currentLanguage = i18n.language;
  const correctPath = getUrlForLanguage(item.path, currentLanguage);
  
  return (
    <li className="cursor-pointer text-blue-600 text-lg font-bold tracking-wide hover:text-blue-500 hover:bg-blue-50 transition-colors duration-200">
      <RouterLink
        to={correctPath}
        onClick={handleNav}
        className="block px-4 py-3"
      >
        {t(item.name)}
      </RouterLink>
    </li>
  );
};

export default NavLinks;
