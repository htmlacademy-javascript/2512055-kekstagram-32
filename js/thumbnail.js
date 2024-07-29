const thumbnailTemplate = document.querySelector ('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = function (picture) {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture_img').src = picture.url;
  thumbnail.querySelector('.picture_img').alt = picture.description;
  thumbnail.querySelector('.picture_likes').textContent = picture.likes;
  thumbnail.querySelector('.picture_comments').textContent = picture.comments.length;

  return thumbnail;
};

const generateThumbnails = function (pictures) {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });


  container.append(fragment);
};

export {generateThumbnails};
