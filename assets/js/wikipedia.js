document.addEventListener("DOMContentLoaded", function(){

    document.querySelector('#menu-clicker').addEventListener('click', function(e){
        document.querySelector('header').styl
    });


});


var toggleClass = (function(selector, classname){

    let element = document.querySelector(selector);
    return element.classList.toggle(classname);

});