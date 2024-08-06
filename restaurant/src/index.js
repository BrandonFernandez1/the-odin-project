import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './images/header/sk-maju.jpeg';
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
        //createCarousel();
        createPopularItems();
        createReviews();
    }

    const createHeader = () => {
        const header = document.createElement('header');
        document.body.appendChild(header);

        const restaurantLogo = document.createElement('img');
        restaurantLogo.src = logo;
        header.appendChild(restaurantLogo);

        const navBar = document.createElement('nav');
        header.appendChild(navBar);

        const navContainer = document.createElement('ul');
        navBar.appendChild(navContainer);

        const homeButton = document.createElement('li');
        homeButton.textContent = 'Home';
        navContainer.appendChild(homeButton);

        const menuButton = document.createElement('li');
        menuButton.textContent = 'Menu';
        navContainer.appendChild(menuButton);

        const contactButton = document.createElement('li');
        contactButton.textContent = 'Contact Us';
        navContainer.appendChild(contactButton);
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

    const createReviews = () => {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('.review-parent');
        document.body.appendChild(reviewContainer);

        const reviewHeader = document.createElement('h1');
        reviewHeader.textContent = 'REVIEWS FROM OUR CUSTOMERS';
        reviewContainer.appendChild(reviewHeader);

        function Review(review, stars, date){
            this.review = review;
            this.stars = stars;
            this.date = date;
        }

        const firstReview = new Review( "Great location, although parking is a bit of an issue. The atmosphere was breezy and clean. Ordered a roti canai, and while it took a while to arrive, it was excellent and very satisfying to eat. The drinks weren't too sweet or watered down and hit the spot. Prices are very reasonable. Would come again!", 5, 13/7/2024);

        const secondReview = new Review("Food was bland and tasted like shit. I'm never coming back to this awful establishment. Drinks tastes like straight piss and the food had the texture of nutsack. Never in my life have I wanted to flee the country this badly. Fuck this", 1, 4/6/2024);
    }
    return {initialize};
})();

document.addEventListener("DOMContentLoaded", () => {
    homePage.initialize();
})