$(document).ready(function(){
	$('#menu-show').click(function() {
		if($(this).hasClass('clicked')){
			$('#menu').slideUp();
			$(this).removeClass('clicked');
		}
		else{
			$('#menu').slideDown();
			$(this).addClass('clicked');
		}
	});
});


$(document).ready(function() {

    $('.button').click(function(){
        $('.button').removeClass('active');
        $('.panel').hide();
        var panel=$(this).parent().attr('href');
        $(panel).fadeIn();
        $(this).addClass('active');
    });
    
    $('.button:first').click();
    
});