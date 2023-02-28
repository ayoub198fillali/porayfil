$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  });
});

// Read the data from experience.json
fetch("./experience.json")
  .then((response) => response.json())
  .then((data) => {
    // Iterate through the data and format each experience as a div with the appropriate classes
    const experiences = data.map((experience) => {
      const { title, position, description, duration, side } = experience;
      const contentClasses = side === "right" ? "right" : "left";
      return `
        <div class="container ${contentClasses}">
          <div class="content">
            <div class="tag">
              <h2>${title}</h2>
            </div>
            <div class="desc">
              <h3>${position}</h3>
              <p>${description}</p>
              <p>${duration}</p>
            </div>
          </div>
        </div>
      `;
    });

    // Append each experience div to the timeline
    // const timeline = document.querySelector;
    var timeline = $(".timeline");
    var newElement = $(experiences.join(""));
    timeline.append(newElement);
    // Ajout de la fonction stop.reveal() pour chaque partie du contenu
    srtop.reveal(".experience .timeline", { delay: 400 });
    srtop.reveal(".experience .timeline .content", { interval: 400 });
  })
  .catch((error) => console.error(error));

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL EXPERIENCE */

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/63b8a20d47425128790c1a2b/1gm4ji1k3";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// disable developer mode
// document.onkeydown = function(e) {
//   if(e.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Experience | Portfolio Ayoub FILLALI";
    $("#favicon").attr("href", "/porayfil/assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "/porayfil/assets/images/favhand.png");
  }
});
