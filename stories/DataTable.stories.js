import SopDataTable from '../packages/datatable/main';
import SopDataTableItem from '../packages/datatable-item/main';

export default {
  title: 'SopUI/SopDataTable',
  component: SopDataTable,
  argTypes: {
    title: {
      description: '总标题',
    },
    cols: {
      description: '单行列数',
      type: 'number',
    },
    labelPosition: {
      description: 'Label 位置（目前仅实现顶部）',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SopDataTable,
    SopDataTableItem,
  },
  props: Object.keys(argTypes),
  template: `
    <SopDataTable v-bind="$props">
      <SopDataTableItem label="标题 1">
        内容 1

        <template #opt>
          Slot#Opt
        </template>
      </SopDataTableItem>
      <SopDataTableItem label="标题 2">内容 2</SopDataTableItem>
      <SopDataTableItem label="标题 3">内容 3</SopDataTableItem>
      <SopDataTableItem label="标题 4">内容 4</SopDataTableItem>
    </SopDataTable>
  `,
});

export const Normal = Template.bind({});
Normal.args = {
  title: null,
  labelPosition: 'top',
  cols: 2,
};
