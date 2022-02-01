// Collapsibole NavBar
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
    item.addEventListener("click",(e) =>{
        e.currentTarget.classList.toggle("collapsible--expanded")
    })
});

// Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Scroll NavBar
const navBar = document.querySelector('.nav');
const topLink = document.querySelector('.top--link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight)
        navBar.classList.add('nav--fixed');   
    else
        navBar.classList.remove('nav--fixed');   
    
    if(scrollHeight>500)
        topLink.classList.add('show--link');
    else
        topLink.classList.remove('show--link');

})

// Smooth Scroll
const scrollLinks = document.querySelectorAll('.scroll--link');

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        // Prevent Default movement
        e.preventDefault();

        // // Close NavBar upon clicking
        // collapsibles.forEach((item) => {
        //     item.currentTarget.classList.remove('collapsible--expanded')
        // });

        // Navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // Calculate the height
        const navHeight = navBar.getBoundingClientRect().height;
        const navList = document.querySelector('.nav__list');
        const navListHeight = navList.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        const fixedNav = navBar.classList.contains("nav--fixed");

        if (!fixedNav) {
            position = position - navHeight;
          }
          if (navHeight > 82) {
            position = position + navListHeight;
          }
        window.scrollTo({
            left:0,
            top: position
        })
    })
})