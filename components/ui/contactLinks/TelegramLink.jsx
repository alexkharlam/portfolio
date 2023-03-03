import { ExternalLink } from "react-feather";
import { Navigation } from "react-feather";

import { contactsUrls } from "@/utils/config/contacts";

function TelegramLink({ size }) {
  return (
    <li className="group">
      <a
        target="_blank"
        className="flex items-center gap-1.5"
        href={contactsUrls.telegram}
      >
        <div className="rounded-full p-1.5 transition-all duration-300 group-hover:bg-[#26a5e4]">
          <Navigation
            fill="currentColor"
            size={size}
            className="translate-y-0.5 text-gray-400 group-hover:text-gray-100"
          />
        </div>
        <p>Telegram</p>
        <ExternalLink className="transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
      </a>
    </li>
  );
}

export default TelegramLink;
