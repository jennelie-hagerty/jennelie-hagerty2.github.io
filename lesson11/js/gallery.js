/* Last Visit*/
let stored = new Date(localStorage.getItem("stored"));

const oneDay = 1000 * 60 * 60 * 24;

let diffInTime = d.getTime() - stored.getTime();

let diffInDays = Math.round(diffInTime / oneDay);

if ("stored" in localStorage) {
  document.querySelector(".lastvisit").innerHTML = diffInDays + " days ago.";
} else {
  document.querySelector(".lastvisit").innerHTML = "This is your first visit!";
}

store();

function store() {
  localStorage.setItem("stored", d);
}

/*Lazy Load*/
let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootmargin: "0px 0px, 100px, 0px",
}
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }