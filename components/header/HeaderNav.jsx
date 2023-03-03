import Link from "next/link";

import GitHubIcon from "../ui/icons/GitHubIcon";
import LinkedInIcon from "../ui/icons/LinkedInIcon";
import ProjectsIcon from "../ui/icons/ProjectsIcon";
import { ExternalLink } from "react-feather";
import { useState } from "react";
import ThemeBtn from "./ThemeBtn";
import { Menu } from "react-feather";
import { X } from "react-feather";

function HeaderNav() {
  const iconSize = 32;
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = function () {
    setMenuActive((oldState) => !oldState);
  };

  return (
    <nav className="flex items-center gap-2.5 md:gap-4.5">
      <ul
        className={`${
          menuActive
            ? "translate-y-0 pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible -translate-y-full opacity-0"
        } absolute left-1/2 top-1/2 flex h-screen w-full -translate-x-1/2 -translate-y-1/2  transform flex-col items-center justify-center gap-3.5 bg-[#fff] transition-all duration-200 dark:bg-gray-800 md:pointer-events-auto md:visible md:relative md:left-auto md:top-auto  md:h-auto md:w-auto md:transform-none  md:flex-row md:opacity-100`}
      >
        <li className="group">
          <Link className=" flex items-center gap-1.5" href="/">
            <ProjectsIcon size={iconSize} />
            <p>Projects</p>
          </Link>
        </li>
        <li className="group">
          <a
            target="_blank"
            className=" flex items-center gap-1.5"
            href="https://github.com/alexkharlam"
          >
            <GitHubIcon size={iconSize} />
            <p>GitHub</p>
            <ExternalLink className="transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
          </a>
        </li>
        <li className="group">
          <a
            target="_blank"
            className=" flex items-center gap-1.5"
            href="https://www.linkedin.com/in/kharlam/"
          >
            <LinkedInIcon size={iconSize} />
            <p>LinkedIn</p>
            <ExternalLink className="transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
          </a>
        </li>
      </ul>
      <ThemeBtn />
      <button className="relative z-50 md:hidden" onClick={toggleMenu}>
        {!menuActive && <Menu size={32} strokeWidth={2} />}
        {menuActive && <X size={32} strokeWidth={2} />}
      </button>
    </nav>
  );
}

export default HeaderNav;
