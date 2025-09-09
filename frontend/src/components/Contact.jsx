import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderildiğinde yapılacak işlemler
    // Burada form verilerini işleyebilir veya API'ye gönderebilirsiniz
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section name='contact' className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue mb-4">Bütün Sorularınız İçin Bize Ulaşın!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uzman ekibimiz bütün sorularınızı cevaplamak için hizmetinizdedir.
          </p>
        </div>
        
        <div className="bg-white p-8 max-w-4xl mx-auto rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* İlk satır - Ad Soyad ve Telefon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Adı/Soyadı"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon Numarası"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                />
              </div>
            </div>
            
            {/* İkinci satır - Email ve Mesaj */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Mail Adresi"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="message"
                  placeholder="Mesajınız"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700"
                  required
                />
              </div>
            </div>
            
            {/* Gönder butonu */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue hover:bg-primary text-white font-bold py-4 px-12 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Formu Gönder
              </button>
            </div>
          </form>
        </div>
        
        {/* İletişim bilgileri */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l1.1 2.2a2 2 0 01-.45 2.45l-.9.9a16.06 16.06 0 006.36 6.36l.9-.9a2 2 0 012.45-.45l2.2 1.1A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue mb-2">Telefon</h3>
            <p className="text-gray-600">444 99 22</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue mb-2">E-posta</h3>
            <p className="text-gray-600">info@hospitadent.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#0f4f78] mb-2">Adres</h3>
            <a href="/subelerimiz" className="text-[#0f4f78] font-bold underline hover:text-blue-700 transition-colors cursor-pointer block">Türkiye Geneli 22 Şube</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact