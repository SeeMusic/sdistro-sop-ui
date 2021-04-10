import SopStatusIcon from '../packages/status-icon';

export default {
  title: 'SopUI/SopStatusIcon',
  component: SopStatusIcon,
  argTypes: {
    color: {
      description: '颜色名',
      control: {
        type: 'select',
        options: ['all', 'blue', 'green', 'gray', 'red', 'yellow'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SopStatusIcon },
  props: Object.keys(argTypes),
  template: `
    <SopStatusIcon :color="color" />
  `,
});

export const Normal = Template.bind({});
Normal.args = {
  color: 'all',
};
