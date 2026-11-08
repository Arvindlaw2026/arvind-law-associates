import Link from 'next/link';

export const teamMembers = [
  {
    name: 'Advocate Sandesh Arvind',
    role: 'Founder & Principal Advocate',
    badge: 'Founder',
    badgeClass: 'bg-tertiary-fixed-dim text-on-tertiary-fixed border border-amber-400/50',
    image: '/assets/img/team/WhatsApp_Image_2026-10-07_at_2.44.37_PM.webp',
    specialties: ['High Court Practice', 'Strategic Litigation', 'Commercial & Civil'],
    description:
      'Founder and principal advocate of Arvind Law Associates, leading courtroom litigation and strategic advisory before the High Court of Karnataka, District Courts, Family Courts, and specialised forums.',
    consultationLink: '/contact?lawyer=sandesh-arvind'
  },
  {
    name: 'Advocate Sudheer K N',
    role: 'Partner',
    badge: 'Partner',
    badgeClass: 'bg-primary text-tertiary-fixed-dim border border-tertiary-fixed-dim/40',
    image: '/assets/img/team/WhatsApp_Image_2026-10-06_at_9.05.36_PM.webp',
    specialties: ['Family Law', 'Civil Litigation', 'Property Matters'],
    description:
      'Partner heading family, civil, and property matters with extensive trial expertise in matrimonial disputes, property title search & verification, partitions, and injunction proceedings.',
    consultationLink: '/contact?lawyer=sudheer-kn'
  },
  {
    name: 'Gagan Shanmuga',
    role: 'Marriage Counsellor',
    badge: 'Marriage Counsellor',
    badgeClass: 'bg-surface-container-high text-primary border border-outline-variant/40',
    image: '/assets/img/team/WhatsApp_Image_2026-10-06_at_9.05.39_PM.webp',
    specialties: ['Marriage Counselling', 'Mediation', 'Dispute Resolution'],
    description:
      'Professional marriage and family counsellor specializing in relationship conflict mediation, pre-litigation conciliation, and compassionate guidance to achieve constructive resolution.',
    consultationLink: '/contact?lawyer=gagan-shanmuga'
  }
];

export default function TeamSection({ 
  className = '', 
  showHeader = true, 
  title = 'Our Legal Team & Leadership', 
  subtitle = 'The People Behind Arvind Law Associates' 
}) {
  return (
    <section id="team" className={`py-section-gap bg-surface relative overflow-hidden scroll-mt-20 md:scroll-mt-28 ${className}`}>
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-tertiary-fixed-dim/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="px-gutter max-w-container-max mx-auto relative z-10">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-label-caps text-label-caps text-tertiary-dark uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              <img src="/assets/img/core-img/hammer.png" alt="" className="w-5 h-5 object-contain" width="20" height="20" loading="lazy" />
              <span>{subtitle}</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-4 leading-tight">
              {title}
            </h2>
            <div className="w-12 h-1 bg-tertiary-fixed-dim mx-auto mb-6" />
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Our firm combines courtroom-tested advocacy, specialized legal expertise, and empathetic counseling to safeguard our clients&apos; rights and deliver lasting solutions.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:border-tertiary-fixed-dim/50 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Photo Frame - Pure white background to match transparent/white portrait headshots */}
              <div className="relative bg-white pt-6 px-4 overflow-hidden flex items-end justify-center border-b border-outline-variant/15">
                {/* Floating Role Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`font-label-caps text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold shadow-sm ${member.badgeClass}`}
                  >
                    {member.badge}
                  </span>
                </div>

                {/* Team Portrait */}
                <div className="w-full h-80 overflow-hidden flex items-end justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    width="320"
                    height="320"
                    className="h-full w-auto max-w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <p className="font-label-caps text-xs text-tertiary-dark uppercase tracking-widest font-semibold mb-1">
                  {member.role}
                </p>
                <h3 className="font-headline-sm text-2xl text-primary font-bold mb-3 group-hover:text-tertiary-fixed-dim transition-colors">
                  {member.name}
                </h3>

                {/* Specialty Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-block bg-surface-container-low text-primary text-[11px] font-medium px-2.5 py-1 rounded-md border border-outline-variant/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Footer Consultation Action */}
                <div className="mt-auto pt-4 border-t border-outline-variant/15 flex items-center justify-between">
                  <Link
                    href={member.consultationLink}
                    className="font-label-caps text-xs uppercase tracking-widest font-semibold text-primary group-hover:text-tertiary-fixed-dim transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Schedule Consultation</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">
                      arrow_forward
                    </span>
                  </Link>

                  <Link
                    href="tel:09632196595"
                    className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary/70 hover:text-tertiary-fixed-dim hover:bg-primary transition-colors border border-outline-variant/20"
                    title="Call Office: 096321 96595"
                  >
                    <span className="material-symbols-outlined text-sm" data-icon="call">call</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
