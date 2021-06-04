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
        .then(({hits}) => {
            this.page += 1;
            return hits;
        });
        
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














// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
// const KEY = '21917669-1fedcfe337ac78c8906ac8c38';
// const per_page = 12;
// export default function fetchCard() {

//     return fetch(`${BASE_URL}q=${this.searchQuery}&page=${this.page}&per_page=${per_page}&key=${KEY}`,)    
//         .then(response => {
//             if (response.ok) return response.json();
//             throw new Error('Error fatching data');
//         });
// }








