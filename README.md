# EduGuru — página inicial do PFC/TCC

Site feito com **React + Vite** e **React Router**, com 5 páginas:
Início, Sobre, Funcionalidades, Tecnologias e Contato.

## Rodar no seu computador

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Onde editar os textos

Tudo está em `src/data/content.js` (nome da escola, equipe, funcionalidades, links...).
Troque os textos de exemplo pelos dados reais do seu PFC.

## Estrutura

```
src/
  App.jsx            rotas
  components/        Header, Footer, QuizCard...
  pages/             Home, Sobre, Funcionalidades, Tecnologias, Contato
  data/content.js    conteúdo do site
  styles.css         estilos
```

## Publicar

**GitHub**
```bash
git init
git add .
git commit -m "Site EduGuru com React + Vite"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

**Vercel**
1. Acesse vercel.com e entre com sua conta do GitHub.
2. *Add New → Project* e escolha o repositório.
3. O Vercel detecta o Vite sozinho (build: `npm run build`, saída: `dist`). Clique em *Deploy*.

O arquivo `vercel.json` já faz as rotas (`/sobre`, `/contato`...) funcionarem ao recarregar a página.
