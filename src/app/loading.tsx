import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin mb-4"></div>
          <p className="text-sky-700 font-medium animate-pulse">Cargando...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
