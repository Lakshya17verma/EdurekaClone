
// javascript for advertisement 
function timer() {
  const endTime = new Date("26 June 2023 02:00:00 PM");
  const currentTime = new Date();
  const diffr = (endTime - currentTime) / 1000; //time diff is now in seconds
  /*  
1 day = 24 hours
1 hour = 60 minuts
1 minut = 60 seconds
*/
  const days = Math.floor(diffr / (60 * 60 * 24));
  const hours = Math.floor(diffr / (60 * 60) % 24);
  const minutes = Math.floor((diffr / 60) % 60)
  const seconds = Math.floor(diffr % 60)
  const showTime = document.getElementsByClassName("time");
  showTime[0].innerHTML = days;
  showTime[1].innerHTML = hours;
  showTime[2].innerHTML = minutes;
  showTime[3].innerHTML = seconds;
}
setInterval(() => {
  timer()
}, 1000);


const adPara = document.querySelector(".ad-para");
//showAd with delay of 3 secons after pageload
function setAd() {
  setTimeout(() => {
    adPara.classList.add("show");
    viewOffer.classList.add("hide");
  }, 1);
}
setAd()


// to hide ad function starts here
const cutAdBtn = document.getElementById("cutAd");
const viewOffer = document.getElementById("viewOffer");

viewOffer.addEventListener("click", () => {
  adPara.classList.remove("hide");
  adPara.classList.add("show");
  viewOffer.classList.add("hide");
})
cutAdBtn.addEventListener("click", () => {
  adPara.classList.remove("show");
  viewOffer.classList.remove("hide")
  viewOffer.classList.add("show")
})
// mobile navbar
const browseCatMob = document.querySelector(".browse-cat-con");
const mobNavCon = document.querySelector(".inner-con");
const mobileNavBtn = document.querySelector(".mob-nav-btn");
const browseCatHead = document.querySelector(".brows-cat-heading");
const shownavBtn = document.getElementById("showNav");
const hiddenDropdown = document.querySelector(".hidden-dropdown");
const catagories = document.querySelector(".categories");
const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const deskMainNav = document.querySelector(".desktop-main-nav");

mobileNavBtn.addEventListener("click", () => {
  browseCatMob.style.display = "block";
  mobNavCon.style.transform = "translateX(300px)"
  hiddenDropdown.style.display = "none";
});
browseCatHead.addEventListener("click", () => {
  browseCatMob.style.display = "none";
  hiddenDropdown.classList.remove("show");
  rightSide.style.transform = "translateX(300px)";
  rightSide.style.visibility = "hidden";
  leftSide.style.transform = "none";  
});

function goRight(){
  leftSide.style.transform = "translateX(-300px)";
  rightSide.style.transform = "none";
  rightSide.style.visibility = "visible";
};

function goLeft(){
  rightSide.style.transform = "translateX(300px)";
  rightSide.style.visibility = "hidden";
  leftSide.style.transform = "none";
};
function openBrowseCat(){
  let width = window.matchMedia("(max-width: 800px)")
  if(width.matches){
    browseCatMob.style.display = "block";
    mobNavCon.style.transform = "translateX(300px)"
    hiddenDropdown.style.display = "none";
    leftSide.style.transform = "translateX(-300px)";
    rightSide.style.transform = "none";
    rightSide.style.visibility = "visible";
  } 
}
//  navbaar
shownavBtn.addEventListener("click", () => {
  document.querySelector(".hidden-dropdown").classList.toggle("show");
  if (document.querySelector(".hidden-dropdown").classList.contains("show") == true) {
    hiddenDropdown.style.display = "block";
  }
  else {
    hiddenDropdown.style.display = "none";
  }
})

// parse jason file to populate html to show categories in navbaar
fetch('homepage-data.json')
  .then((response) => response.json())
  .then((list) => {
    for (let i = 0; i < 8; i++) {
      deskMainNav.innerHTML += `<li><a>${list.categoriesItems[i]}</a></li>`
    }
    for (let i = 0; i < list.categoriesItems.length; i++) {
      hiddenDropdown.innerHTML += `<li class="hidden-dropdown-items"><a>${list.categoriesItems[i]}</a></li>`
      catagories.innerHTML += `<li class="categories-li-items"><a>${list.categoriesItems[i]}</a></li>`
      rightSide.innerHTML += `<li class="right-slide-items"><a>${list.categoriesItems[i]}</a></li>`
    }
  });


  // image swiper
  var swiper = new Swiper(".mySwiper", {
    speed: 1400,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });