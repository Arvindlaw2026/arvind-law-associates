import Breadcrumb from '../components/Breadcrumb';

export const metadata = {
  title: "Privacy Policy | ARVIND LAW ASSOCIATES",
  description: "Privacy Policy for Arvind Law Associates - Advocates & Legal Consultants, Bengaluru. Explaining how we collect, store, and protect client and visitor personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20 md:pt-28">
      <div className="animate-in fade-in duration-500">
        <Breadcrumb 
          title="Privacy Policy" 
          paths={[{ name: "Privacy Policy" }]} 
        />

        <section className="bg-surface py-16 md:py-24">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-4xl mx-auto bg-surface-container-lowest p-8 md:p-16 rounded-2xl shadow-sm border border-outline-variant/20">
              
              <div className="border-b border-outline-variant/20 pb-8 mb-10">
                <div className="font-label-caps text-label-caps text-tertiary-dark uppercase tracking-widest mb-2 font-semibold">
                  Arvind Law Associates
                </div>
                <h1 className="font-headline-md font-bold text-3xl md:text-4xl text-primary mb-4">
                  Privacy Policy
                </h1>
                <p className="text-xs md:text-sm text-on-surface-variant font-label-caps uppercase tracking-wider">
                  Effective Date: 02 November 2026 &nbsp;|&nbsp; Last Updated: 02 November 2026
                </p>
              </div>

              <div className="space-y-10 text-on-surface-variant font-body-md leading-relaxed text-sm md:text-base">
                
                {/* 1. INTRODUCTION */}
                <section>
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">1.</span> Introduction
                  </h2>
                  <p className="mb-4">
                    Arvind Law Associates (&quot;Firm&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;) is committed to protecting the privacy, confidentiality and security of personal information shared with us by our clients, prospective clients, website visitors and other individuals who interact with us.
                  </p>
                  <p className="mb-4">
                    This Privacy Policy explains how we collect, receive, use, store, process, disclose and protect personal information through our website and in connection with the legal and professional services provided by Arvind Law Associates.
                  </p>
                  <p className="mb-4">
                    We recognise that individuals approaching a law firm may need to share confidential information relating to their personal lives, family disputes, financial affairs, business transactions, property ownership and legal proceedings. We endeavour to handle such information with due care, confidentiality and in accordance with applicable Indian laws and professional obligations governing advocates.
                  </p>
                  <p>
                    By accessing or using our website, you acknowledge that you have had an opportunity to read this Privacy Policy. Where applicable law requires consent for a particular processing activity, we will seek such consent separately and in the manner required by law.
                  </p>
                </section>

                {/* 2. INFORMATION WE COLLECT */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">2.</span> Information We Collect
                  </h2>
                  <p className="mb-6">
                    Depending on the nature of your interaction with our Firm, we may collect the following categories of information:
                  </p>

                  <div className="space-y-6 pl-2 md:pl-4">
                    <div>
                      <h3 className="font-semibold text-primary mb-2 text-base md:text-lg">
                        A. Personal Information
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Full name and contact details, including residential or correspondence address, email address and mobile number.</li>
                        <li>Age, date of birth and identification details, where necessary for a legal or administrative purpose.</li>
                        <li>Details of family members, representatives or other persons relevant to a legal matter.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2 text-base md:text-lg">
                        B. Legal and Case-Related Information
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Information relating to matrimonial disputes, divorce, domestic violence, child custody, guardianship and maintenance proceedings.</li>
                        <li>Information relating to civil, criminal, commercial, cheque dishonour, cybercrime, property and other legal matters.</li>
                        <li>FIRs, complaints, court pleadings, orders, judgments, notices, affidavits, agreements and other legal documents.</li>
                        <li>Property ownership, title, registration, transaction and due-diligence documents.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2 text-base md:text-lg">
                        C. Financial and Business Information
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Bank account details and transaction records, where relevant.</li>
                        <li>Salary slips, income statements, tax-related documents and financial statements.</li>
                        <li>Loan agreements, cheque details, payment records and business or corporate documents.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2 text-base md:text-lg">
                        D. Sensitive or Confidential Information
                      </h3>
                      <p>
                        In the course of legal work, we may receive information of a sensitive or confidential nature, including medical records, health information, family circumstances, personal relationships, financial information and information concerning minors. We handle such information only where relevant and for lawful professional purposes, subject to applicable law.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. CONFIDENTIALITY OF CLIENT INFORMATION */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">3.</span> Confidentiality of Client Information
                  </h2>
                  <p className="mb-4">
                    Arvind Law Associates recognises the professional duty of confidentiality applicable to advocates, including the obligations arising under the Advocates Act, 1961 and the Bar Council of India Rules. Information and documents received from clients in connection with professional legal engagements will be treated as confidential, subject to applicable law and professional obligations.
                  </p>
                  <p className="mb-3">
                    Client information may be disclosed only where disclosure is authorised, necessary or legally permitted or required, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Where the client has authorised the disclosure.</li>
                    <li>Where disclosure is necessary for providing the agreed legal services or conducting or defending legal proceedings.</li>
                    <li>Where disclosure is required by a competent court, tribunal, statutory authority or applicable law.</li>
                    <li>Where disclosure is otherwise permitted or required under applicable professional obligations.</li>
                  </ul>
                  <p>
                    We take reasonable steps to restrict access to confidential client information to persons who need the information for legitimate professional or administrative purposes. This clause does not create or imply an advocate-client relationship merely because a person visits the website or submits an enquiry.
                  </p>
                </section>

                {/* 4. SHARING AND DISCLOSURE OF INFORMATION */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">4.</span> Sharing and Disclosure of Information
                  </h2>
                  <p className="mb-4">
                    We do not sell personal information collected through our website or in the course of providing legal services. We may share information, to the extent reasonably necessary and legally permissible, with:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Courts, tribunals, government departments and statutory authorities.</li>
                    <li>Opposing advocates, parties and their authorised representatives, where required for legal proceedings.</li>
                    <li>Experts, consultants, accountants, auditors and other professionals engaged in connection with a client&apos;s matter.</li>
                    <li>Website hosting providers, IT support providers, email providers and document-management service providers.</li>
                    <li>Law enforcement agencies or other competent authorities where disclosure is required or permitted by law.</li>
                  </ul>
                  <p>
                    Where a service provider processes personal information on our behalf, we will take reasonable steps to ensure that the arrangement is appropriate for the relevant purpose and consistent with applicable law.
                  </p>
                </section>

                {/* 5. DATA STORAGE AND RETENTION */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">5.</span> Data Storage and Retention
                  </h2>
                  <p className="mb-4">
                    We retain personal information and legal documents for no longer than is reasonably necessary for the purposes for which they were collected, unless a longer retention period is required or permitted by applicable law. The appropriate retention period may depend on:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>The nature and complexity of the legal matter.</li>
                    <li>Applicable limitation periods and statutory requirements.</li>
                    <li>Professional record-keeping requirements.</li>
                    <li>Pending litigation, appeals, investigations or other legal proceedings.</li>
                    <li>The need to preserve evidence or establish, exercise or defend legal rights.</li>
                  </ul>
                  <p>
                    When information is no longer required, we will take reasonable steps to securely delete, destroy or anonymise it, subject to applicable legal, regulatory and professional record-retention obligations.
                  </p>
                </section>

                {/* 6. SECURITY OF PERSONAL INFORMATION */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">6.</span> Security of Personal Information
                  </h2>
                  <p className="mb-4">
                    We endeavour to implement reasonable technical and organisational safeguards to protect personal information against unauthorised access, alteration, disclosure, misuse, loss or destruction. Depending on the nature of the information and the risks involved, safeguards may include access restrictions, password protection, secure physical and electronic records, appropriate transmission practices and the use of suitable service providers.
                  </p>
                  <p>
                    No method of electronic transmission or storage can be guaranteed to be completely secure. We will respond to suspected personal-data security incidents in accordance with applicable legal requirements.
                  </p>
                </section>

                {/* 7. CHILDREN'S PERSONAL INFORMATION */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">7.</span> Children&apos;s Personal Information
                  </h2>
                  <p>
                    In providing legal services, we may receive personal information relating to minors, particularly in matters concerning child custody, guardianship, maintenance and family disputes. We handle such information with particular care and use it only for legitimate legal and professional purposes. Where applicable law requires consent from a parent or lawful guardian or imposes other conditions for processing children&apos;s personal data, we will comply with those requirements, subject to any applicable statutory exceptions.
                  </p>
                </section>

                {/* 8. WEBSITE ENQUIRIES AND ADVOCATE-CLIENT RELATIONSHIP */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">8.</span> Website Enquiries and Advocate-Client Relationship
                  </h2>
                  <p className="mb-4">
                    Submitting an enquiry through our website, sending an email or contacting the Firm by telephone or WhatsApp does not, by itself, establish an advocate-client relationship or constitute acceptance of a legal engagement. An engagement will arise only when the Firm has expressly accepted the matter and the necessary engagement arrangements have been completed.
                  </p>
                  <p>
                    Please do not submit highly confidential documents, sensitive personal information or detailed case materials through a publicly accessible website form unless specifically requested or an appropriate secure communication channel has been provided. The Firm may conduct a conflict-of-interest check before accepting an engagement. Information supplied for that check will be handled with appropriate care.
                  </p>
                </section>

                {/* 9. CHANGES TO THIS PRIVACY POLICY */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">9.</span> Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may revise this Privacy Policy from time to time to reflect changes in applicable law, professional requirements, website functionality or our information-handling practices. The revised version will be published on our website with an updated &apos;Last Updated&apos; date. We encourage visitors to review this page periodically.
                  </p>
                </section>

                {/* 10. CONTACT DETAILS */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">10.</span> Contact Details
                  </h2>
                  <p className="mb-4">
                    For privacy-related questions, requests or grievances, please contact:
                  </p>
                  <div className="bg-surface-container-high/60 rounded-xl p-6 border border-outline-variant/20 space-y-2 text-sm md:text-base">
                    <p className="font-bold text-primary text-lg">ARVIND LAW ASSOCIATES</p>
                    <p className="text-on-surface-variant font-label-caps uppercase tracking-wider text-xs">Advocates &amp; Legal Consultants</p>
                    <p>Bengaluru, Karnataka, India</p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:arvindlaw60@gmail.com" className="text-primary font-medium hover:text-tertiary-dark underline">
                        arvindlaw60@gmail.com
                      </a>
                    </p>
                    <p>
                      <strong>Contact Number:</strong>{" "}
                      <a href="tel:+919632196595" className="text-primary font-medium hover:text-tertiary-dark">
                        +91 9632196595
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a href="https://www.arvindlawchamber.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-tertiary-dark underline">
                        https://www.arvindlawchamber.com/
                      </a>
                    </p>
                    <p className="text-xs text-on-surface-variant/80 pt-2">
                      <em>Subject line for inquiries: &quot;Privacy Policy – Data Protection Request&quot;</em>
                    </p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

