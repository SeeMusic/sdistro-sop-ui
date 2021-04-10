<template>
  <i
    class="sop-icon-status"
    :class="`sop-icon-status--${color}`"
  />
</template>

<script>
export default {
  name: 'SopStatusIcon',
  props: {
    color: {
      type: String,
      required: true,
      validator(value) {
        return [
          'blue', 'green', 'gray', 'red', 'yellow', 'all',
        ].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/_color.scss';

.sop-icon-status {
  position: relative;
  display: inline-block;
  margin-right: 4px;
  width: 8px;
  height: 8px;
  font-size: 0;
  border-radius: 2px;
  vertical-align: middle;

  &--all {
    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      width: 50%;
      height: 50%;
    }

    &:before {
      left: 0;
      background-color: $blue;
      box-shadow: 0 4px 0 0 #FF4B4B;
    }

    &:after {
      right: 0;
      background-color: #28CA41;
      box-shadow: 0 4px 0 0 #FFBD2E;
    }

    overflow: hidden;
  }

  &--gray {
    background-color: #999;
  }

  &--green {
    background-color: #28CA41;
  }

  &--yellow {
    background-color: #FFBD2E;
  }

  &--red {
    background-color: #FF4B4B;
  }

  &--blue {
    background-color: $blue;
  }
}
</style>
