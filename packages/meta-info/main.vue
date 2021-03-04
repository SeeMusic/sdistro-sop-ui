<template>
  <div class="sop-meta-info">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SopMetaInfo',
};
</script>

<style lang="scss">
.sop-meta-info {
  display: flex;
  flex-wrap: wrap;
  color: #999;

  & > span {
    display: flex;
    align-items: center;
    margin-left: 8px;

    &:before {
      content: "";
      margin-right: 8px;
      width: 2px;
      height: 2px;
      border-radius: 2px;
      background: #999;
      vertical-align: middle;
      overflow: hidden;
    }

    &:first-child {
      margin-left: 0;

      &:before {
        display: none;
      }
    }
  }

  .sop-icon-status + em {
    font-style: normal;
    font-size: 12px;
    vertical-align: middle;
  }
}
</style>
