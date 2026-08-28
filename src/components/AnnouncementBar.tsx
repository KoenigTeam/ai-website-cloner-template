import { SiteContainer } from "./SiteContainer";

const ANNOUNCEMENT_TEXT = "Free Shipping On All U.S. Orders Over $125";

export function AnnouncementBar() {
  return (
    <div className="relative z-[24] overflow-hidden bg-black py-2">
      {/* Pure CSS marquee — stays a Server Component (no "use client" needed) */}
      <SiteContainer>
        <div className="announcement-marquee font-sans text-base uppercase tracking-[0.2em] text-white">
          <span className="whitespace-nowrap pr-8">{ANNOUNCEMENT_TEXT}</span>
          <span className="whitespace-nowrap pr-8" aria-hidden="true">
            {ANNOUNCEMENT_TEXT}
          </span>
        </div>
      </SiteContainer>
    </div>
  );
}
