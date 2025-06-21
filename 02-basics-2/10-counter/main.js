import '@shgk/vue-course-ui/meetups/style.css'
import { createApp } from 'vue'
import CounterApp from './CounterApp.js'
import './CounterApp.css'

const app =  createApp(CounterApp)
const vm = app.mount('#app')
window.vm = vm
