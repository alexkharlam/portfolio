import { ExternalLink } from "react-feather";
import { Mail } from "react-feather";

import { contactsUrls } from "@/utils/config/contacts";

function GmailLink({ size }) {
  return (
    <li className="group">
      <a
        target="_blank"
        className="flex items-center gap-1.5"
        href={contactsUrls.gmail}
      >
        <div className="rounded-[15px] p-1.5 transition-all duration-300 group-hover:bg-gray-200">
          <Mail
            // fill="currentColor"
            size={size}
            className=" text-gray-400 group-hover:text-[#de3f32]"
          />
        </div>
        <p>Gmail</p>
        <ExternalLink className="transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
      </a>
    </li>
  );
}

export default GmailLink;
