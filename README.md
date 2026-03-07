[PT-BR] · [EN](#english-version)

<div align="center">

# Netflix Clone — iTeam

> Clone fiel da interface da Netflix, construído com HTML, CSS e JavaScript puro — carrosséis com drag-to-scroll, header dinâmico e seleção de perfis.

![Status](https://img.shields.io/badge/status-concluído-1be4c8?style=flat-square&labelColor=03080f&color=1be4c8)
![Versão](https://img.shields.io/badge/versão-1.0.0-1be4c8?style=flat-square&labelColor=03080f&color=1be4c8)
![Licença](https://img.shields.io/badge/licença-MIT-d4a853?style=flat-square&labelColor=03080f&color=d4a853)

<br/>

</div>

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como Rodar](#como-rodar)
- [Status](#status)
- [Aprendizados](#aprendizados)
- [Contato](#contato)

---

## Sobre o Projeto

O **Netflix Clone — iTeam** é uma recriação fiel da interface da Netflix, desenvolvida sem nenhum framework — apenas **HTML semântico, CSS3 e JavaScript puro**. O projeto foi criado como desafio técnico para dominar a manipulação de DOM, eventos de mouse complexos e layouts avançados com CSS Flexbox.

O grande feito técnico está na implementação do **drag-to-scroll** (arrastar para rolar) nos carrosséis, algo que grandes plataformas de streaming usam para melhorar a experiência de navegação — replicado aqui sem nenhuma biblioteca externa.

> Um clone não é apenas copiar visual — é dissecar uma interface de classe mundial e entender cada decisão de interação e layout.

### Funcionalidades

- [x] Tela de seleção de perfis com múltiplos usuários
- [x] Header dinâmico com efeito de opacidade no scroll
- [x] Carrosséis de filmes/séries com rolagem horizontal
- [x] Navegação por setas com visibilidade dinâmica
- [x] **Drag-to-Scroll** — arrastar o mouse para navegar nos carrosséis
- [x] Barras de progresso individual por conteúdo
- [x] Banner Hero com filme em destaque
- [x] Top 10 com numeração estilizada em SVG
- [x] Footer completo com ícones de redes sociais
- [x] Layout responsivo

---

## Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-03080f?style=flat-square&logo=html5&logoColor=1be4c8)
![CSS3](https://img.shields.io/badge/CSS3-03080f?style=flat-square&logo=css3&logoColor=1be4c8)
![JavaScript](https://img.shields.io/badge/JavaScript-03080f?style=flat-square&logo=javascript&logoColor=d4a853)
![Git](https://img.shields.io/badge/Git-03080f?style=flat-square&logo=git&logoColor=1be4c8)

> **Zero dependências de produção.** Tudo feito na base — sem React, sem jQuery, sem Bootstrap.

---

## Estrutura de Pastas

```
netflix-clone-iteam/
│
├── assets/
│   ├── arrows-icons/       # Ícones de setas para carrosséis
│   ├── generic-icons/      # Ícones gerais (play, info, lupa, etc.)
│   ├── post-numbers/       # SVGs de numeração para o Top 10
│   ├── posters/            # Imagens dos pôsteres de filmes/séries
│   ├── profiles/           # Avatares de perfil de usuário
│   ├── social-icons/       # Ícones de redes sociais
│   ├── MovieName.svg       # Logo do filme em destaque (hero)
│   └── netflix-logo.svg    # Logotipo da Netflix
│
├── css/
│   ├── globals.css         # Variáveis CSS e reset global
│   ├── style.css           # Estilos da tela de perfis (index.html)
│   └── main.css            # Estilos da página principal (main.html)
│
├── fonts/                  # Fontes customizadas
│
├── js/
│   └── scripts.js          # Toda a lógica: drag, scroll, setas, header
│
├── index.html              # Tela de seleção de perfis
└── main.html               # Página principal com carrosséis
```

---

## Como Rodar

**Sem instalações necessárias.** Por ser 100% HTML/CSS/JS:

```bash
# 1. Clone o repositório
git clone https://github.com/WelderBM/netflix-clone-iteam.git

# 2. Acesse a pasta
cd netflix-clone-iteam
```

**Opção 1 — Abrir diretamente:**
Abra `index.html` no navegador.

**Opção 2 — Live Server (recomendado):**
Use a extensão **Live Server** do VS Code para evitar problemas de CORS com assets locais.

**Opção 3 — http-server:**
```bash
npm install -g http-server
http-server .
# Acesse http://localhost:8080
```

---

## Status

```
🟢 Concluído
```

**Versão atual:** 1.0.0

---

## Aprendizados

### Contexto

> Desafio prático de clone de interface, desenvolvido durante o curso iTeam. O objetivo era replicar fielmente uma UI de classe mundial usando apenas a tríade fundamental da web.

### O que aprendi

- **Manipulação de DOM** com JavaScript puro — sem abstrações de framework
- Eventos de mouse em cadeia (`mousedown`, `mousemove`, `mouseup`, `mouseleave`) para construir o **drag-to-scroll**
- **Detecção de scroll da janela** para animação dinâmica do header
- **CSS Flexbox avançado** para layouts multi-colunas como os carrosséis
- Controle de **visibilidade condicional** dos botões de navegação baseado na posição do scroll horizontal
- **Organização de projeto** sem framework: separação clara de responsabilidades entre HTML estrutural, CSS de estilo e JS de comportamento

### O que faria diferente

- Componentizaria os carrosséis em funções geradoras de DOM reutilizáveis
- Implementaria a busca e exibição de conteúdo via **API do TMDB** para dados reais
- Adicionaria acessibilidade (ARIA) nos controles de navegação

---

## Contato

<div align="center">

Desenvolvido por **Welder Barroso de Melo**

[![Nevalo](https://img.shields.io/badge/Nevalo-flow%20through%20every%20connection-1be4c8?style=for-the-badge&labelColor=03080f)](https://nevalo.dev)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Welder%20Barroso-0a66c2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/welder-barroso-37b654207)
[![GitHub](https://img.shields.io/badge/GitHub-WelderBM-f0f4f8?style=flat-square&logo=github&logoColor=03080f)](https://github.com/WelderBM)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-contato-25d366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/5595991341586)
[![Email](https://img.shields.io/badge/Email-welderb40@gmail.com-1be4c8?style=flat-square&logo=gmail&logoColor=white)](mailto:welderb40@gmail.com)

</div>

---

<div align="center">
<sub>Feito com foco e café · <a href="https://nevalo.dev">nevalo.dev</a></sub>
</div>

---
---

<!-- ════════════════════════════════════════════
     ENGLISH VERSION
════════════════════════════════════════════ -->

<a name="english-version"></a>

[EN] · [PT-BR](#top)

<div align="center">

# Netflix Clone — iTeam

> A faithful Netflix interface clone built with HTML, CSS, and Vanilla JS — drag-to-scroll carousels, dynamic header, and profile selection screen.

![Status](https://img.shields.io/badge/status-completed-1be4c8?style=flat-square&labelColor=03080f&color=1be4c8)
![Version](https://img.shields.io/badge/version-1.0.0-1be4c8?style=flat-square&labelColor=03080f&color=1be4c8)
![License](https://img.shields.io/badge/license-MIT-d4a853?style=flat-square&labelColor=03080f&color=d4a853)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Status](#status-en)
- [Learnings](#learnings)
- [Contact](#contact-en)

---

## About

**Netflix Clone — iTeam** is a faithful recreation of the Netflix interface, built with **no frameworks** — just semantic HTML, CSS3, and Vanilla JavaScript. The project was created as a technical challenge to master DOM manipulation, complex mouse events, and advanced Flexbox layouts.

The standout technical achievement is the **drag-to-scroll** implementation on the carousels — the same interaction pattern used by major streaming platforms, recreated here without any external library.

> A clone isn't just copying visuals — it's dissecting a world-class interface and understanding every interaction and layout decision.

### Features

- [x] Profile selection screen with multiple users
- [x] Dynamic header with scroll-based opacity effect
- [x] Movie/series carousels with horizontal scroll
- [x] Arrow navigation with dynamic visibility
- [x] **Drag-to-Scroll** — mouse drag for carousel navigation
- [x] Individual progress bars per content
- [x] Hero banner with featured movie
- [x] Top 10 with SVG-styled numbering
- [x] Complete footer with social media icons
- [x] Responsive layout

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-03080f?style=flat-square&logo=html5&logoColor=1be4c8)
![CSS3](https://img.shields.io/badge/CSS3-03080f?style=flat-square&logo=css3&logoColor=1be4c8)
![JavaScript](https://img.shields.io/badge/JavaScript-03080f?style=flat-square&logo=javascript&logoColor=d4a853)

> **Zero production dependencies.** No React, no jQuery, no Bootstrap.

---

## Folder Structure

```
netflix-clone-iteam/
│
├── assets/         # Icons, posters, profiles, social, SVGs
├── css/            # globals.css · style.css · main.css
├── fonts/          # Custom fonts
├── js/
│   └── scripts.js  # All logic: drag, scroll, arrows, header
│
├── index.html      # Profile selection screen
└── main.html       # Main page with content carousels
```

---

## Getting Started

**No installation needed.** It's 100% HTML/CSS/JS:

```bash
# 1. Clone the repo
git clone https://github.com/WelderBM/netflix-clone-iteam.git

# 2. Enter the folder
cd netflix-clone-iteam
```

Open `index.html` directly in your browser, or use **Live Server** for the best experience.

---

<a name="status-en"></a>

## Status

```
🟢 Completed
```

---

## Learnings

### Context

> Interface clone challenge built during the iTeam course. The goal was to faithfully replicate a world-class UI using only the web's fundamental triad.

### What I learned

- **Vanilla DOM manipulation** — no framework abstractions
- Chained mouse events (`mousedown`, `mousemove`, `mouseup`, `mouseleave`) to build **drag-to-scroll**
- **Window scroll detection** for dynamic header animation
- **Advanced CSS Flexbox** for multi-column carousel layouts
- **Conditional visibility control** of navigation buttons based on horizontal scroll position
- **Framework-free project organization**: clear separation of HTML structure, CSS styling, and JS behavior

### What I'd do differently

- Componentize carousels into reusable DOM generator functions
- Integrate the **TMDB API** for real content data
- Add proper accessibility (ARIA) to navigation controls

---

<a name="contact-en"></a>

## Contact

<div align="center">

Built by **Welder Barroso de Melo**

[![Nevalo](https://img.shields.io/badge/Nevalo-flow%20through%20every%20connection-1be4c8?style=for-the-badge&labelColor=03080f)](https://nevalo.dev)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Welder%20Barroso-0a66c2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/welder-barroso-37b654207)
[![GitHub](https://img.shields.io/badge/GitHub-WelderBM-f0f4f8?style=flat-square&logo=github&logoColor=03080f)](https://github.com/WelderBM)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-contact-25d366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/5595991341586)
[![Email](https://img.shields.io/badge/Email-welderb40@gmail.com-1be4c8?style=flat-square&logo=gmail&logoColor=white)](mailto:welderb40@gmail.com)

</div>

---

<div align="center">
<sub>Built with focus and coffee · <a href="https://nevalo.dev">nevalo.dev</a></sub>
</div>
