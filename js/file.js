/*==================================================================
============== NavBar =============================================
=================================================================*/

/*===================== Add sticky Class =================*/
var nav           = document.querySelector("#navbar");
var iconContainer = nav.querySelector("span.icon");
var greenIcon     = '<img src="images/icons/green-icon.png"  alt="icon">';
var whiteIcon     = '<img src="images/icons/white-icon.png"  alt="icon">';
/*=== Check If in Mideum Page ===*/
if( window.scrollY >  50 ){
    nav.classList.add("navbar-sticky");
    iconContainer.innerHTML = greenIcon;
}else{
    nav.classList.remove("navbar-sticky");
    iconContainer.innerHTML = whiteIcon;
}
/*==  OnScroll ==*/
window.onscroll = function (e) {  
    if( this.scrollY >  50 ){
        nav.classList.add("navbar-sticky");
        iconContainer.innerHTML = greenIcon;
    }else{
        nav.classList.remove("navbar-sticky");
        iconContainer.innerHTML = whiteIcon;
    }
}

/*====== at click Nav Bar ======*/
var bar      = nav.querySelector(".bar");
var navLinks = nav.querySelector(".nav-links");
var links    = nav.querySelectorAll(".nav-links li");
bar.addEventListener('click', ()=>{
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    //bar Animation
    bar.classList.toggle("toggle");
    // Bar Lines Color
    nav.classList.toggle("mob-nav");
});
