/**
 * Fonte única de dados das habilidades.
 * Os nomes de ícone são resolvidos em src/components/IconMap.jsx,
 * mantendo este arquivo livre de JSX (dados puros).
 */
export const skills = [
  {
    id: 1,
    categoria: "Frontend",
    icon: "MdOutlineDeveloperMode",
    itens: [
      { nome: "HTML", icon: "FaHtml5" },
      { nome: "CSS", icon: "FaCss3Alt" },
      { nome: "JavaScript", icon: "FaJs" },
      { nome: "React", icon: "FaReact" },
      { nome: "Vite", icon: "SiVite" },
    ],
  },
  {
    id: 2,
    categoria: "Backend",
    icon: "FaServer",
    itens: [
      { nome: "Node.js", icon: "FaNodeJs" },
      { nome: "Java", icon: "FaJava" },
      { nome: "Spring Boot", icon: "SiSpringboot" },
      { nome: "Python", icon: "FaPython" },
    ],
  },
  {
    id: 3,
    categoria: "Banco de Dados",
    icon: "MdOutlineStorage",
    itens: [
      { nome: "MySQL", icon: "SiMysql" },
      { nome: "PostgreSQL", icon: "SiPostgresql" },
      { nome: "H2", icon: "SiH2Database" },
    ],
  },
  {
    id: 4,
    categoria: "Ferramentas",
    icon: "FiTool",
    itens: [
      { nome: "Git", icon: "FaGitAlt" },
      { nome: "GitHub", icon: "FaGithub" },
      { nome: "VS Code", icon: "VscVscode" },
      { nome: "Figma", icon: "FaFigma" },
    ],
  },
  {
    id: 5,
    categoria: "Cloud",
    icon: "FaCloud",
    itens: [{ nome: "AWS", icon: "FaAws" }],
  },
];
