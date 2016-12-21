import angular = require('angular');

type MovieTypes = {
    MOVIE: 'movie',
    SERIES: 'series',
    EPISODE: 'episode'
}

interface ISearchService {
    searchByName(name:string): ng.IPromise<any>;
    searchByType(type:MovieTypes): ng.IPromise<any>;
    searchByYear(year:string): ng.IPromise<any>;
    searchByIMDbID(id:string): ng.IPromise<any>;
}

class SearchService implements ISearchService {
    private $http: ng.IHttpService;
    readonly apiKey = 'a4becd26'; // TODO: apiKey should not keep at frontend. Does search api need apiKey?

    constructor($http: ng.IHttpService) {
        this.$http = $http;
    }

    private search = (searchParams:any): ng.IPromise<any> => {
        let query = '';

        if (searchParams.s) { // search by title
            if (query) query += '&';
            query += 's=' + searchParams.s;
        }

        if (searchParams.type) { // type
            if (query) query += '&';
            query += 'type=' + searchParams.type;
        }

        if (searchParams.y) { // year
            if (query) query += '&';
            query += 'y=' + searchParams.y;
        }

        if (searchParams.i) { // year
            if (query) query += '&';
            query += 'i=' + searchParams.i;
        }

        query += '&apikey='+this.apiKey;

        return this.$http({
            method: 'GET',
            url: '//www.omdbapi.com/?'+query
        });
    }

    public searchByName = (name:string): ng.IPromise<any> => {
        return this.search({s: name});
    };

    public searchByType = (type:MovieTypes): ng.IPromise<any> => {
        return this.search({type: type});
    };

    public searchByYear = (year:string): ng.IPromise<any> => {
        return this.search({y: year});
    };

    public searchByIMDbID = (id:string): ng.IPromise<any> => {
        return this.search({i: id});
    };
}

SearchService.$inject = ['$http'];

export { ISearchService, SearchService }