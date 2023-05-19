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
gallery.addEventListener('click', event => {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'IMG') return;
  const imageSrc = target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);
  instance.show();
});
let lightboxGallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {
  // do something…
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e); // some usefull information
});
console.log(galleryItems);
