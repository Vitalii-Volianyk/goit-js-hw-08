// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "SimpleLightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


(() => {
  const gallery = document.querySelector(".gallery");
  let elements = "";
  galleryItems.forEach(({ preview, original, description }) => {
    elements += `
	<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>`;
  });

  gallery.insertAdjacentHTML('beforeend', elements);
  var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
})();