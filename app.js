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
    label3.append("Game Owned: ")
    label3.classList.add("form-label")
    label3.htmlFor = 'game-owned'

    input3 = document.createElement("input");
    formItem3.appendChild(input3);
    input3.id = "game-owned-yes";
    input3.type = "radio";
    input3.name = "owned"
    input3.value = "Yes"

    label3_1 = document.createElement("label");
    formItem3.appendChild(label3_1);
    label3_1.append("Yes")
    label3_1.classList.add("form-label")
    label3_1.htmlFor = 'owned-yes'

    input3_1 = document.createElement("input");
    formItem3.appendChild(input3_1);
    input3_1.id = "game-owned-no";
    input3_1.type = "radio";
    input3_1.name = "owned"
    input3_1.value = "no"

    label3_2 = document.createElement("label");
    formItem3.appendChild(label3_2);
    label3_2.append("No")
    label3_2.classList.add("form-label")
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
    button.classList.add("add-game-button")
    button.type = "submit";
    button.value = "Add Game"


    // Create Game Library List
    h2 = document.createElement("h2");
    section.appendChild(h2);
    h2.innerHTML = "Game Library"
    ulGameList = document.createElement("ul");
    section.appendChild(ulGameList);
    ulGameList.classList.add("game-list")

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