const menuPage = () => {
    const container = document.getElementById("content");

    const menuContent = document.createElement("div");
    menuContent.id = "menu";

    const header = document.createElement("h1");
    header.textContent = "Menu";
    menuContent.appendChild(header);

    const headerFood = document.createElement("h2");
    headerFood.textContent = "Food";
    menuContent.appendChild(headerFood);

    const headerDrinks = document.createElement("h2");
    headerDrinks.textContent = "Drinks";
    menuContent.appendChild(headerDrinks);

    container.appendChild(menuContent);
}

export { menuPage };