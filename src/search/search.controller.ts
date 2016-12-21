import {ISearchService} from './search.service';

class SearchController implements ng.IComponentController {
    private searchService: ISearchService;
    private searchResults: Array<any>;
    private sortType: string;
    private sortReverse: Boolean;

    constructor(searchService: ISearchService) {
        console.log('search controller');
        this.searchService = searchService;
        this.searchService.searchByName('Batman').then((results:any) => {
            console.log('results=', results);
            this.searchResults = results.data.Search;
        });
    }

    private sort(fieldName) {
        console.log('sort called!');
        if (this.sortType !== fieldName) {
            this.sortType = fieldName;
            this.sortReverse = true;
        } else {
            this.sortReverse = !this.sortReverse;
        }
    }
}

export default SearchController;
SearchController.$inject = ['searchService'];
