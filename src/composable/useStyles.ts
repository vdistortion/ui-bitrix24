import { inject } from 'vue';
import type { IBitrix24Library } from 'bitrix24-library';
import { loadStyles } from '../utils/loadStyles';

export function useStyles(key = '$BX24') {
  const BX24: IBitrix24Library | undefined = inject(key);
  loadStyles(BX24);
}
