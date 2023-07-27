import { addHomepageToDOM } from "./homepage";
import { addMenuPageToDOM } from "./menupage";
import { addContactPageToDOM } from "./contactpage";

const content = document.querySelector('#content');

const navigationBar = document.createElement('div');
navigationBar.classList.add('navbar');
content.appendChild(navigationBar);

const navigationLogo = document.createElement('h2');
navigationLogo.classList.add('navbar-logo');
navigationLogo.innerHTML = 'Pizza Haven';
navigationBar.appendChild(navigationLogo);

const navigationList = document.createElement('ul');
navigationBar.appendChild(navigationList);

const navigationItemHome = document.createElement('li');
navigationItemHome.classList.add('navbar-item');
navigationItemHome.innerHTML = 'Home';
navigationList.appendChild(navigationItemHome);

const navigationItemMenu = document.createElement('li');
navigationItemMenu.classList.add('navbar-item');
navigationItemMenu.innerHTML = 'Menu';
navigationList.appendChild(navigationItemMenu);

const navigationItemContact = document.createElement('li');
navigationItemContact.classList.add('navbar-item');
navigationItemContact.innerHTML = 'Contact';
navigationList.appendChild(navigationItemContact);

addHomepageToDOM();
navigationItemHome.classList.add('current-page');

function showHomePage() {
    content.innerHTML = '';
    content.appendChild(navigationBar);
    navigationBar.appendChild(navigationLogo);
    navigationBar.appendChild(navigationList);
    navigationList.appendChild(navigationItemHome);
    navigationList.appendChild(navigationItemMenu);
    navigationList.appendChild(navigationItemContact);
    addHomepageToDOM();
    navigationItemHome.classList.add('current-page');
    navigationItemMenu.classList.remove('current-page');
    navigationItemContact.classList.remove('current-page');
}

function showMenuPage() {
    content.innerHTML = '';
    content.appendChild(navigationBar);
    navigationBar.appendChild(navigationLogo);
    navigationBar.appendChild(navigationList);
    navigationList.appendChild(navigationItemHome);
    navigationList.appendChild(navigationItemMenu);
    navigationList.appendChild(navigationItemContact);
    addMenuPageToDOM();
    navigationItemMenu.classList.add('current-page');
    navigationItemHome.classList.remove('current-page');
    navigationItemContact.classList.remove('current-page');
}

function showContactPage() {
    content.innerHTML = '';
    content.appendChild(navigationBar);
    navigationBar.appendChild(navigationLogo);
    navigationBar.appendChild(navigationList);
    navigationList.appendChild(navigationItemHome);
    navigationList.appendChild(navigationItemMenu);
    navigationList.appendChild(navigationItemContact);
    addContactPageToDOM();
    navigationItemContact.classList.add('current-page');
    navigationItemHome.classList.remove('current-page');
    navigationItemMenu.classList.remove('current-page');
}

navigationBar.addEventListener('click', (event) => {
    const clickedNavItem = event.target;
    if (clickedNavItem === navigationItemHome) {
    showHomePage();
    } else if (clickedNavItem === navigationItemMenu) {
    showMenuPage();
    } else if (clickedNavItem === navigationItemContact) {
    showContactPage();
    }
});
