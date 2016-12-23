import {ISearchService} from './search.service';

class SearchController implements ng.IComponentController {
    private searchService: ISearchService;
    private searchResults: Array<any>;
    //private displaySearchResults: boolean;
    private title: string;
    private type: string;
    private year: string;
    private id: string;
    private $state: any;

    constructor(searchService: ISearchService, $state) {
        console.log('search controller');
        this.$state = $state;
        this.searchService = searchService;
        //this.displaySearchResults = false;
    }

    private search = () => {
        console.log("this.title=%s, this.type=%s, this.year=%s, this.id=%s", this.title, this.type, this.year, this.id);
        if (this.id) {
            this.searchService.searchByIMDbID(this.id).then((results:any) => {
                console.log('results=', results);
                this.searchResults = [results.data];
                //this.displaySearchResults = true;
            });
        } else {
            this.searchService.searchByTitle({
                s: this.title,
                type: this.type,
                y: this.year
            }).then((results:any) => {
                console.log('results=', results);
                this.searchResults = results.data.Search;
                this.$state.go('home.list', {listData: this.searchResults});
                //this.displaySearchResults = true;
            });
        }
    };
}

export default SearchController;
SearchController.$inject = ['searchService', '$state'];
