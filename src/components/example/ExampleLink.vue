<template>
  <example-table name="bx-link" :code="markup">
    <bx-link
      :href="props.href"
    >
      <img v-if="slots.default === 'image'" src="../../assets/logo.png" alt="logo">
      <bx-icon v-else-if="slots.default === 'icon'"></bx-icon>
      <span v-else-if="slots.default === 'text'">Текст</span>
    </bx-link>
    <template #params>
      <label>
        slots.default
        <select v-model="slots.default">
          <option
            v-for="item in settings.slots"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.href
        <input type="text" v-model="props.href">
      </label>
    </template>
  </example-table>
</template>

<script>
import ExampleTable from './Table.vue';
import BxLink from '../BxLink.vue';
import BxIcon from '../BxIcon.vue';

export default {
  computed: {
    slot() {
      const tags = {
        image: '<img src="logo.png" alt="logo">',
        icon: '<bx-icon></bx-icon>',
        text: '<span>Текст</span>',
      };
      return tags[this.slots.default];
    },
    markup() {
      return `
<bx-link
  href="${this.props.href}"
>
  ${this.slot}
</bx-link>
      `;
    },
  },
  data() {
    return {
      slots: {
        default: 'image',
      },
      props: {
        href: '/marketplace/',
      },
      settings: {
        slots: [
          'image',
          'icon',
          'text',
        ],
      },
    };
  },
  components: {
    ExampleTable,
    BxLink,
    BxIcon,
  },
  name: 'example-link',
};
</script>
