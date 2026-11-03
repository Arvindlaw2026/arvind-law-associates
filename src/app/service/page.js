import Breadcrumb from '../components/Breadcrumb';

export default function servicePage() {
  const services = [
    { title: "Family Law", icon: "family_restroom", desc: "We provide legal advice and representation in matrimonial and family-related proceedings.", href: "/services/family-law" },
    { title: "Property Law", icon: "domain", desc: "We assist clients in property transactions as well as property-related litigation.", href: "/services/property-law" },
    { title: "Criminal Law Services", icon: "gavel", desc: "Legal assistance and representation at various stages of criminal proceedings.", href: "/services/criminal-law" },
    { title: "Cheque Bounce Cases", icon: "request_quote", desc: "We handle proceedings arising from dishonour of cheques and provide legal assistance.", href: "/services/cheque-bounce" },
    { title: "High Court Practice", icon: "account_balance", desc: "We represent clients before the Karnataka High Court in constitutional, civil, criminal and service law.", href: "/services/high-court-practice" },
    { title: "Corporate Law", icon: "business", desc: "We advise businesses and companies on corporate legal matters.", href: "/services/corporate-law" },
    { title: "Commercial Law", icon: "handshake", desc: "We advise businesses on commercial contracts and disputes.", href: "/services/commercial-law" }
  ];

  return (
    <main className="pt-20 md:pt-28">
      <div className="animate-in fade-in duration-500">
        
        <Breadcrumb title="Our Services" paths={[{name: "Our Services"}]} />

        {/* Services Grid */}
        <section className="bg-surface py-24">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="group bg-surface-container-low p-10 rounded-xl border border-outline-variant/20 hover:border-tertiary-fixed-dim transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-tertiary-fixed-dim transition-all duration-300 group-hover:h-full"></div>
                  
                  <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-6 text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{service.title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-8">{service.desc}</p>
                  
                  <a href={service.href} className="inline-flex items-center gap-2 font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest group-hover:text-primary transition-colors">
                    Read More <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video & Milestones Section */}
        <section className="relative py-32 bg-primary overflow-hidden text-on-primary">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{backgroundImage: 'url("/assets/img/bg-img/13.jpg")'}}></div>
          
          <div className="relative max-w-container-max mx-auto px-gutter z-10">
            <div className="text-center mb-16">
              <h2 className="font-display-sm text-display-sm mb-6">Success-Driven Outcomes for Every Client Project</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-y border-on-primary/20 py-12">
              <div>
                <h3 className="font-display-md text-display-md text-tertiary-fixed-dim mb-2">3.5K+</h3>
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-primary/80">Criminal Defense Cases</p>
              </div>
              <div className="border-y md:border-y-0 md:border-x border-on-primary/20 py-8 md:py-0">
                <h3 className="font-display-md text-display-md text-tertiary-fixed-dim mb-2">2.4K+</h3>
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-primary/80">Family Law Cases</p>
              </div>
              <div>
                <h3 className="font-display-md text-display-md text-tertiary-fixed-dim mb-2">2.5K+</h3>
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-primary/80">Real Estate Cases</p>
              </div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <a href="https://youtu.be/4GUFkrHvZdE" target="_blank" rel="noopener noreferrer" className="w-24 h-24 rounded-full bg-surface text-primary flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl cursor-pointer group">
                <span className="material-symbols-outlined text-4xl ml-1 group-hover:text-tertiary-fixed-dim transition-colors">play_arrow</span>
              </a>
            </div>
          </div>
        </section>

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