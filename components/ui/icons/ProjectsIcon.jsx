import { Award } from "react-feather";

function ProjectsIcon({ size }) {
  return (
    <div className="rounded-sm p-1.5 transition-all duration-300 group-hover:bg-primary-500">
      <Award
        size={size}
        className="text-primary-600 group-hover:text-gray-100"
      />
    </div>
  );
}

export default ProjectsIcon;
