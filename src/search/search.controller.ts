class SearchController implements ng.IComponentController {
    private $state: any;
    private title: string;
    private type: string;
    private year: string;
    private id: string;

    constructor($state) {
        console.log('search controller');
        this.$state = $state;
    }

    private goSearch = () => {
        this.$state.go('home.search', {s: this.title, type: this.type, y: this.year, i: this.id});
    }
}

export default SearchController;
SearchController.$inject = ['$state'];