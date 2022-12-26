import { galleryItems } from './gallery-items.js';
// Change code below this link


const galleryListEl = document.querySelector('.gallery');



const makeGalleryItem = ({preview, original, description} = {}) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src='${preview}'
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
};

const galleryItemsEl = galleryItems.map( (el) => {
    return makeGalleryItem(el);
}).join('');


galleryListEl.insertAdjacentHTML('afterbegin', galleryItemsEl);


galleryListEl.addEventListener('click', onLinkClick);

function onLinkClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const largeImgEl = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`
    <img src="${largeImgEl}" width="800" height="600">`)

    instance.show()

}


