mercurioApp.directive('promotion', function() {
    return {
        restrict: 'EA',
        
        link: function(scope, element, attrs) {
           $('#Modalpromo').modal('show').addClass('fat');  
           codigo = Math.random();
       		 stringCodigo = codigo.toString();
            codigoPromocion = stringCodigo.substring(2, 7);
            $('#promoCode').text("Tu codigo de promoción es: "+ codigoPromocion);

        },
    }
});
