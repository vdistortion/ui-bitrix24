import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { Story } from './Story';
import BxInputFile from '../components/BxInputFile.vue';
import { defaultProps, propsValues, type TypesPropsList } from '../components/BxInputFile.props';

const events = {
  change: action('change'),
  delete: action('delete'),
};

const meta: Meta<typeof BxInputFile> = {
  title: 'forms/bx-input-file',
  component: BxInputFile,
  args: {
    ...events,
    placeholder: defaultProps.placeholder,
    type: defaultProps.type,
    multiple: defaultProps.multiple,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      options: propsValues.types,
      control: { type: 'inline-radio' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxInputFile);
export const Types: StoryType = Story<TypesPropsList>(BxInputFile, 'type', propsValues.types);
