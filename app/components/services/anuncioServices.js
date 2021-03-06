mercurioApp.service('anuncioService', ['$resource', '$cookies', '$http','mainPageService', function($resource, $cookies, $http, mainPageService) {

	var url_request = mainPageService.urlRequest;
	var token = mainPageService.token;
	this.getTodosLosAnuncios = function(lastpage)
	{
		if (token) {
            var url = url_request+"/api/v0.1/anuncio/todoslosanuncios/"+lastpage;
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
    this.getAnuncioByCategoria = function(id,page)
    {
        if (token) {
            var url = url_request+"/api/v0.1/anuncio/anunciosbycategoria/"+id+"/"+page;
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

    this.getAnuncioByDepartamento = function(id,page)
    {
        if (token) {
            var url = url_request+"/api/v0.1/anuncio/anunciosbydepartamento/"+id+"/"+page;
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
                skipAuthorization: true,
                params: {
                    access_token: token
                }
            });
            return promise;
        }    
    }
    this.getDepartamentos = function()
    {
        if (token) {
            var url = url_request+"/api/v0.1/departamento/departamentosconanuncios";
            var promise = $http({
                method: 'GET',
                url: url,
                skipAuthorization: true,
                params: {
                    access_token: token
                }
            });
            return promise;
        }       
    }
    this.getCategorias = function()
    {
        if (token) {
            var url = url_request+"/api/v0.1/categoria/categoriaconanuncios";
            var promise = $http({
                method: 'GET',
                url: url,
                skipAuthorization: true,
                params: {
                    access_token: token
                }
            });
            return promise;
        }       
    }

    this.sumarAnunciosMostrados = function()
    {
         if (token) {
            var url = url_request+"/api/v0.1/anuncio/sumarimpresiones";
            var promise = $http({
                method: 'GET',
                url: url,
                skipAuthorization: true,
                params: {
                    access_token: token
                }
            });
            return promise;
        }           
    }

    this.sumarClick = function(id)
    {
        if (token) {
            var url = url_request+"/api/v0.1/anuncio/sumarclicks/"+id;
            var promise = $http({
                method: 'GET',
                url: url,
                skipAuthorization: true,
                params: {
                    access_token: token
                }
            });
            return promise;
        }           
    }


}]);