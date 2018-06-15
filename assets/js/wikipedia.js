
document.addEventListener("DOMContentLoaded", function(){


    var headerElement = document.querySelector('header');

    var headerHeight = headerElement.offsetHeight;
    headerElement.style.maxHeight = headerHeight + 'px';
    headerElement.classList.toggle('hidden');

    document.querySelector('#menu-clicker').addEventListener('click', function(e){
        document.querySelector('header').classList.toggle('hidden');
    });


    let dropdownSpan =  document.querySelectorAll('.dropdown');



    dropdownSpan.forEach(function(e) {
        e.addEventListener('click', function(e){
            console.log(this);
            this.nextElementSibling.classList.toggle('hidden');
        
        });


    });

    let play = document.querySelector('#play-button');
    play.addEventListener('click', function() {
       let audio = document.querySelector('#audio');

       if (audio.paused) {
           audio.play();
       } else {
           audio.pause();
           audio.currentTime = 0;
       }
    });

});