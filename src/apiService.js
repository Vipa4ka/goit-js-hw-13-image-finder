export default class NewsApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        
    }
    fetchArticles() {
        const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
        const KEY = '21917669-1fedcfe337ac78c8906ac8c38';
        return fetch(`${BASE_URL}q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
            .then(r => r.json())
            .then(({ hits }) => {
                this.page += 1;
                return hits;
            })
            .catch(error => console.log(error));
    }
    
    resetPage() {
        this.page = 1;
    }           
    
    get  query() {
    return this.searchQuery;    
    }

    set  query(newQwery) {
     this.searchQuery=newQwery;    
    }
}














