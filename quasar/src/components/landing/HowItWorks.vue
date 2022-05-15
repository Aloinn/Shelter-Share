<template>
  <div class="how-it-works">
    <h2>How It Works</h2>
    <div class="cards q-gutter-lg">
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-icon name="home_work" size="3rem" color="primary"></q-icon>
          <h3>Shelters</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dicta.
          </p>
        </q-card-section>
      </q-card>
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-icon name="handshake" size="3rem" color="primary"></q-icon>
          <h3>Donaters</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dicta.
          </p>
        </q-card-section>
      </q-card>
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-icon name="volunteer_activism" size="3rem" color="primary"></q-icon>
          <h3>Volunteers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            dicta.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
      max-width: 400px;
      padding: 8rem 3rem;
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
