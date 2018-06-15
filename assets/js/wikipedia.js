
document.addEventListener("DOMContentLoaded", function(){


    var headerElement = document.querySelector('header');

    var headerHeight = headerElement.offsetHeight;
    headerElement.style.maxHeight = headerHeight + 'px';
    headerElement.classList.toggle('hidden');

    document.querySelector('#menu-clicker').addEventListener('click', function(e){
        document.querySelector('header').classList.toggle('hidden');
    });


    document.querySelectorAll('.dropdown').addEventListener('click', function(e){
        console.log(this);
        this.nextElementSibling.classList.toggle('hidden');
    });


});