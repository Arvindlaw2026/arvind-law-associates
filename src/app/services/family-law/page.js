import Breadcrumb from '../../components/Breadcrumb';

export default function FamilyLawPage() {
  return (
    <main className="pt-20 md:pt-28 bg-background text-on-background font-body-md antialiased">
      <Breadcrumb 
        title="Family Law" 
        paths={[{name: "Services", href: "/services"}, {name: "Family Law"}]} 
      />
      
      <section className="py-section-gap px-gutter bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-low p-8 md:p-12 rounded-lg border border-outline-variant/30">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Family Law</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Family disputes often involve sensitive personal and financial issues requiring a balanced and legally sound approach. We provide legal advice and representation in matrimonial and family-related proceedings, including:
              </p>
              
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Our Services Include:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Domestic Violence:</strong> Representation and legal assistance in proceedings relating to protection orders, residence, monetary relief and other remedies under the law.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Maintenance:</strong> Assistance in claims for maintenance and related proceedings under applicable family and personal laws.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Child Custody:</strong> Representation in custody, visitation and guardianship matters with emphasis on the welfare and best interests of the child.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Divorce:</strong> Legal representation in contested and mutual-consent divorce proceedings and related matrimonial issues.</p>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1">check_circle</span>
                  <p className="font-body-md text-on-surface-variant"><strong className="text-on-surface">Restitution of Conjugal Rights:</strong> Advice and representation in proceedings seeking restitution of marital rights.</p>
                </li>
              </ul>
              
              <div className="bg-surface-container p-6 rounded-lg border-l-4 border-tertiary-fixed-dim mt-8">
                <p className="font-body-md italic text-primary">
                  "Our approach is founded on professional integrity, confidentiality, attention to detail and client-focused legal service."
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
                <li><a href="/services/property-law" className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors flex justify-between items-center group">Property Law <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span></a></li>
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
