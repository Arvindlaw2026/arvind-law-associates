import Breadcrumb from '../components/Breadcrumb';

export const metadata = {
  title: "Terms and Conditions | ARVIND LAW ASSOCIATES",
  description: "Terms and Conditions governing consultations and legal services provided by Arvind Law Associates - Advocates & Legal Consultants, Bengaluru, Karnataka.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="pt-20 md:pt-28">
      <div className="animate-in fade-in duration-500">
        <Breadcrumb 
          title="Terms and Conditions" 
          paths={[{ name: "Terms & Conditions" }]} 
        />

        <section className="bg-surface py-16 md:py-24">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-4xl mx-auto bg-surface-container-lowest p-8 md:p-16 rounded-2xl shadow-sm border border-outline-variant/20">
              
              <div className="border-b border-outline-variant/20 pb-8 mb-10">
                <div className="font-label-caps text-label-caps text-tertiary-dark uppercase tracking-widest mb-2 font-semibold">
                  Arvind Law Associates
                </div>
                <h1 className="font-headline-md font-bold text-3xl md:text-4xl text-primary mb-4">
                  Terms and Conditions
                </h1>
                <p className="text-xs md:text-sm text-on-surface-variant font-label-caps uppercase tracking-wider">
                  Bengaluru, Karnataka &nbsp;|&nbsp; Effective Date: 02 November 2026
                </p>
              </div>

              <div className="space-y-10 text-on-surface-variant font-body-md leading-relaxed text-sm md:text-base">
                
                {/* 1. Acceptance and Scope */}
                <section>
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">1.</span> Acceptance and Scope
                  </h2>
                  <p>
                    These Terms and Conditions apply to consultations and legal services provided by Arvind Law Associates (&quot;the Firm&quot;), including legal advice, drafting, documentation, litigation, representation before courts and tribunals, property-related services and other agreed legal work. By engaging the Firm or making payment towards its professional fees, the client agrees to these terms. The specific scope of each engagement will be as agreed in writing or otherwise recorded between the Firm and the client.
                  </p>
                </section>

                {/* 2. Professional Fees and Expenses */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">2.</span> Professional Fees and Expenses
                  </h2>
                  <p>
                    Professional fees will be communicated to the client based on the nature, complexity and scope of the work. Fees must be paid in accordance with the agreed payment schedule. Court fees, stamp duty, registration charges, process fees, travel and other out-of-pocket expenses are additional unless expressly included in the fee quote. Work outside the agreed scope may attract additional fees, which will be communicated to the client. The Firm may defer commencement or further progress of work where agreed fees or expenses remain unpaid, subject to its professional obligations.
                  </p>
                </section>

                {/* 3. Refund and Cancellation Policy */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">3.</span> Refund and Cancellation Policy
                  </h2>
                  <p className="mb-4">
                    Professional fees paid for consultations and services already rendered, work commenced, time spent, drafting, research, document review, preparation, filing or representation are non-refundable. A client&apos;s decision to discontinue the matter, change counsel, withdraw proceedings or dissatisfaction with the advice or outcome does not, by itself, entitle the client to a refund of fees earned for work performed.
                  </p>
                  <p>
                    Where an engagement is terminated before the agreed work is completed, the Firm will account for the work performed and expenses incurred. Any unearned portion of an advance, if applicable, will be dealt with in accordance with applicable law and professional rules. Refunds of court fees, statutory charges or third-party payments are governed by the rules of the relevant authority or service provider.
                  </p>
                </section>

                {/* 4. No Guarantee of Outcome */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">4.</span> No Guarantee of Outcome
                  </h2>
                  <p>
                    The Firm will make honest, diligent and reasonable professional efforts to protect and advance the client&apos;s lawful interests. However, no particular result or outcome is promised or guaranteed. The outcome of a case depends on its facts, evidence, applicable law, submissions, the conduct of the parties and the decision of the competent court, tribunal or authority. The ultimate decision rests with that court, tribunal or authority. Fees are charged for professional services and work undertaken, not for securing a particular result.
                  </p>
                </section>

                {/* 5. Client Responsibilities */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">5.</span> Client Responsibilities
                  </h2>
                  <p>
                    The client must provide complete and accurate instructions, disclose all material facts, provide genuine documents and evidence, respond promptly to requests, attend proceedings or meetings when required, and pay agreed fees and expenses on time. The client must promptly inform the Firm of any material change in circumstances or contact details. The Firm is not responsible for consequences arising from false, incomplete or misleading information, suppression of material facts, forged documents, or the client&apos;s failure to provide instructions or cooperate.
                  </p>
                </section>

                {/* 6. Confidentiality */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">6.</span> Confidentiality
                  </h2>
                  <p>
                    The Firm will maintain the confidentiality of information received in the course of a professional engagement, subject to applicable law and professional obligations. Information may be disclosed with the client&apos;s authority, where necessary for the conduct of the matter, or where disclosure is required or permitted by law or a competent authority. The Firm will take reasonable steps to protect client information.
                  </p>
                </section>

                {/* 7. Communication and Engagement */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">7.</span> Communication and Engagement
                  </h2>
                  <p>
                    The Firm may communicate through telephone, email, messaging applications or other agreed channels. Sending an enquiry, message or document does not by itself mean that the Firm has accepted an engagement or agreed to undertake work. An advocate-client relationship is established only when the Firm accepts the engagement. The client should obtain confirmation of important instructions and agreed changes to the scope or fees.
                  </p>
                </section>

                {/* 8. Termination and Withdrawal */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">8.</span> Termination and Withdrawal
                  </h2>
                  <p>
                    Either party may seek to terminate an engagement, subject to the stage of the matter and applicable law and professional obligations. The Firm may seek to withdraw for legally permissible reasons, including non-payment, non-cooperation, conflict of interest, suppression of material facts or instructions contrary to law or professional ethics. Any withdrawal will be handled in accordance with applicable professional rules, including appropriate steps to protect the client&apos;s interests. Fees earned for services rendered and expenses incurred remain payable.
                  </p>
                </section>

                {/* 9. Website Disclaimer and Intellectual Property */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">9.</span> Website Disclaimer and Intellectual Property
                  </h2>
                  <p className="mb-4">
                    Website content is provided for general information only and is not legal advice for any particular matter. Laws and their interpretation may change; specific advice should be obtained before acting. The Firm does not warrant that website content is complete, current or applicable to every situation.
                  </p>
                  <p>
                    Website content, text, logos and designs may not be copied or commercially used without permission, except as permitted by law. External links are provided for convenience; the Firm is not responsible for third-party websites or their content.
                  </p>
                </section>

                {/* 10. Governing Law and Jurisdiction */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">10.</span> Governing Law and Jurisdiction
                  </h2>
                  <p>
                    These Terms and Conditions are governed by the laws of India. Subject to applicable law and the jurisdiction of competent courts and authorities, courts at Bengaluru, Karnataka shall have jurisdiction over disputes arising from these terms or use of the website. Nothing in these terms limits any statutory right or professional remedy available under applicable law.
                  </p>
                </section>

                {/* 11. Amendments and Contact */}
                <section className="border-t border-outline-variant/15 pt-8">
                  <h2 className="font-headline-sm font-bold text-xl md:text-2xl text-primary mb-4 flex items-center gap-3">
                    <span className="text-tertiary-fixed-dim">11.</span> Amendments and Contact
                  </h2>
                  <p className="mb-4">
                    The Firm may update these Terms and Conditions by publishing a revised version on its website. The updated version will apply from its stated effective date, subject to applicable law and any existing engagement terms. For queries, please contact Arvind Law Associates, Bengaluru, Karnataka, India, at the official email address or telephone number published on the Firm&apos;s website.
                  </p>
                  
                  <div className="bg-surface-container-high/60 rounded-xl p-5 border border-outline-variant/20 text-xs md:text-sm">
                    <p className="font-semibold text-primary mb-1">Important Note:</p>
                    <p className="text-on-surface-variant">
                      These website terms are general terms. The scope of work, fee structure, payment milestones and any matter-specific conditions should be recorded separately in the client&apos;s engagement letter or fee confirmation.
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

