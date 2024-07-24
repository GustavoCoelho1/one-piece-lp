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
