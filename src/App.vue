<template>
  <div id="app">
    <sectionWrapper : />
    {{ msg }}
  </div>
</template>
<script setup>
import { ref } from 'vue';
import sectionWrapper from './sectionWrapper.vue';

const msg = ref('aa');
</script>
<script>
export default {
  name: 'App'
};
</script>
