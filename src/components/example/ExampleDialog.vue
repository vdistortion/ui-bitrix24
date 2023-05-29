<template>
  <example-table name="bx-dialog" :code="markup">
    <bx-dialog></bx-dialog>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleTable from './Table.vue';
import BxDialog from '../BxDialog.vue';

export default defineComponent({
  computed: {
    markup() {
      return `
<bx-dialog
></bx-dialog>
      `;
    },
  },
  components: {
    ExampleTable,
    BxDialog,
  },
  name: 'example-dialog',
});
</script>
