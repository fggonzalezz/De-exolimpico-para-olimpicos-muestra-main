import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-9xl font-bold text-sky-200 mb-4">404</div>
            <h1 className="text-3xl md:text-4xl font-inter font-bold text-gray-900 mb-6">
              Página no encontrada
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
              Parece que te has desviado del camino matemático.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-colors"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
