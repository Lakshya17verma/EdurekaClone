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
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
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
for (let i = 0; i < categoriesItems.length; i++) {
  catagories.innerHTML += `<li class="categories-li-items"><a class="cat-li-items-a">${categoriesItems[i]}</a></li>`;

  hiddenDropdown.innerHTML += `<li class="hidden-dropdown-items"><a>${categoriesItems[i]}</a></li>`;

  rightSide.innerHTML += `<li class="right-slide-items categories-li-items"><a>${categoriesItems[i]}</a></li>`;

  trendingCoursesItems.innerHTML += `<li class="item-list"><a>${categoriesItems[i]}</a></li>`;
}

catLi = Array.from(catagories.children)
catLi.forEach(element => {
  element.addEventListener("mouseover", () => {
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


// trending courses main section script

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const grid4 = document.querySelectorAll(".grid-4");

const grid4Array = Array.from(grid4);

grid4Array.forEach(thisElement => {
  thisElement.innerHTML += `<div class="course-img" style="background-image:${trendingCoursesDetails[grid4Array.indexOf(thisElement)][0]};">
    <span>
        <i class="${trendingCoursesDetails[grid4Array.indexOf(thisElement)][1]}"></i>
    </span>
    <span>${trendingCoursesDetails[grid4Array.indexOf(thisElement)][2]}
    </span>
   </div>
   <div class="course-desc">
    <b>${trendingCoursesDetails[grid4Array.indexOf(thisElement)][3]}</b>
    <div class="course-desc-details">
        <small>Review</small>
         <span>
            <i class="${trendingCoursesDetails[grid4Array.indexOf(thisElement)][4]}"></i>
            <i class="${trendingCoursesDetails[grid4Array.indexOf(thisElement)][5]}"></i>
            <i class="${trendingCoursesDetails[grid4Array.indexOf(thisElement)][6]}"></i>
            <i class="${trendingCoursesDetails[grid4Array.indexOf(thisElement)][7]}"></i>
            <i class="${trendingCoursesDetails[grid4Array.indexOf(thisElement)][8]}"></i>
            ${trendingCoursesDetails[grid4Array.indexOf(thisElement)][9]}${trendingCoursesDetails[grid4Array.indexOf(thisElement)][10]}
        </span>
    </div>
   </div>`
})


const grid4hover = Array.from(document.querySelectorAll(".grid-4-hover"))
grid4hover.forEach(hoverElement => {
  hoverElement.innerHTML = `<i><small>next batch</small></i>
 <span>${trendingCoursesDetails[grid4hover.indexOf(hoverElement)][11]}</span>
 <i><small>what will I learn?</small></i>
 <ul>
     <li>${trendingCoursesDetails[grid4hover.indexOf(hoverElement)][12]}</li>
     <li>${trendingCoursesDetails[grid4hover.indexOf(hoverElement)][13]}</li>
     <li>${trendingCoursesDetails[grid4hover.indexOf(hoverElement)][14]}</li>
 </ul>
 <button>View Details</button>`
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const grid2 = document.querySelectorAll(".grid2-child");

const grid2Array = Array.from(grid2);

grid2Array.forEach(grid2items => {
  grid2items.innerHTML += `<div class="grid2-child-img" style="background-image:${trendingCoursesDetails[grid2Array.indexOf(grid2items)][0]};">
  <i class="${trendingCoursesDetails[grid2Array.indexOf(grid2items)][1]}"></i>
  <span>${trendingCoursesDetails[grid2Array.indexOf(grid2items)][2]}</span>
</div>
<div class="grid2-child-desc">
  <b>${trendingCoursesDetails[grid2Array.indexOf(grid2items)][3]}</b>
  <small>Review</small>
  <span>
  <i class="${trendingCoursesDetails[grid2Array.indexOf(grid2items)][4]}"></i>
  <i class="${trendingCoursesDetails[grid2Array.indexOf(grid2items)][5]}"></i>
  <i class="${trendingCoursesDetails[grid2Array.indexOf(grid2items)][6]}"></i>
  <i class="${trendingCoursesDetails[grid2Array.indexOf(grid2items)][7]}"></i>
  <i class="${trendingCoursesDetails[grid2Array.indexOf(grid2items)][8]}"></i>
  ${trendingCoursesDetails[grid2Array.indexOf(grid2items)][9]}${trendingCoursesDetails[grid2Array.indexOf(grid2items)][10]}
  </span>
</div>`
})

const grid2hover = Array.from(document.querySelectorAll(".grid-2-hover"))
grid2hover.forEach(grid2hoverElement => {
  grid2hoverElement.innerHTML = `<i><small>next batch</small></i>
 <span>${trendingCoursesDetails[grid2hover.indexOf(grid2hoverElement)][11]}</span>
 <i><small>what will I learn?</small></i>
 <ul>
     <li>${trendingCoursesDetails[grid2hover.indexOf(grid2hoverElement)][12]}</li>
     <li>${trendingCoursesDetails[grid2hover.indexOf(grid2hoverElement)][13]}</li>
     <li>${trendingCoursesDetails[grid2hover.indexOf(grid2hoverElement)][14]}</li>
 </ul>
 <button>View Details</button>`
});


var swiper = new Swiper(".mySwiper4", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const recentlyAddedGrid2 = document.querySelectorAll(".recently-add-grid-2");

const recentlyAddedGrid2Array = Array.from(recentlyAddedGrid2);

recentlyAddedGrid2Array.forEach(recentlyAddedGrid2Items => {
  recentlyAddedGrid2Items.innerHTML += `
     <div class="recently-add-grid-items-pic" style="background-image : ${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][0]} ;">
                                    <b>${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][2]}</b>
                                </div>
                                <div class="recently-add-grid-items-desc">
                                    <p>${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][3]}</p>
                                    <small>Review</small>
                                    <span>
                                    <i class="${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][4]}"></i>
                                    <i class="${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][5]}"></i>
                                    <i class="${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][6]}"></i>
                                    <i class="${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][7]}"></i>
                                    <i class="${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][8]}"></i>
                                    ${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][9]}${trendingCoursesDetails[recentlyAddedGrid2Array.indexOf(recentlyAddedGrid2Items)][10]}
                                    </span>
                                </div>`
})

const recentlyAddedGrid2Hover = Array.from(document.querySelectorAll(".recently-add-grid-2-hover"));

recentlyAddedGrid2Hover.forEach(recentlyAddedGrid2HoverItem => {

  recentlyAddedGrid2HoverItem.innerHTML = `<i><small>next batch</small></i>
  <span>${trendingCoursesDetails[recentlyAddedGrid2Hover.indexOf(recentlyAddedGrid2HoverItem)][11]}</span>
  <i><small>what will I learn?</small></i>
  <ul>
      <li>${trendingCoursesDetails[recentlyAddedGrid2Hover.indexOf(recentlyAddedGrid2HoverItem)][12]}</li>
      <li>${trendingCoursesDetails[recentlyAddedGrid2Hover.indexOf(recentlyAddedGrid2HoverItem)][13]}</li>
      <li>${trendingCoursesDetails[recentlyAddedGrid2Hover.indexOf(recentlyAddedGrid2HoverItem)][14]}</li>
  </ul>
  <button>View Details</button>`

})


const discoverCat = Array.from(document.querySelectorAll(".discover-cat-item"));

discoverCat.forEach(discoverCatItem => {
  discoverCatItem.innerHTML = `<a href="">
  <i style="color: ${trendingCoursesDetails[discoverCat.indexOf(discoverCatItem)][15]};" class="${trendingCoursesDetails[discoverCat.indexOf(discoverCatItem)][1]}"></i>
  <small>${categoriesItems[discoverCat.indexOf(discoverCatItem)]}</small>
</a>`
})


// reveiw section script
var swiper = new Swiper(".mySwiper5", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const review = Array.from(document.querySelectorAll(".review-con"));

review.forEach(reviewItems => {
  reviewItems.innerHTML = `<div class="dflex review-pic-con">
  <b class="dflex" style="background-color:${reviewDetails[review.indexOf(reviewItems)][1]};">${reviewDetails[review.indexOf(reviewItems)][0]}</b>
  <span class="dflex title">
      <h3>${reviewDetails[review.indexOf(reviewItems)][2]}<a href=""><i class="${reviewDetails[review.indexOf(reviewItems)][3]}" style="color:${reviewDetails[review.indexOf(reviewItems)][4]};"></i></a></h3>
      <small>${reviewDetails[review.indexOf(reviewItems)][5]}</small>
  </span>
</div>
<div class="taken-course">
  <small>${reviewDetails[review.indexOf(reviewItems)][6]}</small>
  <span>
      <i class="${reviewDetails[review.indexOf(reviewItems)][7]}"></i>
      <i class="${reviewDetails[review.indexOf(reviewItems)][8]}"></i>
      <i class="${reviewDetails[review.indexOf(reviewItems)][9]}"></i>
      <i class="${reviewDetails[review.indexOf(reviewItems)][10]}"></i>
      <i class="${reviewDetails[review.indexOf(reviewItems)][11]}"></i>
  </span>
</div>
<div class="review-para">
  <i>${reviewDetails[review.indexOf(reviewItems)][12]}<span class="review-para-content"><i></i>${reviewDetails[review.indexOf(reviewItems)][13]}.</i></span>
  </i>
  <button>Read More</button>
</div>
`
})

// const para = document.querySelector(".review-para");
// const paraContent = document.querySelector(".review-para-content");
// const showFullReviewBtn = (para,paraContent) => {
//   para.classList.toggle("overflowY");
//   paraContent.classList.toggle("show");
// }