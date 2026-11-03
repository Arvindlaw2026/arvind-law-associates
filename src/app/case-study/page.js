import Breadcrumb from '../components/Breadcrumb';

export default function caseStudyPage() {
  const caseStudies = [
    { 
      title: "Cheque Bounce Case Studies", 
      category: "Dishonour of Cheques", 
      image: "/assets/img/case-studies/Bounced Cheque_ Justice in Session.png",
      href: "/case-study/cheque-bounce"
    },
    { 
      title: "Commercial Law Case Studies", 
      category: "Commercial Law", 
      image: "/assets/img/case-studies/Handshake and Scales of Justice.png",
      href: "/case-study/commercial-law"
    },
    { 
      title: "Corporate & Commercial Retainership", 
      category: "Corporate Law", 
      image: "/assets/img/case-studies/Corporate Law Office with Justice Symbols.png",
      href: "/case-study/corporate"
    },
    { 
      title: "Family Law & Matrimonial Disputes", 
      category: "Family Law", 
      image: "/assets/img/case-studies/Family Law_ Divided Home and Justice.png",
      href: "/case-study/family-law"
    },
    { 
      title: "Property Law Case Studies", 
      category: "Property Law", 
      image: "/assets/img/case-studies/Property Law Desk Still Life.png",
      href: "/case-study/property-law"
    }
  ];

  return (
    <main className="pt-20 md:pt-28">
      <div className="animate-in fade-in duration-500">
        
        <Breadcrumb title="Case Studies" paths={[{name: "Case Studies"}]} />

        {/* Case Studies Grid */}
        <section className="bg-surface py-24">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, idx) => (
                <a key={idx} href={study.href} className="group relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm block">
                  <div className="relative h-[300px] overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{study.category}</div>
                    <h3 className="font-headline-sm text-headline-sm text-on-primary m-0">{study.title}</h3>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}