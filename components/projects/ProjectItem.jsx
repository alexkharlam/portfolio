import Image from "next/image";
import ProjectItemLinks from "./ProjectItemLinks";

function ProjectItem({ projectData, reverse }) {
  const {
    id,
    title,
    themeDescription,
    techDescription,
    webLink,
    gitHubLink,
    imgPath,
  } = projectData;

  return (
    <li
      className={`mb-4 flex flex-col items-center justify-between gap-4 md:flex-row ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2">
        <h2 className="mb-3 text-3xl font-semibold">{title}</h2>
        <p className="mb-3.5">{themeDescription}</p>
        <p className="mb-4">{techDescription}</p>

        <ProjectItemLinks webLink={webLink} gitHubLink={gitHubLink} />
      </div>
      <div className="relative h-7 w-full overflow-hidden rounded-lg shadow-lg dark:border-2 dark:border-gray-600 dark:shadow-2xl dark:shadow-gray-700 md:h-8 md:w-1/2">
        <Image
          className=" object-cover object-top"
          alt="reelrate"
          src={imgPath}
          fill
        />
      </div>
    </li>
  );
}

export default ProjectItem;
