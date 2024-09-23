import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from '../main.js';

const gallery = document.querySelector('.gallery');

images.forEach(image => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.alt = image.description;
  img.setAttribute('data-source', image.original);

  link.appendChild(img);
  listItem.appendChild(link);

  gallery.appendChild(listItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
