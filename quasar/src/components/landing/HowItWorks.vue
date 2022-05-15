<template>
  <div class="how-it-works">
    <h2>How It Works</h2>
    <div class="cards q-gutter-lg">
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-img src="../../assets/Landing/shelter.jpg"></q-img>
          <h3 class="text-center">Shelters</h3>
          <p class="fn-md">
            Shelters are able to sign up and recieve notifications when users
            have incomming donations. Shelters can also supply a pick-up service
            if they have the resources avaiable.
          </p>
        </q-card-section>
      </q-card>
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-img src="../../assets/Landing/donate.jpg"></q-img>
          <h3 class="text-center">Donaters</h3>
          <p class="fn-md">
            Donaters can easily locate shelters they would like to donate to.
            Shelter Share provides easy to access information on shelters so
            donaters can make an informed decision.
          </p>
        </q-card-section>
      </q-card>
      <q-card class="card">
        <q-card-section class="section q-gutter-md">
          <q-img src="../../assets/Landing/volunteer.jpg"></q-img>
          <h3 class="text-center">Volunteers</h3>
          <p class="fn-md">
            Even if you currently do not have supplies you would like to donate,
            Shelter Share provides a why for you to still get involved. You can
            volunteer as a pick-up driver to deliver supplies from Donaters to
            the Shelters.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

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
      max-width: 400px;
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
