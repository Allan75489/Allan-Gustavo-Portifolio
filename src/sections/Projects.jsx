import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterBar from "../components/FilterBar";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects, projectCategories } from "../data/projects";
import "../styles/Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return projects;
    return projects.filter((project) => project.categoria === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projetos" className="section section--alt projects">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">
            Uma seleção de trabalhos que reúnem front-end, back-end e estudos
            práticos. Use os filtros para navegar por categoria.
          </p>
        </motion.div>

        <FilterBar
          categories={projectCategories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onDetails={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="projects__empty">
            Ainda não há projetos cadastrados nesta categoria. Volte em breve!
          </p>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
