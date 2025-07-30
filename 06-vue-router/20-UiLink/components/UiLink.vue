<script setup lang="ts">
// Вместо <span> должен быть <RouterLink> или <a>
// Используйте динамический компонент <component :is="...">

import { computed } from 'vue'

const props = defineProps<{
    to?: Object | string,
    href?: string 
}>()

  const linkComponent = computed(() => props.to ? 'RouterLink' : 'a')

</script>

<template>
  <component :is="linkComponent" :to="to" :href="href">
    <slot />
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
