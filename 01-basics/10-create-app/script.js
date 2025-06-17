import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  // Имя компонента - не обязательная опция, но принято иметь - полезно для отладки и редких случаев
  name: 'App',
  setup() {
    const dateFormat = {
        dateStyle: 'long'
    };
    return {
        dateFormat,
    }
  },
template: `
    <div class="container">
        <div>Сегодня: {{ new Date().toLocaleDateString("ru-RU", dateFormat) }}</div>
    </div>
  `,
})

createApp(App).mount('#app')
