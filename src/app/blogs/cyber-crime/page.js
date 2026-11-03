import Breadcrumb from '../../components/Breadcrumb';

export default function blogDetailsPage() {
  return (
    <main className="pt-20 md:pt-28">
      <div className="animate-in fade-in duration-500">
        
        <Breadcrumb title="Cyber Crime and Online Fraud in India" paths={[{href: "/blogs/cyber-crime", name: "Blog"}, {name: "Cyber Crime and Online Fraud..."}]} />

        {/* Blog Content Section */}
        <section className="bg-surface py-24">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Main Content Area */}
              <div className="lg:col-span-10 lg:col-start-2">
                
                {/* Blog Header Image & Meta */}
                <div className="mb-12">
                  <div className="rounded-xl overflow-hidden mb-8">
                    <img src="/assets/img/blogs/Digital Scam Alert_ UPI and Fake Arrest Threats.png" alt="Blog feature" className="w-full h-auto object-cover" />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 py-6 border-b border-outline-variant/20 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">calendar_month</span> September 16, 2026
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <article className="prose prose-lg max-w-none text-on-surface-variant font-body-lg">
                  <h1 className="font-headline-md font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">Cyber Crime and Online Fraud in India: Recent Scams, Digital Arrests and How You Can Protect Yourself</h1>
                  <p className="mb-6 leading-relaxed">
                    The rapid growth of digital banking, UPI payments, online investments, social media and mobile applications has made everyday life easier. At the same time, it has created new opportunities for cyber criminals to target individuals, businesses and families.
                  </p>
                  
                  <h3 className="font-headline-md text-primary mt-8 mb-4">What is a "Digital Arrest" Scam?</h3>
                  <p className="mb-6 leading-relaxed">
                    One of the most serious recent forms of cyber fraud is the so-called "Digital Arrest" scam, where fraudsters impersonate police officers, CBI officials, RBI officials, Enforcement Directorate officials or other government authorities and threaten victims with arrest or criminal proceedings.
                  </p>
                  <blockquote className="my-10 p-10 bg-surface-container-low rounded-xl border-l-4 border-error text-primary font-headline-sm italic">
                    "I4C has expressly cautioned that there is no concept of 'digital arrest' under Indian law. Genuine law-enforcement authorities do not conduct an arrest through a video call and demand money from a person to avoid physical arrest."
                  </blockquote>

                  <h3 className="font-headline-md text-primary mt-8 mb-4">Other Common Cyber Fraud Methods</h3>
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-headline-sm text-primary mb-2">UPI and QR Code Fraud</h4>
                      <p>A fraudster may send a QR code claiming that scanning it will result in receiving money. You generally do not need to enter your UPI PIN to receive money.</p>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-primary mb-2">Fake Investment and Trading Scams</h4>
                      <p>Victims are attracted through WhatsApp groups or Telegram channels promising unusually high returns. After artificial profits are shown, the fraudster demands tax or withdrawal charges.</p>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-primary mb-2">Fake Job Offers</h4>
                      <p>Fraudsters advertise attractive work-from-home jobs, give small initial payments to build trust, and then demand larger deposits or "registration fees".</p>
                    </div>
                  </div>

                  <h3 className="font-headline-md text-primary mt-8 mb-4">How Can You Protect Yourself?</h3>
                  <ul className="list-disc pl-6 space-y-3 mb-8">
                    <li><strong>Never Panic Because of a Phone Call:</strong> Verify the information independently.</li>
                    <li><strong>Never Share OTP or PIN:</strong> Banks do not require you to disclose your OTP, UPI PIN, ATM PIN or password to another person.</li>
                    <li><strong>Verify Before Making a Large Payment:</strong> STOP &rarr; VERIFY &rarr; PAY. Do not allow urgency to replace verification.</li>
                    <li><strong>Be Careful About What You Share Online:</strong> Avoid unnecessarily publishing sensitive information.</li>
                  </ul>

                  <h3 className="font-headline-md text-primary mt-8 mb-4">What Should You Do If You Have Already Lost Money?</h3>
                  <p className="mb-6 leading-relaxed">
                    If you have become a victim of an online financial fraud, immediately contact the Cyber Crime Helpline – <strong>1930</strong> and report the incident through the <strong>National Cyber Crime Reporting Portal</strong>. You should also immediately inform your bank and preserve all available evidence.
                  </p>
                  
                </article>

                {/* Tags */}
                <div className="mt-16 flex items-center gap-4 flex-wrap pb-16 border-b border-outline-variant/20">
                  <span className="font-headline-sm text-primary mr-2">Tags:</span>
                  {['Cyber Crime', 'Fraud', 'Digital Arrest', 'Law', 'Security'].map((tag) => (
                    <a key={tag} href="#" className="px-4 py-2 rounded bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest hover:bg-tertiary-fixed-dim hover:text-on-primary transition-colors border border-outline-variant/20 hover:border-tertiary-fixed-dim">
                      {tag}
                    </a>
                  ))}
                </div>



              </div>


              
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}