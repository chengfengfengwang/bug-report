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
<style lang="less" scoped>
.card_section {
  position: relative;
  margin: 12px;
  margin-top: 0;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 #0000001a;
  border-radius: 4px;
  .section_title {
    line-height: 56px;
    position: relative;
    padding-left: 16px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333;
    border-bottom: solid 1px rgba(215, 215, 215, 0.6);
    margin-bottom: 20px;
  }
  .section_title::before {
    content: ' ';
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 22px;
    background-color: #18be78;
    border-radius: 0 9px 9px 0;
  }
  .section_content {
    padding: 0 15px 15px 15px;
  }
}
</style>
