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
        key: "nivel-IA-2015",
        title: "Nivel IA 2015",
        pdf: "https://drive.google.com/file/d/1u5zPzz_4fkatcuRfxi41baTXwXdR8ayq/view",
      },
      {
        key: "nivel-IA-2016",
        title: "Nivel IA 2016",
        pdf: "https://drive.google.com/file/d/1u58vLr34fFF_Wc8Bng_734GPMQnRExdM/view",
      },
      {
        key: "nivel-IA-2018",
        title: "Nivel IA 2018",
        pdf: "https://drive.google.com/file/d/1vMSFa-aIXstvMDI_cHvpV3_6jzcXzJ9O/view",
      }
    ]
  },
  'IB': {
    nivel: 'IB',
    titulo: 'Primera Instancia - Nivel IB',
    descripcion: 'Problemas para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IB-2015",
        title: "Nivel IB 2015",
        pdf: "https://drive.google.com/file/d/1TCFPRfI6EpKiMeC1VZnRtCYTsVcWFKpN/view",
      },
      {
        key: "nivel-IB-2016",
        title: "Nivel IB 2016",
        pdf: "https://drive.google.com/file/d/1klN3H96rxwII-vuBja48L8L0zs3Vu4db/view",
      },
      {
        key: "nivel-IB-2018",
        title: "Nivel IB 2018",
        pdf: "https://drive.google.com/file/d/1koAJ3aAuCID2tJafyNMPWaJuO4rwB5IX/view",
      }
    ]
  },
  'IC': {
    nivel: 'IC',
    titulo: 'Primera Instancia - Nivel IC',
    descripcion: 'Problemas para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IC-2015",
        title: "Nivel IC 2015",
        pdf: "https://drive.google.com/file/d/10sAA0gmwJAgE0zI15Nzof5ZiHHqStshS/view",
      },
      {
        key: "nivel-IC-2016",
        title: "Nivel IC 2016",
        pdf: "https://drive.google.com/file/d/1CBW70NBXFBUO5rK-fUXos02Cyic_6Bb-/view",
      },
      {
        key: "nivel-IC-2018",
        title: "Nivel IC 2018",
        pdf: "https://drive.google.com/file/d/1COh5UAIP189f-_aZngk9m1Ru85AbomO1/view",
      }
    ]
  },
  'II': {
    nivel: 'II',
    titulo: 'Primera Instancia - Nivel II',
    descripcion: 'Problemas para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-II-2015",
        title: "Nivel II 2015",
        pdf: "https://drive.google.com/file/d/1hBWcKF7XQE7kwD7QlkrV4V_Xy8j7il-0/view",
      },
      {
        key: "nivel-II-2016",
        title: "Nivel II 2016",
        pdf: "https://drive.google.com/file/d/1UI1Ik0hEnFaFWvHtJkZr4y2TRX5Gh9V2/view",
      },
      {
        key: "nivel-II-2018",
        title: "Nivel II 2018",
        pdf: "https://drive.google.com/file/d/1eSak6jMl4LUQcYldbJuMdISiRh_h9vRK/view",
      }
    ]
  },
  'III': {
    nivel: 'III',
    titulo: 'Primera Instancia - Nivel III',
    descripcion: 'Problemas para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-III-2018",
        title: "Nivel III 2018",
        pdf: "https://drive.google.com/file/d/1RQ7bmeq49Gui3psC4M4bAfEgjs7v10QP/view",
      },
      {
        key: "nivel-III-2016",
        title: "Nivel III 2016",
        pdf: "https://drive.google.com/file/d/16rXfa6d8U316wLMqIE89PK1B90TfICaz/view",
      },
      {
        key: "nivel-III-2015",
        title: "Nivel III 2015",
        pdf: "https://drive.google.com/file/d/1RQ7bmeq49Gui3psC4M4bAfEgjs7v10QP/view",
      }
    ]
  },
  'IV': {
    nivel: 'IV',
    titulo: 'Primera Instancia - Nivel IV',
    descripcion: 'Problemas para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-IV-2015",
        title: "Nivel IV 2015",
        pdf: "https://drive.google.com/file/d/1MbCaxya88CpeSKfLgKAY2FFTB-5NK-7q/view",
      },
      {
        key: "nivel-IV-2016",
        title: "Nivel IV 2016",
        pdf: "https://drive.google.com/file/d/1YENlbWxp8FuOYpoZkoDVqR8Rned965E8/view",
      },
      {
        key: "nivel-IV-2018",
        title: "Nivel IV 2018",
        pdf: "https://drive.google.com/file/d/11VaTqorMr9JvZhHS9gCUOqVHAayXLp_H/view",
      }
    ]
  },
  'V': {
    nivel: 'V',
    titulo: 'Primera Instancia - Nivel V',
    descripcion: 'Problemas para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-V-2015",
        title: "Nivel V 2015",
        pdf: "https://drive.google.com/file/d/1tO3L6yYTUrqCYhK0kixdjggypQtrVrAI/view",
      },
      {
        key: "nivel-V-2016",
        title: "Nivel V 2016",
        pdf: "https://drive.google.com/file/d/16TnsKNHDqKuO0_YdIz70u181EImrDs2R/view",
      },
      {
        key: "nivel-V-2018",
        title: "Nivel V 2018",
        pdf: "https://drive.google.com/file/d/10idZETzxVC3ol0sJDHMvzhjMfS2Sb2uH/view",
      }
    ]
  }
}; 