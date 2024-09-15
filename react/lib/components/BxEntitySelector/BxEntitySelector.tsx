import React from 'react';
import { defaultProps, type Props } from './BxEntitySelector.props';
import styles from './BxEntitySelector.module.css';
import { getClassName } from '../../utils/getClassName';

export function BxEntitySelector(props: Partial<Props>) {
  const {
    onClick = () => null,
    onAuxClick = () => null,
    onAdd = () => null,
    onDelete = () => null,
    list = defaultProps.list,
    displayField = defaultProps.displayField,
    displayFieldLink = defaultProps.displayFieldLink,
    textAdd = defaultProps.textAdd,
    textMore = defaultProps.textMore,
    textChange = defaultProps.textChange,
    clickable = defaultProps.clickable,
    multiple = defaultProps.multiple,
    inline = defaultProps.inline,
  } = props;
  const [hoverDelete, setHoverDelete] = React.useState<boolean[]>([]);

  function onHover(key: number, action: boolean) {
    const arrayHover = [...hoverDelete];
    arrayHover[key] = action;
    setHoverDelete(arrayHover);
  }

  function onClickLink(
    e: React.MouseEvent,
    key: number,
    item: any,
    eventName: 'click' | 'auxclick',
  ) {
    if (clickable) {
      e.preventDefault();
      if (eventName === 'click') {
        onClick(key, item);
      } else if (eventName === 'auxclick') {
        onAuxClick(key, item);
      }
    }
  }

  const Items = list.map((item: any, key: number) => (
    <span
      className={getClassName(styles['bx-entity-selector__item'], {
        [styles['hover-delete']]: hoverDelete[key],
      })}
      key={key}
    >
      {clickable ? (
        <a
          className={styles['bx-entity-selector__text']}
          href={item[displayFieldLink]}
          target="_blank"
          onClick={(e) => onClickLink(e, key, item, 'click')}
          onAuxClick={(e) => onClickLink(e, key, item, 'auxclick')}
        >
          {item[displayField]}
        </a>
      ) : (
        <span className={styles['bx-entity-selector__text']}>{item[displayField]}</span>
      )}
      <button
        className={styles['bx-entity-selector__delete']}
        onMouseEnter={() => onHover(key, true)}
        onMouseLeave={() => onHover(key, false)}
        onClick={() => onDelete(key, item)}
      ></button>
    </span>
  ));

  return (
    <div className={getClassName(styles['bx-entity-selector'], { [styles.inline]: inline })}>
      <div className={styles['bx-entity-selector__button']}>
        <span className="bx-entity-selector__items">{Items}</span>
        <span className="bx-entity-selector__controls">
          <button className={styles['bx-entity-selector__add']} onClick={() => onAdd()}>
            {!list.length ? textAdd : multiple ? textMore : textChange}
          </button>
        </span>
      </div>
    </div>
  );
}
