import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/ProjectCard.css";

export default function ProjectCard({ project, index = 0, onDetails }) {
  return (
    <motion.article
      className="project-card"
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <div className="project-card__image-wrap">
        <img src={project.imagem} alt={project.nome} className="project-card__image" loading="lazy" />
        <span className="project-card__category">{project.categoria}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.nome}</h3>
        <p className="project-card__description">{project.descricao}</p>

        <ul className="project-card__tags">
          {project.tecnologias.map((tech) => (
            <li key={tech} className="project-card__tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__footer">
          <div className="project-card__links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__icon-link"
              aria-label={`Repositório do projeto ${project.nome} no GitHub`}
            >
              <FaGithub />
            </a>
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__icon-link"
              aria-label={`Ver deploy do projeto ${project.nome}`}
            >
              <FaExternalLinkAlt />
            </a>
          </div>
          <button className="project-card__details" onClick={() => onDetails(project)}>
            Ver Detalhes
          </button>
        </div>
      </div>
    </motion.article>
  );
}
