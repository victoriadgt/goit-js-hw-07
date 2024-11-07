import { galleryItems } from './gallery-items.js';
// Change code below this line

// Crearea și randarea marcajului
const gallery = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
    </a>
  </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Inițializarea librăriei SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
