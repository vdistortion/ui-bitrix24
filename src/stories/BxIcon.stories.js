import BxIcon, { props } from '../components/BxIcon.vue';

const defaultProps = {
  icon: 'file-empty',
};

export default {
  title: 'bx-icon',
  component: BxIcon,
  args: {
    icon: defaultProps.icon,
  },
  argTypes: {
    icon: {
      options: props.icons,
      defaultValue: defaultProps.icon,
      control: { type: 'select' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: '<bx-icon v-bind="args" v-on="args">{{ args.default }}</bx-icon>',
    data: () => ({ args }),
    components: { BxIcon },
  }),
};

const Story = (propName, propList) => ({
  render: (args) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-icon v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-icon>
      </div>
    `,
    data: () => ({ args, propName, propList }),
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

export const Icons = Story('icon', props.icons);
