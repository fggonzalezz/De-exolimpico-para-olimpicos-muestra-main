import { describe, it, expect } from 'vitest';
import { 
  canonicalUrl, 
  buildPageMetadata, 
  getStaticSeoEntry,
  SITE_URL 
} from '@/lib/seo';

describe('SEO Utils', () => {
  describe('canonicalUrl', () => {
    it('returns SITE_URL for root path', () => {
      expect(canonicalUrl('/')).toBe(SITE_URL);
    });

    it('returns correct URL for nested paths', () => {
      expect(canonicalUrl('/sobre-nosotros')).toBe(`${SITE_URL}/sobre-nosotros`);
    });

    it('handles paths without leading slash', () => {
      expect(canonicalUrl('contacto')).toBe(`${SITE_URL}/contacto`);
    });
  });

  describe('getStaticSeoEntry', () => {
    it('returns entry for existing path', () => {
      const entry = getStaticSeoEntry('/');
      expect(entry).toBeDefined();
      expect(entry?.path).toBe('/');
    });

    it('returns undefined for non-existing path', () => {
      const entry = getStaticSeoEntry('/non-existing-path');
      expect(entry).toBeUndefined();
    });
  });

  describe('buildPageMetadata', () => {
    it('builds metadata with all required fields', () => {
      const metadata = buildPageMetadata({
        path: '/test',
        title: 'Test Page',
        description: 'Test description',
      });

      expect(metadata.title).toBe('Test Page');
      expect(metadata.description).toBe('Test description');
      expect(metadata.openGraph).toBeDefined();
      expect(metadata.twitter).toBeDefined();
    });

    it('includes canonical URL in alternates', () => {
      const metadata = buildPageMetadata({
        path: '/contacto',
        title: 'Contacto',
        description: 'Página de contacto',
      });

      expect(metadata.alternates?.canonical).toBe(`${SITE_URL}/contacto`);
    });

    it('merges custom keywords with default keywords', () => {
      const metadata = buildPageMetadata({
        path: '/test',
        title: 'Test',
        description: 'Test',
        keywords: ['custom keyword'],
      });

      expect(metadata.keywords).toContain('custom keyword');
      expect(metadata.keywords).toContain('olimpiada matemática uruguay');
    });
  });
});
