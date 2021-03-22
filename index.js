let ul = document.querySelector("ul");

let btn = document.querySelector("button");

let favoriteCrap = document.querySelector("p");

btn.addEventListener("click", () => {
  ul.classList.toggle("hide");
  btn.innerHTML = ul.classList.contains("hide") ? "show crap" : "hide crap";
});

/* ul.addEventListener("click", (event) => {
  event.target.classList.toggle("toggle-favorite");
  let favoriteSelectedCrap = event.target.firstChild.nodeValue;

  favoriteCrap.innerHTML = `you selected ${favoriteSelectedCrap}!`;
}); */

let listItems = document.querySelectorAll("li"); // NodeList

listItems.forEach((li) => {
  li.addEventListener("click", (clickedLi) => {
    // remove existing active class from previous li
    let active = document.querySelector(".toggle-favorite");
    active.classList.remove("toggle-favorite");

    // adding active class to the element user clicked
    clickedLi.target.classList.add("toggle-favorite");

    favoriteCrap.innerHTML = `you selected ${clickedLi.target.innerText}!`;
  });
});
