app.controller('SkillsCtrl', ['$scope', function($scope){
    $scope.skillsItems = [
        {
            name : 'C#',
            knowledgePercent : 60,
            description : 'I have basic knowledge of C# as a language and OOP principles. ' +
                'I have done several projects with it including 1 game, 1 backend, 1 teamwork project in Softuni.'
        },
        {
            name : 'Java',
            knowledgePercent : 30,
            description : 'I have basic knowledge of C# as a language and OOP principles. ' +
                'I have done several projects with it including 1 game, 1 backend, 1 teamwork project in Softuni.'
        },
        {
            name : 'JavaScript',
            knowledgePercent : 10,
            description : 'I have basic knowledge of C# as a language and OOP principles. ' +
                'I have done several projects with it including 1 game, 1 backend, 1 teamwork project in Softuni.'
        },
        {
            name : 'HTML',
            knowledgePercent : 20,
            description : 'I have basic knowledge of C# as a language and OOP principles. ' +
                'I have done several projects with it including 1 game, 1 backend, 1 teamwork project in Softuni.'
        },
        {
            name : 'CSS',
            knowledgePercent : 90,
            description : 'I have basic knowledge of C# as a language and OOP principles. ' +
                'I have done several projects with it including 1 game, 1 backend, 1 teamwork project in Softuni.'
        }
    ];

    $scope.showPopup = function (item) {
        $scope.itemInfo = item;
        $('.popup').show();
    };

    $scope.closePopup = function () {
        $('.popup').hide();
        $scope.itemInfo = null;
    };

}]);