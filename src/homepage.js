import './assets/styles/style.css'
import homeBackgroundImage from './assets/img/home-background.png';

{/* <div class="navbar">
<h2 class="navbar-logo">Pizza Haven</h2>
<ul>
    <li class="navbar-item">Home</li>
    <li class="navbar-item">Menu</li>
    <li class="navbar-item">Contact</li>
</ul>
</div> */}

export function addHomepageToDOM() {
    document.body.style.backgroundColor = 'black'
    
    const content = document.querySelector('#content');

    const navigationBar = document.createElement('div')
    navigationBar.classList.add('navbar');
    content.appendChild(navigationBar)
    
    const navigationLogo = document.createElement('h2')
    navigationLogo.classList.add('navbar-logo')
    navigationLogo.innerHTML = 'Pizza Haven'
    navigationBar.appendChild(navigationLogo)

    const navigationList = document.createElement('ul')
    navigationBar.appendChild(navigationList)

    const navigationItemHome = document.createElement('li')
    navigationItemHome.classList.add('navbar-item')
    navigationItemHome.innerHTML = 'Home'
    navigationList.appendChild(navigationItemHome)

    const navigationItemMenu = document.createElement('li')
    navigationItemMenu.classList.add('navbar-item')
    navigationItemMenu.innerHTML = 'Menu'
    navigationList.appendChild(navigationItemMenu)

    const navigationItemContact = document.createElement('li')
    navigationItemContact.classList.add('navbar-item')
    navigationItemContact.innerHTML = 'Contact'
    navigationList.appendChild(navigationItemContact)

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
