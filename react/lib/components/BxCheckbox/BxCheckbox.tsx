import { defaultProps, type Props } from './BxCheckbox.props';
import styles from './BxCheckbox.module.css';
import { getClassName } from '../../utils/getClassName';

export function BxCheckbox({ children, ...props }: Partial<Props>) {
  const {
    onChange = () => null,
    value = defaultProps.value,
    name = defaultProps.name,
    checked = defaultProps.checked,
    disabled = defaultProps.disabled,
  } = props;

  return (
    <label className={getClassName('ui-ctl ui-ctl-checkbox', Object.values(styles))}>
      <input
        className="ui-ctl-element"
        type="checkbox"
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
