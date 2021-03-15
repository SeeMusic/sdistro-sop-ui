<template>
  <div
    class="sop-data-table-item"
    :class="{
      'sop-data-table-item--no-border': !border
    }"
    :style="itemWidthStyle"
  >
    <div
      v-if="label !== ''"
      class="sop-data-table__label"
    >
      {{ label }}
      <div
        v-if="isOperationShow"
        class="sop-data-table__opt"
      >
        <slot name="opt" />
      </div>
    </div>
    <div
      class="sop-data-table__content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SopDataTableItem',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    border: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  inject: ['cols'],
  computed: {
    isOperationShow() {
      return this.$slots.opt;
    },
    itemWidthStyle() {
      const { cols } = this;
      const percentage = 100 / cols;
      let width = '100%';

      if (cols !== 1) {
        width = `calc(${percentage}% - 8px)`;
      }

      return {
        width,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.sop-data-table-item {
  display: flex;
  align-items: baseline;
  flex-direction: column;
  padding-top: 7px;
  padding-bottom: 7px;
  // width: calc(50% - 8px);
  box-shadow: inset 0 -1px 0 #EEE;

  &:hover {
    .sop-data-table__opt {
      display: initial;
    }
  }
}

.sop-data-table-item--no-border {
  box-shadow: none;
}

.sop-data-table__label {
  flex: 0 0 auto;
  margin-bottom: 4px;
  font-weight: 600;
  width: 100%; // todo fix width

  position: relative;
}

.sop-data-table__opt {
  position: absolute;
  right: 0;
  top: 0;
  font-weight: 400;
  display: none;
}

.sop-data-table__content {
  word-break: break-all;
  width: 100%;

  a,
  .highlight {
    color: $blue;
  }

  .no-content {
    color: #999;
  }
}

.sop-data-table--top {
  .sop-data-table-item {
    flex-direction: column;
    overflow: hidden;
  }

  .sop-data-table__label {
    margin-bottom: 4px;
  }
}
</style>
