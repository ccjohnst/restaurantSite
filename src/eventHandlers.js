import {firstPage} from './pageLoad.js';
import {contactPage} from './contact';
import {menuPage} from './menu.js'

const tabEventHandlers = (() => {
    const tabButtons = document.querySelectorAll('.tablink');
    const navHomeButton = document.querySelector('#navHome');
    const navContactButton = document.querySelector('#navContact');
    const navMenuButton = document.querySelector('#navMenu');

    // eventlistener for home button
    navHomeButton.addEventListener('click', firstPage);

    navContactButton.addEventListener('click', contactPage);
    
    navMenuButton.addEventListener('click', menuPage);

})()


