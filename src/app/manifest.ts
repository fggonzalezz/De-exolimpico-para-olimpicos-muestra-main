import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Olimpiada Matemática Uruguay',
    short_name: 'Olimpiada Matemática',
    description: 'Com-Partida de Matemática del Uruguay: recursos y entrenamiento para olimpiadas matemáticas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0369A1',
    icons: [
      {
        src: '/images/CPM.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/CPM.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
