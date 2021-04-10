import SopCover from '../packages/cover';

export default {
  title: 'SopUI/SopCover',
  component: SopCover,
  argTypes: {
    src: {
      description: '封面图片网址（如果有）',
      control: {
        type: 'select',
        options: [
          '',
          'http://placehold.jp/400x400.png',
        ],
      },
    },
    type: {
      description: '封面类型，图片网址为空时占位图不同',
      control: {
        type: 'select',
        options: ['album', 'track', 'cp', 'contract', 'dsp', 'customer', 'playlist', 'playlist-project'],
      },
    },
    placeholder: {
      description: '占位文本，如果 **非空** 则优先级高于占位图',
    },
    width: {
      description: '占位宽度，一般和 `height` 保持相同；',
    },
    height: {
      description: '占位高度',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SopCover },
  props: Object.keys(argTypes),
  template: `
    <SopCover v-bind="$props" />
  `,
});

export const Normal = Template.bind({});
Normal.args = {
  type: 'track',
  src: '',
  placeholder: '',
  width: 160,
  height: 160,
};
