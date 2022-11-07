class Description{

    constructor(desc){
        this.desc = desc;
    }

    render(container) {
        let card = document.createElement('div');
        let html = `
        <h1>About Us</h1>
        <br>
        <h3>
            ${this.desc}
        </h3>
        <br>
        <h3>
            We do have some social media accounts but we don't really use them, anyways here they are.
        </h3>
        <br>
        <a href="https://twitter.com/RickandMorty"><img id="twitter" src="../ICONS/twitter.png" alt="twitter"></a>
        <a href="https://www.facebook.com/RickandMorty/"><img src="../ICONS/facebook.png" alt="facebook"></a>
        <a href="https://www.instagram.com/rickandmorty/"><img src="../ICONS/instagram.png" alt="instagram"></a>
        <a href="https://www.youtube.com/adultswim1"><img src="../ICONS/youtube.png" alt="youtube"></a>`;

        card.innerHTML += html;
        container.appendChild(card);
    }
}