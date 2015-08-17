mercurioApp.directive('showCambiarPassTemp', function() {
    return {
        restrict: 'EA',
        
        link: function(scope, element, attrs) {
            $('#body-index').addClass('login-content'); 
            $('#header').css('display','none');
            $('#conteiner-pages').css('min-height','600px');
        },
    }
});
