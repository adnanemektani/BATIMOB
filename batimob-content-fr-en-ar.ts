export type Locale = "fr" | "en" | "ar";

type Item = { title: string; text: string };
type Project = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  text: string;
};
type News = { date: string; category: string; title: string; text: string };
type Testimonial = { quote: string; author: string; role: string };

export type Dictionary = {
  nav: { home: string; about: string; services: string; projects: string; news: string; contact: string };
  actions: { contact: string; allServices: string; allProjects: string; allNews: string; discover: string; quote: string; brochure: string; send: string };
  hero: { eyebrow: string; title: string; lead: string; imageAlt: string };
  intro: { eyebrow: string; title: string; text: string; tags: string[] };
  services: { title: string; lead: string; items: Item[] };
  projects: { eyebrow: string; title: string; lead: string; featured: Project; items: Project[] };
  why: { title: string; lead: string; items: Item[] };
  stats: { label: string; value: string }[];
  certifications: { title: string; items: string[] };
  partners: { title: string; items: string[] };
  testimonials: { title: string; items: Testimonial[] };
  news: { title: string; lead: string; items: News[] };
  ctaBand: { title: string; text: string };
  footer: { about: string; company: string; legal: string; links: string[]; legalLinks: string[]; address: string; rights: string };
  about: { title: string; lead: string; historyTitle: string; history: string; valuesTitle: string; values: Item[]; atelierAlt: string };
  contact: { title: string; lead: string; form: { name: string; email: string; company: string; message: string; note: string }; officesTitle: string; offices: { city: string; lines: string[] }[] };
  meta: Record<"home" | "about" | "services" | "projects" | "news" | "contact", { title: string; description: string }>;
};

const fr: Dictionary = {
  nav: { home: "Accueil", about: "À propos", services: "Services", projects: "Projets", news: "Actualités", contact: "Contact" },
  actions: { contact: "Contact", allServices: "Voir tous les services", allProjects: "Voir tous les projets", allNews: "Toutes les actualités", discover: "Découvrir le projet", quote: "Demander un devis", brochure: "Consulter nos plaquettes", send: "Envoyer la demande" },
  hero: {
    eyebrow: "Depuis 1966 — Jura, France",
    title: "L'ingénierie du bois, la précision du détail pour les espaces d'exception.",
    lead: "Depuis 1966, Batimob transforme la vision des architectes en réalités tangibles. Entre artisanat jurassien et ingénierie de pointe.",
    imageAlt: "Auditorium habillé de lattes de chêne réalisé par Batimob",
  },
  intro: {
    eyebrow: "À propos",
    title: "Héritage jurassien, rayonnement international",
    text: "Basés au cœur du Jura, nous perpétuons une tradition de menuiserie d'excellence tout en intégrant les technologies de modélisation les plus avancées. Notre bureau d'études interne garantit une faisabilité technique sans compromis esthétique.",
    tags: ["Matériaux éco-responsables", "Précision millimétrique"],
  },
  services: {
    title: "Nos expertises",
    lead: "De l'étude technique à la pose finale, nous maîtrisons chaque étape de la chaîne de valeur.",
    items: [
      { title: "Menuiserie", text: "Ouvrages intérieurs et extérieurs, façades bois et structures complexes pour bâtiments administratifs." },
      { title: "Fenêtres & portes-fenêtres", text: "Fenêtres, portes-fenêtres et ensembles menuisés sur mesure, étudiés selon les proportions, la matière, la lumière, le confort et l'intégration architecturale." },
      { title: "Agencement", text: "Mobilier sur mesure, habillages acoustiques et aménagement complet de boutiques de luxe." },
      { title: "Acoustique", text: "Solutions intégrant les contraintes acoustiques sans compromis esthétique, avec partenaires spécialisés et laboratoires d'essais lorsque nécessaire." },
      { title: "Matières", text: "Sélection rigoureuse d'essences de bois, de composites et de finitions innovantes." },
      { title: "Bureau d'étude", text: "Modélisation BIM, conception technique et suivi de chantier par nos ingénieurs." },
    ],
  },

  projects: {
    eyebrow: "Réalisation phare",
    title: "Projets",
    lead: "Cinémas, théâtres, hôtels, boutiques et sièges sociaux : une même exigence de finition.",
    featured: { slug: "theatre", name: "Théâtre de la Ville, Paris", sector: "Culture", year: "2024", text: "Une réhabilitation complète incluant des panneaux acoustiques complexes en chêne massif et un agencement scénique sur mesure répondant aux normes de sécurité les plus strictes." },
    items: [
      { slug: "hotel", name: "Hôtel Beau-Rivage", sector: "Hôtellerie", year: "2024", text: "Agencement du lobby et des suites, réception monobloc en chêne massif." },
      { slug: "office", name: "Siège social Lumen", sector: "Tertiaire", year: "2023", text: "Cloisons vitrées et habillages noyer sur 4 200 m² de bureaux de standing." },
      { slug: "boutique", name: "Boutique Maison Vaux", sector: "Retail", year: "2023", text: "Panneaux cannelés, laiton et éclairage intégré pour un flagship parisien." },
    ],
  },
  why: {
    title: "Pourquoi Batimob",
    lead: "Un interlocuteur unique, de l'esquisse à la réception de chantier.",
    items: [
      { title: "Bureau d'études intégré", text: "Modélisation et plans d'exécution réalisés sur notre site de production." },
      { title: "Fabrication maîtrisée", text: "Atelier de 6 000 m² dans le Jura, contrôle qualité à chaque étape." },
      { title: "Respect des délais", text: "Second œuvre planifié au jour près, coordination avec tous les corps d'état." },
      { title: "Engagement environnemental", text: "Bois issu de forêts à gestion éco-responsable, empreinte carbone minimisée." },
    ],
  },
  stats: [
    { value: "1966", label: "Fondation" },
    { value: "25", label: "Collaborateurs" },
    { value: "15+", label: "Projets annuels" },
    { value: "3", label: "Pays d'intervention" },
  ],
  certifications: { title: "Certifications", items: ["PEFC", "QUALIBAT", "FSC", "ISO 9001", "RGE"] },
  partners: { title: "Ils nous font confiance", items: ["VINCI", "BOUYGUES", "EIFFAGE", "ACCOR", "PATHÉ"] },
  testimonials: {
    title: "Témoignages",
    items: [
      { quote: "Une exigence de finition rare, tenue sur un chantier livré dans les délais malgré des contraintes acoustiques extrêmes.", author: "Claire Meunier", role: "Architecte associée, Atelier MV" },
      { quote: "Le bureau d'études a résolu des détails que nous pensions irréalisables. Un partenaire, pas un simple exécutant.", author: "Thomas Reiner", role: "Directeur travaux, Groupe Hôtelier BR" },
    ],
  },
  news: {
    title: "Actualités",
    lead: "Chantiers, savoir-faire et vie de l'entreprise.",
    items: [
      { date: "Juin 2026", category: "Chantier", title: "Livraison du Théâtre de la Ville", text: "1 800 m² de panneaux acoustiques en chêne massif posés en huit mois." },
      { date: "Avril 2026", category: "Atelier", title: "Nouvelle ligne d'usinage numérique", text: "Un centre 5 axes vient renforcer notre capacité de production sur mesure." },
      { date: "Février 2026", category: "Engagement", title: "100 % de nos bois certifiés", text: "L'ensemble de nos approvisionnements provient désormais de forêts gérées durablement." },
    ],
  },
  ctaBand: { title: "Parlons de votre prochain projet.", text: "Qu'il s'agisse d'un boutique-hôtel ou d'un siège social, nous apportons la même exigence de finition." },
  footer: {
    about: "Menuiserie et agencement sur mesure pour les espaces d'exception, depuis 1966.",
    company: "Société",
    legal: "Légal",
    links: ["À propos", "Services", "Projets", "Actualités"],
    legalLinks: ["Mentions légales", "Confidentialité"],
    address: "ZA Les Casernes, 39600 Arbois, France\nBureau Paris : 12 rue de la Paix, 75002 Paris",
    rights: "© 2026 Batimob SAS",
  },
  about: {
    title: "Un savoir-faire né dans le Jura",
    lead: "Créée en 1966, Batimob réunit tout l'héritage du travail du bois, cher au patrimoine du Jura.",
    historyTitle: "Histoire",
    history: "Aujourd'hui dirigée par Louis Beyer, Batimob réalise chaque année plus d'une quinzaine de projets sur l'ensemble du territoire français, et tout particulièrement en région parisienne. Notre équipe de 25 collaborateurs s'investit dans vos projets sur mesure : experts du travail du bois, ils transforment vos intentions en réalité, dans leurs moindres détails.",
    valuesTitle: "Valeurs",
    values: [
      { title: "Made in Jura", text: "Toutes nos réalisations naissent et prennent forme sur le territoire jurassien." },
      { title: "Environnement", text: "Approvisionnement exclusif en forêts éco-gérées et empreinte carbone minimisée." },
      { title: "Délais", text: "Intervenants du second œuvre, nous mettons un point d'honneur à respecter les plannings." },
    ],
    atelierAlt: "Atelier de menuiserie Batimob dans le Jura",
  },
  contact: {
    title: "Parlons de votre projet",
    lead: "Décrivez-nous votre programme : notre bureau d'études revient vers vous sous 48 heures.",
    form: { name: "Nom complet", email: "E-mail professionnel", company: "Société", message: "Votre projet", note: "En envoyant ce formulaire, vous acceptez d'être recontacté par nos équipes." },
    officesTitle: "Nos implantations",
    offices: [
      { city: "Siège & atelier", lines: ["ZA Les Casernes", "39600 Arbois, France", "+33 (0)3 84 47 18 23"] },
      { city: "Bureau Paris", lines: ["12 rue de la Paix", "75002 Paris, France", "contact@batimob.net"] },
    ],
  },
  meta: {
    home: { title: "Batimob — Menuiserie & agencement d'exception depuis 1966", description: "Menuiserie, agencement et bureau d'études pour cinémas, hôtels, boutiques et sièges sociaux. Savoir-faire jurassien depuis 1966." },
    about: { title: "À propos — Batimob, menuiserie du Jura", description: "Fondée en 1966, Batimob réunit 25 collaborateurs experts du bois pour des projets sur mesure en France et en Europe." },
    services: { title: "Services — Menuiserie, agencement, bureau d'études", description: "Six expertises complémentaires : menuiserie, fenêtres, agencement, acoustique, matières et bureau d'études intégré." },
    projects: { title: "Projets — Réalisations Batimob", description: "Théâtres, hôtels, boutiques et sièges sociaux : découvrez les réalisations sur mesure de Batimob." },
    news: { title: "Actualités — Batimob", description: "Chantiers livrés, investissements atelier et engagements environnementaux de Batimob." },
    contact: { title: "Contact — Batimob", description: "Contactez le bureau d'études Batimob à Arbois ou notre bureau parisien pour votre projet d'agencement." },
  },
};

const en: Dictionary = {
  nav: { home: "Home", about: "About", services: "Services", projects: "Projects", news: "News", contact: "Contact" },
  actions: { contact: "Contact", allServices: "View all services", allProjects: "View all projects", allNews: "All news", discover: "Explore the project", quote: "Request a quote", brochure: "Download our brochure", send: "Send enquiry" },
  hero: {
    eyebrow: "Since 1966 — Jura, France",
    title: "Timber engineering and absolute detail for exceptional spaces.",
    lead: "Since 1966, Batimob has turned architects' visions into built reality — where Jura craftsmanship meets precision engineering.",
    imageAlt: "Auditorium clad in oak slats delivered by Batimob",
  },
  intro: {
    eyebrow: "About",
    title: "Jura heritage, international reach",
    text: "Based in the heart of the Jura, we carry on a tradition of fine joinery while integrating the most advanced modelling technologies. Our in-house design office guarantees technical feasibility with no aesthetic compromise.",
    tags: ["Eco-responsible materials", "Millimetric precision"],
  },
  services: {
    title: "Our expertise",
    lead: "From technical study to final installation, we control every step of the value chain.",
    items: [
      { title: "Joinery", text: "Interior and exterior works, timber façades and complex structures for institutional buildings." },
      { title: "Windows & French doors", text: "Bespoke windows, French doors and joinery assemblies studied for proportion, material, light, comfort and architectural integration." },
      { title: "Fit-out", text: "Bespoke furniture, acoustic cladding and complete fit-out of luxury retail spaces." },
      { title: "Acoustics", text: "Solutions that meet acoustic constraints without aesthetic compromise, with specialist partners and testing laboratories where required." },
      { title: "Materials", text: "Rigorous selection of timber species, composites and innovative finishes." },
      { title: "Design office", text: "BIM modelling, technical design and site supervision by our engineers." },
    ],

  },
  projects: {
    eyebrow: "Featured project",
    title: "Projects",
    lead: "Cinemas, theatres, hotels, boutiques and headquarters — one standard of finish.",
    featured: { slug: "theatre", name: "Théâtre de la Ville, Paris", sector: "Culture", year: "2024", text: "A full refurbishment including complex solid-oak acoustic panelling and bespoke stage joinery meeting the strictest safety standards." },
    items: [
      { slug: "hotel", name: "Beau-Rivage Hotel", sector: "Hospitality", year: "2024", text: "Lobby and suite fit-out with a monolithic solid-oak reception desk." },
      { slug: "office", name: "Lumen Headquarters", sector: "Workplace", year: "2023", text: "Glazed partitions and walnut panelling across 4,200 sqm of premium offices." },
      { slug: "boutique", name: "Maison Vaux Boutique", sector: "Retail", year: "2023", text: "Fluted panels, brass and integrated lighting for a Paris flagship." },
    ],
  },
  why: {
    title: "Why Batimob",
    lead: "A single partner, from first sketch to site handover.",
    items: [
      { title: "Integrated design office", text: "Modelling and shop drawings produced on our own production site." },
      { title: "Controlled manufacturing", text: "A 6,000 sqm workshop in the Jura with quality control at every stage." },
      { title: "On-time delivery", text: "Fit-out planned to the day, coordinated with every other trade on site." },
      { title: "Environmental commitment", text: "Timber sourced from sustainably managed forests, minimised carbon footprint." },
    ],
  },
  stats: [
    { value: "1966", label: "Founded" },
    { value: "25", label: "Team members" },
    { value: "15+", label: "Projects a year" },
    { value: "3", label: "Countries served" },
  ],
  certifications: { title: "Certifications", items: ["PEFC", "QUALIBAT", "FSC", "ISO 9001", "RGE"] },
  partners: { title: "Trusted by", items: ["VINCI", "BOUYGUES", "EIFFAGE", "ACCOR", "PATHÉ"] },
  testimonials: {
    title: "Testimonials",
    items: [
      { quote: "A rare standard of finish, held on a project delivered on time despite extreme acoustic constraints.", author: "Claire Meunier", role: "Partner architect, Atelier MV" },
      { quote: "Their design office solved details we thought impossible. A partner, not a subcontractor.", author: "Thomas Reiner", role: "Construction director, BR Hotel Group" },
    ],
  },
  news: {
    title: "News",
    lead: "Projects, craft and life inside the company.",
    items: [
      { date: "June 2026", category: "Project", title: "Théâtre de la Ville handed over", text: "1,800 sqm of solid-oak acoustic panelling installed in eight months." },
      { date: "April 2026", category: "Workshop", title: "New digital machining line", text: "A 5-axis machining centre strengthens our bespoke production capacity." },
      { date: "February 2026", category: "Commitment", title: "100% certified timber", text: "All of our supply now comes from sustainably managed forests." },
    ],
  },
  ctaBand: { title: "Let's talk about your next project.", text: "Whether it is a boutique hotel or a corporate headquarters, we bring the same standard of finish." },
  footer: {
    about: "Bespoke joinery and fit-out for exceptional spaces, since 1966.",
    company: "Company",
    legal: "Legal",
    links: ["About", "Services", "Projects", "News"],
    legalLinks: ["Legal notice", "Privacy"],
    address: "ZA Les Casernes, 39600 Arbois, France\nParis office: 12 rue de la Paix, 75002 Paris",
    rights: "© 2026 Batimob SAS",
  },
  about: {
    title: "A craft born in the Jura",
    lead: "Founded in 1966, Batimob carries the full heritage of woodworking rooted in the Jura region.",
    historyTitle: "History",
    history: "Now led by Louis Beyer, Batimob delivers more than fifteen projects a year across France, and particularly in the Paris region. Our team of 25 invests in every bespoke project: timber experts who turn intentions into reality, down to the last detail.",
    valuesTitle: "Values",
    values: [
      { title: "Made in Jura", text: "Every project is designed and built on Jura soil, the cradle of French woodworking." },
      { title: "Environment", text: "Timber sourced exclusively from eco-managed forests, with a minimised carbon footprint." },
      { title: "Deadlines", text: "As a fit-out contractor, we make meeting the programme a point of honour." },
    ],
    atelierAlt: "Batimob joinery workshop in the Jura",
  },
  contact: {
    title: "Let's talk about your project",
    lead: "Tell us about your programme — our design office replies within 48 hours.",
    form: { name: "Full name", email: "Work email", company: "Company", message: "Your project", note: "By submitting this form you agree to be contacted by our teams." },
    officesTitle: "Our locations",
    offices: [
      { city: "Head office & workshop", lines: ["ZA Les Casernes", "39600 Arbois, France", "+33 (0)3 84 47 18 23"] },
      { city: "Paris office", lines: ["12 rue de la Paix", "75002 Paris, France", "contact@batimob.net"] },
    ],
  },
  meta: {
    home: { title: "Batimob — Fine joinery & fit-out since 1966", description: "Joinery, fit-out and an integrated design office for cinemas, hotels, boutiques and headquarters. Jura craftsmanship since 1966." },
    about: { title: "About — Batimob, joinery from the Jura", description: "Founded in 1966, Batimob brings together 25 timber experts for bespoke projects across France and Europe." },
    services: { title: "Services — Joinery, fit-out, design office", description: "Six complementary expertises: joinery, windows, fit-out, acoustics, materials and an integrated design office." },
    projects: { title: "Projects — Batimob work", description: "Theatres, hotels, boutiques and headquarters: explore Batimob's bespoke projects." },
    news: { title: "News — Batimob", description: "Completed projects, workshop investments and environmental commitments at Batimob." },
    contact: { title: "Contact — Batimob", description: "Contact the Batimob design office in Arbois or our Paris office to discuss your fit-out project." },
  },
};

const ar: Dictionary = {
  nav: { home: "الرئيسية", about: "من نحن", services: "الخدمات", projects: "المشاريع", news: "الأخبار", contact: "اتصل بنا" },
  actions: { contact: "اتصل بنا", allServices: "كل الخدمات", allProjects: "كل المشاريع", allNews: "كل الأخبار", discover: "اكتشف المشروع", quote: "اطلب عرض سعر", brochure: "تحميل الكتيب", send: "إرسال الطلب" },
  hero: {
    eyebrow: "منذ 1966 — جورا، فرنسا",
    title: "هندسة الخشب ودقّة التفاصيل لفضاءات استثنائية.",
    lead: "منذ عام 1966، تحوّل باتيموب رؤية المعماريين إلى واقع ملموس، بين حرفية جورا والهندسة المتقدّمة.",
    imageAlt: "قاعة مكسوّة بشرائح خشب البلوط من إنجاز باتيموب",
  },
  intro: {
    eyebrow: "من نحن",
    title: "إرث جورا وحضور دولي",
    text: "من قلب منطقة جورا، نواصل تقليد النجارة الراقية مع اعتماد أحدث تقنيات النمذجة. يضمن مكتب الدراسات الداخلي لدينا جدوى تقنية دون أي تنازل جمالي.",
    tags: ["مواد صديقة للبيئة", "دقّة بالمليمتر"],
  },
  services: {
    title: "خبراتنا",
    lead: "من الدراسة التقنية إلى التركيب النهائي، نتحكّم في كل مرحلة.",
    items: [
      { title: "النجارة", text: "أعمال داخلية وخارجية وواجهات خشبية وهياكل معقّدة للمباني المؤسسية." },
      { title: "النوافذ والأبواب الشرفية", text: "نوافذ وأبواب شرفية ومجموعات نجارة حسب الطلب، مدروسة وفق التناسب والمادة والضوء والراحة والاندماج المعماري." },
      { title: "التجهيز الداخلي", text: "أثاث حسب الطلب وكسوات صوتية وتجهيز كامل للمتاجر الفاخرة." },
      { title: "الصوتيات", text: "حلول تستجيب للمتطلبات الصوتية دون أي تنازل جمالي، بالتعاون مع شركاء متخصصين ومختبرات اختبار عند الحاجة." },
      { title: "المواد", text: "اختيار دقيق لأنواع الأخشاب والمركّبات والتشطيبات المبتكرة." },
      { title: "مكتب الدراسات", text: "نمذجة BIM وتصميم تقني ومتابعة الورش من قبل مهندسينا." },
    ],

  },
  projects: {
    eyebrow: "مشروع مميّز",
    title: "المشاريع",
    lead: "دور سينما ومسارح وفنادق ومتاجر ومقرات: المستوى ذاته من الإتقان.",
    featured: { slug: "theatre", name: "مسرح المدينة، باريس", sector: "ثقافة", year: "2024", text: "تجديد شامل يشمل ألواحًا صوتية معقّدة من خشب البلوط الصلب وتجهيزًا مسرحيًا حسب الطلب وفق أعلى معايير السلامة." },
    items: [
      { slug: "hotel", name: "فندق بو-ريفاج", sector: "ضيافة", year: "2024", text: "تجهيز البهو والأجنحة مع مكتب استقبال من البلوط الصلب." },
      { slug: "office", name: "مقر لومن", sector: "مكاتب", year: "2023", text: "قواطع زجاجية وكسوات من الجوز على 4200 م² من المكاتب الراقية." },
      { slug: "boutique", name: "متجر ميزون فو", sector: "تجزئة", year: "2023", text: "ألواح مضلّعة ونحاس وإضاءة مدمجة لمتجر رئيسي في باريس." },
    ],
  },
  why: {
    title: "لماذا باتيموب",
    lead: "شريك واحد من الرسم الأول حتى تسليم الورشة.",
    items: [
      { title: "مكتب دراسات مدمج", text: "النمذجة ومخططات التنفيذ تُنجز داخل موقع الإنتاج." },
      { title: "تصنيع محكم", text: "ورشة بمساحة 6000 م² في جورا مع مراقبة جودة في كل مرحلة." },
      { title: "احترام المواعيد", text: "تخطيط دقيق للأشغال وتنسيق مع جميع الحرف في الموقع." },
      { title: "التزام بيئي", text: "خشب من غابات مُدارة بشكل مستدام وبصمة كربونية منخفضة." },
    ],
  },
  stats: [
    { value: "1966", label: "سنة التأسيس" },
    { value: "25", label: "موظفًا" },
    { value: "+15", label: "مشروعًا سنويًا" },
    { value: "3", label: "دول عمل" },
  ],
  certifications: { title: "الشهادات", items: ["PEFC", "QUALIBAT", "FSC", "ISO 9001", "RGE"] },
  partners: { title: "شركاء الثقة", items: ["VINCI", "BOUYGUES", "EIFFAGE", "ACCOR", "PATHÉ"] },
  testimonials: {
    title: "آراء العملاء",
    items: [
      { quote: "مستوى إتقان نادر، مع تسليم في الموعد رغم قيود صوتية بالغة الصعوبة.", author: "كلير مونييه", role: "معمارية شريكة، أتولييه إم في" },
      { quote: "حلّ مكتب الدراسات تفاصيل ظنناها مستحيلة. شريك حقيقي وليس مجرد منفّذ.", author: "توماس راينر", role: "مدير الأشغال، مجموعة بي آر الفندقية" },
    ],
  },
  news: {
    title: "الأخبار",
    lead: "ورش وحرفية وحياة الشركة.",
    items: [
      { date: "يونيو 2026", category: "ورشة", title: "تسليم مسرح المدينة", text: "تركيب 1800 م² من الألواح الصوتية من البلوط الصلب خلال ثمانية أشهر." },
      { date: "أبريل 2026", category: "المصنع", title: "خط تصنيع رقمي جديد", text: "مركز تشغيل بخمسة محاور يعزّز قدرتنا على الإنتاج حسب الطلب." },
      { date: "فبراير 2026", category: "التزام", title: "100% من أخشابنا معتمدة", text: "جميع إمداداتنا تأتي الآن من غابات مُدارة بشكل مستدام." },
    ],
  },
  ctaBand: { title: "لنتحدّث عن مشروعك القادم.", text: "سواء كان فندقًا بوتيكيًا أو مقرًا رئيسيًا، نلتزم بالمستوى ذاته من الإتقان." },
  footer: {
    about: "نجارة وتجهيز داخلي حسب الطلب لفضاءات استثنائية، منذ 1966.",
    company: "الشركة",
    legal: "قانوني",
    links: ["من نحن", "الخدمات", "المشاريع", "الأخبار"],
    legalLinks: ["إشعار قانوني", "الخصوصية"],
    address: "ZA Les Casernes، 39600 أربوا، فرنسا\nمكتب باريس: 12 شارع لا بيه، 75002 باريس",
    rights: "© 2026 Batimob SAS",
  },
  about: {
    title: "حرفة وُلدت في جورا",
    lead: "تأسست باتيموب عام 1966 وتحمل إرث العمل بالخشب المتجذّر في منطقة جورا.",
    historyTitle: "تاريخنا",
    history: "بقيادة لوي باير اليوم، تنجز باتيموب أكثر من خمسة عشر مشروعًا سنويًا في مختلف أنحاء فرنسا وخاصة في منطقة باريس. يعمل فريقنا المكوّن من 25 خبيرًا في الخشب على تحويل تصوّراتكم إلى واقع بأدقّ التفاصيل.",
    valuesTitle: "قيمنا",
    values: [
      { title: "صنع في جورا", text: "كل إنجازاتنا تُصمَّم وتُنفَّذ في منطقة جورا، مهد النجارة الفرنسية." },
      { title: "البيئة", text: "تزويد حصري من غابات مُدارة بيئيًا مع تقليل البصمة الكربونية." },
      { title: "المواعيد", text: "نلتزم باحترام الجداول الزمنية في كل مراحل التنفيذ." },
    ],
    atelierAlt: "ورشة النجارة الخاصة بباتيموب في جورا",
  },
  contact: {
    title: "لنتحدّث عن مشروعك",
    lead: "صف لنا برنامجك، ويجيبك مكتب الدراسات خلال 48 ساعة.",
    form: { name: "الاسم الكامل", email: "البريد المهني", company: "الشركة", message: "مشروعك", note: "بإرسال هذا النموذج توافق على تواصل فرقنا معك." },
    officesTitle: "مواقعنا",
    offices: [
      { city: "المقر والورشة", lines: ["ZA Les Casernes", "39600 أربوا، فرنسا", "+33 (0)3 84 47 18 23"] },
      { city: "مكتب باريس", lines: ["12 شارع لا بيه", "75002 باريس، فرنسا", "contact@batimob.net"] },
    ],
  },
  meta: {
    home: { title: "باتيموب — نجارة وتجهيز داخلي راقٍ منذ 1966", description: "نجارة وتجهيز داخلي ومكتب دراسات لدور السينما والفنادق والمتاجر والمقرات. حرفية جورا منذ 1966." },
    about: { title: "من نحن — باتيموب، نجارة جورا", description: "تأسست عام 1966 وتضم 25 خبيرًا في الخشب لمشاريع حسب الطلب في فرنسا وأوروبا." },
    services: { title: "الخدمات — نجارة وتجهيز ومكتب دراسات", description: "ست خبرات متكاملة: النجارة والنوافذ والتجهيز الداخلي والصوتيات والمواد ومكتب الدراسات." },
    projects: { title: "المشاريع — إنجازات باتيموب", description: "مسارح وفنادق ومتاجر ومقرات: اكتشف إنجازات باتيموب حسب الطلب." },
    news: { title: "الأخبار — باتيموب", description: "مشاريع مسلّمة واستثمارات في الورشة والتزامات بيئية." },
    contact: { title: "اتصل بنا — باتيموب", description: "تواصل مع مكتب دراسات باتيموب في أربوا أو مكتبنا في باريس لمناقشة مشروعك." },
  },
};

export const translations: Record<Locale, Dictionary> = { fr, en, ar };
