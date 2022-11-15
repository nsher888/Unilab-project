import { cardsData } from "./cards-data.js";

const cardsContainer = document.getElementById("services-cards");
const modal = document.getElementById("modal");

const cardElement = document.querySelectorAll(".services-card");

console.log(cardElement);

function render() {
	let feedHtml = "";

	cardsData.forEach((card) => {
		feedHtml += `<div class="services-card">
        <img src="${card.image}" alt="" />
        <p class="card-title">${card.title}</p>
        <p class="card-text">
            ${card.text}
        </p>
    </div>`;
	});

	return feedHtml;
}

cardsContainer.innerHTML = render();

cardsContainer.addEventListener("click", (e) => {
	modal.showModal();
});

modal.addEventListener("click", (e) => {
	if (e.target == modal) {
		modal.close();
	}
});
