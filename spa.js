angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'christ/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'christ/home.html',
            controller:'homectrl'
    }).when('/course',
    {
        templateUrl:'christ/course.html',
        controller:'coursectrl'
    }).when('/student',
    {
        templateUrl:'christ/student.html',
        controller:'studentctrl'
    })
})
.controller('myctrl',function()
{

})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Welcome to Christ University!"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller("coursectrl",function($scope)
{
   $scope.courses=["MCA","MSC","MBA","BCA","BCom","BBA"]; 
})
.controller("studentctrl",function($scope,$http)
{
    $http.get('https://sandra-1223.github.io/LAB-9/student.json') 
    .success(function(response)
    {
        $scope.students=response.records;
    });
});
