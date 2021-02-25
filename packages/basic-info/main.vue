<template>
  <div
    class="sop-basic-info"
  >
    <SopCover
      class="sop-basic-info__cover"
      :type="type"
      :width="72"
      :height="72"
      :src="cover"
    />
    <p class="sop-basic-info__title">
      {{ title }}
    </p>
    <SopMetaInfo>
      <slot />
    </SopMetaInfo>

    <div
      v-if="isOperationShow"
      class="sop-basic-info__opt"
    >
      <slot name="opt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SopBasicInfo',
  props: {
    type: {
      type: String,
      required: false,
      default: 'album',
      validator(value) {
        return [
          'album', 'track',
          'playlist', 'playlist-project', 'open-playlist',
        ].indexOf(value) !== -1;
      },
    },
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    isOperationShow() {
      return this.$slots.opt;
    },
  },
};
</script>

<style lang="scss" scoped>
.sop-basic-info {
  position: relative;
  margin-bottom: 16px;
  padding: 0 0 0 88px;
  min-height: 72px;
}

.sop-basic-info__cover {
  position: absolute;
  left: 0;
  top: 0;
}

.sop-basic-info__title {
  line-height: 36px;
  font-size: 24px;
}

.sop-basic-info__opt {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
