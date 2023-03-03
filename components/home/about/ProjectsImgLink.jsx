import Image from "next/image";
import Link from "next/link";

function ProjectsImgLink() {
  return (
    <Link
      href="/projects"
      className="group relative mx-auto mt-3 h-6 w-full overflow-hidden rounded-lg shadow-lg md:h-auto md:w-1/2"
    >
      <p className="absolute top-1/2 left-1/2 z-10 w-full -translate-y-1/2 -translate-x-1/2 text-center text-2xl font-semibold text-gray-200 transition-transform duration-500 group-hover:scale-110">
        See all projects
      </p>
      <Image
        sizes="100vw,
               (min-width: 640px) 616px,
               (min-width: 768px) 360px,
               (min-width: 1024px) 452px,
               (min-width: 1280px) 580px,
               (min-width: 1536px) 708px,

               "
        placeholder="blur"
        blurDataURL="/reelratesmall.png"
        src="/reelrate.png"
        fill
        className="overflow:hidden animate-positionMove object-cover brightness-50 transition-all duration-500 group-hover:scale-125 group-hover:brightness-75"
        alt="reelrate website image"
      />
    </Link>
  );
}

export default ProjectsImgLink;
