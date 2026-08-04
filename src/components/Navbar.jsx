import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";
import "../styles/Navbar.css";

const NAV_ITEMS = [
  { id: "inicio", label: "inicio" },
  { id: "sobre", label: "sobre" },
  { id: "skills", label: "skills" },
  { id: "projetos", label: "projetos" },
  { id: "curriculo", label: "curriculo" },
  { id: "contato", label: "contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { activeId, scrolled } = useActiveSection(NAV_ITEMS.map((i) => i.id));

  const handleNavigate = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container">
        <button className="navbar__brand" onClick={() => handleNavigate("inicio")}>
          <span className="navbar__brand-bracket">&lt;</span>
          Allan<span className="navbar__brand-accent">.dev</span>
          <span className="navbar__brand-bracket">/&gt;</span>
        </button>

        <ul className="navbar__links navbar__links--desktop">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`navbar__link ${activeId === item.id ? "is-active" : ""}`}
                onClick={() => handleNavigate(item.id)}
              >
                <span className="navbar__link-comment">//</span> {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="navbar__links navbar__links--mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`navbar__link ${activeId === item.id ? "is-active" : ""}`}
                  onClick={() => handleNavigate(item.id)}
                >
                  <span className="navbar__link-comment">//</span> {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
