import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased pt-20 md:pt-28" >
      <div>
  {/* Top Navigation Bar */}
  
  {/* Page Header */}
  <section className="py-section-gap px-gutter bg-surface-container-low relative overflow-hidden" >
    {/* Abstract subtle pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none"  style={{backgroundImage: 'radial-gradient(theme("colors.on-surface") 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
    <div className="max-w-container-max mx-auto relative z-10 text-center" >
      <h1 className="font-display-lg text-display-lg md:font-display-lg text-primary mb-6" >Our Legal Services</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto" >
        Providing steadfast counsel and rigorous representation across critical areas of Indian law. We navigate complex legal landscapes to protect your interests.
      </p>
    </div>
  </section>
  {/* Main Content: Services Bento Grid */}
  <main className="flex-grow px-gutter py-section-gap max-w-container-max mx-auto w-full" >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
      {/* Service Card 1: Family Law */}
      <article className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-lg card-hover relative group overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"  />
        <div className="flex items-start justify-between mb-6" >
          <div className="p-3 bg-surface-container rounded-md inline-block" >
            <span className="material-symbols-outlined text-3xl text-primary" >family_restroom</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase bg-surface-container-high px-2 py-1 rounded" >Family Law</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-4" >Family Law</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6" >
          Family disputes often involve sensitive personal and financial issues requiring a balanced and legally sound approach. We provide legal advice and representation in matrimonial and family-related proceedings.
        </p>
        <ul className="space-y-3 font-body-md text-body-md text-on-surface" >
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Domestic Violence Protection</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Maintenance Claims</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Child Custody &amp; Guardianship</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Divorce &amp; Conjugal Rights</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <Link href="/services/family-law" className="inline-flex items-center gap-2 font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest hover:text-primary transition-colors">
            View Details <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </div>
      </article>

      {/* Service Card 2: Property Law */}
      <article className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-lg card-hover relative group overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"  />
        <div className="flex items-start justify-between mb-6" >
          <div className="p-3 bg-surface-container rounded-md inline-block" >
            <span className="material-symbols-outlined text-3xl text-primary" >domain</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase bg-surface-container-high px-2 py-1 rounded" >Property Law</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-4" >Property Law</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6" >
          Property transactions and disputes require careful examination of title, documentation and applicable laws. We assist clients in property transactions as well as property-related litigation.
        </p>
        <ul className="space-y-3 font-body-md text-body-md text-on-surface" >
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Property Title Search &amp; Verification</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Property Registration &amp; Deeds</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Property &amp; Ownership Disputes</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Lease Agreements &amp; Rental Disputes</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <Link href="/services/property-law" className="inline-flex items-center gap-2 font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest hover:text-primary transition-colors">
            View Details <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </div>
      </article>

      {/* Service Card 3: Criminal Law Services */}
      <article className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-lg card-hover relative group overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"  />
        <div className="flex items-start justify-between mb-6" >
          <div className="p-3 bg-surface-container rounded-md inline-block" >
            <span className="material-symbols-outlined text-3xl text-primary" >gavel</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase bg-surface-container-high px-2 py-1 rounded" >Criminal Law</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-4" >Criminal Law Services</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6" >
          We provide legal assistance and representation at various stages of criminal proceedings, including proceedings before the Trial Courts and the High Court.
        </p>
        <ul className="space-y-3 font-body-md text-body-md text-on-surface" >
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Anticipatory &amp; Regular Bail</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>FIR Quashing before High Court</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Cybercrime Advice &amp; Defence</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Criminal Trial Representation</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <Link href="/services/criminal-law" className="inline-flex items-center gap-2 font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest hover:text-primary transition-colors">
            View Details <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </div>
      </article>

      {/* Service Card 4: Cheque Bounce Cases */}
      <article className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-lg card-hover relative group overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"  />
        <div className="flex items-start justify-between mb-6" >
          <div className="p-3 bg-surface-container rounded-md inline-block" >
            <span className="material-symbols-outlined text-3xl text-primary" >request_quote</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase bg-surface-container-high px-2 py-1 rounded" >Commercial Law</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-4" >Cheque Bounce Cases</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6" >
          We handle proceedings arising from dishonour of cheques and provide legal assistance from the issuance of statutory notice through prosecution and defence.
        </p>
        <ul className="space-y-3 font-body-md text-body-md text-on-surface" >
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Legal Notice for Dishonoured Cheques</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Section 138 Proceedings</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Defence in Cheque Bounce Cases</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <Link href="/services/cheque-bounce" className="inline-flex items-center gap-2 font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest hover:text-primary transition-colors">
            View Details <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </div>
      </article>

      {/* Service Card 5: High Court Practice */}
      <article className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-lg card-hover relative group overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"  />
        <div className="flex items-start justify-between mb-6" >
          <div className="p-3 bg-surface-container rounded-md inline-block" >
            <span className="material-symbols-outlined text-3xl text-primary" >account_balance</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase bg-surface-container-high px-2 py-1 rounded" >High Court</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-4" >High Court Practice</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6" >
          We represent clients before the Karnataka High Court in matters involving constitutional, civil, criminal and service law remedies.
        </p>
        <ul className="space-y-3 font-body-md text-body-md text-on-surface" >
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Writ Petitions (Art. 226 &amp; 227)</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Service &amp; Employment Matters</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Appellate Proceedings</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Quashing of FIRs &amp; Complaints</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <Link href="/services/high-court-practice" className="inline-flex items-center gap-2 font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest hover:text-primary transition-colors">
            View Details <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </div>
      </article>

      {/* Service Card 6: Corporate Law */}
      <article className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-lg card-hover relative group overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"  />
        <div className="flex items-start justify-between mb-6" >
          <div className="p-3 bg-surface-container rounded-md inline-block" >
            <span className="material-symbols-outlined text-3xl text-primary" >business</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase bg-surface-container-high px-2 py-1 rounded" >Corporate Law</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-4" >Corporate Law</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6" >
          We advise businesses and companies on legal and corporate matters with a focus on protecting their interests and managing legal risks.
        </p>
        <ul className="space-y-3 font-body-md text-body-md text-on-surface" >
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Corporate Legal Retainership</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Company &amp; Shareholder Disputes</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Employment &amp; HR Legal Support</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <Link href="/services/corporate-law" className="inline-flex items-center gap-2 font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest hover:text-primary transition-colors">
            View Details <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </div>
      </article>

      {/* Service Card 7: Commercial Law */}
      <article className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-lg card-hover relative group overflow-hidden" >
        <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"  />
        <div className="flex items-start justify-between mb-6" >
          <div className="p-3 bg-surface-container rounded-md inline-block" >
            <span className="material-symbols-outlined text-3xl text-primary" >handshake</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase bg-surface-container-high px-2 py-1 rounded" >Commercial Law</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary mb-4" >Commercial Law</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6" >
          We assist in drafting, reviewing, and negotiating commercial contracts and represent clients in resolving commercial disputes.
        </p>
        <ul className="space-y-3 font-body-md text-body-md text-on-surface" >
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Commercial Contracts &amp; Documentation</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Vendor &amp; Service Agreements</span>
          </li>
          <li className="flex items-start" >
            <span className="text-tertiary-fixed-dim mr-2 mt-1" >§</span>
            <span>Commercial Dispute Resolution</span>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <Link href="/services/commercial-law" className="inline-flex items-center gap-2 font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest hover:text-primary transition-colors">
            View Details <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </div>
      </article>

    </div>
    {/* CTA Section within Main */}
    <div className="mt-section-gap bg-primary text-on-primary rounded-lg p-12 text-center relative overflow-hidden" >
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 border border-outline-variant/20 rounded-full opacity-20"  />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 border border-outline-variant/20 rounded-full opacity-20"  />
      <div className="relative z-10" >
        <h3 className="font-headline-md text-headline-md mb-4 text-on-primary" >Require specialized counsel?</h3>
        <p className="font-body-md text-body-md mb-8 text-on-primary/80 max-w-xl mx-auto" >Schedule a preliminary consultation to discuss your matter with our senior advocates. We prioritize confidentiality and strategic planning.</p>
        <Link className="inline-flex items-center justify-center bg-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-caps text-label-caps px-8 py-4 rounded hover:bg-tertiary-fixed transition-colors uppercase tracking-widest"  href="#">
          Request Consultation
        </Link>
      </div>
    </div>
  </main>
  {/* Footer */}
  
</div>

    </div>
  );
}
