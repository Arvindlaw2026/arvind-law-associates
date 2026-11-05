const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arvindlawchamber.com';

/**
 * Next.js App Router dynamic robots.txt generation.
 * Generates robots exclusion standard instructions at /robots.txt
 *
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
