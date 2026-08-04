import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Habilidades &amp; Tecnologias</h2>
          <p className="section-subtitle">
            Ferramentas e linguagens que uso no dia a dia para construir
            produtos digitais do front-end ao back-end.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skills.map((group, index) => (
            <SkillCard
              key={group.id}
              categoria={group.categoria}
              icon={group.icon}
              itens={group.itens}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
