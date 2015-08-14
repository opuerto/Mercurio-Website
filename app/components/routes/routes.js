mercurioApp.config(['$routeProvider','$httpProvider','jwtInterceptorProvider',function ($routeProvider,$httpProvider,jwtInterceptorProvider) {
	$routeProvider
	  .when('/', {
        templateUrl: 'app/templates/routeTemplates/paginaInicio.html',
        controller: 'paginaInicioController'
    })
	.when('/ver/anuncio/:id/:tipoAnuncio', {
        templateUrl: 'app/templates/routeTemplates/verAnuncios.html',
        controller: 'verAnuncioController'
    })  
    .when('/ver/anuncio/:id/:tipoAnuncio/:empresaId', {
        templateUrl: 'app/templates/routeTemplates/verAnuncios.html',
        controller: 'verAnuncioController'
    })  
    .when('/registrate', {
        templateUrl: 'app/templates/routeTemplates/registrate.html',
        controller: 'registraController'
    })  
     .otherwise({
               redirectTo: '/'
    })
    jwtInterceptorProvider.urlParam = 'token';
      jwtInterceptorProvider.tokenGetter = function() {
        return localStorage.getItem('token');
      }
      $httpProvider.interceptors.push('jwtInterceptor');
   
    
	 
}]);