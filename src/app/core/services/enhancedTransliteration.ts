// enhanced-transliteration.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnhancedTransliterationService {
  private arabicToLatinMap: { [key: string]: string } = {
    // Lettres avec voyelles
    'ا': 'a', 'أ': 'a', 'إ': 'i', 'آ': 'aa', 'ء': "'",
    'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'h',
    'خ': 'kh', 'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z',
    'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't',
    'ظ': 'z', 'ع': 'a', 'غ': 'gh', 'ف': 'f', 'ق': 'q',
    'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h',
    'و': 'w', 'ي': 'y', 'ى': 'a', 'ة': 'h', 'ؤ': 'w',
    'ئ': 'y', 'ّ': '', 'ْ': '', 'ٌ': 'un', 'ٍ': 'in', 'ً': 'an',
    'ُ': 'u', 'ِ': 'i', 'َ': 'a', 'ٰ': 'a',
    
    // Espaces et ponctuation
    ' ': ' ', '.': '.', ',': ',', '؟': '?', '!': '!'
  };

  private commonWords: { [key: string]: string } = {
    'السلام': 'assalam',
    'عليكم': 'alaykum',
    'ورحمة': 'wa rahmat',
    'الله': 'allah',
    'بركة': 'baraka',
    'شكرا': 'shukran',
    'مرحبا': 'marhaba'
  };

  arabicToLatin(arabicText: string): string {
    // Vérifier les mots communs d'abord
    let result = arabicText;
    
    // Remplacer les mots communs
    Object.keys(this.commonWords).forEach(word => {
      const regex = new RegExp(word, 'g');
      result = result.replace(regex, this.commonWords[word]);
    });

    // Translittération caractère par caractère pour le reste
    return result.split('').map(char => 
      this.arabicToLatinMap[char] || char
    ).join('');
  }

  // Version améliorée avec contexte
  smartTransliteration(arabicText: string): string {
    const words = arabicText.split(' ');
    
    return words.map(word => {
      // Gérer les mots communs
      if (this.commonWords[word]) {
        return this.commonWords[word];
      }
      
      // Gérer "al" défini
      if (word.startsWith('ال')) {
        return 'al-' + this.arabicToLatin(word.substring(2));
      }
      
      // Translittération normale
      return this.arabicToLatin(word);
    }).join(' ');
  }
}