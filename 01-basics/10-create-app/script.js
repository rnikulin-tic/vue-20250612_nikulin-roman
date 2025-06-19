import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  // Имя компонента - не обязательная опция, но принято иметь - полезно для отладки и редких случаев
  name: 'App',
  setup() {
    const dateFormat = {
      dateStyle: 'long'
    };
    return {
      formatDate,
    }

    function formatDate(date) {
      return date.toLocaleDateString(navigator.language, dateFormat)
    }

  },

  template: `
    <div class="container">
        <div>Сегодня {{ formatDate(new Date()) }}</div>
    </div>
  `,
})

createApp(App).mount('#app')
