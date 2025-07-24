document.addEventListener("DOMContentLoaded", () => {
    // ==== MENU OPEN/CLOSE ====
    // const menu = document.querySelector(".menu");
    // const openMenuBtn = document.querySelector(".gg-menu-right");
    // const closeMenuBtn = document.querySelector(".menuClose");
  
    // if (openMenuBtn && closeMenuBtn && menu) {
    //   openMenuBtn.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     menu.style.top = "0";
    //     menu.style.visibility = "visible";
    //   });
  
    //   closeMenuBtn.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     menu.style.top = "-100vh";
    //     menu.style.visibility = "hidden";
    //   });
    // }
    // ==== MENU OPEN/CLOSE ====
    const menu = document.querySelector(".menu");
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");

    if (openMenuBtn && closeMenuBtn && menu) {
    openMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        menu.style.top = "0";
        menu.style.visibility = "visible";
    });

    closeMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        menu.style.top = "-100vh";
        menu.style.visibility = "hidden";
    });
    }
    // Close the menu when any menu link is clicked
const menuLinks = document.querySelectorAll(".menuItem a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      menu.style.top = "-100vh";
      menu.style.visibility = "hidden";
    }, 100); // Wait 100ms before hiding the menu
  });
});


  
    // ==== POPUP OVERLAY SHOW/HIDE ====
    const overlayLinks = document.querySelectorAll(".flip-card a[href^='#popup']");
    const closePopupLinks = document.querySelectorAll(".popup .close");
  
    overlayLinks.forEach(link => {
      const targetId = link.getAttribute("href").slice(1);
      const popup = document.getElementById(targetId);
      if (popup) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          popup.style.visibility = "visible";
          popup.style.opacity = "1";
        });
      }
    });
  
    closePopupLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const popup = link.closest(".overlay");
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
      });
    });
  
    // ==== HEADER + BUTTON ANIMATIONS ====
    const h1 = document.querySelector(".header h1");
    const buttons = document.querySelectorAll("button");
  
    if (h1) {
      h1.animate([
        { transform: "translateX(-50%)" },
        { transform: "translateX(0)" }
      ], {
        duration: 1000,
        easing: "ease-out"
      });
    }
  
    buttons.forEach(btn => {
      btn.animate([
        { transform: "translateX(50%)" },
        { transform: "translateX(0)" }
      ], {
        duration: 1000,
        easing: "ease-out"
      });
    });
  
    // ==== FLIP-CARD HOVER EFFECT ====
    const flipCards = document.querySelectorAll(".flip-card");
  
    flipCards.forEach(card => {
      const inner = card.querySelector(".flip-card-inner");
      if (inner) {
        card.addEventListener("mouseenter", () => {
          inner.style.transform = "rotateY(180deg)";
        });
        card.addEventListener("mouseleave", () => {
          inner.style.transform = "rotateY(0)";
        });
      }
    });
  });
  