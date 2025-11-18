import { Competition } from '@/components/competitions/CompetitionsTable';

// Datos centralizados de todas las competencias 2025
export const allCompetitions: Competition[] = [
  // Eventos próximos (ordenados por fecha más cercana)
  {
    date: "Noviembre 16",
    event: "Cuarta Instancia Olimpíada Nacional Primaria (Final)",
    status: "finished",
    targetDate: new Date('2025-11-16T00:00:00')
  },
  {
    date: "Diciembre 4 al 8",
    event: "32a Olimpíada Rioplatense de Matemática (Buenos Aires, Argentina)",
    status: "upcoming-next",
    targetDate: new Date('2025-12-04T00:00:00')
  },
  {
    date: "Diciembre 18",
    event: "5a Olimpíada OLIMPRI",
    status: "upcoming-next",
    targetDate: new Date('2025-12-18T00:00:00')
  },

  // Otras competencias futuras
  {
    date: "Junio 4 al 9",
    event: "36a Olimpíada Matemática de Países del Conosur (Minas, Uruguay)",
    status: "upcoming",
    highlight: true,
    targetDate: new Date('2025-06-04T00:00:00'),
    id: "olimpiada-conosur-2025"
  },
  // Competencia de prueba con fecha pasada para testing
  {
    date: "Enero 1",
    event: "Competencia de Prueba (Fecha Pasada)",
    status: "upcoming",
    targetDate: new Date('2025-01-01T00:00:00'),
    id: "test-expired-competition"
  },
  {
    date: "Julio 10 al 20",
    event: "66th International Mathematical Olympiad (Sunshine Coast, Australia)",
    status: "upcoming",
    targetDate: new Date('2025-07-10T00:00:00')
  },
  {
    date: "Julio 27",
    event: "Fecha límite Primera Instancia Olimpíada Nacional",
    status: "finished",
    targetDate: new Date('2025-07-27T00:00:00')
  },
  {
    date: "Agosto 17",
    event: "Fecha límite Segunda Instancia Olimpíada Nacional",
    status: "finished",
    targetDate: new Date('2025-08-17T00:00:00')
  },
  {
    date: "Agosto (fecha y sede a confirmar)",
    event: "5a Olimpíada PAGMO",
    status: "upcoming"
  },
  {
    date: "Setiembre 7",
    event: "Fecha límite Tercera Instancia Olimpíada Nacional (Semifinal)",
    status: "finished",
    targetDate: new Date('2025-09-07T00:00:00')
  },
  {
    date: "Setiembre 22 al 29",
    event: "40a Olimpíada Iberoamericana de Matemática (Tarija, Bolivia)",
    status: "finished",
    targetDate: new Date('2025-09-22T00:00:00')
  },
  {
    date: "Octubre",
    event: "Cuarta Instancia Olimpíada Nacional Secundaria (Final) (fecha a confirmar)",
    status: "finished"
  },

  // Eventos ya finalizados (ordenados cronológicamente descendente)
  {
    date: "Mayo 26",
    event: "Cuarta Prueba de Selección Iberoamericana",
    status: "finished"
  },
  {
    date: "Mayo 10",
    event: "Pruebas 31a Olimpíada Iberoamericana Juvenil de Mayo",
    status: "finished"
  },
  {
    date: "Mayo",
    event: "Tercera Prueba de Selección Iberoamericana",
    status: "finished"
  },
  {
    date: "Mayo",
    event: "Segunda Prueba de Selección PAGMO",
    status: "finished"
  },
  {
    date: "Mayo 05",
    event: "Segunda Prueba de Selección Conosur",
    status: "finished"
  },
  {
    date: "Abril",
    event: "Primera Prueba de Selección PAGMO",
    status: "finished"
  },
  {
    date: "Abril 25",
    event: "Primera Prueba de Selección Conosur",
    status: "finished"
  },
  {
    date: "Abril",
    event: "Segunda Prueba de Selección Iberoamericana",
    status: "finished"
  },
  {
    date: "Abril 07",
    event: "Tercera Prueba de Selección IMO",
    status: "finished"
  },
  {
    date: "Marzo 30",
    event: "Torneo Internacional Canguro - Desafío Nacional Canguro",
    status: "finished"
  },
  {
    date: "Marzo",
    event: "Primera Prueba de Selección Iberoamericana",
    status: "finished"
  },
  {
    date: "Marzo 24",
    event: "Segunda Prueba de Selección IMO",
    status: "finished"
  },
  {
    date: "Marzo",
    event: "Primera Prueba de Selección IMO",
    status: "finished"
  },
  {
    date: "Marzo 10",
    event: "Prueba XXXVI APMO",
    status: "finished"
  }
];

// Filtros útiles para diferentes vistas
export const upcomingCompetitions = allCompetitions.filter(
  competition => competition.status?.includes('upcoming') || competition.status === 'upcoming-next'
);

export const finishedCompetitions = allCompetitions.filter(
  competition => competition.status?.includes('finished')
);

// Filtro para competencias realmente futuras (basado en la fecha actual)
export const trulyUpcomingCompetitions = allCompetitions.filter(competition => {
  if (!competition.targetDate) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return competition.targetDate >= today && (competition.status?.includes('upcoming') || competition.status === 'upcoming-next');
});

export const nextSixCompetitions = trulyUpcomingCompetitions.slice(0, 6);

export const featuredCompetition = allCompetitions.find(
  competition => competition.status === 'upcoming-next' || competition.highlight
);

// Función helper para obtener competencias por estado
export function getCompetitionsByStatus(status: Competition['status']) {
  return allCompetitions.filter(competition => competition.status === status);
}

// Función helper para obtener las próximas N competencias
export function getNextCompetitions(count: number = 5) {
  return trulyUpcomingCompetitions.slice(0, count);
}
