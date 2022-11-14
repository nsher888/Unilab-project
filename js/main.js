import { cardsData } from "./cards-data.js";

const cardsContainer = document.getElementById("services-cards");

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
