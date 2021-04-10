import SopCard from '../packages/card';

export default {
  title: 'SopUI/SopCard',
  component: SopCard,
  argTypes: {
    title: {
      description: '卡片标题。注： `slot#opt` 仅在 `title !== \'\'` 时才会显示',
    },
  },
};

const NormalTemplate = (args, { argTypes }) => ({
  components: { SopCard },
  props: Object.keys(argTypes),
  template: `
    <SopCard :title="$props.title">
      <template #opt>
      </template>

      Card Content

      <template #footer>
      </template>
    </SopCard>
  `,
});

export const Normal = NormalTemplate.bind({});
Normal.args = {};

export const WithCardTitle = NormalTemplate.bind({});
WithCardTitle.args = {
  title: 'Card Title',
};

const WithSlotTpl = (args, { argTypes }) => ({
  components: { SopCard },
  props: Object.keys(argTypes),
  template: `
    <SopCard :title="$props.title">
      <template #opt>
        slot#opt
      </template>

      Card Content

      <template #footer>
        slot#footer
      </template>
    </SopCard>
  `,
});

export const WithSlot = WithSlotTpl.bind({});
WithSlot.args = {
  title: 'Card Title',
};
