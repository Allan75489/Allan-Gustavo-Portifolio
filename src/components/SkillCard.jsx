import { motion } from "framer-motion";
import Icon from "./IconMap";
import "../styles/SkillCard.css";

export default function SkillCard({ categoria, icon, itens, index = 0 }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      <div className="skill-card__header">
        <span className="skill-card__icon">
          <Icon name={icon} />
        </span>
        <h3 className="skill-card__title">{categoria}</h3>
      </div>

      <ul className="skill-card__list">
        {itens.map((item) => (
          <li key={item.nome} className="skill-card__item">
            <span className="skill-card__item-icon">
              <Icon name={item.icon} />
            </span>
            {item.nome}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
