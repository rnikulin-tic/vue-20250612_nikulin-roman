import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0)
    const increment = () => {
      if (count.value >= 5) {
        return;
      }
      count.value += 1
    }
    const decrement = () => {
      if (count.value <= 0) {
        return;
      }
      count.value -= 1
    }    
 
    watch(count, (newValue) => {
      if (newValue < 0) {
        count.value = 0
      } else if (newValue > 5) {
        count.value = 5
      }
    });

    return {
      count,
      increment,
      decrement,
    }
  },

  // watch: {
  //   count(newValue) {
  //     if (newValue < 0) {
  //       this.count = 0
  //     } else if (newValue > 5) {
  //       this.count = 5
  //     }
  //   },
  // },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        @click="decrement"
        :disabled="count <= 0"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        @click="increment"
        :disabled="count >= 5"
      >➕</button>
    </div>
  `,
})
