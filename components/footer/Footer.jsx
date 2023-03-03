import { contacts } from "@/utils/config/contacts";

function Footer() {
  return (
    <footer className="container mx-auto px-2">
      <p className="text-3xl font-semibold">📃 Contacts</p>
      <nav>
        <ul>
          {contacts.map((contact) => (
            <li>
              <a href={contact.url}>{contact.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
