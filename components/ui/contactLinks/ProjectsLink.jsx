import Link from "next/link";

import { Award } from "react-feather";

function ProjectsLink({ size }) {
  return (
    <li className="group">
      <Link className=" flex items-center gap-1.5" href="/">
        <div className="rounded-sm p-1.5 transition-all duration-300 group-hover:bg-primary-500">
          <Award
            size={size}
            className="text-primary-600 group-hover:text-gray-100"
          />
        </div>
        <p>Projects</p>
      </Link>
    </li>
  );
}

export default ProjectsLink;
