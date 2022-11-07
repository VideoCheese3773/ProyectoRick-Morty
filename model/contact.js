class Contact{

    constructor(name, cell, email, pfp){
        this.name = name;
        this.cell = cell;
        this.email = email;
        this.pfp = pfp;
    }

    render(container) {
        let card = document.createElement('div');
        card.classList.add('contactInfo');

        let html = `
                <img id="pfp" src="${this.pfp}" alt="">
                <div class="devInfo">
                    <h3>${this.name}</h3>
                    <h3>${this.cell}</h3>
                    <h3>${this.email}</h3>
                </div>`;

        card.innerHTML += html;
        container.appendChild(card);
    }
}