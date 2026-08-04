import { motion } from "framer-motion";
import "../styles/About.css";

const facts = [
  { label: "Estudante de Sistemas para Internet" },
  { label: "Desenvolvedor Full Stack" },
  { label: "Apaixonado por tecnologia" },
  { label: "Sempre aprendendo novas tecnologias" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <motion.div
          className="about__text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span custom={0} variants={fadeUp} className="">
          </motion.span>
          <motion.h2 custom={1} variants={fadeUp} className="section-title">
            Quem é Allan Gustavo
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="about__paragraph">
            Sou estudante de Sistemas para Internet e desenvolvedor full stack,
            movido pela curiosidade de entender como as coisas funcionam por
            trás da tela. Gosto de transformar problemas reais em interfaces
            simples e sistemas eficientes, sempre buscando equilíbrio entre
            boa experiência do usuário e código bem estruturado.
          </motion.p>
          <motion.p custom={3} variants={fadeUp} className="about__paragraph">
            Estou constantemente estudando novas tecnologias  do front-end ao
            back-end  e acredito que aprendizado contínuo é parte essencial
            da carreira de quem programa. Cada projeto é uma oportunidade de
            evoluir um pouco mais.
          </motion.p>
        </motion.div>

        <motion.div
          className="about__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <span className="about__card-title">perfil.json</span>
          <ul className="about__facts">
            {facts.map((fact, i) => (
              <li key={fact.label} className="about__fact">
                <span className="about__fact-index">0{i + 1}</span>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
