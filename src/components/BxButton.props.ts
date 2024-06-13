export type PropType = 'button' | 'submit' | 'reset';

export type PropSize = 'xs' | 'sm' | 'md' | 'lg';

export type PropLoader = '' | 'clock' | 'wait';

export type PropColor =
  | 'default'
  | 'success'
  | 'success-light'
  | 'danger'
  | 'danger-dark'
  | 'danger-light'
  | 'primary'
  | 'primary-dark'
  | 'secondary'
  | 'link'
  | 'light'
  | 'light-border';

export type PropIcon =
  | ''
  | 'add'
  | 'stop'
  | 'start'
  | 'pause'
  | 'setting'
  | 'task'
  | 'info'
  | 'search'
  | 'follow'
  | 'unfollow'
  | 'print'
  | 'add-folder'
  | 'list'
  | 'business'
  | 'business-confirm'
  | 'business-warning'
  | 'camera'
  | 'phone-up'
  | 'phone-down'
  | 'back'
  | 'edit'
  | 'share'
  | 'remove'
  | 'download'
  | 'cloud'
  | 'page'
  | 'chat'
  | 'phone-call'
  | 'lock'
  | 'done'
  | 'disk'
  | 'mail'
  | 'alert'
  | 'angle-up'
  | 'angle-down'
  | 'dots'
  | 'forward'
  | 'fail'
  | 'success'
  | 'plan'
  | 'eye-opened'
  | 'eye-closed'
  | 'tariff'
  | 'battery'
  | 'no-battery'
  | 'half-battery'
  | 'low-battery'
  | 'crit-battery'
  | 'demo';

type TypesProps = {
  types: PropType[];
  colors: PropColor[];
  sizes: PropSize[];
  icons: PropIcon[];
  loaders: PropLoader[];
};

export type TypesPropsList = PropType | PropColor | PropSize | PropIcon | PropLoader;

type Props = {
  type: PropType;
  color: PropColor;
  size: PropSize;
  icon: PropIcon;
  loader: PropLoader;
  count: number;
  counter: boolean;
  disabled: boolean;
  dropdown: boolean;
  round: boolean;
  noCaps: boolean;
  menu: boolean;
};

export const propsValues: TypesProps = {
  types: ['button', 'submit', 'reset'],
  colors: [
    'default',
    'success',
    'success-light',
    'danger',
    'danger-dark',
    'danger-light',
    'primary',
    'primary-dark',
    'secondary',
    'link',
    'light',
    'light-border',
  ],
  sizes: ['md', 'xs', 'sm', 'lg'],
  icons: [
    '',
    'add',
    'stop',
    'start',
    'pause',
    'setting',
    'task',
    'info',
    'search',
    'follow',
    'unfollow',
    'print',
    'add-folder',
    'list',
    'business',
    'business-confirm',
    'business-warning',
    'camera',
    'phone-up',
    'phone-down',
    'back',
    'edit',
    'share',
    'remove',
    'download',
    'cloud',
    'page',
    'chat',
    'phone-call',
    'lock',
    'done',
    'disk',
    'mail',
    'alert',
    'angle-up',
    'angle-down',
    'dots',
    'forward',
    'fail',
    'success',
    'plan',
    'eye-opened',
    'eye-closed',
    'tariff',
    'battery',
    'no-battery',
    'half-battery',
    'low-battery',
    'crit-battery',
    'demo',
  ],
  loaders: ['', 'clock', 'wait'],
};

export const defaultProps: Props = {
  type: propsValues.types[0],
  color: propsValues.colors[0],
  size: propsValues.sizes[0],
  icon: propsValues.icons[0],
  loader: propsValues.loaders[0],
  count: 0,
  counter: false,
  disabled: false,
  dropdown: false,
  round: false,
  noCaps: false,
  menu: false,
};
