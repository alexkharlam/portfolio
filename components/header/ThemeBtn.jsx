import { useEffect, useState } from "react";
import { Moon } from "react-feather";
import { Sun } from "react-feather";

function ThemeBtn() {
  const size = 32;
  const strokeWidth = 1.5;
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = function () {
    setIsDarkTheme((oldState) => !oldState);
    document.querySelector("html").classList.toggle("dark");
    // todo: instead of selectins element in the dom, use context/redux/mobX to control the state and change class of another element, to avoid dom manipulation.
    localStorage.setItem("theme", "dark");
  };

  return (
    <div className="flex items-start gap-1">
      <button onClick={toggleTheme} type="button" className="group">
        {isDarkTheme && (
          <Moon
            size={size}
            strokeWidth={strokeWidth}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        )}

        {!isDarkTheme && (
          <Sun
            size={size}
            strokeWidth={strokeWidth}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </button>
    </div>
  );
}

export default ThemeBtn;
