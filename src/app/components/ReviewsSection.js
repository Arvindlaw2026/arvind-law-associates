'use client';

import { useState } from 'react';
import { reviewsData } from '../data/reviewsData';

export default function ReviewsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    'All',
    'Family & Divorce',
    'Property & Civil',
    'Cheque Bounce & Cyber',
    'General Litigation',
  ];

  const filteredReviews = activeCategory === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.tag === activeCategory);

  const displayedReviews = filteredReviews.slice(0, visibleCount);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredReviews.length));
  };

  return (
    <section id="reviews" className="py-section-gap bg-surface relative overflow-hidden scroll-mt-20 md:scroll-mt-28 border-t border-outline-variant/20">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tertiary-fixed-dim/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="px-gutter max-w-container-max mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-label-caps text-label-caps text-tertiary-dark uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-amber-500 text-lg">verified</span>
            <span>Client Testimonials</span>
          </div>
          <h2 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md text-primary mb-4 leading-tight">
            What Our Clients Say
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Genuine feedback and experiences shared by clients represented before the High Court of Karnataka, District Courts, Family Courts, and specialised forums.
          </p>

          {/* Rating Summary Badge */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2">
              {/* Google G icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="font-headline-sm text-2xl font-bold text-primary">5.0</span>
            </div>

            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-lg leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>

            <div className="hidden sm:block h-6 w-px bg-outline-variant/30" />

            <div className="text-xs text-on-surface-variant font-label-caps uppercase tracking-wider text-left">
              <span className="font-bold text-primary">45+ Reviews</span> on Google
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? reviewsData.length 
              : reviewsData.filter(r => r.tag === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`font-label-caps text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                  isActive
                    ? 'bg-primary text-on-primary border-primary shadow-sm font-semibold'
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-tertiary-fixed-dim hover:text-primary'
                }`}
              >
                {cat} <span className="opacity-70 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedReviews.map((review) => {
            const initials = review.name
              .split(' ')
              .map(n => n[0])
              .filter(Boolean)
              .slice(0, 2)
              .join('')
              .toUpperCase() || 'AL';

            return (
              <div
                key={review.id}
                className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: User info & Google icon */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center border border-primary/20 shrink-0">
                        {initials}
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-base font-bold text-primary group-hover:text-tertiary-dark transition-colors line-clamp-1">
                          {review.name}
                        </h3>
                        <p className="text-[11px] text-on-surface-variant/70 line-clamp-1 font-body-md">
                          {review.profile || 'Verified Client'}
                        </p>
                      </div>
                    </div>
                    {/* Google G watermark */}
                    <div className="w-5 h-5 opacity-70 shrink-0">
                      <svg viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    </div>
                  </div>

                  {/* Stars & Date */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-outline-variant/15 text-xs text-on-surface-variant/70">
                    <div className="flex items-center text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[16px] leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                    <time className="text-[11px] font-medium">{review.date}</time>
                  </div>

                  {/* Review Text */}
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
                  <span className="inline-block text-[10px] font-label-caps uppercase tracking-wider text-primary/80 bg-primary/5 px-2.5 py-1 rounded-md font-semibold border border-primary/10">
                    {review.tag}
                  </span>
                  <span className="text-[10px] text-on-surface-variant/60 font-label-caps uppercase tracking-widest">
                    Google Review
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredReviews.length && (
          <div className="text-center">
            <button
              type="button"
              onClick={loadMore}
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-all uppercase tracking-widest inline-flex items-center gap-2 shadow-sm"
            >
              <span>Load More Reviews</span>
              <span className="text-xs opacity-75">
                ({visibleCount} of {filteredReviews.length})
              </span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

