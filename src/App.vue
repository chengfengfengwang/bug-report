<template>
  <div id="app">
    <sectionWrapper :title="" />
  </div>
</template>

<script>
import sectionWrapper from './sectionWrapper.vue';
export default {
  name: 'App',
  components: { sectionWrapper }
};
</script>
