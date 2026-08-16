export interface XassidaInterface {
    id: number
    wording: string
    wordingArabe: string
    description: string
    fichier: string
    contenues: string
    ecrivain: {
        id: number;
        nom_complet: string;
        image: string;
    };
}
export interface Bayt {
  awwal: string;   // شطر أول
  thani: string;   // شطر ثاني
}

export interface QasidaMeta {
  diwan?:   string;
  qafiya?:  string;
  madih_li?: string;
}

export interface Ecrivain {
    id:number
  nom_complet: string;
  image:       string;
}

export interface InterfaceXassida {
  id:           number;
  wording:      string;
  wordingArabe?: string;
  contenues?:   string;   // texte brut — sera parsé
  fichier?:     string;   // URL PDF
  audio?:       string;   // URL audio
  ecrivain:     Ecrivain;
  meta?:        QasidaMeta;
}