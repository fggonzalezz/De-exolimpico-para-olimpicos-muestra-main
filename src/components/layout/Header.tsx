"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import MobileMenu from './MobileMenu';

// Component for all dropdown menus
const NavDropdown = ({
  label,
  items
}: {
  label: string;
  items: { title: string; href: string }[]
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-inter text-base font-medium text-gray-900 dark:text-white hover:text-sky-600 flex items-center gap-1 outline-none focus:outline-none">
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href}>
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Header component
export default function Header() {
  // Dropdown menu data
  const calendarioItems = [
    { title: "Calendario Completo 2025", href: "/calendario-2025" },
    { title: "Próximas Competencias", href: "/proximas-competencias" },
  ];

  const equiposItems = [
    { title: "Equipos Uruguayos 2025", href: "/equipos-2025" },
    { title: "Equipo IMO 2025", href: "/equipo-imo-2025" },
    { title: "Resultados", href: "/resultados-olimpiadas" },
  ];

  const materialesItems = [
    { title: "Cómo son los Selectivos", href: "/como-son-los-selectivos" },
    { title: "Libro Nacional 2018-2019", href: "/libro-nacional-2018-2019" },
    { title: "Material de Estudio", href: "/material-de-estudio" },
    { title: "Nacional", href: "/nacional" },
    { title: "Paginas recomendadas", href: "/paginas-recomendadas" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 mr-3 transition-transform duration-500 ease-out bg-white dark:bg-white rounded-full p-2 shadow-md ring-2 ring-gray-100 dark:ring-gray-200">
              <Image
                src="/images/CPM.png"
                alt="Com-Partida de Matemática del Uruguay"
                fill
                priority
                sizes="(max-width: 768px) 56px, 64px"
                className="object-contain p-0.5"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-inter text-base font-medium text-gray-900 dark:text-white hover:text-sky-600">
              Inicio
            </Link>
            <NavDropdown label="Sobre Nosotros" items={[
              { title: "Sobre Nosotros", href: "/sobre-nosotros" },
              { title: "Mascota", href: "/mascota" }
            ]} />
            <NavDropdown label="Calendario 2025" items={calendarioItems} />
            <NavDropdown label="Equipos" items={equiposItems} />
            <NavDropdown label="Materiales" items={materialesItems} />
            <Link href="/contacto" className="font-inter text-base font-medium text-gray-900 dark:text-white hover:text-sky-600">
              Contacto
            </Link>
            <Link
              href="https://com-partidauruguay.weebly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-white font-medium px-5 py-2.5 rounded-full hover:bg-yellow-600 transition-colors"
            >
              Sitio Oficial
            </Link>
          </nav>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
