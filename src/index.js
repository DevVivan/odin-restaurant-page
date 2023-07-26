import './assets/styles/style.css'
import homeBackgroundImage from './assets/img/home-background.png';

const content = document.querySelector('#content');

const homeBackground = new Image()
homeBackground.src = homeBackgroundImage;
homeBackground.classList.add('background-image')
content.appendChild(homeBackground)