$(document).ready(function() {
   
    $('header h1').hide().fadeIn(2000);
    
    $('nav ul li a').hover(
        function() {
            $(this).css('color', '#ff6347');
        }, 
        function() {
            $(this).css('color', 'white');
        }
    );
});
