<template>
  <div
    class="sop-data-table"
    :class="`sop-data-table--${labelPosition}`"
  >
    <div
      v-if="title !== null"
      class="sop-data-table__title"
    >
      {{ title }}
    </div>

    <div class="sop-data-table__content">
      <slot :cols="cols" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SopDataTable',
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    labelPosition: {
      type: String,
      required: false,
      default: 'top',
    },
    cols: {
      type: Number,
      required: false,
      default: 2,
    },
  },
  provide() {
    return {
      cols: this.cols,
    };
  },
};
</script>

<style lang="scss" scoped>
.sop-data-table__title {
  margin-bottom: 12px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.sop-data-table__content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>
