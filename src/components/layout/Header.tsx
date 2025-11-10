"use client"
import React, { useEffect, useState } from 'react';
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
      <DropdownMenuTrigger className="font-inter text-base font-medium hover:text-sky-600 flex items-center gap-1">
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item.href}>
            <Link href={item.href} className="w-full">
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
    { title: "Material de Estudio", href: "https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj" },
    { title: "Nacional", href: "/nacional" },
    { title: "Paginas recomendadas", href: "/paginas-recomendadas" },
  ];

  const [logoVisible, setLogoVisible] = useState(false);
  useEffect(() => {
    setLogoVisible(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center">
            <div className={`relative h-14 w-14 sm:h-16 sm:w-16 mr-3 transition-all duration-700 ease-out ${logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              {/* Use an embedded image that matches the logo you provided */}
              <Image src="/images/CPM.png" alt="Logo" fill />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-inter text-base font-medium hover:text-sky-600">
              Inicio
            </Link>
            <NavDropdown label="Sobre Nosotros" items={[
              { title: "Sobre Nosotros", href: "/sobre-nosotros" },
              { title: "Mascota", href: "/mascota" }
            ]} />
            <NavDropdown label="Calendario 2025" items={calendarioItems} />
            <NavDropdown label="Equipos" items={equiposItems} />
            <NavDropdown label="Materiales" items={materialesItems} />
            <Link href="/contacto" className="font-inter text-base font-medium hover:text-sky-600">
              Contacto
            </Link>
            <Link href="https://com-partidauruguay.weebly.com/" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-white font-medium px-5 py-2.5 rounded-full hover:bg-yellow-600 transition-colors">
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
