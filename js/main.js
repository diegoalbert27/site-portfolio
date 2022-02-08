document.addEventListener("DOMContentLoaded", () => {
  const btnSidebar = document.getElementById("btn-sidebar");
  const body = document.getElementsByTagName("body")[0];
  const sideBar = document.getElementById("sidebar");

  const isActive = () => {
    body.classList.toggle("sideback-opacity");
    sideBar.classList.toggle("active");
  };

  const showSidebar = () => {
    isActive();
  };

  const hiddenSibar = (e) => {
    if (e.target.text) {
      isActive();
    }
  };

  btnSidebar.addEventListener("click", showSidebar);
  sideBar.addEventListener("click", hiddenSibar);

  body.addEventListener('click', () => {});
});
