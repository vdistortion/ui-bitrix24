import './BxButton.css';
import { defaultProps, type Props, propsValues } from './BxButton.props';
import { type ClassListType, getClassName } from '../../utils/getClassName';

export function BxButton({ children, ...props }: Partial<Props>) {
  const {
    onClick = () => null,
    onToggleMenu = () => null,
    type = defaultProps.type,
    color = defaultProps.color,
    size = defaultProps.size,
    icon = defaultProps.icon,
    loader = defaultProps.loader,
    count = defaultProps.count,
    counter = defaultProps.counter,
    disabled = defaultProps.disabled,
    dropdown = defaultProps.dropdown,
    round = defaultProps.round,
    noCaps = defaultProps.noCaps,
    menu = defaultProps.menu,
  } = props;

  const classList: ClassListType = {
    [`ui-btn-${color}`]: propsValues.colors.includes(color),
    [`ui-btn-${size}`]: propsValues.sizes.includes(size),
    [`ui-btn-icon-${icon}`]: Boolean(icon) && propsValues.icons.includes(icon),
    [`ui-btn-${loader}`]: Boolean(loader) && propsValues.loaders.includes(loader),
    'ui-btn-disabled': disabled,
    'ui-btn-dropdown': dropdown,
    'ui-btn-round': round,
    'ui-btn-no-caps': noCaps,
  };

  const Counter = counter ? <i className="ui-btn-counter">{count}</i> : '';
  const button = (
    <button
      className={getClassName('ui-btn', classList)}
      type={type}
      disabled={disabled}
      onClick={(e) => onClick(e)}
    >
      {children}
      {Counter}
    </button>
  );

  const buttonMenu = (
    <div className={getClassName('ui-btn-split', classList)}>
      <button className="ui-btn-main" type={type} disabled={disabled} onClick={(e) => onClick(e)}>
        {children}
        {Counter}
      </button>
      <button
        className="ui-btn-menu"
        type="button"
        disabled={disabled}
        onClick={(e) => onToggleMenu(e)}
      />
    </div>
  );

  return menu ? buttonMenu : button;
}
