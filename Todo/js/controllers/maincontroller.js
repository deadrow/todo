app.controller('myCtrl',['$scope','$element',function($scope,$element){
    $scope.todo={};
  //$scope.todo.tasks=[];  
    $scope.todo=
  {
    title       : "",
    updateTitle : function(){
      if(event.keyCode==13 || event.type=="blur"){
        $scope.todo.title=$scope.todo.title;
        //console.log($scope.todo.title);
        }
      },
    tasks   : (localStorage.getItem('todo')!=null)? JSON.parse(localStorage.getItem('todo')): [],
    update  :   function(event){
      if(event.keyCode==13 || event.type=='click'){
      //var a= $scope.todo.tasks.indexOf($scope.todo.task);
      if(!!$scope.todo.task && $scope.todo.task!='undefined'){
        $scope.todo.tasks.push({text:$scope.todo.task, done:false});
        }
      $scope.todo.task='';
        //localStorage.clear();
      localStorage.setItem('todo',JSON.stringify($scope.todo.tasks));

      }
    },
    changeCss   :   function(obj){
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
      var index= $scope.todo.tasks.indexOf(obj);
      if(index!=-1)  $scope.todo.tasks[index].done=obj.done;
        localStorage.setItem('todo',JSON.stringify($scope.todo.tasks));
    },

    remainingTasks : function(){
      var count = 0;
      angular.forEach($scope.todo.tasks, function(todo) {
      count += todo.done ? 0 : 1;
      });
      return count;
    },
    remove  :   function(){
      // angular.forEach($scope.todo.tasks, function(todoVar) {
      //   if(todoVar.done)
      //   {
      //     var index=$scope.todo.tasks.indexOf(todoVar);
      //     $scope.todo.tasks.splice(index,1);
      //   }
      // });
      for (var i = $scope.todo.tasks.length - 1; i >= 0; i--) {
        if($scope.todo.tasks[i].done)
        $scope.todo.tasks.splice(i,1);
        }
      if(!$scope.todo.tasks.length)
        localStorage.clear();
      else
      localStorage.setItem('todo',JSON.stringify($scope.todo.tasks));
    } 

  }//scope end
}]);
