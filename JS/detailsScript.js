const username = document.getElementById("username");
const mainContent = document.getElementById("mainContent");

//Logica del local storage
let userList = [];
let characterList = [];
let favoriteList = [];

//Funciones de carga y guardado
function loadUsers() {
    let loadedUsers = localStorage.getItem("user");
    if (loadedUsers !== null) {
        userList = JSON.parse(loadedUsers);
    };
    console.log("load users:", userList);
}
loadUsers(); //primera carga de users

function loadCharacters() {
    let loadedCharacters = localStorage.getItem("character");
    if (loadedCharacters !== null) {
        characterList = JSON.parse(loadedCharacters);
    };
    console.log("load characters:", characterList);
}
loadCharacters(); //primera carga de characters

function loadFavorites() {
    let user = findLoggedUser();
    let loadedFavorites = user.favoriteList;
    if (loadedFavorites !== null) {
        favoriteList = loadedFavorites;
    };
    console.log("load favorites:", favoriteList);
}
loadFavorites(); //primera carga de favorites

function saveUsers() {
    let json = JSON.stringify(userList);
    localStorage.setItem("user", json);
}

function saveCharacters() {
    let json = JSON.stringify(characterList);
    localStorage.setItem("character", json);
}

function saveFavorites() {
    let json = JSON.stringify(favoriteList);
    localStorage.setItem("favorite", json);
}

//Funciones de logica HUD
function findLoggedUser() {
    let loggedUser
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].isLogged == true) {
            loggedUser = userList[index];
            return loggedUser;
        }
    }
}

function updateHUD() {
    loggedUser = findLoggedUser();
    username.innerHTML = loggedUser.name;
}
updateHUD();

function logout() {
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].isLogged == true) {
            userList[index].isLogged = false;
            saveUsers();
            window.location.href = './index.html'
            favoriteList = [];
            saveFavorites();
            localStorage.removeItem("character");
        }
    }
}

function addFavorite(id) {
    for (let i = 0; i < characterList.length; i++) {
        if (characterList[i].id == id) {
            characterList[i].favorite = true;
            favoriteList.push(characterList[i]);
            saveCharacters();
            saveFavorites();
        }
    }
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].isLogged == true) {
            userList[index].favoriteList = favoriteList;
            saveUsers();
        }
    }
}

function removeFavorite(id) {
    for (let i = 0; i < favoriteList.length; i++) {
        if (favoriteList[i].id == id) {
            favoriteList.splice(i, 1);
            saveFavorites();
        }
    }
    for (let i = 0; i < characterList.length; i++) {
        if (characterList[i].id == id) {
            characterList[i].favorite = false;
            saveCharacters();
        }
    }
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].isLogged == true) {
            userList[index].favoriteList = favoriteList;
            saveUsers();
        }
    }
}

function favorite(id) {
    const star = document.getElementById(`star${id}`);
    let starContain = star.src;
    if (starContain.includes("Fill")) {
        star.src = "../ICONS/starHollow.png";
        removeFavorite(id);
    } else if (starContain.includes("Hollow")) {
        star.src = "../ICONS/starFill.png";
        addFavorite(id);
    }
}

function showCharacter(character) {
        let newCharacter = new Character(
            character.id, character.name, character.gender, character.status, character.species, character.lkl, character.fsi, character.favorite, character.image
        )
        console.log(newCharacter)
        if (newCharacter.favorite == true) {
            newCharacter.renderDetailFav(mainContent);
        } else if (newCharacter.favorite == false) {
            newCharacter.renderDetailNoFav(mainContent);
        }
}

function findCharacter(id) {
    for (let i = 0; i < characterList.length; i++) {
        if (characterList[i].id == id) {
            return characterList[i];
        }
    }
    console.log("character not found");
}

function updateDetails() {
    let params = new URLSearchParams(window.location.search);
    let characterId = params.get('id');
    let character = findCharacter(characterId);
    console.log(character)
    showCharacter(character);
}

function searchCharacter(){
    if (localStorage.getItem("search")) {
        localStorage.removeItem("search");
    }
    const searchHTML = document.getElementById("search");
    let search = searchHTML.value;
    let searchList = [];
    if (search !== "") {
        for (let i = 0; i < characterList.length; i++) {
            if (characterList[i].name.toLowerCase().includes(search.toLowerCase())) {
                searchList.push(characterList[i]);
            }
        }
    }
    if (searchList.length == 0) {
        alert("No Matches For Search")
    } else{
        let json = JSON.stringify(searchList);
        localStorage.setItem("search", json);
        window.location.href = './search.html'
    }
}

updateDetails();