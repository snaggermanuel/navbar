const navbarBtn = document.querySelector('.navbar__btn')
const navbarLinks = document.querySelector('.navbar__links')


navbarBtn.addEventListener("click" ,function () {
    let value = navbarLinks.classList.contains('navbar__collaspe')

    if (value) {
        navbarLinks.classList.remove('navbar__collaspe')
        navbarBtn.classList.remove('change')
    }
    else {
        navbarLinks.classList.add('navbar__collaspe')
        navbarBtn.classList.add('change')

    }
})