import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryCard = galleryItems
  .map(({ preview, original, description}) => `
<a class="gallery__item" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}" 
  title = "${description}"/>
</a>`
  )
  .join("");

galleryList.innerHTML = galleryCard;

new SimpleLightbox(".gallery a", { captionDelay: 250 });