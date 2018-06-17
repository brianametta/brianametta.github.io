app.controller('portfolioCtrl', [function(){
    var vm = this;
    //I know I should try not to use jQuery, will update it when I have time :)
    $(document).ready(function() {
        if($(window).width() >= 768) {
            $("#wrapper").addClass("toggled");
            $("#topNavigation").hide();
        }
        else if($(window).width() < 768){
            $("#wrapper").removeClass("toggled");
            $("#topNavigation").show();
        }
        $(window).resize(function() {
            // This will fire each time the window is resized:
            if($(window).width() >= 768) {
                $("#wrapper").addClass("toggled");
                $("#topNavigation").hide();
            }
            else if($(window).width() < 768){
                $("#wrapper").removeClass("toggled");
                $("#topNavigation").show();
            }
        });
    });  
}]);