mercurioApp.directive('niceScroll', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            function scrollbar(className, color, cursorWidth) {
                $(className).niceScroll({
                    cursorcolor: color,
                    cursorborder: 0,
                    cursorborderradius: 0,
                    cursorwidth: cursorWidth,
                    bouncescroll: true,
                    mousescrollstep: 100
                });
            }
            //Scrollbar for HTML(not mobile) but not for login page
            if (!$('html').hasClass('ismobile')) {
                if (!$('.login-content')[0]) {
                    scrollbar('html', 'rgba(0,0,0,0.3)', '5px');
                }
                //Scrollbar Tables
                if ($('.table-responsive')[0]) {
                    scrollbar('.table-responsive', 'rgba(0,0,0,0.5)', '5px');
                }
                //Scrill bar for Chosen
                if ($('.chosen-results')[0]) {
                    scrollbar('.chosen-results', 'rgba(0,0,0,0.5)', '5px');
                }
                //Scroll bar for tabs
                if ($('.tab-nav')[0]) {
                    scrollbar('.tab-nav', 'rgba(0,0,0,0)', '1px');
                }
                //Scroll bar for dropdowm-menu
                if ($('.dropdown-menu .c-overflow')[0]) {
                    scrollbar('.dropdown-menu .c-overflow', 'rgba(0,0,0,0.5)', '0px');
                }
                //Scrollbar for rest
                if ($('.c-overflow')[0]) {
                    scrollbar('.c-overflow', 'rgba(0,0,0,0.5)', '5px');
                }
                //Scrollbar for rest
                if ($('#profile-main')[0]) {
                    scrollbar('#profile-main', 'rgba(0,0,0,0.5)', '5px');
                }
                 //Scroll bar for dropdowm-menu
                 if ($('.si-inner .c-overflow')[0]) {
                    scrollbar('.si-inner .c-overflow', 'rgba(0,0,0,0.5)', '5px');
                }
    
        
                
            }
        },
    }
});