routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home.details', {
            url: 'details/:id',
            template: '<item-details></item-details>'
        });
}