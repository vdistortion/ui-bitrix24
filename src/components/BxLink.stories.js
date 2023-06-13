import BxLink from './BxLink.vue';

const defaultProps = {
  href: '',
};

export default {
  title: 'bx-link',
  component: BxLink,
  tags: ['autodocs'],
  args: {
    default: 'bx-link',
    href: defaultProps.href,
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    href: {
      defaultValue: defaultProps.href,
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
