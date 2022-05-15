<template>
  <div class="row fn-md justify-center q-col-gutter-lg">
    <div class="col-3" v-for="(card, i) in content" :key="i">
      <q-card flat bordered class="border-round col-3 column items-stretch">
        <q-card-section>
          <div class="row col justify-center">
            <q-btn
              unelevated
              round
              class="text-white bg-primary q-my-md"
              size="20px"
              ><q-icon round color="white" :name="card.icon" size="30px"
            /></q-btn>
          </div>
          <h2 class="q-my-sm fn-md fn-800 text-center op-80">
            {{ card.name }}
          </h2>
          <p class="fn-sm text-center fn-600 op-60">{{ card.description }}</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const content = [
      {
        name: 'Easily Locate Shelters',
        icon: 'location_on',
        description:
          'Shelter Share provides an intuitive, interactive map for quick shelter location and information.',
      },

      {
        name: 'Track Your Contribution',
        icon: 'analytics',
        description:
          'Shelter Share provides a history of your donations to easily track your contribution.',
      },
      {
        name: 'Create a Positive Impact',
        icon: 'accessibility_new',
        description:
          'Shelter Share provides many different ways to comtribute to the community. Whether you are a donater or volunteer.',
      },
    ];
    return { content };
  },
});
</script>

<style lang="scss" scoped>
.infocards {
  display: flex;
  justify-content: space-evenly;
  .info-card {
    background-color: $secondary;
    max-width: 400px;
    h2 {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
}
</style>
