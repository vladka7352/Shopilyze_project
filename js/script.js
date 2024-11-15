const chatIcon = document.getElementById("chatIcon");
const chatWindow = document.getElementById("chatWindow");

chatIcon.addEventListener("click", () => {
  chatWindow.classList.toggle("open");
});

document.querySelectorAll(".page").forEach((button) => {
  button.addEventListener("click", (e) => {
    document.querySelector(".page.active")?.classList.remove("active");
    e.target.classList.add("active");
  });
});
