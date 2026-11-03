import Breadcrumb from '../../components/Breadcrumb';

export default function CorporateLawPage() {
  return (
    <main className="pt-20 md:pt-28 bg-background text-on-background font-body-md antialiased">
      <Breadcrumb 
        title="Corporate & Commercial Law" 
        paths={[{name: "Services", href: "/services"}, {name: "Corporate Law"}]} 
      />
      
      <section className="py-section-gap px-gutter bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            
            <div className="bg-surface-container-low p-8 md:p-12 rounded-lg border border-outline-variant/30">
              <div className="prose prose-lg max-w-none text-on-surface-variant font-body-lg">
                  <h2 className="font-headline-lg text-primary mb-6">Corporate Law</h2>
                  <p className="mb-8">
                    We advise businesses and companies on corporate matters with a focus on protecting their interests, managing legal risks and resolving disputes. Our services include:
                  </p>
                  
                  <h3 className="font-headline-md text-primary mt-8 mb-6">Our Services Include:</h3>
                  
                  <ul className="space-y-6 mb-12">
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 shrink-0">check_circle</span>
                      <div>
                        <strong className="text-primary font-bold">Corporate Legal Retainership:</strong> Ongoing legal advisory and representation services for companies and businesses.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 shrink-0">check_circle</span>
                      <div>
                        <strong className="text-primary font-bold">Company, Shareholder & Business Disputes:</strong> Legal advice and representation in disputes involving companies, shareholders, directors, business partners and other stakeholders.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 shrink-0">check_circle</span>
                      <div>
                        <strong className="text-primary font-bold">Employment & HR Legal Support:</strong> Legal assistance concerning employment agreements, employer-employee disputes and related HR matters.
                      </div>
                    </li>
                  </ul>

                  <blockquote className="bg-surface-container border-l-4 border-tertiary-fixed-dim p-6 rounded-r-lg italic text-on-surface-variant font-body-lg">
                    "Our approach is founded on professional integrity, confidentiality, attention to detail and client-focused legal service."
                  </blockquote>
              </div>
            </div>

          </div>
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-primary text-on-primary p-8 rounded-lg mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-4">Need Legal Assistance?</h3>
              <p className="font-body-md text-on-primary/80 mb-6">Schedule a consultation with our experts to discuss your legal matters in confidence.</p>
              <a href="/contact" className="inline-flex items-center justify-center w-full bg-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-caps text-label-caps px-6 py-3 rounded hover:bg-tertiary-fixed transition-colors uppercase tracking-widest">
                Contact Us <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
              </a>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/30">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Other Practice Areas</h3>
              <ul className="space-y-3 font-label-caps text-label-caps uppercase tracking-widest">
                <li><a href="/services/family-law" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Family Law <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/property-law" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Property Law <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/criminal-law" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Criminal Law <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/cheque-bounce" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Cheque Bounce <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/high-court-practice" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">High Court Practice <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/commercial-law" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Commercial Law <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}

