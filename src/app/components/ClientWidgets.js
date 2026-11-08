'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ScrollToTop from './ScrollToTop';

const WhatsappWidget = dynamic(() => import('./WhatsappWidget'), {
  loading: () => null,
  ssr: false,
});

export default function ClientWidgets() {
  const [shouldLoadWhatsapp, setShouldLoadWhatsapp] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setShouldLoadWhatsapp(true), { timeout: 2000 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setShouldLoadWhatsapp(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {shouldLoadWhatsapp && <WhatsappWidget />}
      <ScrollToTop />
    </>
  );
}

