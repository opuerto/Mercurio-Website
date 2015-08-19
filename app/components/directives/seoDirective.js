mercurioApp.directive('setSeo', function($document) {
    return {
        restrict: 'EA',
        
        link: function(scope, element, attrs) {
           	var title = attrs.title;
           	$document[0].title = title;
           	
           	var metakeywords = attrs.metakeywords;
           	var metadescrip = attrs.metadescrip;
           	//meta keywords
           	var new_meta_keywords = $document[0].createElement('meta');
           	new_meta_keywords.name = 'keywords';
           	new_meta_keywords.content = metakeywords;
           	$document[0].getElementsByTagName('head')[0].appendChild(new_meta_keywords);
           	//meta description
           	var new_meta_description = $document[0].createElement('meta');
           	new_meta_description.name = 'description';
           	new_meta_description.content = metadescrip;
           	$document[0].getElementsByTagName('head')[0].appendChild(new_meta_description);
        },
    }
});
