import Image from "next/image";
import Link from "next/link";
import type { CategoryTile } from "@/types/content";

interface CategoryTilesProps {
  tiles: CategoryTile[];
}

export function CategoryTiles({ tiles }: CategoryTilesProps) {
  return (
    <section className="my-[60px]">
      <div className="mx-auto max-w-[1300px] px-10">
        <div className="flex justify-center flex-wrap md:flex-nowrap -mx-5 -mb-10">
          {tiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="skrim-link block relative w-[275px] h-[275px] md:w-[275px] md:h-[275px] w-[158px] h-[158px]"
            >
              <div className="skrim-overlay w-full h-full">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  width={275}
                  height={275}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-[2]">
                <span className="font-heading text-[21px] text-white tracking-[0.527px] text-center">
                  {tile.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
