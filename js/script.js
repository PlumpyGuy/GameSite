document.addEventListener('DOMContentLoaded', function(){
    const navBar = document.querySelector('.navbar')
    const allnavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow(){
        if(window.scrollY >= 300){
            navBar.classList.add("shadow-bg")
        }
        else{
            navBar.classList.remove("shadow-bg")
        }
    }

    allnavItems.forEach(item => item.addEventListener('click',() => navList.classList.remove('show')))

    window.addEventListener('scroll',addShadow)
})