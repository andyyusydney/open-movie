class SearchController implements ng.IComponentController {
    private $state: any;
    private title: string;
    private type: string;
    private year: string;
    private id: string;
    private searchBy: string;

    constructor($state: any, $stateParams: any) {
        console.log('search controller');
        console.log('$stateParams=', $stateParams);
        this.title = $stateParams.s;
        this.type = $stateParams.type;
        this.year = $stateParams.y;
        this.id = $stateParams.i;
        this.$state = $state;
        this.searchBy = 'title';
        this.type = '';
    }

    private goSearch = () => {
        this.$state.go('home.search', {s: this.title, type: this.type, y: this.year, i: this.id});
    }
}

export default SearchController;
SearchController.$inject = ['$state', '$stateParams'];