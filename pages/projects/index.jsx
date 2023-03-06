import Projects from "@/components/projects/Projects";
import TransitionMotion from "@/components/ui/TransitionMotion";

function ProjectsPage() {
  return (
    <TransitionMotion>
      <Projects />
    </TransitionMotion>
  );
}

export default ProjectsPage;
