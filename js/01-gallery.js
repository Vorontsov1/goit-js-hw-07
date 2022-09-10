import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryInner = document.querySelector(".gallery");

const galleryItem = createGalleryItem(galleryItems);

galleryInner.insertAdjacentHTML("beforeend", galleryItem);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src=${preview}
                    data-source=${original}
                    alt=${description}
                />
            </a>
        </div>`;
    })
    .join("");
}

galleryInner.addEventListener("click", galleryItemClick);

function galleryItemClick(evt) {
  evt.preventDefault();
  const gallerySwatchEl = evt.target.dataset.source;
  if (!gallerySwatchEl) {
    return;
  }
  const lightBox = basicLightbox.create(`
    <img src="${gallerySwatchEl}" width="800" height="600">
`);
  lightBox.show();

  document.addEventListener("keydown", onClickEsc);

  function onClickEsc(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    lightBox.close();
    document.removeEventListener("keydown", onClickEsc);
  }
}

