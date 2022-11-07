const description = document.getElementById("description");
const devContainer = document.getElementById("devContainer");
const contactContainer = document.getElementById("contactContainer");

//funciones
function generateDescription() {
    let desc = `
    We are a non profit asociation that it's only purpose is to watch Rick and Morty until the end of
    time.
    <br>
    Like for real, wedon't do anything else but watch Rickand Morty<br>
    We are actually considering starting a cult or something, I mean, have you seen us? we don't see the
    light of day.
    <br>`;

    let newDesc = new Description(desc);
    newDesc.render(description);
}

function generateDevs(){
    let nick1 = "VideoCheese3773"
    let name1 = "Eduardo Mejia"
    let job1 = "Programmer"
    let pfp1 = "../IMAGS/Faith.jpg"

    let nick2 = "Nakosume"
    let name2 = "Sebastian Romero"
    let job2 = "Programmer"
    let pfp2 = "../IMAGS/OutrunPepe.jpg"

    let nick3 = "ZoulA2"
    let name3 = "Nicolas Rodriguez"
    let job3 = "Programmer"
    let pfp3 = "../IMAGS/SlavSolaire.jpg"

    let dev1 = new Dev(nick1, name1, job1, pfp1);
    let dev2 = new Dev(nick2, name2, job2, pfp2);
    let dev3 = new Dev(nick3, name3, job3, pfp3);

    dev1.render(devContainer);
    dev2.render(devContainer);
    dev3.render(devContainer);
}

function generateContacts(){
    let name1 = "Eduardo Mejia"
    let cell1 = "+1 123456789"
    let email1 = "NotABurnerEmail@yahoo.com"
    let pfp1 = "../IMAGS/Faith.jpg"

    let name2 = "Sebastian Romero"
    let cell2 = "+1 987654321"
    let email2 = "NotAFlamerEmail@yahoo.com"
    let pfp2 = "../IMAGS/OutrunPepe.jpg"

    let name3 = "Nicolas Rodriguez"
    let cell3 = "+1 198273645"
    let email3 = "NotAScorcherEmail@yahoo.com"
    let pfp3 = "../IMAGS/SlavSolaire.jpg"


    let cont1 = new Contact(name1, cell1, email1, pfp1);
    let cont2 = new Contact(name2, cell2, email2, pfp2);
    let cont3 = new Contact(name3, cell3, email3, pfp3);

    cont1.render(contactContainer);
    cont2.render(contactContainer);
    cont3.render(contactContainer);
}

generateDescription();
generateDevs();
generateContacts();