<template>
  <div id="app">
    <SopCard title="数据表展示">
      <SopDataTable>
        <SopDataTableItem
          label="标题1"
        >
          内容
        </SopDataTableItem>
        <SopDataTableItem
          label="标题2"
        >
          内容
        </SopDataTableItem>
      </SopDataTable>
    </SopCard>

    <SopCard title="状态 icon">
      <SopStatusIcon color="all" />
      <SopStatusIcon color="gray" />
      <SopStatusIcon color="blue" />
      <SopStatusIcon color="yellow" />
      <SopStatusIcon color="green" />
    </SopCard>

    <SopCard
      title="图片占位"
    >
      <SopDataTable :cols="8">
        <SopDataTableItem
          label="专辑"
        >
          <SopCover
            :width="60"
            :height="60"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="歌曲"
        >
          <SopCover
            :width="60"
            :height="60"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="CP"
        >
          <SopCover
            :width="60"
            :height="60"
            type="cp"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="合同"
        >
          <SopCover
            :width="60"
            :height="60"
            type="contract"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="DSP"
        >
          <SopCover
            :width="60"
            :height="60"
            type="dsp"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="客户"
        >
          <SopCover
            :width="60"
            :height="60"
            type="customer"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="歌单"
        >
          <SopCover
            :width="60"
            :height="60"
            type="playlist"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="歌单项目"
        >
          <SopCover
            :width="60"
            :height="60"
            type="playlist-project"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="空内容自定义placeholder"
        >
          <SopCover
            :width="60"
            :height="60"
            placeholder="文本"
          />
        </SopDataTableItem>

        <SopDataTableItem
          label="自定义宽高"
        >
          <SopCover
            :width="120"
            :height="120"
          />
        </SopDataTableItem>
      </SopDataTable>
    </SopCard>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
