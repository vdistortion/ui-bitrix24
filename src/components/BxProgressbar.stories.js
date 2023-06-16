import BxProgressbar, { props } from './BxProgressbar.vue';

const defaultProps = {
  progress: 0,
  size: 'md',
  color: 'primary',
  textBefore: '',
  textAfter: '',
  bg: false,
  column: false,
};
export default {
  title: 'bx-progressbar',
  component: BxProgressbar,
  tags: ['autodocs'],
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
      options: props.sizes,
      defaultValue: defaultProps.size,
      control: { type: 'inline-radio' },
    },
    color: {
      options: props.colors,
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
};

export const Default = {
  render: (args) => ({
    template: '<bx-progressbar v-bind="args" v-on="args"></bx-progressbar>',
    data: () => ({ args }),
    components: { BxProgressbar },
  }),
};

const Story = (propName, propList) => ({
  render: (args) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-progressbar v-bind="args" v-on="args" :[propName]="item"></bx-progressbar>
      </div>
    `,
    data: () => ({ args, propName, propList }),
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

export const Colors = Story('color', props.colors);
export const Sizes = Story('size', props.sizes);
