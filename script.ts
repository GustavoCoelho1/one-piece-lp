import charactersData from "./characters.json";
import arcsData from "./arcs.json";

//Preenchendo o slider
const sliderContent = document.querySelector("#slider-content")!;
const createCharacterImageBlock = (name) => {
    return `
<div id="${name.toLowerCase()}" class="crew-img">
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

let sliderContentInnerHTML = ``;

for (const x in [1, 2]) {
    //Preenchendo com os dados 2x, para o funcionamento do slider
    charactersData.forEach((character) => {
        sliderContentInnerHTML += createCharacterImageBlock(character.id);
    });
}

sliderContent.innerHTML = sliderContentInnerHTML;

//Adicionando a efeito de hover às imagens
const crewImgs = document.querySelectorAll(".crew-img");

crewImgs.forEach((item) => {
    const thisShadowElement = item.querySelector(".shadow")!;
    item.addEventListener("mouseover", () => {
        thisShadowElement.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
        thisShadowElement.classList.remove("active");
    });
});

//Navbar animada
class MobileNavbar {
    mobileMenu: HTMLDivElement;
    navList: HTMLDivElement;
    navLinks: NodeListOf<HTMLDivElement>;
    activeClass: string;

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

//Preenchendo a seção dos arcos
const arcsSectionContent: HTMLDivElement =
    document.querySelector("#arcs-cards")!;

const createArcCard = (id: string) => {
    return `
<div id="${id}" class="arc-card">
    <img
        src="./assets/arcs/${id}.png"
        alt="${id}"
        title="${id}"
    />
</div>`;
};

arcsData.forEach((arc) => {
    arcsSectionContent.innerHTML += createArcCard(arc.id);
});

//Modal animado
const charactersButtons = document.querySelectorAll(".crew-img");
const arcsButtons = document.querySelectorAll(".arc-card");

const backdrop: HTMLDivElement = document.querySelector("#backdrop")!;

const modal: Element = backdrop.querySelector("#backdrop .modal")!;
const modalExitButton: HTMLDivElement = modal.querySelector(".modal-x")!;

const modalImg: HTMLImageElement = modal.querySelector(".modal-img img")!;
const modalTitle: HTMLDivElement = modal.querySelector(".modal-title")!;
const modalText: HTMLHeadingElement = modal.querySelector(".modal-text")!;
const modalGif: HTMLImageElement = modal.querySelector(".modal-gif img")!;

const closeModal = () => {
    modalGif.classList.add("active");

    backdrop.style.opacity = "0";

    setTimeout(() => {
        backdrop.style.display = "none";
    }, 300);
};

const openModal = () => {
    backdrop.style.display = "flex";

    setTimeout(() => {
        backdrop.style.opacity = "1";
    }, 300);
};

const setModalContent = (
    imgUrl: string,
    title: string,
    description: string,
    gifUrl?: string
) => {
    modalImg.setAttribute("src", imgUrl);

    modalTitle.innerText = title;
    modalText.innerText = description;

    if (gifUrl) {
        modalGif.setAttribute("src", gifUrl);
        modalGif.classList.add("active");
    } else {
        modalGif.classList.remove("active");
    }
};

modalExitButton.addEventListener("click", closeModal);

// Modal dos personagens
charactersButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const characterName: string = btn.getAttribute("id")!;
        const characterData = charactersData.find(
            (item) => item.id === characterName
        )!;

        const imgUrl = `./assets/characters/${characterName}.png`;

        setModalContent(imgUrl, characterData.title, characterData.description);
        openModal();
    });
});

// Modal dos arcos
arcsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const arcName: string = btn.getAttribute("id")!;
        const arcData = arcsData.find((item) => item.id === arcName)!;

        const imgUrl = `./assets/arcs/${arcName}.png`;
        const gifUrl = `./assets/arcs/gifs/${arcName}.png`;

        setModalContent(imgUrl, arcData.title, arcData.description, gifUrl);
        openModal();
    });
});
