const storage = window.localStorage

function signup() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // TODO: Validate empty and correct fields
    const user = {
        name: name,
        email: email,
        password: password,
        isLogged: false
    }

    const userJsonStr = JSON.stringify(user)
    storage.setItem("user", userJsonStr)

    window.location.href = './login.html'
    // TODO: Refactor for the use of a list of users
    // Validar que el usario no este previamente registrado
}