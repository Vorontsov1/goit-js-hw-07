import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryInner = document.querySelector(".gallery");

const galleryItem = createGalleryItem(galleryItems);

galleryInner.insertAdjacentHTML("beforeend", galleryItem);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
   src="${preview}" 
   alt="${description}" />
</a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionsDelay: 250,
});
