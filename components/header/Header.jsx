import Link from "next/link";
import HeaderNav from "./HeaderNav";
import ThemeBtn from "./ThemeBtn";

function Header() {
  return (
    <>
      <header className="container mx-auto flex items-center justify-between gap-2 overflow-hidden  px-2 py-2 text-lg lg:text-2xl">
        <Link href="/">
          <h1>Kharlamov Alex</h1>
        </Link>
        <HeaderNav />
        {/* <ThemeBtn /> */}
      </header>
      <div className="h-0.5 w-full bg-gray-200 transition-colors duration-300 dark:bg-gray-600" />
    </>
  );
}

export default Header;
