mercurioApp.factory('authInterceptor',['$rootScope','$q','$window','$localStorage', function ($rootScope, $q, $window,$localStorage) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($localStorage.token) {
        config.headers.Authorization = 'Bearer ' + $localStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
        alert("no autorizado");
      }
      return response || $q.when(response);
    }
  };
}]);
