import { defaultProps, type Props } from './BxRadio.props';
import styles from './BxRadio.module.css';
import { getClassName } from '../../utils/getClassName';

export function BxRadio({ children, ...props }: Partial<Props>) {
  const {
    onChange = () => null,
    value = defaultProps.value,
    name = defaultProps.name,
    checked = defaultProps.checked,
    disabled = defaultProps.disabled,
  } = props;

  return (
    <label className={getClassName('ui-ctl ui-ctl-radio', Object.values(styles))}>
      <input
        className="ui-ctl-element"
        type="radio"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e)}
      />
      <div className="ui-ctl-label-text">{children}</div>
    </label>
  );
}
