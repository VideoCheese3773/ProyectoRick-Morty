//Logica para el local storage
let userList = [];

//Funciones
function loadUsers() {
    let loadedUsers = localStorage.getItem("user");
    if (loadedUsers !== null) {
        userList = JSON.parse(loadedUsers);
    };
    console.log("load users:", userList);
}
loadUsers(); //primera carga de users

function saveUsers() {
    let json = JSON.stringify(userList);
    localStorage.setItem("user", json);
}

function validateUsername(user) {
    if (user == "") {
        alert("Your username cannot be left empty");
        return true;
    }
    for (let index = 0; index < userList.length; index++) {
        if (userList[index].name == user) {
            return true
        }
    }
}

function validateEmail(email) {
    if (email == "") {
        alert("Your email cannot be left empty");
        return true;
    }
    if (email.includes("@") && email.includes(".")) {
        for (let index = 0; index < userList.length; index++) {
            console.log(index, userList[index].email)
            if (userList[index].email == email) {
                alert("This email is already in use")
                return true
            }
        }
        return false
    } else
        alert("You have entered an invalid email address")
    return true
}

function validatePassword(password, verifyPassword) {
    if (password == "") {
        alert("Your password cannot be left empty");
        return true;
    } else if (verifyPassword == "") {
        alert("Your password verification cannot be left empty");
        return true;
    } else if (password.length < 4) {
        alert("Your password must be longer than 4 characters");
        return true;
    } else if (password !== verifyPassword) {
        alert("Your passwords doesn't match");
        return true;
    } else {
        return false;
    }
}

function createNewUser(name, email, password) {
    const newUser = {
        name: name,
        email: email,
        password: password,
        isLogged: false
    }
    userList.push(newUser);
    saveUsers();
    console.log("new user", newUser.name, "saved")
    window.location.href = './login.html'
}

function signup() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const verifyPassword = document.getElementById("verifyPassword").value

    if (validateUsername(name)) {
        return;
    } else if (validateEmail(email)) {
        return;
    } else if (validatePassword(password, verifyPassword)) {
        return;
    } else {
        createNewUser(name, email, password);
    }

}