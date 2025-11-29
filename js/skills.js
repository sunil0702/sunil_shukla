const Skills = [
	{ name: "Angular (v8–v16)", image: "angular.png", percentage: 0.95 },
	{ name: "TypeScript", image: "ts.png", percentage: 0.92 },
	{ name: "RxJS", image: "rxjs.png", percentage: 0.90 },
	{ name: "JavaScript (ES6+)", image: "js.svg", percentage: 0.88 },
	{ name: "HTML5", image: "html-5.svg", percentage: 0.95 },
	{ name: "CSS3 / SCSS / Tailwind", image: "css-3.svg", percentage: 0.93 },
	{ name: "Figma / Adobe XD", image: "figma.png", percentage: 0.88 },
	{ name: "Ionic Framework", image: "ionic.png", percentage: 0.82 },
	{ name: "Vue.js", image: "vue.png", percentage: 0.75 },
	{ name: "Git / GitHub / CI-CD", image: "github.png", percentage: 0.85 }
];

var imagesPath = "images/skills/";

const skillsContainer = document.querySelector("#skills .skills__wrapper");

const skillLayout = ({ name, image, percentage }) => `
    <div class="skill__content">
        <img class="skill__image" src="${imagesPath}${image}" alt="${name}" />
        <h4 class="skill__percentage">${percentage * 100}%</h4>
    </div>
    <p class="skill__name">${name}</p>
`;

Skills.forEach((skill) => {
	const el = document.createElement("div");
	el.className = "skill";
	el.innerHTML = skillLayout(skill);
	skillsContainer.appendChild(el);
});
