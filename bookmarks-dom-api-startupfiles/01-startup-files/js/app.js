const listeFav = document.getElementById("favoris-container");
const titre = document.getElementById("titre");
const url = document.getElementById("url");
const description = document.getElementById("description");
const bouton = document.querySelector("button");

getData();

function ajoutFavoris() {
	const li = document.createElement("li");
	const a = document.createElement("a");
	const p = document.createElement("p");

	listeFav.appendChild(li);
	li.appendChild(a);
	li.appendChild(p);

	a.textContent = titre.value;
	a.href = url.value;
	a.target = "_blank";

	p.textContent = description.value;
	p.classList.add("description");
}

async function getData() {
	const url = "http://10.69.0.17:8100/bookmarks";
	const response = await fetch(url);
	const json = await response.json();
	console.log(json);
}

bouton.addEventListener("click", () => {
	console.log(titre.value, url.value);
	if (titre.value !== "" && url.value !== "") {
		ajoutFavoris();
	} else {
	}
});
