(function () {
  let copyRightDate = document.getElementById("copyright-date");
  let mobileMenu = document.getElementById("mobile-menu");
  let openMobileMenuBtn = document.getElementById("open-mobile-menu-btn");
  let closeMobileMenuBtn = document.getElementById("close-mobile-menu-btn");

  copyRightDate.innerHTML = new Date().getFullYear();

  openMobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  closeMobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
})();
