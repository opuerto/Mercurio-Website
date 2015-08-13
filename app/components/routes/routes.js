mercurioApp.config(function ($routeProvider) {
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

	 
});