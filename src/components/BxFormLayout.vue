<template>
  <div class="ui-form">
    <div class="ui-form-row">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Первое поле</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
          <input type="text" class="ui-ctl-element" placeholder="1">
        </div>
      </div>
    </div>
    <div class="ui-form-row">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Второе поле</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
          <input type="text" class="ui-ctl-element" placeholder="2">
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form ui-form-line">
    <div class="ui-form-row">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Первое поле</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
          <input type="text" class="ui-ctl-element" placeholder="1">
        </div>
      </div>
    </div>
    <div class="ui-form-row">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Второе поле</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
          <input type="text" class="ui-ctl-element" placeholder="2" pre="">
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form">
    <div class="ui-form-row ui-form-row-line">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Первое поле</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
          <input type="text" class="ui-ctl-element" placeholder="1">
        </div>
      </div>
    </div>
    <div class="ui-form-row">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Второе поле</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
          <input type="text" class="ui-ctl-element" placeholder="2">
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form ui-form-section">
    <div class="ui-form-row">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">
          Подпись
          <span data-hint="Моя первая подсказка" data-hint-init="y" class="ui-hint">
            <span class="ui-hint-icon"></span>
          </span>
        </div>
      </div>
      <div class="ui-form-content">
        <div class="ui-form-row">
          <label class="ui-ctl ui-ctl-checkbox">
            <input type="checkbox" class="ui-ctl-element">
            <div class="ui-ctl-label-text">Убрать подпись Заряжено Битрикс24</div>
          </label>
          <a href="#" class="ui-form-link">подробнее</a>
        </div>
      </div>
    </div>
    <div class="ui-form-row">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Значения полей по умолчанию</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-form-row">
          <label class="ui-ctl ui-ctl-checkbox ui-ctl-w100">
            <input type="checkbox" class="ui-ctl-element">
            <div class="ui-ctl-label-text">
              заполнять поля в CRM автоматически при отправке формы
            </div>
          </label>
        </div>
        <div class="ui-form-row">
          <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
            <input type="text" class="ui-ctl-element" placeholder="Название">
          </div>
        </div>
        <div class="ui-form-row">
          <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
            <input type="text" placeholder="199" class="ui-ctl-element">
          </div>
          <a class="ui-form-link" href="">добавить поле</a>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form ui-form-section">
    <div class="ui-form-row ui-form-row-middle">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Значения полей по умолчанию</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-form-row">
          <label class="ui-ctl ui-ctl-checkbox ui-ctl-w100">
            <input type="checkbox" class="ui-ctl-element">
            <div class="ui-ctl-label-text">
              заполнять поля в CRM автоматически при отправке формы
            </div>
          </label>
        </div>
        <div class="ui-form-row">
          <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
            <input type="text" class="ui-ctl-element" placeholder="Название">
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form ui-form-section">
    <div class="ui-form-row ui-form-row-middle-input">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Свой CSS</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-form-row">
          <div class="ui-ctl ui-ctl-textbox">
            <input type="text" class="ui-ctl-element" placeholder="https://">
          </div>
          <a href="#" class="ui-form-link">подробнее</a>
        </div>
        <div class="ui-form-row">
          <div class="ui-form-label">
            <div class="ui-ctl-label-text">
              Текст CSS
              <span data-hint="Моя первая подсказка" data-hint-init="y" class="ui-hint">
                <span class="ui-hint-icon"></span>
              </span>
            </div>
          </div>
          <div class="ui-ctl ui-ctl-textarea">
            <textarea class="ui-ctl-element ui-ctl-resize-y"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form ui-form-section">
    <div class="ui-form-row ui-form-row-middle-input">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Свой CSS</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-form-row">
          <div class="ui-form-label">
            <div class="ui-ctl-label-text">Путь к CSS-файлу</div>
          </div>
          <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
            <input type="text" class="ui-ctl-element" placeholder="https://">
          </div>
        </div>
        <div class="ui-form-row-group">
          <div class="ui-form-row">
            <div class="ui-form-label">
              <div class="ui-ctl-label-text">
                Выберите опцию
                <span data-hint="Моя первая подсказка" data-hint-init="y" class="ui-hint">
                  <span class="ui-hint-icon"></span>
                </span>
              </div>
            </div>
            <div class="ui-ctl ui-ctl-after-icon ui-ctl-dropdown ui-ctl-w100">
              <div class="ui-ctl-after ui-ctl-icon-angle"></div>
              <select class="ui-ctl-element">
                <option value="">Опция #1</option>
              </select>
            </div>
          </div>
          <div class="ui-form-row-group">
            <div class="ui-form-row">
              <div class="ui-form-label">
                <div class="ui-ctl-label-text">
                  Еще одна вложенность
                  <span data-hint="Моя первая подсказка" data-hint-init="y" class="ui-hint">
                    <span class="ui-hint-icon"></span>
                  </span>
                </div>
              </div>
              <div class="ui-ctl ui-ctl-after-icon ui-ctl-dropdown ui-ctl-w100">
                <div class="ui-ctl-after ui-ctl-icon-angle"></div>
                <select class="ui-ctl-element">
                  <option value="">Опция #1</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form ui-form-section">
    <div class="ui-form-row">
      <div class="ui-form-label">
        <div class="ui-ctl-label-text">Метрика</div>
      </div>
      <div class="ui-form-content">
        <div class="ui-form-row">
          <div class="ui-form-label" data-form-row-hidden="">
            <label class="ui-ctl ui-ctl-checkbox">
              <input type="checkbox" class="ui-ctl-element">
              <div class="ui-ctl-label-text">Яндекс.Метрика</div>
            </label>
          </div>
          <div class="ui-form-row-hidden">
            <div class="ui-form-row">
              <div class="ui-ctl ui-ctl-textbox ui-ctl-w25">
                <input type="text" placeholder="Введите ID" class="ui-ctl-element">
              </div>
              <a href="#" class="ui-form-link">подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form">
    <div class="ui-form-row-inline">
      <div class="ui-form-row">
        <div class="ui-form-label">
          <div class="ui-ctl-label-text">Первое поле</div>
        </div>
        <div class="ui-form-content">
          <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
            <input type="text" class="ui-ctl-element" placeholder="1">
          </div>
        </div>
      </div>
      <div class="ui-form-row">
        <div class="ui-form-label">
          <div class="ui-ctl-label-text">Второе поле</div>
        </div>
        <div class="ui-form-content">
          <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
            <input type="text" class="ui-ctl-element" placeholder="2">
          </div>
        </div>
      </div>
      <div class="ui-form-row">
        <div class="ui-form-label">
          <div class="ui-ctl-label-text">Третье поле</div>
        </div>
        <div class="ui-form-content">
          <div class="ui-ctl ui-ctl-textbox ui-ctl-w100">
            <input type="text" class="ui-ctl-element" placeholder="3">
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="ui-form">
    <div class="ui-form-row-inline">
      <div class="ui-form-row">
        <div class="ui-form-label">
          <div class="ui-ctl-label-text">Дата и время начала</div>
        </div>
        <div class="ui-form-content">
          <div class="ui-ctl ui-ctl-after-icon ui-ctl-date">
            <div class="ui-ctl-after ui-ctl-icon-calendar"></div>
            <div class="ui-ctl-element">14.10.2014</div>
          </div>
          <div class="ui-ctl ui-ctl-after-icon ui-ctl-dropdown">
            <div class="ui-ctl-after ui-ctl-icon-angle"></div>
            <select class="ui-ctl-element">
              <option value="">12:00</option>
              <option value="">13:00</option>
              <option value="">14:00</option>
            </select>
          </div>
        </div>
      </div>
      <div class="ui-form-row">
        <div class="ui-form-label">
          <div class="ui-ctl-label-text">Длительность</div>
        </div>
        <div class="ui-form-content">
          <div class="ui-ctl ui-ctl-textbox">
            <input type="text" class="ui-ctl-element" placeholder="">
          </div>
          <div class="ui-ctl ui-ctl-after-icon ui-ctl-dropdown">
            <div class="ui-ctl-after ui-ctl-icon-angle"></div>
            <select class="ui-ctl-element">
              <option value="">часов</option>
              <option value="">минут</option>
            </select>
          </div>
        </div>
      </div>
      <div class="ui-form-row">
        <div class="ui-form-label">
          <div class="ui-ctl-label-text">Дата и время завершения</div>
        </div>
        <div class="ui-form-content">
          <div class="ui-ctl ui-ctl-after-icon ui-ctl-date">
            <div class="ui-ctl-after ui-ctl-icon-calendar"></div>
            <div class="ui-ctl-element">14.10.2019</div>
          </div>
          <div class="ui-ctl ui-ctl-after-icon ui-ctl-dropdown">
            <div class="ui-ctl-after ui-ctl-icon-angle"></div>
            <select class="ui-ctl-element">
              <option value="">12:00</option>
              <option value="">13:00</option>
              <option value="">14:00</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import injectStyles from '../mixins/injectStyles';

export default {
  mixins: [injectStyles],
};
</script>
