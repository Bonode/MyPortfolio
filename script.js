document.addEventListener("scroll", function () {
  var navbarList = document.getElementById("navbar-list");
  var ulComputedStyle = window.getComputedStyle(navbarList);

  if (window.scrollY >= 100) {
    navbarList.style.backgroundColor = "rgba(244, 243, 240, 0.8)";
    navbarList.style.width = ulComputedStyle.width; // Set the width to the computed width of the ul
  } else {
    navbarList.style.backgroundColor = "transparent";
    navbarList.style.width = "auto";
  }
});
