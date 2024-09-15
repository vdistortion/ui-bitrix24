import { defaultProps, type Props, propsValues } from './BxIcon.props';
import { type ClassListType, getClassName } from '../../utils/getClassName';

export function BxIcon(props: Partial<Props>) {
  const {
    icon = defaultProps.icon,
    size = defaultProps.size,
    button = defaultProps.button,
    square = defaultProps.square,
  } = props;

  const classList: ClassListType = {
    [`ui-icon-${icon}`]: propsValues.icons.includes(icon),
    [`ui-icon-${size}`]: propsValues.sizes.includes(size),
    'ui-icon-square': square,
  };

  if (button) {
    return (
      <button className={getClassName('ui-icon', classList)}>
        <i></i>
      </button>
    );
  }

  return (
    <div className={getClassName('ui-icon', classList)}>
      <i></i>
    </div>
  );
}
