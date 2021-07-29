const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.js-gallery');
const imagesMarkup = createImageMarkup(galleryItems);

const modalRef = document.querySelector('.js-lightbox');
const modalOverlayRef = document.querySelector('.lightbox__overlay');
const modalContentRef = document.querySelector('.lightbox__content');
const modalImageRef = document.querySelector('.lightbox__image');
const modalCloseButtonRef = document.querySelector('[data-action="close-lightbox"]');


gallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `

    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>

  `;
    })
    .join('');
};

gallery.addEventListener('click', openModal);
modalCloseButtonRef.addEventListener('click', closeModal);
window.addEventListener("keyup", closeModalESC);
modalOverlayRef.addEventListener('click', closeModalOverlay);
window.addEventListener("keyup", leftRightMove);

function openModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName === 'IMG') {
    modalRef.classList.add("is-open");
    modalImageRef.src = evt.target.dataset.source;
    modalImageRef.alt = evt.target.alt;
  }
  return;
};

function closeModal(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    modalRef.classList.remove("is-open");
  }
  return;
  toggleModal();
}

function toggleModal() {
  modalRef.classList.toggle("is-open");
  modalImageRef.src = '';
  modalImageRef.alt = '';
}

function closeModalOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    toggleModal();
  }
}

function closeModalESC(evt) {
  if (evt.key !== "Escape") {
    return;
  }
  toggleModal();
}

// function setCoordinates(evt) {
//   let x = galleryItems.indexOf(evt.target);
//   console.log(x);
//   // let idx = $(".gallery").find(src = "'+ x +'").index();
//   // alert(idx)
//   // console.log(idx);
//   // gallery.addEventListener('click', activeImage);
//   // activeImage = [];

//   // galleryItems.forEach((num, idx) => console.log(`value ${num}`, `${idx}`));
// }

// function leftRightMove(evt) {
//   if (evt.target === "ArrowRight") {
//     activeImage[i]++;
//     return modalImageRef.src = evt.target.dataset.source;
//   }
//   console.log("keyup", evt);
// }







