const characters = ["Luffy", "Zoro", "Sanji", "Nami", "Usopp"];

const sliderContent = document.querySelector("#slider-content");

const createCharacterImageBlock = (name) => {
    return `
<div class="crew-img">
    <img
        src="./assets/characters/${name.toLowerCase()}.png"
        alt="${name}"
        title="${name}"
    />
    <img
        class="shadow"
        src="./assets/characters/hilight/${name.toLowerCase()}-h.png"
        alt="${name}"
        title="${name}"
    />
</div>`;
};

//Preenchendo o slider
let sliderContentInnerHTML = ``;

for (const x in [1, 2]) {
    //Preenchendo com os dados 2x, para o funcionamento do slider
    characters.forEach((characterName) => {
        sliderContentInnerHTML += createCharacterImageBlock(characterName);
    });
}

sliderContent.innerHTML = sliderContentInnerHTML;

//Adicionando a efeito de hover às imagens
const crewImgs = document.querySelectorAll(".crew-img");

crewImgs.forEach((item) => {
    const thisShadowElement = item.querySelector(".shadow");
    item.addEventListener("mouseover", () => {
        thisShadowElement.classList = "shadow active";
    });
    item.addEventListener("mouseleave", () => {
        thisShadowElement.classList = "shadow";
    });
});

//Navbar animada
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.4s ease forwards ${
                      index / 7 + 0.3
                  }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile_menu",
    ".nav_list",
    ".nav_list li"
);

mobileNavbar.init();
