mercurioApp.controller('verAnuncioController', ['$cookies', '$scope', '$location', '$http', '$timeout', '$resource', '$log', '$routeParams', '$anchorScroll', '$sce', 'mainPageService', 'anuncioService',
    function($cookies, $scope, $location, $http, $timeout, $resource, $log, $routeParams, $anchorScroll, $sce, mainPageService, anuncioService) {
        $anchorScroll();
        $scope.anuncio = {};
        $scope.tipoAnuncio = $routeParams.tipoAnuncio;
        $scope.empresaId = $routeParams.empresaId;
        if ($scope.tipoAnuncio === 'empresa') {
            if ($routeParams.id && $scope.empresaId) {
                anuncioService.getEmpresaNombre($scope.empresaId).success(function(data) {
                    $scope.anuncio.nombreEmpresa = data.nombre;
                }).error(function(data,status) {
                    $log.log(status);
                    if (data.error == "access_denied" || status === 500) {
                        $http.get('/accesstokenC').success(function(result) {
                            // Setting a cookie
                            time = new Date(1451606400 * 1000);
                            if (!result.mensaje) {
                                $cookies.put('token_mercuriowebsite', result.access_token, {
                                    'expires': time
                                });
                                location.reload();
                            } else {
                                window.location = "http://mercurio.hn";
                            }
                        }).error(function() {
                            window.location = "http://mercurio.hn"
                        })
                    };
                })
                anuncioService.getAnuncioByID($routeParams.id, $scope.empresaId).success(function(data) {
                    //asignar la data para la propiedad anunciByIdResult (Ver anuncio)
                    $scope.anuncio.anuncioByIdResult = data.datos;
                    $log.log($scope.anuncio.anuncioByIdResult);
                }).
                error(function(data) {})
            };
        } else if ($scope.tipoAnuncio === 'admin') {
            if ($routeParams.id) {
                anuncioService.getAdminAnuncioById($routeParams.id).success(function(data) {
                    $scope.anuncio.nombreEmpresa = data.anuncio.nombre_empresa;
                    $scope.anuncio.anuncioByIdResult = data.anuncio;
                    $log.log($scope.anuncio.anuncioByIdResult);
                })
            };
        }
        $scope.showDescripcionHtml = function(html) {
            return $sce.trustAsHtml(html);
        }
    }
]);