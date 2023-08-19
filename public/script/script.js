function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
let isPlay = false;
history.scrollRestoration = "manual";
window.scrollTo(0, 0);
// function getMessages() {
//   $("#listMessages").html("");
//   $.getJSON("https://api.goinvite.id/api/public/message/jwLydnPG9Wt11qdP", function (data) {
//     data.result.map((message, i) => {
//       $("#listMessages").append(`<div class="relative flex items-start space-x-3"><div class="relative"><span class="flex mx-auto mb-4 items-center justify-center h-12 w-12 rounded-full bg-gray-400"><span class="text-sm sm:text-base font-normal leading-none text-white">${message.name.length > 0 ? message.name.substr(0, 1) : "-"}</span></span></div><div class="min-w-0 flex-1"><div><p class="font-color-four font-four text-sm font-bold">${message.name}</p></div><div class="mt-1 font-light font-color-four font-four text-sm"><p>${message.body}</p></div></div></div>`);
//     });
//   }
//   );
// }
// getMessages();
// $(document).on("click", 'a[href^="#"]', function (event) {
//   event.preventDefault();
//   $("html, body").animate(
//     { scrollTop: $($.attr(this, "href")).offset().top },
//     1000
//   );
// });
document.addEventListener("DOMContentLoaded", () => {
    const countDownDate = new Date("2023-09-02 12:00:00".replace(/-/g, "/")).getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (!isNaN(distance) && Number(seconds) > 0) {
        document.getElementById("countdownDay").innerHTML = String(days).padStart(2, "0");
        document.getElementById("countdownHour").innerHTML = String(hours).padStart(2, "0");
        document.getElementById("countdownMinute").innerHTML = String(minutes).padStart(2, "0");
        document.getElementById("countdownSecond").innerHTML = String(seconds).padStart(2, "0");
      }
    }, 1000);
    
    // const swiper = new Swiper(".memo-swiper", {
    //   centeredSlides: true,
    //   effect: "fade",
    //   autoplay: { delay: 4500, disableOnInteraction: false },
    // });
    // var clipboard = new ClipboardJS(".btn");
    // const clipboard = new ClipboardJS(".btn");
    // clipboard.on("success", (e) => {
    //   Toastify({
    //     text: "Berhasil disalin",
    //     duration: 3000,
    //     gravity: "top",
    //     position: "right",
    //     style: { background: "rgb(15 15 15)", color: "#fff", fontSize: "12px" },
    //   }).showToast();
    //   e.clearSelection();
    // });
    // const swiperKenburnImages = document.querySelectorAll(".swiper-kenburn .swiper-slide img");
    // swiperKenburnImages.forEach((image) => {
    //   const transformOrigin = image.getAttribute("data-transform-origin");
    //   if (transformOrigin) {
    //     image.style.transformOrigin = transformOrigin;
    //   }
    // });
    const openEnvelopeButton = document.getElementById("openEnvelope");
    const envelope = document.getElementById("envelope");
    const decorEnvelope = document.querySelector(".decor-envelope");
    const musicContainer = document.getElementById("musicContainer");
    const music = document.getElementById("music");

    openEnvelopeButton.addEventListener("click", () => {
      envelope.classList.add("close-envelope");
      decorEnvelope.style.display = "none";
      document.body.classList.remove("stop-scrolling");
      musicContainer.classList.remove("hidden");
      music.play();
      isPlay = true;
    });
    const musicPlayButton = document.getElementById("musicPlay");
    const musicPauseButton = document.getElementById("musicPause");
    musicPlayButton.addEventListener("click", () => {
      musicPlayButton.classList.add("hidden");
      musicPauseButton.classList.remove("hidden");
      if (!isPlay) {
        music.play();
        isPlay = true;
      } else {
        music.muted = false;
      }
    });

    musicPauseButton.addEventListener("click", () => {
      musicPauseButton.classList.add("hidden");
      musicPlayButton.classList.remove("hidden");
      music.muted = true;
    });
    //   const sendMessageButton = document.getElementById("sendMessage");
    //   const modalMessage = document.getElementById("modalMessage");
    //     $("#formSendMessage").submit(function (e) {
    //       $("#formSendMessage").find("button[type=submit]").css("background-color", "#e9e4de");
    //       $("#formSendMessage").find("button[type=submit]").attr("disabled", "disabled");
    //       e.preventDefault();
    //       $.post("https://api.goinvite.id/api/public/message/jwLydnPG9Wt11qdP",
    //         $(this).serialize(),
    //         function (data) {
    //           if (!data.error) {
    //             $("#formSendMessage")
    //               .find("button[type=submit]")
    //               .css("background-color", "#C2AE92");
    //             $("#formSendMessage").find("button[type=submit]").removeAttr("disabled");
    //             Toastify({
    //               text: "Berhasil terkirim",
    //               duration: 3000,
    //               gravity: "top",
    //               position: "right",
    //               style: {
    //                 background: "rgb(15 15 15)",
    //                 color: "#fff",
    //                 fontSize: "12px",
    //               },
    //             }).showToast();
    //             getMessages();
    //             $("#formSendMessage").trigger("reset");
    //             $("#modalMessage").fadeOut();
    //           }
    //         }, "json");
    //     });
    //     $("#sendRsvp").click(function () {
    //       $("#modalRsvp").fadeIn();
    //     });
    //     $("#formSendRsvp").submit(function (e) {
    //       $("#formSendRsvp").find("button[type=submit]").css("background-color", "#e9e4de");
    //       $("#formSendRsvp").find("button[type=submit]").attr("disabled", "disabled");
    //       e.preventDefault();
    //       $.post("https://api.goinvite.id/api/public/rsvp/jwLydnPG9Wt11qdP",
    //         $(this).serialize(),
    //         function (data) {
    //           if (!data.error) {
    //             $("#formSendRsvp").find("button[type=submit]").css("background-color", "#C2AE92");
    //             $("#formSendRsvp").find("button[type=submit]").removeAttr("disabled");
    //             Toastify({
    //               text: "Berhasil terkirim",
    //               duration: 3000,
    //               gravity: "top",
    //               position: "right",
    //               style: {
    //                 background: "rgb(15 15 15)",
    //                 color: "#fff",
    //                 fontSize: "12px",
    //               },
    //             }).showToast();
    //             getMessages();
    //             $("#formSendRsvp").trigger("reset");
    //             $("#modalRsvp").fadeOut();
    //           }
    //         }, "json");
    //     });
    //   });
    // var swiper = new swiper(".mySwiper", {
    //   spaceBetween: 10,
    //   slidesPerView: 4,
    //   freeMode: true,
    //   watchSlidesProgress: true,
    // });
    // var swiper2 = new swiper(".mySwiper2", {
    //   autoplay: { delay: 5000 },
    //   spaceBetween: 10,
    //   navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    //   thumbs: { swiper: swiper },
    //   on: {
    //     imagesReady: function () {
    //       window.lightGallery(document.getElementById("animated-thumbnails-gallery"),
    //         {
    //           autoplayFirstVideo: false,
    //           pager: false,
    //           galleryId: "nature",
    //           plugins: [lgZoom, lgThumbnail],
    //           mobileSettings: {
    //             controls: false,
    //             showCloseIcon: true,
    //             download: false,
    //             rotate: false,
    //           },
    //         }
    //       );
    //     },
    //   },
  });
