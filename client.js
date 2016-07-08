angular.module('ToDoList', []);

angular.module('ToDoList').controller('MainController', function($scope){
  $scope.message = "Add an new Task";

  $scope.taskList = [];

  $scope.haddleClick = function() {
    $scope.taskList.push($scope.message);
    // console.log('New Task: ', $scope.message);
  }

  // $scope.removeTask = function() {
  //   console.log('Remove: ', $scope.taksList[]);
  //   // $scope.taskList.splice($scope.)
  // }



})
