const charactersData = [
    {
        id: "zoro",
        title: "Roronoa Zoro",
        description:
            "Roronoa Zoro é um espadachim formidável, determinado a se tornar o melhor do mundo. Carregando três espadas e uma vontade inabalável, ele é um guerreiro feroz que enfrenta qualquer adversidade de frente. Seu senso de honra é tão afiado quanto suas lâminas, e ele nunca recua diante de um desafio, seja em combate ou em sua jornada pessoal de superação.\n\nApesar de sua aparência séria e sua constante falta de senso de direção, Zoro possui um grande respeito por seus companheiros e uma lealdade inquebrantável ao seu capitão, Luffy. Seu passado misterioso e sua busca pelo poder absoluto fazem dele uma figura fascinante, sempre pronta para lutar por seus sonhos e proteger aqueles que considera amigos.",
    },
    {
        id: "sanji",
        title: "Vinsmoke Sanji",
        description:
            "Sanji é o cozinheiro da tripulação, mas suas habilidades vão muito além da cozinha. Com um estilo de luta único, baseado em chutes poderosos e movimentos graciosos, ele é um combatente ágil e letal. Seu amor por belas mulheres é tão famoso quanto seu talento culinário, e ele nunca perde a oportunidade de exibir sua elegância e charme, mesmo nas situações mais perigosas.\n\nPor trás de sua fachada de galanteador, Sanji carrega um passado complexo e uma força de vontade indomável. Ele luta com o peso de suas origens, determinado a proteger seus amigos e a manter sua promessa de encontrar o lendário All Blue. Sanji é um personagem que equilibra força, emoção e dedicação com maestria.",
    },
    {
        id: "nami",
        title: "Nami",
        description:
            "Nami é a navegadora da tripulação, uma estrategista brilhante com um talento inato para cartografia e meteorologia. Com sua paixão por mapas e seu desejo de desenhar o mapa completo do mundo, ela guia seus companheiros com precisão pelos mares mais traiçoeiros. Embora seja habilidosa em manipular e negociar, Nami também é uma lutadora astuta, utilizando seu Clima-Tact para controlar o clima a seu favor em combate.\n\nAtrás de seu amor pelo dinheiro e pelos tesouros, há uma história de sofrimento e superação. Nami é motivada pela necessidade de proteger aqueles que ama e de conquistar sua liberdade. Sua coragem, inteligência e resiliência a tornam uma peça-chave na tripulação, capaz de transformar situações desfavoráveis em vitórias estratégicas.",
    },
    {
        id: "usopp",
        title: "Usopp",
        description:
            "Usopp, o atirador da tripulação, é um personagem que combina criatividade, humor e coragem. Com uma mira precisa e um arsenal de estilingues e gadgets engenhosos, ele é capaz de transformar até os objetos mais simples em armas eficazes. Apesar de sua tendência a exagerar suas histórias e medos, Usopp possui um coração valente e um forte senso de responsabilidade para com seus amigos.\n\nSeu crescimento ao longo da jornada é notável, passando de um mentiroso inseguro para um guerreiro corajoso que enfrenta seus medos de frente. Usopp sonha em se tornar um bravo guerreiro do mar, e sua jornada é uma prova de que a verdadeira bravura vem de dentro, independentemente das limitações externas. Ele é um exemplo de superação e lealdade, sempre disposto a arriscar tudo para proteger seus companheiros.",
    },
    {
        id: "luffy",
        title: "Monkey D. Luffy",
        description:
            "Monkey D. Luffy é o carismático capitão da tripulação, determinado a se tornar o Rei dos Piratas. Com sua habilidade única de esticar o corpo como borracha, fruto da Gomu Gomu no Mi, ele enfrenta inimigos poderosos com uma combinação de força bruta, criatividade e uma vontade inquebrantável. Sua determinação é contagiante, e ele inspira seus companheiros a superar seus próprios limites e a lutar por seus sonhos, independentemente das dificuldades.\n\nLuffy é guiado por um forte senso de justiça e uma lealdade imensurável aos seus amigos. Sua personalidade alegre e despreocupada esconde uma profundidade emocional, e ele está disposto a arriscar tudo para proteger aqueles que ama e para alcançar seu objetivo final. Sua jornada é a essência da aventura, cheia de reviravoltas inesperadas, batalhas épicas e a busca incessante pela liberdade e pelo sonho que herdou de seus ídolos.",
    },
];

const arcsData = [
    {
        id: "1",
        title: "East Blue",
        description:
            "O ponto de partida para grandes aventuras, onde um jovem pirata com um sonho grandioso começa a reunir sua tripulação peculiar e enfrenta seus primeiros desafios.",
    },
    {
        id: "2",
        title: "Alabasta",
        description:
            "Em meio ao deserto ardente, uma nação em crise se torna o palco de uma batalha épica entre piratas e forças sombrias. O destino de um reino está em jogo.",
    },
    {
        id: "3",
        title: "Skypiea",
        description:
            "Nas nuvens, uma terra mítica e sagrada esconde segredos antigos e um poder celestial. A tripulação encara uma jornada nas alturas cheia de mistérios e desafios divinos.",
    },
    {
        id: "4",
        title: "Water 7/Enies Lobby",
        description:
            "Na cidade das águas, uma traição inesperada leva a tripulação a uma missão de resgate arriscada, culminando em uma batalha monumental contra um governo implacável.",
    },
    {
        id: "5",
        title: "Thriller Bark",
        description:
            "Um navio fantasma gigantesco navega em mares sombrios, onde monstros e seres das trevas testam os limites da coragem e da determinação dos piratas.",
    },
    {
        id: "6",
        title: "Marineford",
        description:
            "No epicentro da justiça mundial, uma guerra devastadora se desenrola, envolvendo os maiores poderes do mundo em um confronto que mudará o destino dos mares.",
    },
    {
        id: "7",
        title: "Arquipélago Sabaody",
        description:
            "Em um arquipélago próximo à Grande Linha, a tripulação enfrenta dilemas morais e forças avassaladoras, enquanto segredos sombrios sobre o mundo começam a ser revelados.",
    },
    {
        id: "8",
        title: "Dressrosa",
        description:
            "Em uma ilha cheia de contrastes, onde o passado e o presente colidem, um tirano manipula tudo à sua volta. Cabe aos piratas desafiar o poder absoluto e libertar a nação.",
    },
    {
        id: "9",
        title: "Wano",
        description:
            "Em uma terra isolada com tradições ancestrais e guerreiros formidáveis, uma revolução está em curso. A tripulação se junta a aliados inesperados para derrubar um regime cruel de um dos Imperadores.",
    },
    {
        id: "10",
        title: "Saga Final",
        description:
            "Os maiores mistérios e conflitos dos mares se aproximam de uma conclusão épica. A jornada que começou no East Blue chega ao seu clímax, onde destinos serão selados.",
    },
];

//Preenchendo o slider
const sliderContent = document.querySelector("#slider-content");

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
    const thisShadowElement = item.querySelector(".shadow");
    item.addEventListener("mouseover", () => {
        thisShadowElement.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
        thisShadowElement.classList.remove("active");
    });
});

//Navbar animada
class MobileNavbar {
    mobileMenu;
    navList;
    navLinks;
    activeClass;
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
const arcsSectionContent = document.querySelector("#arcs-cards");
const createArcCard = (id, title) => {
    return `
<div class="arc-card-container">
    <div id="${id}" class="arc-card img-container">
        <img
            src="./assets/arcs/${id}.png"
            alt="${title}"
            title="${title}"
        />
        
    </div>
    <span class="arc-title">${title}</span>
</div>`;
};

arcsData.forEach((arc) => {
    arcsSectionContent.innerHTML += createArcCard(arc.id, arc.title);
});

//Modal animado
const charactersButtons = document.querySelectorAll(".crew-img");
const arcsButtons = document.querySelectorAll(".arc-card");
const backdrop = document.querySelector("#backdrop");
const modal = backdrop.querySelector("#backdrop .modal");
const modalImg = modal.querySelector(".modal-img img");
const modalTitle = modal.querySelector(".modal-title");
const modalText = modal.querySelector(".modal-text");
const modalGif = modal.querySelector(".modal-gif");
const modalGifImg = modal.querySelector(".modal-gif img");
const modalOkBtn = modal.querySelector(".modal-ok");

const closeModal = () => {
    backdrop.style.opacity = "0";
    setTimeout(() => {
        backdrop.style.display = "none";
        modalGif.classList.remove("active");
    }, 300);
};

const openModal = () => {
    backdrop.style.display = "flex";
    setTimeout(() => {
        backdrop.style.opacity = "1";
    }, 100);
};

const setModalContent = (imgUrl, title, description, gifUrl) => {
    modalImg.setAttribute("src", imgUrl);
    modalTitle.innerText = title;
    modalText.innerText = description;
    if (gifUrl !== undefined) {
        modalGifImg.setAttribute("src", gifUrl);
        modalGif.classList.add("active");
    } else {
        modalGif.classList.remove("active");
    }
};

modal.addEventListener("click", (e) => {
    e.stopPropagation();
});

backdrop.addEventListener("click", closeModal);
modalOkBtn.addEventListener("click", closeModal);

// Modal dos personagens
charactersButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const characterName = btn.getAttribute("id");
        const characterData = charactersData.find(
            (item) => item.id === characterName
        );
        const imgUrl = `./assets/characters/full-image/${characterName}.png`;
        setModalContent(imgUrl, characterData.title, characterData.description);
        openModal();
    });
});

// Modal dos arcos
arcsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const arcName = btn.getAttribute("id");
        const arcData = arcsData.find((item) => item.id === arcName);
        const imgUrl = `./assets/arcs/${arcName}.png`;
        const gifUrl = `./assets/arcs/gifs/${arcName}.gif`;
        setModalContent(imgUrl, arcData.title, arcData.description, gifUrl);
        openModal();
    });
});
