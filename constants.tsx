
import React from 'react';
import { 
  Sun, 
  Mountain, 
  Leaf, 
  ShieldCheck, 
  Flame,
  Landmark,
  User
} from 'lucide-react';

export const BRAND = {
  name: "Kalubai Murti Bhandar",
  marathiName: "काळूबाई मूर्ती भांडार",
  tagline: "Tradition Meets Divinity",
  marathiTagline: "जिथे भक्तीला मिळतो कलेचा आकार",
  location: "At. Po. Kale, Tal. Karad, Dist. Satara, Maharashtra",
  marathiLocation: "मु. पो. काले, ता. कराड, जि. सातारा",
  phone1: "9922811891",
  phone2: "7558671061",
  phone3: "9921443259",
  email: "contact@kalubaimurtibhandar.com",
};

export const PRODUCTS = [
  {
    title: "God & Goddess Idols",
    marathiTitle: "देव मूर्ती",
    description: "Divine sculptures of deities including Ganesh, Vitthal-Rukmini, and more, crafted with spiritual precision.",
    image: " /collection/godgodess.png",
    icon: <Sun className="w-8 h-8 text-maroon" />,
  },
  {
    title: "Samadhi Sculptures",
    marathiTitle: "समाधी",
    description: "Traditional and elegant Samadhi structures crafted from black stones to honor holy lineages.",
    image: " /collection/samadhi.png",
    icon: <Landmark className="w-8 h-8 text-maroon" />,
  },
  {
    title: "Nandi Statues",
    marathiTitle: "नंदी",
    description: "Beautifully carved Nandi sculptures in black stone, a symbol of devotion for every Shiva temple.",
    image: " /collection/nandi.png",
    icon: <Flame className="w-8 h-8 text-maroon" />,
  },
  {
    title: "Tulshivrindavan",
    marathiTitle: "तुळशीवृंदावन",
    description: "Hand-carved Tulsi planters in various stones and designs, perfect for home and temple courtyards.",
    image: " /collection/tulasivrindavan.png",
    icon: <Leaf className="w-8 h-8 text-maroon" />,
  },
  {
    title: "Black Stone Memorials",
    marathiTitle: "काळ्या पाषाणातील स्मृती",
    description: "Durable and aesthetic memorials and inscriptions carved in high-quality black stone.",
    image: " /collection/blackstone.jpeg",
    icon: <Mountain className="w-8 h-8 text-maroon" />,
  },
  {
    title: "Custom Portrait Statues",
    marathiTitle: "कस्टम पुतळे",
    description: "Bespoke life-like statues and busts of figures, leaders, and loved ones with hyper-realistic detail.",
    image: " /collection/customestatue.jpeg",
    icon: <User className="w-8 h-8 text-maroon" />,
  },
];

export const VINTAGE_PHOTOS = [
  { image: " /sc1_devi.jpeg", caption: "Early Days"},
  { image: " /sw2_nandi.jpeg", caption: "Ancestral Workshop"},
  { image: " /sc3_tulaja.jpeg", caption: "Aaai Tulajabhavani"},
  { image: " /sw4_half2.jpeg", caption: "The Sculptors - Mahendra Desai and Anil Desai"},
  { image: " /sc5_maharaj.jpeg", caption: "The Master and Maker"},
  { image: " /sw6_8vinayak.jpeg", caption: "Ashtavinayak" },
  { image: " /sc7_bhairoba.jpeg", caption: "Finishing Touch" },
  { image: " /sw8_murtihat.jpeg", caption: "Legacy In Stone" },
  { image: " /sc9_seatbaba.jpeg", caption: "Small Idols" },
  { image: " /sw10_maruti.jpeg", caption: "11 Maruti - Our true earning" },
  { image: " /sc11_datta.jpeg", caption: " Datta murti Evening Glow" },
  { image: " /sw12_ghoda.jpeg", caption: "Ashwashilpa"},
  { image: " /sc13_phanuman.jpeg", caption: "Veneration" },
  { image: " /sw14_nandiBaher.jpeg", caption: "Nandi Maharaj Statue" },
  { image: " /sc15_parashuram.jpeg", caption: "Deity" },
  { image: " /sw16_ganapatiP&K.jpeg", caption: "The First Ganesha"},
  { image: " /sc17_sannytatya.jpeg", caption: "Journy From factory to tample" },
  { image: " /sw18_appa.jpeg", caption: "Mahakali Murti" },
  { image: " /sc19_3kaka.jpeg", caption: "Our Team , Our Heritage"},
  { image: " /sw20_oldfront.jpeg", caption: "Workshop Entrance" },
  { image: " /sc21_baba.jpeg", caption: "Out identity" },
  { image: " /sw22_dyaneshwar.jpeg", caption: "Dyaneshwar Maharaj - Satisfaction"},
  { image: " /sc23_My.jpeg", caption: "Collective Effort"},
  { image: " /sw24_jayVjay.jpeg", caption: "The devine sentinels jay-vijay "},
  { image: " /sc25_chatrapati.jpeg", caption: "Chatrapati Shivaji Maharaj"},
  { image: " /sw26_3murtiBlack.jpeg", caption: "Divine forms in black stone"},

];

export const ARTISTS = [
  {
    name: "Shri Mahendra Balkrishna Desai (A.T.D.)",
    marathiName: "श्री. महेंद्र बाळकृष्ण देसाई",
    role: "Lead Sculptor & Director",
    marathiRole: "मुख्य मूर्तिकार व संचालक",
    description: "With decades of experience, Mahendra Sir leads the creative vision and artistic finesse.",
    image: "heritage/mahendradesai.png",
    contact: [BRAND.phone2, BRAND.phone1],
  },
  {
    name: "Shri Anil Balkrishna Desai",
    marathiName: "श्री. अनिल बाळकृष्ण देसाई",
    role: "Director & Stone Specialist",
    marathiRole: "सह-संचालक",
    description: "Expert in traditional stone carving techniques and management.",
    image: "heritage/anildesai.jpg",
    contact: [BRAND.phone3],
  },
];

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@murtikar-mahendradesai",
  instagram: "https://www.instagram.com/kalubai_murti_bhandar",
  facebook: "https://www.facebook.com/share/17ausoLRn7/",
};
