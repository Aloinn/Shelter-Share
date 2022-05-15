<template>
  <q-page>
    <div class="text-h6 text-center">Overview Page</div>

    <div class="row justify-center">
      <div class="col">
        <shelter-list />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ShelterList from 'src/components/ShelterList.vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: { ShelterList },
});
</script>

<style lang="scss" scoped></style>
