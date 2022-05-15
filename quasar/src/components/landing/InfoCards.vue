<template>
  <div class="row infocards q-gutter-md">
    <q-card class="info-card">
      <q-card-section>
        <q-icon color="primary" name="location_on" size="2rem" />
        <h2>Easily Locate Shelters</h2>
        <p>
          Shelter Share provides an intuitive, interactive map for quick shelter
          location and information.
        </p>
      </q-card-section>
    </q-card>
    <q-card class="info-card">
      <q-card-section>
        <q-icon color="primary" name="accessibility_new" size="2rem" />
        <h2>Create a Positive Impact</h2>
        <p>
          Shelter Share provides many different ways to comtribute to the
          community. Whether you are a donater or volunteer.
        </p>
      </q-card-section>
    </q-card>
    <q-card class="info-card">
      <q-card-section>
        <q-icon color="primary" name="analytics" size="2rem" />
        <h2>Track Your Contribution</h2>
        <p>
          Shelter Share provides a history of your donations to easily track
          your contribution.
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

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
