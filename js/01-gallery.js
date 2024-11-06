import { galleryItems } from './gallery-items.js';
// Change code below this line

// Selectăm elementul <ul> unde vom adăuga galeria
const galleryList = document.querySelector('.gallery');

// Creăm marcajul pentru galerie
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');

// Adăugăm marcajul în DOM
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// Adăugăm event listener pentru click pe galerie
galleryList.addEventListener('click', (event) => {
  event.preventDefault(); 

  // Verificăm dacă a fost clic pe o imagine
  if (event.target.classList.contains('gallery__image')) {
    const originalImageUrl = event.target.dataset.source; 
    openModal(originalImageUrl); 
  }
});

// Funcția pentru a deschide modalul
function openModal(imageUrl) {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
  `);

  instance.show();

  // Închidem modalul cu tasta Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}

  console.log(galleryItems);
