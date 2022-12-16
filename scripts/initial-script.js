window.addEventListener('scroll', fixPositionOnScroll)

const menu = document.getElementById('menu');

function fixPositionOnScroll(){
    if (window.scrollY > 0){
        menu.classList.add("sticky")
    }else {
        menu.classList.remove('sticky')
    }
}
