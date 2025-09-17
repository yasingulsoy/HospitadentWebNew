import React from "react";
import logo from "../../assets/images/logo.webp";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#fafbfc] pt-10 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* 4 Sütun */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 flex-1 w-full">
          {/* Kurumsal */}
          <div>
            <h4 className="text-blue font-bold mb-3 tracking-wide text-base md:text-lg uppercase">KURUMSAL</h4>
            <ul className="space-y-1 text-sm md:text-base text-[#0f4f78]">
              <li><a href="/hakkimizda">Hakkımızda</a></li>
              <li><a href="/franchise">Franchise – Ortaklık Başvurusu</a></li>
              <li><a href="/careers">İK İş Başvuru Formu</a></li>
              <li><a href="/corporate">Kurumsal Kimlik</a></li>
              <li><a href="/policies">Politikalarımız</a></li>
              <li><a href="/cookies">Çerez Politikamız</a></li>
              <li><a href="/privacy">Gizlilik İlkesi</a></li>
              <li><a href="/kvkk">KVKK</a></li>
              <li><a href="/report">İstenmeyen Olay Bildirim Formu</a></li>
            </ul>
          </div>
          {/* Faydalı Linkler */}
          <div>
            <h4 className="text-blue font-bold mb-3 tracking-wide text-base md:text-lg uppercase">FAYDALI LİNKLER</h4>
            <ul className="space-y-1 text-sm md:text-base text-[#0f4f78]">
              <li><a href="/doctors">Hekimlerimiz</a></li>
              <li><a href="/partners">Anlaşmalı Kurumlar</a></li>
              <li><a href="/reviews">Hasta Yorumları</a></li>
              <li><a href="/videos">Hasta Memnuniyet Videoları</a></li>
              <li><a href="/awards">Ödüller</a></li>
              <li><a href="/social">Sosyal Sorumluluk</a></li>
              <li><a href="/times">HD Times</a></li>
              <li><a href="/academy">Hospitadent Akademi</a></li>
            </ul>
          </div>
          {/* Online */}
          <div>
            <h4 className="text-blue font-bold mb-3 tracking-wide text-base md:text-lg uppercase">ONLINE</h4>
            <ul className="space-y-1 text-sm md:text-base text-[#0f4f78]">
              <li><a href="/appointment">Online Randevu</a></li>
              <li><a href="/xray">Röntgen Gönder</a></li>
              <li><a href="/pricing">Fiyat Alın</a></li>
              <li><a href="/ask-doctor">Doktora Sor</a></li>
              <li><a href="/feedback">Görüş ve Önerileriniz</a></li>
              <li><a href="/complaint">Şikayet Var</a></li>
              <li><a href="/hospifikir">Hospifikir</a></li>
            </ul>
          </div>
          {/* Tedavilerimiz */}
          <div>
            <h4 className="text-blue font-bold mb-3 tracking-wide text-base md:text-lg uppercase">TEDAVİLERİMİZ</h4>
            <ul className="space-y-1 text-sm md:text-base text-[#0f4f78]">
              <li><a href="/treatments/implant">Implant</a></li>
              <li><a href="/treatments/digital-smile">Dijital Gülüş Tasarımı</a></li>
              <li><a href="/treatments/zirconium">Zirkonyum Kaplama</a></li>
              <li><a href="/treatments/laminate">Lamina Diş Kaplama</a></li>
              <li><a href="/treatments/porcelain">Porselen Kaplama</a></li>
              <li><a href="/treatments/whitening">Diş Beyazlatma</a></li>
              <li><a href="/treatments/orthodontics">Ortodonti</a></li>
              <li><a href="/treatments/gum">Diş Eti Tedavisi</a></li>
            </ul>
          </div>
        </div>
        {/* Sağ: Logo ve Butonlar */}
        <div className="w-full md:w-72 flex flex-col items-center justify-start mt-8 md:mt-0">
          <img src={logo} alt="Hospitadent Logo" className="w-40 md:w-48 mb-4" />
          <div className="flex items-center gap-2 mb-4 flex-wrap justify-center">
            <a href="https://www.facebook.com/hospitadent" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="https://x.com/Hospitadent" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/c/HospitadentTV" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaYoutube className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/hospitadent/" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=905531029922" target="_blank" rel="noopener noreferrer" className="bg-blue rounded-full flex items-center justify-center text-white hover:bg-primary transition w-9 h-9 hover:scale-110">
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
          <a href="/branches" className="w-full bg-blue text-white font-bold rounded-md py-3 mb-2 flex items-center justify-center gap-2 text-sm md:text-base hover:bg-primary transition"><span className="material-icons">location_on</span> Şubeleri Göster</a>
          <a href="tel:4449922" className="w-full bg-blue text-white font-bold rounded-md py-3 mb-2 flex items-center justify-center gap-2 text-sm md:text-base hover:bg-primary transition"><span className="material-icons">call</span> Şimdi Ara</a>
          <a href="mailto:info@hospitadent.com" className="w-full bg-blue text-white font-bold rounded-md py-3 flex items-center justify-center gap-2 text-sm md:text-base hover:bg-primary transition"><span className="material-icons">mail</span> E-Posta Gönder</a>
        </div>
      </div>
      {/* Alt Bilgi */}
      <div className="max-w-7xl mx-auto mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-[11px] md:text-xs text-gray-500 border-t border-gray-200 px-1">
        <span className="mb-2 md:mb-0 text-center md:text-left">© {currentYear} Hospitadent. Tüm hakları saklıdır.</span>
        <span className="text-center md:text-right">Developer: Yasin Gülsoy</span>
      </div>
    </footer>
  );
};

export default Footer;
