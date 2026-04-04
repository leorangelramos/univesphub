# 🎓 Central do Aluno Univesp (App Não Oficial)

![Status](https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-V2.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)

> **O Canivete Suíço do Aluno Univesp:** Uma suíte completa de ferramentas para calcular médias, gerenciar a grade curricular, controlar horas de estágio e consultar o calendário acadêmico oficial de 2026.

### 🔗 [Acesse online: https://univespcalculadora.netlify.app/](https://univespcalculadora.netlify.app/)

---

## 💡 Sobre o Projeto (Case Study)

> **Título do Projeto:** Central do Estudante - Web App (PWA)

**Descrição:**
"Desenvolvi uma solução Full-Stack (Frontend + Serverless) para resolver a fragmentação de informações acadêmicas, impactando potencialmente uma comunidade de 50.000 usuários."

### 🎯 O Desafio

Centralizar o acesso a 4 sistemas institucionais diferentes e calculadoras acadêmicas em uma interface única e mobile-first, resolvendo um problema logístico que consumia milhares de horas combinadas dos alunos.

### 🛠️ A Solução

- **Tech Stack:** HTML5, CSS3, Vanilla JS (foco total em performance e carregamento instantâneo).
- **Arquitetura:** PWA (Progressive Web App) com Service Workers para funcionamento 100% Offline.
- **Engajamento:** Integração com OneSignal para Push Notifications de prazos críticos.
- **Dados & Privacidade:** Persistência local via LocalStorage (sem backend centralizado, garantindo custo zero de servidor e privacidade total/LGPD).
- **Growth:** Otimização técnica de SEO (JSON-LD) que posicionou o app na 1ª página do Google organicamente em menos de uma semana.

### 📈 Resultado

Uma ferramenta leve, acessível e escalável que entregou valor imediato à comunidade acadêmica com custo de infraestrutura zero.

---

### 🧠 A Motivação

"Eu percebi que os 50 mil alunos da minha universidade perdiam tempo todo dia entrando em vários sites diferentes só para achar uma nota ou um prazo. Se a instituição fosse resolver isso via licitação pública, o mercado estima que custaria entre **R$ 200 mil e R$ 2 milhões** e levaria até 2 anos para ficar pronto.

Eu decidi resolver isso em um final de semana. Criei um PWA (Web App) que roda direto no celular do aluno, não gasta servidor (custo zero) e funciona sem internet. O resultado foi uma solução que economiza milhares de horas de navegação da comunidade por semana, entregue de forma ágil e eficiente."

---

## 🚀 Funcionalidades

O aplicativo é um **PWA (Progressive Web App)** completo. Ele pode ser instalado no celular e funciona **offline**, salvando os dados do aluno localmente no dispositivo.

### 📊 Gestão Acadêmica

- **Minha Grade Interativa:** Selecione seu curso e acompanhe seu progresso visualmente.
  - _Cursos Suportados:_ Ciência de Dados, BTI, Eng. de Computação, Eng. de Produção, Administração, Processos Gerenciais, Pedagogia, Matemática e Letras.
  - _Funcionalidades:_ Cálculo automático de % de conclusão, contagem de PIs restantes e status de aprovação.
- **Banco de Horas:** Controle visual de horas de Estágio Obrigatório e Atividades Complementares (AACC).
- **Persistência de Dados:** Tudo é salvo no `localStorage` do navegador. Seus dados não saem do seu dispositivo.

### 🧮 Calculadoras

- **Média Regular:** Regra oficial (40% AVA + 60% Prova).
- **Simulador de Prova:** Descubra exatamente quanto precisa tirar na prova para passar.
- **Cálculo de Exame:** Verifique a nota necessária na recuperação (Média 5.0).
- **Pesos Semanais:** Calculadora de média ponderada para atividades do AVA (Semanas com pesos 8%, 12% e 17%) .
- **Projeto Integrador:** Estimativa de nota (Parcial + Final).

### 📅 Informações & Guias (Atualizados!)

- **Calendário 2026:** Cronograma completo com datas de provas, matrículas e entrega de PI.
- **Guias Rápidos:** Resumos sobre regras de TCC, Estágio Obrigatório e Projeto Integrador divididos por eixos (Computação, Licenciatura e Negócios).
- **ABNT Fácil:** Guia rápido de formatação (margens, fonte, espaçamento) para PI e TCC.
- **Dicas e Benefícios:** Informações sobre Office 365, Carteirinha de Estudante e Biblioteca Virtual.

---

## 🛠️ Tecnologias

Projeto focado em performance (**Lighthouse 100%**), acessibilidade e SEO.

- **Frontend:** `HTML5 Semântico`, `CSS3` (Grid/Flexbox, Animações), `JavaScript` (ES6+).
- **Armazenamento Local:** `localStorage API` para salvar notas, curso selecionado e horas de estágio.
- **PWA:** `manifest.json` e `Service Worker` para cacheamento de assets e funcionamento offline.
- **UI/UX:** Design responsivo "Mobile-First" e ícones [Lucide](https://lucide.dev/).
- **Integrações:** OneSignal (Push Notifications) e Google Analytics 4 (GA4).
- **SEO:** Meta tags completas, Open Graph, Twitter Cards e JSON-LD (Schema.org).

---

## 📂 Estrutura de Arquivos

| Arquivo                   | Descrição                                                    |
| :------------------------ | :----------------------------------------------------------- |
| `index.html`              | Dashboard principal com atalhos para AVA, SEI e Ferramentas. |
| `progresso.html`          | Gerenciador de grade curricular com lógica para 9 cursos.    |
| `calendario.html`         | Cronograma 2026 com eventos e JSON-LD Schema.                |
| `mediafinal.html`         | Calculadora de média regular.                                |
| `exame.html`              | Calculadora de recuperação.                                  |
| `porcentagemsemanas.html` | Calculadora de pesos semanais do AVA.                        |
| `projetointegrador.html`  | Guia e calculadora simples de PI.                            |
| `horas.html`              | Tracker de horas de estágio/complementares.                  |
| `tcc.html`                | Guia sobre obrigatoriedade de TCC.                           |
| `estagio.html`            | Guia informativo sobre regras de estágio.                    |
| `resumo.html`             | Visão geral acadêmica de todos os cursos.                    |
| `abnt.html`               | Guia rápido de formatação ABNT.                              |
| `dicas.html`              | Dicas e benefícios (Office, Carteirinha, etc.).              |
| `metas.html`              | Prazos para entregas de trabalhos.                           |

---

## ⚠️ Aviso Legal (Disclaimer)

Este é um projeto **NÃO OFICIAL** e open-source, desenvolvido por alunos para alunos.

1.  **Não possui vínculo** direto com a Universidade Virtual do Estado de São Paulo (Univesp).
2.  As regras, pesos e calendários baseiam-se nos manuais vigentes (2024/2025/2026), mas podem sofrer alterações pela instituição.
3.  **Sempre confira** suas notas e prazos oficiais no AVA/Aluno Net.

---

**Desenvolvido por Leo Ramos.**
<br>
_Feito com ❤️ para a comunidade Univesp._
