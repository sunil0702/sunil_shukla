/* Updated projects.js WITH:
   ✓ Play Store Badges
   ✓ Website/App/Tags Filters
   ✓ Same markup/layout your template uses
*/

const Projects = [
  // WEBSITES
  {
    title: "Maxim Tours",
    image: "1.png",
    tags: ["Angular", "Travel", "Responsive"],
    href: "https://www.maximtours.net",
    type: "website",
    desc: "Travel & tour website with booking pages and responsive UI."
  },
  {
    title: "NBHC ProComm",
    image: "2.png",
    tags: ["Angular", "Enterprise", "Payments"],
    href: "https://nbhcprocomm.com/",
    type: "website",
    desc: "Enterprise portal for NBHC with secure workflows and dashboards."
  },
  {
    title: "Pivotroots",
    image: "3.png",
    tags: ["Angular", "Business"],
    href: "https://pivotroots.com/",
    type: "website",
    desc: "Corporate website showcasing services and case studies."
  },
  {
    title: "Pestinct",
    image: "4.png",
    tags: ["Angular", "Service"],
    href: "https://www.pestinct.com/",
    type: "website",
    desc: "Service website with contact forms and service listings."
  },
  {
    title: "Appex Innovation",
    image: "5.png",
    tags: ["Angular", "Liferay", "Product"],
    href: "https://appexinnovation.com/",
    type: "website",
    desc: "Company site for Appex Tech Innovation — product and services."
  },
  {
    title: "MyHealth (iCareSecure)",
    image: "6.png",
    tags: ["Angular", "Healthcare", "WebSockets"],
    href: "https://myhealth.icaresecure.com/",
    type: "website",
    desc: "Healthcare management portal with real-time monitoring features."
  },
  {
    title: "XCIBIL",
    image: "7.png",
    tags: ["Angular", "Finance", "Data Viz"],
    href: "https://xcibil.com/",
    type: "website",
    desc: "Credit-score dashboards and financial data visualizations."
  },
  {
    title: "i2oc",
    image: "8.png",
    tags: ["Angular", "Business"],
    href: "https://www.i2oc.com",
    type: "website",
    desc: "Corporate platform with services and contact flows."
  },
  {
    title: "Minsyst",
    image: "9.png",
    tags: ["Angular.js", "Consulting"],
    href: "https://minsyst.com",
    type: "website",
    desc: "Consulting firm site — showcases team, offerings, and case studies."
  },
  {
    title: "Dr Kanak Madrecha",
    image: "10.png",
    tags: ["Static", "NGO"],
    href: "http://drkanakmadrecha.org",
    type: "website",
    desc: "Doctor / community site with resources and contact details."
  },

  // APPS
  {
    title: "Agrisetu (Android)",
    image: "12.webp",
    tags: ["Android", "Mobile", "Ionic/Angular"],
    href: "https://play.google.com/store/apps/details?id=com.agrisetu&hl=en_IN",
    type: "app",
    desc: "Mobile app for agriculture services and farmer engagement."
  },
  {
    title: "RBL CorpBank App (Android)",
    image: "13.webp",
    tags: ["Android", "Banking"],
    href: "https://play.google.com/store/apps/details?id=com.rblbank.CorpBankApp&hl=en_IN",
    type: "app",
    desc: "Corporate banking mobile application."
  },
  {
    title: "NBHC Room (Android)",
    image: "14.webp",
    tags: ["Android", "Enterprise"],
    href: "https://play.google.com/store/apps/details?id=com.nbhc.room.mvvm&hl=en_IN",
    type: "app",
    desc: "NBHC room management app (MVVM architecture)."
  },
  {
    title: "NBHC ROTS (Android)",
    image: "15.webp",
    tags: ["Android", "Logistics"],
    href: "https://play.google.com/store/apps/details?id=com.nbhc.rots&hl=en_IN",
    type: "app",
    desc: "NBHC ROTS – logistics / route tracking mobile app."
  },
  {
    title: "NBHC Inward Manager (Android)",
    image: "16.webp",
    tags: ["Android", "Enterprise"],
    href: "https://play.google.com/store/apps/details?id=com.nbhc.inwardmanager&hl=en_IN",
    type: "app",
    desc: "Inward manager app for NBHC operations."
  },
  {
    title: "XCIBIL App (Android)",
    image: "17.webp",
    tags: ["Android", "Finance"],
    href: "https://play.google.com/store/apps/details?id=com.xcibil.app&hl=en_IN",
    type: "app",
    desc: "Mobile app for credit score access & visualizations."
  },
  {
    title: "NBHC ROTS (Alt Link)",
    image: "18.webp",
    tags: ["Android", "Logistics"],
    href: "https://play.google.com/store/apps/details?id=com.nbhc.rots",
    type: "app",
    desc: "Alternate Play Store link for NBHC ROTS."
  },
  {
    title: "NBHC Sampler (Android)",
    image: "19.webp",
    tags: ["Android", "Demo"],
    href: "https://play.google.com/store/apps/details?id=com.Nbhc.nbhcsampler&hl=en_IN",
    type: "app",
    desc: "Sampler/demo app for NBHC features."
  },
  {
    title: "Banggood Client (Android)",
    image: "20.webp",
    tags: ["Android", "E-commerce"],
    href: "https://play.google.com/store/apps/details?id=com.banggood.client&hl=en_IN",
    type: "app",
    desc: "Client app for e-commerce platform Banggood."
  },
  {
    title: "KrushiSetu (Android)",
    image: "21.webp",
    tags: ["Android", "Agri"],
    href: "https://play.google.com/store/apps/details?id=com.nbhc.krushisetuapp&hl=en",
    type: "app",
    desc: "KrushiSetu — agriculture assistance mobile app."
  },
  {
    title: "GIM Kerala (Android)",
    image: "22.webp",
    tags: ["Android", "Government"],
    href: "https://play.google.com/store/apps/details?id=in.nic.gimkerala&hl=en_IN",
    type: "app",
    desc: "Government / citizen services mobile app."
  }
];

var imagesPath = "assets/images/projects/";
const projectsContainer = document.querySelector("#portfolio .projects");

/* ------------------------------
   FILTER BUTTONS
------------------------------ */
const filtersContainer = document.createElement("div");
filtersContainer.className = "project-filters";
document.querySelector("#portfolio .wrapper").insertBefore(filtersContainer, projectsContainer);

const allTags = new Set(["All", "Website", "App"]);

Projects.forEach((p) => {
  if (p.type === "website") allTags.add("Website");
  if (p.type === "app") allTags.add("App");
  p.tags.forEach((tag) => allTags.add(tag));
});

// Render filter buttons
allTags.forEach((tag) => {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.dataset.filter = tag;
  btn.innerText = tag;
  filtersContainer.appendChild(btn);
});

/* ------------------------------
   PROJECT CARD LAYOUT
------------------------------ */
const projectLayout = ({ title, image, tags, href, type, desc }) => `
  <a class="project__inner-link" href="${href}" target="_blank" rel="noopener noreferrer">
    <div class="project__content">
      <img class="project__image ${type === "app" ? "myclass" : ""}" 
     src="${imagesPath}${image}" 
     alt="${title}" />


      ${
        type === "app"
          ? `<img src="assets/images/play-badge.png" class="playstore-badge" alt="Google Play"/>`
          : `<span class="website-badge"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>`
      }

      <div class="project__meta">
        <h4 class="project__title">${title}</h4>
        <p class="project__desc">${desc}</p>
        <ul class="project__tags">
          ${tags.map((t) => `<li class="project__tag">${t}</li>`).join("")}
        </ul>
        <span class="project__type">${type === "app" ? "App" : "Website"}</span>
      </div>
    </div>
  </a>
`;

/* ------------------------------
   RENDER PROJECTS
------------------------------ */
function renderProjects(filter = "All") {
  projectsContainer.innerHTML = "";

  let filtered = Projects;

  if (filter !== "All") {
    filtered = Projects.filter(
      (p) =>
        p.type.toLowerCase() === filter.toLowerCase() ||
        p.tags.includes(filter)
    );
  }

  filtered.forEach((project) => {
    const wrapper = document.createElement("div");
    wrapper.className = "project";
    wrapper.innerHTML = projectLayout(project);
    projectsContainer.appendChild(wrapper);
  });
}

// Initial load
renderProjects();

/* ------------------------------
   FILTER CLICK HANDLER
------------------------------ */
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    renderProjects(button.dataset.filter);
  });
});
