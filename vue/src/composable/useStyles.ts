import { useBitrix24 } from './useBitrix24';
import { loadStyles } from '@/utils/loadStyles';

export function useStyles() {
  const { BX24 } = useBitrix24();
  loadStyles(BX24);
}
