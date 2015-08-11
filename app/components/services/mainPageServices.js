mercurioApp.service('mainPageService', ['$resource', '$cookies', '$http', function($resource, $cookies, $http) {
	this.urlRequest = 'http://localapi.mercurio.hn';
	var urlR = 'http://localapi.mercurio.hn'; 
	this.token = $cookies.get('token_mercuriowebsite');
	var token_website = $cookies.get('token_mercuriowebsite');
	this.getToken = function()
	{
		var url = urlR+"/accesstokenC";
            var promise = $http({
                method: 'GET',
                url: url,
                
            });
            return promise;
	}

}])