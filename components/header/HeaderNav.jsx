import { useState } from "react";
import { Menu } from "react-feather";
import { X } from "react-feather";

import ThemeBtn from "./ThemeBtn";
import GitHubLink from "../ui/contactLinks/GitHubLink";
import LinkdedInLink from "../ui/contactLinks/LinkdedInLink";
import ProjectsLink from "../ui/contactLinks/ProjectsLink";

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
        <ProjectsLink size={iconSize} />
        <GitHubLink size={iconSize} />
        <LinkdedInLink size={iconSize} />
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
