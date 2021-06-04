import './sass/main.scss';
import NewsApiService from './apiService';
import hitsTpl from './tamplates/galleryCard.hbs';


const refs = {
    element: document.getElementById('.my-element-selector'),
    searchForm: document.querySelector('.search-form'),
    hitsContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
    e.preventDefault();

    clearHitsContainer();
    newsApiService.query = e.currentTarget.elements.query.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles().then (appendHitsMarkup);
};

function onLoadMore() {
    newsApiService.fetchArticles().then (appendHitsMarkup);
      
};

function appendHitsMarkup(hits) {
    refs.hitsContainer.insertAdjacentHTML('beforeend', hitsTpl(hits));
}

function clearHitsContainer() {
    refs.hitsContainer.innerHTML = '';
}


// const element = document.getElementById('.my-element-selector');
// refs.element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });



