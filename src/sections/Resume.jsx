import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaEye, FaDownload } from "react-icons/fa";
import Button from "../components/Button";
import "../styles/Resume.css";

const RESUME_PATH = "curriculo-allan-gustavo.pdf";

export default function Resume() {
  return (
    <section id="curriculo" className="section resume">
      <div className="container">
        <motion.div
          className="resume__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="resume__icon">
            <HiOutlineDocumentText />
          </div>
          <h2 className="section-title">Currículo</h2>
          <p className="resume__description">
            Quer conhecer minha trajetória, formação e experiências com mais
            detalhes? Visualize ou baixe meu currículo completo em PDF.
          </p>

          <div className="resume__actions">
            <Button href={RESUME_PATH} target="_blank" icon={FaEye}>
              Visualizar Currículo
            </Button>
            <Button href={RESUME_PATH} variant="outline" icon={FaDownload} download>
              Download PDF
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
