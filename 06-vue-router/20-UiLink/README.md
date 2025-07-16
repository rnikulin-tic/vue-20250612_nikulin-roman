# UiLink

👶🏻 _Несложная задача_\
🧩 _UI Kit_

<!--start_statement-->

Требуется реализовать компонент ссылки `UiLink`:

Параметры:

- `to` - цель перехода для ссылки в Vue Router (`RouteLocationRaw`)
- `href` - строка со ссылкой

Если передан `to`, компонент должен рендерить `<RouterLink>`, иначе рендерить гиперссылку `<a>`.

Для реализации компонента потребуется использовать динамический компонент:

- 📑 EN: [https://vuejs.org/guide/essentials/component-basics.html#dynamic-components](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components)
- 📑 RU: [https://ru.vuejs.org/guide/essentials/component-basics.html#dynamic-components](https://ru.vuejs.org/guide/essentials/component-basics.html#dynamic-components)

_ℹ️ Примечание: импортировать компонент `RouterLink` не нужно. Достаточно использовать строку с его именем.
Так при необходимости можно будет использоваться глобально зарегистрированный Vue Router плагином компонент,
а `UiLink` сможет работать для ссылок и в приложениях без `vue-router`._

### Результат

<img src="https://i.imgur.com/220V0h1.gif" alt="Пример" />

<!--end_statement-->

---

## Инструкция

📝 Для решения задачи отредактируйте файлы: `components/UiLink.vue`.

🚀 Команда запуска для ручного тестирования: `npm run dev`\
Приложение будет доступно
на [http://localhost:5173/06-vue-router/20-UiLink/](http://localhost:5173/06-vue-router/20-UiLink/).

✅ Доступно автоматическое тестирование: `npm test UiLink`
