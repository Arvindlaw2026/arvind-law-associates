import Breadcrumb from '../../components/Breadcrumb';

export default function BlogDVPage() {
  return (
    <main className="pt-20 md:pt-28">
      <div className="animate-in fade-in duration-500">
        
        <Breadcrumb title="Domestic Violence and Cruelty" paths={[{href: "/blogs/domestic-violence", name: "Blog"}, {name: "Domestic Violence and Cruelty"}]} />

        <section className="bg-surface py-24">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              <div className="lg:col-span-10 lg:col-start-2">
                
                <div className="mb-12">
                  <div className="rounded-xl overflow-hidden mb-8">
                    <img src="/assets/img/blogs/Defend, Seek Justice, Find Safety.png" alt="Blog feature" className="w-full h-auto object-cover" />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 py-6 border-b border-outline-variant/20 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">calendar_month</span> October 7, 2026
                    </div>
                  </div>
                </div>

                <article className="prose prose-lg max-w-none text-on-surface-variant font-body-lg">
                  <h1 className="font-headline-md font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">Domestic violence: the Protection of Women from Domestic Violence Act, 2005</h1>
                  <p className="mb-6 leading-relaxed">
                    The DV Act is a civil law that gives a woman quick, practical protection at home, without having to start a criminal case. It covers a wife, a woman in a relationship in marriage (live-in), and mothers, sisters and daughters living in a shared household.
                  </p>
                  
                  <h3 className="font-headline-md text-primary mt-8 mb-4">What counts as domestic violence</h3>
                  <ul className="list-disc pl-6 space-y-3 mb-8">
                    <li><strong>Physical abuse:</strong> beating, pushing, any act causing bodily pain or harm.</li>
                    <li><strong>Sexual abuse:</strong> any sexual conduct that humiliates or degrades.</li>
                    <li><strong>Verbal and emotional abuse:</strong> insults, name-calling, ridicule, especially about not having a child or a male child, and threats.</li>
                    <li><strong>Economic abuse:</strong> denying money for household needs, taking away Stridhan or salary, or forcing her out of the shared home.</li>
                    <li><strong>Dowry-related harassment.</strong></li>
                  </ul>

                  <h3 className="font-headline-md text-primary mt-8 mb-4">Reliefs the Magistrate can grant</h3>
                  <ul className="list-disc pl-6 space-y-3 mb-8">
                    <li><strong>Protection order (Section 18):</strong> stops the husband or relatives from committing violence, contacting her, or entering her workplace.</li>
                    <li><strong>Residence order (Section 19):</strong> she cannot be thrown out of the shared household, whether she owns it.</li>
                    <li><strong>Monetary relief (Section 20):</strong> maintenance, medical expenses and loss of earnings.</li>
                    <li><strong>Custody order (Section 21):</strong> temporary custody of the children.</li>
                    <li><strong>Compensation (Section 22):</strong> for mental torture and emotional distress.</li>
                  </ul>

                  <h3 className="font-headline-md text-primary mt-8 mb-4">Section 498A IPC, now Section 85 BNS: cruelty by husband or relatives</h3>
                  <p className="mb-6 leading-relaxed">
                    Section 498A of the Indian Penal Code punishes cruelty against a married woman by her husband or his relatives. For offences committed on or after 1 July 2024, the same offence is found in Section 85 of the Bharatiya Nyaya Sanhita, 2023, with "cruelty" defined in Section 86. The wording is the same, so earlier case law continues to apply.
                  </p>

                  <h4 className="font-headline-sm text-primary mb-2">What is "cruelty"?</h4>
                  <ul className="list-disc pl-6 space-y-3 mb-8">
                    <li>Willful conduct likely to drive the woman to suicide or cause grave injury or danger to her life, limb or health, mental or physical; or</li>
                    <li>Harassment to coerce her or her relatives to meet an unlawful demand for property or valuable security, such as dowry.</li>
                  </ul>
                  
                  <h4 className="font-headline-sm text-primary mb-2">Safeguards against arrest</h4>
                  <p className="mb-6 leading-relaxed">
                    Registration of an FIR does not mean automatic arrest. In Arnesh Kumar v. State of Bihar (2014), the Supreme Court directed police not to arrest mechanically in 498A cases and to record reasons for any arrest. For offences punishable for up to seven years, police should ordinarily issue a notice to appear (now under Section 35(3) BNSS) instead of arresting.
                  </p>

                  <blockquote className="my-10 p-10 bg-surface-container-low rounded-xl border-l-4 border-error text-primary font-headline-sm italic">
                    Disclaimer: This article is for general information only and does not constitute legal advice. The law and its interpretation change over time, and every case depends on its own facts. Please consult an advocate about your specific situation.
                  </blockquote>
                </article>

                <div className="mt-16 flex items-center gap-4 flex-wrap pb-16">
                  <span className="font-headline-sm text-primary mr-2">Tags:</span>
                  {['Domestic Violence', 'Cruelty', 'Law', 'Section 498A'].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest border border-outline-variant/20">
                      {tag}
                    </span>
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
