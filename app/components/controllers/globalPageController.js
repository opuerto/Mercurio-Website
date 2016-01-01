mercurioApp.controller('globalPage', ['$cookies', '$scope', '$location', '$http', '$timeout', '$resource', '$log', '$routeParams', '$anchorScroll', '$sce', 'mainPageService', 'anuncioService',
    function($cookies, $scope, $location, $http, $timeout, $resource, $log, $routeParams, $anchorScroll, $sce, mainPageService, anuncioService) {
        $anchorScroll();
        $scope.credentials = {}
        $scope.credentials.email;
        $scope.credentials.password;
        $scope.credentials.recordarme = {
            value1: 'NO'
        }
        $scope.errores = "";
        var token = mainPageService.token;
        if (!token) {
            mainPageService.getToken().success(function(data) {
                // Setting a cookie
                time = new Date(1451606400 * 1000);
                //si no hay errores al solicitar el cookie
                //guardamos una nueva cookie 
                //usando localStorage en lugar de cookies para guardar los tokens 
                localStorage.setItem('token_mercuriowebsite', data.access_token);
                /*$cookies.put('token_mercuriowebsite', data.access_token, {
                    'expires': time
                });*/
                location.reload();
            }).error(function(data) {
                if (data.error == "access_denied") {
                     localStorage.setItem('token_mercuriowebsite', data.access_token);
                    // Setting a cookie
                    time = new Date(1451606400 * 1000);
                    //si no hay errores al solicitar el cookie
                    //guardamos una nueva cookie 
                   /* $cookies.put('token_mercuriowebsite', data.access_token, {
                        'expires': time
                    });*/
                    location.reload();
                };
            })
        };
     
            anuncioService.getDepartamentos().success(function(data) {
                $scope.departamentos = data.datos;
            }).error(function(data) {})
            anuncioService.getCategorias().success(function(data) {
                $scope.categorias = data.datos;
            }).error(function(data) {})
       
        $scope.login = function() {
            data = {
                email: $scope.credentials.email,
                password: $scope.credentials.password,
            }
            mainPageService.getJwtToken(data).success(function(data) {
                localStorage.setItem('token', data.token);
                //redirecciono con el token
                /*if ($scope.credentials.recordarme.value1 === 'SI') {
                    window.location = "http://app.mercurio.hn/aplicacion/remember?token=" + localStorage.getItem('token');
                } else {
                    window.location = "http://app.mercurio.hn/aplicacion?token=" + localStorage.getItem('token');
                }*/
                window.location = "http://app.mercurio.hn/aplicacion/remember?token=" + localStorage.getItem('token');
            }).error(function(data) {
                $.growl({
                    message: data.mensaje,
                }, {
                    type: 'info',
                    allow_dismiss: false,
                    label: 'Cancel',
                    className: 'btn-xs btn-inverse',
                    placement: {
                        from: 'top',
                        align: 'right'
                    },
                    delay: 2500,
                    animate: {
                        enter: 'animated bounceIn',
                        exit: 'animated bounceOut'
                    },
                    offset: {
                        x: 20,
                        y: 85
                    }
                });
            })
        }
    }
]);