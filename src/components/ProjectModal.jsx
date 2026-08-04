import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import "../styles/ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Detalhes do projeto ${project.nome}`}
          >
            <button className="project-modal__close" onClick={onClose} aria-label="Fechar">
              <FaTimes />
            </button>

            <img src={project.imagem} alt={project.nome} className="project-modal__image" />

            <div className="project-modal__body">
              <span className="project-modal__category">{project.categoria}</span>
              <h3 className="project-modal__title">{project.nome}</h3>
              <p className="project-modal__description">{project.descricao}</p>

              <ul className="project-modal__tags">
                {project.tecnologias.map((tech) => (
                  <li key={tech} className="project-modal__tag">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="project-modal__actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  <FaGithub className="btn__icon" /> <span>Código no GitHub</span>
                </a>
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <FaExternalLinkAlt className="btn__icon" /> <span>Ver Deploy</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
