$(function () {
  var fldWdth = document.querySelector('.field').clientWidth - 100;
  var fldHght = document.querySelector('.field').clientHeight - 100;

  $('.ball').on('click', function () {
    var rnd = parseInt(Math.random() * 100);
    var posY = parseInt(rnd * fldHght / 100);

    if ($(this).position().left > 0) {
      $(this).animate({ left: 0 }, { queue: false, })
    } else {
      $(this).animate({ left: fldWdth }, { queue: false, })
    };

    $(this).animate({top: posY}, 
      function () {
        if (rnd > 40 && rnd < 60) {
          alert('Goooooooal!!!');
        };
      });
  });
})
