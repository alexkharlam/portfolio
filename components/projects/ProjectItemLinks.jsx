function ProjectItemLinks({ webLink, gitHubLink }) {
  return (
    <div className="mx-auto flex w-3/4 flex-col gap-2 text-center sm:w-1/2 md:w-full lg:flex-row">
      <a
        target="_blank"
        className=" block rounded-lg bg-primary-600 px-3 py-2 text-1xl text-gray-100 transition-colors duration-300 hover:bg-primary-500
          "
        href={webLink}
      >
        Go to website
      </a>

      <a
        target="_blank"
        className="block rounded-lg bg-gray-200  px-3 py-2  text-1xl transition-colors duration-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500"
        href={gitHubLink}
      >
        Project on GitHub
      </a>
    </div>
  );
}

export default ProjectItemLinks;
