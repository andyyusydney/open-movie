import {ISearchService} from './search.service';

class SearchController implements ng.IComponentController {
    private searchService: ISearchService;
    private searchResults: Array<any>;
    private displaySearchResults: boolean;

    constructor(searchService: ISearchService) {
        console.log('search controller');
        this.searchService = searchService;
        this.searchService.searchByName('Batman').then((results:any) => {
            console.log('results=', results);
            this.searchResults = results.data.Search;
            this.displaySearchResults = true;
        });
    }
}

export default SearchController;
SearchController.$inject = ['searchService'];
