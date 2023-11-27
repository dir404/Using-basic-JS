// Обробка подій
document.querySelector('.frame-rectangle1').addEventListener('click', function() {
   // Відкриття модального вікна з деталями книги
   let bookDetails = 'Тут будуть деталі книги...'; 
   alert(bookDetails);
});

// Зворотній зв'язок
document.querySelector('.frame-text').addEventListener('click', function() {
   // Відображення повідомлення або запитування вводу від користувача
   let userFeedback = prompt('Будь ласка, введіть свої відгуки:');
   if (userFeedback) {
       alert('Дякуємо за ваші відгуки!');
   } else {
       alert('Ви не ввели відгуки.');
   }
});
