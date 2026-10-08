<p align="center">
  <img src="img/logo.svg" alt="JobLink Logo" width="100" height="100" />
</p>

<h1 align="center">JobLink</h1>

<p align="center">
  <b>Gerador Inteligente de Busca de Vagas no LinkedIn em Tempo Real</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/LinkedIn_Design_System-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Design System" />
  <img src="https://img.shields.io/badge/i18n-PT--BR_%2F_EN-01754F?style=for-the-badge&logo=google-translate&logoColor=white" alt="i18n" />
</p>

<p align="center">
  <a href="https://allvesmatteus.github.io/Joblink/"><strong>🔗 Acessar Aplicação Online (Live Demo) »</strong></a>
</p>

---

<p align="center">
  <img src="img/og.png" alt="JobLink Preview" width="100%" />
</p>

## 📌 Sobre o Projeto

No LinkedIn, os primeiros minutos após a publicação de uma vaga são decisivos: centenas de candidatos se inscrevem rapidamente, reduzindo as chances de quem chega depois. No entanto, a busca padrão do LinkedIn costuma priorizar vagas promovidas, patrocinadas ou com relevância algorítmica vaga, misturando oportunidades antigas no topo do feed.

O **JobLink** foi desenvolvido para resolver esse gargalo. Trata-se de uma aplicação web de alto desempenho e design fiel à identidade oficial do LinkedIn que gera links diretos de pesquisa com **ordenação estrita por data mais recente** (`sortBy=DD`) e filtros temporais granulares (1h, 2h, 6h, 12h, 24h, 1 semana ou horário personalizado). Com isso, você visualiza as oportunidades no momento exato em que são publicadas, chegando na frente da concorrência.

---

## ✨ Principais Funcionalidades

### ⏱️ Filtro Temporal em Tempo Real
- **Pílulas Autênticas do LinkedIn:** Seleção rápida para publicações das últimas **1h, 2h, 6h, 12h, 24h** ou **1 semana**.
- **Estilização Oficial Verde:** Pílula ativa estilizada com o verde nativo de filtros do LinkedIn (`#01754f`), hover com contraste (`#004c33`) e micro-transições em curva Bézier cúbica.
- **Horas Personalizadas:** Campo numérico dedicado para definir qualquer janela de tempo em horas (calculado dinamicamente em segundos para o parâmetro `f_TPR`).

### 🎯 Ordenação Estrita por Recência (`sortBy=DD`)
- **Fim da Relevância Algorítmica:** Força o parâmetro oficial `sortBy=DD`, garantindo que o LinkedIn liste primeiro as vagas postadas há minutos ou poucas horas.
- **Badge Recomendado:** Indicação visual de boas práticas ativada por padrão para maximizar os resultados.

### 💼 Filtros Combinados de Contratação
- **Modelo de Trabalho:** Filtragem imediata entre **Qualquer**, **Remoto** (`f_WT=2`), **Híbrido** (`f_WT=3`) e **Presencial** (`f_WT=1`).
- **Nível de Experiência:** Suporte a **Qualquer nível**, **Estágio** (`f_E=1`), **Júnior** (`f_E=2`) e **Pleno / Associado** (`f_E=3`).
- **Candidatura Simplificada (Easy Apply):** Filtro direto com parâmetro `f_EA=true` para segmentar oportunidades com candidatura rápida pelo próprio LinkedIn.

### 🏷️ Sugestões Rápidas de Cargos (Quick Chips)
- **Seleção Instantânea:** Botões em formato pílula com as profissões mais buscadas do mercado em diferentes segmentos:
  - Desenvolvimento & Engenharia de Software
  - Auxiliar Administrativo
  - Analista Financeiro
  - Marketing Digital
  - Recursos Humanos (RH)
  - Vendas / Comercial
  - Estágio TI / Geral
  - UX/UI Design
  - Atendimento ao Cliente
  - Ciência de Dados
  - Gerência de Projetos
  - Logística
- Preenchimento reativo imediato no input principal com geração instantânea do link.

### 📋 Ações em 1 Clique
- **Copiar Link:** Cópia instantânea para a área de transferência com feedback visual dinâmico (botão verde de sucesso e toast notification flutuante).
- **Abrir no LinkedIn:** Botão primário estilizado com o badge oficial `in` à direita para abrir a pesquisa diretamente em uma nova aba.
- **Atalho de Teclado:** Pressionar `Enter` no campo de cargo gera e copia automaticamente o link direto.

### 🌐 Internacionalização Dinâmica (i18n)
- **Bilinguismo Completo:** Alternância instantânea entre **Português (PT-BR)** e **Inglês (EN)**.
- **Persistência Local:** O idioma selecionado é armazenado em `localStorage` para manter a preferência do usuário entre sessões.
- **Seletor Nativo:** Dropdown estilizado no rodapé integrado ao design system.

### 🎨 Design System Oficial do LinkedIn
- Cores corporativas, sombras em camadas (`box-shadow`), tipografia do sistema (`-apple-system`, `Segoe UI`, `Roboto`), pílulas com raio de curvatura padronizado e zero dependências de bibliotecas externas pesadas.

---

## 🛠️ Stack Tecnológico

| Camada | Tecnologias |
|---|---|
| **Frontend Core** | HTML5 Semântico, Vanilla JavaScript (ES6+), Zero Frameworks |
| **Estilização & Design** | Vanilla CSS Moderno, CSS Custom Properties (LinkedIn Design Tokens), Flexbox, CSS Grid |
| **Internacionalização** | Sistema nativo i18n em JavaScript com persistência em `localStorage` |
| **Clipboard & Navegação** | Async Clipboard API com fallback universal (`document.execCommand`) |
| **Hospedagem** | Compatível com GitHub Pages, Vercel, Netlify ou qualquer servidor estático |

---

## 🔍 Parâmetros da URL do LinkedIn Gerados

O JobLink constrói as URLs de pesquisa utilizando os parâmetros oficiais da query string do LinkedIn:

| Parâmetro | Significado | Exemplo de Valor |
|---|---|---|
| `keywords` | Cargo ou termos de busca informados | `keywords=Desenvolvedor+Frontend` |
| `location` | Localização geográfica da vaga | `location=Brasil` |
| `f_TPR` | Janela de tempo em segundos (*Time Posted Range*) | `f_TPR=r3600` (1 hora), `f_TPR=r86400` (24 horas) |
| `sortBy` | Critério de ordenação | `sortBy=DD` (Data mais recente) |
| `f_WT` | Modelo de trabalho (*Work Type*) | `f_WT=2` (Remoto), `f_WT=3` (Híbrido), `f_WT=1` (Presencial) |
| `f_E` | Nível de senioridade (*Experience*) | `f_E=1` (Estágio), `f_E=2` (Júnior), `f_E=3` (Associado/Pleno) |
| `f_EA` | Candidatura Simplificada (*Easy Apply*) | `f_EA=true` |

---

## 📂 Estrutura de Pastas

```
JobLink/
├── css/
│   └── style.css          # Design system completo e tokens do LinkedIn
├── img/
│   ├── logo.svg           # Vetor oficial da logo JobLink
│   └── ...                # Imagens e avatares
├── js/
│   └── main.js            # Lógica reativa, gerador de URLs, i18n e eventos
├── index.html             # Interface principal da aplicação
└── README.md              # Documentação oficial do projeto
```

---

## 🚀 Como Executar o Projeto

Como o JobLink foi desenvolvido com tecnologias web nativas, ele não requer build complexo nem instalação de pacotes pesados.

### Pré-requisitos
- Qualquer navegador web moderno (Chrome, Edge, Firefox, Safari ou Opera).

### 1. Clonar o Repositório
```bash
git clone https://github.com/AllvesMatteus/JobLink.git
cd JobLink
```

### 2. Abrir a Aplicação

#### Opção A: Abrir diretamente no navegador
Dê um duplo clique no arquivo `index.html` ou arraste-o para o navegador.

#### Opção B: Extensão Live Server (VS Code)
Abra a pasta no VS Code, clique com o botão direito no `index.html` e selecione **Open with Live Server**.

#### Opção C: Servidor local simples (Node ou Python)
```bash
# Com Node.js (npx)
npx serve .

# Ou com Python 3
python -m http.server 3000
```
Acesse `http://localhost:3000` no seu navegador.

---

## ⚖️ Aviso Legal & Isenção de Responsabilidade

O **JobLink** é um projeto independente e de código aberto. Não possui qualquer afiliação, vínculo, patrocínio ou endosso da **LinkedIn Corporation** ou da **Microsoft Corporation**. O termo "LinkedIn" e seus logotipos são marcas registradas de seus respectivos proprietários.

Para informações detalhadas sobre ausência de scraping, proteção de privacidade e limitação de responsabilidade, consulte o documento completo de [Aviso Legal & Termos de Uso](TERMOS.md).

---

## 📄 Licença & Autoria

Este projeto é desenvolvido e mantido por [Mateus Alves](https://github.com/AllvesMatteus).

⭐ Se este projeto te ajudou a encontrar vagas mais rápido, sinta-se à vontade para deixar uma estrela no [repositório oficial](https://github.com/AllvesMatteus/JobLink)!
