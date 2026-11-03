import Breadcrumb from '../../components/Breadcrumb';

export default function BlogDivorcePage() {
  return (
    <main className="pt-20 md:pt-28">
      <div className="animate-in fade-in duration-500">
        
        <Breadcrumb title="Divorce and Family Law" paths={[{href: "/blogs/divorce", name: "Blog"}, {name: "Divorce and Family Law"}]} />

        <section className="bg-surface py-24">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              <div className="lg:col-span-10 lg:col-start-2">
                
                <div className="mb-12">
                  <div className="rounded-xl overflow-hidden mb-8">
                    <img src="/assets/img/blogs/Broken Bonds_ India’s Divorce Journey.png" alt="Blog feature" className="w-full h-auto object-cover" />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 py-6 border-b border-outline-variant/20 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">calendar_month</span> October 7, 2026
                    </div>
                  </div>
                </div>

                <article className="prose prose-lg max-w-none text-on-surface-variant font-body-lg">
                  <h1 className="font-headline-md font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">Divorce, Custody and Maintenance: A Guide to Matrimonial Law</h1>
                  <p className="mb-6 leading-relaxed">
                    Divorce and related disputes are often the most difficult period in a person's life. The legal process in India can be slow, complex, and emotionally draining. However, a clear understanding of your rights and options can reduce the uncertainty.
                  </p>
                  
                  <h3 className="font-headline-md text-primary mt-8 mb-4">How to obtain a divorce</h3>
                  <h4 className="font-headline-sm text-primary mb-2">1. Mutual Consent Divorce</h4>
                  <p className="mb-6 leading-relaxed">
                    This is the fastest, most dignified and least expensive way to end a marriage. Both husband and wife agree that the marriage has broken down, they cannot live together, and they have agreed on the terms of separation.
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-8">
                    <li><strong>Process:</strong> The parties jointly file a petition (the "first motion"). By law, there is a cooling-off period of six months to allow for reconsideration. After six months (and before eighteen months), they appear again for the "second motion", and the court grants the divorce.</li>
                    <li><strong>Waiver of cooling-off period:</strong> The Supreme Court has held (Amardeep Singh, 2017) that Family Courts can waive the six-month wait if the parties have already been living separately for over 18 months, attempts at mediation have failed, and waiting would only prolong their agony.</li>
                    <li><strong>The Settlement Agreement:</strong> A mutual consent divorce succeeds only on a solid, well-drafted Memorandum of Understanding (MoU). The MoU must clearly resolve alimony (usually a one-time settlement), child custody and visitation, and the return of Stridhan and belongings. It should also state that all other civil and criminal cases between the parties will be closed.</li>
                  </ul>

                  <h4 className="font-headline-sm text-primary mb-2">2. Contested Divorce</h4>
                  <p className="mb-6 leading-relaxed">
                    Where one spouse does not agree to a divorce, or the parties cannot agree on terms, either spouse can file a contested petition. A contested divorce must be based on specific grounds laid down in personal laws (e.g., Hindu Marriage Act, Special Marriage Act, Indian Christian Marriage Act, Dissolution of Muslim Marriages Act).
                  </p>

                  <h4 className="font-headline-sm text-primary mb-2">Grounds available to either spouse</h4>
                  <ul className="list-disc pl-6 space-y-3 mb-8">
                    <li><strong>Cruelty, physical or mental:</strong> This is the most commonly used ground. Courts have recognized false criminal complaints, persistent abuse, humiliation and refusal of marital obligations as mental cruelty.</li>
                    <li><strong>Adultery:</strong> Voluntary sexual relations with another person after marriage.</li>
                    <li><strong>Desertion:</strong> For a continuous period of at least two years, without reasonable cause and without consent.</li>
                    <li><strong>Conversion to another religion.</strong></li>
                    <li><strong>Unsoundness of mind</strong> or mental disorder.</li>
                    <li><strong>Presumption of death:</strong> Not heard of for seven years.</li>
                  </ul>

                  <h3 className="font-headline-md text-primary mt-8 mb-4">Child custody</h3>
                  <p className="mb-6 leading-relaxed">
                    In every custody case, the court's first and final concern is the welfare of the child, not the rights or wishes of the parents. The main laws are the Guardians and Wards Act, 1890 and the Hindu Minority and Guardianship Act, 1956. Custody can also be decided within divorce proceedings.
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-8">
                    <li><strong>Physical custody:</strong> the child lives with one parent, and the other parent gets visitation rights.</li>
                    <li><strong>Joint custody:</strong> both parents share the child's time and responsibilities. Courts increasingly favor this where parents can cooperate.</li>
                    <li><strong>Legal custody:</strong> the right to take major decisions about the child's education, health and religion.</li>
                    <li><strong>Visitation:</strong> regular meetings (weekends, holidays, video calls) for the non-custodial parents.</li>
                  </ul>
                  
                  <h3 className="font-headline-md text-primary mt-8 mb-4">Maintenance and alimony</h3>
                  <p className="mb-6 leading-relaxed">
                    Maintenance ensures that a spouse or child who cannot support themselves is not left without means after separation. It can be claimed under several laws (Section 144 BNSS, Section 24/25 HMA, Section 18 HAMA, Section 20 DV Act).
                  </p>
                  <p className="mb-6 leading-relaxed">
                    In Rajnesh v. Neha (2020), the Supreme Court made it compulsory for both parties to file an Affidavit of Disclosure of their assets, income and liabilities at the start of every maintenance case. As a rough benchmark, courts have treated around 25% of the husband's net income as a fair maintenance figure for the wife, though every case turns on its facts.
                  </p>

                  <blockquote className="my-10 p-10 bg-surface-container-low rounded-xl border-l-4 border-error text-primary font-headline-sm italic">
                    Disclaimer: This article is for general information only and does not constitute legal advice. The law and its interpretation change over time, and every case depends on its own facts. Please consult an advocate about your specific situation.
                  </blockquote>
                </article>

                <div className="mt-16 flex items-center gap-4 flex-wrap pb-16">
                  <span className="font-headline-sm text-primary mr-2">Tags:</span>
                  {['Divorce', 'Family Law', 'Custody', 'Maintenance'].map((tag) => (
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
