<template>
  <div class="sop-card">
    <div
      v-if="title !== ''"
      class="sop-card__hd"
    >
      <span
        class="sop-card__hd-title"
      >
        {{ title }}
      </span>
      <span
        v-if="$slots.opt"
        class="sop-card__hd-opt"
      >
        <slot name="opt" />
      </span>
    </div>
    <div class="sop-card__bd">
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="sop-card__ft"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SopCard',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.sop-card {
  padding: 24px;
  background: #FFF;
  border: 1px solid #DDD;
  border-radius: 8px;

  .el-tabs:first-child {
    margin-top: -8px;
  }

  & + & {
    margin-top: 16px;
  }
}

.sop-card__hd {
  margin: -24px 0 16px;
  height: 48px;
  line-height: 48px;
  box-shadow: inset 0 -1px 0 #DDD;
  display: flex;
}

.sop-card__hd-title {
  flex: 1;
  font-weight: 600;
  height: 48px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.sop-card__hd-opt {
  margin-left: 16px;
}

.sop-card__ft {
  margin-top: 16px;
  text-align: right;
}
</style>
