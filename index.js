$(document).ready(function() {
  var divs = $('div[id^="content-"]').hide(),
      i = 0;

      // while (i <= divs.length ) {
      //
      //       divs.eq(i).fadeIn(400)
      //                 .delay(1813)
      //                 .fadeOut(400);
      //
      //       i +=1;
      // }

  (function cycle() {

    if (i === divs.length) {
      divs.eq(0).fadeIn(400)
    }
      divs.eq(i).fadeIn(400)
                .delay(1813)
                .fadeOut(400, cycle);

      i += 1;

  })();


});
