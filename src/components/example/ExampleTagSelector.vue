<template>
  <example-table name="bx-tag-selector" :code="markup">
    <bx-tag-selector></bx-tag-selector>
  </example-table>
</template>

<script>
import ExampleTable from './Table.vue';
import BxTagSelector from '../BxTagSelector.vue';

export default {
  computed: {
    markup() {
      return `
<bx-tag-selector
></bx-tag-selector>
      `;
    },
  },
  components: {
    ExampleTable,
    BxTagSelector,
  },
  name: 'example-tag-selector',
};
</script>
