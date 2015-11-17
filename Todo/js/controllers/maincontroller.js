app.controller('myCtrl',['$scope','$element',function($scope,$element){
  $scope.todo=
  {
    title       : "",
    updateTitle : function(){
      if(event.keyCode==13 || event.type=="blur"){
        $scope.todo.title=$scope.todo.title;
        //console.log($scope.todo.title);
        }
      },
    tasks       :  [],
    update      : function(event){
      if(event.keyCode==13 || event.type=='click'){
      var a= $scope.todo.tasks.indexOf($scope.todo.task)
      if($scope.todo.task != ""){
        $scope.todo.tasks.push({text:$scope.todo.task, done:false});
        }
      $scope.todo.task='';
      }
    },
    changeCss      : function(obj){
      //console.log(obj.confirmed);
      if(obj.confirmed)
      {
        obj.myVal= 'line-through';
        obj.done=true;
      }
      else{
        obj.myVal= 'none';
        obj.done=false;
      }
    },

    remainingTasks : function(){
      var count = 0;
      angular.forEach($scope.todo.tasks, function(todo) {
      count += todo.done ? 0 : 1;
      });
      return count;
    }

  }//scope end
}]);
