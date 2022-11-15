import { cardsData } from "./cards-data.js";

const cardsContainer = document.getElementById("services-cards");
const modal = document.getElementById("modal");
const modalWrapper = document.getElementById("dialog-wrapper");
const body = document.querySelector("body");

function render() {
	let feedHtml = "";

	cardsData.forEach((card) => {
		feedHtml += `<div class="services-card" id="services-card">
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

const cardElement = document.querySelectorAll("#services-card");
console.log(cardElement);

cardElement.forEach((element) => {
	element.addEventListener("click", (e) => {
		// body.style.overflow = "hidden";
		modal.showModal();
		function renderModalContent() {
			let modalHtml = "";

			cardsData.forEach((card) => {
				let targetElement =
					e.target.parentNode.children[1].innerText.toLocaleLowerCase();

				if (card.title.toLocaleLowerCase() === targetElement) {
					modalHtml = `<h1>Want to book our services?</h1>
							<img src="${card.image}" alt="" />
							<p class="card-title">${card.title}</p>
							<p class="card-text">
								${card.text}
							</p>
							<button class="modal-btn">Book Now!</button>`;
				}
			});

			return modalHtml;
		}

		modalWrapper.innerHTML = renderModalContent();
	});
});

modal.addEventListener("click", (e) => {
	if (e.target.id === "modal") {
		modal.close();
		// body.style.overflow = "auto";
	}
});
