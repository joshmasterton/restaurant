import "./index.css";
import homeImg from "./imgs/home.jpg";
import menuImg from "./imgs/menu.jpg";
import contactImg from "./imgs/contact.jpg";


const restaurantPage = (() => {
    const onClick = (e, getHome, getMenu, getContact) => {
        if(e.target.innerHTML === "Home"){
            getHome.className = "con";
            getMenu.className = "conHidden";
            getContact.className = "conHidden";
        }else if(e.target.innerHTML === "Menu"){
            getHome.className = "conHidden";
            getMenu.className = "con";
            getContact.className = "conHidden";
        }else if(e.target.innerHTML === "Contact"){
            getHome.className = "conHidden";
            getMenu.className = "conHidden";
            getContact.className = "con";
        };
    };

    return {onClick};
})();

const displayController = (() => {
    const getTopCon = document.getElementById("topCon");
    const getHomeCon = document.getElementById("homeCon");
    const getMenuCon = document.getElementById("menuCon");
    const getContactCon = document.getElementById("contactCon");

    const createTopButtons = () => {
        const homeBtn = document.createElement("button");
        homeBtn.className = "top";
        homeBtn.innerHTML = "Home";
        homeBtn.addEventListener("click", (e) => {
            restaurantPage.onClick(e, getHomeCon, getMenuCon, getContactCon);
        });
        getTopCon.appendChild(homeBtn);

        const menuBtn = document.createElement("button");
        menuBtn.className = "top";
        menuBtn.innerHTML = "Menu";
        menuBtn.addEventListener("click", (e) => {
            restaurantPage.onClick(e, getHomeCon, getMenuCon, getContactCon);
        });
        getTopCon.appendChild(menuBtn);

        const contactBtn = document.createElement("button");
        contactBtn.className = "top";
        contactBtn.innerHTML = "Contact";
        contactBtn.addEventListener("click", (e) => {
            restaurantPage.onClick(e, getHomeCon, getMenuCon, getContactCon);
        });
        getTopCon.appendChild(contactBtn);
    };

    const createHome = () => {
        const homeBlack = document.createElement("div");
        homeBlack.id = "homeBlack";
        getHomeCon.appendChild(homeBlack);

        const homeTitle = document.createElement("div");
        homeTitle.id = "homeTitle";
        homeTitle.innerHTML = "Home";
        getHomeCon.appendChild(homeTitle);

        const homeImgCon = document.createElement("img");
        homeImgCon.src = homeImg;
        getHomeCon.appendChild(homeImgCon);        
    };

    const createMenu = () => {
        const menuBlack = document.createElement("div");
        menuBlack.id = "homeBlack";
        getMenuCon.appendChild(menuBlack);

        const menuTitle = document.createElement("div");
        menuTitle.id = "homeTitle";
        menuTitle.innerHTML = "Menu";
        getMenuCon.appendChild(menuTitle);

        const menuImgCon = document.createElement("img");
        menuImgCon.src = menuImg;
        getMenuCon.appendChild(menuImgCon);                
    };

    const createContact = () => {
        const contactBlack = document.createElement("div");
        contactBlack.id = "homeBlack";
        getContactCon.appendChild(contactBlack);

        const contactTitle = document.createElement("div");
        contactTitle.id = "homeTitle";
        contactTitle.innerHTML = "Contact";
        getContactCon.appendChild(contactTitle);

        const contactImgCon = document.createElement("img");
        contactImgCon.src = contactImg;
        getContactCon.appendChild(contactImgCon);                
    };

    return {
        createTopButtons, 
        createHome, 
        createMenu,
        createContact,
    };
})();

displayController.createTopButtons();
displayController.createHome();
displayController.createMenu();
displayController.createContact();