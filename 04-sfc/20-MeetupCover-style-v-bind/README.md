# MeetupCover с v-bind в CSS

👷🏻 _Задача нормальной сложности_\
💼 _Часть проекта_

<!--start_statement-->

Дана реализация компонента `MeetupCover` из предыдущего задания. В компоненте из параметров устанавливается фон в
стилях.

В текущем решении используется старый подход, когда в компоненте вычисляется CSS переменная со значением, которое
используется в стилях. В современном SFC начиная с Vue 3.2 мы можем напрямую привязывать свойства компонента в стилях с
помощью `v-bind`.

Требуется изменить реализацию компонента `MeetupCover` так, чтобы фон задавался через `v-bind` в стилях, а не
вычислялись и привязывались вручную стили с CSS переменной.

Документация: [https://vuejs.org/api/sfc-css-features.html#v-bind-in-css](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css)

### Результат

<img src="https://i.imgur.com/R3qP00L.png" alt="Пример" style="max-width: 100%" />

<!--end_statement-->

---

## Инструкция

📝 Для решения задачи отредактируйте файл: `MeetupCover.vue`.

🚀 Команда запуска для ручного тестирования: `npm run dev`\
Приложение будет доступно на [http://localhost:5173/04-sfc/20-MeetupCover-style-v-bind/](http://localhost:5173/04-sfc/20-MeetupCover-style-v-bind/).

✅ Доступно автоматическое тестирование: `npm test MeetupCover-style-v-bind`
