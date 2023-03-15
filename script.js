const ukraine = document.getElementById("ukraine");
const russia = document.getElementById("russia");
document.addEventListener("keydown", function (event) {
  jump();
});
function jump() {
  if (ukraine.classList != "jump") {
    ukraine.classList.add("jump");
  }
  setTimeout(function () {
    ukraine.classList.remove("jump");
  }, 300);
}
let isAlive = setInterval(function () {
  let ukrainTop = parseInt(
    window.getComputedStyle(ukraine).getPropertyValue("top")
  );
  let russialeft = parseInt(
    window.getComputedStyle(russia).getPropertyValue("left")
  );
  if (russialeft < 50 && russialeft > 0 && ukrainTop >= 140) {
    alert("GAME OVER");
  }
}, 10);
