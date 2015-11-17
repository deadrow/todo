app.directive('hello',function(){
  var directive= {};
  directive.restrict ='E';
  directive.transclude=true;
  directive.scope={};
  directive.templateUrl = 'js/directives/infohtml.html';
  directive.link=function($scope,element,attr){
    $scope.name='ankit';
  }
  return directive;
});
