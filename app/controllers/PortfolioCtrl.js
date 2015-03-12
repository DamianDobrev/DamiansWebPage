app.controller('PortfolioCtrl', ['$scope', function($scope){
    $scope.categories = [
        'All',
        'Uni Projects',
        'Web',
        'Games',
        'Others'
    ];
    $scope.currentCategoryIndex = 0;

    $scope.clickCat = function ($index) {
        $scope.currentCategoryIndex = $index;
    };

    $scope.prtItems = [
        {
            title : 'Title of one item',
            description : 'This is a description of my new site, it is quite cool and it is done in Java, C#, Ruby and some other languages.',
            categoryIndex : 1,
            pictureUrl : 'images/portfolioImages/pic1.png',
            destinationUrl : 'https://www.example.com',
            githubUrl : 'https://www.github.com/DamianDobrev'
        },
        {
            title : 'I LOVE ME',
            description : 'I am GROOT',
            categoryIndex : 1,
            pictureUrl : 'images/portfolioImages/pic2.jpg',
            destinationUrl : 'https://www.example.com',
            githubUrl : 'https://www.github.com/DamianDobrev'
        },
        {
            title : 'I LOVE ME',
            description : 'I am GROOT',
            categoryIndex : 2,
            pictureUrl : 'images/portfolioImages/pic1.png',
            destinationUrl : 'https://www.example.com',
            githubUrl : 'https://www.github.com/DamianDobrev'
        },
        {
            title : 'A REEAAAAALLLLYYY LONG TITLE RIGHT HERE GUYS',
            description : 'Some programming isnt bad',
            categoryIndex : 3,
            pictureUrl : 'images/portfolioImages/pic3.jpg',
            destinationUrl : 'https://www.example.com',
            githubUrl : 'https://www.github.com/DamianDobrev'
        },
        {
            title : 'Smth Else',
            description : 'I have experience in following technologies: .',
            categoryIndex : 4,
            pictureUrl : 'images/portfolioImages/pic2.jpg',
            destinationUrl : 'https://www.example.com',
            githubUrl : 'https://www.github.com/DamianDobrev'
        }
    ];

    $scope.filterItems = function (item) {
        return item.categoryIndex == $scope.currentCategoryIndex || $scope.currentCategoryIndex == 0;
    };
    
    $scope.showPopup = function (item) {
        $scope.itemInfo = item;
        $scope.itemInfo.categoryText = (function () {
            return $scope.categories[$scope.itemInfo.categoryIndex];
        })();
        $('.popup').show();
    };

    $scope.closePopup = function () {
        $('.popup').hide();
        $scope.itemInfo = null;
    }
    
}]);