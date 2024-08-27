import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import './style.css';

import heroBackground from './images/hero/outdoor-restaurant.jpg';
import waiter from './images/hero/waiter.jpg';

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
import background from './images/popular-items/background-image.jpg';

import star from './images/review/star.svg';
import tandoori from './images/review/collage/tandoori.jpg';
import maggiGoreng from './images/review/collage/maggi-goreng.jpeg';
import nasiKandar from './images/review/collage/nasi-kandar.jpg';
import restaurant from './images/review/collage/restaurant.jpeg';

const homePage = (function() {
    const initialize = () => {
        createHeader();
        createHero();
        // createCarousel();
        createPopularItems();
        createReviewSection();
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

    const createHero = () => {
        const heroContainer = document.createElement('section');
        heroContainer.classList.add('hero');
        document.body.appendChild(heroContainer);

        const backgroundImage = document.createElement('img');
        backgroundImage.classList.add('background-image');
        backgroundImage.src = waiter;
        heroContainer.appendChild(backgroundImage);

        // const waiterImage = document.createElement('img');
        // waiterImage.classList.add('waiter');
        // waiterImage.src = ;
        // heroContainer.appendChild(waiterImage);

        const heroTextContainer = document.createElement('div');
        heroTextContainer.classList.add('hero-text');
        heroContainer.prepend(heroTextContainer);

        const heroHeader = document.createElement('h1');
        heroHeader.textContent = "SMOKE OUT BACK";
        heroTextContainer.appendChild(heroHeader);

        const heroCaption = document.createElement('h3')
        heroCaption.textContent = 'Try our steaks';
        heroTextContainer.appendChild(heroCaption);
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
        const captions = ['Corndogs','Grilled Cheese','Lasagna','Nasi Lemak','Tomato Penne','Roti Canai'];

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

    const getReviews = () => {
        let reviews = [];

        function Review(review, stars, date, name){
            this.review = review;
            this.stars = stars;
            this.date = date;
            this.name = name;
        }

        const firstReview = new Review( "Great location, although parking is a bit of an issue. The atmosphere was breezy and clean. Ordered a roti canai, and while it took a while to arrive, it was excellent and very satisfying to eat. The drinks weren't too sweet or watered down and hit the spot. Prices are very reasonable. Would come again!", 5, "13/7/2024", "Syed Aqil");
        reviews.push(firstReview);

        const secondReview = new Review("Food was bland and tasted like shit. I'm never coming back to this awful establishment. Drinks tastes like straight piss and the food had the texture of nutsack. Never in my life have I wanted to flee the country this badly. Fuck this!", 1, "4/6/2024", "David Singh");
        reviews.push(secondReview);

        const thirdReview = new Review("The staff were welcoming and attentive, making sure that my friends and I felt right at home. The prices were very reasonable, making it an excellent choice for a casual meal out. I will definitely be returning for another round of their fantastic dishes!", 5, "3/4/2024", "Kishen Gill");
        reviews.push(thirdReview);

        return reviews;
    }

    //TODO: Review section: 2 main divs = images + reviews. Return parent element for both and append to section
    const createReviewSection = () => {
        const reviewSection = document.createElement('section');
        reviewSection.classList.add('review-section');
        document.body.appendChild(reviewSection);

        // const imageCarousel = createReviewCollage();
        // console.log(imageCarousel);
        // reviewSection.appendChild(imageCarousel);

        const reviewCarousel = createReviewCarousel();
        console.log(reviewCarousel);
        reviewSection.appendChild(reviewCarousel);
    }

    const createReviewCollage = () => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('review-collage');

        const reviewCollageImages = [
            { source: restaurant, caption: 'restaurant'},
            { source: tandoori, caption: 'tandoori' },
            { source: maggiGoreng, caption: 'maggi-goreng' },
            { source: nasiKandar, caption: 'nasi-kandar' }
        ]

        reviewCollageImages.forEach((image) => {
            const imageElement = document.createElement('img');
            imageElement.classList.add('review-image');
            imageElement.src = image.source;
            imageElement.id = image.caption;
            imageContainer.appendChild(imageElement);
        })

        return imageContainer;
    }

    const createReviewCarousel = () => {
        const reviews = getReviews();
        if (reviews.length > 5) reviews.length = 5;

        const carouselParent = document.createElement('div');
        carouselParent.setAttribute('id', 'reviewCarousel');
        carouselParent.classList.add('carousel', 'slide');
        // document.body.appendChild(carouselParent);

        const carouselIndicators = document.createElement('div');
        carouselIndicators.classList.add('carousel-indicators');
        carouselParent.appendChild(carouselIndicators);

        for (let i = 0; i < reviews.length; i++) {
            const indicator = document.createElement('button');
            indicator.setAttribute('data-bs-target', '#reviewCarousel');
            indicator.setAttribute('data-bs-slide-to', i);
            indicator.setAttribute('aria-label', `Slide ${i + 1}`);

            if (i === 0) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            }

            carouselIndicators.appendChild(indicator);
        }

        const carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel-inner');
        carouselParent.appendChild(carouselInner);

        for (let i = 0; i < reviews.length; i++) {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (i === 0) carouselItem.classList.add('active');
            carouselInner.appendChild(carouselItem);

            const reviewContainer = document.createElement('div');
            reviewContainer.classList.add('review');
            carouselItem.appendChild(reviewContainer);

            const reviewName = document.createElement('div');
            reviewName.classList.add('review-name');
            reviewName.textContent = reviews[i].name;
            reviewContainer.appendChild(reviewName);

            const reviewDate = document.createElement('div');
            reviewDate.classList.add('review-date');
            reviewDate.textContent = reviews[i].date;
            reviewContainer.appendChild(reviewDate);

            const reviewStarsContainer = document.createElement('div');
            reviewStarsContainer.classList.add('stars');
            reviewContainer.appendChild(reviewStarsContainer);

            for (let j = 0; j < 5; j++) {
                const reviewStar = document.createElement('img');
                reviewStar.src = star;
                reviewStar.classList.add('star');
                reviewStarsContainer.appendChild(reviewStar);

                if (j < reviews[i].stars) reviewStar.classList.add('yellow');
                else reviewStar.classList.add('grey');
            }

            const reviewText = document.createElement('div');
            reviewText.textContent = reviews[i].review;
            reviewText.classList.add('review-text');
            reviewContainer.appendChild(reviewText);
        }

        
        const controls = [
            { type: 'prev', caption: 'Previous' },
            { type: 'next', caption: 'Next' }
        ];

        const createCarouselControl = (control) => {
            const carouselControl = document.createElement('button');
            carouselControl.classList.add(`carousel-control-${control.type}`);
            carouselControl.setAttribute('type', 'button');
            carouselControl.setAttribute('data-bs-target', '#reviewCarousel');
            carouselControl.setAttribute('data-bs-slide', control.type);

            const carouselIcon = document.createElement('span');
            carouselIcon.classList.add(`carousel-control-${control.type}-icon`);
            carouselIcon.setAttribute('aria-hidden', 'true');
            carouselControl.appendChild(carouselIcon);

            const carouselCaption = document.createElement('span');
            carouselCaption.classList.add('visually-hidden');
            carouselCaption.textContent = control.caption;
            carouselControl.appendChild(carouselCaption);

            return carouselControl;
        }
        
        controls.forEach((control, index) => {
            const carouselControl = createCarouselControl(control);
            if (index === 0) carouselParent.prepend(carouselControl);
            else carouselParent.appendChild(carouselControl);
        });
       
        return carouselParent;
    }
    return {initialize};
})();

export default homePage;