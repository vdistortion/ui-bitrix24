import { inject } from 'vue';
import type { IBitrix24Library } from 'bitrix24-library';

export function useBitrix24() {
  const BX24 = inject<IBitrix24Library>('$BX24');
  return { BX24 };
}
