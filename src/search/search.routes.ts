routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('search', {
            url: '/',
            template: '<search></search>'
        });
}