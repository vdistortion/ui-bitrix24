import type { IBitrix24Library } from 'bitrix24-library';
import './font.open-sans.css';

export const loadStyles = (BX24?: IBitrix24Library) => {
  const domain = BX24 ? BX24.getDomain() : 'www.bitrix24.ru';
  const root = `https://${domain}/bitrix/js`;
  const files = [
    'ui/design-tokens/dist/ui.design-tokens.min.css',
    'ui/alerts/ui.alerts.min.css',
    'ui/buttons/ui.buttons.min.css',
    'ui/buttons/icons/ui.buttons.icons.min.css',
    'ui/entity-selector/dist/entity-selector.bundle.min.css',
    'ui/forms/ui.forms.min.css',
    'ui/hint/ui.hint.min.css',
    'ui/icons/b24/ui.icons.b24.min.css',
    'ui/icons/base/ui.icons.base.min.css',
    'ui/icons/disk/ui.icons.disk.min.css',
    'ui/icons/service/ui.icons.service.min.css',
    'ui/layout-form/dist/layout-form.bundle.min.css',
    'ui/progressbar/ui.progressbar.min.css',
    'main/popup/dist/main.popup.bundle.min.css',
  ];
  const styles = files.reduce((Fragment, file) => {
    const href = [root, file].join('/');
    const links = document.querySelectorAll(`[href="${href}"]`);
    if (links.length) return Fragment;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    Fragment.append(link);
    return Fragment;
  }, new DocumentFragment());

  if (styles.children.length) document.head.append(styles);
};
