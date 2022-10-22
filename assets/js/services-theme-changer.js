//When the night toggler btn is clicked dark mode becomes active

nightToggler.onclick = () =>{
    nightToggler.classList.toggle("bi-toggle-on");
    //dark theme
    if(nightToggler.classList.contains("bi-toggle-on")){
        nav.style.backgroundColor = "var(--dark-theme-bg-color)";
        saveState("dark")
    }
    //light theme
    else{
        nav.style.backgroundColor = "var(--light-theme-bg-color)";
        saveState("light")
    }
}

