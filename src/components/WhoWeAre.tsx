import Image from "next/image";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <section data-testid="who-we-are" className="bg-brand-midnight py-[60px]">
      <div className="mx-auto max-w-[1300px] px-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image */}
          <div className="w-full md:w-[57%] px-5 mb-8 md:mb-0">
            <Image
              src="/images/who-we-are.svg"
              alt="Rich Mindset lifestyle"
              width={695}
              height={1042}
              className="w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-[43%] px-5 md:pl-10 text-center">
            <h2
              className="text-[37px] tracking-[0.08em] text-white font-semibold uppercase mb-4"
              style={{ fontFamily: "'Clash Display', 'Archivo', sans-serif" }}
            >
              WHO WE ARE
            </h2>
            <p className="text-base leading-6 tracking-[0.8px] text-white font-sans mb-6">
              Rich Mindset is a way of life. Inspired by that young and hungry
              individual looking for purpose through a world of chaos, it&apos;s
              our lifestyle. A commitment to becoming the best version of
              yourself every single day.
            </p>
            <Link
              href="#about"
              className="inline-block border-2 border-brand-orange bg-brand-orange text-brand-midnight px-[25px] py-[10px] rounded-[35px] text-base tracking-[0.8px] font-sans transition-colors duration-150 hover:bg-transparent hover:text-brand-orange"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
