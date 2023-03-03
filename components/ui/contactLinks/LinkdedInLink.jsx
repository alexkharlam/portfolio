import { contactsUrls } from "@/utils/config/contacts";
import { ExternalLink } from "react-feather";

import { Linkedin } from "react-feather";

function LinkdedInLink({ size }) {
  return (
    <li className="group">
      <a
        target="_blank"
        className="flex items-center gap-1.5"
        href={contactsUrls.linkedin}
      >
        <div className="rounded-sm p-1.5 transition-all duration-300 group-hover:bg-[#0a66c2]">
          <Linkedin
            size={size}
            strokeWidth={1}
            fill="currentColor"
            fillOpacity={1}
            stroke="currentColor"
            strokeOpacity={1}
            className=" text-gray-400 group-hover:text-gray-100 "
          />
        </div>
        <p>LinkedIn</p>
        <ExternalLink className="transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
      </a>
    </li>
  );
}

export default LinkdedInLink;
