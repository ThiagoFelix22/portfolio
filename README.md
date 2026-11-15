# Portfólio

Meu portfólio pessoal de desenvolvedor front-end, com apresentação, habilidades e contato.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## Sobre o projeto

Site de uma página que me apresenta para recrutadores e clientes. Foi feito com componentes React separados por seção, e cada seção tem o seu próprio CSS.

## Seções

- **Início:** apresentação com efeito de digitação, botões e redes sociais
- **Sobre mim:** quem sou e o que busco
- **Habilidades:** tecnologias agrupadas por categoria
- **Trajetória:** linha do tempo com formação, cursos e experiências
- **Projetos:** cards com imagem, tecnologias e links de demo e código
- **Contato:** e-mail, LinkedIn e GitHub
- **Navbar fixa:** destaca a seção atual enquanto você rola a página

Extras: animações de entrada ao rolar, botão de voltar ao topo, layout responsivo e respeito à preferência de "reduzir movimento" do sistema.

## Tecnologias

React 19, Vite, JavaScript, HTML, CSS e ícones do [Lucide](https://lucide.dev/).

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20+.

```bash
git clone https://github.com/ThiagoFelix22/portfolio.git
cd portfolio
npm install
npm run dev
```

Abra o endereço que o Vite mostrar no terminal (normalmente `http://localhost:5173`).

## Estrutura

```
src/
├── data/
│   └── perfil.js      # e-mail, LinkedIn, GitHub, currículo e cargos
└── components/
    ├── Navbar/
    ├── Hero/
    ├── About/
    ├── Skills/
    ├── Journey/       # Trajetória
    ├── Projects/
    ├── Contact/
    ├── Footer/
    └── BackToTop/
```

As cores e a fonte do site ficam nas variáveis do início de `src/App.css`.

## Autor

**Thiago Felix** · [GitHub](https://github.com/ThiagoFelix22)
