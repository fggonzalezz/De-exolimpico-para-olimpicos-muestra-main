import { buildStaticPageMetadata } from '@/lib/seo';
import PruebasSemanalesClient from './ClientPage';

export const metadata = buildStaticPageMetadata('/nacional/PruebasSemanales');

export default function PruebasSemanalesPage() {
  return <PruebasSemanalesClient />;
}