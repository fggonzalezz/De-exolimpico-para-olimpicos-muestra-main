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
  if (url.includes("docs.google.com/document")) {
    // Extraer el ID del documento de la URL
    const docIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (docIdMatch) {
      const docId = docIdMatch[1];
      return `https://drive.google.com/file/d/${docId}/view?usp=sharing`;
    }
  }

  // Si ya es una URL de Google Drive, remover parámetros innecesarios
  if (url.includes("drive.google.com/file")) {
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
  IA: {
    nivel: "IA",
    titulo: "Final Nacional - Nivel IA",
    descripcion: "Problemas de la etapa final para estudiantes de primaria",
    problemas: [
      {
        key: "nivel-IA-final-2017",
        title: "Nivel IA 2017",
        pdf: "https://drive.google.com/file/d/1bVycRUgeU94Fg_x0jsKLqBcsXQUsmXMJ/view",
      },
      {
        key: "nivel-IA-final-2016",
        title: "Nivel IA 2016",
        pdf: "https://drive.google.com/file/d/1AZQ3WgvAdh4kzkbMSYqE3S2mFw3B0QyR/view",
      },
      {
        key: "nivel-IA-final-2013",
        title: "Nivel IA 2013",
        pdf: "https://drive.google.com/file/d/140eUw2W9zlXouzTMzvM0z6w7Foxx2dTJ/view",
      },
      {
        key: "nivel-IA-final-2012",
        title: "Nivel IA 2012",
        pdf: "https://drive.google.com/file/d/157EFXh4wJEBaVaU-VWXP_vhkse0htWcK/view",
      },
      {
        key: "nivel-IA-final-2011",
        title: "Nivel IA 2011",
        pdf: "https://drive.google.com/file/d/1W05VUQeI30axKS05tqPjIMVO7Zyovdih/view",
      },
    ],
  },
  IB: {
    nivel: "IB",
    titulo: "Final Nacional - Nivel IB",
    descripcion: "Problemas de la etapa final para estudiantes de primaria",
    problemas: [
      {
        key: "nivel-IB-final-2017",
        title: "Nivel IB 2017",
        pdf: "https://drive.google.com/file/d/1aE__OkV1f9sgdexPjmVV9-2c1xAo05kX/view",
      },
      {
        key: "nivel-IB-final-2016",
        title: "Nivel IB 2016",
        pdf: "https://drive.google.com/file/d/1BchlP4xyuMEiR6b1EkgDRrE2XsRrVT9v/view",
      },
      {
        key: "nivel-IB-final-2015",
        title: "Nivel IB 2015",
        pdf: "https://drive.google.com/file/d/1OkkpI6AXq8JNfC5fOfAQp5Djik_Wg1bO/view",
      },
      {
        key: "nivel-IB-final-2013",
        title: "Nivel IB 2013",
        pdf: "https://drive.google.com/file/d/15WtLMIYMe6YRwoVEeFZrE-PmrIYcuSc3/view",
      },
      {
        key: "nivel-IB-final-2012",
        title: "Nivel IB 2012",
        pdf: "https://drive.google.com/file/d/17cIR4T9W7QWmW1nYS7B9QAp73ZCUtFT3/view",
      },
      {
        key: "nivel-IB-final-2011",
        title: "Nivel IB 2011",
        pdf: "https://drive.google.com/file/d/1YEEwYJWKOLNJ_K1Lt6WRlgC6rvKRd2VG/view",
      },
    ],
  },
  IC: {
    nivel: "IC",
    titulo: "Final Nacional - Nivel IC",
    descripcion: "Problemas de la etapa final para estudiantes de primaria",
    problemas: [
      {
        key: "nivel-IC-final-2017",
        title: "Nivel IC 2017",
        pdf: "https://drive.google.com/file/d/1WGU6jxItY8nNiWTS5JwoDADLIUEpQzz-/view",
      },
      {
        key: "nivel-IC-final-2016",
        title: "Nivel IC 2016",
        pdf: "https://drive.google.com/file/d/1GARC4HtXh_IscaQqtQRpvWKKRbzeLT0T/view",
      },
      {
        key: "nivel-IC-final-2015",
        title: "Nivel IC 2015",
        pdf: "https://drive.google.com/file/d/1I06v2nNCjOM_n5Lah6bKZWiHg-JDhew1/view",
      },
      {
        key: "nivel-IC-final-2013",
        title: "Nivel IC 2013",
        pdf: "https://drive.google.com/file/d/1iTu4Qs5eIOhFzQz1M3HiuiE8JxaWtzas/view",
      },
      {
        key: "nivel-IC-final-2012",
        title: "Nivel IC 2012",
        pdf: "https://drive.google.com/file/d/19Kz157hiUukhsFa5fUHV8zS5Tk-UNmRG/view",
      },
      {
        key: "nivel-IC-final-2011",
        title: "Nivel IC 2011",
        pdf: "https://drive.google.com/file/d/1xfFmuKnSgFyOONyHS64AYzzUezsxxq-i/view",
      },
    ],
  },
  II: {
    nivel: "II",
    titulo: "Final Nacional - Nivel II",
    descripcion: "Problemas de la etapa final para estudiantes de secundaria",
    problemas: [
      {
        key: "nivel-II-final-2017",
        title: "Nivel II 2017",
        pdf: "https://drive.google.com/file/d/1OnUR5n8hinEH521tN0xQMnu3tHFMlhzm/view",
      },
      {
        key: "nivel-II-final-2016",
        title: "Nivel II 2016",
        pdf: "https://drive.google.com/file/d/1hd-QW1wtBbfcyghkNKvUpbMCgJ4XhIvu/view",
      },
      {
        key: "nivel-II-final-2015",
        title: "Nivel II 2015",
        pdf: "https://drive.google.com/file/d/1AoH4wvUTSHlq9FYVmrJVIzK3rUWvaPBv/view",
      },
      {
        key: "nivel-II-final-2013",
        title: "Nivel II 2013",
        pdf: "https://drive.google.com/file/d/1tLqOpSX-LbDK8a-ZOfOTPyPyM5uefLZe/view",
      },
      {
        key: "nivel-II-final-2012",
        title: "Nivel II 2012",
        pdf: "https://drive.google.com/file/d/1OLuf2xZV-vc_pN22u2lhDxc1ecAtKP9o/view",
      },
      {
        key: "nivel-II-final-2011",
        title: "Nivel II 2011",
        pdf: "https://drive.google.com/file/d/1I6t69Z4tHG8QjD_tKOM1jAnBUayNIvcM/view",
      },
    ],
  },
  III: {
    nivel: "III",
    titulo: "Final Nacional - Nivel III",
    descripcion: "Problemas de la etapa final para estudiantes de secundaria",
    problemas: [
      {
        key: "nivel-III-final-2017",
        title: "Nivel III 2017",
        pdf: "https://drive.google.com/file/d/1M2o0l9fX_0gHO9PsrSmvhHI7mLMOwtRX/view",
      },
      {
        key: "nivel-III-final-2016",
        title: "Nivel III 2016",
        pdf: "https://drive.google.com/file/d/1oaMEhqy8qZssQEPedpuxYbyPAJZd6WbX/view",
      },
      {
        key: "nivel-III-final-2015",
        title: "Nivel III 2015",
        pdf: "https://drive.google.com/file/d/1Zzdy04vHFC8m3mtb_CBGanBSRFALOZSl/view",
      },
      {
        key: "nivel-III-final-2014",
        title: "Nivel III 2014",
        pdf: "https://drive.google.com/file/d/1RpUvsejz8FwHGZ_ylkZjwIA5g_87bgGG/view",
      },
      {
        key: "nivel-III-final-2013",
        title: "Nivel III 2013",
        pdf: "https://drive.google.com/file/d/18bVCwTQG0f59MSnLOsRNFk3gZMPgro8R/view",
      },
      {
        key: "nivel-III-final-2012",
        title: "Nivel III 2012",
        pdf: "https://drive.google.com/file/d/12T2iC6MHs3Jev-PHY4RipaaDx1Lyq5ml/view",
      },
      {
        key: "nivel-III-final-2011",
        title: "Nivel III 2011",
        pdf: "https://drive.google.com/file/d/1QQ0eCxAqzZPrvJkxMvSqGUJsz8rW70La/view",
      },
    ],
  },
  IV: {
    nivel: "IV",
    titulo: "Final Nacional - Nivel IV",
    descripcion: "Problemas de la etapa final para estudiantes de secundaria",
    problemas: [
      {
        key: "nivel-IV-final-2017",
        title: "Nivel IV 2017",
        pdf: "https://drive.google.com/file/d/113mP5KbUDldF0i7Ef1MfV_O7t3f9wMnp/view",
      },
      {
        key: "nivel-IV-final-2016",
        title: "Nivel IV 2016",
        pdf: "https://drive.google.com/file/d/10Z7UTIyplPIUiF6Q-UWWtcwOuC_gis7U/view",
      },
      {
        key: "nivel-IV-final-2015",
        title: "Nivel IV 2015",
        pdf: "https://drive.google.com/file/d/1kskALYbNuIuuGVj18Il4F-Woj0gkIuP9/view",
      },
      {
        key: "nivel-IV-final-2014",
        title: "Nivel IV 2014",
        pdf: "https://drive.google.com/file/d/1VJ9dsslvFEqLwh5-o2whAG3fOSd9Mt2a/view",
      },
      {
        key: "nivel-IV-final-2013",
        title: "Nivel IV 2013",
        pdf: "https://drive.google.com/file/d/1kJe-LXMT00nreuP25TGZS4blZ08ZrDoP/view",
      },
      {
        key: "nivel-IV-final-2012",
        title: "Nivel IV 2012",
        pdf: "https://drive.google.com/file/d/1ei-5zOjKw1fopUQv8S9krkjYk3xXxhWH/view",
      },
      {
        key: "nivel-IV-final-2011",
        title: "Nivel IV 2011",
        pdf: "https://drive.google.com/file/d/18qSbV9jxZWa0KriwxmOgzkFIGtuxIzo2/view",
      },
    ],
  },
  V: {
    nivel: "V",
    titulo: "Final Nacional - Nivel V",
    descripcion: "Problemas de la etapa final para estudiantes de secundaria",
    problemas: [
      {
        key: "nivel-V-final-2017",
        title: "Nivel V 2017",
        pdf: "https://drive.google.com/file/d/1rWAk6EkR96oxj-XoQDycsXRJY1j9W8kW/view",
      },
      {
        key: "nivel-V-final-2016",
        title: "Nivel V 2016",
        pdf: "https://drive.google.com/file/d/1-x0dZV1RDSgy8ZPmwmTkPZHiyOxEGDs4/view",
      },
      {
        key: "nivel-V-final-2015",
        title: "Nivel V 2015",
        pdf: "https://drive.google.com/file/d/1JSZ7Ecb3C3OGOp6Cjcdf2zb-OmofD1v1/view",
      },
      {
        key: "nivel-V-final-2014",
        title: "Nivel V 2014",
        pdf: "https://drive.google.com/file/d/1BDhisdIRO5qUz6wAHBmWxyivTGVnj5FP/view",
      },
      {
        key: "nivel-V-final-2013",
        title: "Nivel V 2013",
        pdf: "https://drive.google.com/file/d/1X640QNA5n2dmWgGJjEU1Ap98FO_g0BuE/view",
      },
      {
        key: "nivel-V-final-2012",
        title: "Nivel V 2012",
        pdf: "https://drive.google.com/file/d/1n2TmJDOjMdOe4MCv8ZIdUbAY8IbsxYdE/view",
      },
      {
        key: "nivel-V-final-2011",
        title: "Nivel V 2011",
        pdf: "https://drive.google.com/file/d/1fSj-v1hxOG1YwPWN_aJVD1kezO7fqt3E/view",
      },
    ],
  },
};

/**
 * Exportación final con URLs normalizadas automáticamente
 */
export const NIVELES_FINAL: Record<string, NivelProblemas> = Object.fromEntries(
  Object.entries(NIVELES_DATA).map(([key, nivel]) => [
    key,
    {
      ...nivel,
      problemas: nivel.problemas.map((problema) => ({
        ...problema,
        pdf: normalizeGoogleUrl(problema.pdf),
      })),
    },
  ]),
);
