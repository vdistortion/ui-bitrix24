import { loadStyles } from '../utils/loadStyles';

export default {
  created() {
    loadStyles(this.$BX24);
  },
  inject: ['$BX24'],
};
