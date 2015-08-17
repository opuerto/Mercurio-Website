mercurioApp.config(['$routeProvider','$httpProvider','jwtInterceptorProvider','cfpLoadingBarProvider',function ($routeProvider,$httpProvider,jwtInterceptorProvider,cfpLoadingBarProvider) {
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
    .when('/reset/password', {
        templateUrl: 'app/templates/routeTemplates/resetPassword.html',
        controller: 'resetPasswordController'
    }) 
     .when('/nueva/password/:code/:id', {
        templateUrl: 'app/templates/routeTemplates/cambiarPasswor.html',
        controller: 'resetPasswordController'
    })  
     .otherwise({
               redirectTo: '/'
    })
     cfpLoadingBarProvider.includeSpinner = false;
    jwtInterceptorProvider.urlParam = 'token';
      jwtInterceptorProvider.tokenGetter = function() {
        return localStorage.getItem('token');
      }
      $httpProvider.interceptors.push('jwtInterceptor');
   
    
	 
}]);