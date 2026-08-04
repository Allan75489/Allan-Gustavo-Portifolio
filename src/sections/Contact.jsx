import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Contact.css";

const CONTACTS = [
  {
    label: "GitHub",
    value: "",
    href: "https://github.com/Allan75489",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "",
    href: "https://www.linkedin.com/in/allan-gustavo-da-silva-carvalho-ba97813b3/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    value: "",
    href: "https://www.instagram.com/allangustavocarvalho?igsh=MXg2dzA2dmQzd2p4NQ==",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    value: "",
    href: "https://wa.me/5583991998747",
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    value: "",
    href: "mailto:alangustavodasilvacarvalho@gmail.com",
    icon: MdEmail,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="section section--alt contact">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Vamos conversar?</h2>
          <p className="section-subtitle">
            Estou aberto a oportunidades, freelas e parcerias. Escolha o canal
            que preferir e entre em contato.
          </p>
        </motion.div>

        <div className="contact__grid">
          {CONTACTS.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
              >
                <span className="contact-card__icon">
                  <IconComponent />
                </span>
                <span className="contact-card__text">
                  <span className="contact-card__label">{contact.label}</span>
                  <span className="contact-card__value">{contact.value}</span>
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
