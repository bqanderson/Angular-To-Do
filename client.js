angular.module('ToDoList', []);


angular.module('ToDoList').controller('MainController', function($scope){

  var taskList = [];

  $scope.task = "Add an new Task";
  //

  $scope.haddleClick = function() {
    taskList.push($scope.task);
  }

  $scope.taskList = taskList;

  $scope.removeThis = function(clickedTask) {
    $scope.taskList.splice(taskList.indexOf(clickedTask), 1);
  }



})
