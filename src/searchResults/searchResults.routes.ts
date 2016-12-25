routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home.search', {
            url: 'search?s&type&y&i',
            template: '<search-results></search-results>'
        });
}