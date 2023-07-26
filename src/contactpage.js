import './assets/styles/style.css'
import homeBackgroundImage from './assets/img/home-background.png';

export function addContactPageToDOM() {
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
}