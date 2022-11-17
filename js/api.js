const input = document.getElementById("api-input");
const btn = document.getElementById("api-btn");
const container = document.querySelector(".imgs-container");

btn.addEventListener("click", () => {
	fetch(`https://api.thecatapi.com/v1/images/search?limit=${input.value}`, {
		method: "GET",
		headers: {
			"x-api-key":
				"live_2i6Xk8ZLNjo6R9P8FShCdyIs1bfUISPqdf5R9KCyk76mZmZYfikAzXUX1kjSnWua",
		},
	})
		.then((resp) => resp.json())
		.then(function (data) {
			let catsHtml = "";
			data.forEach((element) => {
				catsHtml += `<img src="${element.url}" alt="" width="300" height="300" />`;
			});
			container.innerHTML = catsHtml;
		})
		.catch(function (error) {
			console.log(error);
		});
});
