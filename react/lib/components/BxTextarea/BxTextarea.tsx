import { defaultProps, type Props } from './BxTextarea.props';
import { type ClassListType, getClassName } from '../../utils/getClassName';

export function BxTextarea(props: Partial<Props>) {
  const {
    onInput = () => null,
    value = defaultProps.value,
    placeholder = defaultProps.placeholder,
    resize = defaultProps.resize,
    disabled = defaultProps.disabled,
  } = props;

  const classList: ClassListType = {
    'ui-ctl-no-resize': resize === 'no',
    'ui-ctl-resize-y': resize === 'y',
    'ui-ctl-resize-x': resize === 'x',
  };

  return (
    <div className={getClassName('ui-ctl ui-ctl-textarea', classList)}>
      <textarea
        className="ui-ctl-element"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onInput={(e) => onInput(e)}
      ></textarea>
    </div>
  );
}
