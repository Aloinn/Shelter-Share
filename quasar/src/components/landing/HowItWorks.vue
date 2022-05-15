<template>
  <div class="how-it-works">
    <h2>How It Works</h2>
    <div class="cards q-col-gutter-lg row items-stretch">
      <div class="col-4" v-for="(c, i) in content" :key="i">
        <q-card flat bordered class="card border-round">
          <q-card-section class="section q-gutter-md">
            <q-img :src="`${c.img}`" class="fit" />
            <h3 class="text-center fn-lg op-80">{{ c.name }}</h3>
            <p class="fn-md op-60 fn-400">{{ c.value }}</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const content = [
      {
        name: 'Shelters',
        value:
          'Shelters are able to sign up and recieve notifications when users have incoming donations. Shelters can also supply a pick-up service if they have the resources avaiable.',
        img: 'shelter.jpg',
      },
      {
        name: 'Donators',
        value:
          'Donaters can easily locate shelters they would like to donate to. Shelter Share provides easy to access information on shelters so donaters can make an informed decision.',
        img: 'donate.jpg',
      },
      {
        name: 'Volunteer',
        value:
          'Even if you currently do not have supplies but would still like to help out, Shelter Share provides a why for you to still get involved. You can volunteer as a pick-up driver to deliver supplies from Donaters to the Shelters.',
        img: 'volunteer.jpg',
      },
    ];
    return { content };
  },
});
</script>

<style lang="scss" scoped>
h3 {
  border-bottom: 2px solid $primary;
  width: 80%;
}
.how-it-works {
  background-color: $secondary;
  padding: 3rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .cards {
    display: flex;
    justify-content: space-evenly;

    .card {
      height: 690px;
      padding: 3rem 3rem;

      .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>
