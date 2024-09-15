import React, { useState } from 'react';
import { defaultProps, type Props } from './BxInputFile.props';
import styles from './BxInputFile.module.css';
import { getClassName } from '../../utils/getClassName';
import { formatSizeUnits } from '../../utils/formatSizeUnits';

export function BxInputFile(props: Partial<Props>) {
  const {
    onChange = () => null,
    onDelete = () => null,
    placeholder = defaultProps.placeholder,
    type = defaultProps.type,
    multiple = defaultProps.multiple,
    disabled = defaultProps.disabled,
  } = props;
  const [files, setFiles] = useState<File[]>([]);
  const defaultPlaceholder: string = 'Загрузить файл или картинку';

  function onChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    const fileList = [...files];
    fileList.push(...input.files!);
    setFiles(fileList);
    onChange([...fileList]);
  }

  function onDeleteFile(index: number) {
    const fileList = [...files];
    const [file] = fileList.splice(index, 1);
    setFiles(fileList);
    onDelete([...fileList], file);
  }

  function title() {
    if (props.disabled) return '';
    if (files.length) return files.map((file: File) => file.name).join('\n');
    if (props.multiple) return 'Файлы не выбраны.';
    return 'Файл не выбран.';
  }

  function getName(file: File) {
    return `${file.name} (${formatSizeUnits(file.size)})`;
  }

  const InputFile = (
    <input
      className={getClassName('ui-ctl-element', {
        [styles['drag-n-drop__input']]: true,
      })}
      type="file"
      multiple={multiple}
      disabled={disabled}
      onChange={onChangeFile}
    />
  );

  const InputButton = (
    <label
      className={getClassName('ui-ctl ui-ctl-file-btn', {
        [styles['drag-n-drop--disabled']]: disabled,
        [styles['drag-n-drop--btn']]: true,
      })}
      title={title()}
    >
      {InputFile}
      <div
        className={getClassName('ui-ctl-label-text', {
          [styles['drag-n-drop__text']]: true,
        })}
      >
        {placeholder || defaultPlaceholder}
      </div>
    </label>
  );
  const InputLink = (
    <label
      className={getClassName('ui-ctl ui-ctl-file-link', {
        [styles['drag-n-drop--disabled']]: disabled,
        [styles['drag-n-drop--link']]: true,
      })}
      title={title()}
    >
      {InputFile}
      <div
        className={getClassName('ui-ctl-label-text', {
          [styles['drag-n-drop__text']]: true,
        })}
      >
        {placeholder || defaultPlaceholder}
      </div>
    </label>
  );
  const InputDrop = (
    <label
      className={getClassName('ui-ctl ui-ctl-file-drop', {
        [styles['drag-n-drop--disabled']]: disabled,
        [styles['drag-n-drop--drop']]: true,
      })}
      title={title()}
    >
      <div className="ui-ctl-label-text">
        <span>{placeholder || defaultPlaceholder}</span>
        <small>Перетащить с помощью drag'n'drop</small>
      </div>
      {InputFile}
    </label>
  );

  const Files = files.map((file, key) => (
    <li className={styles['drag-n-drop__file']} key={key}>
      <span className={styles['drag-n-drop__name']}>{getName(file)}</span>
      <span className={styles['drag-n-drop__delete']} onClick={() => onDeleteFile(key)}></span>
    </li>
  ));

  return (
    <div className={styles['drag-n-drop']}>
      {type === 'button' ? InputButton : ''}
      {type === 'link' ? InputLink : ''}
      {type === 'drop' ? InputDrop : ''}
      {files.length ? <ul className={styles['drag-n-drop__list']}>{Files}</ul> : ''}
    </div>
  );
}
