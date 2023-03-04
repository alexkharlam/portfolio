import { ExternalLink } from "react-feather";
import TechStack from "./TechStack";
import ProjectsImgLink from "./ProjectsImgLink";

function Home() {
  return (
    <main className="container mx-auto py-3.5 px-2">
      <section className="flex flex-col gap-3 md:flex-row lg:gap-5">
        <div className="md:w-1/2">
          <p className="mb-3 text-4xl font-semibold">👋 Hello!</p>
          <p className="mb-2">
            Welcome to my portfolio website, where you can explore pet projects
            I made and see info about me
          </p>
          <a
            target="_blank"
            href="/Aleksei-Kharlamov-CV.pdf"
            className="mb-3.5 flex items-center gap-1.5 text-primary-700 hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-500"
          >
            <p className="underline">My resume (pdf)</p>
            <ExternalLink />
          </a>
          <p className="mb-3">
            Here are some of technologies that I have experience with:
          </p>
          <TechStack />
        </div>

        <ProjectsImgLink />
      </section>
    </main>
  );
}

export default Home;
