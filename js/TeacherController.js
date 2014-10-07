studentRoster.controller('TeachersCtrl', function TeachersCtrl($scope){
  $scope.teachers = [];
  $scope.addTeacher = function() {
    $scope.teachers.push({"name": $scope.teacherName});
    $scope.teacherName = null
  };
  $scope.deleteTeacher = function(teacher) {
    var index = $scope.teachers.indexOf(teacher);
    $scope.teachers.splice(index, 1);
  };
});
