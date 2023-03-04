import GitHubLink from "../ui/contactLinks/GitHubLink";
import GmailLink from "../ui/contactLinks/GmailLink";
import InstagramLink from "../ui/contactLinks/InstagramLink";
import LinkdedInLink from "../ui/contactLinks/LinkdedInLink";
import TelegramLink from "../ui/contactLinks/TelegramLink";

function Footer() {
  return (
    <footer className="container mx-auto px-2 py-3">
      {/* <p className="mb-3 text-3xl font-semibold">📃 Contacts</p> */}
      <nav className="">
        <ul className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-5">
          <GitHubLink size={32} />
          <LinkdedInLink size={32} />
          <TelegramLink size={32} />
          <GmailLink size={32} />
          <InstagramLink size={32} />
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
