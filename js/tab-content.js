$(document).ready(function(){

    $('ul.nav-tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.nav-tabs li').removeClass('active');
        $('.tab-content').removeClass('current');

        $(this).addClass('active');
        $("#"+tab_id).addClass('current');
    })

})