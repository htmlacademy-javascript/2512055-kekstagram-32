import { generateThumbnails } from '.thumbnail.js';
import {showBigPicture} from './big-picture.js';

const container = document.querySelector('.pictures');

const generateGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closet (['data-thumbnail-id']);
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);

  });

  generateThumbnails(pictures, container);
};

export {generateGallery};
