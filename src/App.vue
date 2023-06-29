<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    if (!this.$BX24) return;
    const RestCall = this.$BX24.createBatch();

    RestCall.batch({
      scope: ['scope'],
    }).then((response) => {
      if (response.scope.includes('user_brief')) {
        RestCall.batch({
          userCurrent: ['user.current'],
          users: ['user.get'],
        }).then(console.info);
      }
    });
  },
  inject: ['$BX24'],
  name: 'app',
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>
