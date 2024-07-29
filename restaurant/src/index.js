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
import background from './images/popular-items/background-image.jpg'

const homePage = (function() {
    const initialize = () => {
        createHeader();
        createCarousel();
        createPopularItems();
    }

    const createHeader = () => {
        const header = document.createElement('nav');
        header.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');
        document.body.appendChild(header);

        const navBar = document.createElement('div');
        navBar.classList.add('collapse', 'navbar-collapse');
        header.appendChild(navBar);

        const homeButton = document.createElement('a');
        homeButton.classList.add('nav-item', 'nav-link');
        homeButton.textContent = 'Home';
        navBar.appendChild(homeButton);

        const menuButton = document.createElement('a');
        menuButton.textContent = 'Menu';
        menuButton.classList.add('nav-item', 'nav-link');
        navBar.appendChild(menuButton);

        const contactButton = document.createElement('a');
        contactButton.textContent = 'Contact Us';
        contactButton.classList.add('nav-item', 'nav-link');
        navBar.appendChild(contactButton);
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
        const images = [corndog, grilledCheese, lasagna, nasiLemak, pastaMeatball, rotiCanai];
        const captions = ['Corndog','Grilled Cheese','Lasagna','Nasi Lemak','Tomato Penne','Roti Canai'];

        const popularItemsSection = document.createElement('div');
        popularItemsSection.classList.add('popular-section');
        document.body.appendChild(popularItemsSection);
        
        const popularBackgroundImage = document.createElement('img');
        popularBackgroundImage.src = background;
        popularBackgroundImage.classList.add('background-image');
        popularItemsSection.appendChild(popularBackgroundImage);

        const popularContent = document.createElement('div');
        popularContent.classList.add('popular-content');
        popularItemsSection.appendChild(popularContent);

        const popularItemHeader = document.createElement('div');
        popularItemHeader.classList.add('popular-caption');
        popularItemHeader.textContent = 'Try our popular dishes!';
        popularContent.appendChild(popularItemHeader);

        const itemContainerDiv = document.createElement('div');
        itemContainerDiv.classList.add('popular-container');
        popularContent.appendChild(itemContainerDiv);

        for (let i = 0; i < images.length; i++) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('popular-item');
            itemContainerDiv.appendChild(itemDiv);

            const foodImage = document.createElement('img');
            foodImage.classList.add('popular-food-image');
            foodImage.src = images[i];
            itemDiv.appendChild(foodImage);

            const captionOverlay = document.createElement('div');
            captionOverlay.classList.add('overlay');
            itemDiv.appendChild(captionOverlay);

            const itemCaption = document.createElement('div');
            itemCaption.classList.add('caption');
            itemCaption.textContent = captions[i];
            captionOverlay.appendChild(itemCaption);
        }
    }

    return {initialize};
})();

document.addEventListener("DOMContentLoaded", () => {
    homePage.initialize();
})