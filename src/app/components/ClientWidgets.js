'use client';
import dynamic from 'next/dynamic';

const WhatsappWidget = dynamic(() => import('./WhatsappWidget'), {
  loading: () => null,
  ssr: false,
});

export default function ClientWidgets() {
  return <WhatsappWidget />;
}

