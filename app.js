document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    // Start by creating the header and nav HTML
    createPageLayoutHeader()
    document.querySelector(".inject-button").addEventListener("click", createPageLayoutMain)

    // Create the HTML page layout 
    // createPageLayout();

})


// Create the page layout of HTML elements
// createPageLayout = function () {
//     // Create page header section
//     createPageLayoutHeader()
//     document.querySelector(".inject-button").addEventListener("click", createPageLayoutMain)

// }

// Create page main section
createPageLayoutMain = function () {
    document.querySelector(".inject-button").removeEventListener("click", createPageLayoutMain)
    document.querySelector(".delete-button").addEventListener("click", handleDeleteButton)
    document.querySelector(".reset-button").addEventListener("click", handleResetButton)

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
        formItem.classList.add("form-item", "form-item" + noOfFormItems)
    }

    // Create rest of form item 1 - title
    label1 = document.createElement("label");
    formItem1 = document.querySelector(".form-item1");
    formItem1.appendChild(label1);
    label1.append("Game Title: ")
    label1.classList.add("form-label")
    label1.htmlFor = 'title'

    input1 = document.createElement("input");
    formItem1.appendChild(input1);
    input1.id = "title";
    input1.type = "text";
    input1.required = "required";

    // Create rest of form item 2 - System Format
    label2 = document.createElement("label");
    formItem2 = document.querySelector(".form-item2");
    formItem2.appendChild(label2);
    label2.append("System Format: ")
    label2.classList.add("form-label")
    label2.htmlFor = 'format'

    select1 = document.createElement("select");
    formItem2.appendChild(select1);
    select1.id = "format";
    select1.name = "format";
    select1.required = "required";

    const systemOptions = ["Commodore 64", "ZX81", "ZX Spectrum", "BBC Micro", "Dragon 32", "Commodore Amiga"]
    // Create the option list in a loop
    for (systemOption of systemOptions) {
        optionSystemOption = document.createElement("option");
        select1.appendChild(optionSystemOption);
        optionSystemOption.innerHTML = systemOption;
        optionSystemOption.value = systemOption;
    }

    // Create rest of form item 3 - Game Owned
    label3 = document.createElement("label");
    formItem3 = document.querySelector(".form-item3");
    formItem3.appendChild(label3);
    label3.append("Owned: ")
    label3.classList.add("form-label")

    input3 = document.createElement("input");
    formItem3.appendChild(input3);
    input3.type = "radio";
    input3.name = "owned"
    input3.value = "Yes"
    input3.required = "required"

    label3_1 = document.createElement("label");
    formItem3.appendChild(label3_1);
    label3_1.append("Yes")
    label3_1.classList.add("form-label", "game-owned-yes")
    label3_1.htmlFor = 'owned-yes'

    input3_1 = document.createElement("input");
    formItem3.appendChild(input3_1);
    input3_1.type = "radio";
    input3_1.name = "owned"
    input3_1.value = "no"

    label3_2 = document.createElement("label");
    formItem3.appendChild(label3_2);
    label3_2.append("No")
    label3_2.classList.add("form-label", "game-owned-no")
    label3_2.htmlFor = 'owned-no'

    // Create rest of form item 4 - Release Date
    label4 = document.createElement("label");
    formItem4 = document.querySelector(".form-item4");
    formItem4.appendChild(label4);
    label4.append("Release Date: ")
    label4.classList.add("form-label")
    label4.htmlFor = 'release-date'

    input4 = document.createElement("input");
    formItem4.appendChild(input4);
    input4.id = "release-date";
    input4.type = "month";
    input4.min = "1980-01"
    input4.value = "1986-01"
    input4.name = "release_date"

    // Create rest of form item 5 - Game Rating
    label5 = document.createElement("label");
    formItem5 = document.querySelector(".form-item5");
    formItem5.appendChild(label5);
    label5.append("Game Rating: ")
    label5.classList.add("form-label")
    label5.htmlFor = 'rating'

    input5 = document.createElement("input");
    formItem5.appendChild(input5);
    input5.id = "rating";
    input5.type = "range";
    input5.min = "1"
    input5.max = "5"
    input5.value = "1"

    // Create submit button
    button = document.createElement("input");
    formContainer.appendChild(button);
    button.type = "submit";
    button.value = "Add Game"
    button.classList.add("add-game-button");


    // Create Game Library List
    h2 = document.createElement("h2");
    section.appendChild(h2);
    h2.innerHTML = "Game Library"
    ulGameList = document.createElement("ul");
    section.appendChild(ulGameList);
    ulGameList.classList.add("game-list")

    // Remove eventlistener from InjectHTML button and disable access
    const injectHTMLButton = document.querySelector(".inject-button");
    // injectHTMLButton.removeEventListener("click", createPageLayoutMain)
    injectHTMLButton.classList.add("disabled");

    // Enable access to delete and reset  buttons and set event listeners
    const deleteButton = document.querySelector(".delete-button");
    const resetButton = document.querySelector(".reset-button");
    deleteButton.classList.remove("disabled");
    resetButton.classList.remove("disabled");

    document.querySelector("form").addEventListener("submit", handleAddGame);
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
    navUlLi.append("Inject HTML Form using JS")
    navUlLi.classList.add("inject-button");
    navUl.appendChild(navUlLi)

    navUlLi = document.createElement("li")
    navUlLi.append("Delete Library List")
    navUlLi.classList.add("delete-button", "disabled");
    navUl.appendChild(navUlLi)

    navUlLi = document.createElement("li")
    navUlLi.append("Reset Whole Page")
    navUlLi.classList.add("reset-button", "disabled");
    navUl.appendChild(navUlLi)
}

// Handle add game button clicked
handleAddGame = function (event) {
    event.preventDefault();

    const gameList = document.querySelector(".game-list")

    // Add game details to list
    const gameItem = document.createElement("li")

    // Game Title
    const gameTitle = document.createElement("h2")
    gameTitle.textContent = `Game: ${event.target.title.value}`
    gameItem.appendChild(gameTitle)

    // System Format
    const gameFormat = document.createElement("h3")
    gameFormat.textContent = `Format: ${event.target.format.value}`
    gameItem.appendChild(gameFormat)

    // Game Owned
    const gameOwned = document.createElement("p")
    gameOwned.textContent = `Owned: ${event.target.owned.value}`
    gameItem.appendChild(gameOwned)

    // Release Date
    const gameReleaseDate = document.createElement("p")
    let valueDate = event.target.release_date.value
    if (valueDate == null || valueDate == "") {
        valueDate = "Unknown"
    }

    gameReleaseDate.textContent = `Release Date: ${valueDate}`
    gameItem.appendChild(gameReleaseDate)

    // Game Rating
    const gameRating = document.createElement("p")
    gameRating.textContent = `Rating: ${event.target.rating.value}`
    gameItem.appendChild(gameRating)


    // Add whole game item to the game library list
    gameList.appendChild(gameItem);

    // clear form of all data
    event.target.reset();
    // Set input date back to a starting value of 1986 and rating to 1
    event.target.release_date.value = "1986-01"
    event.target.rating.value = 1;
}

// Handle delete library list button clicked
handleDeleteButton = function () {
    console.log("DELETE LIBRARY LIST")

    // Delete game library list
    document.querySelector(".game-list").remove()

    // Add Game Library List back in
    ulGameList = document.createElement("ul");
    section.appendChild(ulGameList);
    ulGameList.classList.add("game-list")
}


// handle reset whole page button clicked
handleResetButton = function () {

    // Update button link availability
    document.querySelector(".inject-button").classList.remove("disabled")
    document.querySelector(".delete-button").classList.add("disabled")
    document.querySelector(".reset-button").classList.add("disabled")

    // Update eventlistener events 
    document.querySelector(".delete-button").removeEventListener("click", handleDeleteButton)
    document.querySelector(".reset-button").removeEventListener("click", handleResetButton)
    document.querySelector(".inject-button").addEventListener("click", createPageLayoutMain)

    document.querySelector("form").removeEventListener("submit", handleAddGame);

    // delete main node and children
    document.querySelector("main").remove()
}