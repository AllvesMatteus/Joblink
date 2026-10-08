document.addEventListener("DOMContentLoaded", () => {
  const i18n = {
    pt: {
      docTitle: "JobLink | Gerador de Busca de Vagas no LinkedIn",
      docDesc: "JobLink: Encontre vagas recentes no LinkedIn antes da concorrência. Configure filtros de período, modelo, nível e gere links diretos com ordenação estrita.",
      mainTitle: "Gerar link de busca no LinkedIn",
      mainSubtitle: "Encontre vagas publicadas nas últimas horas antes dos outros concorrentes. Configure os parâmetros abaixo e copie o link com ordenação estrita por data.",
      cargoLabel: "Cargo ou Palavras-chave",
      cargoHint: "Pressione Enter para copiar",
      cargoPlaceholder: "Ex: Desenvolvedor Web Júnior",
      sugLabel: "Sugestões rápidas:",
      suggestions: [
        { text: "Desenvolvedor de Software", val: "Desenvolvedor de Software" },
        { text: "Auxiliar Administrativo", val: "Auxiliar Administrativo" },
        { text: "Analista Financeiro", val: "Analista Financeiro" },
        { text: "Marketing Digital", val: "Marketing Digital" },
        { text: "Recursos Humanos (RH)", val: "Recursos Humanos" },
        { text: "Vendas / Comercial", val: "Vendas" },
        { text: "Estágio", val: "Estágio" },
        { text: "UX/UI Designer", val: "UX/UI Designer" },
        { text: "Atendimento ao Cliente", val: "Atendimento ao Cliente" },
        { text: "Ciência de Dados", val: "Ciência de Dados" },
        { text: "Gerente de Projetos", val: "Gerente de Projetos" },
        { text: "Logística", val: "Logística" }
      ],
      chipsLabel: "Publicada nas últimas",
      chipsHint: "Filtro em tempo real",
      chipOptions: [
        { h: 1, t: "1 hora" },
        { h: 2, t: "2 horas" },
        { h: 6, t: "6 horas" },
        { h: 12, t: "12 horas" },
        { h: 24, t: "24 horas" },
        { h: 168, t: "1 semana" }
      ],
      localLabel: "Local",
      localPlaceholder: "Ex: São Paulo, Brasil",
      customHoursLabel: "Horas personalizadas",
      customHoursPlaceholder: "Ex: 3, 5, 48",
      modeloLabel: "Modelo de trabalho",
      modeloOptions: [
        { val: "", text: "Qualquer modelo" },
        { val: "2", text: "Remoto" },
        { val: "3", text: "Híbrido" },
        { val: "1", text: "Presencial" }
      ],
      nivelLabel: "Nível de experiência",
      nivelOptions: [
        { val: "", text: "Qualquer nível" },
        { val: "1", text: "Estágio" },
        { val: "2", text: "Júnior" },
        { val: "3", text: "Pleno-júnior (Associado)" }
      ],
      ordenarLabel: "Ordenar pelas mais recentes (sortBy=DD)",
      ordenarBadge: "Recomendado",
      easyLabel: "Apenas candidatura simplificada (Easy Apply)",
      outputLabel: "Seu link de busca gerado",
      resultPlaceholder: "O link gerado aparecerá aqui...",
      btnCopiar: "Copiar link",
      btnCopiado: "✓ Copiado!",
      btnAbrir: "Abrir no LinkedIn",
      hintText: "<strong>Dica:</strong> Mesmo com a ordenação por data recente ativada, o LinkedIn pode fixar 1 ou 2 vagas promovidas no topo. Role a lista para ver as publicadas há poucos minutos.",
      footerCopyright: "JobLink © 2026 • Desenvolvido por Mateus Alves",
      footerGithub: "Meu GitHub",
      footerRepo: "GitHub do Projeto",
      footerTerms: "Aviso Legal & Isenção",
      footerDisclaimer: "JobLink é uma ferramenta independente de código aberto e não possui vínculo, afiliação, endosso ou patrocínio da LinkedIn Corporation ou da Microsoft Corporation. LinkedIn® é marca registrada da LinkedIn Corporation.",
      modalTermsTitle: "Aviso Legal & Termos de Uso",
      modalTermsSub: "Isenção de responsabilidade e termos de serviço",
      modalTermsClose: "Entendido",
      modalTermsBody: `<section class="modal-section"><h3>1. Isenção de Vínculo e Marcas Registradas</h3><p>LinkedIn® e o logotipo do LinkedIn são marcas registradas de titularidade exclusiva da LinkedIn Corporation e/ou da Microsoft Corporation nos Estados Unidos e em outros países. O <strong>JobLink</strong> é uma ferramenta utilitária independente de código aberto e <strong>NÃO</strong> possui qualquer vínculo, afiliação, parceria, patrocínio, autorização ou endosso oficial da LinkedIn Corporation ou da Microsoft Corporation. Qualquer menção ao nome "LinkedIn" é de caráter estritamente nominativo e informativo, com o único propósito de indicar a compatibilidade das URLs geradas.</p></section><section class="modal-section"><h3>2. Mecanismo Técnico e Ausência de Scraping</h3><p>O JobLink atua exclusivamente como um formatador de parâmetros de consulta HTTP públicos suportados pela interface padrão do navegador (como <code>keywords</code>, <code>location</code>, <code>f_TPR</code> e <code>sortBy=DD</code>). A ferramenta <strong>não</strong> realiza web scraping, automação de acessos, mineração de dados nem requisições não autorizadas aos servidores do LinkedIn. O redirecionamento e a navegação ocorrem de forma voluntária e manual pelo próprio usuário diretamente no site oficial do LinkedIn.</p></section><section class="modal-section"><h3>3. Privacidade e Processamento Local (Client-Side)</h3><p>Todo o processamento do JobLink ocorre 100% no navegador do usuário (client-side). A aplicação <strong>não coleta, não armazena e não transmite</strong> nenhum dado pessoal, endereço IP, credencial de login, senha ou histórico de pesquisa para servidores externos ou terceiros.</p></section><section class="modal-section"><h3>4. Limitação de Responsabilidade</h3><p>Este software é disponibilizado gratuitamente sob licença de código aberto "no estado em que se encontra" (<em>as is</em>), sem garantias de qualquer natureza, expressas ou implícitas. O desenvolvedor não se responsabiliza por eventuais alterações nos parâmetros de busca efetuadas unilateralmente pelo LinkedIn ou pela forma como o usuário final utiliza os links gerados.</p></section>`,
      langLabel: "Idioma: Português",
      toastCopied: "Link do LinkedIn copiado para a área de transferência!",
      toastFilterApplied: (val) => `Filtro "${val}" aplicado!`,
      toastLangChanged: "Idioma alterado para Português"
    },
    en: {
      docTitle: "JobLink | LinkedIn Job Search Link Generator",
      docDesc: "JobLink: Find recently posted LinkedIn jobs before the competition. Configure time, workplace, level filters and generate direct links sorted strictly by date.",
      mainTitle: "Generate LinkedIn job search link",
      mainSubtitle: "Find jobs posted in the last few hours ahead of other applicants. Configure parameters below and copy the link with strict chronological sorting.",
      cargoLabel: "Role or Keywords",
      cargoHint: "Press Enter to copy",
      cargoPlaceholder: "E.g., Junior Web Developer",
      sugLabel: "Quick suggestions:",
      suggestions: [
        { text: "Software Engineer", val: "Software Engineer" },
        { text: "Administrative Assistant", val: "Administrative Assistant" },
        { text: "Financial Analyst", val: "Financial Analyst" },
        { text: "Digital Marketing", val: "Digital Marketing" },
        { text: "Human Resources", val: "Human Resources" },
        { text: "Sales Representative", val: "Sales Representative" },
        { text: "Internship", val: "Internship" },
        { text: "UX/UI Designer", val: "UX/UI Designer" },
        { text: "Customer Support", val: "Customer Support" },
        { text: "Data Scientist", val: "Data Scientist" },
        { text: "Project Manager", val: "Project Manager" },
        { text: "Logistics Specialist", val: "Logistics" }
      ],
      chipsLabel: "Posted in the last",
      chipsHint: "Real-time filter",
      chipOptions: [
        { h: 1, t: "1 hour" },
        { h: 2, t: "2 hours" },
        { h: 6, t: "6 hours" },
        { h: 12, t: "12 hours" },
        { h: 24, t: "24 hours" },
        { h: 168, t: "1 week" }
      ],
      localLabel: "Location",
      localPlaceholder: "E.g., Remote, United States, Worldwide",
      customHoursLabel: "Custom hours",
      customHoursPlaceholder: "E.g., 3, 5, 48",
      modeloLabel: "Workplace model",
      modeloOptions: [
        { val: "", text: "Any workplace type" },
        { val: "2", text: "Remote" },
        { val: "3", text: "Hybrid" },
        { val: "1", text: "On-site" }
      ],
      nivelLabel: "Experience level",
      nivelOptions: [
        { val: "", text: "Any level" },
        { val: "1", text: "Internship" },
        { val: "2", text: "Entry level / Junior" },
        { val: "3", text: "Associate" }
      ],
      ordenarLabel: "Sort by most recent (sortBy=DD)",
      ordenarBadge: "Recommended",
      easyLabel: "Easy Apply only",
      outputLabel: "Your generated search link",
      resultPlaceholder: "The generated link will appear here...",
      btnCopiar: "Copy link",
      btnCopiado: "✓ Copied!",
      btnAbrir: "Open on LinkedIn",
      hintText: "<strong>Tip:</strong> Even with sorting by recent date active, LinkedIn may pin 1 or 2 promoted jobs at the top. Scroll down to see jobs posted just minutes ago.",
      footerCopyright: "JobLink © 2026 • Developed by Mateus Alves",
      footerGithub: "My GitHub",
      footerRepo: "Project Repository",
      footerTerms: "Legal & Disclaimer",
      footerDisclaimer: "JobLink is an independent open-source tool with no affiliation, endorsement, sponsorship, or connection with LinkedIn Corporation or Microsoft Corporation. LinkedIn® is a registered trademark of LinkedIn Corporation.",
      modalTermsTitle: "Legal Notice & Terms of Use",
      modalTermsSub: "Non-affiliation disclaimer and terms of service",
      modalTermsClose: "Understood",
      modalTermsBody: `<section class="modal-section"><h3>1. Trademark & Non-Affiliation Disclaimer</h3><p>LinkedIn® and the LinkedIn logo are registered trademarks exclusively owned by LinkedIn Corporation and/or Microsoft Corporation in the United States and other countries. <strong>JobLink</strong> is an independent open-source utility tool and is <strong>NOT</strong> affiliated, associated, authorized, endorsed, sponsored, or officially connected with LinkedIn Corporation or Microsoft Corporation. Any reference to "LinkedIn" is strictly nominative and descriptive, intended solely to denote the destination platform of generated URLs.</p></section><section class="modal-section"><h3>2. Technical Mechanism & Zero Scraping</h3><p>JobLink acts solely as a formatter of standard public HTTP query parameters (such as <code>keywords</code>, <code>location</code>, <code>f_TPR</code>, and <code>sortBy=DD</code>) natively supported by web browsers. The application <strong>does not</strong> perform web scraping, automated requests, data mining, or unauthorized connections to LinkedIn servers. All search execution occurs manually and voluntarily by the user directly on LinkedIn's official website.</p></section><section class="modal-section"><h3>3. Privacy & Client-Side Processing</h3><p>All processing in JobLink takes place 100% client-side in the user's browser. The application <strong>does not collect, store, or transmit</strong> any personal data, IP addresses, login credentials, passwords, or search history to external servers or third parties.</p></section><section class="modal-section"><h3>4. Limitation of Liability</h3><p>This software is provided free of charge under an open-source license "as is", without warranty of any kind, express or implied. The developer is not liable for any unilateral modifications to search parameters made by LinkedIn or for how users utilize generated links.</p></section>`,
      langLabel: "Language: English",
      toastCopied: "LinkedIn link copied to clipboard!",
      toastFilterApplied: (val) => `Filter "${val}" applied!`,
      toastLangChanged: "Language changed to English"
    }
  };

  let currentLang = localStorage.getItem("joblink_lang") === "en" ? "en" : "pt";
  let horas = 12;

  const $ = id => document.getElementById(id);
  const docTitle = $("doc-title");
  const docDesc = $("doc-desc");
  const formHeading = $("form-heading");
  const formSubtitle = $("form-subtitle");
  const cargoLabel = $("cargo-label");
  const cargoHint = $("cargo-hint");
  const cargoInput = $("cargo");
  const clearCargoBtn = $("clear-cargo");
  const sugLabel = $("sug-label");
  const sugContainer = $("sug-container");
  const chipsLabel = $("chips-label");
  const chipsHint = $("chips-hint");
  const chipsContainer = $("chips");
  const localLabel = $("local-label");
  const localInput = $("local");
  const customHoursLabel = $("custom-hours-label");
  const horasCustomInput = $("horasCustom");
  const modeloLabel = $("modelo-label");
  const modeloSelect = $("modelo");
  const nivelLabel = $("nivel-label");
  const nivelSelect = $("nivel");
  const ordenarLabel = $("ordenar-label");
  const ordenarBadge = $("ordenar-badge");
  const ordenarCheck = $("ordenar");
  const easyLabel = $("easy-label");
  const easyCheck = $("easy");
  const outputLabel = $("output-label");
  const resultadoArea = $("resultado");
  const btnCopiar = $("copiar");
  const btnCopiarText = $("btn-copiar-text");
  const btnAbrir = $("abrir");
  const btnAbrirText = $("btn-abrir-text");
  const hintContent = $("hint-content");
  const footerCopyright = $("footer-copyright");
  const footerGithub = $("footer-github");
  const footerRepo = $("footer-repo");
  const footerTerms = $("footer-terms");
  const footerDisclaimer = $("footer-disclaimer");
  const termsModal = $("terms-modal");
  const openTermsBtn = $("open-terms");
  const closeTermsBtn = $("close-terms");
  const btnTermsCloseAction = $("btn-terms-close-action");
  const modalTermsTitle = $("modal-terms-title");
  const modalTermsSub = $("modal-terms-sub");
  const modalTermsBody = $("modal-terms-body");
  const langSelect = $("lang-select");
  const toastEl = $("toast");

  function renderChips() {
    if (!chipsContainer) return;
    const t = i18n[currentLang];
    chipsContainer.innerHTML = "";
    t.chipOptions.forEach(o => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip-btn" + (o.h === horas ? " active" : "");
      b.textContent = o.t;
      b.dataset.h = o.h;
      b.setAttribute("aria-pressed", o.h === horas);
      b.onclick = () => {
        horas = o.h;
        if (horasCustomInput) horasCustomInput.value = "";
        atualizar();
      };
      chipsContainer.appendChild(b);
    });
  }

  function renderSuggestions() {
    if (!sugContainer) return;
    const t = i18n[currentLang];
    sugContainer.innerHTML = "";
    t.suggestions.forEach(s => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "sug-tag";
      b.dataset.val = s.val;
      b.textContent = s.text;
      sugContainer.appendChild(b);
    });
  }

  function renderSelectOptions() {
    const t = i18n[currentLang];
    if (modeloSelect) {
      const prevModelo = modeloSelect.value;
      modeloSelect.innerHTML = "";
      t.modeloOptions.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.val;
        opt.textContent = o.text;
        modeloSelect.appendChild(opt);
      });
      modeloSelect.value = prevModelo;
    }

    if (nivelSelect) {
      const prevNivel = nivelSelect.value;
      nivelSelect.innerHTML = "";
      t.nivelOptions.forEach(o => {
        const opt = document.createElement("option");
        opt.value = o.val;
        opt.textContent = o.text;
        nivelSelect.appendChild(opt);
      });
      nivelSelect.value = prevNivel;
    }
  }

  function applyLanguage(lang, notify = false) {
    currentLang = lang;
    localStorage.setItem("joblink_lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    const t = i18n[lang];

    if (docTitle) docTitle.textContent = t.docTitle;
    if (docDesc) docDesc.setAttribute("content", t.docDesc);
    if (formHeading) formHeading.textContent = t.mainTitle;
    if (formSubtitle) formSubtitle.textContent = t.mainSubtitle;
    if (cargoLabel) cargoLabel.textContent = t.cargoLabel;
    if (cargoHint) cargoHint.textContent = t.cargoHint;
    if (cargoInput) cargoInput.placeholder = t.cargoPlaceholder;
    if (sugLabel) sugLabel.textContent = t.sugLabel;
    if (chipsLabel) chipsLabel.textContent = t.chipsLabel;
    if (chipsHint) chipsHint.textContent = t.chipsHint;
    if (localLabel) localLabel.textContent = t.localLabel;
    if (localInput) localInput.placeholder = t.localPlaceholder;
    if (customHoursLabel) customHoursLabel.textContent = t.customHoursLabel;
    if (horasCustomInput) horasCustomInput.placeholder = t.customHoursPlaceholder;
    if (modeloLabel) modeloLabel.textContent = t.modeloLabel;
    if (nivelLabel) nivelLabel.textContent = t.nivelLabel;
    if (ordenarLabel) ordenarLabel.textContent = t.ordenarLabel;
    if (ordenarBadge) ordenarBadge.textContent = t.ordenarBadge;
    if (easyLabel) easyLabel.textContent = t.easyLabel;
    if (outputLabel) outputLabel.textContent = t.outputLabel;
    if (resultadoArea) resultadoArea.placeholder = t.resultPlaceholder;
    if (btnCopiarText) btnCopiarText.textContent = t.btnCopiar;
    if (btnAbrirText) btnAbrirText.textContent = t.btnAbrir;
    if (hintContent) hintContent.innerHTML = t.hintText;
    if (footerCopyright) footerCopyright.textContent = t.footerCopyright;
    if (footerGithub) footerGithub.textContent = t.footerGithub;
    if (footerRepo) footerRepo.textContent = t.footerRepo;
    if (footerTerms) footerTerms.textContent = t.footerTerms;
    if (footerDisclaimer) footerDisclaimer.textContent = t.footerDisclaimer;
    if (modalTermsTitle) modalTermsTitle.textContent = t.modalTermsTitle;
    if (modalTermsSub) modalTermsSub.textContent = t.modalTermsSub;
    if (modalTermsBody) modalTermsBody.innerHTML = t.modalTermsBody;
    if (btnTermsCloseAction) btnTermsCloseAction.textContent = t.modalTermsClose;
    if (langSelect) {
      langSelect.innerHTML = lang === "pt"
        ? '<option value="pt" selected>Idioma: Português</option><option value="en">Inglês (English)</option>'
        : '<option value="pt">Portuguese (Português)</option><option value="en" selected>Language: English</option>';
      langSelect.value = lang;
    }

    renderChips();
    renderSuggestions();
    renderSelectOptions();
    atualizar();

    if (notify) {
      showToast(t.toastLangChanged);
    }
  }

  function gerar() {
    if (!cargoInput) return "";
    const cargo = cargoInput.value.trim();
    if (!cargo) return "";

    const custom = horasCustomInput ? parseInt(horasCustomInput.value, 10) : 0;
    const h = custom > 0 ? custom : horas;

    const p = new URLSearchParams();
    p.set("keywords", cargo);

    const local = localInput ? localInput.value.trim() : "";
    if (local) p.set("location", local);

    p.set("f_TPR", "r" + (h * 3600));

    if (modeloSelect && modeloSelect.value) p.set("f_WT", modeloSelect.value);
    if (nivelSelect && nivelSelect.value) p.set("f_E", nivelSelect.value);
    if (easyCheck && easyCheck.checked) p.set("f_EA", "true");
    if (ordenarCheck && ordenarCheck.checked) p.set("sortBy", "DD");

    return "https://www.linkedin.com/jobs/search/?" + p.toString();
  }

  function atualizar() {
    const t = i18n[currentLang];
    const custom = horasCustomInput ? parseInt(horasCustomInput.value, 10) : 0;
    if (chipsContainer) {
      chipsContainer.querySelectorAll(".chip-btn").forEach(c => {
        const isSelected = !(custom > 0) && Number(c.dataset.h) === horas;
        c.classList.toggle("active", isSelected);
        c.setAttribute("aria-pressed", isSelected);
      });
    }

    if (clearCargoBtn) {
      clearCargoBtn.classList.toggle("visible", Boolean(cargoInput && cargoInput.value.trim()));
    }

    const url = gerar();
    if (resultadoArea) resultadoArea.value = url;
    const hasUrl = Boolean(url);

    if (btnCopiar) btnCopiar.disabled = !hasUrl;
    if (btnAbrir) btnAbrir.disabled = !hasUrl;
  }

  async function copiar() {
    if (!resultadoArea) return;
    const url = resultadoArea.value;
    if (!url) return;
    const t = i18n[currentLang];

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      resultadoArea.select();
      document.execCommand("copy");
    }

    if (btnCopiar) btnCopiar.classList.add("btn-copied");
    if (btnCopiarText) btnCopiarText.textContent = t.btnCopiado;
    showToast(t.toastCopied);

    setTimeout(() => {
      if (btnCopiar) btnCopiar.classList.remove("btn-copied");
      if (btnCopiarText) btnCopiarText.textContent = t.btnCopiar;
    }, 2000);
  }

  function abrir() {
    if (!resultadoArea) return;
    const url = resultadoArea.value;
    if (url) {
      window.open(url, "_blank", "noopener");
    }
  }

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
      <span>${msg}</span>
    `;
    toastEl.classList.add("show");
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 2800);
  }

  [cargoInput, localInput, horasCustomInput].forEach(el => {
    if (el) el.addEventListener("input", atualizar);
  });

  [modeloSelect, nivelSelect, ordenarCheck, easyCheck].forEach(el => {
    if (el) el.addEventListener("change", atualizar);
  });

  if (cargoInput) {
    cargoInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        const url = gerar();
        if (url) copiar();
      }
    });
  }

  if (clearCargoBtn) {
    clearCargoBtn.addEventListener("click", () => {
      if (cargoInput) {
        cargoInput.value = "";
        cargoInput.focus();
        atualizar();
      }
    });
  }

  if (resultadoArea) {
    resultadoArea.addEventListener("click", () => {
      if (resultadoArea.value) resultadoArea.select();
    });
  }

  if (btnCopiar) btnCopiar.onclick = copiar;
  if (btnAbrir) btnAbrir.onclick = abrir;

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      applyLanguage(langSelect.value, true);
    });
  }

  document.addEventListener("click", e => {
    const pill = e.target.closest(".sug-tag");
    if (pill && pill.dataset.val && cargoInput) {
      cargoInput.value = pill.dataset.val;
      cargoInput.focus();
      atualizar();
      const t = i18n[currentLang];
      showToast(t.toastFilterApplied(pill.dataset.val));
    }
  });

  function openModal() {
    if (!termsModal) return;
    termsModal.hidden = false;
    requestAnimationFrame(() => termsModal.classList.add("open"));
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!termsModal) return;
    termsModal.classList.remove("open");
    setTimeout(() => {
      termsModal.hidden = true;
      document.body.style.overflow = "";
    }, 200);
  }

  if (openTermsBtn) openTermsBtn.onclick = openModal;
  if (closeTermsBtn) closeTermsBtn.onclick = closeModal;
  if (btnTermsCloseAction) btnTermsCloseAction.onclick = closeModal;
  if (termsModal) {
    termsModal.onclick = e => {
      if (e.target === termsModal) closeModal();
    };
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && termsModal && !termsModal.hidden) {
      closeModal();
    }
  });

  applyLanguage(currentLang, false);
});
