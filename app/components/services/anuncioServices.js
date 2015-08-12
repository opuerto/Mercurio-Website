mercurioApp.service('anuncioService', ['$resource', '$cookies', '$http','mainPageService', function($resource, $cookies, $http, mainPageService) {

	var url_request = mainPageService.urlRequest;
	var token = mainPageService.token;
	this.getTodosLosAnuncios = function()
	{
		if (token) {
            var url = url_request+"/api/v0.1/anuncio/todoslosanuncios";
            var promise = $http({
                method: 'GET',
                url: url,
                params: {
                    access_token: token
                }
            });
            return promise;
        };
	}
    this.getAnuncioByID = function(anuncioId,empresaId)
    {
         if (token) {
            var url = url_request+"/api/v0.1/anuncio/empresas/" + empresaId + "/anuncios/" + anuncioId;
            var promise = $http({
                method: 'GET',
                url: url,
                params: {
                    access_token: token
                }
            });
            return promise;
        };
    }

    this.getEmpresaNombre = function(id)
    {
        if (token) {
            var url = url_request+"/api/v0.1/empresa/getNombreEmpresa/" + id;
            var promise = $http({
                method: 'GET',
                url: url,
                params: {
                    access_token: token
                }
            });
            return promise;
        };
    }

    this.getAdminAnuncioById = function(id)
    {
        if (token) {
            var url = url_request+"/api/v0.1/anuncio/adminanunciobyid/" + id;
            var promise = $http({
                method: 'GET',
                url: url,
                params: {
                    access_token: token
                }
            });
            return promise;
        }    
    }


}]);