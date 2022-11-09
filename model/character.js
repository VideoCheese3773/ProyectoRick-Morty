class Character {

    constructor(id, name, gender, status, species, lkl, fsi, favorite, image) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.status = status;
        this.species = species;
        this.lkl = lkl;
        this.fsi = fsi;
        this.favorite = favorite;
        this.image = image;
    }

    renderFav(container) {
        let card = document.createElement('div');
        card.classList.add('item');

        let html = `
                <h1 id="name">${this.name}</h1>
                <h2 id="gender">${this.gender}</h2>
                <a id="itemImagA" onclick="details(${this.id})">
                    <img id="itemImag" src="${this.image}" alt="rick">
                </a>
                <h2 id="status">Status</h2>
                <h1 id="statusResult">${this.status}</h1>
                <h2 id="species">Species</h2>
                <h1 id="speciesResult">${this.species}</h1>
                <h2 id="location">Last Known Location</h2>
                <h1 id="locationResult">${this.lkl}</h1>
                <h2 id="appearance">First Seen In</h2>
                <h1 id="appearanceResult">${this.fsi}</h1>
                <img class="star" id="star${this.id}" src="../ICONS/starFill.png" alt="starHollow" onclick="favorite(${this.id})" role="button">`;

        card.innerHTML += html;
        container.appendChild(card);
    }

    renderNoFav(container) {
        let card = document.createElement('div');
        card.classList.add('item');

        let html = `
                <h1 id="name">${this.name}</h1>
                <h2 id="gender">${this.gender}</h2>
                <a id="itemImagA" onclick="details(${this.id})">
                    <img id="itemImag" class="itemImag" src="${this.image}" alt="rick">
                </a>
                <h2 id="status">Status</h2>
                <h1 id="statusResult">${this.status}</h1>
                <h2 id="species">Species</h2>
                <h1 id="speciesResult">${this.species}</h1>
                <h2 id="location">Last Known Location</h2>
                <h1 id="locationResult">${this.lkl}</h1>
                <h2 id="appearance">First Seen In</h2>
                <h1 id="appearanceResult">${this.fsi}</h1>
                <img class="star" id="star${this.id}" src="../ICONS/starHollow.png" alt="starHollow" onclick="favorite(${this.id})" role="button">`;

        card.innerHTML += html;
        container.appendChild(card);
    }

    renderDetailFav(container){
        let card = document.createElement('div');
        card.classList.add('details');

        let html = `
                <img id="detailsImag" src="${this.image}" alt="Rick">
                <h1 id="name">${this.name}</h1>
                <h1 id="gender">${this.gender}</h1>
                <h1 id="status">Status</h1>
                <h1 id="statusResult">${this.status}</h1>
                <h1 id="species">Species</h1>
                <h1 id="speciesResult">${this.status}</h1>
                <h1 id="location">Last Known Location</h1>
                <h1 id="locationResult">${this.lkl}</h1>
                <h1 id="appearance">First Seen In</h1>
                <h1 id="appearanceResult">${this.fsi}</h1>
                <img class="star" id="star${this.id}" class="star" src="../ICONS/starFill.png" alt="starHollow" onclick="favorite(${this.id})" role="button">`;

        card.innerHTML += html;
        container.appendChild(card);
    }

    renderDetailNoFav(container){
        let card = document.createElement('div');
        card.classList.add('details');

        let html = `
                <img id="detailsImag" src="${this.image}" alt="Rick">
                <h1 id="name">${this.name}</h1>
                <h1 id="gender">${this.gender}</h1>
                <h1 id="status">Status</h1>
                <h1 id="statusResult">${this.status}</h1>
                <h1 id="species">Species</h1>
                <h1 id="speciesResult">${this.status}</h1>
                <h1 id="location">Last Known Location</h1>
                <h1 id="locationResult">${this.lkl}</h1>
                <h1 id="appearance">First Seen In</h1>
                <h1 id="appearanceResult">${this.fsi}</h1>
                <img class="star" id="star${this.id}" class="star" src="../ICONS/starHollow.png" alt="starHollow" onclick="favorite(${this.id})" role="button">`;

        card.innerHTML += html;
        container.appendChild(card);
    }
}