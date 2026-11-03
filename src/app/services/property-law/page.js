import Breadcrumb from '../../components/Breadcrumb';

export default function PropertyLawPage() {
  return (
    <main className="pt-20 md:pt-28 bg-background text-on-background font-body-md antialiased">
      <Breadcrumb 
        title="Property Law" 
        paths={[{name: "Services", href: "/services"}, {name: "Property Law"}]} 
      />
      
      <section className="py-section-gap px-gutter bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-low p-8 md:p-12 rounded-lg border border-outline-variant/30">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Property Law</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Property transactions and disputes require careful examination of title, documentation and applicable laws. We assist clients in property transactions as well as property-related litigation, including:
              </p>

              <h3 className="font-headline-md text-headline-md text-primary mb-6 mt-8">Our Services Include:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 text-xl">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Property Title Search:</strong> Examination of title documents and available records to identify ownership and title-related issues.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 text-xl">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Property Registration:</strong> Legal assistance in sale deeds, gift deeds, release deeds, partition deeds, settlement deeds and other property instruments.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 text-xl">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Property Disputes:</strong> Representation in disputes relating to ownership, possession, partition, inheritance, sale transactions and other property rights.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 text-xl">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Lease Agreements &amp; Rental Disputes:</strong> Drafting and review of lease and rental agreements and representation in disputes between landlords and tenants.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 text-xl">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Title Verification &amp; Property Documentation:</strong> Due diligence, verification of title and preparation/review of property-related legal documentation.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1 text-xl">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Wills:</strong> Drafting, review and legal assistance relating to Wills, testamentary arrangements and succession-related matters.</p>
                </li>
              </ul>

              <div className="bg-surface-container p-6 rounded-lg border-l-4 border-tertiary-fixed-dim mt-8">
                <p className="font-body-md italic text-primary">
                  &quot;Our approach is founded on professional integrity, confidentiality, attention to detail and client-focused legal service.&quot;
                </p>
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
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/criminal-law" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Criminal Law <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/cheque-bounce" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Cheque Bounce <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/high-court-practice" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">High Court Practice <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/corporate-law" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Corporate Law <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
                <li className="border-t border-outline-variant/20 pt-3"><a href="/services/commercial-law" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Commercial Law <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
