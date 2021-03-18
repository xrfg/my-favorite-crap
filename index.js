let ul = document.querySelector("ul");

let btn = document.querySelector("button");

let favoriteCrap = document.querySelector("p");

btn.addEventListener("click", () => {
  ul.classList.toggle("hide");
});

ul.addEventListener("click", (event) => {
  event.target.classList.toggle("toggle-favorite");
  let favoriteSelectedCrap = event.target.firstChild.nodeValue;

  favoriteCrap.innerHTML = `you selected ${favoriteSelectedCrap}!`;
});
