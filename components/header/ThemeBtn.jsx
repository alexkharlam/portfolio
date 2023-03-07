import { useEffect, useState } from "react";
import { Moon } from "react-feather";
import { Sun } from "react-feather";

function ThemeBtn() {
  const iconSize = 32;
  const strokeWidth = 1.5;
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (isDarkTheme === true)
      document.querySelector("html").classList.add("dark");
    if (isDarkTheme === false)
      document.querySelector("html").classList.remove("dark");
  }, [isDarkTheme]);

  const toggleTheme = function () {
    setIsDarkTheme((oldState) => !oldState);
  };

  return (
    <div className="flex items-start gap-1">
      <button onClick={toggleTheme} type="button" className="group">
        {isDarkTheme && (
          <Moon
            size={iconSize}
            strokeWidth={strokeWidth}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        )}

        {!isDarkTheme && (
          <Sun
            size={iconSize}
            strokeWidth={strokeWidth}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </button>
    </div>
  );
}

export default ThemeBtn;
