mercurioApp.directive('onTextoAnuncioMuyLargo', function($window) {
    return {
        restrict: 'EA',
        scope: {
            anuncioResult: "=",
            anuncioNumero: "=",
            
        },
        link: function(scope, element, attrs) {
            var cuantos_anuncios = scope.anuncioNumero;
            if (cuantos_anuncios > 3) {
                var titulo = scope.anuncioResult.titulo;
                var telefono = scope.anuncioResult.telefono;
                var email = scope.anuncioResult.email;
                var nombreEmpresa = scope.anuncioResult.nombreEmpresa;
                if (titulo.length > 60) {
                    scope.anuncioResult.titulo = titulo.substr(0, 40) + "...";
                };
                if (telefono) {
                    if (telefono.length > 12) {
                        scope.anuncioResult.telefono = telefono.substr(0, 9) + "...";
                    };
                };
                if (email) {
                    if (email.length > 20) {
                        scope.anuncioResult.email = email.substr(0, 17) + "...";
                    };
                };
                if (nombreEmpresa.length > 30) {
                    scope.anuncioResult.nombreEmpresa = nombreEmpresa.substr(0, 30) + "...";
                };
            };
            /* angular.element($window).on('resize', function(e) {
        
          });*/
        },
    }
});