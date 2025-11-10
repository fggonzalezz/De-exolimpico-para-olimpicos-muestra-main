/**
 * Tipo que define la estructura de un problema de olimpiada
 */
export interface Problema {
  key: string;
  title: string;
  pdf: string;
}

/**
 * Tipo que define la estructura de un nivel con sus problemas
 */
export interface NivelProblemas {
  nivel: string;
  titulo: string;
  descripcion: string;
  problemas: Problema[];
}

/**
 * Datos de problemas para cada nivel en la Primera Instancia
 */
export const NIVELES_PRIMERA: Record<string, NivelProblemas> = {
  'IA': {
    nivel: 'IA',
    titulo: 'Primera Instancia - Nivel IA',
    descripcion: 'Problemas para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IA-1",
        title: "Nivel IA - Problema 1",
        pdf: "https://drive.google.com/file/d/1u5zPzz_4fkatcuRfxi41baTXwXdR8ayq/view?usp=sharing",
      },
      {
        key: "nivel-IA-2",
        title: "Nivel IA - Problema 2",
        pdf: "https://drive.google.com/file/d/1u58vLr34fFF_Wc8Bng_734GPMQnRExdM/view?usp=sharing",
      },
      {
        key: "nivel-IA-3",
        title: "Nivel IA - Problema 3",
        pdf: "https://drive.google.com/file/d/1vMSFa-aIXstvMDI_cHvpV3_6jzcXzJ9O/view?usp=sharing",
      }
    ]
  },
  'IB': {
    nivel: 'IB',
    titulo: 'Primera Instancia - Nivel IB',
    descripcion: 'Problemas para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IB-1",
        title: "Nivel IB - Problema 1",
        pdf: "https://drive.google.com/file/d/1TCFPRfI6EpKiMeC1VZnRtCYTsVcWFKpN/view?usp=sharing",
      },
      {
        key: "nivel-IB-2",
        title: "Nivel IB - Problema 2",
        pdf: "https://drive.google.com/file/d/1klN3H96rxwII-vuBja48L8L0zs3Vu4db/view?usp=sharing",
      },
      {
        key: "nivel-IB-3",
        title: "Nivel IB - Problema 3",
        pdf: "https://drive.google.com/file/d/1koAJ3aAuCID2tJafyNMPWaJuO4rwB5IX/view?usp=sharing",
      }
    ]
  },
  'IC': {
    nivel: 'IC',
    titulo: 'Primera Instancia - Nivel IC',
    descripcion: 'Problemas para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IC-1",
        title: "Nivel IC - Problema 1",
        pdf: "https://drive.google.com/file/d/10sAA0gmwJAgE0zI15Nzof5ZiHHqStshS/view?usp=sharing",
      },
      {
        key: "nivel-IC-2",
        title: "Nivel IC - Problema 2",
        pdf: "https://drive.google.com/file/d/1CBW70NBXFBUO5rK-fUXos02Cyic_6Bb-/view?usp=sharing",
      },
      {
        key: "nivel-IC-3",
        title: "Nivel IC - Problema 3",
        pdf: "https://drive.google.com/file/d/1COh5UAIP189f-_aZngk9m1Ru85AbomO1/view?usp=sharing",
      }
    ]
  },
  'II': {
    nivel: 'II',
    titulo: 'Primera Instancia - Nivel II',
    descripcion: 'Problemas para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-II-1",
        title: "Nivel II - Problema 1",
        pdf: "https://drive.google.com/file/d/1hBWcKF7XQE7kwD7QlkrV4V_Xy8j7il-0/view?usp=sharing",
      },
      {
        key: "nivel-II-2",
        title: "Nivel II - Problema 2",
        pdf: "https://drive.google.com/file/d/1UI1Ik0hEnFaFWvHtJkZr4y2TRX5Gh9V2/view?usp=sharing",
      },
      {
        key: "nivel-II-3",
        title: "Nivel II - Problema 3",
        pdf: "https://drive.google.com/file/d/1eSak6jMl4LUQcYldbJuMdISiRh_h9vRK/view?usp=sharing",
      }
    ]
  },
  'III': {
    nivel: 'III',
    titulo: 'Primera Instancia - Nivel III',
    descripcion: 'Problemas para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-III-1",
        title: "Nivel III - Problema 1",
        pdf: "https://drive.google.com/file/d/1RQ7bmeq49Gui3psC4M4bAfEgjs7v10QP/view?usp=sharing",
      },
      {
        key: "nivel-III-2",
        title: "Nivel III - Problema 2",
        pdf: "https://drive.google.com/file/d/16rXfa6d8U316wLMqIE89PK1B90TfICaz/view?usp=sharing",
      },
      {
        key: "nivel-III-3",
        title: "Nivel III - Problema 3",
        pdf: "https://drive.google.com/file/d/1wJzwWXFDflIifUUgd38aQtKSj4JH-BBD/view?usp=sharing",
      }
    ]
  },
  'IV': {
    nivel: 'IV',
    titulo: 'Primera Instancia - Nivel IV',
    descripcion: 'Problemas para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-IV-1",
        title: "Nivel IV - Problema 1",
        pdf: "https://drive.google.com/file/d/1MbCaxya88CpeSKfLgKAY2FFTB-5NK-7q/view?usp=sharing",
      },
      {
        key: "nivel-IV-2",
        title: "Nivel IV - Problema 2",
        pdf: "https://drive.google.com/file/d/1YENlbWxp8FuOYpoZkoDVqR8Rned965E8/view?usp=sharing",
      },
      {
        key: "nivel-IV-3",
        title: "Nivel IV - Problema 3",
        pdf: "https://drive.google.com/file/d/11VaTqorMr9JvZhHS9gCUOqVHAayXLp_H/view?usp=sharing",
      }
    ]
  },
  'V': {
    nivel: 'V',
    titulo: 'Primera Instancia - Nivel V',
    descripcion: 'Problemas para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-V-1",
        title: "Nivel V - Problema 1",
        pdf: "https://drive.google.com/file/d/1tO3L6yYTUrqCYhK0kixdjggypQtrVrAI/view?usp=sharing",
      },
      {
        key: "nivel-V-2",
        title: "Nivel V - Problema 2",
        pdf: "https://drive.google.com/file/d/16TnsKNHDqKuO0_YdIz70u181EImrDs2R/view?usp=sharing",
      },
      {
        key: "nivel-V-3",
        title: "Nivel V - Problema 3",
        pdf: "https://drive.google.com/file/d/10idZETzxVC3ol0sJDHMvzhjMfS2Sb2uH/view?usp=sharing",
      }
    ]
  }
}; 