app.controller('portfolioCtrl', [function(){
    var vm = this;
    // Setting the side menu to auto-show, not sure if I want toggling yet
    // $( document ).ready(function() {
    //     $("#wrapper").toggleClass("toggled");
    // });
    // $("#menu-toggle").click(function(e) {
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled");
    // });
    function showTopNavigation(state){
        console.log("called");
        vm.showTopNav = state;
    }

    $(document).ready(function() {
        if($(window).width() >= 768) {
                $("#wrapper").addClass("toggled");
                $("#topNavigation").hide();
            } else if($(window).width() < 768){
                $("#wrapper").removeClass("toggled");
                $("#topNavigation").show();
            }
        // This will fire when document is ready:
        $(window).resize(function() {
            // This will fire each time the window is resized:
            if($(window).width() >= 768) {
                $("#wrapper").addClass("toggled");
                $("#topNavigation").hide();
            } else if($(window).width() < 768){
                $("#wrapper").removeClass("toggled");
                $("#topNavigation").show();
            }
            }); // This will simulate a resize to trigger the initial run.
        });  
    }
]);