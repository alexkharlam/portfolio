import Link from "next/link";
import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <>
      <header className="container mx-auto flex items-center justify-between gap-2 overflow-hidden  px-2 py-2 text-lg lg:text-1xl">
        <Link href="/">
          <h1>Kharlam</h1>
        </Link>
        <HeaderNav />
      </header>
      <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-600" />
    </>
  );
}

export default Header;
