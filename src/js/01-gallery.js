import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');

const markupArr = galleryItems
    .map(({preview, original, description
}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');

galleryRef.insertAdjacentHTML('beforeend', markupArr);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


console.log(galleryItems);
