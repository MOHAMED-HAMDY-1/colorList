const listItems = document.querySelectorAll("ul li");
const preview = document.querySelector(".preview");
const savedColor = window.localStorage.getItem("color");
if (savedColor) {
  preview.style.backgroundColor = savedColor;
}
listItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    const clickItem = e.currentTarget;
    const color = clickItem.dataset.color;
    window.localStorage.setItem("color", color);
    preview.style.backgroundColor = color;
  });
});
