export interface MenuItem {
  title: string;
  href: string;
}

export interface MenuSection {
  id: string;
  label: string;
  items: MenuItem[];
}

export const calendarioItems: MenuItem[] = [
  { title: "Calendario Completo 2025", href: "/calendario-2025" },
  { title: "Próximas Competencias", href: "/proximas-competencias" },
];

export const equiposItems: MenuItem[] = [
  { title: "Equipos Uruguayos 2025", href: "/equipos-2025" },
  { title: "Equipo IMO 2025", href: "/equipo-imo-2025" },
  { title: "Resultados", href: "/resultados-olimpiadas" },
];

export const materialesItems: MenuItem[] = [
  { title: "Cómo son los Selectivos", href: "/como-son-los-selectivos" },
  { title: "Libro Nacional 2018-2019", href: "/libro-nacional-2018-2019" },
  { title: "Material de Estudio", href: "/material-de-estudio" },
  { title: "Nacional", href: "/nacional" },
  { title: "Paginas recomendadas", href: "/paginas-recomendadas" },
  { title: "Seminarios Ex-Olímpicos", href: "/seminarios-exolimpicos" },
];

export const sobreNosotrosItems: MenuItem[] = [
  { title: "Sobre Nosotros", href: "/sobre-nosotros" },
  { title: "Mascota", href: "/mascota" }
];

export const menuSections: MenuSection[] = [
  {
    id: "sobre-nosotros",
    label: "Sobre Nosotros",
    items: sobreNosotrosItems
  },
  {
    id: "calendario",
    label: "Calendario 2025",
    items: calendarioItems
  },
  {
    id: "equipos",
    label: "Equipos",
    items: equiposItems
  },
  {
    id: "materiales",
    label: "Materiales",
    items: materialesItems
  }
];
