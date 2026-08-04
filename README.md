# Portfólio — Allan Gustavo

Portfólio profissional desenvolvido com **React + Vite**, foco em desempenho,
organização de código e design responsivo. Tema escuro, estilo tecnológico,
com animações suaves via **Framer Motion** e ícones via **React Icons**.

## Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Outros comandos:

```bash
npm run build    # build de produção em /dist
npm run preview  # serve o build de produção localmente
npm run lint     # roda o ESLint
```

## Estrutura do projeto

```
src/
  assets/
    images/        -> foto de perfil
    projects/       -> imagens dos projetos
    certificates/    -> (opcional) certificados
  components/       -> componentes reutilizáveis (Button, Navbar, ProjectCard, ...)
  sections/         -> seções da página (Hero, About, Skills, Projects, Resume, Contact)
  data/
    projects.js      -> cadastro dos projetos (única fonte de dados)
    skills.js        -> cadastro das habilidades (única fonte de dados)
  styles/           -> CSS puro, um arquivo por componente/seção
  App.jsx
  main.jsx
```

## Personalizando o conteúdo

- **Projetos**: edite apenas `src/data/projects.js`. Cada objeto vira um
  card automaticamente (via `.map()`), sem precisar tocar em componentes.
  Categorias aceitas para o filtro: `Front-end`, `Back-end`, `Full Stack`,
  `Estudos`.
- **Habilidades**: edite apenas `src/data/skills.js`. Os ícones são
  referenciados por nome de string e resolvidos em
  `src/components/IconMap.jsx` — para adicionar uma tecnologia nova, garanta
  que o ícone também esteja importado/mapeado nesse arquivo.
- **Foto de perfil**: substitua `src/assets/images/profile.jpg`.
- **Currículo em PDF**: substitua `public/curriculo-allan-gustavo.pdf` pelo
  seu currículo real (o arquivo atual incluído é apenas um placeholder de
  exemplo gerado automaticamente).
- **Contatos**: edite os links em `src/sections/Contact.jsx` e
  `src/components/Footer.jsx` (GitHub, LinkedIn, Instagram, WhatsApp, Email).

## Stack técnica

- React 19 + Vite
- Framer Motion (animações de entrada, scroll reveal, transições de filtro)
- React Icons (ícones de tecnologias e redes sociais)
- CSS puro (variáveis/design tokens em `src/styles/variables.css`)
- Sem Tailwind, sem manipulação manual do DOM — apenas `useState`, `useEffect`,
  `.map()` e props.

Não foi necessário React Router, pois o site é uma única página (SPA) com
navegação por âncoras/scroll suave entre seções.
