import {header, firstPage} from './pageLoad.js';
import {contactPage} from './contact.js';
import {menuPage} from './menu.js';

const tabEventHandlers = (() => {

    const tabButtons = document.querySelectorAll('.tablink');
    const navHomeButton = document.querySelector('#navHome');
    const navContactButton = document.querySelector('#navContact');
    const navMenuButton = document.querySelector('#navMenu');

    // eventlistener for home button
    navHomeButton.addEventListener('click', () => {
        clearPage();
        createContentContainer();
        firstPage();
    });

    navContactButton.addEventListener('click', () => {
        clearPage();
        createContentContainer();
        contactPage();
    });
    
    navMenuButton.addEventListener('click', () => {
        clearPage();
        createContentContainer();
        menuPage();
    });

})()

// Clear the current page when invoked
const clearPage = () => {
    const content = document.getElementById('content');
    content.remove();
}

const createContentContainer = () => {
    const container = document.createElement('div');
    container.id = "content";
    const body = document.body;
    body.appendChild(container);
}