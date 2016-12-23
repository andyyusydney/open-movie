routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home.list', {
            url: 'list',
            template: '<list></list>',
            params: {
                listData: null
            }
        });
}