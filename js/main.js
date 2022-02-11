document.addEventListener("DOMContentLoaded", () => {
  const btnSidebar = document.getElementById("btn-sidebar");
  const body = document.getElementsByTagName("body")[0];
  const sideBar = document.getElementById("sidebar");
  const navBar = document.getElementById("navbar");

  const isActive = () => {
    body.classList.toggle("sideback-opacity");
    sideBar.classList.toggle("active");
  };

  const showSidebar = () => {
    isActive();
  };

  const changeStyleNav = () => {
    window.onscroll = (e) => {
      if (window.scrollY >= 40) {
        navBar.classList.add("navbar-active");
      } else {
        navBar.classList.remove("navbar-active");
      }
    };
  };

  const hiddenSibar = (e) => {
    if (e.target.text) {
      isActive();
    }
  };

  btnSidebar.addEventListener("click", showSidebar);
  sideBar.addEventListener("click", hiddenSibar);

  body.addEventListener("click", () => {});

  window.onload = () => {
    changeStyleNav();
  };
});
