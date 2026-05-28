# 🏷️ Portfolio Pessoal - Bernardo 👨‍💻

## 🌐 Acesso ao Site

> **[https://portfolio-bernardo-gomes.vercel.app/](https://portfolio-bernardo-gomes.vercel.app/)**

---

> [!NOTE]
> Website de portfólio pessoal moderno e responsivo, desenvolvido para apresentar projetos e trajetória profissional. 

<table>
<tr>
<td width="800px">
<div align="justify">
Este projeto consiste em um <b>portfólio pessoal</b> desenvolvido durante o Laboratório de Desenvolvimento de Software. Utilizando uma estética baseada em wireframes personalizados, a aplicação apresenta uma interface <i>dark mode</i> com detalhes em verde, garantindo <i>legibilidade</i> e <i>profissionalismo</i>. A documentação abaixo serve como guia para execução local, entendimento da arquitetura dos componentes e futuras expansões, promovendo <b>documentação de qualidade</b> e <i>reprodutibilidade</i>.
</div>
</td>
<td>
<div>
<img src="https://joaopauloaramuni.github.io/image/logo_ES_vertical.png" alt="Logo do Projeto" width="120px"/>
</div>
</td>
</tr>
</table>

---

## 🖼️ Wireframe Principal
<div align="center">
  <b>Figma: https://www.figma.com/design/igj4cgTh034DM4c3wRSSeI/Lab01---DesenvSoft?node-id=0-1&t=z3NV72J8YuT2g4mX-1</b>

---

<img width="512" height="287" alt="image" src="https://github.com/user-attachments/assets/ae659203-2e3d-4fb9-8180-4945e2a512f9" />

</div>

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|---|---|---|
| React | 19.2.0 | Framework UI |
| Vite | 6.3.5 | Build tool & dev server |
| Tailwind CSS | 4.2.0 | Estilização |
| Lucide React | 0.575.0 | Ícones |
| ESLint | 9.39.1 | Qualidade de código |
| Node.js | 22.x LTS | Runtime |

**Deploy:** Vercel (auto-deploy ao fazer push para main)

---

## 🏗 Arquitetura

A aplicação segue uma arquitetura de **Single Page Application (SPA)** com code splitting e lazy loading.

* **Padrão:** SPA com seções lazy-loaded e separação de chunks
  - **Eager-loaded:** Navbar, AboutSection, Footer (acima da dobra)
  - **Lazy-loaded:** ProjectsSection, ExperienceSection, ContactSection (abaixo da dobra)
* **Code Splitting:** 3 chunks separados via React.lazy + Suspense
* **Tema:** Dark mode (bg: #1f1f1f, text: #e8e8f0) + acentos em verde esmeralda (#10b981)
* **Roteamento:** Hash-based (Vercel redireciona todas as rotas para index.html)
* **Otimização de Imagens:** Formato WebP (96.9% menor que GIFs originais)

---

## 🔧 Instalação e Execução

### Pré-requisitos

* **Node.js:** Versão **22.x (LTS)** ou superior (Necessário para compatibilidade com Vite 6 e Tailwind v4)
* **Gerenciador de Pacotes:** npm (v10 ou superior)

### 📦 Instalação de Dependências

```bash
# Clone o repositório
git clone <URL_DO_SEU_REPOSITÓRIO>
cd meu-portfolio

# Instale as dependências
npm install
```

### ⚡ Como Executar a Aplicação

```bash
npm run dev       # Dev server em http://localhost:5173
```

**Comandos disponíveis:**

```bash
npm run build     # Build de produção → dist/
npm run preview   # Preview da produção localmente (porta 4173)
npm run lint      # ESLint check
npm run lint -- --fix  # Corrigir issues de linting
```

---

## 🚀 Deploy

O deploy é automático via **[Vercel](https://vercel.com/)** com integração contínua ao repositório GitHub. A cada push na branch main, um novo deploy é acionado.

* **URL de Produção:** [https://portfolio-bernardo-gomes.vercel.app/](https://portfolio-bernardo-gomes.vercel.app/)
* **Plataforma:** Vercel
* **Build Command:** `npm run build`
* **Output Directory:** `dist`
* **Configuração:** `vercel.json` — define rewrites para suporte ao roteamento SPA

---

## 📂 Estrutura de Pastas

```
meu-portfolio/
├── public/
│   └── dev.svg                        # Favicon do site
├── src/
│   ├── assets/img/                    # Imagens otimizadas (WebP)
│   ├── components/
│   │   ├── shared/
│   │   │   ├── DotGrid.jsx
│   │   │   ├── StairShape.jsx
│   │   │   ├── Squiggle.jsx
│   │   │   ├── ScrollParallax.jsx
│   │   │   ├── TypewriterText.jsx
│   │   │   ├── Badge.jsx              # Badge reutilizável (variantes)
│   │   │   └── FormInput.jsx          # Input com validação
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection/
│   │   │   └── ProjectsSection.jsx    # Lazy loaded
│   │   ├── ExperienceSection/
│   │   │   └── ExperienceSection.jsx  # Lazy loaded
│   │   └── ContactSection/
│   │       └── ContactSection.jsx     # Lazy loaded
│   ├── hooks/
│   │   ├── useTypewriter.js           # Efeito typewriter
│   │   └── useContactForm.js          # Gerenciamento do formulário
│   ├── data/
│   │   ├── projects.js                # Lista de projetos
│   │   └── parallax.js                # Dados de parallax
│   ├── i18n/
│   │   └── translations.js            # Traduções EN/PT
│   ├── constants/
│   │   └── colors.js                  # Paleta de cores
│   ├── App.jsx                        # Layout principal (~35 linhas)
│   ├── index.css                      # Tailwind v4 + variáveis CSS
│   └── main.jsx                       # Ponto de entrada do React
├── index.html                         # HTML raiz
├── package.json                       # Dependências & scripts
├── vite.config.js                     # Configuração do Vite
├── vercel.json                        # Configuração de deploy (SPA routing)
└── eslint.config.js                   # Configuração do ESLint
```

---

## ⚙️ Notas de Desenvolvimento

- **HMR ativado** — Alterações em .jsx/.css atualizam automaticamente no navegador
- **Tailwind v4** — Configuração CSS-first, sem tailwind.config.js separado
- **Code Splitting** — ProjectsSection, ExperienceSection, ContactSection são lazy-loaded
- **Otimização de Imagens** — Todas as imagens convertidas para WebP (redução de 96.9%)
- **Componentes Reutilizáveis** — Badge e FormInput disponíveis em `src/components/shared/`
- **Linting** — ESLint com plugin React enforça:
  - `no-unused-vars` — Detecta imports/variáveis não utilizadas (padrão: `^_`)
  - `no-console` — Avisa sobre `console.log` (permite `warn`/`error`)
  - `prefer-const` — Sugere `const` sobre `let`
  - Regras React: `jsx-uses-vars`, regras customizadas para React 19+
- **Suporte a Navegadores** — Chrome 90+, Firefox 88+, Safari 14+, todos os browsers mobile modernos

---

## 👥 Autores

| 👤 Nome | GitHub | LinkedIn |
| --- | --- | --- |
| Bernardo Gomes | [GitHub](https://github.com/bernardogomes25) | [LinkedIn](https://linkedin.com/in/bernardogomespereira) |

---

## 🙏 Agradecimentos

* **[Prof. Dr. João Paulo Aramuni](https://github.com/joaopauloaramuni)** - Pelos templates e guias de documentação.
* **Comunidade Open Source** - Pelas bibliotecas Lucide e Tailwind CSS.
