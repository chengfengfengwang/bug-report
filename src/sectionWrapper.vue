<template>
  <div class="card_section">
    <div class="section_title">学员标签</div>
    <div class="section_content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title']
};
</script>