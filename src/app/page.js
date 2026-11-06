import Link from 'next/link';
import TeamSection from './components/TeamSection';
import ReviewsSection from './components/ReviewsSection';

export default function HomePage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased pt-20 md:pt-28" >
      <div>
  {/* TopNavBar */}
  
  <main>
    {/* Hero Section */}
    <section className="relative bg-primary pt-10 md:pt-20 pb-0 overflow-hidden" >
      <div className="absolute inset-0 z-0" >
        <div className="w-full h-full bg-cover bg-center opacity-30 mix-blend-overlay"  data-alt="Subtle background of legal architecture or library" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC81Vmji-b4Ejzfe9m7tiM_SEgtf2bPWFBKKO1QGpP5Z660w3juR41EB5XHQMvpp_B1gsAZbYu0cPEK0_zfuS2tvAvJR_UazTD-59NBj57D-7ZxwuG3fotw0GbwNmvu9VLJ3tsU20X3mQew7l_KyVJ34OFIxE6yAKZzG_iIfKsP4a-BQVQtjkzqs12719dViM0ri-epBtNmcIc8o-nORw0VA61ZHjA2Q63BZNG95F6vYkkMCcanGiKW")'}} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"  />
      </div>
      <div className="relative z-10 w-full px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-gutter items-center min-h-0 md:min-h-[600px]" >
        <div className="flex flex-col justify-center py-8 md:py-20 pr-0 md:pr-10" >
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-8 leading-tight" >
            Advocacy.<br />
            Strategy.<br />
            <span className="text-tertiary-fixed-dim" >Resolution.</span>
          </h1>
          <div className="w-16 h-1 bg-tertiary-fixed-dim mb-8"  />
          <p className="font-body-md text-body-md text-on-primary/90 mb-10 max-w-md leading-relaxed" >
            Legal representation and advisory services across Litigation, Family Law, Property, Commercial and Corporate matters before Courts and Forums in Karnataka.
          </p>
          <div className="flex flex-wrap gap-4" >
            <Link href="/services" className="bg-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-caps text-label-caps px-8 py-4 rounded hover:bg-tertiary-fixed transition-colors uppercase tracking-widest inline-block" >
              Our Practice Areas
            </Link>
            <Link href="/contact" className="bg-transparent border border-on-primary/30 text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-on-primary/10 transition-colors uppercase tracking-widest inline-block" >
              Contact The Office
            </Link>
          </div>
        </div>
        <div className="relative h-full flex items-end justify-center md:justify-start pt-4 md:pt-20" >
          <img className="relative z-10 max-h-[350px] md:max-h-[600px] object-contain drop-shadow-2xl rounded-xl" alt="Hero Image" src="/assets/img/hero-image.webp" fetchPriority="high" width="540" height="720" />
          <div className="absolute top-10 -right-4 lg:-right-12 xl:-right-16 text-right z-20 hidden lg:block bg-primary/70 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl" >
            <div className="flex flex-col items-end mb-6" >
              <div className="w-16 h-16 border-2 border-tertiary-fixed-dim rounded-full flex items-center justify-center mb-4" >
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl"  data-icon="balance">balance</span>
              </div>
              <p className="font-headline-sm text-headline-sm text-on-primary mb-1" >Adv. Sandesh Arvind</p>
              <p className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase" >Founder &amp; Principal Advocate</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-on-primary/80 font-body-md" >
              <p>High Court of Karnataka</p>
              <p>District &amp; Sessions Courts</p>
              <p>Family Courts</p>
              <p>Commercial Courts</p>
              <p>Tribunals &amp; Authorities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Practice Areas Grid */}
    <section className="py-section-gap bg-surface text-center" >
      <div className="px-gutter max-w-container-max mx-auto" >
        <div className="mb-16" >
          <h2 className="font-label-caps text-label-caps text-tertiary-dark uppercase mb-4 tracking-widest" >What We Do</h2>
          <h3 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md text-primary" >Our Practice Areas</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-12" >
          {/* Item 1 */}
          <Link href="/services/family-law" className="flex flex-col items-center group cursor-pointer" >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary rounded-full transition-colors" >
              <span className="material-symbols-outlined text-5xl font-light"  data-icon="family_restroom">family_restroom</span>
            </div>
            <h4 className="font-label-caps text-label-caps text-primary uppercase mb-3 text-center group-hover:text-tertiary-fixed-dim transition-colors" >Family Law</h4>
            <p className="font-body-md text-xs text-on-surface-variant text-center leading-relaxed" >
              Domestic Violence, Maintenance, Child Custody, Divorce, and Restitution of Conjugal Rights.
            </p>
          </Link>
          {/* Item 2 */}
          <Link href="/services/property-law" className="flex flex-col items-center group cursor-pointer" >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary rounded-full transition-colors" >
              <span className="material-symbols-outlined text-5xl font-light"  data-icon="domain">domain</span>
            </div>
            <h4 className="font-label-caps text-label-caps text-primary uppercase mb-3 text-center group-hover:text-tertiary-fixed-dim transition-colors" >Property Law</h4>
            <p className="font-body-md text-xs text-on-surface-variant text-center leading-relaxed" >
              Property Title Search, Registration, Property Disputes, Lease Agreements, Title Verification &amp; Wills.
            </p>
          </Link>
          {/* Item 3 */}
          <Link href="/services/criminal-law" className="flex flex-col items-center group cursor-pointer" >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary rounded-full transition-colors" >
              <span className="material-symbols-outlined text-5xl font-light"  data-icon="gavel">gavel</span>
            </div>
            <h4 className="font-label-caps text-label-caps text-primary uppercase mb-3 text-center group-hover:text-tertiary-fixed-dim transition-colors" >Criminal Law Services</h4>
            <p className="font-body-md text-xs text-on-surface-variant text-center leading-relaxed" >
              Anticipatory Bail &amp; Regular Bail, FIR Quashing before the High Court, Cybercrime Advice &amp; Defence.
            </p>
          </Link>
          {/* Item 4 */}
          <Link href="/services/cheque-bounce" className="flex flex-col items-center group cursor-pointer" >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary rounded-full transition-colors" >
              <span className="material-symbols-outlined text-5xl font-light"  data-icon="request_quote">request_quote</span>
            </div>
            <h4 className="font-label-caps text-label-caps text-primary uppercase mb-3 text-center group-hover:text-tertiary-fixed-dim transition-colors" >Cheque Bounce Cases</h4>
            <p className="font-body-md text-xs text-on-surface-variant text-center leading-relaxed" >
              Legal Notice for Dishonoured Cheques, Section 138 Proceedings, and Defence in Cheque Bounce Cases.
            </p>
          </Link>
          {/* Item 5 */}
          <Link href="/services/high-court-practice" className="flex flex-col items-center group cursor-pointer" >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary rounded-full transition-colors" >
              <span className="material-symbols-outlined text-5xl font-light"  data-icon="account_balance">account_balance</span>
            </div>
            <h4 className="font-label-caps text-label-caps text-primary uppercase mb-3 text-center group-hover:text-tertiary-fixed-dim transition-colors" >High Court Practice</h4>
            <p className="font-body-md text-xs text-on-surface-variant text-center leading-relaxed" >
              Writ Petitions and Service Matters involving constitutional, civil, criminal and service law remedies.
            </p>
          </Link>
          {/* Item 6 */}
          <Link href="/services/corporate-law" className="flex flex-col items-center group cursor-pointer" >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary rounded-full transition-colors" >
              <span className="material-symbols-outlined text-5xl font-light"  data-icon="business">business</span>
            </div>
            <h4 className="font-label-caps text-label-caps text-primary uppercase mb-3 text-center group-hover:text-tertiary-fixed-dim transition-colors" >Corporate Law</h4>
            <p className="font-body-md text-xs text-on-surface-variant text-center leading-relaxed" >
              Corporate Legal Retainership, Employment Matters & Company Disputes.
            </p>
          </Link>
          <Link href="/services/commercial-law" className="flex flex-col items-center group cursor-pointer" >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary rounded-full transition-colors" >
              <span className="material-symbols-outlined text-5xl font-light"  data-icon="handshake">handshake</span>
            </div>
            <h4 className="font-label-caps text-label-caps text-primary uppercase mb-3 text-center group-hover:text-tertiary-fixed-dim transition-colors" >Commercial Law</h4>
            <p className="font-body-md text-xs text-on-surface-variant text-center leading-relaxed" >
              Commercial Contracts, Vendor Agreements & Commercial Disputes.
            </p>
          </Link>

        </div>
        <Link href="/services" className="bg-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-caps text-label-caps px-8 py-4 rounded hover:bg-tertiary-fixed transition-colors uppercase tracking-widest inline-block" >
          View All Practice Areas
        </Link>
      </div>
    </section>
    {/* Advocate Profile */}
    <section className="bg-surface border-y border-outline-variant/20" >
      <div className="grid grid-cols-1 md:grid-cols-2" >
        <div className="h-[500px] md:h-auto" >
          <img className="w-full h-full object-cover grayscale-[30%]" alt="Legal Books and Gavel"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsLrVmrGKuT37zPIFXTsOkO4n959Yf3I3nmOj3xQX13JaQPPKyZieTuR4dd1AC_ws4UBKPm0Kiap3Iu9NFHqSPANOT1U2vobbBkvTvCfSOjjraAr789WA-SNBescfbbhCbay3Hcmrjj-ooII33G1FkyUIYfikCEovUMwxgcsWDw4gnkAAms0lAQgdhvcZ63xODWGb9GhODQW36nLeXc1k0IyUucvLelXKCQ5krz4RAgXof9y62fPgi" />
        </div>
        <div className="p-12 md:p-20 flex flex-col justify-center bg-surface" >
          <h2 className="font-label-caps text-label-caps text-tertiary-dark uppercase mb-4 tracking-widest" >About The Advocate</h2>
          <h3 className="font-headline-md text-headline-md text-primary mb-8 leading-tight" >
            A Practice Built on<br />Integrity, Knowledge &amp; Experience
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6" >
            Adv. Sandesh Arvind is an advocate practicing before the High Court of Karnataka, District Courts, Family Courts and other judicial and statutory forums.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-10" >
            The practice combines courtroom advocacy with detailed legal analysis and documentation to deliver practical, strategic and effective legal solutions for individuals, businesses and institutions.
          </p>
          <div className="flex flex-col" >
            <div className="font-display-lg text-3xl text-primary mb-2 opacity-80"  style={{fontFamily: '"Great Vibes", cursive'}}>Sandesh Arvind</div>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase" >Adv. Sandesh Arvind</p>
          </div>
        </div>
      </div>
    </section>
    {/* Statistics Bar */}
    <section className="bg-primary text-on-primary py-16" >
      <div className="px-gutter max-w-container-max mx-auto" >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-outline-variant/20 text-center" >
          <div className="px-4 flex flex-col items-center" >
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4"  data-icon="balance">balance</span>
            <div className="font-headline-md text-4xl text-tertiary-fixed-dim mb-2" >10+</div>
            <div className="font-label-caps text-label-caps text-on-primary uppercase mb-2 tracking-widest" >Years of Practice</div>
            <p className="text-xs text-on-primary/70" >Across various Courts<br />and Forums</p>
          </div>
          <div className="px-4 flex flex-col items-center" >
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4"  data-icon="group">group</span>
            <div className="font-headline-md text-4xl text-tertiary-fixed-dim mb-2" >1500+</div>
            <div className="font-label-caps text-label-caps text-on-primary uppercase mb-2 tracking-widest" >Matters Handled</div>
            <p className="text-xs text-on-primary/70" >Successful representation in<br />Litigation &amp; Advisory</p>
          </div>
          <div className="px-4 flex flex-col items-center" >
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4"  data-icon="gavel">gavel</span>
            <div className="font-headline-md text-4xl text-tertiary-fixed-dim mb-2" >25+</div>
            <div className="font-label-caps text-label-caps text-on-primary uppercase mb-2 tracking-widest" >Areas of Practice</div>
            <p className="text-xs text-on-primary/70" >Wide range of legal services<br />under one roof</p>
          </div>
          <div className="px-4 flex flex-col items-center" >
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4"  data-icon="verified">verified</span>
            <div className="font-headline-md text-4xl text-tertiary-fixed-dim mb-2" >100%</div>
            <div className="font-label-caps text-label-caps text-on-primary uppercase mb-2 tracking-widest" >Client Focus</div>
            <p className="text-xs text-on-primary/70" >Committed to ethical practice<br />and client satisfaction</p>
          </div>
        </div>
      </div>
    </section>
    {/* Team Section */}
    <TeamSection />
    {/* Client Reviews Section */}
    <ReviewsSection />
    {/* Google Review Section */}
    <section className="py-16 bg-surface-container-low border-b border-outline-variant/20">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-surface rounded-2xl shadow-sm border border-outline-variant/20 p-8 md:p-12 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-tertiary-fixed-dim/5 rounded-full pointer-events-none"></div>
          
          <div className="flex-1 md:pr-12 text-center md:text-left mb-8 md:mb-0 z-10">
            <h2 className="font-label-caps text-label-caps text-tertiary-dark uppercase mb-3 tracking-widest">Client Feedback</h2>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Leave Us a Review on Google</h3>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto md:mx-0">
              Your feedback helps us continue to provide exceptional legal services. Scan the QR code to leave a review of your experience with Arvind Law Associates.
            </p>
          </div>
          
          <div className="flex-shrink-0 z-10 bg-white p-4 rounded-xl shadow-md border border-outline-variant/10">
            <img 
              src="/assets/img/Google-Color QR Code on Transparency.webp" 
              alt="Scan to leave a Google Review" 
              className="w-48 h-48 object-contain"
              width="192"
              height="192"
              loading="lazy"
            />
            <p className="text-center text-xs font-label-caps text-primary uppercase tracking-widest mt-3">Scan to Review</p>
          </div>
        </div>
      </div>
    </section>
    {/* Articles & Updates */}
    <section id="articles" className="py-section-gap bg-surface" >
      <div className="px-gutter max-w-container-max mx-auto" >
        <div className="text-center mb-12" >
          <h2 className="font-label-caps text-label-caps text-tertiary-dark uppercase mb-2 tracking-widest" >Legal Insights</h2>
          <h3 className="font-headline-md text-headline-md text-primary" >Articles &amp; Legal Updates</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12" >
          {/* Article 1 */}
          <div className="bg-surface flex flex-col" >
            <img className="w-full h-48 object-cover mb-6 rounded-lg" alt="Cyber Security" src="/assets/img/blogs/Digital Scam Alert_ UPI and Fake Arrest Threats.webp" width="400" height="192" loading="lazy" />
            <h4 className="font-headline-sm text-lg text-primary mb-3 leading-snug" >Cyber Crime and Online Fraud in India: Recent Scams & Protection</h4>
            <p className="text-xs text-on-surface-variant mb-4" >September 16, 2026</p>
            <Link className="font-label-caps text-label-caps text-tertiary-dark uppercase flex items-center gap-2 hover:text-primary transition-colors mt-auto font-semibold"  href="/blogs/cyber-crime">
              Read More <span className="material-symbols-outlined text-[16px]"  data-icon="arrow_right_alt">arrow_right_alt</span>
            </Link>
          </div>
          {/* Article 2 */}
          <div className="bg-surface flex flex-col" >
            <img className="w-full h-48 object-cover mb-6 rounded-lg" alt="Divorce and Family Law" src="/assets/img/blogs/Broken Bonds_ India’s Divorce Journey.webp" width="400" height="192" loading="lazy" />
            <h4 className="font-headline-sm text-lg text-primary mb-3 leading-snug" >Divorce, Custody and Maintenance: A Guide to Matrimonial Law</h4>
            <p className="text-xs text-on-surface-variant mb-4" >October 7, 2026</p>
            <Link className="font-label-caps text-label-caps text-tertiary-dark uppercase flex items-center gap-2 hover:text-primary transition-colors mt-auto font-semibold"  href="/blogs/divorce">
              Read More <span className="material-symbols-outlined text-[16px]"  data-icon="arrow_right_alt">arrow_right_alt</span>
            </Link>
          </div>
          {/* Article 3 */}
          <div className="bg-surface flex flex-col" >
            <img className="w-full h-48 object-cover mb-6 rounded-lg" alt="Domestic Violence and Cruelty" src="/assets/img/blogs/Defend, Seek Justice, Find Safety.webp" width="400" height="192" loading="lazy" />
            <h4 className="font-headline-sm text-lg text-primary mb-3 leading-snug" >Domestic Violence and Cruelty: Protection of Women</h4>
            <p className="text-xs text-on-surface-variant mb-4" >October 7, 2026</p>
            <Link className="font-label-caps text-label-caps text-tertiary-dark uppercase flex items-center gap-2 hover:text-primary transition-colors mt-auto font-semibold"  href="/blogs/domestic-violence">
              Read More <span className="material-symbols-outlined text-[16px]"  data-icon="arrow_right_alt">arrow_right_alt</span>
            </Link>
          </div>
          {/* Article 4 */}
          <div className="bg-surface flex flex-col" >
            <img className="w-full h-48 object-cover mb-6 rounded-lg" alt="Wills, Probate and Estate Planning in India" src="/assets/img/blogs/Wills and Succession in India.webp" width="400" height="192" loading="lazy" />
            <h4 className="font-headline-sm text-lg text-primary mb-3 leading-snug" >Wills in India: Registered &amp; Unregistered Wills, Probate &amp; Safeguards</h4>
            <p className="text-xs text-on-surface-variant mb-4" >October 21, 2026</p>
            <Link className="font-label-caps text-label-caps text-tertiary-dark uppercase flex items-center gap-2 hover:text-primary transition-colors mt-auto font-semibold"  href="/blogs/wills">
              Read More <span className="material-symbols-outlined text-[16px]"  data-icon="arrow_right_alt">arrow_right_alt</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  </main>
  {/* Footer */}
  
</div>

    </div>
  );
}
