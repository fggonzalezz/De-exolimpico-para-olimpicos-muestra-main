import { buildStaticPageMetadata } from "@/lib/seo";
import MascotaPageClient from "./MascotaPageClient";

export const metadata = buildStaticPageMetadata("/mascota");

export default function MascotaPage() {
  return <MascotaPageClient />;
}
