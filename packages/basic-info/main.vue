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
    <div class="sop-basic-info__content">
      <p class="sop-basic-info__title">
        {{ title }}
      </p>
      <SopMetaInfo>
        <slot />
      </SopMetaInfo>
    </div>

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
          'album', 'track', 'cp', 'contract', 'dsp', 'customer',
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

<style lang="scss">
.sop-basic-info {
  display: flex;
  margin-bottom: 16px;
  min-height: 72px;
}

.sop-basic-info__cover {
  margin-right: 16px;
}

.sop-basic-info__content {
  flex: 1;
  min-width: 0;
}

.sop-basic-info__title {
  font-size: 24px;
  font-weight: 600;
  height: 36px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.sop-basic-info__opt {
  margin-left: 16px;
}
</style>
