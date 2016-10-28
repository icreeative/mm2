$(window).on("scroll", function(e){
    if($(this).scrollTop() > 40){
        $("#main-header").addClass('navbar-fixed-top');
        $('body').addClass('body-padding');
    } else {
        $('#main-header').removeClass('navbar-fixed-top');
        $('body').removeClass('body-padding');
    }
})

 $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');             
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');          
            });
    });
    