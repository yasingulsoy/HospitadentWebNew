import { useState, useEffect, useMemo, useCallback } from 'react';
import { servicesData, navLinksData } from '../data/data';
import { useTranslation } from 'react-i18next';

export const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslation();

  // Tüm arama verilerini hazırla
  const allSearchData = useMemo(() => {
    const data = [];

    // Hizmetler
    servicesData.forEach(service => {
      data.push({
        type: 'service',
        title: service.title,
        description: service.desc,
        path: `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
        category: 'Hizmetler',
        keywords: [
          service.title.toLowerCase(),
          service.desc.toLowerCase(),
          'diş', 'tedavi', 'hizmet', 'sağlık'
        ]
      });
    });

    // Menü linkleri
    const flattenLinks = (links) => {
      let arr = [];
      links.forEach(l => {
        if (l.path && !l.external) {
          arr.push({
            type: 'page',
            title: l.name,
            description: `${l.name} sayfası`,
            path: `/${l.path}`,
            category: 'Sayfalar',
            keywords: [
              l.name.toLowerCase(),
              'sayfa', 'bilgi', 'hakkında'
            ]
          });
        }
        if (l.submenu) arr = arr.concat(flattenLinks(l.submenu));
      });
      return arr;
    };

    // navLinksData fonksiyonunu aktif dil ile çağır
    const links = navLinksData(i18n.language);
    data.push(...flattenLinks(links));

    // Şubeler
    const branches = [
      'Mecidiyeköy', 'Bağcılar', 'Bakırköy', 'Fatih', 'Çamlıca', 'Pendik', 
      'Şerifali', 'Cevizlibağ', 'Göktürk', 'Kayseri', 'Bodrum', 'Alanya', 
      'Antalya', 'Ankara', 'Denizli', 'Kocaeli', 'Bursa', 'Almanya', 'Hollanda'
    ];

    branches.forEach(branch => {
      data.push({
        type: 'branch',
        title: `${branch} Şubesi`,
        description: `Hospitadent ${branch} şubesi iletişim bilgileri ve hizmetleri`,
        path: `/subelerimiz/${branch.toLowerCase().replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')}`,
        category: 'Şubeler',
        keywords: [
          branch.toLowerCase(),
          'şube', 'hastane', 'klinik', 'adres', 'iletişim'
        ]
      });
    });

    // İletişim bilgileri
    data.push({
      type: 'contact',
      title: 'İletişim',
      description: 'Telefon: 444 99 22 | E-posta: info@hospitadent.com',
      path: '/contact',
      category: 'İletişim',
      keywords: [
        'iletişim', 'telefon', 'email', 'adres', '444 99 22', 'info@hospitadent.com'
      ]
    });

    // Tedavi türleri
    const treatments = [
      'İmplant', 'Ortodonti', 'Diş Beyazlatma', 'Zirkonyum Kaplama', 'Porselen Kaplama',
      'Lamine Kaplama', 'Gülüş Tasarımı', 'Hollywood Smile', 'Diş Teli', 'Çocuk Diş Hekimliği',
      'Kanal Tedavisi', 'Diş Eti Tedavisi', 'Protez', 'Diş Çekimi', 'Diş Dolgusu'
    ];

    treatments.forEach(treatment => {
      data.push({
        type: 'treatment',
        title: treatment,
        description: `${treatment} tedavisi hakkında detaylı bilgi`,
        path: `/tedaviler/${treatment.toLowerCase().replace(/\s+/g, '-')}`,
        category: 'Tedaviler',
        keywords: [
          treatment.toLowerCase(),
          'tedavi', 'diş', 'sağlık', 'hekimlik'
        ]
      });
    });

    return data;
  }, [i18n.language]);

  // Arama fonksiyonu
  const performSearch = useCallback((searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    const queryLower = searchQuery.toLowerCase();
    const queryWords = queryLower.split(' ').filter(word => word.length > 0);
    
    const filteredResults = allSearchData.filter(item => {
      // Tam eşleşme kontrolü
      const titleMatch = item.title.toLowerCase().includes(queryLower);
      const descMatch = item.description.toLowerCase().includes(queryLower);
      const categoryMatch = item.category.toLowerCase().includes(queryLower);
      
      // Anahtar kelime kontrolü
      const keywordMatch = item.keywords.some(keyword => 
        keyword.includes(queryLower) || queryWords.some(word => keyword.includes(word))
      );
      
      return titleMatch || descMatch || categoryMatch || keywordMatch;
    });

    // Sonuçları önem sırasına göre sırala
    const sortedResults = filteredResults.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(queryLower);
      const bTitleMatch = b.title.toLowerCase().includes(queryLower);
      
      // Başlık eşleşmesi daha önemli
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      
      // Kategori önceliği
      const categoryPriority = { 'Hizmetler': 1, 'Tedaviler': 2, 'Şubeler': 3, 'Sayfalar': 4, 'İletişim': 5 };
      const aPriority = categoryPriority[a.category] || 6;
      const bPriority = categoryPriority[b.category] || 6;
      
      if (aPriority !== bPriority) return aPriority - bPriority;
      
      // Alfabetik sıralama
      return a.title.localeCompare(b.title);
    });

    setResults(sortedResults);
    setLoading(false);
  }, [allSearchData]);

  useEffect(() => {
    performSearch(query);
  }, [query, performSearch]);

  return { results, loading, performSearch };
}; 