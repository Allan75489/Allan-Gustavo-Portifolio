import { motion } from "framer-motion";
import Button from "../components/Button";
import Icon from "../components/IconMap";
import profilePhoto from "../assets/images/profile.jpg";
import "../styles/Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="">
          </motion.span>

          <motion.h1 variants={item} className="hero__title">
            Allan Gustavo
          </motion.h1>

          <motion.p variants={item} className="hero__role">
            Desenvolvedor Full Stack<span className="hero__cursor" aria-hidden="true" />
          </motion.p>

          <motion.p variants={item} className="hero__description">
            Construo interfaces modernas e sistemas robustos, unindo front-end
            cuidadoso e back-end sólido para transformar ideias em produtos
            reais. Foco em código limpo, performance e experiência do usuário.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <Button
              href="https://alan-projects.vercel.app/"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              href="/curriculo-allan-gustavo.pdf"
              download
              icon={(p) => <Icon name="MdOutlineDownload" {...p} />}
            >
              Baixar Currículo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="hero__ring" />
          <div className="hero__photo-frame">
            <img src={profilePhoto} alt="Foto de Allan Gustavo" className="hero__photo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
