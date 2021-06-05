import './sass/main.scss';
import NewsApiService from './apiService';
import hitsTpl from './tamplates/galleryCard.hbs';
import LoadMoreBtn from './loadMore';


const refs = {    
    searchForm: document.querySelector('.search-form'),
    hitsContainer: document.querySelector('.gallery'),    
};

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchHits);

function onSearch(e) {
    e.preventDefault();    
    newsApiService.query = e.currentTarget.elements.query.value;
    loadMoreBtn.show();
    newsApiService.resetPage();
    clearHitsContainer();
    fetchHits();    
}

function fetchHits() {   
    loadMoreBtn.disable();  
    newsApiService.fetchArticles().then(hits => {        
        appendHitsMarkup(hits);
        loadMoreBtn.enable();       
    });    
}

function scroll() {    
    refs.hitsContainer.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    });
}

function appendHitsMarkup(hits) {
    refs.hitsContainer.insertAdjacentHTML('beforeend', hitsTpl(hits));
    scroll(hits);
}

function clearHitsContainer() {
    refs.hitsContainer.innerHTML = '';
}






