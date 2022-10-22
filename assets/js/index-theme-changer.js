//When the night toggler btn is clicked dark mode becomes active
const textCarousel = document.getElementById("carousel-text");

nightToggler.onclick = () =>{
    nightToggler.classList.toggle("bi-toggle-on");
    //dark theme
    if(nightToggler.classList.contains("bi-toggle-on")){
        nav.style.backgroundColor = "var(--dark-theme-bg-color)";
        textCarousel.style.backgroundColor = "var(--dark-theme-text-carousel)";
        saveState("dark")
    }
    //light theme
    else{
        nav.style.backgroundColor = "var(--light-theme-bg-color)";
        textCarousel.style.backgroundColor = "var(--light-theme-text-carousel)";
        saveState("light")
    }
}

