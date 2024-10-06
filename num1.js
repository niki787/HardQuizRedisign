const root = document.documentElement;
const marqueeContent = document.querySelector("ul.marquee-content");

// Получаем количество дочерних элементов
const elementsCount = marqueeContent.children.length;

// Сохраняем ширину каждого элемента
const itemWidth = marqueeContent.children[0].offsetWidth;

// Устанавливаем ширину контейнера
marqueeContent.style.width = `${itemWidth * (elementsCount * 2)}px`; // Умножаем на 2, чтобы создать дубликаты

// Клонируем элементы
for (let i = 0; i < elementsCount; i++) {
  const clone = marqueeContent.children[i].cloneNode(true);
  marqueeContent.appendChild(clone);
}