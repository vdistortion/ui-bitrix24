import type { Meta, StoryObj } from '@storybook/vue3';
import BxProgressbar, {
  propsValues,
  type PropSizes,
  type PropColors,
} from '../components/BxProgressbar.vue';

type DefaultProps = {
  progress: number;
  size: PropSizes;
  color: PropColors;
  textBefore: string;
  textAfter: string;
  bg: boolean;
  column: boolean;
};

const defaultProps: DefaultProps = {
  progress: 0,
  size: 'md',
  color: 'primary',
  textBefore: '',
  textAfter: '',
  bg: false,
  column: false,
};

const meta = {
  title: 'bx-progressbar',
  component: BxProgressbar,
  args: {
    progress: 17,
    size: defaultProps.size,
    color: defaultProps.color,
    textBefore: defaultProps.textBefore,
    textAfter: defaultProps.textAfter,
    bg: defaultProps.bg,
    column: defaultProps.column,
  },
  argTypes: {
    progress: {
      defaultValue: defaultProps.progress,
      control: { type: 'number', min: 0, max: 100 },
    },
    size: {
      options: propsValues.sizes,
      defaultValue: defaultProps.size,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      defaultValue: defaultProps.color,
      control: { type: 'inline-radio' },
    },
    textBefore: {
      defaultValue: defaultProps.textBefore,
      control: { type: 'text' },
    },
    textAfter: {
      defaultValue: defaultProps.textAfter,
      control: { type: 'text' },
    },
    bg: {
      defaultValue: defaultProps.bg,
      control: { type: 'boolean' },
    },
    column: {
      defaultValue: defaultProps.column,
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof BxProgressbar>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  render: (args) => ({
    template: '<bx-progressbar v-bind="args" v-on="args"></bx-progressbar>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxProgressbar },
  }),
};

const Story = (propName: string, propList: any[]) => ({
  render: (args: any) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-progressbar v-bind="args" v-on="args" :[propName]="item"></bx-progressbar>
      </div>
    `,
    data: () => ({ args, propName, propList }),
    provide: {
      $BX24: null,
    },
    components: { BxProgressbar },
  }),
  argTypes: {
    [propName]: {
      table: {
        disable: true,
      },
    },
  },
});

export const Colors: StoryType = Story('color', propsValues.colors);
export const Sizes: StoryType = Story('size', propsValues.sizes);
