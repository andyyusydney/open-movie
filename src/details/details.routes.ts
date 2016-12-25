routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home.details', {
            url: 'details/:id',
            template: '<item-details previous-state="$resolve.previousState"></item-details>',
            resolve: {
                previousState: ($state: any) => {
                    var currentStateData = {
                        Name: $state.current.name,
                        Params: $state.params,
                        URL: $state.href($state.current.name, $state.params)
                    };

                    console.log("currentStateData=", currentStateData);
                    return currentStateData;
                }
            }
        });
}