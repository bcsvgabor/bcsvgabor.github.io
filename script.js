/** 
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".header-nav").addClass(".sticky");
    } else {
      $(".header-nav").removeClass(".sticky");
    }
  });
});
*/

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > 10) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
