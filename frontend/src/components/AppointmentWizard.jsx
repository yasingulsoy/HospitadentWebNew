import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const branchGroups = [
  { city: 'İstanbul', branches: ['Mecidiyeköy', 'Bağcılar', 'Bakırköy', 'Fatih', 'Çamlıca', 'Pendik', 'Şerifali', 'Cevizlibağ', 'Göktürk'] },
  { city: 'Kayseri', branches: ['Kayseri'] },
  { city: 'Muğla', branches: ['Bodrum'] },
  { city: 'Antalya', branches: ['Antalya', 'Alanya'] },
  { city: 'Ankara', branches: ['Çayyolu'] },
  { city: 'Kocaeli', branches: ['Kocaeli'] },
  { city: 'Bursa', branches: ['Nilüfer'] },
  { city: 'Almanya', branches: ['Frankfurt'] },
  { city: 'Hollanda', branches: ['Deen-Hag'] }
];

// Varsayılan doktor verileri (fallback için)
const defaultDoctors = [
  {
    name: 'Dr. Ahmet Yılmaz',
    specialty: 'Ortodonti Uzmanı',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Ayşe Demir',
    specialty: 'Çocuk Diş Hekimi',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Mehmet Kaya',
    specialty: 'Cerrahi Uzmanı',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Fatma Özkan',
    specialty: 'Periodontoloji',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Ali Çelik',
    specialty: 'Endodonti Uzmanı',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face'
  },
  {
    name: 'Dr. Zeynep Arslan',
    specialty: 'Protez Uzmanı',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face'
  }
];

// Saat seçici için örnek veri
const days = [
  { date: '14 Temmuz', day: 'Pts', slots: [
    { time: '09:00', status: 'full' },
    { time: '09:30', status: 'full' },
    { time: '10:00', status: 'full' },
    { time: '10:30', status: 'full' },
    { time: '11:00', status: 'full' },
    { time: '11:30', status: 'full' },
    { time: '12:00', status: 'full' },
    { time: '12:30', status: 'full' },
    { time: '13:00', status: 'full' },
    { time: '13:30', status: 'full' },
  ] },
  { date: '15 Temmuz', day: 'Sal', slots: [
    { time: '09:00', status: 'available' },
    { time: '09:30', status: 'available' },
    { time: '10:00', status: 'available' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'available' },
    { time: '11:30', status: 'available' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'available' },
  ] },
  { date: '16 Temmuz', day: 'Çar', slots: [
    { time: 'Kapalı', status: 'closed' },
  ] },
  { date: '17 Temmuz', day: 'Per', slots: [
    { time: '09:00', status: 'full' },
    { time: '09:30', status: 'full' },
    { time: '10:00', status: 'full' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'available' },
    { time: '11:30', status: 'available' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'available' },
  ] },
  { date: '18 Temmuz', day: 'Cum', slots: [
    { time: '09:00', status: 'available' },
    { time: '09:30', status: 'available' },
    { time: '10:00', status: 'available' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'available' },
    { time: '11:30', status: 'available' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'available' },
  ] },
  { date: '19 Temmuz', day: 'Cts', slots: [
    { time: '09:00', status: 'available' },
    { time: '09:30', status: 'available' },
    { time: '10:00', status: 'available' },
    { time: '10:30', status: 'available' },
    { time: '11:00', status: 'full' },
    { time: '11:30', status: 'available' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'full' },
  ] },
];

// Şube görselleri eşleşmesi
export const branchImages = {
  'Mecidiyeköy': '/assets/sube_resimleri/mecidiyekoy.png',
  'Bağcılar': '/assets/sube_resimleri/bagcilar.png',
  'Bakırköy': '/assets/sube_resimleri/bakirkoy.png',
  'Fatih': '/assets/sube_resimleri/fatih.png',
  'Çamlıca': '/assets/sube_resimleri/camlica.png',
  'Pendik': '/assets/sube_resimleri/pendik.png',
  'Şerifali': '/assets/sube_resimleri/serifali.png',
  'Cevizlibağ': '/assets/sube_resimleri/cevizlibag.png',
  'Göktürk': '/assets/sube_resimleri/gokturk.webp',
  'Kayseri': '/assets/sube_resimleri/kayseri.png',
  'Bodrum': '/assets/sube_resimleri/bodrum.png',
  'Antalya': '/assets/sube_resimleri/antalya.png',
  'Alanya': '/assets/sube_resimleri/alanya.png',
  'Çayyolu': '/assets/sube_resimleri/cayyolu.png',
  'Kocaeli': '/assets/sube_resimleri/kocaeli.jpg',
  'Nilüfer': '/assets/sube_resimleri/nilufer.webp',
  'Frankfurt': '/assets/sube_resimleri/frankfurt.webp',
  'Deen-Hag': '/assets/sube_resimleri/deen-hag.png'
};

// Kompakt şehir seçici
const CitySelector = ({ cities, selectedCityIdx, onSelect }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-[#004876] mb-6">{t('appointment.selectCity')}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cities.map((city, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 font-medium text-base ${
              selectedCityIdx === idx
                ? 'bg-[#2bb3ea] text-white border-[#2bb3ea] shadow-lg'
                : 'bg-white text-[#004876] border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

// Kompakt şube seçici
// eslint-disable-next-line no-unused-vars
const BranchSelector = ({ branches, selectedBranchIdx, onSelect }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#004876] mb-4">{t('appointment.selectBranch')}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {branches.map((branch, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 font-medium text-sm ${
              selectedBranchIdx === idx
                ? 'bg-[#2bb3ea] text-white border-[#2bb3ea] shadow-md'
                : 'bg-white text-[#004876] border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
            }`}
          >
            {branch}
          </button>
        ))}
      </div>
    </div>
  );
};

// Kompakt doktor seçici
const DoctorSelector = ({ doctors, selectedIdx, onSelect, branchName }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-[#004876] mb-6">{t('appointment.selectDoctor')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`p-6 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-4 shadow-lg ${
              selectedIdx === idx 
                ? 'bg-[#2bb3ea] text-white border-[#2bb3ea] shadow-xl' 
                : 'bg-white text-[#004876] border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
            }`}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-full object-cover border-3 border-white shadow-md"
            />
            <div className="flex-1">
              <div className="font-bold text-lg">{doctor.name}</div>
              <div className="text-sm opacity-80 font-medium">{doctor.specialty}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Kompakt tarih seçici
const DateSelector = ({ days, selectedDayIdx, onSelect }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-[#004876] mb-6">{t('appointment.selectDate')}</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {days.map((day, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            disabled={day.slots[0]?.status === 'closed'}
            className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
              selectedDayIdx === idx
                ? 'bg-[#2bb3ea] text-white border-[#2bb3ea] shadow-lg'
                : day.slots[0]?.status === 'closed'
                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                : 'bg-white text-[#004876] border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
            }`}
          >
            <div className="text-xs font-medium">{day.day}</div>
            <div className="text-sm font-semibold">{day.date}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Kompakt saat seçici
const TimeSelector = ({ slots, selectedSlot, onSelect }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-[#004876] mb-6">{t('appointment.selectTime')}</h3>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
        {slots.map((slot, idx) => (
          <button
            key={idx}
            onClick={() => slot.status === 'available' && onSelect(slot.time)}
            disabled={slot.status !== 'available'}
            className={`p-4 rounded-xl border-2 transition-all duration-200 text-center text-base font-medium ${
              selectedSlot === slot.time
                ? 'bg-[#2bb3ea] text-white border-[#2bb3ea] shadow-lg'
                : slot.status === 'available'
                ? 'bg-white text-[#004876] border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
                : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

// Kompakt iletişim formu
const ContactForm = ({ name, setName, phone, setPhone, onSubmit, submitting, selectedDay, selectedSlot, onEdit }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="text-sm text-blue-800">
          <div className="font-semibold mb-2">📅 Seçilen Randevu:</div>
          <div>{selectedDay.date} {selectedDay.day} • {selectedSlot}</div>
        </div>
        <button
          onClick={onEdit}
          className="text-blue-600 text-sm underline mt-2 hover:text-blue-800"
        >
          Değiştir
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-bold text-[#004876] mb-3">{t('appointment.name')}</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#2bb3ea] focus:ring-2 focus:ring-[#2bb3ea] outline-none transition-all text-lg"
            placeholder={t('appointment.namePlaceholder')}
          />
        </div>
        
        <div>
          <label className="block text-lg font-bold text-[#004876] mb-3">{t('appointment.phone')}</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            pattern="^05\d{9}$"
            className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#2bb3ea] focus:ring-2 focus:ring-[#2bb3ea] outline-none transition-all text-lg"
            placeholder="05XXXXXXXXX"
          />
          <div className="text-xs text-gray-500 mt-1">{t('appointment.phoneFormat')}</div>
        </div>

        <button
          type="submit"
          disabled={submitting || !name || !/^05\d{9}$/.test(phone)}
          className="w-full bg-[#2bb3ea] text-white font-bold py-4 rounded-xl shadow-xl hover:bg-[#0f4f78] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {submitting ? t('appointment.submitting') : t('appointment.completeAppointment')}
        </button>
      </form>
    </div>
  );
};

const AppointmentWizard = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);
  const [selectedDoctorIdx, setSelectedDoctorIdx] = useState(0);
  const [selectedDayIdx, setSelectedDayIdx] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [branchSlide, setBranchSlide] = useState(0); // slider için
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);
  const [branches, setBranches] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ekran boyutunu dinle
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Şubeleri ve hekimleri yükle
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/branches');
        if (response.ok) {
          const branchesData = await response.json();
          setBranches(branchesData);
        } else {
          console.error('Şubeler yüklenemedi, varsayılan veriler kullanılıyor');
          setDoctors(defaultDoctors);
        }
      } catch (error) {
        console.error('API hatası:', error);
        setDoctors(defaultDoctors);
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  // Seçilen şubeye göre hekimleri filtrele
  useEffect(() => {
    if (branches.length > 0 && selectedCityIdx >= 0 && selectedBranchIdx >= 0) {
      const currentBranches = branchGroups[selectedCityIdx].branches;
      const selectedBranchName = currentBranches[selectedBranchIdx];
      
      // Backend'den gelen şube verilerinde hekimleri bul
      const selectedBranch = branches.find(branch => branch.name === selectedBranchName);
      
      if (selectedBranch && selectedBranch.doctorsMany && selectedBranch.doctorsMany.length > 0) {
        // Backend'den gelen hekim verilerini formatla
        const formattedDoctors = selectedBranch.doctorsMany.map(doctor => ({
          id: doctor.id,
          name: doctor.name,
          specialty: doctor.specialty?.name || 'Diş Hekimi',
          image: doctor.image ? 
            (doctor.image.startsWith('/uploads') ? 
              `http://localhost:5000${doctor.image}` : 
              doctor.image) : 
            `http://localhost:5000/api/doctors/${doctor.id}/image`
        }));
        setDoctors(formattedDoctors);
      } else {
        // Seçilen şubede hekim yoksa varsayılan hekimleri göster
        setDoctors(defaultDoctors);
      }
    }
  }, [branches, selectedCityIdx, selectedBranchIdx]);

  // Şehirler listesi
  const cities = branchGroups.map(g => g.city);
  // Seçilen şehirdeki şubeler
  const currentBranches = branchGroups[selectedCityIdx].branches;
  const selectedBranch = currentBranches[selectedBranchIdx];

  // Slider mantığı
  const visibleCount = 1;
  const maxSlide = Math.max(0, currentBranches.length - visibleCount);
  const goPrev = () => setBranchSlide(s => Math.max(0, s - 1));
  const goNext = () => setBranchSlide(s => Math.min(maxSlide, s + 1));

  // Slider'da geçilen kart otomatik seçili olsun
  useEffect(() => {
    if (isDesktop && step === 2) {
      setSelectedBranchIdx(branchSlide);
    }
  }, [branchSlide, isDesktop, step]);

  return (
    <section id="randevu" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 min-h-[500px]">
        {/* Sol: Başlık ve adım göstergesi */}
        <div className="lg:w-2/5 flex flex-col items-center justify-center py-8 lg:py-12">
          <div className="text-center">
            <h2 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#0f4f78] to-[#2bb3ea] bg-clip-text text-transparent mb-4">
              Online Randevu
            </h2>
            <p className="text-[#0f4f78] text-xl lg:text-2xl text-center mb-8 font-medium">Hızlı ve kolay randevu</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              {[1,2,3,4,5].map((n) => (
                <span
                  key={n}
                  className={`w-4 h-4 rounded-full transition-all duration-300
                    ${step >= n ? 'bg-[#2bb3ea] scale-110' : 'bg-blue-100'}
                  `}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Adım {step} / 5
            </div>
          </div>
        </div>

        {/* Sağ: İçerik */}
        <div className="lg:w-3/5 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-6 lg:py-8 min-w-0">
          {/* 1. Adım: İl (şehir) seçimi */}
        {step === 1 && (
            <div className="space-y-4">
            <CitySelector
              cities={cities}
              selectedCityIdx={selectedCityIdx}
              onSelect={setSelectedCityIdx}
            />
              <div className="flex justify-center pt-4">
              <button
                onClick={() => setStep(2)}
                  className="bg-[#2bb3ea] text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:bg-[#0f4f78] transition-all text-lg"
              >
                {t('appointment.next')} →
              </button>
            </div>
          </div>
        )}

          {/* 2. Adım: Şube seçimi */}
        {step === 2 && (
            isDesktop ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#004876] mb-4">{t('appointment.selectBranch')}</h3>
                <div className="relative w-full min-w-0 flex items-center justify-center" style={{ minHeight: '240px' }}>
                  {/* Sol ok */}
                  <button
                    onClick={goPrev}
                    disabled={branchSlide === 0}
                    className="absolute left-[-48px] z-10 bg-white/80 rounded-full shadow p-2 text-[#2bb3ea] disabled:opacity-30"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 28L11 18L21 8"/></svg>
                  </button>
                  {/* Slider */}
                  <div className="flex w-full justify-center gap-0 overflow-hidden relative" style={{ height: '350px', width: '600px' }}>
                  {currentBranches.map((branch, idx) => {
                    const isActive = idx === branchSlide;
                    const isPrev = idx === branchSlide - 1;
                    const isNext = idx === branchSlide + 1;
                    return (
                      <button
                        key={branch}
                        onClick={() => setSelectedBranchIdx(idx)}
                        className={`
                          transition-all duration-500
                          w-[600px] h-[350px] rounded-3xl shadow-2xl flex flex-col items-center justify-end
                          overflow-hidden absolute left-0 top-0 group bg-white
                          ${isActive ? 'ring-4 ring-[#2bb3ea] scale-105 z-10 opacity-100 translate-x-0'
                            : isPrev ? 'opacity-0 pointer-events-none -translate-x-1/2'
                            : isNext ? 'opacity-0 pointer-events-none translate-x-1/2'
                            : 'opacity-0 pointer-events-none'}
                        `}
                        style={{
                          transitionProperty: 'opacity, transform',
                        }}
                      >
                        <img
                          src={branchImages[branch] || '/assets/sube_resimleri/default.png'}
                          alt={branch}
                          className="w-full h-full object-contain object-center bg-white"
                          onError={e => e.target.src = '/assets/sube_resimleri/default.png'}
                          draggable={false}
                        />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center">
                          <span className="w-full text-white text-3xl font-bold drop-shadow text-center pb-3 px-2">
                            {branch}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                  {/* Sağ ok */}
                  <button
                    onClick={goNext}
                    disabled={branchSlide === maxSlide}
                    className="absolute right-[-48px] z-10 bg-white/80 rounded-full shadow p-2 text-[#2bb3ea] disabled:opacity-30"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 8L21 18L11 28"/></svg>
                  </button>
                </div>
                <div className="flex justify-between gap-6 pt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-blue-50 text-[#2bb3ea] font-bold py-4 rounded-xl hover:bg-blue-100 transition-all text-lg"
                  >
                    ← {t('appointment.previous')}
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-[#2bb3ea] text-white font-bold py-4 rounded-xl shadow-xl hover:bg-[#0f4f78] transition-all text-lg"
                  >
                    {t('appointment.next')} →
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#004876] mb-4">{t('appointment.selectBranch')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {currentBranches.map((branch, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedBranchIdx(idx)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 font-medium text-sm min-w-[140px] whitespace-nowrap ${
                        selectedBranchIdx === idx
                          ? 'bg-[#2bb3ea] text-white border-[#2bb3ea] shadow-md'
                          : 'bg-white text-[#004876] border-gray-200 hover:border-[#2bb3ea] hover:bg-gray-50'
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between gap-6 pt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-blue-50 text-[#2bb3ea] font-bold py-4 rounded-xl hover:bg-blue-100 transition-all text-lg"
                  >
                    ← {t('appointment.previous')}
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-[#2bb3ea] text-white font-bold py-4 rounded-xl shadow-xl hover:bg-[#0f4f78] transition-all text-lg"
                  >
                    {t('appointment.next')} →
                  </button>
                </div>
              </div>
            )
          )}

          {/* 3. Adım: Doktor seçimi */}
          {step === 3 && (
          <div>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2bb3ea] mx-auto mb-4"></div>
                <p className="text-gray-600">Hekimler yükleniyor...</p>
              </div>
            ) : doctors.length > 0 ? (
              <>
                <DoctorSelector
                  doctors={doctors}
                  selectedIdx={selectedDoctorIdx}
                  onSelect={setSelectedDoctorIdx}
                  branchName={selectedBranch}
                />
                <div className="flex justify-between gap-6 pt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-blue-50 text-[#2bb3ea] font-bold py-4 rounded-xl hover:bg-blue-100 transition-all text-lg"
                  >
                    ← {t('appointment.previous')}
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="flex-1 bg-[#2bb3ea] text-white font-bold py-4 rounded-xl shadow-xl hover:bg-[#0f4f78] transition-all text-lg"
                  >
                    {t('appointment.next')} →
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Bu şubede hekim bulunmuyor
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedBranch} şubesinde şu anda aktif hekim bulunmamaktadır.
                </p>
                <div className="flex justify-between gap-6 pt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-blue-50 text-[#2bb3ea] font-bold py-4 rounded-xl hover:bg-blue-100 transition-all text-lg"
                  >
                    ← {t('appointment.previous')}
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="flex-1 bg-[#2bb3ea] text-white font-bold py-4 rounded-xl shadow-xl hover:bg-[#0f4f78] transition-all text-lg"
                  >
                    Devam Et →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

          {/* 4. Adım: Tarih ve Saat Seçimi */}
          {step === 4 && (
          <div>
            <DateSelector
              days={days}
              selectedDayIdx={selectedDayIdx}
              onSelect={setSelectedDayIdx}
            />
            <TimeSelector
              slots={days[selectedDayIdx].slots}
              selectedSlot={selectedSlot}
              onSelect={setSelectedSlot}
            />
              <div className="flex justify-between gap-4 pt-2">
              <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-blue-50 text-[#2bb3ea] font-bold py-2 rounded-lg hover:bg-blue-100 transition-all"
              >
                ← {t('appointment.previous')}
              </button>
              <button
                  onClick={() => selectedSlot && setStep(5)}
                disabled={!selectedSlot}
                  className="flex-1 bg-[#2bb3ea] text-white font-bold py-4 rounded-xl shadow-xl hover:bg-[#0f4f78] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {t('appointment.next')} →
              </button>
            </div>
          </div>
        )}

          {/* 5. Adım: İletişim Bilgileri */}
          {step === 5 && (
          <div>
            <ContactForm
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              submitting={submitting}
              selectedDay={days[selectedDayIdx]}
              selectedSlot={selectedSlot}
                onEdit={() => setStep(4)}
              onSubmit={() => {
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  alert(t('appointment.success'));
                }, 1500);
              }}
            />
              <div className="flex justify-center mt-6">
              <button
                  onClick={() => setStep(4)}
                  className="bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-300 transition-all text-lg"
              >
                ← {t('appointment.previous')}
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentWizard; 