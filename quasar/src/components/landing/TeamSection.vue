<template>
  <div class="how-it-works">
    <h2>The Team</h2>
    <div class="cards q-gutter-lg">
      <div class="col" v-for="(c, i) in content" :key="i">
        <q-card flat bordered class="card border-round">
          <q-card-section class="section q-gutter-md">
            <div class="border-round bg-grey" width="200px">
              <q-img
                class="border-round bg-red"
                width="200px"
                :src="c.img"
              ></q-img>
            </div>
            <div class="text-center fn-md fn-800">{{ c.name }}</div>
            <q-chip
              class="fn-sm bg-primary text-white text-center fn-600 op-60"
              >{{ c.role }}</q-chip
            >
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const content = [
      {
        name: 'Samee Chowdhury',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQHHyzladehUbQ/profile-displayphoto-shrink_400_400/0/1608144424986?e=1658361600&v=beta&t=CTHa7J-DV91XceuMHYykvXmtMSbfRGCIXPYagWfjqEs',
        role: 'Backend',
      },
      {
        name: 'Alain Nguyen',
        img: 'https://media-exp1.licdn.com/dms/image/C5603AQG0rF56ZKDpBQ/profile-displayphoto-shrink_400_400/0/1650319939694?e=1658361600&v=beta&t=uCKfbfljdec7Q3onN9MK3Ff6ZZUTR8tr2dOW1JhBlHc',
        role: 'Backend',
      },
      {
        name: 'Richard Marquez',
        img: 'https://media-exp1.licdn.com/dms/image/C4D03AQGCaS4lhTI9wQ/profile-displayphoto-shrink_400_400/0/1581739641178?e=1658361600&v=beta&t=V_JBU0dhNg9p0COzCHLmFmvtTBUAaf-025lFy4ANwwI',
        role: 'Frontend',
      },
      {
        name: 'Dylan Le',
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQGFExo_0FUEyA/profile-displayphoto-shrink_400_400/0/1631143569773?e=1658361600&v=beta&t=7xQYIQvXVXRBi7gNP50RmY79iTmHRwMr6oeop-pIzdM',
        role: 'Front-end and UI',
      },
    ];
    return { content };
  },
});
</script>

<style lang="scss" scoped>
h3 {
  border-bottom: 2px solid $primary;
  width: 100%;
}
.how-it-works {
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
      max-width: 400px;
      padding: 3rem;
      .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
