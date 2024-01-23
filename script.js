console.log("script Running...");
document.querySelector('.cross').style.display = "none";
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.angel-nav-bar').classList.toggle('angel-nav-bar-go');
    if(document.querySelector('.angel-nav-bar').classList.contains('angel-nav-bar-go')){
        document.querySelector('.ham').style.display = "inline"
        document.querySelector('.cross').style.display = "none"
    }
    else{
        document.querySelector('.cross').style.display = "inline"
        document.querySelector('.ham').style.display = "none"
    }
});