$(document).ready(function(){

    $('#storybutton').hover(function(){
		$('#frontpicture1').css("opacity", "0");
		$('#frontpicture2').css("opacity", "0");
		$('#frontpicture3').css("opacity", "1");
    },
    function(){
		$('#frontpicture1').css("opacity", "1");
		$('#frontpicture2').css("opacity", "0");
		$('#frontpicture3').css("opacity", "0");
    }
    );

    $('#webbutton').hover(function(){
		$('#frontpicture1').css("opacity", "0");
		$('#frontpicture2').css("opacity", "1");
		$('#frontpicture3').css("opacity", "0");
    },
    function(){
		$('#frontpicture1').css("opacity", "1");
		$('#frontpicture2').css("opacity", "0");
		$('#frontpicture3').css("opacity", "0");
    });


    $('.nanobutton').click(function(){
        $('.panel').hide();
        var panel = $(this).parent().attr('href');
        $(panel).fadeIn();
    });


    var isVisible = false;

    $(window).scroll(function(){
        var shouldBeVisible = $(window).scrollTop()>220;
        if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $('.scrollbutton').show();
        }
        else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('.scrollbutton').hide();
        }
    });

    var isVisible2 = false;

    $(window).scroll(function(){
        var shouldBeVisible2 = $(window).scrollTop()>220;
        if (shouldBeVisible2 && !isVisible2) {
            isVisible2 = true;
            $('.longnavbar').addClass("scrollpoint");
        }
        else if (isVisible2 && !shouldBeVisible2) {
          isVisible2 = false;
          $('.longnavbar').removeClass("scrollpoint");
        }
    });

    var isVisible3 = false;

    $(window).scroll(function(){
        var shouldBeVisible3 = $(window).scrollTop()>220;
        if (shouldBeVisible3 && !isVisible3) {
            isVisible3 = true;
            $('.longnavbar2').addClass("scrollpoint2");
        }
        else if (isVisible3 && !shouldBeVisible3) {
          isVisible3 = false;
          $('.longnavbar2').removeClass("scrollpoint2");
        }
    });

    var isVisible4 = false;

    $(window).scroll(function(){
        var shouldBeVisible4 = $(window).scrollTop()>220;
        if (shouldBeVisible4 && !isVisible4) {
            isVisible4 = true;
            $('.longnavbar3').addClass("scrollpoint3");
        }
        else if (isVisible4 && !shouldBeVisible4) {
          isVisible4 = false;
          $('.longnavbar3').removeClass("scrollpoint3");
        }
    });

    setTimeout(function(){
      $(".line").addClass("grow");
      $($(".major")[1]).addClass("fadeIn");
    }, 50)

});
