import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export default function ContactPage() {
  return (
    <main className="pt-20 md:pt-28">
      <div className="animate-in fade-in duration-500">
        <Breadcrumb
          title="Contact & Consultation"
          paths={[{ name: "Contact Us" }]}
        />

        {/* Contact Info Cards */}
        <section className="bg-surface py-24 border-b border-outline-variant/20">
          <div className="max-w-container-max mx-auto px-gutter">
            {/* Emergency Banner */}
            <div className="bg-error/10 text-error-container p-6 md:p-8 rounded-xl mb-16 flex flex-col md:flex-row items-start md:items-center gap-6 border border-error/20 shadow-sm">
              <span className="material-symbols-outlined text-error text-[40px] filled-icon shrink-0">
                warning
              </span>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-error mb-2">
                  Urgent Matters: Bail & FIR
                </h3>
                <p className="font-body-md text-body-md text-error/90 m-0">
                  For immediate legal intervention regarding arrests,
                  anticipatory bail, or urgent FIR registrations, please contact
                  our emergency response line directly.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center shrink-0 gap-2 bg-error text-on-error px-6 py-4 rounded font-label-caps text-label-caps uppercase tracking-widest hover:bg-error/90 transition-colors w-full md:w-auto"
                href="tel:09632196595"
              >
                <span className="material-symbols-outlined text-[20px]">
                  call
                </span>
                096321 96595
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address Card */}
              <div className="bg-surface-container-low p-8 rounded-xl text-center border border-outline-variant/20 hover:border-tertiary-fixed-dim transition-colors group shadow-sm">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-3xl">
                    location_on
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  Principal Office
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  No. 301/49, First Floor, Kanakapura Main Rd,
                  <br />
                  7th Block, Jayanagar,
                  <br />
                  Bengaluru, Karnataka 560070
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-surface-container-low p-8 rounded-xl text-center border border-outline-variant/20 hover:border-tertiary-fixed-dim transition-colors group shadow-sm">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-3xl">
                    mail
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  Email Inquiries
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  We typically reply within 24 hours
                  <br />
                  <a
                    href="mailto:info@arvindlawassociates.com"
                    className="hover:text-tertiary-fixed-dim transition-colors"
                  >
                    info@arvindlawassociates.com
                  </a>
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-surface-container-low p-8 rounded-xl text-center border border-outline-variant/20 hover:border-tertiary-fixed-dim transition-colors group shadow-sm">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-tertiary-fixed-dim group-hover:bg-tertiary-fixed-dim group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-3xl">
                    schedule
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  Office Hours
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Mon - Sat: 10:00 AM - 9:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maps & Form Section */}
        <section className="bg-surface-container-lowest">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
            {/* Map */}
            <div className="h-[400px] lg:h-auto w-full relative bg-surface-container-low">
              <iframe
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.684420574578!2d77.57674639999999!3d12.9279932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1519706e39e3%3A0x8ff6cbad4c93b145!2sArvind%20Law%20Associates!5e0!3m2!1sen!2sin!4v1788439672792!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Google Maps view of Arvind Law Associates"
              />
            </div>

            {/* Form */}
            <div className="p-10 lg:p-24 flex items-center bg-surface-container-lowest">
              <div className="w-full max-w-xl mx-auto">
                <div className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-4 flex items-center gap-3">
                  <img
                    src="/assets/img/core-img/hammer.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  Get In Touch
                </div>
                <h2 className="font-headline-md text-headline-md text-primary mb-8">
                  Request a Consultation
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-1">
                    <input
                      className="w-full bg-surface text-on-surface p-4 rounded border border-outline-variant/50 focus:border-tertiary-fixed-dim outline-none transition-colors placeholder:text-on-surface-variant/70"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="md:col-span-1">
                    <input
                      className="w-full bg-surface text-on-surface p-4 rounded border border-outline-variant/50 focus:border-tertiary-fixed-dim outline-none transition-colors placeholder:text-on-surface-variant/70"
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="md:col-span-1">
                    <input
                      className="w-full bg-surface text-on-surface p-4 rounded border border-outline-variant/50 focus:border-tertiary-fixed-dim outline-none transition-colors placeholder:text-on-surface-variant/70"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="md:col-span-1">
                    <select
                      className="w-full bg-surface text-on-surface p-4 rounded border border-outline-variant/50 focus:border-tertiary-fixed-dim outline-none transition-colors appearance-none"
                      name="category"
                      required
                      defaultValue=""
                    >
                      <option disabled value="">
                        Case Category...
                      </option>
                      <option value="civil">Civil Litigation</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="corporate">
                        Corporate & Commercial Law
                      </option>
                      <option value="family">Family & Matrimonial</option>
                      <option value="property">Property & Real Estate</option>
                      <option value="other">Other Matter</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <textarea
                      className="w-full bg-surface text-on-surface p-4 rounded border border-outline-variant/50 focus:border-tertiary-fixed-dim outline-none transition-colors min-h-[180px] resize-none placeholder:text-on-surface-variant/70"
                      name="message"
                      placeholder="Brief Description of Matter..."
                      required
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 mt-2">
                    <button
                      className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-container-highest hover:text-primary transition-colors uppercase tracking-widest flex items-center justify-center gap-2 w-full sm:w-auto"
                      type="submit"
                    >
                      Submit Request{" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_outward
                      </span>
                    </button>
                    <p className="font-label-caps text-label-caps text-on-surface-variant/70 mt-6 text-sm">
                      All information submitted is strictly confidential and
                      protected by attorney-client privilege.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
