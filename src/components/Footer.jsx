import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Allan75489", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/allan-gustavo-da-silva-carvalho-ba97813b3/", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/allangustavocarvalho?igsh=MXg2dzA2dmQzd2p4NQ==", icon: FaInstagram },
  { label: "WhatsApp", href: "https://wa.me/5583991998747", icon: FaWhatsapp },
  { label: "Email", href: "mailto:alangustavodasilvacarvalho@gmail.com", icon: MdEmail },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__copy">© {new Date().getFullYear()} Allan Gustavo</span>
        </div>

        <ul className="footer__social">
          {SOCIAL_LINKS.map(({ label, href, icon: IconComponent }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="footer__social-link"
              >
                <IconComponent />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
