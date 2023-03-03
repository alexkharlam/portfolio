import { ExternalLink } from "react-feather";
import { Instagram } from "react-feather";

import { contactsUrls } from "@/utils/config/contacts";

function InstagramLink({ size }) {
  return (
    <li className="group">
      <a
        target="_blank"
        className="flex items-center gap-1.5"
        href={contactsUrls.instagram}
      >
        <div className="rounded-[15px] from-[#feda75] via-[#d62976] to-[#4f5bd5] p-1.5 transition-all duration-300 group-hover:bg-gradient-to-b">
          <Instagram
            // fill="currentColor"
            size={size}
            className=" text-gray-400 group-hover:text-gray-100"
          />
        </div>
        <p>Instagram</p>
        <ExternalLink className="transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
      </a>
    </li>
  );
}

export default InstagramLink;
