import { Montserrat } from 'next/font/google';
import type { AppProps } from 'next/app';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ["400","500","600","700"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: var(--font-montserrat), sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: serif;
        }
      `}</style>
    </div>
  );
}

export default MyApp; 