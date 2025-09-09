// Manuel Instagram Post Yönetimi
// Yeni gönderi eklemek için bu dosyayı güncelleyin

export const instagramPosts = [
  {
    id: '1',
    caption: 'Dişinize göre bilgiler sosyal içerik görseli',
    mediaUrl: '/assets/insta/Dişinize göre bilgiler.. 🦷👩🏻_⚕️.jpg',
    permalink: '',
    timestamp: '2024-06-01T10:00:00Z',
    mediaType: 'IMAGE'
  },
  {
    id: '2',
    caption: 'Ortodonti tedavisinde dikkat edilmesi gerekenler sosyal içerik görseli',
    mediaUrl: '/assets/insta/‘’Ortodonti Tedavisinde Dikkat Edilmesi Gerekenler’’ 🦷.jpg',
    permalink: '',
    timestamp: '2024-06-02T10:00:00Z',
    mediaType: 'IMAGE'
  },
  {
    id: '3',
    caption: 'Süper kahramanlara süper diş bakımı sosyal içerik görseli',
    mediaUrl: '/assets/insta/Süper Kahramanlara Süper Diş Bakımı!.jpg',
    permalink: '',
    timestamp: '2024-06-03T10:00:00Z',
    mediaType: 'IMAGE'
  },
  {
    id: '4',
    caption: 'Neden düzenli diş muayenesi olmalıyız sosyal içerik görseli',
    mediaUrl: '/assets/insta/Neden düzenli diş muayenesi olmalıyız 🦷Düzenli muayeneleriniz için-📲 444 99 22.jpg',
    permalink: '',
    timestamp: '2024-06-04T10:00:00Z',
    mediaType: 'IMAGE'
  },
  {
    id: '5',
    caption: 'Dişe dokunur gerçekler sosyal içerik görseli',
    mediaUrl: '/assets/insta/Dişe dokunur gerçekler!.jpg',
    permalink: '',
    timestamp: '2024-06-05T10:00:00Z',
    mediaType: 'IMAGE'
  },
  {
    id: '6',
    caption: 'Lazer diş beyazlatma tedavi süreci sosyal içerik görseli',
    mediaUrl: '/assets/insta/Lazer Diş Beyazlatma Tedavi Süreci….jpg',
    permalink: '',
    timestamp: '2024-06-06T10:00:00Z',
    mediaType: 'IMAGE'
  },
];

export const formatInstagramPost = (post) => {
  return {
    ...post,
    formattedDate: new Date(post.timestamp).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short'
    })
  };
}; 