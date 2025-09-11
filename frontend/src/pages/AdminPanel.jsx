import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaUserMd, 
  FaBlog, 
  FaBuilding, 
  FaSignOutAlt, 
  FaPlus, 
  FaEdit, 
  FaTrash,
  FaSave,
  FaTimes,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const API_BASE_URL = 'http://localhost:5000/api';

const AdminPanel = () => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('doctors');
  const [doctors, setDoctors] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [branches, setBranches] = useState([]);
  const [roles, setRoles] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [searchText, setSearchText] = useState('');
  const [filterBranchId, setFilterBranchId] = useState('');
  const [filterSpecialtyId, setFilterSpecialtyId] = useState('');

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // Remembered email
    const rememberedEmail = localStorage.getItem('adminEmail');
    if (rememberedEmail) {
      setLoginData(prev => ({ ...prev, email: rememberedEmail }));
      setRememberMe(true);
    }

    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // Backend accessToken alanı döndürüyor
        const token = data.accessToken || data.token;
        if (!token) {
          throw new Error('Token alınamadı');
        }
        localStorage.setItem('adminToken', token);
        setUser(data.user);
        if (rememberMe) {
          localStorage.setItem('adminEmail', loginData.email);
        } else {
          localStorage.removeItem('adminEmail');
        }
        setIsAuthenticated(true);
        toast.success('Başarıyla giriş yapıldı!');
        fetchData();
      } else {
        toast.error(data.error || 'Giriş başarısız');
      }
    } catch (error) {
      toast.error('Bağlantı hatası');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setUser(null);
    toast.success('Çıkış yapıldı');
  };

  const fetchData = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    setLoading(true);
    try {
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const [doctorsRes, blogsRes, activesRes] = await Promise.all([
        fetch(`${API_BASE_URL}/admin/doctors`, { headers }),
        fetch(`${API_BASE_URL}/admin/blogs`, { headers }),
        fetch(`${API_BASE_URL}/admin/branches/active`, { headers })
      ]);

      if (doctorsRes.ok) setDoctors(await doctorsRes.json());
      if (blogsRes.ok) setBlogs(await blogsRes.json());
      if (activesRes.ok) {
        const data = await activesRes.json();
        setBranches(data.branches || []);
        setRoles(data.roles || []);
        setSpecialties(data.specialties || []);
      }
    } catch (error) {
      toast.error('Veri yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('adminToken');
    const formDataToSend = new FormData();

    // Form verilerini FormData'ya ekle
    Object.keys(formData).forEach(key => {
      if (key === 'image' && formData[key] instanceof File) {
        formDataToSend.append(key, formData[key]);
      } else if (key === 'branches' && Array.isArray(formData[key])) {
        formDataToSend.append('branches', JSON.stringify(formData[key]));
      } else if (typeof formData[key] === 'object') {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const url = editingItem 
        ? `${API_BASE_URL}/admin/${activeTab}/${editingItem.id}`
        : `${API_BASE_URL}/admin/${activeTab}`;

      const response = await fetch(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        const saved = await response.json();
        // Doktor için DB avatar seçildiyse ikinci isteği yap
        if (activeTab === 'doctors' && formData.saveToDb && formData.image instanceof File) {
          try {
            const fd = new FormData();
            fd.append('image', formData.image);
            const avatarRes = await fetch(`${API_BASE_URL}/admin/doctors/${editingItem?.id || saved.id}/avatar`, {
              method: 'POST',
              headers: { 'Authorization': `Bearer ${token}` },
              body: fd
            });
            if (!avatarRes.ok) {
              const err = await avatarRes.json().catch(() => ({}));
              toast.error(err.error || 'Avatar DB’ye yüklenemedi');
            }
          } catch (_) {
            // avatar hatasını kullanıcıya bildirdik; devam
          }
        }
        toast.success(editingItem ? 'Güncellendi!' : 'Eklendi!');
        setShowForm(false);
        setEditingItem(null);
        setFormData({});
        fetchData();
      } else {
        const error = await response.json();
        toast.error(error.error || 'İşlem başarısız');
      }
    } catch (error) {
      toast.error('Bağlantı hatası');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`${API_BASE_URL}/admin/${activeTab}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast.success('Silindi!');
        fetchData();
      } else {
        const error = await response.json();
        toast.error(error.error || 'Silme başarısız');
      }
    } catch (error) {
      toast.error('Bağlantı hatası');
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
  };

  const handleView = (item) => {
    if (activeTab === 'doctors') {
      window.open(`/hekimlerimiz/${item.id}`, '_blank');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const getFormFields = () => {
    switch (activeTab) {
      case 'doctors':
        return [
          { name: 'name', label: 'Ad Soyad', type: 'text', required: true },
          { name: 'title', label: 'Ünvan', type: 'text', required: true },
          { name: 'roleId', label: 'Rol', type: 'select', options: roles, optionLabel: 'name', required: false },
          { name: 'specialtyId', label: 'Uzmanlık', type: 'select', options: specialties, optionLabel: 'name', required: false },
          { name: 'bio', label: 'Biyografi', type: 'textarea', required: false },
          { name: 'branches', label: 'Şubeler', type: 'multiselect', options: branches, optionLabel: 'name', required: true },
          { name: 'order', label: 'Sıra', type: 'number', required: false },
          { name: 'isActive', label: 'Aktif', type: 'checkbox', required: false },
          { name: 'image', label: 'Fotoğraf', type: 'file', required: false },
          { name: 'saveToDb', label: 'Avatarı DB’ye kaydet (WebP önerilir)', type: 'checkbox', required: false }
        ];
      case 'blogs':
        return [
          { name: 'title', label: 'Başlık', type: 'text', required: true },
          { name: 'content', label: 'İçerik', type: 'textarea', required: true },
          { name: 'excerpt', label: 'Özet', type: 'textarea', required: false },
          { name: 'author', label: 'Yazar', type: 'text', required: true },
          { name: 'isPublished', label: 'Yayınla', type: 'checkbox', required: false },
          { name: 'image', label: 'Görsel', type: 'file', required: false }
        ];
      case 'branches':
        return [
          { name: 'name', label: 'Şube Adı', type: 'text', required: true },
          { name: 'address', label: 'Adres', type: 'textarea', required: true },
          { name: 'phone', label: 'Telefon', type: 'text', required: true },
          { name: 'email', label: 'E-posta', type: 'email', required: true },
          { name: 'workingHours', label: 'Çalışma Saatleri', type: 'text', required: false },
          { name: 'isActive', label: 'Aktif', type: 'checkbox', required: false },
          { name: 'image', label: 'Görsel', type: 'file', required: false }
        ];
      default:
        return [];
    }
  };

  const renderForm = () => {
    const fields = getFormFields();

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">
              {editingItem ? 'Düzenle' : 'Yeni Ekle'}
            </h3>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingItem(null);
                setFormData({});
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                ) : field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Seçiniz</option>
                    {field.options?.map(option => (
                      <option key={option.id} value={option.id}>
                        {field.optionLabel ? option[field.optionLabel] : option.name}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'multiselect' ? (
                  <select
                    multiple
                    name={field.name}
                    value={formData[field.name] || []}
                    onChange={(e) => {
                      const selected = Array.from(e.target.selectedOptions).map(o => Number(o.value));
                      setFormData(prev => ({ ...prev, [field.name]: selected }));
                    }}
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  >
                    {field.options?.map(option => (
                      <option key={option.id} value={option.id}>
                        {field.optionLabel ? option[field.optionLabel] : option.name}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'checkbox' ? (
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={formData[field.name] || false}
                    onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.checked }))}
                    className="mr-2"
                  />
                ) : field.type === 'file' ? (
                  <input
                    type="file"
                    name={field.name}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            ))}

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingItem(null);
                  setFormData({});
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <FaSave className="mr-2" />
                )}
                {editingItem ? 'Güncelle' : 'Kaydet'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderTable = () => {
    let data = activeTab === 'doctors' ? doctors : activeTab === 'blogs' ? blogs : branches;
    if (activeTab === 'doctors') {
      if (searchText) {
        const q = searchText.toLowerCase();
        data = data.filter(d => (d.name || '').toLowerCase().includes(q) || (d.title || '').toLowerCase().includes(q));
      }
      if (filterBranchId) {
        data = data.filter(d => Array.isArray(d.branches) && d.branches.some(b => String(b.id) === String(filterBranchId)));
      }
      if (filterSpecialtyId) {
        data = data.filter(d => d.specialty && String(d.specialty.id) === String(filterSpecialtyId));
      }
    }
    
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (data.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          Henüz {activeTab === 'doctors' ? 'doktor' : activeTab === 'blogs' ? 'blog' : 'şube'} eklenmemiş
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {activeTab === 'doctors' && (
                <>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fotoğraf</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ad Soyad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ünvan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uzmanlık</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Şube</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                </>
              )}
              {activeTab === 'blogs' && (
                <>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Görsel</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Başlık</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yazar</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                </>
              )}
              {activeTab === 'branches' && (
                <>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Görsel</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Şube Adı</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-posta</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                </>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {activeTab === 'doctors' && (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.image ? (
                        <img 
                          src={`http://localhost:5000${item.image}`} 
                          alt={item.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <FaUserMd className="text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.specialization}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.branch?.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isActive ? 'Aktif' : 'Pasif'}
                      </span>
                    </td>
                  </>
                )}
                {activeTab === 'blogs' && (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.image ? (
                        <img 
                          src={`http://localhost:5000${item.image}`} 
                          alt={item.title}
                          className="h-12 w-12 rounded object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                          <FaBlog className="text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.author}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.isPublished ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.isPublished ? 'Yayında' : 'Taslak'}
                      </span>
                    </td>
                  </>
                )}
                {activeTab === 'branches' && (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.image ? (
                        <img 
                          src={`http://localhost:5000${item.image}`} 
                          alt={item.name}
                          className="h-12 w-12 rounded object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                          <FaBuilding className="text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isActive ? 'Aktif' : 'Pasif'}
                      </span>
                    </td>
                  </>
                )}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    {activeTab === 'doctors' && (
                      <button
                        onClick={() => handleView(item)}
                        className="text-green-600 hover:text-green-900"
                        title="Hekim sayfasını görüntüle"
                      >
                        <FaEye />
                      </button>
                    )}
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Düzenle"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Sil"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-[#004876] flex items-center justify-center text-white font-bold">H</div>
            <h2 className="text-2xl font-bold text-[#004876]">Admin Girişi</h2>
            <p className="text-gray-900 text-sm">Hospitadent Yönetim Paneli</p>
          </div>
          <form ref={formRef} onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">E-posta</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="ornek@hospitadent.com"
                autoComplete="username"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004876]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Şifre</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004876]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center text-sm text-gray-900">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                Beni hatırla
              </label>
              <a href="#" className="text-sm text-[#004876] hover:underline">Şifremi unuttum</a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#004876] text-white py-2.5 px-4 rounded-md hover:opacity-90 disabled:opacity-50 transition-colors"
            >
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
            <p className="text-xs text-gray-700 text-center">Yetkisiz erişimler kaydedilir ve izlenir.</p>
          </form>
          
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r flex-col">
        <div className="h-16 px-6 flex items-center border-b">
          <span className="text-xl font-bold text-[#004876]">Hospitadent</span>
        </div>
        <nav className="p-4 space-y-2">
          <button onClick={()=>setActiveTab('doctors')} className={`w-full flex items-center px-3 py-2 rounded-md text-sm ${activeTab==='doctors'?'bg-[#004876] text-white':'hover:bg-gray-100 text-gray-800'}`}>
            <FaUserMd className="mr-2"/> Doktorlar
          </button>
          <button onClick={()=>setActiveTab('blogs')} className={`w-full flex items-center px-3 py-2 rounded-md text-sm ${activeTab==='blogs'?'bg-[#004876] text-white':'hover:bg-gray-100 text-gray-800'}`}>
            <FaBlog className="mr-2"/> Blog Yazıları
          </button>
          <button onClick={()=>setActiveTab('branches')} className={`w-full flex items-center px-3 py-2 rounded-md text-sm ${activeTab==='branches'?'bg-[#004876] text-white':'hover:bg-gray-100 text-gray-800'}`}>
            <FaBuilding className="mr-2"/> Şubeler
          </button>
        </nav>
        <div className="mt-auto p-4">
          <button onClick={logout} className="w-full flex items-center justify-center px-4 py-2 border rounded-md text-red-600 hover:bg-red-50">
            <FaSignOutAlt className="mr-2"/> Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center px-4 md:px-8 justify-between sticky top-0 z-10">
          <div className="md:hidden font-semibold">Hospitadent</div>
          <div className="text-sm text-gray-600 truncate">Hoş geldiniz, {user?.email}</div>
          <button onClick={()=>setShowForm(true)} className="flex items-center px-3 py-2 bg-[#004876] text-white rounded-md">
            <FaPlus className="mr-2"/> Yeni Ekle
          </button>
        </header>

        {/* Content */}
        <main className="p-4 md:p-8">
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">{activeTab === 'doctors' ? 'Doktorlar' : activeTab === 'blogs' ? 'Blog Yazıları' : 'Şubeler'}</h2>
            </div>
            <div className="p-6">
              {activeTab === 'doctors' && (
                <div className="mb-4 flex flex-wrap gap-3 items-end">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Ara</label>
                    <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="Ad/ünvan"
                      className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#004876]" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Şube</label>
                    <select value={filterBranchId} onChange={e=>setFilterBranchId(e.target.value)}
                      className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#004876]">
                      <option value="">Tümü</option>
                      {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Uzmanlık</label>
                    <select value={filterSpecialtyId} onChange={e=>setFilterSpecialtyId(e.target.value)}
                      className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#004876]">
                      <option value="">Tümü</option>
                      {specialties.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                  <button onClick={()=>{setSearchText('');setFilterBranchId('');setFilterSpecialtyId('');}}
                    className="px-3 py-2 border rounded-md">Sıfırla</button>
                </div>
              )}
              {renderTable()}
            </div>
          </div>
        </main>
      </div>

      {showForm && renderForm()}
    </div>
  );
};

export default AdminPanel; 