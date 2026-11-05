'use client';
import dynamic from 'next/dynamic';
import ScrollToTop from './ScrollToTop';

const WhatsappWidget = dynamic(() => import('./WhatsappWidget'), {
  loading: () => null,
  ssr: false,
});

export default function ClientWidgets() {
  return (
    <>
      <WhatsappWidget />
      <ScrollToTop />
    </>
  );
}

