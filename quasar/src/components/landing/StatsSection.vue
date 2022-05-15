<template>
  <div class="row stats-section q-py-xl q-mb-xl">
    <p-card class="stats-card" v-for="(c, i) in content" :key="i">
      <p-card-section>
        <p class="fn-sm">{{ c.value }}</p>
        <h3 class="fn-md q-mt-sm fn-800">{{ c.name }}</h3>
      </p-card-section>
    </p-card>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const content = [
      { name: 'Shelters', value: 103 },
      { name: 'Volunteers', value: 456 },
      { name: 'Users', value: 1032 },
      { name: 'Donations', value: 2435 },
    ];
    return { content };
  },
});
</script>

<style lang="scss" scoped>
.stats-section {
  display: flex;
  justify-content: space-evenly;

  .stats-card {
    align-items: center;

    p {
      color: $primary;
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 0;
      text-align: center;
    }
    h3 {
      text-align: center;
    }
  }
}
</style>
