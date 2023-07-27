import './assets/styles/style.css'
import homeBackgroundImage from './assets/img/home-background.png';

export function addContactPageToDOM() {
    document.body.style.backgroundColor = 'black'

    const content = document.querySelector('#content');

    const homeBackground = new Image()
    homeBackground.src = homeBackgroundImage;
    homeBackground.classList.add('background-image')
    content.appendChild(homeBackground)

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('menu-container')
    content.appendChild(contactContainer);

    const contactHeader = document.createElement('h1')
    contactHeader.classList.add('menu-header')
    contactHeader.innerHTML = 'Contact us!'
    contactContainer.appendChild(contactHeader)

    const contactContent = document.createElement('div')
    contactContent.classList.add('menu-content')
    contactContainer.appendChild(contactContent)

    const contactDescription = document.createElement('p')
    contactDescription.classList.add('menu-description')
    contactDescription.innerHTML = 'You can contact us from here.'
    contactContent.appendChild(contactDescription)
}