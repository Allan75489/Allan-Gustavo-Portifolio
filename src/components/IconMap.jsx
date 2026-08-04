import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
  FaServer,
  FaCloud,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import { SiVite, SiSpringboot, SiMysql, SiPostgresql, SiH2Database } from "react-icons/si";
import { MdOutlineDeveloperMode, MdOutlineStorage, MdEmail, MdOutlineDownload } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { HiOutlineDocumentText } from "react-icons/hi2";

const icons = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
  FaServer,
  FaCloud,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  SiVite,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiH2Database,
  MdOutlineDeveloperMode,
  MdOutlineStorage,
  MdEmail,
  MdOutlineDownload,
  FiTool,
  VscVscode,
  HiOutlineDocumentText,
};

export default function Icon({ name, ...props }) {
  const Component = icons[name];
  if (!Component) return null;
  return <Component {...props} />;
}
