<template>
  <form class="bitrix-form" @submit.prevent="onSubmit">
    <slot></slot>
    <div class="bitrix-form__submit">
      <bx-button-wrapper>
        <bx-button
          color="success"
          type="submit"
          icon="task"
          :loader="loading ? 'clock' : ''"
        >{{ submitName }}</bx-button>
        <slot name="buttons"></slot>
      </bx-button-wrapper>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.loading = true;
      this.$emit('submit', () => {
        this.loading = false;
      });
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  props: {
    submitName: {
      type: String,
      required: true,
    },
  },
  name: 'bitrix-form',
};
</script>

<style lang="stylus">
.bitrix-form
  &__submit
    margin-top 20px
</style>
