const contactPage = () => {
    const container = document.getElementById("content");

    const header = document.createElement("h1");
    header.textContent = "Contact us";
    container.append(header);

    const header2 = document.createElement("h2");
    header2.textContent = "Contact information";
    container.append(header2);

    const address = document.createElement("p")
    address.innerText = "The Restaurant\nWestminster\nLondon\nSW1A 1AA\nTel: 087852585"
    container.append(address);

}

export { contactPage };