import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased pt-20 md:pt-28" >
      <div>
  {/* TopNavBar Component */}
  
  <main className="max-w-container-max mx-auto px-gutter py-section-gap" >
    {/* Hero Section */}
    <section className="mb-section-gap text-center max-w-3xl mx-auto pt-8" >
      <h1 className="font-display-lg text-display-lg text-primary mb-6" >Integrity in Practice. Excellence in Advocacy.</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant" >
        We are a dedicated team of legal professionals committed to providing transparent, ethical, and rigorous representation across multiple jurisdictions.
      </p>
    </section>
    {/* Lead Advocate Bio */}
    <section className="mb-section-gap" >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-surface-container-lowest border-y md:border border-outline-variant/20 p-0 md:p-8" >
        <div className="md:col-span-5 h-[500px]" >
          <img className="w-full h-full object-cover grayscale-[30%] contrast-125"  data-alt="A professional, high-quality portrait of a distinguished Indian lead advocate in formal court attire, standing in a sophisticated, wood-paneled law library. The lighting is soft yet authoritative, casting subtle shadows that highlight experience and wisdom. The color palette features deep navies, rich mahoganies, and crisp whites, embodying the corporate and modern legal aesthetic with a dignified, quiet atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnSMjXAl0PcT2ButR9UZCnBAwJk6pWT9kthguhCytiMSuhxmWmbZxgBoke7YXbpvvr1Jfv4pBLLfhSt_Hkj0nFjjp7tblDnUqj9MzDEomnOas-j7xaH1LgsqX8QfWXGrxyUXUg0zDZGXdYND1YpuKAWWVdphRG2xkIDCgzvELtarYYMvsT8u1tsSX7-nnHoRJT9MNQSBbDjh3oFZOMXtRkkHF136QI2yz-yantWBO_v5ElMUhlNnbo" />
        </div>
        <div className="md:col-span-7 space-y-6 p-8 md:p-0 md:pl-8" >
          <div>
            <p className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-2" >LEAD ADVOCATE</p>
            <h2 className="font-headline-md text-headline-md text-primary" >Arjun Mehta</h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant" >
            With over two decades of distinguished practice at the High Court and Supreme Court of India, Arjun leads the chambers with a steadfast commitment to legal excellence and ethical transparency.
          </p>
          <ul className="space-y-4" >
            <li className="flex items-start" >
              <span className="text-tertiary-fixed-dim mr-3 mt-1 font-bold" >§</span>
              <div>
                <strong className="text-primary font-button uppercase tracking-widest" >Education</strong>
                <p className="text-on-surface-variant text-sm mt-1" >B.A. LL.B. (Hons.), National Law School of India University (NLSIU), Bangalore.</p>
              </div>
            </li>
            <li className="flex items-start" >
              <span className="text-tertiary-fixed-dim mr-3 mt-1 font-bold" >§</span>
              <div>
                <strong className="text-primary font-button uppercase tracking-widest" >Bar Membership</strong>
                <p className="text-on-surface-variant text-sm mt-1" >Bar Council of Delhi; Supreme Court Bar Association.</p>
              </div>
            </li>
            <li className="flex items-start" >
              <span className="text-tertiary-fixed-dim mr-3 mt-1 font-bold" >§</span>
              <div>
                <strong className="text-primary font-button uppercase tracking-widest" >Core Values</strong>
                <p className="text-on-surface-variant text-sm mt-1" >Unwavering transparency in client communications and strict adherence to the highest ethical standards of the profession.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* Experience Timeline */}
    <section className="mb-section-gap" >
      <div className="text-center mb-12" >
        <h2 className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-2" >Expertise</h2>
        <h3 className="font-headline-md text-headline-md text-primary" >Jurisdictions &amp; Experience</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
        {/* Card 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 text-center flex flex-col items-center" >
          <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim" >
            <span className="material-symbols-outlined text-5xl font-light"  data-icon="account_balance">account_balance</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4" >Supreme Court</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed" >Handling complex constitutional matters, Special Leave Petitions, and high-stakes appellate litigation.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 text-center flex flex-col items-center" >
          <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim" >
            <span className="material-symbols-outlined text-5xl font-light"  data-icon="gavel">gavel</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4" >High Courts</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed" >Extensive practice before the Delhi High Court and Bombay High Court in commercial and civil writ petitions.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 text-center flex flex-col items-center" >
          <div className="w-16 h-16 mb-4 flex items-center justify-center text-tertiary-fixed-dim" >
            <span className="material-symbols-outlined text-5xl font-light"  data-icon="balance">balance</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4" >District Courts &amp; Tribunals</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed" >Original side practice, including NCLT, DRT, and specialized tribunals ensuring robust foundational advocacy.</p>
        </div>
      </div>
    </section>
    {/* Team Section (Bento Grid) */}
    <section className="mb-section-gap" >
      <div className="text-center mb-12" >
        <h2 className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-2" >The Team</h2>
        <h3 className="font-headline-md text-headline-md text-primary" >Our Associates</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]" >
        {/* Associate 1 */}
        <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest border border-outline-variant/20 flex overflow-hidden group" >
          <div className="w-1/2" >
            <img className="w-full h-full object-cover grayscale-[30%] transition-transform duration-500 group-hover:scale-105"  data-alt="A portrait of a sharp, modern associate advocate in a well-tailored navy suit, sitting at a glass desk reviewing documents. The office setting is contemporary and minimalist, with bright, natural light filtering in. The overall mood conveys sharp intellect, approachability, and modern legal efficiency, fitting the corporate minimalist design style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgqV-j3JiKethqUDXlU7UEl4y8ex-1HuEYXzCS93JimJT23dwdSbr9cPAC7JYgqpskkAmh6PZydCiLA1MYdYd_CCn1-SMtg8JGgIZ8SM0CdV4pdAE9nFMANzx1_XJt7H3CLUwNDHK5DZlp2PPg1m1fYg5tki-JaALQs5Gp0W1XU9Fl63fZ8xvikop_AnOWW94_uY6fTtP_Aq9cCcGA4CkpJJw16tQV0k6dA08pdj5W6fttga89ktmk" />
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-center" >
            <p className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-1" >SENIOR ASSOCIATE</p>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3" >Priya Sharma</h3>
            <p className="text-sm text-on-surface-variant" >Corporate Litigation &amp; Arbitration. Focuses on contractual disputes and commercial mediation.</p>
          </div>
        </div>
        {/* Associate 2 */}
        <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest border border-outline-variant/20 flex overflow-hidden group" >
          <div className="w-1/2 p-6 flex flex-col justify-center order-2 md:order-1" >
            <p className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-1" >ASSOCIATE</p>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3" >Rohan Desai</h3>
            <p className="text-sm text-on-surface-variant" >Civil Rights &amp; Public Interest Litigation. Dedicated to constitutional law and pro bono initiatives.</p>
          </div>
          <div className="w-1/2 order-1 md:order-2" >
            <img className="w-full h-full object-cover grayscale-[30%] transition-transform duration-500 group-hover:scale-105"  data-alt="A portrait of a young, dynamic male associate advocate standing in a brightly lit courthouse corridor. He holds a leather portfolio. The lighting is crisp and cool-toned, emphasizing clarity and structural stability. The image maintains a formal, dignified, and clean modern aesthetic typical of top-tier legal chambers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4JWsHsDmLawkHBEOXKvpr0_TN97CVhYWqq7aL0MB-aRSIEaqbo4XxEv4EkI-Jv1UpN8h2RlTvaloXtepS_sj3wHZiOSJH9TerHz3CRe2i2MkxVIbGClp9qXCAC_6qRD9WJCQvzMIo1fr6oZIMqhDLd6oHNoISxVIU8klISIZfrZXd8KVPfbLT6e8itxWPr6rjDmI85jlw9JdUUj6-DJUnlZvBf0achRl-gYTSXWg1pHTcEuS0y95h" />
          </div>
        </div>
        {/* Paralegal Team */}
        <div className="md:col-span-4 md:row-span-1 bg-primary text-on-primary p-12 flex flex-col md:flex-row items-center justify-between" >
          <div className="md:w-2/3 mb-6 md:mb-0" >
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-4" >Dedicated Support Team</h3>
            <p className="text-on-primary/80 font-body-md leading-relaxed" >
              Our advocates are supported by a rigorous team of paralegals and legal researchers who ensure meticulous case preparation, exhaustive precedent research, and seamless administrative handling of all matters.
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right" >
            <span className="material-symbols-outlined text-7xl text-tertiary-fixed-dim opacity-80"  data-icon="library_books">library_books</span>
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
