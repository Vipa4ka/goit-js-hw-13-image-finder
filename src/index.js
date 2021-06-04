import './sass/main.scss';
// import NewsApiService from '../src/apiService';
import NewsApiService from './apiService';
// import './gallery';

const refs = {
    element: document.getElementById('.my-element-selector'),
    searchForm: document.querySelector('.search-form'),
    articlesContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
    e.preventDefault();
    
    newsApiService.query = e.currentTarget.elements.query.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles();
};

function onLoadMore() {
    newsApiService.fetchArticles();
      
};




// // const element = document.getElementById('.my-element-selector');
// refs.element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });



