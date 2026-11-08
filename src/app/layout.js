import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClientWidgets from './components/ClientWidgets';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "ARVIND LAW ASSOCIATES - Legal Chambers India",
  description: "Advocates & Legal Consultants",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  keywords: [
    "family lawyer in Bangalore", "family law advocate Bangalore", "family court lawyer Bangalore", "family advocate Bangalore",
    "mutual divorce lawyer Bangalore", "mutual consent divorce advocate Bangalore", "divorce lawyer Bangalore", "mutual divorce advocate Karnataka",
    "contested divorce lawyer Bangalore", "contested divorce advocate Bangalore", "divorce advocate Bangalore", "divorce case lawyer Bangalore",
    "restitution of conjugal rights lawyer Bangalore", "RCR advocate Bangalore", "restitution of conjugal rights advocate Karnataka",
    "cheque bounce lawyer Bangalore", "cheque bounce advocate Bangalore", "Section 138 lawyer Bangalore", "cheque dishonour advocate Bangalore",
    "property due diligence lawyer Bangalore", "property legal verification Bangalore", "property due diligence advocate Bangalore",
    "property title search lawyer Bangalore", "property title verification Bangalore", "property title advocate Bangalore", "title search advocate Karnataka",
    "property conveyance lawyer Bangalore", "conveyancing lawyer Bangalore", "property transfer advocate Bangalore",
    "property registration lawyer Bangalore", "property registration advocate Bangalore", "property document registration Bangalore",
    "will lawyer Bangalore", "will drafting advocate Bangalore", "will registration lawyer Bangalore", "advocate for will Bangalore",
    "contract lawyer Bangalore", "contract drafting lawyer Bangalore", "agreement drafting advocate Bangalore", "contract review lawyer Bangalore",
    "quashing petition lawyer Karnataka", "High Court quashing advocate Bangalore", "criminal case quashing lawyer Karnataka", "FIR quashing advocate Bangalore", "Writ Petitions",
    "cyber crime lawyer Bangalore", "cyber crime advocate Bangalore", "cyber fraud lawyer Bangalore", "cyber crime legal consultant Bangalore",
    "online fraud lawyer Bangalore", "online financial fraud advocate Bangalore", "UPI fraud lawyer Bangalore", "cyber fraud advocate Bangalore",
    "commercial court lawyer Bangalore", "commercial litigation advocate Bangalore", "commercial dispute lawyer Bangalore", "commercial advocate Bangalore"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" as="image" href="/assets/img/hero-bg.webp" type="image/webp" media="(min-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/assets/img/hero-image-mobile.webp" type="image/webp" media="(max-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/assets/img/hero-image.webp" type="image/webp" media="(min-width: 769px)" fetchPriority="high" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L26V9H564K"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L26V9H564K');
        `}
      </Script>
      <body className="min-h-full flex flex-col bg-background text-on-background font-body-md antialiased" >
        <Navbar />
        <main className="flex-grow" >{children}</main>
        <Footer />
        <ClientWidgets />
      </body>
    </html>
  );
}

