// created an array with object
const natures = [
  {
    title: "nature-1",
    img: "./images/nature-1.jpeg",
  },
  {
    title: "nature-2",
    img: "./images/nature-2.jpeg",
  },
  {
    title: "nature-3",
    img: "./images/nature-3.jpeg",
  },
];

const cities = [
  {
    title: "city-1",
    img: "./images/city-1.jpeg",
  },
  {
    title: "city-2",
    img: "./images/city-2.jpeg",
  },
  {
    title: "city-3",
    img: "./images/city-3.jpeg",
  },
  {
    title: "city-4",
    img: "./images/city-4.jpeg",
  },
  {
    title: "city-5",
    img: "./images/city-5.jpeg",
  },
];

// variables
const nature = document.querySelectorAll(".nature");
const city = document.querySelectorAll(".city");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imageName = document.querySelector(".image-name");
const imgContainer = document.querySelector(".modal-images");
const mainImg = document.querySelector(".main-img");

// for each for the nature section
nature.forEach(function (img) {
  img.addEventListener("click", function (e) {
    // selected target
    let elementId = e.target.dataset.id;
    let number = parseInt(elementId, 10);
    let item = natures[number];
    mainImg.src = item.img;
    imageName.textContent = item.title;

    // ============modalist function
    let listItems = " ";

    for (let i = 0; i < natures.length; i++) {
      listItems += ` <img
src=${natures[i].img}
title=${natures[i].title}
data-id= ${i}
id = ${natures[i].title}
class="modal-img"
alt=""
/>`;
    }

    imgContainer.innerHTML = listItems;

    //  ============ modal images function
    const modalImg = document.querySelectorAll(".modal-img");

    modalImg.forEach(function (smallImg) {
      smallImg.addEventListener("click", function (i) {
        let currentImage = i.target.dataset.id;

        let currentNumber = parseInt(currentImage, 10);

        number = currentNumber;
        mainImg.src = natures[number].img;
        imageName.textContent = natures[number].title;
      });
    });

    // open the modal
    modal.classList.add("open");

    // ============close btn function
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("open");
    });
    // ======prevBtn function=============

    prevBtn.addEventListener("click", function () {
      number--;
      if (number < 0) {
        number = natures.length - 1;
      } else if (number > natures.length - 1) {
        number = 0;
      }
      item = natures[number];
      mainImg.src = item.img;
      imageName.textContent = item.title;
    });
    // ==========next btn==========
    nextBtn.addEventListener("click", function () {
      number++;
      if (number < 0) {
        number = natures.length - 1;
      } else if (number > natures.length - 1) {
        number = 0;
      }
      item = natures[number];
      mainImg.src = item.img;
      imageName.textContent = item.title;
    });
  });
});

// for each for the nature section
city.forEach(function (img) {
  img.addEventListener("click", function (e) {
    // =======SELECTED TARGET
    let elementId = e.target.dataset.id;
    let number = parseInt(elementId, 10);
    item = cities[number];
    mainImg.src = item.img;
    imageName.textContent = item.title;

    //======== modalist function achieve it with a for loop======
    let listItems = " ";

    for (let i = 0; i < cities.length; i++) {
      listItems += ` <img
src=${cities[i].img}
title=${cities[i].title}
data-id= ${i}
class="modal-img"
alt=""
/>`;
    }

    imgContainer.innerHTML = listItems;

    //  ========= modal images click function=====
    const modalImg = document.querySelectorAll(".modal-img");

    modalImg.forEach(function (smallImg) {
      smallImg.addEventListener("click", function (i) {
        let currentImage = i.target.dataset.id;
        let currentNumber = parseInt(currentImage, 10);

        number = currentNumber;
        mainImg.src = cities[number].img;
        imageName.textContent = cities[number].title;
      });
    });

    //

    //========== open the modal
    modal.classList.add("open");

    //  ========CLOSE BTN

    closeBtn.addEventListener("click", function () {
      modal.classList.remove("open");
    });
    //  =========PREV BTN
    prevBtn.addEventListener("click", function () {
      number--;
      if (number < 0) {
        number = cities.length - 1;
      } else if (number > cities.length - 1) {
        number = 0;
      }
      console.log(number);
      item = cities[number];
      mainImg.src = item.img;
      imageName.textContent = item.title;
    });

    // =========NEXT BTN
    nextBtn.addEventListener("click", function () {
      number++;
      if (number < 0) {
        number = cities.length - 1;
      } else if (number > cities.length - 1) {
        number = 0;
      }
      item = cities[number];
      mainImg.src = item.img;
      imageName.textContent = item.title;
    });
  });
});
