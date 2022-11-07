class Dev{

    constructor(nick, name, job, pfp){
        this.nick = nick;
        this.name = name;
        this.job = job;
        this.pfp = pfp;
    }

    render(container) {
        let card = document.createElement('div');
        card.classList.add('dev');

        let html = `
                <img id="pfp" src="${this.pfp}" alt="">
                <div class="devInfo">
                    <h3>${this.nick}</h3>
                    <h3>${this.name}</h3>
                    <h3>${this.job}</h3>
                </div>`;

        card.innerHTML += html;
        container.appendChild(card);
    }
}