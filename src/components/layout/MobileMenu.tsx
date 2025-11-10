"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function MobileMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Menu data - same structure as in Header component
  const menuSections = [
    {
      id: "calendario",
      label: "Calendario 2025",
      items: [
        { title: "Calendario Completo 2025", href: "/calendario-2025" },
        { title: "Próximas Competencias", href: "/proximas-competencias" },
      ]
    },
    {
      id: "equipos",
      label: "Equipos",
      items: [
        { title: "Equipos Uruguayos 2025", href: "/equipos-2025" },
        { title: "Equipo IMO 2025", href: "/equipo-imo-2025" },
        { title: "Resultados", href: "/resultados-olimpiadas" },
      ]
    },
    {
      id: "materiales",
      label: "Materiales",
      items: [
        { title: "Seminarios de Exolímpicos", href: "/seminarios-exolimpicos" },
        { title: "Pruebas Anteriores", href: "/pruebas-anteriores" },
        { title: "Material de Estudio", href: "https://drive.google.com/drive/u/1/folders/18PJVLK11IXBHp_1ddrH8T5itxmDZpSOj" },
      ]
    }
  ];

  // Handle navigation and close the menu
  const handleNavigation = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  // Toggle accordion section
  const handleAccordionChange = (value: string) => {
    setActiveSection(value === activeSection ? null : value);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden relative z-20 p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md hover:bg-gray-100 transition-all"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="overflow-y-auto w-[85vw] sm:w-[350px] p-0 bg-white"
      >
        <div className="bg-sky-600 text-white py-4 px-6 flex justify-between items-center">
          <SheetTitle className="font-inter text-xl text-white m-0">
            Menú
          </SheetTitle>
          <SheetClose className="flex items-center justify-center text-white hover:text-gray-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>

        <nav className="flex flex-col divide-y divide-gray-100">
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center py-3 px-6 hover:bg-gray-50 transition-colors text-left font-inter text-base font-medium"
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </span>
            Inicio
          </button>

          <button
            onClick={() => handleNavigation('/sobre-nosotros')}
            className="flex items-center py-3 px-6 hover:bg-gray-50 transition-colors text-left font-inter text-base font-medium"
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="4"/>
                <path d="M5 21v-2a7 7 0 0 1 14 0v2"/>
              </svg>
            </span>
            Sobre Nosotros
          </button>

          <div className="py-1">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={activeSection || undefined}
              onValueChange={handleAccordionChange}
            >
              {menuSections.map((section) => (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className="border-0"
                >
                  <AccordionTrigger
                    className="flex items-center py-3 px-6 hover:bg-gray-50 transition-colors font-inter text-base font-medium"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">
                        {section.id === "calendario" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                        )}
                        {section.id === "equipos" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        )}
                        {section.id === "materiales" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        )}
                      </span>
                      {section.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-2 px-0">
                    <div className="flex flex-col pl-10">
                      {section.items.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => handleNavigation(item.href)}
                          className="py-2 px-6 hover:bg-gray-50 text-left text-sm text-gray-700 hover:text-sky-600 transition-colors"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <button
            onClick={() => handleNavigation('/contacto')}
            className="flex items-center py-3 px-6 hover:bg-gray-50 transition-colors text-left font-inter text-base font-medium"
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            Contacto
          </button>

          <a 
            href="https://com-partidauruguay.weebly.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center py-3 px-6 mx-4 mt-2 mb-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors text-center font-inter text-base font-medium justify-center"
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </span>
            Sitio Oficial
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
