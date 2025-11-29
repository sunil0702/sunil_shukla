const Plans = [
	{
		name: "Starter",
		description: "Perfect for small Angular/UX tasks or UI enhancements",
		pricePerHour: 29,
		features: [
			"UI bug fixing & small component updates",
			"Angular/TypeScript minor enhancements",
			"Responsive UI adjustments",
			"REST API integration fixes",
			"Figma-to-UI small conversions",
			"Support 1 month",
			"Business hours only",
		],
	},

	{
		name: "Professional",
		description: "Ideal for full module development or UI/UX + Angular work",
		pricePerHour: 59,
		features: [
			"Complete Angular module development",
			"UI/UX design (Figma, Adobe XD)",
			"REST API integration (RxJS streams)",
			"Responsive design + accessibility",
			"Code review & performance optimization",
			"Unit testing (Jasmine/Karma)",
			"Support 3 months",
			"Weekend availability (limited)",
		],
	},

	{
		name: "Enterprise",
		description: "Full project ownership with high-priority delivery",
		pricePerHour: 99,
		features: [
			"End-to-end Angular app development",
			"Figma wireframes, prototypes & design systems",
			"Payment integration (Razorpay, secure flows)",
			"Live dashboards (WebSockets, RxJS)",
			"Architecture planning & consulting",
			"E2E Testing (Protractor)",
			"Performance optimization & audit",
			"Support 12 months",
			"High-priority delivery",
		],
	},
];

const plansContainer = document.querySelector("#pricing .pricing__wrapper");

Plans.forEach((plan) => {
	const planElement = document.createElement("div");
	planElement.className = "plan";

	var planHeader = document.createElement("div");
	planHeader.className = "plan__header";

	var name = document.createElement("p");
	name.className = "plan__name";
	name.textContent = plan.name;

	var description = document.createElement("p");
	description.classList = "plan__description";
	description.textContent = plan.description;

	var planTop = document.createElement("div");
	planTop.className = "plan__top";
	planTop.appendChild(name);
	planTop.appendChild(description);

	planHeader.appendChild(planTop);

	var planPrice = document.createElement("p");
	planPrice.className = "plan__price";
	planPrice.innerHTML = `<span>$${plan.pricePerHour}</span>/ hour`;
	planHeader.appendChild(planPrice);

	planElement.appendChild(planHeader);

	var planFeatures = document.createElement("ul");
	planFeatures.className = "plan__features";

	plan.features.forEach((feature) => {
		var planFeature = document.createElement("li");
		planFeature.className = "plan__feature";
		planFeature.textContent = feature;
		planFeatures.appendChild(planFeature);
	});
	planElement.appendChild(planFeatures);

	const pickButton = document.createElement("button");
	pickButton.classList.add("plan__pick-button", "btn-primary", "btn-block");
	pickButton.textContent = "Pick this package";
	planElement.appendChild(pickButton);

	plansContainer.appendChild(planElement);
});
