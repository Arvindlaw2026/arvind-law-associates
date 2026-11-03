'use client';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const isDev = process.env.NODE_ENV === 'development';

export default function WhatsappWidget() {
  return (
    <FloatingWhatsApp
      accountName="Arvind Law Associates"
      phoneNumber="+919632196595"
      avatar="/favicon.ico"
      statusMessage="Advocates & Legal Consultants"
      chatMessage={`Hi there! 👋\n\nWelcome to Arvind Law Associates. How can we assist you today?\n\nWhether you need legal advice on family law, property matters, cheque bounce cases, or any other legal issue — we're here to help! ⚖️\n\nFeel free to ask us anything! 😊`}
      placeholder="Type a message..."
      notification={!isDev}
      notificationSound={!isDev}
      allowClickAway={false}
      allowEsc={true}
    />
  );
}

