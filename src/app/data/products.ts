export type Finish = 'Ceviz & Antrasit' | 'Doğal Ceviz' | 'Gri & Antrasit' | 'Çok Amaçlı Sac Kapı';

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  /** Kısa vurucu slogan */
  tagline: string;
  description: string;
  finish: Finish;
  /** Kapı görseli. cutout=true ise şeffaf arka planlıdır. */
  image: string;
  cutout: boolean;
  /** Mekân içi ortam görseli (varsa) */
  scene?: string;
  tags: string[];
  note?: string;
  specs?: Spec[];
}

export const FINISHES: Finish[] = ['Ceviz & Antrasit', 'Doğal Ceviz', 'Gri & Antrasit', 'Çok Amaçlı Sac Kapı'];

const door = (slug: string) => `assets/doors/${slug}.webp`;
const scene = (slug: string) => `assets/scenes/${slug}.webp`;

const STEEL_TAGS = ['Çelik gövde', 'Mat antrasit', 'Minimal donanım', 'Uzun ömürlü yüzey'];

export const PRODUCTS: Product[] = [
  {
    id: 'natura-guard',
    name: 'Natura Guard',
    tagline: 'Doğal sıcaklık. Endüstriyel güç.',
    description:
      'Dikey ahşap dokular, siyah metalin net çizgileri ile buluşur. Natura Guard, modern mimari için zamansız bir giriş tasarımıdır.',
    finish: 'Ceviz & Antrasit',
    image: door('natura-guard'),
    cutout: true,
    tags: ['Dikey ahşap doku', 'Siyah metal', 'Modern mimari'],
  },
  {
    id: 'reed',
    name: 'Reed',
    tagline: 'Zarafet, dikey çizgilerde gizli.',
    description:
      'Dikey çizgilerin ritmi, doğal ahşabın sıcaklığıyla birleşir. Reed mekâna uyum sağlamaz; mekânın karakterini belirler.',
    finish: 'Ceviz & Antrasit',
    image: door('reed'),
    cutout: true,
    tags: ['Dikey çizgi ritmi', 'Doğal ahşap', 'Antrasit çerçeve'],
  },
  {
    id: 'vertex',
    name: 'Vertex',
    tagline: 'Formun, kararlı duruşu.',
    description:
      'Keskin yüzeyler ve kontrollü geçişler, kapının tüm karakterini tek çizgide toplar. Vertex, yüzeyler arasındaki ilişki.',
    finish: 'Ceviz & Antrasit',
    image: door('vertex'),
    cutout: true,
    tags: ['Keskin yüzeyler', 'Elmas form', 'Yatay ahşap'],
  },
  {
    id: 'pulse',
    name: 'Pulse',
    tagline: 'Dikey sıcaklık. Yatay disiplin.',
    description:
      'Dikey ceviz şeritler ile yatay hatlarla bölünmüş geniş antrasit yüzeyi bir araya getiren, modern girişler için dengeli bir kompozisyon.',
    finish: 'Ceviz & Antrasit',
    image: door('pulse'),
    cutout: false,
    scene: scene('pulse'),
    tags: ['Ceviz şerit', 'Geniş antrasit yüzey', 'Uzun kulp'],
  },
  {
    id: 'chevron',
    name: 'Chevron',
    tagline: 'Net çizgiler. Güçlü giriş.',
    description:
      'Ceviz dokusu ve antrasit hatlar bir arada. Chevron, mekâna modern ve güçlü bir imza bırakır.',
    finish: 'Ceviz & Antrasit',
    image: door('chevron'),
    cutout: true,
    tags: ['Ceviz doku', 'Antrasit hatlar', 'V formlu kulp'],
  },
  {
    id: 'orbita',
    name: 'Orbita',
    tagline: 'Sakin bir merkez. Cesur bir çizgi.',
    description:
      'Doğal ahşabın sıcaklığını antrasit metalin güçlü zarafetiyle buluşturan Orbita. Modern çizgileri ve merkezi dairesel formuyla girişinize sofistike bir kimlik kazandırır.',
    finish: 'Ceviz & Antrasit',
    image: door('orbita'),
    cutout: false,
    tags: ['Şık ve dengeli tasarım', 'Doğal ahşap & antrasit metal', 'Merkezde oval form', 'Modern & güvenli giriş'],
  },
  {
    id: 'axis',
    name: 'Axis',
    tagline: 'Modern ve net bir giriş.',
    description:
      'Axis antrasit-doğal ceviz dokusuyla mekâna modern bir imza gibidir. Güçlü ve sade duruşuyla ilk izlenimi şık bir şekilde tanımlar.',
    finish: 'Ceviz & Antrasit',
    image: door('axis'),
    cutout: true,
    tags: ['Antrasit panel', 'Doğal ceviz şerit', 'Sade duruş'],
  },
  {
    id: 'fragment',
    name: 'Fragment',
    tagline: 'Ceviz üzerinde cesur imza.',
    description:
      'Fragment, geometrik desenleri ceviz dokusuyla buluşturur. Antrasit yüzeyle dengelenen form, girişe modern ve karakterli bir imza kazandırır.',
    finish: 'Ceviz & Antrasit',
    image: door('fragment'),
    cutout: true,
    tags: ['Geometrik desen', 'Ceviz doku', 'Antrasit yüzey'],
  },
  {
    id: 'hexawood',
    name: 'Hexawood',
    tagline: 'Sakin ama iddialı.',
    description: 'Modern mimariye sakin ama iddialı bir giriş kazandırır.',
    finish: 'Ceviz & Antrasit',
    image: door('hexawood'),
    cutout: true,
    scene: scene('hexawood'),
    tags: ['Altıgen detay', 'Yatay ahşap', 'Mat siyah'],
  },
  {
    id: 'crest',
    name: 'Crest',
    tagline: 'Taç gibi bir giriş.',
    description:
      'Crest, ceviz dokuyu antrasit çizgilerle taçlandırır. Yükselen form dili, girişe güçlü ve seçkin bir kimlik kazandırır.',
    finish: 'Ceviz & Antrasit',
    image: door('crest'),
    cutout: true,
    tags: ['Ceviz doku', 'Antrasit form', 'Yüksek güvenlik'],
  },
  {
    id: 'rooted',
    name: 'Rooted',
    tagline: 'Güven, sessiz bir lüks.',
    description:
      'Rooted, zamansız bir güven hissi taşır. Doğal dokular ve sade çizgiler, mekâna sakin bir kararlılık kazandırır. Abartısız. Kalıcı.',
    finish: 'Doğal Ceviz',
    image: door('rooted'),
    cutout: true,
    tags: ['Doğal doku', 'Sade çizgiler', 'Abartısız & kalıcı'],
  },
  {
    id: 'teralis',
    name: 'Teralis',
    tagline: 'Sadelikte kararlılık.',
    description:
      'Teralis, gereksiz olanı geride bırakır. Doğal ahşap yüzeyler ve net geçişler, mekâna dingin bir güç kazandırır.',
    finish: 'Doğal Ceviz',
    image: door('teralis'),
    cutout: true,
    tags: ['Doğal ahşap yüzey', 'Net geçişler', 'Dingin güç'],
  },
  {
    id: 'arc',
    name: 'Arc',
    tagline: 'Sessiz bir geçiş.',
    description:
      'Kavisli antrasit panel ile yatay ahşap panellerin sakin geçişi; girişe yumuşak ama kararlı bir karakter katar.',
    finish: 'Ceviz & Antrasit',
    image: door('arc'),
    cutout: true,
    scene: scene('arc'),
    tags: ['Kavisli form', 'Yatay ahşap panel', 'Antrasit yüzey'],
  },
  {
    id: 'facet',
    name: 'Facet',
    tagline: 'Keskin bir sükûnet.',
    description:
      'Facet, yüzeyde derinlik yaratır. Işıkla değişen geçişler ve güçlü kontrastlar, girişte sessiz ama kararlı bir etki bırakır. Göstermez. İz bırakır.',
    finish: 'Ceviz & Antrasit',
    image: door('faced'),
    cutout: true,
    tags: ['Yüzeyde derinlik', 'Güçlü kontrast', 'Elmas modüller'],
  },
  {
    id: 'linea-noir',
    name: 'Linea Noir',
    tagline: 'Sessiz bir kararlılık.',
    description:
      'Linea Noir, mekâna yön veren bir duruş sunar. Doğal ahşap ve mat siyah detaylar, zamana bağlı kalmayan bir denge yaratır.',
    finish: 'Doğal Ceviz',
    image: door('linea-noir'),
    cutout: true,
    tags: ['Doğal ahşap', 'Mat siyah detaylar', 'Zamansız denge'],
  },
  {
    id: 'prisma',
    name: 'Prisma',
    tagline: 'Doğal yüzey. Net duruş.',
    description:
      'Prisma, bulunduğu mekâna ağırlık kazandırır. Doğal yüzeylerin sakin uyumu, girişte dengeli ve kalıcı bir etki bırakır.',
    finish: 'Doğal Ceviz',
    image: door('prisma'),
    cutout: true,
    tags: ['Çift tonlu ahşap', 'Prizma geometrisi', 'Kalıcı etki'],
  },
  {
    id: 'varya',
    name: 'Varya',
    tagline: 'Düzenin sessiz yorumu.',
    description:
      'Varya, ritmi yüksek sesle kurmaz. Net yüzeyler ve sakin geçişler, mekâna ölçülü bir karakter kazandırır.',
    finish: 'Gri & Antrasit',
    image: door('varya'),
    cutout: true,
    tags: ['Net yüzeyler', 'Sakin geçişler', 'Ölçülü karakter'],
    note: 'Ürünün ceviz antrasit seçeneği bulunmaktadır.',
  },
  {
    id: 'arche',
    name: 'Arche',
    tagline: 'Zamana açılan bir form.',
    description:
      'Doğal ahşabın sıcaklığı, mekâna sakin ama karakterli bir karşılama sunar. Arche, eve girilen ilk anı tanımlar.',
    finish: 'Ceviz & Antrasit',
    image: door('arche'),
    cutout: true,
    tags: ['Yarım daire form', 'Doğal ahşap', 'Krem yüzey'],
    note: 'Krem kısım antrasit ile değiştirilebilir.',
  },
  {
    id: 'plane',
    name: 'Plane',
    tagline: 'Dingin çizgilerle tanımlanan form.',
    description:
      'İnce yatay çizgilerle zenginleşen doğal ceviz yüzey ve merkezdeki antrasit panel; dingin ama karakterli bir giriş.',
    finish: 'Doğal Ceviz',
    image: door('plane'),
    cutout: false,
    scene: scene('plane'),
    tags: ['Dingin çizgiler', 'Doğal ceviz', 'Antrasit panel'],
  },
  {
    id: 'shift',
    name: 'Shift',
    tagline: 'Zamana direnen duruş.',
    description:
      'Asimetrik formu, net çizgilerle dengeler. Shift; eğik metal geçişi ve yatay ahşap panelleriyle modern mimariye karakterli bir yorum getirir. Sade, güçlü ve zamansız bir giriş.',
    finish: 'Ceviz & Antrasit',
    image: door('shift'),
    cutout: true,
    tags: ['Asimetrik form', 'Eğik metal geçiş', 'Yatay ahşap panel'],
  },
  {
    id: 'flow',
    name: 'Flow',
    tagline: 'Sessiz bir akış.',
    description:
      'Flow, çizgilerle değil, hisle konuşur. Yumuşak geçişler ve doğal dokular, mekâna sakin bir zarafet taşır.',
    finish: 'Ceviz & Antrasit',
    image: door('flow'),
    cutout: true,
    tags: ['Akışkan form', 'Yumuşak geçişler', 'Doğal doku'],
  },
  {
    id: 'grid',
    name: 'Grid',
    tagline: 'Düzenin sessiz ifadesi.',
    description:
      'Grid, planlı bir duruş sergiler. Yüzeyde ilerleyen net çizgiler ve dengeli oranlar, girişe sakin ama güçlü bir karakter kazandırır.',
    finish: 'Ceviz & Antrasit',
    image: door('grid'),
    cutout: true,
    tags: ['Modüler ızgara', 'Dengeli oranlar', 'Net çizgiler'],
  },
  {
    id: 'tranqua',
    name: 'Tranqua',
    tagline: 'Gücü fısıldayan tasarım.',
    description:
      'Dingin çizgilerle tanımlanan form, modern mekânlara güçlü bir sadelik katar. Lüks, detayda saklıdır.',
    finish: 'Ceviz & Antrasit',
    image: door('tranqua'),
    cutout: false,
    scene: scene('tranqua'),
    tags: ['Dingin çizgiler', 'Güçlü sadelik', 'Detayda lüks'],
  },
  {
    id: 'tranquil',
    name: 'Tranquil',
    tagline: 'Modern form. Zamansız duruş.',
    description: 'Doğal dokular, mekâna sakin bir zarafet taşır. Mekânınızı güzelleştirin.',
    finish: 'Gri & Antrasit',
    image: door('tranquil'),
    cutout: true,
    scene: scene('tranquil'),
    tags: ['Doğal dokular', 'Sakin zarafet', 'Modern form'],
  },
  {
    id: 'wilson',
    name: 'Wilson',
    tagline: 'Sessiz güç. Keskin çizgi.',
    description:
      'Modern mimari için tasarlandı — fazlası değil, tam kararında. Mat antrasit yüzey, yatay hatlarla dengelenir. Güvenliği estetikle görünmez biçimde birleştirir. İlk bakışta sade, yaklaştıkça “kalite” konuşur.',
    finish: 'Gri & Antrasit',
    image: door('wilson'),
    cutout: true,
    tags: STEEL_TAGS,
  },
  {
    id: 'vanguard',
    name: 'Vanguard',
    tagline: 'Disiplinli çizgiler. Kararlı tasarım.',
    description:
      'Dinamik formla cesur kontrastlar verir. Güvenliği mimari disiplinle görünmez biçimde birleştirir. Ulaşılmaz duruşu, tasarımda fark yaratır.',
    finish: 'Gri & Antrasit',
    image: door('vanguard'),
    cutout: true,
    tags: STEEL_TAGS,
  },
  {
    id: 'kario',
    name: 'Kario',
    tagline: 'Çapraz çizgilerde sakin güç.',
    description:
      'Bej ve antrasit yüzeylerin çapraz hatlarla buluştuğu, geometrik ve sofistike bir giriş kompozisyonu.',
    finish: 'Gri & Antrasit',
    image: door('kario'),
    cutout: false,
    scene: scene('kario'),
    tags: ['Çapraz hatlar', 'Bej & antrasit', 'Geometrik kompozisyon'],
  },
  {
    id: 'coreveil',
    name: 'Coreveil',
    tagline: 'Sessizliğin tasarımı.',
    description:
      'Açık tonlu dikey ahşap çıtalar ile mat antrasit yüzeyin birleştiği, sade ve huzurlu bir giriş.',
    finish: 'Gri & Antrasit',
    image: door('coreveil'),
    cutout: false,
    scene: scene('coreveil'),
    tags: ['Dikey çıta', 'Açık ton ahşap', 'Mat antrasit'],
  },
  {
    id: 'monolux',
    name: 'Monolux',
    tagline: 'Modern görüntü. İncelikli zarafet.',
    description: 'Geometri ve minimalizmin birleşimi, dingin bir zarafet sunar. Gizliden gelen güven.',
    finish: 'Gri & Antrasit',
    image: door('monolux'),
    cutout: true,
    tags: ['Çelik gövde', 'Mat antrasit', 'Minimal donanım'],
  },
  {
    id: 'gravon',
    name: 'Gravon',
    tagline: 'Her kapı yeni bir gelecek.',
    description: 'Geometri ve minimalizmin birleşimi, dingin bir zarafet sunar. Gizliden gelen güven.',
    finish: 'Gri & Antrasit',
    image: door('gravon'),
    cutout: true,
    tags: ['Gri ahşap doku', 'Yatay hatlar', 'Dingin zarafet'],
  },
  {
    id: 'wilfred-grey',
    name: 'Wilfred Grey',
    tagline: 'Sakin ve güvenli.',
    description: 'Minimal çizgiler, rafine kontrastlar. Zamana dirençli bir tasarım anlayışı. Sessiz ama kararlı.',
    finish: 'Gri & Antrasit',
    image: door('wilfred-grey'),
    cutout: true,
    tags: ['Minimal çizgiler', 'Rafine kontrast', 'Zamana dirençli'],
  },
  {
    id: 'wilfred-white',
    name: 'Wilfred White',
    tagline: 'Minimal çizgiler, rafine kontrastlar.',
    description:
      'Mat antrasit yüzeyin ortasında yükselen krem şerit; sade, zarif ve zamansız bir giriş.',
    finish: 'Gri & Antrasit',
    image: door('wilfred-white'),
    cutout: true,
    scene: scene('wilfred-white'),
    tags: ['Minimal çizgiler', 'Krem şerit', 'Rafine kontrast'],
  },
  {
    id: 'mk-1',
    name: 'MK-1 Çok Amaçlı Sac Kapı',
    tagline: 'Teknik hacimler ve sığınaklar için güvenli çözüm.',
    description:
      'Su deposu, sığınak ve teknik odalar için özel olarak tasarlanmıştır. Yüksek dayanıklılık, opsiyonel yalıtım ve duman sızdırmazlık sunar.',
    finish: 'Çok Amaçlı Sac Kapı',
    image: door('mk-1'),
    cutout: false,
    scene: scene('mk1'),
    tags: ['Su deposu', 'Sığınak', 'Teknik oda'],
    note: 'Siparişlerinizde RAL kodu belirtiniz.',
    specs: [
      { label: 'Kanat yapısı', value: '1.2 mm DKP sac' },
      { label: 'Kasa yapısı', value: '1 mm DKP sac' },
      { label: 'Dolgu', value: 'Taş yünü / Cam yünü (opsiyonel)' },
      { label: 'Duman sızdırmazlık', value: 'Opsiyonel' },
    ],
  },
];
