import _get from 'lodash/get';
import _find from 'lodash/find';

function Book(item){
    let volumeInfo = item.volumeInfo || {};
    let { title, description, imageLinks } = { ...volumeInfo };
    let imageSmall = _get(imageLinks, 'smallThumbnail', '');
    let indusIdent = _get(volumeInfo, 'industryIdentifiers', []);
    let authors = _get(volumeInfo, 'authors', []);
    let ISBN_10 = _find(indusIdent, function(r){ return r.type === 'ISBN_10'}) || {};
    var publisher = volumeInfo.publisher || '';
    var publishedDate = volumeInfo.publishedDate || '';
    var pageCount = volumeInfo.pageCount || '';
    var publishInfo = `${publishedDate} ${publisher}, ${pageCount} pages`

    this.title = title;
    this.description = description;
    this.imageSrc = imageSmall;
    this.authors = authors.join(',');
    this.isbn_10 = ISBN_10.identifier || '';
    this.publishInfo = publishInfo;

    return this;

}

export default Book;
