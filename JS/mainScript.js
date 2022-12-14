const username = document.getElementById("username");
const mainContent = document.getElementById("mainContent");

//Logica del local storage
let userList = [];
let characterList = [];
let favoriteList = [];
let apiList = [];

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
//loadCharacters(); //primera carga de characters

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

function saveApi() {
    let json = JSON.stringify(apiList);
    localStorage.setItem("api", json);
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

//Funciones de logica Personajes
const fetchData = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const data = await fetch(url);
    const dataJson = await data.json();
    apiList = dataJson.results;
    //console.log('fetch apiList', apiList);
    saveApi();
}
fetchData();

function generateContent() {
    //console.log('apiList', apiList);

    if (localStorage.getItem("character")) {
        console.log("characters loaded from memory")
        loadCharacters()
        showCharacters();
    } else {
        if (apiList.length > 0) {
            for (let i = 0; i < apiList.length; i++) {
                let id = apiList[i].id;
                let name = apiList[i].name;
                let gender = apiList[i].gender;
                let status = apiList[i].status;
                let species = apiList[i].species;
                let lkl = apiList[i].location.name;
                let fsi = apiList[i].origin.name;
                let favorite = false;
                let image = apiList[i].image;
                let newCharacter = new Character(id, name, gender, status, species, lkl, fsi, favorite, image);
                characterList.push(newCharacter);
            }
            console.log('characerList', characterList);
            saveCharacters();
            showCharacters();
        } else {
            alert("Couldn't fetch from API, retrying...")
            setTimeout(generateContent, 2000);
            showCharacters();
        }
    }
}

if (localStorage.getItem("character")) {
    generateContent();
} else{
    setTimeout(generateContent, 300);
}
//content generation trigger

function showCharacters() {
    for (let i = 0; i < characterList.length; i++) {
        let favFlag = false
        for (let j = 0; j < favoriteList.length; j++) {
            if (characterList[i].id == favoriteList[j].id) {
                favFlag = true;
            }
        }
        let character = new Character(
            characterList[i].id, characterList[i].name, characterList[i].gender, characterList[i].status, characterList[i].species, characterList[i].lkl, characterList[i].fsi, favFlag, characterList[i].image
        )
        if (favFlag == true) {
            character.renderFav(mainContent);
        } else if (favFlag == false) {
            character.renderNoFav(mainContent);
        }
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

function details(id) {
    let character = null;
    for (let i = 0; i < characterList.length; i++) {
        if (characterList[i].id == id) {
            character = characterList[i];
        }
    }
    if (character == null) {
        alert("Could not get details for this character.")
    } else {
        window.location.href = './details.html?id=' + character.id
    }
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