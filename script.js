const SITE_CONFIG = {
  email: "jrt141628@gmail.com",
  profileUrl: "https://sites.google.com/view/jrtsai/",
  defaultLanguage: "zh",
};

const content = {
  zh: {
    pageTitle: "蔡嘉仁 Jia-Ren Tsai｜個人學術網站",
    pageDescription: "蔡嘉仁（Jia-Ren Tsai）副教授的個人學術網站：研究成果、論文、授課課程與教材。",
    skipLink: "跳至主要內容",
    brandName: "蔡嘉仁 · Jia-Ren Tsai",
    brandRole: "統計方法與統計研究",
    menuLabel: "開啟導覽選單",
    navResearch: "研究",
    navPublications: "論文",
    navTeaching: "教學",
    navContact: "聯絡",
    heroEyebrow: "蔡嘉仁 · Jia-Ren Tsai",
    heroGreeting: "以嚴謹的方法，",
    heroEmphasis: "回答重要的研究問題。",
    heroLead:
      "我的研究聚焦於統計方法、測量誤差、機器學習與教育測量，並關注方法如何轉化為可信且可解釋的實證證據。",
    viewResearch: "瀏覽研究",
    viewTeaching: "查看課程",
    profilePhotoAlt: "蔡嘉仁副教授於海上拍攝的個人照片",
    profileName: "蔡嘉仁",
    profileTitle: "副教授",
    profileAffiliation: "輔仁大學統計資訊學系",
    profileSiteLabel: "原個人網站",
    profileLabel: "學術網站",
    researchKicker: "研究",
    researchTitle: "研究計畫與方法發展",
    researchIntro:
      "研究工作橫跨統計理論、計算方法與心理教育應用，重視估計目標、推論母群與可重現分析之間的一致性。",
    publicationKicker: "論文",
    publicationTitle: "論文與研究成果",
    publicationIntro: "論文、工作論文與研究成果將在確認公開資訊後陸續更新。",
    publicationEmptyTitle: "論文資料整理中",
    publicationEmptyText: "完整書目與全文連結將陸續登錄。",
    teachingKicker: "教學",
    teachingTitle: "授課課程與教材",
    teachingIntro:
      "課程強調方法理解、軟體實作與結果溝通，協助學生從研究問題走向可辯護的統計結論。",
    materialsNote: "課程教材將依授課進度陸續更新。",
    materialsLabel: "教材",
    contactKicker: "聯絡",
    contactTitle: "研究合作與學術交流",
    contactText: "歡迎就統計方法、測量誤差、教育測量與跨領域研究進行交流。",
    emailLabel: "電子郵件",
    backToTop: "返回頁首 ↑",
    copyCitation: "複製引用",
    copied: "已複製引用資訊",
    disciplines: ["統計方法", "測量誤差", "機器學習", "教育測量"],
    research: [
      {
        title: "含測量誤差共變數的生存分析",
        description:
          "發展比例勝算混合治癒模型的校正分數方法，整合發生率、潛伏期與 sandwich 推論。",
        tags: ["Survival analysis", "Corrected score", "Measurement error"],
      },
      {
        title: "多項式誤差變數模型與集成估計",
        description:
          "比較正則化校正方法、SIMEX 與雙層集成架構，在不同誤差分布與條件數下評估估計與預測表現。",
        tags: ["EIV models", "Regularization", "Ensemble learning"],
      },
      {
        title: "成就情緒與任務價值的心理計量研究",
        description:
          "透過探索性與驗證性因素分析、重測信度及多群組不變性，建構適用於教育情境的 EVT–Cost 測量工具。",
        tags: ["Psychometrics", "SEVT", "Measurement invariance"],
      },
      {
        title: "大型教育與健康資料的實證建模",
        description:
          "結合抽樣權重、迴歸與可解釋機器學習，探討跨國教育指標與健康風險的群體差異。",
        tags: ["TIMSS", "Risk modeling", "Interpretable ML"],
      },
    ],
    publications: [],
    courses: [
      {
        level: "大學部",
        title: "心理與教育統計學",
        description: "從描述統計、機率概念到平均數檢定，建立統計推論與結果解讀的基礎。",
        topics: "描述統計 · t 檢定 · 效果量",
      },
      {
        level: "研究所",
        title: "高等教育統計學",
        description: "以研究問題為起點，涵蓋變異數分析、迴歸、中介與調節，並結合軟體實作。",
        topics: "ANOVA · Regression · Mediation",
      },
      {
        level: "英語授課",
        title: "抽樣技術",
        description: "介紹機率抽樣設計、估計量、設計效果與複雜調查資料分析的核心原理。",
        topics: "Sampling · Weighting · Survey design",
      },
      {
        level: "研究所",
        title: "測驗分析",
        description: "從古典測驗理論出發，探討信度、效度、題目分析與測量模型的實務應用。",
        topics: "Reliability · Validity · Item analysis",
      },
      {
        level: "大學部／研究所",
        title: "研究法",
        description: "連結研究設計、測量、抽樣與資料分析，培養可重現且合乎倫理的研究實務。",
        topics: "Design · Measurement · Reproducibility",
      },
      {
        level: "研究所",
        title: "實驗設計與分析",
        description: "探討單因子與多因子設計、重複量數及模型診斷，強調設計與分析的一致性。",
        topics: "Factorial design · Repeated measures",
      },
    ],
  },
  en: {
    pageTitle: "Jia-Ren Tsai｜Academic Website",
    pageDescription:
      "Academic website of Jia-Ren Tsai, Associate Professor at Fu Jen Catholic University: research, publications, courses, and teaching materials.",
    skipLink: "Skip to main content",
    brandName: "Jia-Ren Tsai",
    brandRole: "Statistical Methods & Statistical Research",
    menuLabel: "Open navigation menu",
    navResearch: "Research",
    navPublications: "Publications",
    navTeaching: "Teaching",
    navContact: "Contact",
    heroEyebrow: "Jia-Ren Tsai · 蔡嘉仁",
    heroGreeting: "Rigorous methods for",
    heroEmphasis: "questions that matter.",
    heroLead:
      "My work focuses on statistical methodology, measurement error, machine learning, and educational measurement—connecting sound methods with credible and interpretable evidence.",
    viewResearch: "Explore research",
    viewTeaching: "View courses",
    profilePhotoAlt: "Portrait of Associate Professor Jia-Ren Tsai at sea",
    profileName: "Jia-Ren Tsai",
    profileTitle: "Associate Professor",
    profileAffiliation: "Department of Statistics and Information Science, Fu Jen Catholic University",
    profileSiteLabel: "Previous academic site",
    profileLabel: "Academic website",
    researchKicker: "Research",
    researchTitle: "Projects & Method Development",
    researchIntro:
      "My work connects statistical theory, computation, and applications in psychology and education, with particular attention to alignment among the estimand, inferential population, and reproducible analysis.",
    publicationKicker: "Publications",
    publicationTitle: "Publications & Research Outputs",
    publicationIntro: "Publications, working papers, and research outputs will be added after public details are confirmed.",
    publicationEmptyTitle: "Publication list in preparation",
    publicationEmptyText: "Full citations and links will be added progressively.",
    teachingKicker: "Teaching",
    teachingTitle: "Courses & Materials",
    teachingIntro:
      "My courses integrate methodological understanding, software practice, and clear communication—from a research question to a defensible statistical conclusion.",
    materialsNote: "Course materials will be added in step with each course.",
    materialsLabel: "Materials",
    contactKicker: "Contact",
    contactTitle: "Research Collaboration & Academic Exchange",
    contactText:
      "I welcome conversations about statistical methods, measurement error, educational measurement, and interdisciplinary research.",
    emailLabel: "Email",
    backToTop: "Back to top ↑",
    copyCitation: "Copy citation",
    copied: "Citation copied",
    disciplines: ["Statistical Methods", "Measurement Error", "Machine Learning", "Educational Measurement"],
    research: [
      {
        title: "Survival Analysis with Mismeasured Covariates",
        description:
          "Developing corrected-score methods for proportional odds mixture cure models, integrating incidence, latency, and sandwich inference.",
        tags: ["Survival analysis", "Corrected score", "Measurement error"],
      },
      {
        title: "Polynomial EIV Models & Ensemble Estimation",
        description:
          "Comparing regularized correction methods, SIMEX, and two-layer ensembles across error distributions and conditioning regimes.",
        tags: ["EIV models", "Regularization", "Ensemble learning"],
      },
      {
        title: "Psychometrics of Expectancy, Value, and Cost",
        description:
          "Developing an EVT–Cost measure through exploratory and confirmatory factor analysis, test–retest reliability, and multigroup invariance.",
        tags: ["Psychometrics", "SEVT", "Measurement invariance"],
      },
      {
        title: "Empirical Modeling of Education & Health Data",
        description:
          "Using survey weights, regression, and interpretable machine learning to study group differences in educational indicators and health risk.",
        tags: ["TIMSS", "Risk modeling", "Interpretable ML"],
      },
    ],
    publications: [],
    courses: [
      {
        level: "Undergraduate",
        title: "Psychological & Educational Statistics",
        description:
          "Foundations of statistical inference, from descriptive statistics and probability to tests of means and interpretation.",
        topics: "Descriptive statistics · t tests · Effect sizes",
      },
      {
        level: "Graduate",
        title: "Advanced Statistics in Education",
        description:
          "Research-driven coverage of ANOVA, regression, mediation, and moderation, integrated with software practice.",
        topics: "ANOVA · Regression · Mediation",
      },
      {
        level: "English-medium",
        title: "Sampling Techniques",
        description:
          "Core principles of probability sampling, estimation, design effects, and analysis of complex survey data.",
        topics: "Sampling · Weighting · Survey design",
      },
      {
        level: "Graduate",
        title: "Test Analysis",
        description:
          "Reliability, validity, item analysis, and measurement models, beginning with classical test theory.",
        topics: "Reliability · Validity · Item analysis",
      },
      {
        level: "Undergraduate / Graduate",
        title: "Research Methods",
        description:
          "Connecting study design, measurement, sampling, and analysis for reproducible and ethical research practice.",
        topics: "Design · Measurement · Reproducibility",
      },
      {
        level: "Graduate",
        title: "Experimental Design & Analysis",
        description:
          "One- and multifactor designs, repeated measures, and model diagnostics, with design–analysis alignment throughout.",
        topics: "Factorial design · Repeated measures",
      },
    ],
  },
};

let language = localStorage.getItem("academic-site-language") || SITE_CONFIG.defaultLanguage;
let toastTimer;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function renderStaticText(dictionary) {
  $$('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });

  $$('[data-i18n-aria]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  $$('[data-i18n-alt]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (typeof value === "string") element.setAttribute("alt", value);
  });
}

function renderDisciplines(items) {
  $("#discipline-track").innerHTML = items
    .map(
      (item) =>
        `<span class="discipline-item"><span class="discipline-dot" aria-hidden="true"></span>${item}</span>`,
    )
    .join("");
}

function renderResearch(items) {
  $("#research-grid").innerHTML = items
    .map(
      (item, index) => `
        <article class="research-card reveal">
          <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <ul class="tag-list" aria-label="Topics">
            ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </article>`,
    )
    .join("");
}

function renderPublications(items, dictionary) {
  if (!items.length) {
    $("#publication-list").innerHTML = `
      <div class="publication-empty reveal">
        <span class="publication-empty-mark" aria-hidden="true">＋</span>
        <div>
          <h3>${dictionary.publicationEmptyTitle}</h3>
          <p>${dictionary.publicationEmptyText}</p>
        </div>
      </div>`;
    return;
  }

  $("#publication-list").innerHTML = items
    .map(
      (item) => `
        <article class="publication-item reveal">
          <span class="publication-year">${item.year}</span>
          <div>
            <h3>${item.title}</h3>
            <p class="publication-meta">${item.meta}</p>
          </div>
          <button class="publication-action" type="button" data-citation="${item.title}. ${item.meta}">
            ${dictionary.copyCitation}
          </button>
        </article>`,
    )
    .join("");

  $$("[data-citation]").forEach((button) => {
    button.addEventListener("click", () => copyCitation(button.dataset.citation, dictionary.copied));
  });
}

function renderCourses(items, dictionary) {
  $("#course-grid").innerHTML = items
    .map(
      (item) => {
        const materials = (item.materials || [])
          .map(
            (material) =>
              `<a href="${material.url}" target="_blank" rel="noopener noreferrer">${material.label}<span aria-hidden="true">↗</span></a>`,
          )
          .join("");

        return `
        <article class="course-card reveal">
          <span class="course-level">${item.level}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="course-topics">${item.topics}</div>
          ${
            materials
              ? `<div class="course-materials"><strong>${dictionary.materialsLabel}</strong>${materials}</div>`
              : ""
          }
        </article>`;
      },
    )
    .join("");
}

function updateLanguageButton() {
  const toggle = $(".language-toggle");
  const nextLanguage = language === "zh" ? "English" : "中文";
  toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切換至中文");
  toggle.innerHTML = language === "zh"
    ? '<span class="language-active">中</span><span aria-hidden="true">／</span><span>EN</span>'
    : '<span>中</span><span aria-hidden="true">／</span><span class="language-active">EN</span>';
  toggle.title = nextLanguage;
}

function updateEmail(dictionary) {
  const emailLink = $("#email-link");
  emailLink.href = `mailto:${SITE_CONFIG.email}`;
  emailLink.title = SITE_CONFIG.email;
  emailLink.setAttribute("aria-label", `${dictionary.emailLabel}: ${SITE_CONFIG.email}`);
  $("#email-address").textContent = SITE_CONFIG.email;
}

function updateProfileLinks(dictionary) {
  [$("#profile-site-link"), $("#contact-profile-link")].forEach((link) => {
    link.href = SITE_CONFIG.profileUrl;
    link.setAttribute("aria-label", `${dictionary.profileSiteLabel} — ${dictionary.profileName}`);
  });
}

function renderSite() {
  const dictionary = content[language];
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.title = dictionary.pageTitle;
  $('meta[name="description"]').setAttribute("content", dictionary.pageDescription);
  renderStaticText(dictionary);
  renderDisciplines(dictionary.disciplines);
  renderResearch(dictionary.research);
  renderPublications(dictionary.publications, dictionary);
  renderCourses(dictionary.courses, dictionary);
  updateLanguageButton();
  updateEmail(dictionary);
  updateProfileLinks(dictionary);
  observeReveals();
}

async function copyCitation(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    showToast(successMessage);
  }
}

function showToast(message) {
  const toast = $(".toast");
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function observeReveals() {
  const elements = $$(".reveal:not(.is-visible)");
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
}

function setupNavigation() {
  const menuToggle = $(".menu-toggle");
  const navigation = $(".primary-nav");

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  $$(".primary-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });

  const sections = ["research", "publications", "teaching", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      $$(".primary-nav a").forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-18% 0px -62%", threshold: [0.05, 0.2, 0.5] },
  );
  sections.forEach((section) => spy.observe(section));
}

$(".language-toggle").addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  localStorage.setItem("academic-site-language", language);
  renderSite();
});

$("#current-year").textContent = new Date().getFullYear();
setupNavigation();
renderSite();
