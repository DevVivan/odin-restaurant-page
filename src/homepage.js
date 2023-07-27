import './assets/styles/style.css'
import homeBackgroundImage from './assets/img/home-background.png';

export function addHomepageToDOM() {
    document.body.style.backgroundColor = 'black'
    
    const content = document.querySelector('#content');

    const homeBackground = new Image()
    homeBackground.src = homeBackgroundImage;
    homeBackground.classList.add('background-image')
    content.appendChild(homeBackground)

    const homePageContainer = document.createElement('div')
    homePageContainer.classList.add('home-page-content')
    content.appendChild(homePageContainer)

    const homePageHeader = document.createElement('h1')
    homePageHeader.classList.add('home-page-header')
    homePageHeader.innerHTML = 'Pizza Haven';
    homePageContainer.appendChild(homePageHeader)

    const homePageDescription = document.createElement('p')
    homePageDescription.classList.add('home-page-description')
    homePageDescription.innerHTML = 'Craving delicious pizza that will take your taste buds on a heavenly journey? Look no further than Pizza Haven! We take pride in crafting the most mouthwatering pizzas in town, using the finest ingredients and time-honored recipes that have been passed down through generations.';
    homePageContainer.appendChild(homePageDescription)

    const ctaButton = document.createElement('button')
    ctaButton.classList.add('cta-button')
    ctaButton.innerHTML = 'Order Now'
    homePageContainer.appendChild(ctaButton)
}
