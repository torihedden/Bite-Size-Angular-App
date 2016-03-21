phoneApp.controller('ContactController', ['$scope', function($scope){
  $scope.test = "contact controller on board!"

  $scope.contacts = [
    {first: 'Tori', last: 'Hedden', number: '678-901-2345'},
    {first: 'Roshani', last: 'Patel', number: '919-265-7890'},
    {first: 'Matthew', last: 'Horowitz', number: '770-979-1234'},
    {first: 'Bethany', last: 'Goodfred', number: '919-222-2220'},
    {first: 'Rob', last: 'Gooding', number: '919-123-8790'}
  ];

}]);
