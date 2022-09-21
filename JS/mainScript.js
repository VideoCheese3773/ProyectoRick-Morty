const btnToggle = document.querySelector('.toggle-btn');
console.log(btnToggle)

btnToggle.addEventListener('click', function (){
    document.getElementById('barralat').classList.toggle('activa');
})
