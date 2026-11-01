export const COMPANY = {
  name: 'MMK Grup',
  legal: 'MMK GRUP METAL ÇELİK KAPI LTD.ŞTİ.',
  slogan: 'Industrial Elegance',
  address: 'Altay Mah. Orhan Bey Cad. Atayıldız 1/15, Etimesgut / Ankara',
  phones: [
    { label: '0542 595 68 06', href: 'tel:+905425956806' },
    { label: '0541 509 06 71', href: 'tel:+905415090671' },
  ],
  whatsapp: '905425956806',
  email: 'mmkgrupmetali@gmail.com',
  mapQuery: 'Altay Mah. Orhan Bey Cad. Atayıldız 1/15 Etimesgut Ankara',
};

export const NAV = [
  { id: 'koleksiyon', label: 'Koleksiyon' },
  { id: 'malzeme', label: 'Malzeme' },
  { id: 'teknoloji', label: 'Teknoloji' },
  { id: 'sss', label: 'S.S.S.' },
  { id: 'iletisim', label: 'İletişim' },
];

export const MARQUEE = [
  'Design Collection 2026',
  'TSE belgeli üretim',
  '150 dansite cam yünü',
  'Ceviz & Antrasit',
  'Levyeli hırsızlığa karşı ekstra güvenlik',
  'Industrial Elegance',
  'Isı ve ses yalıtımı',
];

export const STATS = [
  { value: 33, suffix: '', label: 'Özgün model' },
  { value: 150, suffix: '', label: 'Dansite cam yünü' },
  { value: 2, suffix: ' mm', label: 'DKP sac kasa' },
  { value: 100, suffix: '%', label: 'TSE belgeli' },
];

export interface Layer {
  id: string;
  title: string;
  value: string;
  text: string;
}

export const LAYERS: Layer[] = [
  {
    id: 'frame',
    title: 'Kasa',
    value: '2 mm DKP sac',
    text: 'Kasa kısmı, yüksek dayanıklılık ve güvenlik esas alınarak 2 mm DKP sacdan imal edilir.',
  },
  {
    id: 'leaf',
    title: 'Kanat',
    value: '1.2 mm DKP sac',
    text: 'Kanat, 1.2 mm kalınlığında DKP sacdan imal edilir.',
  },
  {
    id: 'reinforce',
    title: 'İç takviye',
    value: '1 mm yekpare sac',
    text: 'Kanat içi, yekpare 1 mm sac ile güçlendirilmiştir; levyeli hırsızlığa karşı ekstra güvenlik sağlar.',
  },
  {
    id: 'fill',
    title: 'Yalıtım dolgusu',
    value: '150 dansite cam yünü',
    text: 'Yüksek yoğunlukta cam yünü; hem termal hem akustik yalıtımda üstün performans sunar.',
  },
  {
    id: 'lock',
    title: 'Kilit sistemi',
    value: '2 tam tur kilitleme',
    text: 'Güvenli kullanım için kapının 2 tam tur kilitlenmesi önerilir. Kapı tam oturur, açılma-bozulma riski minimize edilir.',
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'Metal imalatı ürünleriniz garantili mi?',
    a: 'Evet, tüm metal imalatı ürünlerimiz TSE (Türk Standartları Enstitüsü) belgeli olup kalite standartlarına uygun şekilde üretilmektedir. Ürünlerimiz, uzun ömürlü kullanım sunmasının yanı sıra levyeli hırsızlığa karşı ekstra güvenlik sağlar. Güvenilirlik ve kalite, üretimimizin temelini oluşturmaktadır.',
  },
  {
    q: 'Kapılarda kullanılan malzemeler nelerdir?',
    a: 'Kapılarımız yüksek dayanıklılık ve güvenlik esas alınarak üretilmektedir. Kasa kısmı 2 mm DKP sacdan, kanat ise 1.2 mm kalınlığında DKP sacdan imal edilmektedir. Kanat içi yekpare 1 mm sac ile güçlendirilmiş olup, iç dolgu malzemesi olarak 150 dansite cam yünü kullanılmaktadır.',
  },
  {
    q: 'Çelik kapı ve diğer metal ürünlerinizde ısı ve ses yalıtımı nasıl sağlanıyor?',
    a: 'Çelik kapı ürünlerimizde ısı ve ses yalıtımı, yüksek yoğunlukta 150 dansite cam yünü kullanılarak sağlanmaktadır. Bu malzeme, hem termal hem akustik yalıtımda üstün performans sunar. Bu sayede hem güvenlik hem de konfor bir arada sunulmaktadır.',
  },
  {
    q: 'Çelik kapılarda kaç tur kilitleme güvenli ve sağlıklıdır?',
    a: 'Çelik kapılarımızda güvenli kullanım için kapının 2 tam tur kilitlenmesi önerilir. Maksimum güvenlik ve sağlıklı kullanım açısından idealdir. Bu sayede kapı tam oturur, açılma-bozulma riski minimize edilir.',
  },
];
