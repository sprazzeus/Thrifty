angular.module('thriftyApp')
  .component('login', {
    templateUrl: 'login.template.html',
    controller: function ($http, $scope) {
      $scope.loggerIn = function() {
        var data = {
          email: $scope.loguser.email,
          password: $scope.loguser.password
        }

        $http({
          method: 'POST',
          url: 'https:thrifty-api.herokuapp.com/login',
          data: data
        })
        .success( function (data) {
          console.log(data)
          $location.path("/main")
        })
      }
    }
  })
