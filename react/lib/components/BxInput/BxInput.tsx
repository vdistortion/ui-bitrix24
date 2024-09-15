import { defaultProps, type Props, propsValues } from './BxInput.props';
import styles from './BxInput.module.css';
import { type ClassListType, getClassName } from '../../utils/getClassName';

export function BxInput(props: Partial<Props>) {
  const {
    onInput = () => null,
    onChange = () => null,
    onClickBefore = () => null,
    onClickAfter = () => null,
    value = defaultProps.value,
    placeholder = defaultProps.placeholder,
    disabled = defaultProps.disabled,
    size = defaultProps.size,
    color = defaultProps.color,
    inline = defaultProps.inline,
    noBorder = defaultProps.noBorder,
    underline = defaultProps.underline,
    noPadding = defaultProps.noPadding,
    round = defaultProps.round,
    tag = defaultProps.tag,
    tagColor = defaultProps.tagColor,
    beforeIcon = defaultProps.beforeIcon,
    beforeExt = defaultProps.beforeExt,
    beforeButton = defaultProps.beforeButton,
    afterIcon = defaultProps.afterIcon,
    afterExt = defaultProps.afterExt,
    afterButton = defaultProps.afterButton,
  } = props;

  const classList: ClassListType = {
    [`ui-ctl-${size}`]: propsValues.sizes.includes(size),
    [`ui-ctl-${color}`]: Boolean(color) && propsValues.colors.includes(color),
    'ui-ctl-before-icon': Boolean(beforeIcon) && !beforeExt,
    'ui-ctl-ext-before-icon': Boolean(beforeIcon) && beforeExt,
    'ui-ctl-after-icon': Boolean(afterIcon) && !afterExt,
    'ui-ctl-ext-after-icon': Boolean(afterIcon) && afterExt,
    'ui-ctl-inline': inline,
    'ui-ctl-no-border': noBorder,
    'ui-ctl-underline': underline,
    'ui-ctl-no-padding': noPadding,
    'ui-ctl-round': round,
    [styles['bx-input']]: true,
  };

  const classListBeforeIcon: ClassListType = {
    'ui-ctl-before': !beforeExt,
    'ui-ctl-ext-before': beforeExt,
    [`ui-ctl-icon-${beforeIcon}`]: Boolean(beforeIcon) && propsValues.icons.includes(beforeIcon),
    [styles['bx-input-before']]: true,
  };

  const classListAfterIcon: ClassListType = {
    'ui-ctl-after': !afterExt,
    'ui-ctl-ext-after': afterExt,
    [`ui-ctl-icon-${afterIcon}`]: Boolean(afterIcon) && propsValues.icons.includes(afterIcon),
  };

  const classListTag: ClassListType = {
    '--tag_light': tagColor === 'light',
    '--tag_light-blue': tagColor === 'light-blue',
  };

  const BeforeIcon = beforeButton ? (
    <button
      className={getClassName('', classListBeforeIcon)}
      onClick={(e) => onClickBefore(e)}
    ></button>
  ) : (
    <div className={getClassName('', classListBeforeIcon)}></div>
  );

  const AfterIcon = afterButton ? (
    <button
      className={getClassName('', classListAfterIcon)}
      onClick={(e) => onClickAfter(e)}
    ></button>
  ) : (
    <div className={getClassName('', classListAfterIcon)}></div>
  );

  const Tag = <div className={getClassName('ui-ctl-tag', classListTag)}>{tag}</div>;

  return (
    <div className={getClassName('ui-ctl ui-ctl-textbox', classList)}>
      {beforeIcon ? BeforeIcon : ''}
      {afterIcon ? AfterIcon : ''}
      {tag ? Tag : ''}
      <input
        type="text"
        className="ui-ctl-element"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onInput={(e) => onInput(e)}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
