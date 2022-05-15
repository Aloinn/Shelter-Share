<template>
  <div class="how-it-works">
    <h2>The Team</h2>
    <div class="cards q-gutter-lg">
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-img
            class="rounded-borders"
            width="200px"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHHyzladehUbQ/profile-displayphoto-shrink_400_400/0/1608144424986?e=1658361600&v=beta&t=CTHa7J-DV91XceuMHYykvXmtMSbfRGCIXPYagWfjqEs"
          ></q-img>
          <h3>Samee Chowdhury</h3>
        </q-card-section>
      </q-card>
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-img
            class="rounded-borders"
            width="200px"
            src="https://media-exp1.licdn.com/dms/image/C5603AQG0rF56ZKDpBQ/profile-displayphoto-shrink_400_400/0/1650319939694?e=1658361600&v=beta&t=uCKfbfljdec7Q3onN9MK3Ff6ZZUTR8tr2dOW1JhBlHc"
          ></q-img>
          <h3>Alain Nguyen</h3>
        </q-card-section>
      </q-card>
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-img
            class="rounded-borders"
            width="200px"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGCaS4lhTI9wQ/profile-displayphoto-shrink_400_400/0/1581739641178?e=1658361600&v=beta&t=V_JBU0dhNg9p0COzCHLmFmvtTBUAaf-025lFy4ANwwI"
          ></q-img>
          <h3>Richard Marquez</h3>
        </q-card-section>
      </q-card>
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-img
            class="rounded-borders"
            width="200px"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGFExo_0FUEyA/profile-displayphoto-shrink_400_400/0/1631143569773?e=1658361600&v=beta&t=7xQYIQvXVXRBi7gNP50RmY79iTmHRwMr6oeop-pIzdM"
          ></q-img>
          <h3>Dylan Le</h3>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
        h3 {
          color: $text-light;
        }
      }
    }
  }
}
</style>
