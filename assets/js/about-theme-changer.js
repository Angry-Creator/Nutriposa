//When the night toggler btn is clicked dark mode becomes active
const nightToggler = document.getElementById("night-toggler");

nightToggler.onclick = () =>{
    nightToggler.classList.toggle("bi-toggle-on");
    if(nightToggler.classList.contains("bi-toggle-on")){
        nav.style.backgroundColor = "var(--dark-theme-bg-color)";
    }else{
        nav.style.backgroundColor = "var(--light-theme-bg-color)";
    }
}

