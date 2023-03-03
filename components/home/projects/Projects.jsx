import Image from "next/image";

function Projects() {
  return (
    <div className="relative md:w-1/2" id="projects">
      <div className=" flex items-center justify-between p-3">
        <h2 className="text-3xl font-semibold">🧾 Projects</h2>
      </div>
      <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-600"></div>

      <div className="relative mx-auto mt-3 h-7.5 w-3/4 rounded-lg shadow-xl">
        <Image
          src="/reelrate.png"
          fill
          className="animate-positionMove object-cover transition-all duration-1000"
          alt="reelrate website image"
        />
      </div>
    </div>
  );
}

export default Projects;
