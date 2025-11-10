"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Tipos de datos para las competencias
export interface Competition {
  date: string;
  event: string;
  status?: 'finished' | 'finished-recent' | 'upcoming-next' | 'upcoming';
  highlight?: boolean;
  targetDate?: Date;
  daysLeft?: number | null;
  id?: string; // Agregado para identificar competencias de forma única
}

// Props del componente
interface CompetitionsTableProps {
  competitions: Competition[];
  title?: string;
  showCountdown?: boolean;
  maxItems?: number;
  variant?: 'compact' | 'full';
  showLegend?: boolean;
  footerLink?: {
    href: string;
    text: string;
  };
}

// Componente contador en tiempo real
function Countdown({ targetDate, onExpired }: { targetDate: Date; onExpired?: () => void }) {
  const [timeLeft, setTimeLeft] = useState<{days:number, hours:number, minutes:number, seconds:number}>({days:0, hours:0, minutes:0, seconds:0});
  const [hasExpired, setHasExpired] = useState(false);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (!hasExpired) {
          setHasExpired(true);
          onExpired?.(); // Llamar callback cuando expire
        }
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
      setHasExpired(false); // Reset si vuelve a ser positivo
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate, hasExpired, onExpired]);

  return (
    <span className="text-yellow-700 font-medium text-sm">
      {hasExpired ? '¡Evento finalizado!' : `Faltan ${timeLeft.days} días, ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
    </span>
  );
}

// Componente contador solo de días
function CountdownDays({ targetDate, onExpired }: { targetDate: Date; onExpired?: () => void }) {
  const [days, setDays] = useState<number>(0);
  const [hasExpired, setHasExpired] = useState(false);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setDays(0);
        if (!hasExpired) {
          setHasExpired(true);
          onExpired?.(); // Llamar callback cuando expire
        }
        return;
      }
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDays(days);
      setHasExpired(false); // Reset si vuelve a ser positivo
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 1000); // actualiza cada minuto
    return () => clearInterval(interval);
  }, [targetDate, hasExpired, onExpired]);

  return (
    <span className="block text-sm text-yellow-600 mt-1">
      {hasExpired ? '¡Evento finalizado!' : `Faltan ${days} días`}
    </span>
  );
}

// Función para obtener el badge de estado
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'finished':
      return <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded">Finalizado</span>;
    case 'finished-recent':
      return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Finalizado Reciente</span>;
    case 'upcoming-next':
      return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded">¡Próximo!</span>;
    case 'upcoming':
      return <span className="px-2 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded">Próximamente</span>;
    case 'default':
      return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded">Sin estado</span>;
    default:
      return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded">Sin estado</span>;
  }
};

export default function CompetitionsTable({
  competitions,
  title = "Competencias",
  showCountdown = true,
  maxItems,
  variant = 'full',
  showLegend = false,
  footerLink
}: CompetitionsTableProps) {
  // Estado para manejar los status dinámicos de las competencias
  const [dynamicStatuses, setDynamicStatuses] = useState<Record<string, Competition['status']>>({});

  // Función para manejar cuando una competencia expira
  const handleCompetitionExpired = (competitionId: string) => {
    // Solo cambiar a 'finished' si la competencia originalmente tenía status 'upcoming' o 'upcoming-next'
    // No cambiar competencias que ya están marcadas como 'finished' en los datos estáticos
    setDynamicStatuses(prev => {
      const currentStatus = prev[competitionId];
      if (currentStatus === 'upcoming' || currentStatus === 'upcoming-next' || !currentStatus) {
        return {
          ...prev,
          [competitionId]: 'finished'
        };
      }
      return prev;
    });
  };

  // Función para obtener el status actual (dinámico o estático)
  const getCurrentStatus = (competition: Competition, index: number): Competition['status'] => {
    const id = competition.id || `competition-${index}`;
    const dynamicStatus = dynamicStatuses[id];
    const staticStatus = competition.status;
    const finalStatus = dynamicStatus || staticStatus;

    return finalStatus;
  };

  // Función para ordenar competencias por estado y fecha
  const sortCompetitionsByStatus = (comps: Competition[]) => {
    const statusOrder = {
      'upcoming-next': 1, // "Próximo" tiene prioridad máxima
      'upcoming': 2, // "Próximamente" segundo
      'finished-recent': 3, // "Finalizado Reciente" tercero
      'finished': 4 // "Finalizado" último
    };

    return [...comps].sort((a, b) => {
      const statusA = getCurrentStatus(a, comps.indexOf(a));
      const statusB = getCurrentStatus(b, comps.indexOf(b));

      // Primero ordenar por status según la jerarquía especificada
      const orderA = statusOrder[statusA || 'finished'] || 5;
      const orderB = statusOrder[statusB || 'finished'] || 5;

      if (orderA !== orderB) {
        return orderA - orderB;
      }

      // Dentro del mismo status, ordenar por fecha (más cercana primero para upcoming, más reciente primero para finished)
      if (a.targetDate && b.targetDate) {
        // Para upcoming, más cercana primero; para finished, más reciente primero
        const isUpcomingA = statusA === 'upcoming' || statusA === 'upcoming-next';
        const isUpcomingB = statusB === 'upcoming' || statusB === 'upcoming-next';

        if (isUpcomingA && isUpcomingB) {
          return a.targetDate.getTime() - b.targetDate.getTime(); // más cercana primero
        } else if (!isUpcomingA && !isUpcomingB) {
          return b.targetDate.getTime() - a.targetDate.getTime(); // más reciente primero
        }
      }

      // Si no tienen fecha, mantener orden original
      return 0;
    });
  };

  // Filtrar, ordenar y limitar items si es necesario
  const sortedCompetitions = sortCompetitionsByStatus(competitions);
  const displayedCompetitions = maxItems
    ? sortedCompetitions.slice(0, maxItems)
    : sortedCompetitions;

  // Variante compacta para la página principal
  if (variant === 'compact') {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-inter font-semibold text-center mb-8">
            {title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-sky-600 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left font-medium">Fecha</th>
                      <th className="py-3 px-4 text-left font-medium">Evento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {displayedCompetitions.map((competition, index) => {
                      const currentStatus = getCurrentStatus(competition, index);
                      const competitionId = competition.id || `competition-${index}`;
                      return (
                        <tr key={index} className="hover:bg-sky-50">
                          <td className="py-3 px-4 font-medium">{competition.date}</td>
                          <td className="py-3 px-4">
                            <div className="flex flex-col gap-1">
                              <span>{competition.event}</span>
                              {showCountdown && competition.targetDate && (
                                <CountdownDays
                                  targetDate={competition.targetDate}
                                  onExpired={() => handleCompetitionExpired(competitionId)}
                                />
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {footerLink && (
                <div className="text-center py-4">
                  <Link href={footerLink.href} className="text-sky-600 hover:text-sky-800 font-medium">
                    {footerLink.text} →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante completa para páginas dedicadas
  return (
    <div className="w-full">
      {title && (
        <h1 className="text-3xl md:text-4xl font-inter font-bold text-center mb-8">
          {title}
        </h1>
      )}

      {showLegend && (
        <div className="mb-10 bg-gradient-to-br from-sky-50 to-white p-7 rounded-2xl border border-sky-100 shadow flex flex-col gap-4">
          <h2 className="text-xl font-semibold mb-2 text-sky-800">Leyenda</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">{getStatusBadge('finished')}<span className="text-gray-700">Eventos ya realizados</span></div>
            <div className="flex items-center gap-2">{getStatusBadge('finished-recent')}<span className="text-gray-700">Eventos recientes</span></div>
            <div className="flex items-center gap-2">{getStatusBadge('upcoming-next')}<span className="text-gray-700">Próximo evento</span></div>
            <div className="flex items-center gap-2">{getStatusBadge('upcoming')}<span className="text-gray-700">Eventos futuros</span></div>
          </div>
        </div>
      )}

      <div className="bg-white shadow-lg border-2 border-sky-100 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead className="bg-gradient-to-r from-sky-700 to-sky-500 text-white">
              <tr>
                <th className="py-4 px-4 text-left font-semibold tracking-wide">Fecha</th>
                <th className="py-4 px-4 text-left font-semibold tracking-wide">Evento</th>
                {variant === 'full' && (
                  <th className="py-4 px-4 text-left font-semibold tracking-wide">Estado</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayedCompetitions.map((competition, index) => {
                const currentStatus = getCurrentStatus(competition, index);
                const competitionId = competition.id || `competition-${index}`;
                return (
                  <tr
                    key={index}
                    className={`transition-all duration-200 hover:bg-sky-50/70 ${
                      currentStatus === 'finished' ? 'opacity-60' : ''
                    } ${
                      currentStatus === 'upcoming-next' || competition.highlight ? 'bg-yellow-50/80' : ''
                    }`}
                  >
                    <td className="py-4 px-4 font-semibold whitespace-nowrap">{competition.date}</td>
                    <td className="py-4 px-4">
                      <div className="flex flex-col gap-1">
                        <span>{competition.event}</span>
                        {showCountdown && competition.targetDate && (
                          <Countdown
                            targetDate={competition.targetDate}
                            onExpired={() => handleCompetitionExpired(competitionId)}
                          />
                        )}
                      </div>
                    </td>
                    {variant === 'full' && (
                      <td className="py-4 px-4">
                        {currentStatus ? getStatusBadge(currentStatus) : getStatusBadge('default')}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {footerLink && (
        <div className="mt-10 text-center">
          <Link href={footerLink.href} className="text-sky-600 hover:text-sky-800 font-medium">
            {footerLink.text} →
          </Link>
        </div>
      )}
    </div>
  );
}
