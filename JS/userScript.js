const username = document.getElementById("username");
const mainContent = document.getElementById("mainContent");
const nickname = document.getElementById("name");
const email = document.getElementById("email");

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
    nickname.innerHTML = loggedUser.name;
    email.innerHTML = loggedUser.email;
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
        }
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