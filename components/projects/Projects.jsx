import ProjectItem from "./ProjectItem";

import { projects } from "@/utils/config/projects";

function Projects() {
  return (
    <main className="container mx-auto px-2">
      <h1 className="mt-3.5 text-4xl font-semibold">Portfolio projects</h1>

      <ul>
        {projects.map((proj, idx) => {
          const even = idx % 2 === 0;
          return (
            <ProjectItem reverse={even} key={proj.id} projectData={proj} />
          );
        })}
      </ul>
    </main>
  );
}

export default Projects;
