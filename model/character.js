class Character {

    constructor(id, name, gender, status, species, lkl, fsi, favorite) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.status = status;
        this.species = species;
        this.lkl = lkl;
        this.fsi = fsi;
        this.favorite = favorite;
    }

    renderFav(container) {
        let card = document.createElement('div');
        card.classList.add('item');

        let html = `
                <h1 id="name">${this.name}</h1>
                <h2 id="gender">${this.gender}</h2>
                <a id="itemImagA" href="../HTML/details.html">
                    <img id="itemImag" src="../IMAGS/RickSanchez.png" alt="rick" onclick="details(${this.id}) role="button">
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
                <a id="itemImagA" href="../HTML/details.html">
                    <img id="itemImag" src="../IMAGS/RickSanchez.png" alt="rick" onclick="details(${this.id}) role="button">
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
}