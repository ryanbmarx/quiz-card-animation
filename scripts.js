// File: script.js
// Storytelling Studio

// Global vars
var speedSnail = 900
    speedSlow = 450,
    speedMedium = 225,
    speedFast = 112.5,
    countAnim = $('#card-counter'),
    button2 = document.querySelector('.button2'),
	  cardCounter = document.querySelector('.card-counter'),
	  pulse = document.querySelector('.pulse'),
    cardSlide = document.querySelector('.card-slide');


// Load init when document is ready
$(document).ready(function() {
	init();
});

// init and set it off
function init() {
  // cardCounter();
  animin1();
}

button2.addEventListener( 'click', function() {
  cardSlide.classList.toggle('is-anim');
  cardCounter.classList.toggle('is-anim');
  pulse.classList.toggle('is-anim');
});

function cardCounter() {
    var interval = setInterval(function() {
        // $('.pulse').addClass('pulse-anim');
        var counter = parseInt($('#card-counter').html());

        $('#card-counter').html(++counter);

        /* if(counter < 30) {
          counterAnim();
        } */

        if(counter == 30) {
           clearInterval(interval);
           countAnim.clearQueue().finish();
        }

    }, 1012.5);
}

function counterAnim() {
  countAnim
    .animate({'margin-top' : '0', 'opacity' : '1'}, speedSnail, 'easeInQuad')
    .animate({'margin-top' : '-10px', 'opacity' : '0'}, 0, function() {
      counterAnim();
    })
}

function animin1() {
  $('.answer-top').animate({'width' : '100%'}, speedMedium, 'easeInQuad');
  $('.answer-top').animate({'height' : '50%'}, speedMedium, 'easeInQuad', function() {
    animin2();
  });
}

function animin2() {
  $('.circle-back').animate({'width' : '300px', 'height' : '300px', 'opacity' : '1'}, speedMedium, 'easeOutQuad');
  $('.circle-front').delay(speedFast).animate({'width' : '175px', 'height' : '175px'}, speedMedium, 'easeOutQuad', function() {
    animin3();
  });
}

function animin3() {
  $('.thumb-icon').animate({'opacity' : '1', 'transform' : 'scale(1)'}, speedMedium, 'easeOutBack', function() {
    animin4();
  });
}

function animin4() {
  $('.answer-hide1').delay(speedMedium).animate({'opacity' : '1'}, speedSlow, 'easeOutQuad', function() {
    animin5();
  });
}

function animin5() {
  $('.answer-hide2').delay(speedMedium).animate({'bottom' : '40px', 'opacity' : '1'}, speedSlow, 'easeOutQuad');
}
