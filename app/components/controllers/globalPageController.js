mercurioApp.controller('globalPage', ['$cookies', '$scope', '$location', 
    '$http', '$timeout', '$resource', '$log', '$routeParams', 
    '$anchorScroll', '$sce', 'mainPageService', 'anuncioService',
    function($cookies, $scope, $location, $http, $timeout, 
        $resource, $log, $routeParams, $anchorScroll, $sce, 
        mainPageService, anuncioService) {
        $anchorScroll();
        $scope.credentials = {}
        $scope.credentials.email;
        $scope.credentials.password;
        $scope.credentials.recordarme = {
            value1: 'NO'
        }
        $scope.errores = "";

       

    
            anuncioService.getDepartamentos().success(function(data) {
                $scope.departamentos = data.datos;
                $log.log($scope.departamenos);
            }).error(function(data) {})

            anuncioService.getCategorias().success(function(data) {
                $scope.categorias = data.datos;
                $log.log($scope.categorias);
            }).error(function(data) {})



        $scope.login = function() {
            data = {
                email: $scope.credentials.email,
                password: $scope.credentials.password,
            }
            mainPageService.getJwtToken(data).success(function(data) {
                localStorage.setItem('token', data.token);
                //redirecciono con el token 
                if ($scope.credentials.recordarme.value1 === 'SI') {
                    window.location = "http://localapi.mercurio.hn/aplicacion/remember?token=" + localStorage.getItem('token');
                } else {
                    window.location = "http://localapi.mercurio.hn/aplicacion?token=" + localStorage.getItem('token');
                }
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