import Image from "next/image";
import Link from "next/link";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./icons";

const INFORMATION_LINKS = [
  { label: "Contact Us", href: "#contact" },
  { label: "Refund Policy", href: "#refund" },
  { label: "Shipping Policy", href: "#shipping" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
];

const SOCIAL_LINKS = [
  { platform: "Instagram", href: "https://www.instagram.com/rich_mindset210", icon: InstagramIcon },
  { platform: "Facebook", href: "#facebook", icon: FacebookIcon },
  { platform: "Twitter", href: "#twitter", icon: TwitterIcon },
  { platform: "TikTok", href: "#tiktok", icon: TikTokIcon },
  { platform: "YouTube", href: "#youtube", icon: YouTubeIcon },
];

export function Footer() {
  return (
    <footer className="bg-[#010101] text-white">
      <div className="mx-auto max-w-[1300px] px-10 py-[50px]">
        {/* Main grid: About + Information */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* About */}
          <div>
            <h2 className="text-[24.42px] tracking-[1.221px] font-sans font-normal mb-4">
              About
            </h2>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-white.svg"
                alt="Rich Mindset"
                width={150}
                height={39}
                className="h-[39px] w-[150px]"
              />
            </Link>
            <p className="text-sm leading-[21px] mb-2">
              Rich Mindset... a brand that represents who you are and the legacy
              you building. A commitment to becoming the best version of
              yourself every single day.
            </p>
            <Link href="#about" className="text-sm underline">
              Read more...
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label={social.platform}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <h2 className="text-[24.42px] tracking-[1.221px] font-sans font-normal mb-4">
              Information
            </h2>
            <ul className="list-none m-0 p-0 space-y-1">
              {INFORMATION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm leading-[21px] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
