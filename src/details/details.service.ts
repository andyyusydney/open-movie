import angular = require('angular');

interface IDetailsService {
    searchByIMDbID(id:string): ng.IPromise<any>;
}

class DetailsService implements IDetailsService {
    private $http: ng.IHttpService;

    constructor($http: ng.IHttpService) {
        this.$http = $http;
    }

    private search = (id:string): ng.IPromise<any> => {
        let query = '';

        query += 'i=' + id + '&plot=full&tomatoes=true&r=json';

        return this.$http({
            method: 'GET',
            url: '//www.omdbapi.com/?'+query
        });
    }

    public searchByIMDbID = (id:string): ng.IPromise<any> => {
        return this.search(id);
    };
}

DetailsService.$inject = ['$http'];

export { IDetailsService, DetailsService }