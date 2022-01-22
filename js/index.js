const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
    item.addEventListener("click",(e) =>{
        e.currentTarget.classList.toggle("collapsible--expanded")
    })
});