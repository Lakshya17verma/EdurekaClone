// javascript for homepage  advertisement  section
// function timer() {
//   const endTime = new Date("26 June 2023 02:00:00 PM");
//   const currentTime = new Date();
//   const diffr = (endTime - currentTime) / 1000; 
//   const days = Math.floor(diffr / (60 * 60 * 24));
//   const hours = Math.floor(diffr / (60 * 60) % 24);
//   const minutes = Math.floor((diffr / 60) % 60)
//   const seconds = Math.floor(diffr % 60)
//   const showTime = document.getElementsByClassName("time");
//   showTime[0].innerHTML = days;
//   showTime[1].innerHTML = hours;
//   showTime[2].innerHTML = minutes;
//   showTime[3].innerHTML = seconds;
// }
// const adPara = document.querySelector(".ad-para");
// const cutAdBtn = document.getElementById("cutAd");
// const viewOffer = document.getElementById("viewOffer");

// setTimeout(() => {
//   setInterval(() => {
//     timer()
//   }, 1000);
//   adPara.classList.remove("hide");
//   adPara.classList.add("show");
// }, 2000);
// cutAdBtn.addEventListener("click", () => {
//   adPara.classList.remove("show");
//   adPara.classList.add("hide");
//   viewOffer.classList.remove("hide")
//   viewOffer.classList.add("show")
// })

// viewOffer.addEventListener("click", () => {
//   adPara.classList.remove("hide");
//   adPara.classList.add("show");
//   viewOffer.classList.add("hide");
//   viewOffer.classList.remove("show");
// })


const browseCatMob = document.querySelector(".browse-cat-con");
const mobNavCon = document.querySelector(".inner-con");
const mobileNavBtn = document.querySelector(".mob-nav-btn");
const browseCatHead = document.querySelector(".brows-cat-heading");
const shownavBtn = document.getElementById("showNav");
const hiddenDropdown = document.querySelector(".hidden-dropdown");
const catItemContainer = document.querySelector(".cat-item-container");
const catagories = document.querySelector(".categories");
const catItemDetails = document.querySelector(".cat-item-details");
const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const deskMainNav = document.querySelector(".desktop-main-nav");
const trendingCoursesBtn = document.querySelector("#showTrendingCourses");
const trendingCoursesItems = document.querySelector(".trending-couses-items");
const browseCatBtn = document.querySelector(".browse-categores");
const catItemCard = document.querySelector(".cat-item-card");


browseCatHead.addEventListener("click", () => {
  browseCatMob.style.display = "none";
  hiddenDropdown.classList.remove("show");
  hiddenDropdown.style.display = "none";
  rightSide.style.transform = "translateX(300px)";
  rightSide.style.visibility = "hidden";
  leftSide.style.transform = "none";
  trendingCoursesItems.classList.remove("show");
});

function goRight() {
  leftSide.style.transform = "translateX(-300px)";
  rightSide.style.transform = "none";
  rightSide.style.visibility = "visible";
};

function goLeft() {
  rightSide.style.transform = "translateX(300px)";
  rightSide.style.visibility = "hidden";
  leftSide.style.transform = "none";
};
function openBrowseCat() {
  let width = window.matchMedia("(max-width: 800px)")
  if (width.matches) {
    browseCatMob.style.display = "block";
    mobNavCon.style.transform = "translateX(300px)"
    leftSide.style.transform = "translateX(-300px)";
    rightSide.style.transform = "none";
    rightSide.style.visibility = "visible";
    hiddenDropdown.style.display = "none";
    hiddenDropdown.classList.remove("show");
    trendingCoursesItems.classList.remove("show");
  }
}
//  navbaar
shownavBtn.addEventListener("click", () => {
  hiddenDropdown.classList.toggle("show");
  if (hiddenDropdown.classList.contains("show") == true) {
    hiddenDropdown.style.display = "block";
    trendingCoursesItems.classList.remove("show");
    catItemContainer.classList.add("hide");
  }
  else {
    hiddenDropdown.style.display = "none";
    catItemContainer.classList.remove("hide");
  }
})
mobileNavBtn.addEventListener("click", () => {
  browseCatMob.style.display = "block";
  mobNavCon.style.transform = "translateX(300px)"
  hiddenDropdown.style.display = "none";
  hiddenDropdown.classList.remove("show")
  trendingCoursesItems.classList.remove("show");
});

showTrendingCourses.addEventListener("click", () => {
  trendingCoursesItems.classList.toggle("show");
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

for (let i = 0; i < 8; i++) {
  deskMainNav.innerHTML += `<li><a>${categoriesItems[i]}</a></li>`
}
for (let i = 0; i<categoriesItems.length; i++){
  catagories.innerHTML += `<li class="categories-li-items"><a class="cat-li-items-a">${categoriesItems[i]}</a></li>`;

  hiddenDropdown.innerHTML += `<li class="hidden-dropdown-items"><a>${categoriesItems[i]}</a></li>`;

  rightSide.innerHTML += `<li class="right-slide-items categories-li-items"><a>${categoriesItems[i]}</a></li>`;

  trendingCoursesItems.innerHTML += `<li class="item-list"><a>${categoriesItems[i]}</a></li>`;
}

catLi = Array.from(catagories.children)
catLi.forEach(element => {
  element.addEventListener("mouseenter", () => {
    catItemDetails.innerHTML = "";
    for (let i = 0; i < catItemDetailslist[catLi.indexOf(element)].length; i++) {
      catItemDetails.innerHTML += `<li>${catItemDetailslist[catLi.indexOf(element)][i]}</li>`;
    }
    catItemCard.innerHTML = `<h4>${catItemDetailsCard[catLi.indexOf(element)][0]}</h4>
<br>
<div class="dflex mark-title">
    <img src="${catItemDetailsCard[catLi.indexOf(element)][1]}" alt="">
    <p>${catItemDetailsCard[catLi.indexOf(element)][2]}</p>
</div>
<div class="dflex card-details">
    <div class="courses">
        <small>courses</small>
        <br>
        <span>${catItemDetailsCard[catLi.indexOf(element)][3]}</span>
    </div>
    <div class="hours">
        <small>hours</small>
        <br>
        <span>${catItemDetailsCard[catLi.indexOf(element)][4]}</span>
    </div>
    <div class="learners">
        <small>learners</small>
        <br>
        <span>${catItemDetailsCard[catLi.indexOf(element)][5]}</span>
    </div>
</div>
<div class="card-review">
    <span>review</span>
    <span>
        <i class="fa-solid fa-star star-color"></i>
        <i class="fa-solid fa-star star-color"></i>
        <i class="fa-solid fa-star star-color"></i>
        <i class="fa-solid fa-star star-color"></i>
        <i class="fa-solid fa-star"></i>
        4(1200)
    </span>
</div>
<button class="card-view-details">View Details</button>`
  })
});


