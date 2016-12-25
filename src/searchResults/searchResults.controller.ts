import {ISearchService} from '../services/search.service';

class SearchResultsController implements ng.IComponentController {
    private displaySearchResults: boolean;
    private searchService: ISearchService;
    private searchResults: Array<any>;
    private title: string;
    private type: string;
    private year: string;
    private id: string;
    private $state: any;

    constructor($stateParams: any, searchService: ISearchService, $state: any) {
        console.log('search results controller');
        console.log("$stateParams=", $stateParams);
        this.$state = $state;
        this.searchService = searchService;

        this.title = $stateParams.s;
        this.type = $stateParams.type;
        this.year = $stateParams.y;
        this.id = $stateParams.i;
        
        this.displaySearchResults = false;

        this.search();
    }

    private search = () => {
        console.log("this.title=%s, this.type=%s, this.year=%s, this.id=%s", this.title, this.type, this.year, this.id);
        if (this.id) {
            this.searchService.searchByIMDbID(this.id).then((results:any) => {
                console.log('results=', results);
                this.searchResults = [results.data];
                this.displaySearchResults = true;
            });
        } else {
            this.searchService.searchByTitle({
                s: this.title,
                type: this.type,
                y: this.year
            }).then((results:any) => {
                console.log('results=', results);
                this.searchResults = results.data.Search;
                //this.$state.go('home.list', {listData: this.searchResults});
                this.displaySearchResults = true;
            });
        }
    };
}

export default SearchResultsController;
SearchResultsController.$inject = ['$stateParams', 'searchService', '$state'];
