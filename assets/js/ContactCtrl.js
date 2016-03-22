phoneApp.controller('ContactController', ['$scope', function($scope){
  $scope.test = "contact controller on board!"

  $scope.contacts = [
    {first: 'Tori', last: 'Hedden', number: '678-901-2345', favorite: true},
    {first: 'Roshani', last: 'Patel', number: '919-265-7890', favorite: true},
    {first: 'Matthew', last: 'Horowitz', number: '770-979-1234', favorite: false},
    {first: 'Bethany', last: 'Goodfred', number: '919-222-2220', favorite: true},
    {first: 'Rob', last: 'Gooding', number: '919-123-8790', favorite: false},
    {first: 'Josh', last: 'Hedden', number: '770-213-2121', favorite: false},
    {first: 'Alison', last: 'Dudley', number: '919-333-0101', favorite: false},
    {first: 'Kim', last: 'Hedden', number: '678-123-8790', favorite: false},
    {first: 'Kathryn', last: 'Hedden', number: '770-213-0000', favorite: true},
    {first: 'Najah', last: 'Salleh', number: '919-000-5555', favorite: true},
    {first: 'Vincent', last: 'Vigil', number: '404-888-9990', favorite: false},
    {first: 'Lindsay', last: 'Caesar', number: '987-654-3210', favorite: true},
    {first: 'Ian', last: 'Rose', number: '919-123-8787', favorite: false},
    {first: 'Ameer', last: 'Armaly', number: '404-222-4343', favorite: false},
    {first: 'Carmela', last: 'Epright', number: '919-555-2300', favorite: true}
  ];

  $scope.searchResults = $(".contact-entry").length

  $scope.onSearch = function(){
    $scope.searchResults = $(".contact-entry").length;
  }



//add a new contact to the list
// $scope.newContact = function()


}]);
