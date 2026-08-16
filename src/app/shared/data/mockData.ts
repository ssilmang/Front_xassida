import { XassidaInterface } from "../../core/models/xassida-interface";

export interface Writer {
  id: string;
  name: string;
  nameArabic: string;
  photo: string;
  biography: string;
  xassidasCount: number;
}

export interface Xassida {
  id: string;
  title: string;
  titleArabic: string;
  writerId: string;
  writerName: string;
  pdfUrl: string;
  excerpt: string;
}
export interface EcrivainWithXassidas {
  id: string;
  nom_complet: string;
  bio:string;
  image: string;
  xassidas: number;
}
export interface EcrivainWithXassidasDetail {
  id: string;
  nom_complet: string;
  bio:string;
  image: string;
  xassidas: XassidaInterface[];
}

export interface Event {
  id: string;
  titre: string;
  date: string;
  time_debut: string;
  time_fin: string;
  place: string;
  programme: string;
  image?: string;
}

export interface TarikhaSection {
  id: string;
  title: string;
  content: string;
}

export const writers: Writer[] = [
  {
    id: "1",
    name: "Cheikh Ahmadou Bamba",
    nameArabic: "الشيخ أحمد بمب",
    photo: "/placeholder.svg",
    biography: "Cheikh Ahmadou Bamba Mbacké (1853-1927), fondateur du Mouridisme, est l'un des plus grands saints de l'Islam en Afrique de l'Ouest. Exilé au Gabon puis en Mauritanie par les colons français, il a composé des milliers de poèmes spirituels appelés Xassidas, qui constituent un héritage littéraire et spirituel inestimable.",
    xassidasCount: 42
  },
  {
    id: "2",
    name: "Serigne Moussa Ka",
    nameArabic: "سيرين موسى كا",
    photo: "/placeholder.svg",
    biography: "Serigne Moussa Ka (1889-1967) fut l'un des premiers disciples de Cheikh Ahmadou Bamba et un poète prolifique. Ses écrits en wolof et en arabe ont contribué à la diffusion des enseignements du Mouridisme.",
    xassidasCount: 28
  },
  {
    id: "3",
    name: "Serigne Mbaye Diakhate",
    nameArabic: "سيرين مباي جاخاتي",
    photo: "/placeholder.svg",
    biography: "Serigne Mbaye Diakhate est un érudit et poète qui a consacré sa vie à l'étude et à la transmission des enseignements soufis. Ses xassidas sont reconnus pour leur profondeur spirituelle.",
    xassidasCount: 15
  }
];

export const xassidas: Xassida[] = [
  {
    id: "1",
    title: "Mawaahibou",
    titleArabic: "مواهب",
    writerId: "1",
    writerName: "Cheikh Ahmadou Bamba",
    pdfUrl: "/sample.pdf",
    excerpt: "Un poème célébrant les dons divins et la gratitude envers Allah."
  },
  {
    id: "2",
    title: "Jazbou",
    titleArabic: "جذب",
    writerId: "1",
    writerName: "Cheikh Ahmadou Bamba",
    pdfUrl: "/sample.pdf",
    excerpt: "L'extase spirituelle et l'attraction divine vers la lumière."
  },
  {
    id: "3",
    title: "Munawwiru Suduri",
    titleArabic: "منور الصدور",
    writerId: "1",
    writerName: "Cheikh Ahmadou Bamba",
    pdfUrl: "/sample.pdf",
    excerpt: "L'illumination des cœurs par la connaissance divine."
  },
  {
    id: "4",
    title: "Massalikoul Jinaan",
    titleArabic: "مسالك الجنان",
    writerId: "1",
    writerName: "Cheikh Ahmadou Bamba",
    pdfUrl: "/sample.pdf",
    excerpt: "Les chemins vers le paradis, guide spirituel pour les croyants."
  },
  {
    id: "5",
    title: "Tazawudu Sikhar",
    titleArabic: "تزود السكار",
    writerId: "2",
    writerName: "Serigne Moussa Ka",
    pdfUrl: "/sample.pdf",
    excerpt: "Provisions spirituelles pour le voyage vers l'éternité."
  },
  {
    id: "6",
    title: "Jawharatul Kamal",
    titleArabic: "جوهرة الكمال",
    writerId: "2",
    writerName: "Serigne Moussa Ka",
    pdfUrl: "/sample.pdf",
    excerpt: "Le joyau de la perfection dans la voie spirituelle."
  },
  {
    id: "7",
    title: "Midaadi",
    titleArabic: "مدادي",
    writerId: "1",
    writerName: "Cheikh Ahmadou Bamba",
    pdfUrl: "/sample.pdf",
    excerpt: "Mon encre, symbole de la connaissance et de l'écriture sacrée."
  },
  {
    id: "8",
    title: "Kuural",
    titleArabic: "كورال",
    writerId: "3",
    writerName: "Serigne Mbaye Diakhate",
    pdfUrl: "/sample.pdf",
    excerpt: "Méditations sur la foi et la dévotion quotidienne."
  }
];

export const events= [
  {
    id: "1",
    title: "Grand Magal de Touba",
    date: "2025-09-15",
    startTime: "00:00",
    endTime: "23:59",
    location: "Touba, Sénégal",
    program: "Commémoration du départ en exil de Cheikh Ahmadou Bamba. Prières collectives, récitation de Xassidas, conférences religieuses et rassemblement de millions de fidèles."
  },
  {
    id: "2",
    title: "Récital de Xassidas",
    date: "2025-03-20",
    startTime: "20:00",
    endTime: "23:00",
    location: "Dakar, Grande Mosquée",
    program: "Soirée de récitation des plus beaux poèmes de Cheikh Ahmadou Bamba. Participation de grands récitateurs et moment de spiritualité intense."
  },
  {
    id: "3",
    title: "Conférence sur le Soufisme",
    date: "2025-04-10",
    startTime: "16:00",
    endTime: "19:00",
    location: "Centre Culturel Islamique de Paris",
    program: "Conférence sur les enseignements soufis et leur application dans la vie moderne. Intervenants internationaux et échanges avec le public."
  },
  {
    id: "4",
    title: "Journée d'étude des Xassidas",
    date: "2025-05-05",
    startTime: "09:00",
    endTime: "17:00",
    location: "Université Cheikh Anta Diop, Dakar",
    program: "Analyse littéraire et spirituelle des œuvres de Cheikh Ahmadou Bamba. Ateliers de lecture et d'interprétation."
  }
];

export const tarikhaSections: TarikhaSection[] = [
  {
    id: "conditions",
    title: "Conditions du Tarikha",
    content: `Le Tarikha Tidiane repose sur des principes fondamentaux que tout disciple doit observer :

1. **La Foi Sincère (Iman)** - Croire en Allah et Son Prophète Muhammad (PSL) avec une conviction profonde et sincère.

2. **L'Attachement au Cheikh** - Reconnaître l'autorité spirituelle du guide et suivre ses enseignements avec dévotion.

3. **Le Travail (Ligééy)** - Le travail est une forme d'adoration. "Travaille comme si tu ne devais jamais mourir, et prie comme si tu allais mourir demain."

4. **L'Éducation Spirituelle** - S'engager dans l'apprentissage continu du Coran, des Hadith et des écrits du Cheikh.

5. **La Purification du Cœur** - Œuvrer constamment à purifier son âme des vices et à cultiver les vertus.`
  },
  {
    id: "wird",
    title: "Le Wird (lâzim)",
    content: `

Le wird (lâzim) est effectué dans la confrérie tidiane (Tidjaniya) deux fois par jour :

Le matin : avant la prière de l’aube jusqu’à environ trois heures après le lever du soleil.

Le soir : après la prière de Asr jusqu’à environ quatre heures après le coucher du soleil.

Déroulement du wird

A‘oûzou billahi mina chaytânir radjîmi
(100 fois)
اعوذ بالله من الشيطان الرجيم

Réciter la sourate Al-Fatiha

Répéter Astaghfiroullah
(100 fois)
استغفر الله

Prier sur le Prophète Mouhammad (PSL) :

« Allahoumma salli ‘ala seyyidinâ Mouhammadine il fâtihi limâ oughliqa, wal khâtimi limâ sabaqa, nâçiril haqqi bil haqqi, wal hâdi ilâ sirâtikal moustaqîmi, wa ‘alâ âlihi haqqa qadrihi wa miqdârihil ‘azîm. »

اللّهم صلّ على سيّدنا محمّد الفاتح لما أُغلق والخاتم لما سبق ناصر الحقّ بالحقّ والهادي إلى صراطك المستقيم وعلى آله حقّ قدره ومقداره العظيم

(100 fois)

Puis dire :

« Subhâna rabbika rabbil ‘izzati ‘ammâ yaçifoûna, wa salâmoun ‘alal moursalîna, wal hamdoulillahi rabbil ‘âlamîne. »

سبحان ربّك ربّ العزّة عمّا يصفون وسلام على المرسلين والحمد لله ربّ العالمين

Répéter la formule :

« Lâ ilâha illallâhou »
لا إله إلاّ الله

(100 fois)

Enfin dire :

« Innallâha wa malâikatouhou yousallouna ‘alan nabî. Yâ ayyouhal lazîna âmanou sallou ‘alayhi wa sallimou taslîmâ. Sallallâhou ‘alayhi wa ‘alâ âlihi wa sahbihi wa sallama taslîmâ. Subhâna rabbika rabbil ‘izzati ‘ammâ yaçifoûna wa salâmoun ‘alal moursalîna wal hamdoulillahi rabbil ‘âlamîne. »

إنّ الله وملائكته يصلّون على النبي يا أيّها الذين آمنوا صلّوا عليه وسلّموا تسليما، سبحان ربّك ربّ العزّة عمّا يصفون وسلام على المرسلين والحمد لله ربّ العالمين

Enfin, réciter la prière de fermeture.` },
  {
    id: "wazifa",
    title: "La Wazifa",
    content: `
La wazifa est obligatoire une fois par jour (le matin ou le soir) dans la confrérie tidiane (Tidjaniya). Elle peut cependant être récitée le matin et le soir :

Le matin : après la prière de l’aube jusqu’à environ trois heures après le lever du soleil.

Le soir : après la prière de Asr jusqu’à environ quatre heures après le coucher du soleil.

Déroulement de la wazifa

Dire :
« A‘oûzou billahi mina chaytânir radjîmi »
اعوذ بالله من الشيطان الرجيم

Réciter la sourate Al-Fatiha

Répéter :
« Astaghfiroullah al-‘azîma lazî lâ ilâha illâ houwa al-hayyoul qayyoûm »
استغفر الله العظيم الذي لا إله إلاّ هو الحيّ القيوم

(30 fois)

Prier sur le Prophète Mouhammad (PSL) :

« Allahoumma salli ‘ala seyyidinâ Mouhammadine il fâtihi limâ oughliqa, wal khâtimi limâ sabaqa, nâçiril haqqi bil haqqi, wal hâdi ilâ sirâtikal moustaqîmi, wa ‘alâ âlihi haqqa qadrihi wa miqdârihil ‘azîm. »

اللّهم صلّ على سيّدنا محمّد الفاتح لما أُغلق والخاتم لما سبق ناصر الحقّ بالحقّ والهادي إلى صراطك المستقيم وعلى آله حقّ قدره ومقداره العظيم

(50 fois)

Puis dire :

« Subhâna rabbika rabbil ‘izzati ‘ammâ yaçifoûna, wa salâmoun ‘alal moursalîna, wal hamdoulillahi rabbil ‘âlamîne. »

سبحان ربّك ربّ العزّة عمّا يصفون وسلام على المرسلين والحمد لله ربّ العالمين

Répéter la formule :

« Lâ ilâha illallâhou »
لا إله إلاّ الله

(100 fois)

Réciter la Jawharatoul Kamal :

« Allahoumma salli wa sallim ‘alâ ‘aynir rahmatir rabbâniyyati, wal yâqoutatil moutahaqqiqatil hâ’itati bimarkazil fouhûmi wal ma‘âni, wa nûril akwânil moutakawwimatil âdamiyyi sâhibil haqqir rabbâniyyil barqil asṭa‘i bimouzounil arbâhil mâli’ati likoulli moutagharridine minal bouhûri wal awâni, wa nûrikal lâmi‘il lazî mala’ta bihi kawnaka hâ’itan bi-amkinatil makâni.

Allahoumma salli wa sallim ‘alâ ‘ayn-il haqqil latî tatajallâ minhâ ‘ourouchoul haqâ’iqi, ‘ayn-il ma‘ârifil aqwami sirâtikal tâmmil asqami.

Allahoumma salli wa sallim ‘alâ tal‘atil haqqi bil haqqi, kanzil a‘ẓami, ifâdatika minka ilayka ihâtatan bin-nûril moutalsami. Sallallâhou ‘alayhi wa ‘alâ âlihi salâtan tou‘arrifounâ bihî iyâhou. »

اللّهم صلّ وسلّم على عين الرّحمة الرّبانيّة والياقوتة المتحقّقة الحائطة بمركز الفهوم والمعاني والنور الأكوان المتكوّنة الآدمي صاحب الحقّ الرّبّاني البرق الأسطع بمزون الأرباح المالئة لكلّ متعرّض من البحور والأواني ونورك اللّامع الذي ملأت به كونك الحائط بأمكنة مكاني.

اللّهم صلّ وسلّم على عين الحقّ التي تتجلّى منها عروش حقائق عين المعارف الأقوم صراطك التّامّ الأسقم.

اللّهم صلّ وسلّم على طلعة الحقّ بالحقّ الكنز الأعظم إفاضتك منك إليك إحاطة النّور المطلسّم صلّى الله عليه وعلى آله صلاة تعرّفنا بها إيّاه.

(12 fois)

Enfin dire :

« Innallâha wa malâ’ikatouhou yousallouna ‘alan-nabî. Yâ ayyouhal lazîna âmanou sallou ‘alayhi wa sallimou taslîmâ. Subhâna rabbika rabbil ‘izzati ‘ammâ yaçifoûna wa salâmoun ‘alal moursalîna wal hamdoulillahi rabbil ‘âlamîne. »

إنّ الله وملائكته يصلّون على النبيّ يا أيّها الذين آمنوا صلّوا عليه وسلّموا تسليما، سبحان ربّك ربّ العزّة عمّا يصفون وسلام على المرسلين والحمد لله ربّ العالمين.`},
  {
    id: "hadara",
    title: "La Hadara (Hadaratoul Djouma)",
    content: `

Le zikr communément appelé Hadaratoul Djouma (Hadara) doit être récité le vendredi, entre la prière de Asr et le crépuscule (Maghrib).
Il est recommandé de le faire en groupe, ou seul en cas d’empêchement.

Déroulement de la Hadara

Dire :
A‘oûzou billahi mina chaytânir radjîmi
اعوذ بالله من الشيطان الرجيم

Réciter la formule :
« Astaghfiroullah al-‘azîmal lazî lâ ilâha illâ houwa al-hayyoul qayyoum »
أستغفرُ اللهَ الذي لا إلهَ إلاّ هو الحيُّ القيّوم

(3 fois)

Prier sur le Prophète Mouhammad (PSL) :

« Allahoumma salli ‘ala seyyidinâ Mouhammadine il fâtihi limâ oughliqa, wal khâtimi limâ sabaqa, nâçiril haqqi bil haqqi,
wal hâdi ilâ sirâtikal moustaqîmi, wa ‘alâ âlihi haqqa qadrihi wa miqdârihil ‘azîm. »

اللّهم صلّ على سيّدنا محمّد الفاتح لما أُغلق والخاتم لما سبق ناصر الحقّ بالحقّ والهادي إلى صراطك المستقيم وعلى آله حقّ قدره ومقداره العظيم

(3 fois)

Puis dire :

« Subhâna rabbika rabbil ‘izzati ‘ammâ yaçifoûna, wa salâmoun ‘alal moursalîna, wal hamdoulillahi rabbil ‘âlamîne. »

سبحان ربّك ربّ العزّة عمّا يصفون وسلام على المرسلين والحمد لله ربّ العالمين

Répéter la formule :

« Lâ ilâha illallâhou »
لا إله إلاّ الله

(Pendant un certain temps entre Asr et Maghrib, par exemple 1 heure)

Enfin dire :

« Innallâha wa malâ’ikatouhou yousallouna ‘alan-nabî. Yâ ayyouhal lazîna âmanou sallou ‘alayhi wa sallimou taslîmâ.
Subhâna rabbika rabbil ‘izzati ‘ammâ yaçifoûna, wa salâmoun ‘alal moursalîna, wal hamdoulillahi rabbil ‘âlamîne. »

إنّ الله وملائكته يصلّون على النبيّ يا أيّها الذين آمنوا صلّوا عليه وسلّموا تسليما
سبحان ربّك ربّ العزّة عمّا يصفون وسلام على المرسلين والحمد لله ربّ العالمين

Enfin, réciter la prière de fermeture.`}
];

export const bibliography = [
  {
    id: "1",
    title: "Les Écrits de Cheikh Ahmadou Bamba",
    author: "Collection Officielle",
    theme: "Œuvres Complètes",
    description: "Compilation de tous les écrits authentifiés du fondateur du Mouridisme."
  },
  {
    id: "2",
    title: "Introduction au Soufisme Mouride",
    author: "Serigne Bachir Mbacké",
    theme: "Spiritualité",
    description: "Guide d'introduction aux pratiques et enseignements de la voie mouride."
  },
  {
    id: "3",
    title: "Histoire du Mouridisme",
    author: "Cheikh Anta Babou",
    theme: "Histoire",
    description: "Étude historique approfondie du mouvement mouride de ses origines à nos jours."
  },
  {
    id: "4",
    title: "Commentaire du Massalikoul Jinaan",
    author: "Serigne Sam Mbaye",
    theme: "Exégèse",
    description: "Analyse détaillée et commentaires du célèbre poème spirituel."
  }
];
