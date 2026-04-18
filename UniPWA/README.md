# 🎓 Central do Aluno Univesp (App Não Oficial)

![Status](https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-V2.0-blue?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-Optimized-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)

> **O Canivete Suíço do Aluno Univesp:** Uma suíte completa de ferramentas para calcular médias, gerenciar a grade curricular atualizada, controlar horas de estágio e consultar o calendário acadêmico oficial de 2026/2027.

### 🔗 [Acesse online: https://univespcalculadora.netlify.app/](https://univespcalculadora.netlify.app/)

---

## 💡 Sobre o Projeto (Case Study)

> **Título do Projeto:** Central do Estudante - Web App (PWA)

**Descrição:**
Solução Full-Stack (Frontend + Serverless) desenvolvida para resolver a fragmentação de informações acadêmicas, centralizando o acesso a ferramentas essenciais para uma comunidade de mais de 50.000 usuários.

### 🎯 O Desafio Tecnológico

Centralizar o acesso a sistemas institucionais distribuídos e ferramentas de cálculo em uma interface única, leve e mobile-first. O objetivo arquitetural foi mitigar um gargalo logístico de navegação que consumia milhares de horas combinadas dos usuários semanalmente.

### 🛠️ A Solução Integrada

- **Tech Stack:** HTML5 Semântico, CSS3 Moderno, Vanilla JS (foco total em performance, DOM DOM manipulation eficiente e carregamento instantâneo).
- **Arquitetura:** PWA (Progressive Web App) com Service Workers (`sw.js`) garantindo funcionamento 100% Offline.
- **Engajamento:** Integração assíncrona com SDK do **OneSignal** para Push Notifications de prazos críticos.
- **Telemetria:** Rastreamento de eventos e conversões via **Google Analytics 4 (GA4)**.
- **Dados & Privacidade:** Persistência de estado via API `localStorage` (sem backend centralizado, garantindo custo zero de servidor e conformidade total com LGPD).
- **Growth & SEO:** Estruturação avançada de SEO on-page, Open Graph, Twitter Cards e injeção de JSON-LD Schema, garantindo alta indexação orgânica nos motores de busca.

---

## 🚀 Funcionalidades da Central do Aluno Univesp

O código opera como um **PWA (Progressive Web App)** completo. Pode ser instalado nativamente nos sistemas operacionais (Android/iOS/Desktop) e executa lógicas matemáticas offline.

### 📊 Gestão Acadêmica e Curricular

- **Minha Grade Interativa (Nova Interface):** Seleção aprimorada de curso e acompanhamento visual de progresso.
  - _Cursos Suportados (10 Matrizes):_ **Bacharelado em Inteligência Artificial (NOVO)**, Ciência de Dados, BTI, Eng. de Computação, Eng. de Produção, Administração, Processos Gerenciais, Pedagogia, Matemática e Letras.
  - _Lógicas Aplicadas:_ Cálculo automático de % de conclusão em tempo real, contagem de PIs restantes e validação de status de aprovação.
- **Banco de Horas:** Controle dinâmico de horas de Estágio Obrigatório e Atividades Complementares (AACC).

### 🧮 Calculadoras Preditivas

- **Média Regular:** Algoritmo oficial da instituição (40% AVA + 60% Prova).
- **Simulador de Prova:** Engenharia reversa da fórmula para descobrir a nota exata necessária para aprovação direta.
- **Cálculo de Exame:** Verificação da nota necessária na prova de recuperação (Média 5.0).
- **Pesos Semanais:** Calculadora de média ponderada para atividades do AVA (Pesos dinâmicos: 8%, 12% e 17%).
- **Projeto Integrador:** Estimativa de nota composta (Parcial + Final).

### 📅 Informações, Dashboards & Guias

- **Dashboard de Prazos Críticos:** Cronômetros em tempo real para fechamentos de AVA, Provas e envio de TCC/PI.
- **Calendário 2026/2027:** Cronograma estruturado com eventos mapeados via JSON-LD `Schedule`.
- **Guias Rápidos:** Documentações e regras de negócio extraídas do manual oficial sobre TCC, Estágio Obrigatório e Projeto Integrador.
- **ABNT Fácil:** Guia paramétrico de formatação.

---

## 🛠️ Tecnologias e Dependências

Projeto rigorosamente otimizado para **Lighthouse 100%** (Performance, Acessibilidade, Melhores Práticas e SEO).

- **Markup & Estilo:** `HTML5`, `CSS3` (CSS Variables, Flexbox/Grid, Keyframe Animations).
- **Lógica de Negócio:** `JavaScript (ES6+)` puro, sem frameworks pesados para garantir tempo de execução sub-milissegundo.
- **Armazenamento:** `localStorage API` (manipulação de JSON para persistência de arrays de notas e metadados).
- **PWA Ecosystem:** `manifest.json`, `sw.js` (Cache Storage API).
- **UI/UX:** Design System "Mobile-First", Tipografia Google Fonts (Inter, Poppins), Ícones SVGs via [Lucide](https://lucide.dev/).
- **Tracking & Push:** `OneSignalSDK.page.js` e `gtag.js` (Google Tag Manager).

---

## 📂 Estrutura de Diretórios e Arquivos

| Arquivo                   | Descrição Técnica                                                |
| :------------------------ | :--------------------------------------------------------------- |
| `index.html`              | Ponto de entrada (Dashboard principal) e hub de links.           |
| `progresso.html`          | Engine de grade curricular com DB JSON para 10 matrizes.         |
| `calendario.html`         | Cronograma interativo otimizado para rich snippets de eventos    |
| `media-final.html`        | Módulo de cálculo matemático de notas regulares.                 |
| `exame.html`              | Algoritmo de recuperação escolar.                                |
| `porcentagemsemanas.html` | Interface e lógica de média ponderada de atividades.             |
| `prazo-final...html`      | Dashboard com `setInterval` para contagem regressiva.            |
| `tcc-pi-estagio.html`     | Documentação de diretrizes de conclusão de curso.                |
| `main.css` / `style.css`  | Folhas de estilo globais e variáveis de tema.                    |
| `sw.js`                   | Service Worker responsável pelas estratégias de cache offline    |
| `manifest.json`           | Metadados para instalação e configuração do Progressive Web App. |

---

## ⚠️ Aviso Legal e Repositório

Trata-se de um software **NÃO OFICIAL** e de código aberto.

1.  **Sem vínculo institucional:** A aplicação não possui qualquer integração ou relacionamento oficial com a Universidade Virtual do Estado de São Paulo (Univesp).
2.  **Base de Dados:** As matrizes curriculares, pesos matemáticos e calendários são extraídos e hardcoded a partir de documentos públicos (2024/2025/2026), sujeitos a alterações da reitoria.
3.  **Segurança da Informação:** O código não intercepta, não trafega em rede e não coleta dados acadêmicos sensíveis (senhas/RAs). Todo processamento ocorre no `client-side`.

---

<br>

_Projeto de Arquitetura Frontend e PWA. Focado em otimização de fluxos e UX acadêmica._
