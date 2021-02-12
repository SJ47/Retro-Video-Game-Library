document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    // Create the HTML page layout 
    createPageLayout();

    // Assign the eventlisteners for page elements
    // startButton.addEventListener("click", handleStartButton);
})


// Create the page layout of HTML elements
createPageLayout = function () {
    // Create page header section
    createPageLayoutHeader()

    // Create page main section
    createPageLayoutMain()
}

// Create page main section
createPageLayoutMain = function () {

    // Create main section after the header section
    main = document.createElement("main");
    document.body.append(main);

    // Create section section as a child of main section
    section = document.createElement("section");
    main.appendChild(section);

    // Create form section as a child of section section
    form = document.createElement("form");
    section.appendChild(form);

    // Create form container
    formContainer = document.createElement("div");
    form.appendChild(formContainer);
    formContainer.classList.add("form-container")

    // Create form items for Title, System Format, Game Owned, Release Year and Game Rating
    for (noOfFormItems = 1; noOfFormItems <= 5; noOfFormItems++) {
        formItem = document.createElement("div");
        formContainer.appendChild(formItem);
        formItem.classList.add("form-item")
    }

}


// Create page header section
createPageLayoutHeader = function () {
    // Create header section at top of body
    header = document.createElement("header");
    document.body.append(header);

    // Create h1 page title
    h1 = document.createElement("h1")
    h1.append("My Retro Video Game Library")
    header.appendChild(h1)

    // Create nav
    nav = document.createElement("nav");
    header.appendChild(nav);

    // Create nav ul
    navUl = document.createElement("ul");
    nav.appendChild(navUl);

    // Create nav ul li items
    navUlLi = document.createElement("li")
    navUlLi.append("Create form in the DOM")
    navUl.appendChild(navUlLi)

    navUlLi = document.createElement("li")
    navUlLi.append("Delete Library List")
    navUl.appendChild(navUlLi)

    navUlLi = document.createElement("li")
    navUlLi.append("Reset Whole Page")
    navUl.appendChild(navUlLi)
}