const Clients = [
	{
		name: "Nirvan Biswas",
		image: "nirvan.avif",
		job: "CTO",
		company: "NBHC India",
		quote:
			"Sunil has been instrumental in transforming our Angular applications. His work on dynamic dashboards and performance optimization significantly improved user experience across our platform."
	},

	{
		name: "Devendra Sharma",
		image: "Devendra-Sharma.svg",
		job: "Project Director",
		company: "Minsyst Pvt. Ltd (USA)",
		quote:
			"Sunil delivered exceptional UI/UX workflows and Angular front-end development. His ability to convert complex requirements into clean, scalable interfaces is outstanding."
	},

	{
		name: "Amit Kulkarni",
		image: "33.webp",
		job: "Tech Lead",
		company: "Appex Tech Innovation",
		quote:
			"From Razorpay integration to building modular Angular components, Sunil consistently delivers high-quality solutions. His attention to detail and ownership mindset make him a top-tier UI developer."
	},
];

var imagesPath = "images/clients/";

const clientsContainer = document.querySelector("#testimonial .slider-wrapper");

const clientLayout = ({ name, image, job, company, quote }) => `
    <div class="client__header">
        <img class="client__image" src="${imagesPath}${image}" />
        <div class="client__info">
            <h6 class="client__name">${name}</h6>
            <p class="client__job">
                ${job} at <span class="client__company">${company}</span>
            </p>
        </div>
	</div>
	<q class="client__quote">${quote}</q>
`;

Clients.forEach((client) => {
	const clientElement = document.createElement("div");
	clientElement.classList.add("client", "slider-slide");
	clientElement.innerHTML = clientLayout(client);
	clientsContainer.appendChild(clientElement);
});

// Slider logic remains unchanged
const slider = document.getElementById("clientsSlider");
const sliderWrapper = slider.querySelector(".slider-wrapper");
const slides = sliderWrapper.getElementsByClassName("slider-slide");
const prevBtn = slider.querySelector(".slider-button-prev");
const nextBtn = slider.querySelector(".slider-button-next");

let currentSlide = 0;

function showSlide() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
	}
	slides[currentSlide].classList.add("active");
}

function moveToNextSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide++;

	if (currentSlide >= slides.length) currentSlide = 0;

	slides[currentSlide].classList.add("active");
}

function moveToPrevSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide--;

	if (currentSlide < 0) currentSlide = slides.length - 1;

	slides[currentSlide].classList.add("active");
}

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

showSlide();
