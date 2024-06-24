<template>
  <h2>{{ text }}</h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FreesideH2 extends Vue {
  @Prop() private text!: string;
}
</script>

<style scoped lang="scss">
h2 {
  color: var(--color-secondary);
  font-weight: 500;
  line-height: 1.3em;
  margin: 2em 0;
}
</style>
