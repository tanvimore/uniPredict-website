
$(document).ready(function(){
    
    $('[href="https://www.google.com"]').on('click',function(event){
        console.log("linking to google?");
        //event.preventDefault(); //prevents default process
        //return false; //prevents default process
        return true; //lets default process run
    });

    $(document).on('contextmenu', function(){
        return false;
    });
    
    $(document).on('mousedown',function(event){
        event.preventDefault();

        switch(event.which){  //switch
            case 1:           //if parameter==1
                console.log("left");
                break;
            case 2:
                console.log("middle");
                break;
            case 3:
                console.log("right");
                break;    
        };

        if (event.which==3) {

            console.log(event.pageY, event.pageX); //returns the position of mouse as (y x)
            
            $('#context').css({
                top: event.pageY,
                left: event.pageX
            });

            $('.context-menu.hidden').removeClass('show');
            if ($(event.target).is('img')) {
                $('.saveimg', '.newtab').addClass('show');
            }else if ($(event.target).is('a')) {
                $('.newtab').addClass('show');
            }

            $('#context').fadeIn();
            return false;
        };
        
        $('#context').fadeOut();

        console.log(event.which); //returns which mouse button is pressed.
        //1=left, 2=center, 3=right
    })
    
    $('[data-trigger="dropdown"]').on('mouseenter',function() {
        var submenu = $(this).parent().find('.submenu');
        //submenu.addClass('active');
        submenu.fadeIn(300);

        $('.profile-menu').on('mouseleave',function(){
            $(this).find('.submenu').removeClass('active');
            submenu.fadeOut(300);
        });
    });
    
    $('#append, #prepend, #replace').on('click',function(e){
        e.preventDefault(); //prevents default action and helps to run what we want to specify
        var el=$(e.currentTarget); //which button is clicked
        var action = el.attr('id');
        var content = $('.text1').val()

        if (action=='append') {
            console.log("Appending");
            $('#main').append(content);
        }else if (action=='prepend') {
            console.log("Prepending");
            $('#main').prepend(content);
        }else if (action=='replace') {
            console.log("Replacing");
            $('#main').html(content);
        }

        $('.text1').val(''); //to clear the textbox

    })
})
