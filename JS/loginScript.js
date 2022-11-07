//Logica del storage
let userList = [];

//Funciones
function loadUsers() {
    let loadedUsers = localStorage.getItem("user");
    if (loadedUsers !== null) {
        userList = JSON.parse(loadedUsers);
    };
    //console.log("load users:", userList);
}
loadUsers(); //primera carga de users

function saveUsers() {
    let json = JSON.stringify(userList);
    localStorage.setItem("user", json);
}

function validateEmail(email) {
    if (email == "") {
        alert("The email cannot be left empty");
        return true;
    }
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].email == email) {
            return false;
        }
    }
    alert("The email is incorrect");
    return true;
}

function validatePassword(password, email) {
    if (password == "") {
        alert("The password cannot be left empty");
        return true;
    }
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].email == email) {
            if (userList[index].password == password) {
                return false;
            }
        }
    }
    alert("The password is incorrect");
    return true;

}

function updateUser(email){
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].email == email) {
            userList[index].isLogged = true;
        }
    }
    saveUsers();
}

function login() {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if (validateEmail(email)) {
        return;
    } else if (validatePassword(password, email)) {
        return;
    } else {
        updateUser(email);
        window.location.href = './main.html'
    }
        // Navego a la main
    // TODO: Handle error

}