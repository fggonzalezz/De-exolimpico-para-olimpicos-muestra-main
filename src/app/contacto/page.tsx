import { buildStaticPageMetadata } from "@/lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata = buildStaticPageMetadata("/contacto");

export default function ContactPage() {
  return <ContactPageClient />;
}
