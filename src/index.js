import "./index.css";
import homeImg from "./imgs/home.jpg";

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
        const homeImgCon = document.createElement("img");
        homeImgCon.src = homeImg;
        getHomeCon.appendChild(homeImgCon);        
    };

    return {createTopButtons, createHome};
})();

displayController.createTopButtons();
displayController.createHome();