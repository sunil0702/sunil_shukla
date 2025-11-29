const TimeLines = [
	{
		date: "2024 – Present",
		experiences: [
			{
				title: "Senior UI Developer",
				description:
					"Appex Tech Innovation – Angular + Liferay development, Vue.js apps, Razorpay integration, REST APIs, responsive design & testing."
			}
		]
	},

	{
		date: "2022 – 2024",
		experiences: [
			{
				title: "Software Engineer",
				description:
					"NBHC India – Angular web/mobile apps, dynamic dashboards, Figma mobile UI, performance optimization (lazy loading, code splitting)."
			}
		]
	},

	{
		date: "2017 – 2022",
		experiences: [
			{
				title: "Senior Consultant",
				description:
					"Minsyst Pvt. Ltd. (USA – Remote) – Angular.js & Ionic apps, UX workflows, prototypes, usability testing, cross-team collaboration."
			}
		]
	},

	{
		date: "2016",
		experiences: [
			{
				title: "Master of Computer Applications (MCA)",
				description: "University of Mumbai"
			}
		]
	},

	{
		date: "2014",
		experiences: [
			{
				title: "B.Sc. Information Technology",
				description: "University of Mumbai"
			}
		]
	}
];

const TimeLinesContainer = document.querySelector("#resume .timelines");

const timeLineLayout = ({ date, experiences }) => `
    <p class="timeline__date">${date}</p>
    <ul class="timeline__experiences">
        ${experiences
					.map(
						(exp) => `
            <li class="timeline__experience experience">
                <h5 class="experience__title">${exp.title}</h5>
                <p class="experience__description">${exp.description}</p>
            </li>
        `
					)
					.join("")}
    </ul>
`;

TimeLines.forEach((tl) => {
	const el = document.createElement("div");
	el.className = "timeline";
	el.innerHTML = timeLineLayout(tl);
	TimeLinesContainer.appendChild(el);
});
