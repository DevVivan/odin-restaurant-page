import './assets/styles/style.css'
import homeBackgroundImage from './assets/img/home-background.png';

export function addMenuPageToDOM() {
    document.body.style.backgroundColor = 'black'

    const content = document.querySelector('#content');

    const homeBackground = new Image()
    homeBackground.src = homeBackgroundImage;
    homeBackground.classList.add('background-image')
    content.appendChild(homeBackground)

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')
    content.appendChild(menuContainer);

    const menuHeader = document.createElement('h1')
    menuHeader.classList.add('menu-header')
    menuHeader.innerHTML = 'The Menu'
    menuContainer.appendChild(menuHeader)

    const menuContent = document.createElement('div')
    menuContent.classList.add('menu-content')
    menuContainer.appendChild(menuContent)

    const menuDescription = document.createElement('p')
    menuDescription.classList.add('menu-description')
    menuDescription.innerHTML = 'The menu goes here!'
    menuContent.appendChild(menuDescription)
}