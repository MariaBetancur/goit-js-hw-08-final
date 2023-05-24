// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      ({ preview, original, description }) => `
      <div class="gallery_items">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `
    )
    .join('')
);

let lightboxGallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
