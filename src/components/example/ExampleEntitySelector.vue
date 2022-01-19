<template>
  <example-table name="bx-entity-selector" :code="markup">
    <div style="flex-grow: 1">
      <bx-entity-selector
        :list="props.list"
        :display-field="props.displayField"
        :multiple="props.multiple"
        :clickable="props.clickable"
        :inline="props.inline"
        @click="onClick"
        @auxclick="onMiddleClick"
        @delete="onDelete"
        @add="onAdd"
      ></bx-entity-selector>
    </div>
    <template #params>
      <label>
        props.displayField
        <select v-model="props.displayField">
          <option
            v-for="item in settings.fields"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        <input type="checkbox" v-model="props.clickable">
        props.clickable
      </label>
      <label>
        <input type="checkbox" v-model="props.multiple">
        props.multiple
      </label>
      <label>
        <input type="checkbox" v-model="props.inline">
        props.inline
      </label>
    </template>
  </example-table>
</template>

<script>
import ExampleTable from './Table.vue';
import BxEntitySelector from '../BxEntitySelector.vue';

export default {
  methods: {
    onClick(index, item) {
      console.log('click', index, item);
      this.$BX24.openLink(`/company/personal/user/${item.id}/`);
    },
    onMiddleClick(index, item) {
      console.log('mdlclick', index, item);
      window.open(`${this.$BX24.getDomain(true)}/company/personal/user/${item.id}/`, '_blank');
    },
    onDelete(index, item) {
      console.log('delete', index, item);
      this.props.list.splice(index, 1);
    },
    onAdd() {
      console.log('add');

      if (this.props.multiple) {
        this.$BX24.selectUsers().then((users) => {
          this.props.list.push(...users);
        });
      } else {
        this.$BX24.selectUser().then((user) => {
          this.props.list = [user];
        });
      }
    },
  },
  computed: {
    markup() {
      return `
<bx-entity-selector
  :list="[]"
  display-field="${this.props.displayField}"
  :multiple="${this.props.multiple}"
  :clickable="${this.props.clickable}"
  :inline="${this.props.inline}"
  @click="onClick(index, item)"
  @auxclick="onMiddleClick(index, item)"
  @delete="onDelete(index, item)"
  @add="onAdd"
></bx-entity-selector>
      `;
    },
  },
  data() {
    return {
      props: {
        list: [],
        displayField: 'name',
        multiple: false,
        clickable: false,
        inline: false,
      },
      settings: {
        fields: ['id', 'name', 'position'],
      },
    };
  },
  inject: ['$BX24'],
  components: {
    ExampleTable,
    BxEntitySelector,
  },
  name: 'example-entity-selector',
};
</script>
