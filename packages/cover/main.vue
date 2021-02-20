<template>
  <div
    class="sop-cover"
    :class="`sop-cover--${type}`"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <template v-if="src !== ''">
      <img
        :src="src"
        :width="width"
        :height="height"
      >
    </template>
    <template v-else-if="placeholder !== ''">
      <span>
        {{ placeholder }}
      </span>
    </template>
    <template v-else>
      <span
        class="default-cover"
        :width="width"
        :height="height"
        :style="backgroundStyle"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'SopCover',
  props: {
    type: {
      type: String,
      required: false,
      default: 'album',
      validator(value) {
        return [
          'album', 'track', 'cp', 'contract', 'dsp', 'customer',
          'playlist',
          'playlist-project',
        ].indexOf(value) !== -1;
      },
    },
    src: {
      type: String,
      required: false,
      default: '',
    },
    width: {
      type: Number,
      required: false,
      default: 240,
    },
    height: {
      type: Number,
      required: false,
      default: 240,
    },
    placeholder: {
      type: String,
      requeire: false,
      default: '',
    },
  },
  computed: {
    backgroundStyle() {
      // 数组顺序需要和 Sprite 图坐标一致
      const coverTypeList = [
        'album',
        'track',
        'cp',
        'customer',
        'contract',
        'dsp',
        'playlist-project',
        'playlist',
      ];

      return {
        backgroundPosition: `0 -${this.width * coverTypeList.indexOf(this.type)}px`,
        backgroundSize: `${this.width}px auto`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.sop-cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  color: #CCC;
  box-shadow: inset 0 0 0 1px #EEE;
  background-color: #FAFAFA;

  .default-cover {
    flex: 1;
    background-repeat: no-repeat;
    background-image: url(../assets/cover-placeholder.jpg);
  }
}
</style>
