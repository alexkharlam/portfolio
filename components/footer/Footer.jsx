import GitHubLink from "../ui/contactLinks/GitHubLink";
import GmailLink from "../ui/contactLinks/GmailLink";
import InstagramLink from "../ui/contactLinks/InstagramLink";
import LinkdedInLink from "../ui/contactLinks/LinkdedInLink";
import TelegramLink from "../ui/contactLinks/TelegramLink";

function Footer() {
  const iconSize = 32;

  return (
    <footer className="container mx-auto px-2 py-3">
      <nav className="">
        <ul className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-5">
          <GitHubLink size={iconSize} />
          <LinkdedInLink size={iconSize} />
          <TelegramLink size={iconSize} />
          <GmailLink size={iconSize} />
          <InstagramLink size={iconSize} />
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
