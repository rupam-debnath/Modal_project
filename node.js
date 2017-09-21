$(function() {
     $('.img-popup-open').on('click', function(e)  {

           var src = $(this).attr('src');
            $('.popup-inner').children('img').attr('src',src);
            var header = $(this).attr('alt');
            $('.popup-inner').children('h2').html('<h2>'+header+'</h2>');


         $('.popup').fadeIn(300);
         e.preventDefault();
     });

     $('.btn-primary').on('click', function(e)  {

         $('.popup').css({"display":"none"});

         e.preventDefault();
     });
 });


