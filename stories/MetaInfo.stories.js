import SopMetaInfo from '../packages/meta-info/main';

export default {
  title: 'SopUI/SopMetaInfo',
  component: SopMetaInfo,
};

const Template = (args, { argTypes }) => ({
  components: { SopMetaInfo },
  props: Object.keys(argTypes),
  template: `
    <SopMetaInfo>
      <span>行内内容1</span>
      <span>行内内容2</span>
    </SopMetaInfo>
  `,
});

export const Normal = Template.bind({});
Normal.args = {};
