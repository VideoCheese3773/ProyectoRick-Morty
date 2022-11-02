const storage = window.localStorage

function login() {
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if(user.email === email && user.password === password) {
        // Actualizo al usuario como "Logueado"
        user.isLogged = true
        const userJsonStr = JSON.stringify(user)
        storage.setItem("user", userJsonStr)

        // Navego a la main
        window.location.href = './main.html'
    }
    // TODO: Handle error

}