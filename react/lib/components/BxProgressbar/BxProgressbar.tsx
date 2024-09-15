import { defaultProps, type Props, propsValues } from './BxProgressbar.props';
import { type ClassListType, getClassName } from '../../utils/getClassName';

export function BxProgressbar(props: Partial<Props>) {
  const {
    progress = defaultProps.progress,
    size = defaultProps.size,
    color = defaultProps.color,
    textBefore = defaultProps.textBefore,
    textAfter = defaultProps.textAfter,
    bg = defaultProps.bg,
    column = defaultProps.column,
  } = props;

  const classList: ClassListType = {
    [`ui-progressbar-${size}`]: propsValues.sizes.includes(size),
    [`ui-progressbar-${color}`]: propsValues.colors.includes(color),
    'ui-progressbar-bg': bg,
    'ui-progressbar-column': column,
  };

  const before = <div className="ui-progressbar-text-before">{textBefore}</div>;
  const after = <div className="ui-progressbar-text-after">{textAfter}</div>;

  return (
    <div className={getClassName('ui-progressbar', classList)}>
      {before ?? ''}
      <div className="ui-progressbar-track">
        <div
          className="ui-progressbar-bar"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
      {after ?? ''}
    </div>
  );
}
