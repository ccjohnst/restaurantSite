/* <img src="../images/restaurantimage.jpg" alt="restaurant image">
<h1>The Restaurant</h1>
<p>The Restaurant is THE place to be. Serving only the finest
    food and drink, The Restaurant enjoys a cilentele that includes
    the rich and famous
</p>
*/

const header = (() => {
    const body = document.body;

    const tabbedNavigation = document.createElement('div');
    tabbedNavigation.id = "tabbedNav";

    // create nav buttons
    const navHome = document.createElement("button");
    navHome.classList.add("tablink")
    navHome.id = "navHome";
    navHome.textContent = "Home";
    tabbedNavigation.appendChild(navHome);

    const navContact = document.createElement("button");
    navContact.classList.add("tablink");
    navContact.id = "navContact";
    navContact.innerText = "Contact";
    tabbedNavigation.appendChild(navContact);

    const navMenu = document.createElement("button");
    navMenu.classList.add("tablink");
    navMenu.id = "navMenu";
    navMenu.innerText = "Menu";
    tabbedNavigation.appendChild(navMenu);


    body.appendChild(tabbedNavigation)
})();

const firstPage = () => {
    const container =  document.getElementById("content");

    const img = document.createElement("img");
    img.src = "../images/restaurantimage.jpg";
    container.append(img);

    const header = document.createElement("h1");
    header.textContent = "The Restaurant";
    container.append(header);

    const para = document.createElement("p");
    para.textContent = `The Restaurant is THE place to be. Serving only the finest
        food and drink, The Restaurant enjoys a cilentele that includes
        the rich and famous`
    container.append(para);
}

export {
    header,
    firstPage
}
