const menu = document.getElementById('check');
const menuIcon = document.getElementById('menu-btn');
const mediaMenu = document.getElementById('media-menu');

menuIcon.addEventListener('click', ()=>{
    if(menu.checked == false) {
        mediaMenu.style.display = 'block';
    }
    if(menu.checked == true) {
        mediaMenu.style.display = 'none';
    }
});

function toggle(checked) {
    if(checked!= menu.checked) {
        menu.click();
    }
}

const ipadMediaQuery =  window.matchMedia('(min-width: 953px)')

if(ipadMediaQuery.matches){
    document.querySelector('.navbar .nav .media-menu-bar').style.display = 'none';
}