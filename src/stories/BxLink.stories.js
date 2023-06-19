import BxLink from '../components/BxLink.vue';

const href = 'https://training.bitrix24.com/rest_help/js_library/additional/openPath.php';
const desc = 'Component opens a specified path inside slider in the Bitrix24 account.';
// eslint-disable-next-line max-len
const regexp = /^\/(crm\/(deal|lead|contact|company)|marketplace|company\/personal\/user\/[0-9]+|workgroups\/group\/[0-9]+)\//;

export default {
  title: 'bx-link',
  component: BxLink,
  parameters: {
    docs: {
      description: {
        component: `<a href="${href}" target="_blank">${desc}</a>`,
      },
    },
  },
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
      description: `${regexp}`,
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
