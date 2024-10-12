function getClick() {
  window.location.href = "./listSub.html";
}
function getToJava() {
  window.location.href = "./java.html";
}
function getToJavaScript() {
  window.location.href = "./javaScript.html";
}

function getBack() {
  window.location.href = "./index.html";
}

// ===============active
const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelector("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
