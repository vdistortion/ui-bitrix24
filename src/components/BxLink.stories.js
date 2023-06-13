import BxLink from './BxLink.vue';

export default {
  title: 'bx-link',
  component: BxLink,
  tags: ['autodocs'],
  args: {
    default: 'bx-link',
    href: 'https://astrotrain55.github.io/vue-bitrix24/',
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    href: {
      defaultValue: '',
      control: { type: 'text' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: '<bx-link v-bind="args" v-on="args">{{ args.default }}</bx-link>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxLink },
  }),
};
