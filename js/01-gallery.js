// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.


import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const cardsMarcup = createGalleryCardMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardsMarcup);

galleryList.addEventListener('click', onImageModalClick);


function createGalleryCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
        .join('');
    
};

function onImageModalClick(e) {
    e.preventDefault()
    if (!e.target.classList.contains('gallery__image')) {
        return;
    };

    const modalImg = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${modalImg}">`);
    
    galleryList.addEventListener('keydown', onEscKeyPress);
        function onEscKeyPress(e) {
            if (e.key === "Escape") {
            instance.close()
        };
    
    };

    instance.show();
};
