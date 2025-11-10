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
 * Función utilitaria para convertir URLs de Google Docs a formato Google Drive File
 * @param url - La URL original que puede ser de Google Docs o Google Drive
 * @returns URL normalizada en formato Google Drive File
 */
function normalizeGoogleUrl(url: string): string {
  // Si es una URL de Google Docs, convertirla a Google Drive File
  if (url.includes('docs.google.com/document')) {
    // Extraer el ID del documento de la URL
    const docIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (docIdMatch) {
      const docId = docIdMatch[1];
      return `https://drive.google.com/file/d/${docId}/view?usp=sharing`;
    }
  }
  
  // Si ya es una URL de Google Drive, remover parámetros innecesarios
  if (url.includes('drive.google.com/file')) {
    const driveIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (driveIdMatch) {
      const fileId = driveIdMatch[1];
      return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
    }
  }
  
  // Si no es ninguno de los formatos reconocidos, devolver la URL original
  return url;
}

/**
 * Datos de problemas para cada nivel en la Final Nacional (URLs normalizadas automáticamente)
 */
const NIVELES_DATA: Record<string, NivelProblemas> = {
  'IA': {
    nivel: 'IA',
    titulo: 'Final Nacional - Nivel IA',
    descripcion: 'Problemas de la etapa final para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IA-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1W05VUQeI30axKS05tqPjIMVO7Zyovdih/view?usp=sharing"
      },
      {
        key: "nivel-IA-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://drive.google.com/file/d/157EFXh4wJEBaVaU-VWXP_vhkse0htWcK/view?usp=sharing"
      },
      {
        key: "nivel-IA-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://drive.google.com/file/d/140eUw2W9zlXouzTMzvM0z6w7Foxx2dTJ/view?usp=sharing"
      },
      {
        key: "nivel-IA-final-4",
        title: "Final Nacional - Problema 4",
        pdf: "https://drive.google.com/file/d/1eRtFPqGMS7Nm9cEHZHZrtTQp8Uea2zL7/view?usp=sharing"
      },
      {
        key: "nivel-IA-final-5",
        title: "Final Nacional - Problema 5",
        pdf: "https://drive.google.com/file/d/1AZQ3WgvAdh4kzkbMSYqE3S2mFw3B0QyR/view?usp=sharing"
      },
      {
        key: "nivel-IA-final-6",
        title: "Final Nacional - Problema 6",
        pdf: "https://drive.google.com/file/d/1bVycRUgeU94Fg_x0jsKLqBcsXQUsmXMJ/view?usp=sharing"
      }
    ]
  },
  'IB': {
    nivel: 'IB',
    titulo: 'Final Nacional - Nivel IB',
    descripcion: 'Problemas de la etapa final para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IB-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://docs.google.com/document/d/1YEEwYJWKOLNJ_K1Lt6WRlgC6rvKRd2VG/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IB-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://docs.google.com/document/d/17cIR4T9W7QWmW1nYS7B9QAp73ZCUtFT3/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IB-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://docs.google.com/document/d/15WtLMIYMe6YRwoVEeFZrE-PmrIYcuSc3/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IB-final-4",
        title: "Final Nacional - Problema 4",
        pdf: "https://docs.google.com/document/d/1OkkpI6AXq8JNfC5fOfAQp5Djik_Wg1bO/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IB-final-5",
        title: "Final Nacional - Problema 5",
        pdf: "https://drive.google.com/file/d/1BchlP4xyuMEiR6b1EkgDRrE2XsRrVT9v/view?usp=sharing"
      },
      {
        key: "nivel-IB-final-6",
        title: "Final Nacional - Problema 6",
        pdf: "https://drive.google.com/file/d/1aE__OkV1f9sgdexPjmVV9-2c1xAo05kX/view?usp=sharing"
      }
    ]
  },
  'IC': {
    nivel: 'IC',
    titulo: 'Final Nacional - Nivel IC',
    descripcion: 'Problemas de la etapa final para estudiantes de primaria',
    problemas: [
      {
        key: "nivel-IC-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://docs.google.com/document/d/1xfFmuKnSgFyOONyHS64AYzzUezsxxq-i/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IC-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://docs.google.com/document/d/19Kz157hiUukhsFa5fUHV8zS5Tk-UNmRG/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IC-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://docs.google.com/document/d/1iTu4Qs5eIOhFzQz1M3HiuiE8JxaWtzas/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IC-final-4",
        title: "Final Nacional - Problema 4",
        pdf: "https://docs.google.com/document/d/1I06v2nNCjOM_n5Lah6bKZWiHg-JDhew1/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IC-final-5",
        title: "Final Nacional - Problema 5",
        pdf: "https://drive.google.com/file/d/1GARC4HtXh_IscaQqtQRpvWKKRbzeLT0T/view?usp=sharing"
      },
      {
        key: "nivel-IC-final-6",
        title: "Final Nacional - Problema 6",
        pdf: "https://drive.google.com/file/d/1WGU6jxItY8nNiWTS5JwoDADLIUEpQzz-/view?usp=sharing"
      }
    ]
  },
  'II': {
    nivel: 'II',
    titulo: 'Final Nacional - Nivel II',
    descripcion: 'Problemas de la etapa final para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-II-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1I6t69Z4tHG8QjD_tKOM1jAnBUayNIvcM/view?usp=sharing"
      },
      {
        key: "nivel-II-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://docs.google.com/document/d/1OLuf2xZV-vc_pN22u2lhDxc1ecAtKP9o/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-II-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://docs.google.com/document/d/1tLqOpSX-LbDK8a-ZOfOTPyPyM5uefLZe/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-II-final-4",
        title: "Final Nacional - Problema 4",
        pdf: "https://drive.google.com/file/d/1AoH4wvUTSHlq9FYVmrJVIzK3rUWvaPBv/view?usp=sharing"
      },
      {
        key: "nivel-II-final-5",
        title: "Final Nacional - Problema 5",
        pdf: "https://drive.google.com/file/d/1hd-QW1wtBbfcyghkNKvUpbMCgJ4XhIvu/view?usp=sharing"
      },
      {
        key: "nivel-II-final-6",
        title: "Final Nacional - Problema 6",
        pdf: "https://drive.google.com/file/d/1OnUR5n8hinEH521tN0xQMnu3tHFMlhzm/view?usp=sharing"
      }
    ]
  },
  'III': {
    nivel: 'III',
    titulo: 'Final Nacional - Nivel III',
    descripcion: 'Problemas de la etapa final para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-III-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1QQ0eCxAqzZPrvJkxMvSqGUJsz8rW70La/view?usp=sharing"
      },
      {
        key: "nivel-III-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://docs.google.com/document/d/12T2iC6MHs3Jev-PHY4RipaaDx1Lyq5ml/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-III-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://docs.google.com/document/d/18bVCwTQG0f59MSnLOsRNFk3gZMPgro8R/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-III-final-4",
        title: "Final Nacional - Problema 4",
        pdf: "https://docs.google.com/document/d/1RpUvsejz8FwHGZ_ylkZjwIA5g_87bgGG/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-III-final-5",
        title: "Final Nacional - Problema 5",
        pdf: "https://drive.google.com/file/d/1Zzdy04vHFC8m3mtb_CBGanBSRFALOZSl/view?usp=sharing"
      },
      {
        key: "nivel-III-final-6",
        title: "Final Nacional - Problema 6",
        pdf: "https://drive.google.com/file/d/1oaMEhqy8qZssQEPedpuxYbyPAJZd6WbX/view?usp=sharing"
      },
      {
        key: "nivel-III-final-7",
        title: "Final Nacional - Problema 7",
        pdf: "https://drive.google.com/file/d/1M2o0l9fX_0gHO9PsrSmvhHI7mLMOwtRX/view?usp=sharing"
      },
    ]
  },
  'IV': {
    nivel: 'IV',
    titulo: 'Final Nacional - Nivel IV',
    descripcion: 'Problemas de la etapa final para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-IV-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/18qSbV9jxZWa0KriwxmOgzkFIGtuxIzo2/view?usp=sharing"
      },
      {
        key: "nivel-IV-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://docs.google.com/document/d/1ei-5zOjKw1fopUQv8S9krkjYk3xXxhWH/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IV-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://docs.google.com/document/d/1kJe-LXMT00nreuP25TGZS4blZ08ZrDoP/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IV-final-4",
        title: "Final Nacional - Problema 4",
        pdf: "https://docs.google.com/document/d/1VJ9dsslvFEqLwh5-o2whAG3fOSd9Mt2a/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-IV-final-5",
        title: "Final Nacional - Problema 5",
        pdf: "https://drive.google.com/file/d/1kskALYbNuIuuGVj18Il4F-Woj0gkIuP9/view?usp=sharing"
      },
      {
        key: "nivel-IV-final-6",
        title: "Final Nacional - Problema 6",
        pdf: "https://drive.google.com/file/d/10Z7UTIyplPIUiF6Q-UWWtcwOuC_gis7U/view?usp=sharing"
      },
      {
        key: "nivel-IV-final-7",
        title: "Final Nacional - Problema 7",
        pdf: "https://drive.google.com/file/d/113mP5KbUDldF0i7Ef1MfV_O7t3f9wMnp/view?usp=sharing"
      }
    ]
  },
  'V': {
    nivel: 'V',
    titulo: 'Final Nacional - Nivel V',
    descripcion: 'Problemas de la etapa final para estudiantes de secundaria',
    problemas: [
      {
        key: "nivel-V-final-1",
        title: "Final Nacional - Problema 1",
        pdf: "https://drive.google.com/file/d/1fSj-v1hxOG1YwPWN_aJVD1kezO7fqt3E/view?usp=sharing"
      },
      {
        key: "nivel-V-final-2",
        title: "Final Nacional - Problema 2",
        pdf: "https://docs.google.com/document/d/1n2TmJDOjMdOe4MCv8ZIdUbAY8IbsxYdE/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-V-final-3",
        title: "Final Nacional - Problema 3",
        pdf: "https://docs.google.com/document/d/1X640QNA5n2dmWgGJjEU1Ap98FO_g0BuE/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-V-final-4",
        title: "Final Nacional - Problema 4",
        pdf: "https://docs.google.com/document/d/1BDhisdIRO5qUz6wAHBmWxyivTGVnj5FP/edit?usp=sharing&ouid=116522598627338762412&rtpof=true&sd=true"
      },
      {
        key: "nivel-V-final-5",
        title: "Final Nacional - Problema 5",
        pdf: "https://drive.google.com/file/d/1JSZ7Ecb3C3OGOp6Cjcdf2zb-OmofD1v1/view?usp=sharing"
      },
      {
        key: "nivel-V-final-6",
        title: "Final Nacional - Problema 6",
        pdf: "https://drive.google.com/file/d/1-x0dZV1RDSgy8ZPmwmTkPZHiyOxEGDs4/view?usp=sharing"
      },
      {
        key: "nivel-V-final-7",
        title: "Final Nacional - Problema 7",
        pdf: "https://drive.google.com/file/d/1rWAk6EkR96oxj-XoQDycsXRJY1j9W8kW/view?usp=sharing"
      }
    ]
  }
};

/**
 * Exportación final con URLs normalizadas automáticamente
 */
export const NIVELES_FINAL: Record<string, NivelProblemas> = Object.fromEntries(
  Object.entries(NIVELES_DATA).map(([key, nivel]) => [
    key,
    {
      ...nivel,
      problemas: nivel.problemas.map(problema => ({
        ...problema,
        pdf: normalizeGoogleUrl(problema.pdf)
      }))
    }
  ])
); 