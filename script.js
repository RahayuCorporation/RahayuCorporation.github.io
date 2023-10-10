const navbarTog = document.querySelector('.menu-item');

document.querySelector('#toggle').onclick = () => {
    navbarTog.classList.toggle('active')
}

const navbarTog2 = document.querySelector('.toggle');

document.addEventListener('click', function(x){
    if(!navbarTog2.contains(x.target) && !navbarTog.contains(x.target)){
        navbarTog.classList.remove('active');
    }
});