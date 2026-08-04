  import laTavolaItaliana from "../assets/projects/la-tavola-italiana.jpg";
  import fornoNonnaRosa from "../assets/projects/forno-nonna-rosa.jpg";
  import fireBurgerHouse from "../assets/projects/fire-burger-house.jpg";
  import skyCast from "../assets/projects/skycast.jpg";
  import ironCoreFitness from "../assets/projects/ironcorefitness.jpg";
  import pythonDevPractice from "../assets/projects/python-dev-practice.jpg";

  export const projects = [
    {
      id: 1,
      nome: "La Tavola Italiana",
      imagem: laTavolaItaliana,
      descricao:
        "Landing page para um restaurante italiano com design sofisticado, menu interativo, animações suaves, layout responsivo e foco em experiência do usuário.",
      tecnologias: ["React", "Vite", "JavaScript"],
      categoria: "React",
      deploy: "https://la-tavola-italiana.vercel.app",
      github: "https://github.com/Allan75489/La-Tavola-Italiana",
    },
    {
      id: 2,
      nome: "Forno Nonna Rosa",
      imagem: fornoNonnaRosa,
      descricao:
        "Site web completo para pizzaria italiana premium, com cardápio digital, seções institucionais e identidade visual elegante construída em React.",
      tecnologias: ["React", "Vite", "CSS"],
      categoria: "React",
      deploy: "https://forno-nonna-rosa-x3qe.vercel.app",
      github: "https://github.com/Allan75489/Forno-Nonna-Rosa",
    },
    {
      id: 3,
      nome: "Fire Burguer House",
      imagem: fireBurgerHouse,
      descricao:
        "Landing page para hamburgueria com apresentação de produtos, catálogo, cardápio, promoções e identidade visual moderna.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      categoria: "HTML/CSS",
      deploy: "https://burger-house-website-wheat.vercel.app",
      github: "https://github.com/Allan75489/burger-house-website",
    },
    {
      id: 4,
      nome: "SkyCast",
      imagem: skyCast,
      descricao:
        "Aplicativo de previsão do tempo em tempo real, consumindo API externa, com interface responsiva e experiência fluida em qualquer dispositivo.",
      tecnologias: ["React", "Vite", "TypeScript"],
      categoria: "React",
      deploy: "https://sky-cast-ochre-delta.vercel.app",
      github: "https://github.com/Allan75489/SkyCast",
    },
    {
      id: 5,
      nome: "Iron Core Fitness",
      imagem: ironCoreFitness,
      descricao:
        "Website institucional para academias, com layout totalmente responsivo, seções de planos, treinos e contato.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      categoria: "HTML/CSS",
      deploy: "https://iron-core-fitness-xi.vercel.app",
      github: "https://github.com/Allan75489/IRON-CORE-FITNESS",
    },
    {
      id: 6,
      nome: "Práticas com Python",
      imagem: pythonDevPractice,
      descricao:
        "Repositório de estudos e práticas em Python, contendo scripts, exercícios e projetos para aprimorar habilidades na linguagem.",
      tecnologias: ["Python"],
      categoria: "Estudos",
      github: "https://github.com/Allan75489/python-dev-practice",
    },
  ];

  export const projectCategories = ["Todos", "React", "HTML/CSS", "JavaScript", "Back-end","Estudos", "Mobile"];