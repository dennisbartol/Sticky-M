const nav = document.querySelector(".tabs")
const offset = nav.offsetTop; 

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= offset) {
    nav.classList.add("sticky"); 
  } 
  else {
    nav.classList.remove("sticky");
  }
});
