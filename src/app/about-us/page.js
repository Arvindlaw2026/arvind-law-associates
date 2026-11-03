import Breadcrumb from '../components/Breadcrumb';
import TeamSection from '../components/TeamSection';

export default function aboutUsPage() {
  return (
    <main className="pt-20 md:pt-28" >
      <div className="animate-in fade-in duration-500" >
  {/* Preloader */}
  {/* Search Form */}
  
  <Breadcrumb title="About Us" paths={[{name: "About Us"}]} />

  {/* About Section */}
  <section className="bg-surface-container-lowest border-y border-outline-variant/20 py-24">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* About Thumbnail */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-6 items-end">
            <div>
              <img className="w-full rounded shadow-sm object-cover" src="/assets/img/Supreme Court Lawyer’s Library.png" alt="Law Library and Research Chambers - Arvind Law Associates" />
              {/* Experience Card */}
              <div className="bg-surface border border-outline-variant/20 p-6 mt-6 text-center shadow-sm rounded">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-2"><span className="counter">20</span><span>+</span></h2>
                <p className="font-body-sm text-sm text-on-surface-variant mb-0 uppercase tracking-widest font-label-caps">Years of Experience</p>
              </div>
            </div>
            <div>
              <img className="w-full rounded shadow-sm object-cover" src="/assets/img/Golden Light in the Courthouse Corridor.png" alt="High Court Corridor and Legal Representation - Arvind Law Associates" />
            </div>
          </div>
        </div>
        
        {/* About Content */}
        <div className="lg:col-span-6">
          <div className="lg:pl-8">
            <div className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-4 flex items-center gap-3">
              <img src="/assets/img/core-img/hammer.png" alt="" className="w-6 h-6" />
              About Us
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">Welcome to Arvind Law Associates</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
              Arvind Law Associates is a Bengaluru-based law firm providing legal representation, advisory, drafting and litigation services before the Karnataka High Court, Family Courts, District Courts and other competent courts and authorities.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">
              The firm is committed to providing practical, result-oriented and legally sound solutions tailored to the individual requirements of clients. We handle a diverse range of civil, family, criminal, property, commercial and corporate matters.
            </p>
            <a className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-3 rounded hover:bg-surface-container-highest transition-colors uppercase tracking-widest inline-flex items-center gap-2 mb-10" href="/about-us">
              Read More <span className="material-symbols-outlined text-[16px]" data-icon="arrow_outward">arrow_outward</span>
            </a>
            
            <div className="bg-surface-container-low p-6 border-l-4 border-tertiary-fixed-dim mb-8">
              <p className="font-body-md italic text-primary">
                “Our approach is founded on professional integrity, confidentiality, attention to detail and client-focused legal service.”
              </p>
            </div>
            
            {/* Manager Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-outline-variant/20 flex items-center justify-center bg-surface">
                <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim" data-icon="balance">balance</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary mb-1">Adv. Sandesh Arvind</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Founder &amp; Principal Advocate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Work Process Section */}
  <section className="bg-primary text-on-primary py-24" >
    <div className="max-w-container-max mx-auto px-gutter" >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16" >
        
        {/* Left Side: Heading */}
        <div className="lg:col-span-5" >
          <div className="sticky top-32" >
            <div className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-4 flex items-center gap-3" >
              <img src="/assets/img/core-img/hammer.png" alt="" className="w-6 h-6 brightness-0 invert" />
              Process
            </div>
            <h2 className="font-headline-md text-headline-md text-on-primary mb-8" >
              Our Commitment to Effective Legal Representation
            </h2>
            <a className="border border-tertiary-fixed-dim text-tertiary-fixed-dim font-label-caps text-label-caps px-8 py-3 rounded hover:bg-tertiary-fixed-dim hover:text-on-primary transition-colors uppercase tracking-widest inline-flex items-center gap-2" href="/about-us">
              Read More <span className="material-symbols-outlined text-[16px]" data-icon="arrow_outward">arrow_outward</span>
            </a>
          </div>
        </div>

        {/* Right Side: Process Cards */}
        <div className="lg:col-span-7 flex flex-col gap-10" >
          
          {/* Work Process Card 1 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 group">
            <div className="text-6xl md:text-7xl font-display-lg text-on-primary/10 group-hover:text-tertiary-fixed-dim transition-colors shrink-0 leading-none" >01</div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-3" >Understanding Concerns</h3>
              <p className="font-body-md text-on-primary/70 leading-relaxed" >We believe that effective legal representation begins with a thorough understanding of the client's concerns and specific circumstances.</p>
            </div>
          </div>

          {/* Work Process Card 2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 group">
            <div className="text-6xl md:text-7xl font-display-lg text-on-primary/10 group-hover:text-tertiary-fixed-dim transition-colors shrink-0 leading-none" >02</div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-3" >Clear Assessment</h3>
              <p className="font-body-md text-on-primary/70 leading-relaxed" >After evaluating the facts, we provide a clear, practical assessment of the available legal remedies and the most appropriate strategy.</p>
            </div>
          </div>

          {/* Work Process Card 3 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 group">
            <div className="text-6xl md:text-7xl font-display-lg text-on-primary/10 group-hover:text-tertiary-fixed-dim transition-colors shrink-0 leading-none" >03</div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-3" >Strategic Preparation</h3>
              <p className="font-body-md text-on-primary/70 leading-relaxed" >We combine comprehensive legal knowledge and careful preparation to build a strong case and assist clients in navigating complex issues.</p>
            </div>
          </div>

          {/* Work Process Card 4 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 group">
            <div className="text-6xl md:text-7xl font-display-lg text-on-primary/10 group-hover:text-tertiary-fixed-dim transition-colors shrink-0 leading-none" >04</div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-3" >Effective Representation</h3>
              <p className="font-body-md text-on-primary/70 leading-relaxed" >Our objective is to provide dependable counsel and steadfast representation before all courts while protecting our clients' rights.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  {/* Team Members Section */}
  <TeamSection />

  {/* Contact Section */}
  <section className="bg-surface-container-lowest border-y border-outline-variant/20 py-24" >
    <div className="max-w-container-max mx-auto px-gutter" >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center" >
        <div className="lg:col-span-6" >
          <div className="mb-12" >
            <div className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-4 flex items-center gap-3" >
              <img src="/assets/img/core-img/hammer.png" alt="" className="w-6 h-6" />
              Contact us
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6" >Get Professional Legal Assistance</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed" >Reach out to Arvind Law Associates to schedule a consultation. Our team is ready to listen to your concerns and provide clear, effective legal solutions tailored to your needs.</p>
          </div>
          
          <div className="flex flex-col gap-8" >
            {/* Contact Info Card */}
            <div className="flex items-center gap-6" >
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center shrink-0 border border-outline-variant/20 text-primary" >
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary mb-1" >350+ Projects Done</p>
                <p className="font-body-md text-on-surface-variant" >From banking and insurance to wealth the management and security on there.</p>
              </div>
            </div>
            
            {/* Contact Info Card */}
            <div className="flex items-center gap-6" >
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center shrink-0 border border-outline-variant/20 text-primary" >
                <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary mb-1" >500+ Happy Clients</p>
                <p className="font-body-md text-on-surface-variant" >From banking and insurance to wealth the management and security on there.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-6" >
          <div className="bg-primary text-on-primary p-10 lg:p-12 rounded-xl shadow-lg" >
            <div className="font-headline-sm text-headline-sm mb-8" >Send Us Message</div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" >
              <div className="md:col-span-1" >
                <input className="w-full bg-on-primary/5 text-on-primary placeholder:text-on-primary/50 p-4 rounded border border-on-primary/10 focus:border-tertiary-fixed-dim outline-none transition-colors" type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="md:col-span-1" >
                <input className="w-full bg-on-primary/5 text-on-primary placeholder:text-on-primary/50 p-4 rounded border border-on-primary/10 focus:border-tertiary-fixed-dim outline-none transition-colors" type="email" name="email" placeholder="Email Address" />
              </div>
              <div className="md:col-span-1" >
                <input className="w-full bg-on-primary/5 text-on-primary placeholder:text-on-primary/50 p-4 rounded border border-on-primary/10 focus:border-tertiary-fixed-dim outline-none transition-colors" type="text" name="phone" placeholder="Phone Number" />
              </div>
              <div className="md:col-span-1" >
                <input className="w-full bg-on-primary/5 text-on-primary placeholder:text-on-primary/50 p-4 rounded border border-on-primary/10 focus:border-tertiary-fixed-dim outline-none transition-colors" type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="md:col-span-2" >
                <textarea className="w-full bg-on-primary/5 text-on-primary placeholder:text-on-primary/50 p-4 rounded border border-on-primary/10 focus:border-tertiary-fixed-dim outline-none transition-colors min-h-[150px] resize-none" name="message" placeholder="Message" id="message" defaultValue={""} />
              </div>
              <div className="md:col-span-2 mt-2" >
                <button className="w-full bg-tertiary-fixed-dim text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-tertiary-fixed-dim/90 transition-colors uppercase tracking-widest flex items-center justify-center gap-2" type="submit">
                  Send Message <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </main>
  );
}