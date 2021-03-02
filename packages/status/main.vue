<template>
  <span class="sop-status">
    <i
      class="sop-status__icon"
      :class="`sop-status__icon--${color}`"
    />
    <em
      v-if="text"
      class="sop-status__text"
    >
      {{ text }}
    </em>
  </span>
</template>

<script>
export default {
  name: 'SopStatus',
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
    text: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.sop-status {
  font-size: 0;
  vertical-align: middle;
}

.sop-status__text {
  margin-left: 4px;
  font-size: 12px;
  font-style: normal;
  vertical-align: middle;
}

.sop-status__icon {
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
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
