import { ExternalLink } from "react-feather";
import { GitHub } from "react-feather";

import { contactsUrls } from "@/utils/config/contacts";

function GitHubLink({ size }) {
  return (
    <li className="group">
      <a
        target="_blank"
        className=" flex items-center gap-1.5"
        href={contactsUrls.github}
      >
        <div className="rounded-full p-1.5 transition-all duration-300 group-hover:bg-gray-800 dark:group-hover:bg-gray-100">
          <GitHub
            fill="currentColor"
            size={size}
            className="translate-y-0.5 text-gray-400 group-hover:text-gray-100 dark:group-hover:text-gray-700"
          />
        </div>
        <p>GitHub</p>
        <ExternalLink className="transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
      </a>
    </li>
  );
}

export default GitHubLink;
