const ANNOUNCEMENT_TEXT = "First 50 purchases come with a free hat";

// The track is full-bleed (100vw) and animates 0 → -50%, which is seamless only
// if one group of copies is at least as wide as the widest viewport we support.
// Each copy is ~523px, so 8 copies (~4184px) covers viewports up to ~3660px.
// Group 2 is an identical copy so that, at the -50% wrap, it lands exactly where
// group 1 started — no jump, gap, or flash.
const COPIES_PER_GROUP = 8;

export function AnnouncementBar() {
  return (
    <div className="relative z-[24] overflow-hidden bg-black py-2">
      {/* Pure CSS marquee — stays a Server Component (no "use client" needed) */}
      <div className="announcement-marquee font-sans text-base uppercase tracking-[0.2em] text-white">
        <div className="flex shrink-0">
          {Array.from({ length: COPIES_PER_GROUP }).map((_, i) => (
            <span key={i} className="whitespace-nowrap pr-8">
              {ANNOUNCEMENT_TEXT}
            </span>
          ))}
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          {Array.from({ length: COPIES_PER_GROUP }).map((_, i) => (
            <span key={i} className="whitespace-nowrap pr-8">
              {ANNOUNCEMENT_TEXT}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
