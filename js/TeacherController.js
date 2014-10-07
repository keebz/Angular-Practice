studentRoster.controller('TeachersCtrl', function TeachersCtrl($scope){
  $scope.teachers = [];
  $scope.addTeacher = function() {
    $scope.teachers.push({"name": $scope.teacherName});
    $scope.teacherName = null
  };
});
