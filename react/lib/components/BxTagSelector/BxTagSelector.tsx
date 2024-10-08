import React, { ChangeEvent } from 'react';
import { defaultProps, type Props } from './BxTagSelector.props';
import styles from './BxTagSelector.module.css';
import { getClassName } from '../../utils/getClassName';

export function BxTagSelector({ children, ...props }: Partial<Props>) {
  const {
    onAdd = () => null,
    onAuxClick = () => null,
    onClick = () => null,
    onCreate = () => null,
    onDelete = () => null,
    onEnter = () => null,
    onInput = () => null,
    list = defaultProps.list,
    placeholder = defaultProps.placeholder,
    displayFieldName = defaultProps.displayFieldName,
    displayFieldLink = defaultProps.displayFieldLink,
    displayFieldIcon = defaultProps.displayFieldIcon,
    defaultIcon = defaultProps.defaultIcon,
    textAddButton = defaultProps.textAddButton,
    textCreateButton = defaultProps.textCreateButton,
    textMoreButton = defaultProps.textMoreButton,
    textChangeButton = defaultProps.textChangeButton,
    showAddButton = defaultProps.showAddButton,
    showCreateButton = defaultProps.showCreateButton,
    showInputText = defaultProps.showInputText,
    clickable = defaultProps.clickable,
    multiple = defaultProps.multiple,
    inline = defaultProps.inline,
    icon = defaultProps.icon,
  } = props;

  const [text, setText] = React.useState<string>('');

  function getImageUrl(icon?: string) {
    return icon ?? new URL(`./icons/${defaultIcon}.svg`, import.meta.url).href;
  }

  function onClickLink(
    e: React.MouseEvent,
    eventName: 'click' | 'auxclick',
    key: number,
    item: any,
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
    <div
      className={getClassName('ui-tag-selector-item ui-tag-selector-tag', {
        'ui-tag-selector-tag--has-avatar': icon,
      })}
      key={key}
    >
      {clickable ? (
        <a
          className="ui-tag-selector-tag-content"
          href={item[displayFieldLink] ? item[displayFieldLink] : '#'}
          target="_blank"
          onClick={!item[displayFieldLink] ? (e) => onClickLink(e, 'click', key, item) : () => {}}
          onAuxClick={
            !item[displayFieldLink] ? (e) => onClickLink(e, 'auxclick', key, item) : () => {}
          }
        >
          <div className={['ui-tag-selector-tag-title', styles['title']].join(' ')}>
            {item[displayFieldName]}
          </div>
        </a>
      ) : (
        <div className="ui-tag-selector-tag-content">
          {icon ? (
            <div
              className="ui-tag-selector-tag-avatar"
              style={{
                backgroundImage: `url(${getImageUrl(item[displayFieldIcon])})`,
              }}
            ></div>
          ) : (
            children
          )}
          <div className={['ui-tag-selector-tag-title', styles['title']].join(' ')}>
            {item[displayFieldName]}
          </div>
        </div>
      )}
      <div className="ui-tag-selector-tag-remove" onClick={() => onDelete(key, item)}></div>
    </div>
  ));

  function onKeyUp(e: React.KeyboardEvent<HTMLInputElement>, text: string) {
    if (e.key === 'Enter') onEnter(text);
  }

  function onInputText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    onInput(e.target.value);
  }

  return (
    <div
      className={getClassName('ui-tag-selector-outer-container', { [styles['inline']]: inline })}
    >
      <div className="ui-tag-selector-container">
        <div className="ui-tag-selector-items">
          {Items}
          <input
            type="text"
            className={getClassName('ui-tag-selector-item ui-tag-selector-text-box', {
              'ui-tag-selector-item-hidden': !showInputText,
            })}
            autoComplete="off"
            placeholder={placeholder}
            value={text}
            onInput={(e: ChangeEvent<HTMLInputElement>) => onInputText(e)}
            onKeyUp={(e) => onKeyUp(e, text)}
          />
          {showAddButton ? (
            <span
              className="ui-tag-selector-item ui-tag-selector-add-button"
              onClick={() => onAdd(text)}
            >
              <span className="ui-tag-selector-add-button-caption">
                {!list.length ? textAddButton : multiple ? textMoreButton : textChangeButton}
              </span>
            </span>
          ) : (
            ''
          )}
        </div>
        <div
          className={getClassName('ui-tag-selector-create-button', {
            'ui-tag-selector-item-hidden': !showCreateButton,
          })}
          onClick={() => onCreate()}
        >
          <span className="ui-tag-selector-create-button-caption">{textCreateButton}</span>
        </div>
      </div>
    </div>
  );
}
