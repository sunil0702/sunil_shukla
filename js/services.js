const Services = [
	{
		name: "Angular Frontend Development",
		description:
			"Building scalable, modular apps using Angular (v8–v16), TypeScript, RxJS, Angular Material & component architecture.",
		projectsCount: 10,
		icon: '<i class="fa-solid fa-code fa-fw icon"></i>'
	},
	{
		name: "UI/UX Design & Prototyping",
		description:
			"Creating wireframes, prototypes & design systems using Figma and Adobe XD with responsive & accessible layouts.",
		projectsCount: 15,
		icon: '<i class="fa-solid fa-pencil-ruler fa-fw icon"></i>'
	},
	{
		name: "REST API Integration",
		description:
			"Seamless integration of REST APIs, reactive data flows, secure interactions & state management using RxJS.",
		projectsCount: 10,
		icon: '<i class="fa-solid fa-plug fa-fw icon"></i>'
	},
	{
		name: "Testing & Quality Engineering",
		description:
			"Unit testing with Jasmine/Karma, E2E with Protractor, and performance optimization for reliable UI delivery.",
		projectsCount: 20,
		icon: '<i class="fa-solid fa-vial-check fa-fw icon"></i>'
	}
];

const servicesContainer = document.querySelector(
	"#services .services__wrapper"
);

const serviceLayout = ({ name, description, projectsCount, icon }) => `
	<h4 class="service__name">${name}</h4>
	<p class="service__description">${description}</p>
	<span class="service__projects">${projectsCount} Project${projectsCount > 1 ? "s" : ""}</span>
	${icon}
`;

Services.forEach((service) => {
	const el = document.createElement("div");
	el.className = "service";
	el.innerHTML = serviceLayout(service);
	servicesContainer.appendChild(el);
});
