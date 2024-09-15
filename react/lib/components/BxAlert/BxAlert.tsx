import { defaultProps, type Props, propsValues } from './BxAlert.props';
import { type ClassListType, getClassName } from '../../utils/getClassName';

export function BxAlert({ children, ...props }: Partial<Props>) {
  const {
    onClose = () => null,
    title = defaultProps.title,
    size = defaultProps.size,
    color = defaultProps.color,
    icon = defaultProps.icon,
    center = defaultProps.center,
    inline = defaultProps.inline,
    closing = defaultProps.closing,
  } = props;

  const classList: ClassListType = {
    [`ui-alert-${size}`]: propsValues.sizes.includes(size),
    [`ui-alert-${color}`]: propsValues.colors.includes(color),
    [`ui-alert-icon-${icon}`]: Boolean(icon) && propsValues.icons.includes(icon),
    'ui-alert-text-center': center,
    'ui-alert-inline': inline,
  };

  return (
    <div className={getClassName('ui-alert', classList)}>
      <span className="ui-alert-message">
        {title ? <strong>{title}</strong> : ''} {children}
      </span>
      {closing ? <span className="ui-alert-close-btn" onClick={(e) => onClose(e)}></span> : ''}
    </div>
  );
}
