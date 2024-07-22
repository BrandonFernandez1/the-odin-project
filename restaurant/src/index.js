import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import pasta from './images/carousel/pasta.jpg';
import burger from './images/carousel/burger.jpg';
import steak from './images/carousel/steak.jpg';

import corndog from './images/popular-items/corn-dogs.jpg';
import grilledCheese from './images/popular-items/grilled-cheese.jpg';
import lasagna from './images/popular-items/lasagna.jpg';
import nasiLemak from './images/popular-items/nasi-lemak.jpg';
import pastaMeatball from './images/popular-items/pasta-meatball.jpeg';
import rotiCanai from './images/popular-items/roti-canai.jpg';
import background from './images/popular-items/background-image.jpg';



const homePage = (function() {
    const initialize = () => {
        createCarousel();
        createPopularItems();
    }

    const createCarousel = () => {
        const carouselParent = document.createElement("div");
        carouselParent.classList.add("carousel", "slide");
        carouselParent.setAttribute("id", "carouselExampleSlidesOnly");
        carouselParent.setAttribute("data-ride", "carousel");

        const carouselInner = document.createElement("div");
        carouselInner.classList.add("carousel-inner");
        carouselParent.appendChild(carouselInner);

        const images = [pasta, burger, steak];

        for (let i = 0; i < images.length; i++) {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (i === 0) carouselItem.classList.add("active");
            carouselInner.appendChild(carouselItem);

            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("image-wrapper");
            carouselItem.appendChild(imageWrapper);
            
            const foodImage = document.createElement("img");
            foodImage.src = images[i];
            foodImage.classList.add("d-block"); //Removed "w-100"
            imageWrapper.appendChild(foodImage);
        }
        document.body.appendChild(carouselParent);

        let currentIndex = 0;

        setInterval(() => {
            const items = document.querySelectorAll(".carousel-item");
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add("active");
        }, 5000);
    }

    const createPopularItems = () => {
        // 1. Create container div
        //     - Add background image of something
        //     - Takes up another section of the page
        // 2. Create 6 divs
        //     - Make them circles
        //     - Add background image of the food items
        //     - Space evenly the bitch.

        const images = [corndog, grilledCheese, lasagna, nasiLemak, pastaMeatball, rotiCanai];

        const popularItemsSection = document.createElement('div');
        popularItemsSection.classList.add('popular-section');
        document.body.appendChild(popularItemsSection);

        const itemContainerDiv = document.createElement('div');
        itemContainerDiv.classList.add('popular-container');
        popularItemsSection.appendChild(itemContainerDiv);

        for (let i = 0; i < images.length; i++) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('popular-item');
            itemContainerDiv.appendChild(itemDiv);

            const foodImage = document.createElement('img');
            foodImage.classList.add('popular-food-image');
            foodImage.src = images[i];
            itemDiv.appendChild(foodImage);

            const itemCaption = document.createElement('div');
            itemCaption.classList.add('caption');
            itemDiv.appendChild(itemCaption);
        }
    }


    return {initialize};
})();

document.addEventListener("DOMContentLoaded", () => {
    homePage.initialize();
})