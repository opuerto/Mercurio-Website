mercurioApp.directive('showAnuncios', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/directivesTemplates/showAnuncios.html',
        replace: true,
        scope: {
            anuncioResult: "=",
           
        }
    }
});