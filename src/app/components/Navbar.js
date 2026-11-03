'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-primary text-on-primary text-sm py-1 px-gutter flex justify-between items-center hidden md:flex" >
        <div className="flex gap-6 max-w-container-max mx-auto w-full" >
          <span className="flex items-center gap-2" ><span className="material-symbols-outlined text-sm"  data-icon="call">call</span> 096321 96595</span>
          <span className="flex items-center gap-2" ><span className="material-symbols-outlined text-sm"  data-icon="mail">mail</span> info@arvindlawassociates.com</span>
          <span className="flex items-center gap-2 ml-auto" ><span className="material-symbols-outlined text-sm"  data-icon="location_on">location_on</span> Bengaluru, Karnataka, India</span>
        </div>
      </div>
      
      <header className="fixed top-0 md:top-8 w-full z-50 bg-surface border-b border-outline-variant/20 shadow-sm" >
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto" >
          <Link className="flex items-center gap-3" href="/" >
            <img src="/assets/img/LOGO_IMAGE_1.webp" alt="Arvind Law Associates Logo" className="w-12 h-12 object-contain rounded-md border border-outline-variant/30 bg-surface shadow-sm" />
            <div className="flex flex-col" >
              <div className="font-headline-sm text-headline-sm text-primary uppercase tracking-tighter leading-none mb-1" >
                ARVIND LAW ASSOCIATES
              </div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant" >ADVOCATES &amp; LEGAL CONSULTANTS</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 relative" >
            <Link 
              className={`font-label-caps text-label-caps pb-1 uppercase transition-colors border-b-2 ${pathname === '/' ? 'text-primary border-tertiary-fixed-dim' : 'text-on-surface-variant border-transparent hover:text-primary'}`} 
              href="/"
            >
              Home
            </Link>
            <Link 
              className={`font-label-caps text-label-caps pb-1 uppercase transition-colors border-b-2 ${pathname === '/about-us' ? 'text-primary border-tertiary-fixed-dim' : 'text-on-surface-variant border-transparent hover:text-primary'}`} 
              href="/about-us"
            >
              About Us
            </Link>
            
            <div className="relative" 
              
              onMouseEnter={() => setIsPracticeAreasOpen(true)}
              onMouseLeave={() => setIsPracticeAreasOpen(false)}
            >
              <button 
                className={`font-label-caps text-label-caps uppercase flex items-center gap-1 focus:outline-none pb-1 transition-colors border-b-2 ${pathname === '/services' || pathname.startsWith('/services') ? 'text-primary border-tertiary-fixed-dim' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
                onClick={() => setIsPracticeAreasOpen(!isPracticeAreasOpen)}
              >
                Practice Areas <span className="material-symbols-outlined text-[16px]"  data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
              </button>
              
              {/* Dropdown Menu */}
              {isPracticeAreasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-surface shadow-lg border border-outline-variant/20 rounded flex flex-col z-50" >
                  <div className="absolute -top-2 left-0 w-full h-2" ></div>
                  <Link className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant/10" href="/services/family-law"  onClick={() => setIsPracticeAreasOpen(false)}>Family Law</Link>
                  <Link className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant/10" href="/services/property-law"  onClick={() => setIsPracticeAreasOpen(false)}>Property Law</Link>
                  <Link className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant/10" href="/services/criminal-law"  onClick={() => setIsPracticeAreasOpen(false)}>Criminal Law Services</Link>
                  <Link className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant/10" href="/services/cheque-bounce"  onClick={() => setIsPracticeAreasOpen(false)}>Cheque Bounce Cases</Link>
                  <Link className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant/10" href="/services/high-court-practice"  onClick={() => setIsPracticeAreasOpen(false)}>High Court Practice</Link>
                  <Link className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant/10" href="/services/corporate-law"  onClick={() => setIsPracticeAreasOpen(false)}>Corporate Law</Link>
                  <Link className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant/10" href="/services/commercial-law"  onClick={() => setIsPracticeAreasOpen(false)}>Commercial Law</Link>
                  <Link className="px-4 py-3 text-sm text-primary font-bold hover:bg-surface-container transition-colors" href="/services"  onClick={() => setIsPracticeAreasOpen(false)}>View All Practice Areas</Link>
                </div>
              )}
            </div>

            <Link 
              className={`font-label-caps text-label-caps pb-1 uppercase transition-colors border-b-2 ${pathname === '/case-study' ? 'text-primary border-tertiary-fixed-dim' : 'text-on-surface-variant border-transparent hover:text-primary'}`} 
              href="/case-study"
            >
              Case Study
            </Link>
            <Link 
              className={`font-label-caps text-label-caps pb-1 uppercase transition-colors border-b-2 ${pathname === '/contact' ? 'text-primary border-tertiary-fixed-dim' : 'text-on-surface-variant border-transparent hover:text-primary'}`} 
              href="/contact"
            >
              Contact Us
            </Link>
            <Link 
              className={`font-label-caps text-label-caps pb-1 uppercase transition-colors border-b-2 ${pathname === '/#articles' ? 'text-primary border-tertiary-fixed-dim' : 'text-on-surface-variant border-transparent hover:text-primary'}`} 
              href="/#articles"
            >
              Articles
            </Link>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary focus:outline-none p-2" 
            
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl"  data-icon={isMobileMenuOpen ? "close" : "menu"}>
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-outline-variant/20 shadow-xl absolute top-full w-full left-0 max-h-[calc(100vh-5rem)] overflow-y-auto" >
            <div className="flex flex-col px-gutter py-6 gap-6" >
              <Link className="font-label-caps text-label-caps text-primary uppercase border-b border-outline-variant/10 pb-2"  href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link className={`font-label-caps text-label-caps uppercase border-b border-outline-variant/10 pb-2 ${pathname === '/about-us' ? 'text-primary' : 'text-on-surface-variant'}`}  href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link className="font-label-caps text-label-caps text-on-surface-variant uppercase border-b border-outline-variant/10 pb-2 flex justify-between"  href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                Practice Areas
              </Link>
              <Link className={`font-label-caps text-label-caps uppercase border-b border-outline-variant/10 pb-2 ${pathname === '/case-study' ? 'text-primary' : 'text-on-surface-variant'}`}  href="/case-study" onClick={() => setIsMobileMenuOpen(false)}>Case Study</Link>
              <Link className="font-label-caps text-label-caps text-on-surface-variant uppercase border-b border-outline-variant/10 pb-2"  href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              <Link className="font-label-caps text-label-caps text-on-surface-variant uppercase border-b border-outline-variant/10 pb-2"  href="/#articles" onClick={() => setIsMobileMenuOpen(false)}>Articles</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

