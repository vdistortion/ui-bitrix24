import type { Meta, StoryObj } from '@storybook/vue3';
import BxIcon, { propsValues, type PropIcons } from '../components/BxIcon.vue';

type DefaultProps = {
  icon: PropIcons;
};

const defaultProps: DefaultProps = {
  icon: 'file-empty',
};

const meta = {
  title: 'bx-icon',
  component: BxIcon,
  args: {
    icon: defaultProps.icon,
  },
  argTypes: {
    icon: {
      options: propsValues.icons,
      defaultValue: defaultProps.icon,
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof BxIcon>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  render: (args) => ({
    template: '<bx-icon v-bind="args" v-on="args">{{ args.default }}</bx-icon>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxIcon },
  }),
};

const Story = (propName: string, propList: any[]) => ({
  render: (args: any) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-icon v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-icon>
      </div>
    `,
    data: () => ({ args, propName, propList }),
    provide: {
      $BX24: null,
    },
    components: { BxIcon },
  }),
  argTypes: {
    [propName]: {
      table: {
        disable: true,
      },
    },
  },
});

export const Icons: StoryType = Story('icon', propsValues.icons);
